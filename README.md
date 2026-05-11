# Weekaroo

A self-hosted wall dashboard for families, roommates, classrooms, and small teams.

Weekaroo shows a weekly calendar, local weather, rotating notes, timers, countdowns, daily facts, and optional AI-generated dashboard messages. It is designed for a spare laptop, Raspberry Pi, kitchen display, wall tablet, or local network screen.

## Features

- 7-day calendar view from one or more ICS calendar feeds
- Local weather by ZIP/postal code, plus optional WeatherFlow Tempest support
- Rotating family messages and event-matched message rules
- Countdowns and count-up timers with themed popups
- Day notes for quick reminders
- Optional OpenAI-compatible AI message generation, server-side only
- Local-first configuration, no account required

## Privacy model

Weekaroo is intended to run on your own machine or LAN. Your private calendar URLs, weather station tokens, and AI API keys belong in local config files that are ignored by git.

Do not publish these files:

- `calendars.json`
- `family-messages.json`
- `countdowns.json`
- `timers.json`
- `weather-config.json`
- `ai-config.json`
- `weather-history.json`
- `day-notes.json` if it contains private notes

API keys are never returned to the browser by the built-in settings endpoints.

## Quick start

```bash
git clone <repo-url>
cd weekaroo
chmod +x install.sh run-dashboard.sh
./install.sh
./run-dashboard.sh
```

Then open:

```text
http://127.0.0.1:4020
```

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

## Configure messages and timers

```bash
cp family-messages.example.json family-messages.json
cp countdowns.example.json countdowns.json
```

Timers can also be edited from the dashboard settings UI.

## Demo data

Synthetic demo config lives in [`demo/`](demo/). Use it for screenshots, walkthroughs, and public examples:

```bash
cp demo/calendars.demo.json calendars.json
cp demo/family-messages.demo.json family-messages.json
cp demo/countdowns.demo.json countdowns.json
cp demo/timers.demo.json timers.json
cp demo/weather-config.demo.json weather-config.json
```

See [`docs/SCREENSHOTS.md`](docs/SCREENSHOTS.md) before publishing screenshots.

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
