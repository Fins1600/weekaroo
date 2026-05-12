# Weekaroo v0.1.0: local-first wall dashboard for the week ahead

Weekaroo is a self-hosted wall dashboard for families, roommates, classrooms, and small teams. It shows ICS calendars, local weather, notes, timers, countdowns, daily facts, and optional AI-generated dashboard messages on a screen you control.

This first public release is aimed at people building a kitchen display, hallway calendar, classroom board, roommate dashboard, or Raspberry Pi kiosk.

![Weekaroo demo dashboard](https://github.com/user-attachments/assets/3bf4ebe8-d2f7-4342-87d9-d0bfa60156d3)

## Highlights

- 7-day calendar view from one or more ICS feeds
- Local weather by ZIP/postal code, with optional WeatherFlow Tempest support
- Notes, timers, countdowns, rotating messages, and day notes
- Synthetic demo data via `./run-demo.sh`
- Raspberry Pi and Linux kiosk setup guide
- Local-first config, no account required
- MIT licensed

## Try the demo data

```bash
git clone https://github.com/Fins1600/weekaroo.git
cd weekaroo
chmod +x install.sh run-dashboard.sh run-demo.sh
./run-demo.sh
```

Then open:

```text
http://127.0.0.1:4020
```

## Privacy note

Weekaroo is intended to run on your own machine or LAN. Calendar URLs, weather tokens, AI API keys, notes, and local history live in local config files ignored by git.

Do not expose port `4020` directly to the public internet unless you put proper authentication and HTTPS in front of it.

## Docs

- Repo: https://github.com/Fins1600/weekaroo
- Wiki: https://github.com/Fins1600/weekaroo/wiki
- Raspberry Pi and Linux kiosk setup: https://github.com/Fins1600/weekaroo/blob/main/docs/RASPBERRY_PI_KIOSK.md
- Privacy checklist: https://github.com/Fins1600/weekaroo/blob/main/PRIVACY.md

Weekaroo is early. Feedback on setup friction, Raspberry Pi kiosk docs, screenshots, and calendar/weather edge cases is especially useful.
