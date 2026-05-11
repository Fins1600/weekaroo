# GitHub Release Checklist

## Completed repository setup

- [x] Created GitHub repository named `weekaroo`.
- [x] Set description: `A local-first family dashboard for calendars, weather, notes, timers, and the week ahead.`
- [x] Added topics: `family-dashboard`, `calendar`, `dashboard`, `self-hosted`, `kiosk`, `ics`, `weather`, `python`, `vanilla-js`, `local-first`.
- [x] Pushed sanitized public repo contents.
- [x] Confirmed private dashboard git history is not included.

## Before first public release

- [ ] Run `scripts/audit-public.sh`.
- [ ] Review README quick start on a clean checkout.
- [ ] Add hero screenshot to README using only synthetic data.
- [x] Replace tracked day notes with synthetic example file.
- [x] Add Raspberry Pi / kiosk guide.
- [ ] Confirm issue templates render correctly.
- [ ] Create first GitHub release with screenshot in release notes.
- [ ] Tag release `v0.1.0` when ready.

## Suggested first release notes

Weekaroo is a local-first wall dashboard for the week ahead: ICS calendars, local weather, notes, timers, countdowns, and optional AI-generated messages on a screen you control.

This first public release is aimed at people building a kitchen display, family wall calendar, classroom dashboard, roommate board, or Raspberry Pi kiosk. It runs without an account, keeps calendar/weather/API config local, and includes synthetic demo data for screenshots and testing.
