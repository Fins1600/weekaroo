# Privacy and Secret Handling

Weekaroo is local-first, but it can display sensitive information from calendars, notes, weather stations, and AI providers. Treat configuration files as private data.

## Never commit

- Calendar feed URLs
- WeatherFlow Tempest station tokens
- OpenRouter/OpenAI-compatible API keys
- Personal notes or private family messages
- Generated weather history from a private location

## Git ignored private files

The default `.gitignore` excludes the local config files used for private data.

Before publishing, run:

```bash
grep -RInE "apiKey|token|secret|BEGIN|sk-|Bearer|calendar.*ics|@|address|street" . --exclude-dir=.git
```

Review every hit manually.

## Network exposure

Weekaroo is designed for local/LAN use. Do not expose it directly to the internet without adding authentication, TLS, and a threat model appropriate for your deployment.
