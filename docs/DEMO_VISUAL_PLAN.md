# Screenshot carousel and demo GIF plan

Public Weekaroo visuals must use only synthetic/demo data. No real family calendar, private notes, real weather station data, tokens, local history, or personalized dashboard screenshots should appear in public assets.

## Existing safe assets

Current reviewed assets:

- `docs/images/weekaroo-social-card.png`
- `docs/images/weekaroo-social-card.svg`
- `assets/logo.svg`
- `assets/logo.png`
- `assets/logo-mark.svg`
- `assets/logo-mark.png`
- README demo screenshot attachment URLs listed in `README.md`
- Release-note demo screenshot attachment URL listed in `docs/RELEASE_NOTES_v0.1.0.md`

The existing GitHub-hosted demo screenshots are safe to reuse for launch posts and release notes because they were captured from synthetic demo data.

## Carousel concept

Target: 4 to 6 images that tell the story quickly on GitHub, Reddit, X, and project pages.

1. **Hero dashboard**
   - Weekly calendar, weather, notes, countdowns visible
   - Caption: “The week ahead on one local wall screen”

2. **Calendar-first layout**
   - Emphasize multiple demo ICS calendars in the 7-day view
   - Caption: “ICS calendars, local files, no Weekaroo account”

3. **Weather and daily context**
   - Show local weather, fun facts, observances, or day notes using demo values
   - Caption: “Weather, daily notes, and small context at a glance”

4. **Timers and countdowns**
   - Show demo countdowns/timers only
   - Caption: “Countdowns and timers for household or team rhythms”

5. **Settings / local config**
   - Show settings screen with demo/sanitized values
   - Caption: “Config stays local on your machine or LAN”

6. **Raspberry Pi / kiosk frame**
   - Use the social card or a screenshot composited into a simple monitor/Raspberry Pi mockup
   - Caption: “Runs on a spare screen, mini PC, or Raspberry Pi kiosk”

## Demo GIF concept

Target length: 12 to 20 seconds. Keep motion slow enough to read.

Suggested sequence:

1. Start on the hero dashboard for 3 seconds.
2. Scroll or switch to calendar focus for 3 seconds.
3. Open settings briefly to show local configuration for 3 to 4 seconds.
4. Return to dashboard and show timers/countdowns/weather for 4 to 6 seconds.
5. End on the Weekaroo social card or logo for 2 seconds.

Recommended caption:

> Weekaroo is a local-first wall dashboard for the week ahead: ICS calendars, weather, notes, timers, countdowns, and optional AI-generated messages on hardware you control.

## Capture process

Use demo config only:

```bash
./run-demo.sh
```

or manually copy the demo files if needed:

```bash
cp demo/calendars.demo.json calendars.json
cp demo/family-messages.demo.json family-messages.json
cp demo/countdowns.demo.json countdowns.json
cp demo/timers.demo.json timers.json
cp demo/weather-config.demo.json weather-config.json
```

Then open:

```text
http://127.0.0.1:4020
```

Suggested browser viewport:

- 1920×1080 for screenshots
- 1280×720 for GIF/video drafts
- Light/dark/system mode as appropriate for the current UI, but keep the first carousel consistent

## File naming

If adding repo-owned public images later, use:

```text
docs/images/weekaroo-demo-01-hero.png
docs/images/weekaroo-demo-02-calendar.png
docs/images/weekaroo-demo-03-weather-notes.png
docs/images/weekaroo-demo-04-timers-countdowns.png
docs/images/weekaroo-demo-05-settings.png
docs/images/weekaroo-demo-06-kiosk.png
docs/images/weekaroo-demo-loop.gif
```

## Review checklist

Before publishing or committing any new screenshot/GIF:

- Only demo calendar events are visible.
- No real names, family messages, private notes, school/team rules, or personal locations are visible.
- No real API keys, station IDs, calendar URLs, weather tokens, or auth headers appear.
- Browser chrome does not expose bookmarks, accounts, paths, notifications, or private tabs.
- The screenshot is high enough resolution to read on GitHub and social feeds.
- The asset passes `scripts/audit-public.sh` or is manually reviewed if binary-only scanning cannot inspect it.

## Current recommendation

For the first aggressive PR pass, use the existing reviewed social card plus the current README demo screenshot attachments. Add repo-owned carousel images only after a clean synthetic capture session can be run without touching private dashboard state.
