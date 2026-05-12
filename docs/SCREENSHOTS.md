# Screenshots

Public screenshots should use only synthetic data.

Current public screenshot status:

- The README uses three reviewed synthetic demo screenshots hosted as GitHub user attachments.
- Those screenshots should be reused in the `v0.1.0` release notes unless repo-owned image files are added later.
- No public screenshot should come from a live family dashboard or private calendar.

Recommended process:

1. Copy the demo files into local config names:

   ```bash
   cp demo/calendars.demo.json calendars.json
   cp demo/family-messages.demo.json family-messages.json
   cp demo/countdowns.demo.json countdowns.json
   cp demo/timers.demo.json timers.json
   cp demo/weather-config.demo.json weather-config.json
   ```

2. Start Weekaroo:

   ```bash
   PORT=4020 ./run-dashboard.sh
   ```

3. Capture screenshots that contain only demo calendar/message data.

4. Prefer saving durable public screenshots in `docs/images/`, or record the GitHub attachment URLs if using GitHub-hosted release assets.

Never publish screenshots from a real family calendar, real weather station, or private notes.
