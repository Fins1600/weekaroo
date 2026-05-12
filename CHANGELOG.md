# Changelog

All notable changes to Weekaroo will be documented in this file.

The format loosely follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project uses semantic versioning once public releases begin.

## [0.1.0] - 2026-05-12

### Added

- Initial sanitized FOSS distribution of Weekaroo.
- Weekly ICS calendar dashboard with a US Holidays calendar enabled by default.
- Local weather support by ZIP/postal code.
- Optional WeatherFlow Tempest support.
- Rotating messages, event-matched message rules, day notes, countdowns, and count-up timers.
- Optional OpenAI-compatible AI message generation with server-side key handling.
- MIT License.
- Public privacy audit script.
- GitHub issue templates, pull request template, and smoke-check workflow.
- Synthetic README screenshots and demo data for public evaluation.
- Raspberry Pi and Linux kiosk setup guide.
- Public GitHub wiki pages for quick start, configuration, screenshots, privacy, and FAQ.
- Dashboard calendar loading now tolerates an unavailable feed instead of failing the whole week view.

### Security and privacy

- Private dashboard history intentionally excluded.
- Local config files ignored by git.
- Private names, calendar feeds, weather history, credentials, and team-specific prompt rules removed from public defaults.
