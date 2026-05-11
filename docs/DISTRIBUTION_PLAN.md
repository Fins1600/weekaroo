# Distribution Plan

## Goal

Publish Weekaroo as a clean FOSS project that is separate from the private dashboard and contains no private calendar URLs, secrets, family data, local weather history, or hardcoded personal/team rules.

## Repository boundary

Public repo source of truth:

- `weekaroo/`

Private dashboard source of truth:

- `family-dashboard/`

Do not publish the private repo or its git history. Public releases should continue to be built from the sanitized Weekaroo repository only.

## Sanitization rules

Exclude from public repo:

- `.git/` from the private dashboard
- `calendars.json`
- `family-messages.json`
- `countdowns.json`
- `timers.json`
- `weather-config.json`
- `ai-config.json`
- `weather-history.json`
- `day-notes.json`
- logs, caches, desktop launchers, generated files

Replace private defaults with generic defaults:

- dashboard title: `Weekaroo`
- weather title: `Local Weather`
- default public weather example: `10001`, `New York, NY`
- personal/team-specific AI prompt rules removed

## Completed

- [x] Choose and add FOSS license: MIT
- [x] Pick project/repo name: `weekaroo`
- [x] Add synthetic demo config for screenshots and public examples
- [x] Add GitHub issue templates, PR template, and smoke-check workflow
- [x] Initialize a fresh public git repo from `weekaroo/`
- [x] Create GitHub repo and push public commits
- [x] Replace tracked day notes with synthetic `day-notes.example.json`
- [x] Add one-command demo mode
- [x] Add Raspberry Pi / Linux kiosk setup guide

## Launch polish

- [ ] Run secret/privacy grep and manually review hits before release.
- [ ] Run smoke check: `python3 check_server.py`.
- [ ] Confirm README quick start works on a clean machine/account.
- [ ] Add screenshots that contain only synthetic data.
- [ ] Use a synthetic hero screenshot in README and release notes.
- [ ] Review first public release notes and tag `v0.1.0` when ready.

## Future product work

- Docker/container option
- Settings export/import
- Marketplace-style example themes
