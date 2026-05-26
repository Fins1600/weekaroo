# Kitchen screen / Raspberry Pi launch draft

This is a safe public draft for Reddit, Hacker News-style project threads, GitHub Discussions, community forums, or a blog post. Adapt the opening sentence to the specific community and disclose that this is the project maintainer/author posting.

## Long-form post

**Title options**

- I built Weekaroo, a local-first wall dashboard for kitchen screens and Raspberry Pi kiosks
- Weekaroo: a self-hosted weekly calendar, weather, notes, timers, and countdowns display
- Local-first family dashboard for a spare screen or Raspberry Pi

**Post body**

I built Weekaroo because I wanted a simple wall screen for the week ahead without signing up for another hosted dashboard service.

It is a self-hosted dashboard for a kitchen display, hallway screen, classroom board, roommate dashboard, or Raspberry Pi kiosk. It shows:

- A 7-day view from one or more ICS calendar feeds
- Local weather
- Rotating notes and dashboard messages
- Timers and countdowns
- Day notes, daily facts, observances, and small bits of context
- Optional AI-generated dashboard messages, with the key handled server-side

The main design goal is local ownership. Weekaroo runs on your own machine or LAN, stores config in local files, and does not require a Weekaroo account. Calendar URLs, weather tokens, notes, AI keys, and local history are all intended to stay in ignored local config files.

It is early, but the first public release includes demo data so people can try it without connecting anything private:

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

For a Raspberry Pi or Linux kiosk, the basic flow is:

```bash
INSTALL_DESKTOP_SHORTCUT=0 ./install.sh
OPEN_BROWSER=0 ./run-dashboard.sh
chromium-browser --kiosk --app=http://127.0.0.1:4020
```

Repo/release:
https://github.com/Fins1600/weekaroo/releases/tag/v0.1.0

Docs:
https://github.com/Fins1600/weekaroo/blob/main/docs/RASPBERRY_PI_KIOSK.md

I am especially interested in setup friction, Raspberry Pi kiosk rough edges, calendar/weather edge cases, and whether the default layout works for real kitchen-screen use.

## Shorter Reddit/community version

I built Weekaroo, a local-first wall dashboard for the week ahead. It is meant for kitchen displays, hallway screens, classrooms, roommate boards, and Raspberry Pi kiosks.

It shows ICS calendars, local weather, notes, timers, countdowns, daily context, and optional AI-generated dashboard messages. The core idea is: run it on your own hardware, keep config local, no dashboard account required.

Demo mode uses synthetic data, so it can be tried without connecting anything private:

```bash
git clone https://github.com/Fins1600/weekaroo.git
cd weekaroo
chmod +x install.sh run-dashboard.sh run-demo.sh
./run-demo.sh
```

Repo/release: https://github.com/Fins1600/weekaroo/releases/tag/v0.1.0

Raspberry Pi kiosk docs: https://github.com/Fins1600/weekaroo/blob/main/docs/RASPBERRY_PI_KIOSK.md

Feedback on setup friction, kiosk docs, and calendar/weather edge cases would be genuinely useful.

## Contextual reply version

If you are looking for a local calendar/weather screen, I built Weekaroo for that exact use case. It runs on your own machine, supports ICS calendars, includes weather/notes/timers/countdowns, and has a synthetic demo mode so you can try it without connecting private data.

Release: https://github.com/Fins1600/weekaroo/releases/tag/v0.1.0

Raspberry Pi/kiosk docs: https://github.com/Fins1600/weekaroo/blob/main/docs/RASPBERRY_PI_KIOSK.md

## Image attachment

Use `docs/images/weekaroo-social-card.png` for standalone posts when images are welcome.

For replies or communities that dislike promotional images, skip the image and keep the reply specific to the thread.

## Safety checklist before posting

- Confirm the community allows project/show-and-tell posts.
- Disclose maintainer/author relationship plainly.
- Use only synthetic screenshots or the existing reviewed social card.
- Do not include private calendar URLs, ZIP-specific personal context, tokens, family names, or private dashboard screenshots.
- Keep feedback asks narrow and concrete.
