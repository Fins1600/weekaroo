#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

PORT="${PORT:-4020}"
URL="http://127.0.0.1:${PORT}"
PYTHON_BIN="${PYTHON_BIN:-python3}"
OPEN_BROWSER="${OPEN_BROWSER:-1}"

if ! command -v "$PYTHON_BIN" >/dev/null 2>&1; then
  echo "Error: $PYTHON_BIN is not installed." >&2
  exit 1
fi

if lsof -tiTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
  echo "Dashboard already appears to be running on port $PORT"
else
  PORT="$PORT" nohup "$PYTHON_BIN" server.py >/tmp/weekaroo.log 2>&1 &
  sleep 2
fi

if [ "$OPEN_BROWSER" = "1" ]; then
  if command -v xdg-open >/dev/null 2>&1; then
    xdg-open "$URL" >/dev/null 2>&1 || true
  fi
fi

echo "Weekaroo available at $URL"
