#!/usr/bin/env python3
import contextlib
import json
import os
import socket
import subprocess
import sys
import time
import urllib.error
import urllib.request


def find_free_port():
    with contextlib.closing(socket.socket(socket.AF_INET, socket.SOCK_STREAM)) as sock:
        sock.bind(("127.0.0.1", 0))
        return sock.getsockname()[1]


def wait_for_server(url, timeout=10):
    deadline = time.time() + timeout
    last_error = None
    while time.time() < deadline:
        try:
            with urllib.request.urlopen(url, timeout=1) as response:
                return response.status
        except Exception as exc:
            last_error = exc
            time.sleep(0.25)
    raise RuntimeError(f"Server did not become ready: {last_error}")


def fetch_json(url, timeout=20):
    with urllib.request.urlopen(url, timeout=timeout) as response:
        return response.status, json.load(response)


def main():
    port = int(os.environ.get("PORT") or find_free_port())
    base_url = f"http://127.0.0.1:{port}"
    env = os.environ.copy()
    env["PORT"] = str(port)

    process = subprocess.Popen(
        [sys.executable, "server.py"],
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        env=env,
    )
    try:
        root_status = wait_for_server(base_url)
        print("root", root_status)
        status, data = fetch_json(f"{base_url}/calendar-data")
        print("calendar-data", status)
        if not isinstance(data, list):
            raise AssertionError("calendar-data should return a list")
        print("feeds", len(data))

        status, sources = fetch_json(f"{base_url}/calendar-sources")
        print("calendar-sources", status)
        if not isinstance(sources, list):
            raise AssertionError("calendar-sources should return a list")

        status, weather_config = fetch_json(f"{base_url}/weather-config")
        print("weather-config", status, weather_config.get("mode"))
        if weather_config.get("mode") not in {"public", "tempest"}:
            raise AssertionError("weather-config should include a supported mode")
    finally:
        process.terminate()
        try:
            process.wait(timeout=5)
        except subprocess.TimeoutExpired:
            process.kill()


if __name__ == "__main__":
    main()
