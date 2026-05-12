# GitHub Release Checklist

## Completed repository setup

- [x] Created GitHub repository named `weekaroo`.
- [x] Set description: `A local-first family dashboard for calendars, weather, notes, timers, and the week ahead.`
- [x] Added topics: `family-dashboard`, `calendar`, `dashboard`, `self-hosted`, `kiosk`, `ics`, `weather`, `python`, `vanilla-js`, `local-first`.
- [x] Pushed sanitized public repo contents.
- [x] Confirmed private dashboard git history is not included.

## Before first public release

- [x] Run `scripts/audit-public.sh`.
- [x] Review README quick start on a clean checkout.
- [x] Add hero/screenshots to README using only synthetic data.
- [x] Replace tracked day notes with synthetic example file.
- [x] Add Raspberry Pi / kiosk guide.
- [x] Populate public GitHub wiki with quick start, configuration, screenshots/demo data, privacy/secrets, and FAQ pages.
- [x] Confirm issue templates are present and valid YAML.
- [x] Draft first GitHub release notes with screenshot.
- [ ] Create first GitHub release.
- [ ] Tag release `v0.1.0` when ready.

## Suggested first release notes

Weekaroo is a local-first wall dashboard for the week ahead: ICS calendars, local weather, notes, timers, countdowns, and optional AI-generated messages on a screen you control.

This first public release is aimed at people building a kitchen display, family wall calendar, classroom dashboard, roommate board, or Raspberry Pi kiosk. It runs without an account, keeps calendar/weather/API config local, and includes synthetic demo data for screenshots and testing.

## Launch gate notes

- The `v0.1.0` GitHub Release URL is the canonical launch URL.
- Broad X, Reddit/forum, or Hacker News announcements should wait until the release exists.
- Release notes should include a synthetic screenshot, quick-start command, privacy note, and wiki link.
- Before tagging, confirm ignored local config files are not staged.
