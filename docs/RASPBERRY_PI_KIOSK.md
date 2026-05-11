# Raspberry Pi / Linux kiosk setup

Weekaroo works well as a local wall display on a Raspberry Pi, mini PC, spare laptop, or Linux kiosk machine.

## Basic run

```bash
git clone https://github.com/Fins1600/weekaroo.git
cd weekaroo
chmod +x install.sh run-dashboard.sh run-demo.sh
INSTALL_DESKTOP_SHORTCUT=0 ./install.sh
OPEN_BROWSER=0 ./run-dashboard.sh
```

Open Chromium to:

```text
http://127.0.0.1:4020
```

## Chromium kiosk command

```bash
chromium-browser --kiosk --app=http://127.0.0.1:4020
```

On some distributions the executable is named `chromium` instead:

```bash
chromium --kiosk --app=http://127.0.0.1:4020
```

## LAN viewing

From another device on the same network:

```text
http://<raspberry-pi-ip>:4020
```

Do not expose port `4020` directly to the internet. If you need remote access, put authentication and HTTPS in front of it.

## Demo mode

To evaluate the dashboard without personal data:

```bash
OPEN_BROWSER=0 ./run-demo.sh
```

Then open the same local or LAN URL above.
