# Weekaroo

[![Smoke check](https://github.com/Fins1600/weekaroo/actions/workflows/smoke.yml/badge.svg)](https://github.com/Fins1600/weekaroo/actions/workflows/smoke.yml)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

A self-hosted wall dashboard for families, roommates, classrooms, and small teams.

Weekaroo shows a weekly calendar, local weather, rotating notes, timers, countdowns, daily facts, and optional AI-generated dashboard messages. It is designed for a spare laptop, Raspberry Pi, kitchen display, wall tablet, or local network screen.

If you are comparing MagicMirror, DAKboard, a shared calendar screen, or a DIY Raspberry Pi kiosk, Weekaroo is the local-first option meant to be simple to run and easy to tweak.

Screenshots from synthetic demo data:

<img width="1913" height="942" alt="Weekaroo demo dashboard with weekly calendar, weather, notes, and countdowns" src="https://github.com/user-attachments/assets/3bf4ebe8-d2f7-4342-87d9-d0bfa60156d3" />

<img width="1913" height="942" alt="Weekaroo demo settings screen for local dashboard configuration" src="https://github.com/user-attachments/assets/775dab2d-514f-41ed-ad69-7e4da8ef08b8" />

<img width="1913" height="942" alt="Weekaroo demo weather settings with synthetic local weather data" src="https://github.com/user-attachments/assets/e79fb1f8-b7ca-4a2d-a811-11728fab236c" />


## Who this is for

Weekaroo is a good fit if you want:

- A kitchen, hallway, classroom, or roommate dashboard that runs on hardware you control
- ICS calendars, weather, notes, timers, and countdowns in one glanceable screen
- Local config files instead of another hosted account/subscription
- Something simpler to customize than a full MagicMirror setup

It may be overkill if you only need a shared Google Calendar, or if you want a hosted dashboard with mobile apps and cloud sync.

## Quick start

```bash
git clone https://github.com/Fins1600/weekaroo.git
cd weekaroo
chmod +x install.sh run-dashboard.sh run-demo.sh
./install.sh
./run-dashboard.sh
```

Then open:

```text
http://127.0.0.1:4020
```

By default, `install.sh` creates a local desktop shortcut. On a Raspberry Pi, server, or headless machine, skip that with:

```bash
INSTALL_DESKTOP_SHORTCUT=0 ./install.sh
```

For a wall display or Raspberry Pi setup, see [`docs/RASPBERRY_PI_KIOSK.md`](docs/RASPBERRY_PI_KIOSK.md).

## Try the demo data

```bash
./run-demo.sh
```

This uses synthetic calendars, messages, timers, countdowns, and weather config so you can evaluate Weekaroo without connecting personal data. The demo command copies demo files to the local ignored config names, then starts the dashboard.

## Features

- 7-day calendar view from one or more ICS calendar feeds
- Local weather by ZIP/postal code, plus optional WeatherFlow Tempest support
- Rotating family messages and event-matched message rules
- Countdowns and count-up timers with themed popups
- Day notes for quick reminders
- Optional OpenAI-compatible AI message generation, server-side only
- Local-first configuration, no account required

## Configure calendars

Weekaroo includes a US Holidays calendar by default, so a fresh install shows useful events without setup.

Add your own ICS feed URLs from Settings → Calendars, or create `calendars.json` manually. Example:

```json
[
  {
    "id": "us-holidays",
    "name": "US Holidays",
    "url": "https://www.officeholidays.com/ics/usa",
    "color": "#f59e0b",
    "enabled": true
  },
  {
    "id": "family",
    "name": "Family",
    "url": "https://calendar.example.com/family.ics",
    "color": "#7dd3c7",
    "enabled": true
  }
]
```

## Configure messages, timers, and day notes

```bash
cp family-messages.example.json family-messages.json
cp countdowns.example.json countdowns.json
cp day-notes.example.json day-notes.json
```

Timers and day notes can also be edited from the dashboard settings UI.

## Weather

By default, Weekaroo uses public weather by ZIP/postal code. Weather settings can be edited in the dashboard settings UI.

For WeatherFlow Tempest, enter your station ID and token in Settings → Weather. The token is stored server-side in `weather-config.json`, which is ignored by git.

## Optional AI messages

Settings → AI supports OpenRouter or another OpenAI-compatible endpoint.

Recommended secret handling:

```bash
export OPENROUTER_API_KEY="your-key"
# or
export DASHBOARD_AI_API_KEY="your-key"
```

You may also save the key in `ai-config.json`, but never commit that file.

## LAN access

The server listens on port `4020` so other devices on your home network can view the dashboard:

```text
http://<dashboard-computer-ip>:4020
```

Do not expose port `4020` directly to the public internet unless you put proper authentication and HTTPS in front of it.

## Privacy model

Weekaroo is intended to run on your own machine or LAN. Calendar URLs, weather tokens, AI API keys, and notes live in local config files ignored by git. See [`PRIVACY.md`](PRIVACY.md) for the full checklist before publishing screenshots or configs.

Do not publish these files:

- `calendars.json`
- `family-messages.json`
- `countdowns.json`
- `timers.json`
- `weather-config.json`
- `ai-config.json`
- `weather-history.json`
- `day-notes.json`

API keys are never returned to the browser by the built-in settings endpoints.

## How it compares

- **MagicMirror:** more mature and modular; Weekaroo aims to be less module-wrangly for a family calendar wall.
- **DAKboard and hosted dashboards:** easier hosted setup; Weekaroo keeps config local and does not require a dashboard subscription.
- **Plain shared calendar:** simpler; Weekaroo starts making sense when you want calendar + weather + notes + timers + countdowns on one always-on screen.

## Development

Run directly:

```bash
python3 server.py
```

Smoke check:

```bash
python3 check_server.py
```

Public release audit:

```bash
scripts/audit-public.sh
```

## License

Weekaroo is released under the MIT License. See [`LICENSE`](LICENSE).
