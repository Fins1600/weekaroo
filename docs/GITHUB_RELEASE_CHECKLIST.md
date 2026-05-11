# GitHub Release Checklist

## One-time repository setup

- [ ] Create fresh GitHub repository named `weekaroo`.
- [ ] Set description: `A local-first family dashboard for calendars, weather, notes, timers, and the week ahead.`
- [ ] Add topics: `family-dashboard`, `calendar`, `dashboard`, `self-hosted`, `kiosk`, `ics`, `weather`, `python`, `vanilla-js`, `local-first`.
- [ ] Push only the sanitized `family-dashboard-foss/` contents.
- [ ] Confirm private `family-dashboard/` history is not included.

## Before first public release

- [ ] Run `scripts/audit-public.sh`.
- [ ] Review README quick start on a clean checkout.
- [ ] Add synthetic screenshots in `docs/images/`.
- [ ] Confirm issue templates render correctly.
- [ ] Tag release `v0.1.0` when ready.

## Suggested first release notes

Weekaroo is a local-first wall dashboard for families, roommates, classrooms, and small teams. The first public release includes ICS calendar support, local weather, rotating notes, countdowns, day notes, optional AI-generated dashboard messages, and a privacy-first local config model.
