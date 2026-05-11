#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

PYTHON_BIN="${PYTHON_BIN:-python3}"
INSTALL_DESKTOP_SHORTCUT="${INSTALL_DESKTOP_SHORTCUT:-1}"
DESKTOP_DIR="${HOME}/Desktop"
SHORTCUT_PATH="${DESKTOP_DIR}/Weekaroo.desktop"

require_cmd() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Error: required command '$1' is not installed." >&2
    exit 1
  fi
}

require_cmd "$PYTHON_BIN"
require_cmd chmod
require_cmd cp
require_cmd mkdir

copy_if_missing() {
  local example_file="$1"
  local live_file="$2"
  if [ ! -f "$live_file" ] && [ -f "$example_file" ]; then
    cp "$example_file" "$live_file"
    echo "Created $live_file from $(basename "$example_file")"
  fi
}

copy_if_missing "calendars.example.json" "calendars.json"
copy_if_missing "family-messages.example.json" "family-messages.json"
copy_if_missing "countdowns.example.json" "countdowns.json"

chmod +x run-dashboard.sh
chmod +x install.sh

if [ "$INSTALL_DESKTOP_SHORTCUT" = "1" ]; then
  mkdir -p "$DESKTOP_DIR"
  cat > "$SHORTCUT_PATH" <<EOF
[Desktop Entry]
Version=1.0
Type=Application
Name=Weekaroo
Comment=Launch Weekaroo family dashboard
Exec=${SCRIPT_DIR}/run-dashboard.sh
Path=${SCRIPT_DIR}
Terminal=false
Categories=Utility;
EOF
  chmod +x "$SHORTCUT_PATH"
  echo "Installed desktop shortcut at $SHORTCUT_PATH"
fi

echo "Install complete."
echo "Run with: ${SCRIPT_DIR}/run-dashboard.sh"
