#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

printf 'Running Python syntax check...\n'
python3 -m py_compile server.py check_server.py
rm -rf __pycache__

printf 'Running smoke check...\n'
python3 check_server.py
rm -rf __pycache__

printf 'Checking for files that should not be published...\n'
for file in \
  calendars.json \
  family-messages.json \
  countdowns.json \
  timers.json \
  weather-config.json \
  ai-config.json \
  weather-history.json \
  day-notes.json \
  family-dashboard.desktop \
  family-message.txt \
  server.log
 do
  if [[ -e "$file" ]]; then
    echo "Private/generated file present: $file" >&2
    exit 1
  fi
 done

printf 'Scanning for common private strings and secret patterns...\n'
if grep -RInE 'Coughlin|Citation|jpcoughlin|(^|[^[:alnum:]_])sk-[A-Za-z0-9_-]+|(^|[^[:alnum:]_])sk-or-[A-Za-z0-9_-]+|Bearer [A-Za-z0-9._-]+|"apiKey"[[:space:]]*:[[:space:]]*"[^"]+"|"token"[[:space:]]*:[[:space:]]*"[A-Za-z0-9_-]{8,}"' . \
  --exclude-dir=.git \
  --exclude-dir=__pycache__ \
  --exclude='audit-public.sh'; then
  echo 'Review the hits above before publishing.' >&2
  exit 1
fi

printf 'Public audit passed.\n'
