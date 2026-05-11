# Screenshots

Public screenshots should use only synthetic data.

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

4. Save public screenshots in `docs/images/`.

Never publish screenshots from a real family calendar, real weather station, or private notes.
