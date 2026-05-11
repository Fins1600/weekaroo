# Distribution Plan

## Goal

Publish Weekaroo as a clean FOSS project that is separate from the private dashboard and contains no private calendar URLs, secrets, family data, local weather history, or hardcoded personal/team rules.

## Repository boundary

Public repo source of truth:

- `weekaroo/`

Private dashboard source of truth:

- `family-dashboard/`

Do not publish the private repo or its git history. The public repo should start with a fresh git history from the sanitized directory.

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
- logs, caches, desktop launchers, generated files

Replace private defaults with generic defaults:

- dashboard title: `Weekaroo`
- weather title: `Local Weather`
- default public weather example: `10001`, `New York, NY`
- personal/team-specific AI prompt rules removed

## Pre-publication checklist

- [x] Choose and add FOSS license: MIT
- [x] Pick project/repo name: `weekaroo`
- [ ] Run secret/privacy grep and manually review hits
- [ ] Run smoke check: `python3 check_server.py`
- [ ] Confirm README quick start works on a clean machine/account
- [ ] Add screenshots that contain only synthetic data
- [x] Add synthetic demo config for screenshots and public examples
- [x] Add GitHub issue templates, PR template, and smoke-check workflow
- [ ] Initialize a fresh git repo from `weekaroo/`
- [ ] Create GitHub repo and push first public commit

## Near-term packaging improvements

1. Add install docs for Raspberry Pi / Linux kiosk mode.
2. Capture synthetic screenshots and save them in `docs/images/`.
3. Create fresh GitHub repo and push sanitized first commit.
4. Review first public release notes and tag `v0.1.0` when ready.

## Future product work

- GitHub issue templates
- GitHub Actions smoke checks
- Docker/container option
- One-command demo mode
- Settings export/import
- Marketplace-style example themes
