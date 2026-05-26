# Weekaroo comparison and positioning

Weekaroo is a local-first wall dashboard for the week ahead. It is aimed at people who want a kitchen screen, hallway calendar, classroom board, roommate display, or small-team status screen without adding another hosted dashboard account.

This page is intentionally high-level. MagicMirror, DAKboard, shared calendars, and hosted dashboard tools are all useful in different situations. Weekaroo is the option for the specific shape of problem where local control, simple setup, and family/week-at-a-glance context matter most.

## Quick comparison

| Option | Best fit | Tradeoff |
| --- | --- | --- |
| **Weekaroo** | Local-first calendar/weather/notes wall display that runs on your hardware | Early project, fewer integrations than mature ecosystems |
| **MagicMirror** | Highly customizable modular smart mirror or dashboard builds | More module and configuration wrangling |
| **DAKboard / hosted boards** | Polished cloud-hosted display setup and managed account experience | Subscription/cloud dependency, less local ownership |
| **Shared calendar only** | A simple phone, web, or tablet calendar view | Less useful when you also want weather, notes, timers, countdowns, and rotating messages |
| **Custom DIY page** | Fully bespoke dashboard for one environment | More maintenance burden over time |

## Where Weekaroo fits

Weekaroo makes sense when the display is less about a smart mirror and more about a calm household or team operations board:

- What is happening this week?
- What is the weather doing?
- What reminders, notes, or countdowns matter today?
- Can the screen run on a spare laptop, Raspberry Pi, mini PC, or wall tablet?
- Can it work without sending private calendar URLs and notes to a new dashboard service?

## Weekaroo vs MagicMirror

MagicMirror is mature, flexible, and has a broad module ecosystem. It is a strong choice for people who want to assemble a dashboard from many community modules.

Weekaroo takes a narrower path:

- Built around a 7-day calendar-first layout
- Includes weather, notes, timers, countdowns, and messages without hunting for modules
- Uses local JSON config files and a small Python server
- Includes synthetic demo data for safe evaluation and screenshots
- Designed for a kitchen screen or wall display, not only a mirror-style build

The short version: MagicMirror is more modular; Weekaroo is more opinionated.

## Weekaroo vs DAKboard and hosted dashboards

Hosted dashboards can be polished and convenient. They are often the fastest path when cloud sync, account management, mobile apps, templates, and hosted reliability matter most.

Weekaroo is different by design:

- Runs on your machine or LAN
- Stores config locally
- Requires no Weekaroo account
- Avoids dashboard subscription lock-in
- Keeps calendar feeds, notes, weather settings, and optional AI keys under your control

The short version: hosted boards optimize managed convenience; Weekaroo optimizes local ownership.

## Weekaroo vs a plain shared calendar

A shared calendar is the simplest answer when all you need is calendar events.

Weekaroo starts to help when the screen is meant to be a glanceable daily hub:

- Multiple ICS calendars in one 7-day view
- Local weather
- Day notes and rotating messages
- Timers and countdowns
- Daily facts and observances
- Optional AI-generated dashboard messages

The short version: a shared calendar shows events; Weekaroo turns the wall screen into a broader weekly context board.

## Privacy posture

Weekaroo is not a hosted service. It is intended to run locally, with private files ignored by git:

- `calendars.json`
- `family-messages.json`
- `countdowns.json`
- `timers.json`
- `weather-config.json`
- `ai-config.json`
- `weather-history.json`
- `day-notes.json`

Do not expose the built-in server directly to the public internet. If remote access is needed, put authentication and HTTPS in front of it.

## Demo-first evaluation

Weekaroo includes synthetic demo data so the project can be evaluated without connecting a personal calendar or publishing private screenshots:

```bash
./run-demo.sh
```

Then open:

```text
http://127.0.0.1:4020
```

Use demo data for public screenshots, release posts, and issue reports whenever possible.

## One-line positioning

Weekaroo is the local-first alternative for people who want a weekly calendar, weather, notes, timers, and countdowns on an always-on wall screen they control.
