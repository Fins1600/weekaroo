#!/usr/bin/env bash
set -euo pipefail

cp demo/calendars.demo.json calendars.json
cp demo/family-messages.demo.json family-messages.json
cp demo/countdowns.demo.json countdowns.json
cp demo/timers.demo.json timers.json
cp demo/weather-config.demo.json weather-config.json
OPEN_BROWSER="${OPEN_BROWSER:-1}" ./run-dashboard.sh
