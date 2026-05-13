const CALENDARS_URL = "./calendars.json";
const CALENDAR_DATA_URL = "./calendar-data";
const CALENDAR_SOURCES_URL = "./calendar-sources";
const WEATHER_DATA_URL = "./weather-data";
const WEATHER_CONFIG_URL = "./weather-config";
const FAMILY_MESSAGE_URL = "./family-messages.json";
const FAMILY_MESSAGE_DATA_URL = "./family-messages-data";
const FAMILY_MESSAGE_AI_URL = "./family-messages-ai";
const DAY_NOTES_DATA_URL = "./day-notes-data";
const TODAY_CONTENT_URL = "./today-content";
const COUNTDOWNS_DATA_URL = "./countdowns-data";
const TIMERS_DATA_URL = "./timers-data";
const AI_CONFIG_URL = "./ai-config";
const TIMER_AI_ENRICH_URL = "./timer-ai-enrich";
const SETTINGS_STORAGE_KEY = "familyDashboardSettings.v1";
const FAMILY_MESSAGE_AI_CACHE_STORAGE_KEY = "familyDashboardAiFamilyMessages.v1";
const DEFAULT_SETTINGS = {
  dashboardTitle: "Weekaroo",
  weatherTitle: "Local Weather",
  clockFormat: "12",
  colorTheme: "teal",
  showSeconds: false,
  weekStart: "monday",
  density: "comfortable",
  showCalendarNames: true,
  showDailyWeather: true,
  overlayOpacity: 62,
  rotationSeconds: "12",
  visualMode: "messages-animations",
  reducedMotion: false,
  backgroundRotation: true
};
const MASCOT_PROFILES = [];
const ARCADE_ANIMATIONS = ["pacman-chased", "pacman-chasing-blue", "space-invaders"];
const ARCADE_ANIMATION_CLASSES = ["pacman-chased", "pacman-chasing-blue", "space-invaders", "mario-runner", "baseball-homer"];
const BACKGROUND_IMAGES = {
  clear: {
    day: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80"
    ],
    night: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1511300636408-a63a89df3482?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1920&q=80"
    ]
  },
  cloudy: {
    day: [
      "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1530908295418-a12e326966ba?auto=format&fit=crop&w=1920&q=80"
    ],
    night: [
      "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1500661734262-5396f3520e49?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1498496294664-d9372eb521f3?auto=format&fit=crop&w=1920&q=80"
    ]
  },
  rain: {
    day: [
      "https://images.unsplash.com/photo-1501691223387-dd0500403074?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1428592953211-077101b2021b?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?auto=format&fit=crop&w=1920&q=80"
    ],
    night: [
      "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1509978778156-518eea30166b?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1505471768190-275e2ad04072?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1515084662741-4e7f6185b8fe?auto=format&fit=crop&w=1920&q=80"
    ]
  },
  storm: {
    day: [
      "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1500674425229-f692875b0ab7?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?auto=format&fit=crop&w=1920&q=80"
    ],
    night: [
      "https://images.unsplash.com/photo-1500674425229-f692875b0ab7?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=80"
    ]
  }
};

const weatherCodeMap = new Map([
  [0, "Clear"], [1, "Mostly clear"], [2, "Partly cloudy"], [3, "Cloudy"],
  [45, "Fog"], [48, "Fog"], [51, "Light drizzle"], [53, "Drizzle"], [55, "Heavy drizzle"],
  [61, "Light rain"], [63, "Rain"], [65, "Heavy rain"], [71, "Light snow"], [73, "Snow"],
  [75, "Heavy snow"], [80, "Rain showers"], [81, "Rain showers"], [82, "Heavy showers"],
  [95, "Thunderstorm"], [96, "Storm"], [99, "Severe storm"]
]);

let lastWeatherCode = 0;
let lastWeatherPayload = null;
let lastBackgroundKey = "";
let familyMessages = [];
let familyMessageIndex = 0;
let configuredFamilyMessages = [];
let configuredDefaultFamilyMessages = [];
let familyMessageRules = [];
let currentGeneratedFamilyMessages = [];
let currentAiGeneratedFamilyMessages = [];
let familyMessageAiCacheKey = "";
let familyMessageAiRequestId = 0;
let latestCalendarEvents = [];
let calendarSources = [];
let dayNotes = {};
let activeDayNoteDateKey = null;
let activeDayNoteId = null;
let displayedWeekOffset = 0;
let countupLoveNoteIndex = 0;
let countdownFactIndex = 0;
let countdownImageIndex = 0;
let todayContentCache = null;
let todayContentCacheKey = null;
let countdownConfigCache = null;
let timerConfigCache = null;
let activeTimerSlots = { lowerLeft: [], lowerRight: [] };
let activeTimerSlotIndexes = { lowerLeft: 0, lowerRight: 0 };
let activeTimerDetail = null;
let timerDetailIndex = 0;
let timerImageIndex = 0;
let countdownRotationSeconds = 12;
let countdownRotationPausedUntil = 0;
let countdownRotationIntervalId = null;
let familyMessageRotationIntervalId = null;
let activeMascotProfiles = [];
let activeMascotProfile = null;
let activeMascotProfileIndex = 0;
let familyVisualRotationIndex = 0;
let arcadeAnimationIndex = 0;
let mascotRunToken = 0;
let mascotResetTimerId = null;
let mascotNextRunTimerId = null;
let familyMessageDisplayMode = "message";
let dashboardSettings = loadSettings();
let weatherConfig = null;
let aiConfig = null;
let clockIntervalId = null;
let backgroundRotationIntervalId = null;
const LOVE_NOTES = [
  "Still the best yes ever.",
  "A beautiful life, one day at a time.",
  "Built on love, laughter, and a little chaos.",
  "Forever looks good on you two.",
  "The love story keeps getting better.",
  "Every day is a celebration of that yes.",
  "Marriage level: legendary.",
  "Built for forever, and still glowing."
];

const weekGrid = document.getElementById("week-grid");
const dayTemplate = document.getElementById("day-column-template");
const eventTemplate = document.getElementById("event-template");
const backgroundNode = document.querySelector(".background");
const weatherBlock = document.getElementById("weather-block");
const familyMessageNode = document.getElementById("family-message");
const familyMessageTextNode = document.getElementById("family-message-text");
const timeBlock = document.getElementById("time-block");
const eventModal = document.getElementById("event-modal");
const eventModalClose = document.getElementById("event-modal-close");
const eventModalCalendar = document.getElementById("event-modal-calendar");
const eventModalTitle = document.getElementById("event-modal-title");
const eventModalTime = document.getElementById("event-modal-time");
const eventModalLocationRow = document.getElementById("event-modal-location-row");
const eventModalLocation = document.getElementById("event-modal-location");
const eventModalOrganizerRow = document.getElementById("event-modal-organizer-row");
const eventModalOrganizer = document.getElementById("event-modal-organizer");
const eventModalDescriptionRow = document.getElementById("event-modal-description-row");
const eventModalDescription = document.getElementById("event-modal-description");
const familyMessagesModal = document.getElementById("family-messages-modal");
const familyMessagesModalClose = document.getElementById("family-messages-modal-close");
const familyMessagesStatus = document.getElementById("family-messages-status");
const familyMessagesList = document.getElementById("family-messages-list");
const familyMessageInput = document.getElementById("family-message-input");
const familyMessageAddButton = document.getElementById("family-message-add");
const dayNoteModal = document.getElementById("day-note-modal");
const dayNoteModalClose = document.getElementById("day-note-modal-close");
const dayNoteModalTitle = document.getElementById("day-note-modal-title");
const dayNoteModalDate = document.getElementById("day-note-modal-date");
const dayNoteInput = document.getElementById("day-note-input");
const dayNoteSaveButton = document.getElementById("day-note-save");
const dayNoteDeleteButton = document.getElementById("day-note-delete");
const dayNoteStatus = document.getElementById("day-note-status");
const weatherModal = document.getElementById("weather-modal");
const weatherModalClose = document.getElementById("weather-modal-close");
const weatherModalStation = document.getElementById("weather-modal-station");
const weatherModalTitle = document.getElementById("weather-modal-title");
const weatherModalUpdated = document.getElementById("weather-modal-updated");
const weatherHeroMeta = document.getElementById("weather-hero-meta");
const weatherHeroIcon = document.getElementById("weather-hero-icon");
const weatherHeroTemp = document.getElementById("weather-hero-temp");
const weatherSunrise = document.getElementById("weather-sunrise");
const weatherSunset = document.getElementById("weather-sunset");
const weatherDetailTemp = document.getElementById("weather-detail-temp");
const weatherDetailFeelsLike = document.getElementById("weather-detail-feelslike");
const weatherDetailHumidity = document.getElementById("weather-detail-humidity");
const weatherDetailWind = document.getElementById("weather-detail-wind");
const weatherDetailUv = document.getElementById("weather-detail-uv");
const weatherDetailSolar = document.getElementById("weather-detail-solar");
const weatherDetailRain = document.getElementById("weather-detail-rain");
const weatherDetailRainYesterday = document.getElementById("weather-detail-rain-yesterday");
const weatherDetailRainHour = document.getElementById("weather-detail-rain-hour");
const weatherDetailLightning = document.getElementById("weather-detail-lightning");
const weatherForecast = document.getElementById("weather-forecast");
const countdownBlock = document.getElementById("countdown-block");
const weekPrevButton = document.getElementById("week-prev");
const weekRangeButton = document.getElementById("week-range");
const weekNextButton = document.getElementById("week-next");
const countupBlock = document.getElementById("countup-block");
const mascotLane = document.getElementById("family-message-mascot");
const mascotTrack = document.getElementById("mascot-track");
const mascotCreature = document.getElementById("mascot-creature");
const mascotAvatar = document.getElementById("mascot-avatar");
const arcadeRunner = document.getElementById("arcade-runner");
const timerModal = document.getElementById("timer-modal");
const timerModalClose = document.getElementById("timer-modal-close");
const timerModalKicker = document.getElementById("timer-modal-kicker");
const timerModalImage = document.getElementById("timer-modal-image");
const timerModalIcon = document.getElementById("timer-modal-icon");
const timerModalTitle = document.getElementById("timer-modal-title");
const timerModalTotal = document.getElementById("timer-modal-total");
const timerModalSubtitle = document.getElementById("timer-modal-subtitle");
const timerModalComparison = document.getElementById("timer-modal-comparison");
const timerStat1Label = document.getElementById("timer-stat-1-label");
const timerStat1 = document.getElementById("timer-stat-1");
const timerStat2Label = document.getElementById("timer-stat-2-label");
const timerStat2 = document.getElementById("timer-stat-2");
const timerStat3Label = document.getElementById("timer-stat-3-label");
const timerStat3 = document.getElementById("timer-stat-3");
const timerStat4Label = document.getElementById("timer-stat-4-label");
const timerStat4 = document.getElementById("timer-stat-4");
const timerDetailLabel = document.getElementById("timer-detail-label");
const timerDetailText = document.getElementById("timer-detail-text");
const todayModal = document.getElementById("today-modal");
const todayModalClose = document.getElementById("today-modal-close");
const todayModalDate = document.getElementById("today-modal-date");
const todaySportsHistory = document.getElementById("today-sports-history");
const todayJoke = document.getElementById("today-joke");
const todayObservances = document.getElementById("today-observances");
const todayFunFact = document.getElementById("today-fun-fact");
const dashboardTitle = document.getElementById("dashboard-title");
const settingsModal = document.getElementById("settings-modal");
const settingsModalClose = document.getElementById("settings-modal-close");
const settingsResetButton = document.getElementById("settings-reset");
const settingControls = {
  dashboardTitle: document.getElementById("setting-dashboard-title"),
  weatherTitle: document.getElementById("setting-weather-title"),
  clockFormat: document.getElementById("setting-clock-format"),
  colorTheme: document.getElementById("setting-color-theme"),
  showSeconds: document.getElementById("setting-show-seconds"),
  weekStart: document.getElementById("setting-week-start"),
  density: document.getElementById("setting-density"),
  showCalendarNames: document.getElementById("setting-show-calendar-names"),
  showDailyWeather: document.getElementById("setting-show-daily-weather"),
  overlayOpacity: document.getElementById("setting-overlay-opacity"),
  rotationSeconds: document.getElementById("setting-rotation-seconds"),
  visualMode: document.getElementById("setting-visual-mode"),
  reducedMotion: document.getElementById("setting-reduced-motion"),
  backgroundRotation: document.getElementById("setting-background-rotation")
};
const calendarSourceList = document.getElementById("calendar-source-list");
const calendarSourceAddButton = document.getElementById("calendar-source-add");
const calendarSourceSaveButton = document.getElementById("calendar-source-save");
const calendarSourceReloadButton = document.getElementById("calendar-source-reload");
const calendarSourceStatus = document.getElementById("calendar-source-status");
const weatherProviderSelect = document.getElementById("setting-weather-provider");
const weatherPublicPanel = document.getElementById("weather-public-config");
const weatherTempestPanel = document.getElementById("weather-tempest-config");
const weatherPublicZipInput = document.getElementById("setting-weather-public-zip");
const weatherPublicLabelInput = document.getElementById("setting-weather-public-label");
const weatherTempestStationInput = document.getElementById("setting-weather-tempest-station");
const weatherTempestTokenInput = document.getElementById("setting-weather-tempest-token");
const weatherConfigSaveButton = document.getElementById("weather-config-save");
const weatherConfigReloadButton = document.getElementById("weather-config-reload");
const timerLeftEnabledInput = document.getElementById("setting-timer-left-enabled");
const timerRightEnabledInput = document.getElementById("setting-timer-right-enabled");
const timerLeftList = document.getElementById("timer-left-list");
const timerRightList = document.getElementById("timer-right-list");
const timerLeftAddButton = document.getElementById("timer-left-add");
const timerRightAddButton = document.getElementById("timer-right-add");
const timerEditorSelect = document.getElementById("timer-editor-select");
const timerAiEnrichButton = document.getElementById("timer-ai-enrich");
const timerAddNewButton = document.getElementById("timer-add-new");
const timerDeleteSelectedButton = document.getElementById("timer-delete-selected");
const timerFieldEnabled = document.getElementById("timer-field-enabled");
const timerFieldType = document.getElementById("timer-field-type");
const timerFieldId = document.getElementById("timer-field-id");
const timerFieldEmoji = document.getElementById("timer-field-emoji");
const timerFieldTitle = document.getElementById("timer-field-title");
const timerFieldHeroTitle = document.getElementById("timer-field-hero-title");
const timerFieldSubtitle = document.getElementById("timer-field-subtitle");
const timerFieldDetailLabel = document.getElementById("timer-field-detail-label");
const timerFieldTarget = document.getElementById("timer-field-target");
const timerFieldStart = document.getElementById("timer-field-start");
const timerFieldShowBefore = document.getElementById("timer-field-show-before");
const timerFieldShowAfter = document.getElementById("timer-field-show-after");
const timerFieldMilestoneStep = document.getElementById("timer-field-milestone-step");
const timerDetailList = document.getElementById("timer-detail-list");
const timerImageList = document.getElementById("timer-image-list");
const timerImageQueryList = document.getElementById("timer-image-query-list");
const timerDetailAddButton = document.getElementById("timer-detail-add");
const timerImageAddButton = document.getElementById("timer-image-add");
const timerImageQueryAddButton = document.getElementById("timer-image-query-add");
const timerConfigSaveButton = document.getElementById("timer-config-save");
const timerConfigReloadButton = document.getElementById("timer-config-reload");
const timerConfigStatus = document.getElementById("timer-config-status");
const aiEnabledInput = document.getElementById("setting-ai-enabled");
const aiProviderSelect = document.getElementById("setting-ai-provider");
const aiBaseUrlInput = document.getElementById("setting-ai-base-url");
const aiModelSelect = document.getElementById("setting-ai-model");
const aiApiKeyInput = document.getElementById("setting-ai-api-key");
const aiAppTitleInput = document.getElementById("setting-ai-app-title");
const aiFamilyMessagePromptInput = document.getElementById("setting-ai-family-message-prompt");
const aiPromptResetButton = document.getElementById("ai-prompt-reset");
const aiConfigKeyStatus = document.getElementById("ai-config-key-status");
const aiConfigSaveButton = document.getElementById("ai-config-save");
const aiConfigReloadButton = document.getElementById("ai-config-reload");
const aiConfigStatus = document.getElementById("ai-config-status");
const weatherConfigStatus = document.getElementById("weather-config-status");


function loadSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (!raw) return { ...DEFAULT_SETTINGS };
    const parsed = JSON.parse(raw);
    const settings = { ...DEFAULT_SETTINGS, ...(parsed && typeof parsed === "object" ? parsed : {}) };
    if (settings.visualMode === "all") settings.visualMode = "messages-animations";
    if (settings.visualMode === "reduced") {
      settings.visualMode = "messages";
      settings.reducedMotion = true;
    }
    return settings;
  } catch (error) {
    console.warn("Settings could not be loaded:", error);
    return { ...DEFAULT_SETTINGS };
  }
}

function saveSettings() {
  localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(dashboardSettings));
}

function scheduleClock() {
  if (clockIntervalId) clearInterval(clockIntervalId);
  updateClock();
  clockIntervalId = setInterval(updateClock, dashboardSettings.showSeconds ? 1000 : 30000);
}

function scheduleBackgroundRotation() {
  if (backgroundRotationIntervalId) {
    clearInterval(backgroundRotationIntervalId);
    backgroundRotationIntervalId = null;
  }
  if (!dashboardSettings.backgroundRotation) return;
  backgroundRotationIntervalId = setInterval(() => {
    selectBackgroundImage(lastWeatherCode, true);
  }, 60 * 60 * 1000);
}

function applySettings({ rerender = true } = {}) {
  document.title = dashboardSettings.dashboardTitle || DEFAULT_SETTINGS.dashboardTitle;
  if (dashboardTitle) dashboardTitle.textContent = dashboardSettings.dashboardTitle || DEFAULT_SETTINGS.dashboardTitle;
  document.querySelector(".weather-header").textContent = dashboardSettings.weatherTitle || DEFAULT_SETTINGS.weatherTitle;
  document.body.classList.toggle("settings-compact", dashboardSettings.density === "compact");
  document.body.classList.toggle("settings-reduced-motion", Boolean(dashboardSettings.reducedMotion));
  document.body.dataset.theme = dashboardSettings.colorTheme || DEFAULT_SETTINGS.colorTheme;
  const overlayOpacity = Number(dashboardSettings.overlayOpacity || 62) / 100;
  document.documentElement.style.setProperty("--overlay-opacity", `${overlayOpacity}`);
  document.documentElement.style.setProperty("--overlay-opacity-start", `${Math.max(0.18, overlayOpacity * 0.58)}`);
  countdownRotationSeconds = Number(dashboardSettings.rotationSeconds || 12);
  syncBottomBarRotationInterval();
  scheduleClock();
  scheduleBackgroundRotation();
  if (rerender) renderWeek(latestCalendarEvents);
}

function syncSettingsControls() {
  for (const [key, control] of Object.entries(settingControls)) {
    if (!control) continue;
    if (control.type === "checkbox") control.checked = Boolean(dashboardSettings[key]);
    else control.value = `${dashboardSettings[key] ?? DEFAULT_SETTINGS[key] ?? ""}`;
  }
}

function updateSettingFromControl(key, control) {
  dashboardSettings[key] = control.type === "checkbox" ? control.checked : control.value;
  saveSettings();
  applySettings();
}

function openSettingsModal() {
  syncSettingsControls();
  loadWeatherConfig();
  loadAiConfig();
  loadTimerSettingsConfig();
  settingsModal?.classList.remove("hidden");
  settingsModal?.setAttribute("aria-hidden", "false");
}

function closeSettingsModal() {
  settingsModal?.classList.add("hidden");
  settingsModal?.setAttribute("aria-hidden", "true");
}

function showSettingsPage(pageName) {
  document.querySelectorAll(".settings-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.settingsTab === pageName);
  });
  document.querySelectorAll(".settings-page").forEach((page) => {
    page.classList.toggle("active", page.dataset.settingsPage === pageName);
  });
}

function resetSettings() {
  dashboardSettings = { ...DEFAULT_SETTINGS };
  saveSettings();
  syncSettingsControls();
  applySettings();
}

function setWeatherConfigStatus(message, tone = "") {
  if (!weatherConfigStatus) return;
  weatherConfigStatus.textContent = message || "";
  weatherConfigStatus.dataset.tone = tone;
}

function syncWeatherProviderPanels() {
  const mode = weatherProviderSelect?.value || weatherConfig?.mode || "public";
  weatherPublicPanel?.classList.toggle("hidden", mode !== "public");
  weatherTempestPanel?.classList.toggle("hidden", mode !== "tempest");
}

function syncWeatherConfigControls() {
  const config = weatherConfig || { mode: "public", public: { zip: "10001", label: "New York, NY" }, tempest: {} };
  if (weatherProviderSelect) weatherProviderSelect.value = config.mode || "public";
  if (weatherPublicZipInput) weatherPublicZipInput.value = config.public?.zip || "10001";
  if (weatherPublicLabelInput) weatherPublicLabelInput.value = config.public?.label || "New York, NY";
  if (weatherTempestStationInput) weatherTempestStationInput.value = config.tempest?.stationId || "";
  if (weatherTempestTokenInput) {
    weatherTempestTokenInput.value = "";
    weatherTempestTokenInput.placeholder = config.tempest?.tokenMasked ? `Current token ${config.tempest.tokenMasked}, leave blank to keep` : "WeatherFlow token";
  }
  syncWeatherProviderPanels();
}

async function loadWeatherConfig() {
  try {
    const response = await fetch(`${WEATHER_CONFIG_URL}?t=${Date.now()}`);
    const data = await response.json();
    if (!response.ok || data.error) throw new Error(data.error || "Failed to load weather configuration");
    weatherConfig = data;
    syncWeatherConfigControls();
    setWeatherConfigStatus(`Loaded ${data.mode === "tempest" ? "Tempest" : "public zip"} weather settings.`, "success");
  } catch (error) {
    console.error(error);
    weatherConfig = { mode: "public", public: { zip: "10001", label: "New York, NY" }, tempest: {} };
    syncWeatherConfigControls();
    setWeatherConfigStatus("Using default public weather for New York, NY.", "warning");
  }
}

async function saveWeatherConfig() {
  const payload = {
    mode: weatherProviderSelect?.value || "public",
    public: {
      zip: weatherPublicZipInput?.value?.trim() || "10001",
      country: "US",
      label: weatherPublicLabelInput?.value?.trim() || "New York, NY"
    },
    tempest: {
      stationId: weatherTempestStationInput?.value?.trim() || "",
      token: weatherTempestTokenInput?.value?.trim() || ""
    }
  };
  setWeatherConfigStatus("Saving weather settings…");
  try {
    const response = await fetch(WEATHER_CONFIG_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    if (!response.ok || data.error) throw new Error(data.error || "Failed to save weather configuration");
    weatherConfig = data;
    syncWeatherConfigControls();
    await loadWeather();
    setWeatherConfigStatus("Weather settings saved and refreshed.", "success");
  } catch (error) {
    console.error(error);
    setWeatherConfigStatus(error.message || "Weather settings could not be saved.", "error");
  }
}


function setAiConfigStatus(message, tone = "") {
  if (!aiConfigStatus) return;
  aiConfigStatus.textContent = message || "";
  if (tone) aiConfigStatus.dataset.tone = tone;
  else delete aiConfigStatus.dataset.tone;
}

function syncAiConfigControls() {
  const config = aiConfig || {
    enabled: false,
    provider: "openrouter",
    baseUrl: "https://openrouter.ai/api/v1",
    model: "openrouter/free",
    appTitle: "Weekaroo",
    familyMessagePrompt: "Write warm, specific, playful one-line dashboard messages for our family. Mention real activities, timing, or weather details when useful. Keep the voice upbeat but not cheesy."
  };
  if (aiEnabledInput) aiEnabledInput.checked = Boolean(config.enabled);
  if (aiProviderSelect) aiProviderSelect.value = config.provider || "openrouter";
  if (aiBaseUrlInput) aiBaseUrlInput.value = config.baseUrl || "https://openrouter.ai/api/v1";
  if (aiModelSelect) aiModelSelect.value = config.model || "openrouter/free";
  if (aiAppTitleInput) aiAppTitleInput.value = config.appTitle || "Weekaroo";
  if (aiFamilyMessagePromptInput) aiFamilyMessagePromptInput.value = config.familyMessagePrompt || config.defaultFamilyMessagePrompt || "";
  if (aiApiKeyInput) {
    aiApiKeyInput.value = "";
    aiApiKeyInput.placeholder = config.apiKeyMasked ? `Current key ${config.apiKeyMasked}, leave blank to keep` : "OpenRouter or compatible API key";
  }
  if (aiConfigKeyStatus) {
    aiConfigKeyStatus.textContent = config.hasApiKey
      ? `AI key status: configured via ${config.apiKeySource || "server"} ${config.apiKeyMasked || ""}`
      : "AI key status: not configured";
  }
}

async function loadAiConfig() {
  try {
    const response = await fetch(`${AI_CONFIG_URL}?t=${Date.now()}`);
    const data = await response.json();
    if (!response.ok || data.error) throw new Error(data.error || "Failed to load AI configuration");
    aiConfig = data;
    syncAiConfigControls();
    setAiConfigStatus(data.enabled ? "AI enrichment settings loaded." : "AI enrichment is currently disabled.", data.enabled ? "success" : "warning");
  } catch (error) {
    console.error(error);
    aiConfig = { enabled: false, provider: "openrouter", baseUrl: "https://openrouter.ai/api/v1", model: "openrouter/free" };
    syncAiConfigControls();
    setAiConfigStatus(error.message || "AI settings could not load.", "error");
  }
}

async function saveAiConfig() {
  const payload = {
    enabled: Boolean(aiEnabledInput?.checked),
    provider: aiProviderSelect?.value || "openrouter",
    baseUrl: aiBaseUrlInput?.value?.trim() || "https://openrouter.ai/api/v1",
    model: aiModelSelect?.value || "openrouter/free",
    appTitle: aiAppTitleInput?.value?.trim() || "Weekaroo",
    familyMessagePrompt: aiFamilyMessagePromptInput?.value?.trim() || aiConfig?.defaultFamilyMessagePrompt || "",
    apiKey: aiApiKeyInput?.value?.trim() || ""
  };
  setAiConfigStatus("Saving AI settings…");
  try {
    const response = await fetch(AI_CONFIG_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    if (!response.ok || data.error) throw new Error(data.error || "Failed to save AI configuration");
    aiConfig = data;
    syncAiConfigControls();
    setAiConfigStatus("AI settings saved.", "success");
  } catch (error) {
    console.error(error);
    setAiConfigStatus(error.message || "AI settings could not be saved.", "error");
  }
}

function getWeatherTheme(code) {
  if ([95, 96, 99].includes(code)) return "storm";
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "rain";
  if ([1, 2, 3, 45, 48].includes(code)) return "cloudy";
  return "clear";
}

function getDayPhase(date = new Date()) {
  const hour = date.getHours();
  return hour >= 6 && hour < 18 ? "day" : "night";
}

function selectBackgroundImage(weatherCode = 0, force = false) {
  const now = new Date();
  const hourBucket = Math.floor(now.getTime() / (60 * 60 * 1000));
  const theme = getWeatherTheme(weatherCode);
  const phase = getDayPhase(now);
  const imageSet = BACKGROUND_IMAGES[theme]?.[phase] || BACKGROUND_IMAGES.clear.day;
  const imageIndex = hourBucket % imageSet.length;
  const imageUrl = imageSet[imageIndex];
  const backgroundKey = `${theme}:${phase}:${imageIndex}`;

  if (!force && backgroundKey === lastBackgroundKey) {
    return;
  }

  lastBackgroundKey = backgroundKey;
  backgroundNode.style.backgroundImage = `url("${imageUrl}")`;
}

function startOfWeek(date) {
  const d = new Date(date);
  const day = d.getDay();
  const offset = dashboardSettings.weekStart === "sunday" ? day : (day + 6) % 7;
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - offset);
  return d;
}

function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function formatTime(date) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: dashboardSettings.clockFormat !== "24"
  }).format(date);
}

function formatDateTime(date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(date);
}

function formatDayLabel(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

function formatDateLabel(date) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(date);
}

function getDateKey(date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatWeekOffsetLabel(offset) {
  if (offset === 0) return "";
  const weeks = Math.abs(offset);
  const unit = weeks === 1 ? "week" : "weeks";
  return offset > 0 ? `, ${weeks} ${unit} ahead` : `, ${weeks} ${unit} behind`;
}

function setHeaderDates(weekStart, weekOffset = 0) {
  const today = new Date();
  document.getElementById("current-date").textContent = new Intl.DateTimeFormat("en-US", {
    weekday: "long", month: "long", day: "numeric"
  }).format(today);
  document.getElementById("week-range").textContent = `${formatDateLabel(weekStart)} - ${formatDateLabel(addDays(weekStart, 6))}${formatWeekOffsetLabel(weekOffset)}`;
}

function updateClock() {
  const now = new Date();
  document.getElementById("current-time").textContent = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: dashboardSettings.showSeconds ? "2-digit" : undefined,
    hour12: dashboardSettings.clockFormat !== "24"
  }).format(now);
  document.getElementById("current-date").textContent = new Intl.DateTimeFormat("en-US", {
    weekday: "long", month: "long", day: "numeric"
  }).format(now);
}

function countWeekdaysBetween(startDate, endDate) {
  const cursor = new Date(startDate);
  cursor.setHours(0, 0, 0, 0);
  const end = new Date(endDate);
  end.setHours(0, 0, 0, 0);
  let count = 0;

  while (cursor < end) {
    const day = cursor.getDay();
    if (day !== 0 && day !== 6) count += 1;
    cursor.setDate(cursor.getDate() + 1);
  }

  return count;
}

function getCountdownMetrics(item) {
  const now = new Date();
  const target = new Date(item.target);
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  const targetDay = new Date(target);
  targetDay.setHours(0, 0, 0, 0);
  const diffMs = target - now;
  const diffDays = Math.round((targetDay - today) / (24 * 60 * 60 * 1000));
  const diffWeekdays = countWeekdaysBetween(today, targetDay);
  const totalHours = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60)));
  const totalWeeks = Math.max(0, (diffDays / 7));
  const showFromDaysBefore = Number(item.showFromDaysBefore ?? 365);
  const startWindow = new Date(target);
  startWindow.setDate(startWindow.getDate() - showFromDaysBefore);
  const totalWindow = target - startWindow;
  const elapsedWindow = Math.min(Math.max(0, now - startWindow), totalWindow);
  const progressPct = totalWindow > 0 ? Math.round((elapsedWindow / totalWindow) * 100) : 0;
  return { target, diffMs, diffDays, diffWeekdays, totalHours, totalWeeks, progressPct };
}

function countdownSummaryText(item, metrics) {
  const baseTitle = item.title.replace(/ Countdown$/i, "");
  if (item.id === "last-day-of-school") {
    if (metrics.diffWeekdays > 1) return `${metrics.diffWeekdays} school days left until ${baseTitle}`;
    if (metrics.diffWeekdays === 1) return `1 school day left until ${baseTitle}!`;
    if (metrics.diffDays === 0) return `${baseTitle} is here!`;
    return `${baseTitle} is underway`;
  }
  if (metrics.diffDays > 1) return `${metrics.diffDays} days until ${baseTitle}`;
  if (metrics.diffDays === 1) return `1 day until ${baseTitle}!`;
  if (metrics.diffDays === 0) return `${baseTitle} starts today!`;
  return `${baseTitle} is underway`;
}

function buildCountdownMilestoneText(item, metrics) {
  const baseTitle = item.title.replace(/ Countdown$/i, "");
  if (item.id === "last-day-of-school") {
    if (metrics.diffWeekdays > 10) return `Only ${metrics.diffWeekdays - 10} school days until just 10 school days left ${item.emoji || "✨"}`;
    if (metrics.diffWeekdays >= 0) return `Final stretch, just a handful of school days left ${item.emoji || "✨"}`;
    return `${baseTitle} is here ${item.emoji || "✨"}`;
  }
  if (metrics.diffDays > 10) return `Only ${metrics.diffDays - 10} days until just 10 days to go ${item.emoji || "✨"}`;
  if (metrics.diffDays >= 0) return `You are in the final stretch now ${item.emoji || "✨"}`;
  return `${baseTitle} is happening now ${item.emoji || "✨"}`;
}

async function loadTimerConfig({ force = false } = {}) {
  if (timerConfigCache && !force) return timerConfigCache;
  const response = await fetch(`${TIMERS_DATA_URL}?t=${Date.now()}`);
  if (!response.ok) throw new Error(`Timer config failed: ${response.status}`);
  timerConfigCache = normalizeTimerConfig(await response.json());
  return timerConfigCache;
}

async function loadCountdownConfig() {
  if (countdownConfigCache) return countdownConfigCache;
  const response = await fetch(`${COUNTDOWNS_DATA_URL}?t=${Date.now()}`);
  countdownConfigCache = await response.json();
  return countdownConfigCache;
}

function defaultCountupTimer() {
  return {
    id: "happily-ever-after",
    type: "countup",
    title: "Big Day Counter",
    emoji: "💍",
    start: "2009-01-17T16:30:00-07:00",
    subtitle: "Married since January 17, 2009 at 4:30 PM",
    heroTitle: "Forever starts here",
    detailLabel: "Love note",
    details: LOVE_NOTES,
    images: [],
    imageQueries: [],
    milestoneStepDays: 500,
    enabled: true
  };
}

function normalizeTimerConfig(raw) {
  const timers = Array.isArray(raw?.timers) ? raw.timers.map((timer) => ({ ...timer })) : [];
  if (!timers.some((timer) => timer.id === "happily-ever-after")) timers.push(defaultCountupTimer());
  for (const timer of timers) {
    timer.type = timer.type === "countup" ? "countup" : "countdown";
    timer.enabled = timer.enabled !== false;
    if (!Array.isArray(timer.details)) timer.details = Array.isArray(timer.facts) ? timer.facts : [];
    if (!Array.isArray(timer.images)) timer.images = [];
    if (!Array.isArray(timer.imageQueries)) timer.imageQueries = [];
    if (!timer.detailLabel) timer.detailLabel = timer.factsLabel || (timer.type === "countup" ? "Love note" : "Fun fact");
  }
  const countdownIds = timers.filter((timer) => timer.type === "countdown").map((timer) => timer.id).filter(Boolean);
  const slots = raw?.slots && typeof raw.slots === "object" ? raw.slots : {};
  return {
    version: 1,
    rotationSeconds: Number(raw?.rotationSeconds || dashboardSettings.rotationSeconds || 12),
    slots: {
      lowerLeft: normalizeTimerSlot(slots.lowerLeft, countdownIds),
      lowerRight: normalizeTimerSlot(slots.lowerRight, ["happily-ever-after"])
    },
    timers
  };
}

function normalizeTimerSlot(slot, fallbackIds) {
  const timerIds = Array.isArray(slot?.timerIds) ? slot.timerIds : fallbackIds;
  return {
    enabled: slot?.enabled !== false,
    timerIds: timerIds.map((id) => `${id}`.trim()).filter(Boolean)
  };
}

function timerLabel(timer) {
  if (!timer) return "Unknown timer";
  const kind = timer.type === "countup" ? "Count up" : "Count down";
  return `${timer.emoji || "⏱️"} ${timer.title || timer.id || "Untitled"} (${kind})`;
}

function toLocalDateTimeInput(value) {
  if (!value) return "";
  const raw = `${value}`;
  const match = raw.match(/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})/);
  return match ? `${match[1]}T${match[2]}` : "";
}

function fromLocalDateTimeInput(value, fallback = "") {
  if (!value) return "";
  const fallbackOffset = `${fallback}`.match(/([+-]\d{2}:?\d{2}|Z)$/)?.[1] || "-07:00";
  return `${value}:00${fallbackOffset === "Z" ? "Z" : fallbackOffset.replace(/^(\+|\-)(\d{2})(\d{2})$/, "$1$2:$3")}`;
}

function selectedTimer() {
  if (!timerConfigCache) return null;
  return timerConfigCache.timers.find((timer) => timer.id === timerEditorSelect.value) || timerConfigCache.timers[0] || null;
}

function setTimerStatus(message, tone = "") {
  if (!timerConfigStatus) return;
  timerConfigStatus.textContent = message || "";
  if (tone) timerConfigStatus.dataset.tone = tone;
  else delete timerConfigStatus.dataset.tone;
}

function renderTimerOptionSelect(selectedId = "") {
  const select = document.createElement("select");
  for (const timer of timerConfigCache.timers) {
    const option = document.createElement("option");
    option.value = timer.id;
    option.textContent = timerLabel(timer);
    option.selected = timer.id === selectedId;
    select.append(option);
  }
  return select;
}

function renderSlotAssignmentRows(slotName) {
  const list = slotName === "lowerLeft" ? timerLeftList : timerRightList;
  const slot = timerConfigCache.slots[slotName];
  list.innerHTML = "";
  if (!slot.timerIds.length) {
    const empty = document.createElement("div");
    empty.className = "settings-note timer-empty-note";
    empty.textContent = "No timers assigned yet.";
    list.append(empty);
    return;
  }
  slot.timerIds.forEach((timerId, index) => {
    const row = document.createElement("div");
    row.className = "timer-assignment-row";
    const field = document.createElement("label");
    field.className = "settings-field";
    const label = document.createElement("span");
    label.textContent = `Rotation item ${index + 1}`;
    const select = renderTimerOptionSelect(timerId);
    select.addEventListener("change", () => {
      slot.timerIds[index] = select.value;
      setTimerStatus("Timer assignment changed locally. Save timers to keep it.", "warning");
    });
    field.append(label, select);
    const actions = document.createElement("div");
    actions.className = "timer-row-actions";
    const edit = document.createElement("button");
    edit.className = "settings-small-button";
    edit.type = "button";
    edit.textContent = "Edit";
    edit.addEventListener("click", () => {
      timerEditorSelect.value = select.value;
      renderTimerEditorFields();
      timerEditorSelect.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    const remove = document.createElement("button");
    remove.className = "settings-small-button timer-row-remove";
    remove.type = "button";
    remove.textContent = "Delete";
    remove.addEventListener("click", () => {
      slot.timerIds.splice(index, 1);
      syncTimerSettingsControls();
      setTimerStatus("Timer assignment deleted locally. Save timers to keep it.", "warning");
    });
    actions.append(edit, remove);
    row.append(field, actions);
    list.append(row);
  });
}

function addTimerToSlot(slotName) {
  if (!timerConfigCache?.timers?.length) return;
  timerConfigCache.slots[slotName].timerIds.push(timerConfigCache.timers[0].id);
  syncTimerSettingsControls();
  setTimerStatus("Timer assignment added locally. Save timers to keep it.", "warning");
}

function renderTimerEditorSelect(previousId = "") {
  timerEditorSelect.innerHTML = "";
  for (const timer of timerConfigCache.timers) {
    const option = document.createElement("option");
    option.value = timer.id;
    option.textContent = timerLabel(timer);
    timerEditorSelect.append(option);
  }
  const fallbackId = timerConfigCache.timers[0]?.id || "";
  timerEditorSelect.value = timerConfigCache.timers.some((timer) => timer.id === previousId) ? previousId : fallbackId;
}

function renderEditableList(listNode, values, placeholder, onChange) {
  if (!listNode) return;
  listNode.innerHTML = "";
  const safeValues = Array.isArray(values) && values.length ? values : [""];
  safeValues.forEach((value, index) => {
    const row = document.createElement("div");
    row.className = "timer-edit-row";
    const input = document.createElement("input");
    input.type = "text";
    input.value = value || "";
    input.placeholder = placeholder;
    input.addEventListener("input", () => onChange(index, input.value));
    const remove = document.createElement("button");
    remove.className = "settings-small-button timer-row-remove";
    remove.type = "button";
    remove.textContent = "Remove";
    remove.addEventListener("click", () => onChange(index, null));
    row.append(input, remove);
    listNode.append(row);
  });
}

function renderTimerEditorFields() {
  const timer = selectedTimer();
  const disabled = !timer;
  for (const control of [timerFieldEnabled, timerFieldType, timerFieldId, timerFieldEmoji, timerFieldTitle, timerFieldHeroTitle, timerFieldSubtitle, timerFieldDetailLabel, timerFieldTarget, timerFieldStart, timerFieldShowBefore, timerFieldShowAfter, timerFieldMilestoneStep]) {
    control.disabled = disabled;
  }
  if (!timer) return;
  timerFieldEnabled.checked = timer.enabled !== false;
  timerFieldType.value = timer.type || "countdown";
  timerFieldId.value = timer.id || "";
  timerFieldEmoji.value = timer.emoji || "";
  timerFieldTitle.value = timer.title || "";
  timerFieldHeroTitle.value = timer.heroTitle || "";
  timerFieldSubtitle.value = timer.subtitle || "";
  timerFieldDetailLabel.value = timer.detailLabel || timer.factsLabel || "";
  timerFieldTarget.value = toLocalDateTimeInput(timer.target);
  timerFieldStart.value = toLocalDateTimeInput(timer.start);
  timerFieldShowBefore.value = timer.showFromDaysBefore ?? 365;
  timerFieldShowAfter.value = timer.showUntilDaysAfter ?? 14;
  timerFieldMilestoneStep.value = timer.milestoneStepDays ?? 500;
  renderEditableList(timerDetailList, timer.details, "Popup detail text", (index, value) => updateTimerListField("details", index, value));
  renderEditableList(timerImageList, timer.images, "https://example.com/image.jpg", (index, value) => updateTimerListField("images", index, value));
  renderEditableList(timerImageQueryList, timer.imageQueries, "family vacation destination", (index, value) => updateTimerListField("imageQueries", index, value));
}

function updateTimerListField(field, index, value) {
  const timer = selectedTimer();
  if (!timer) return;
  const list = Array.isArray(timer[field]) ? [...timer[field]] : [];
  if (value === null) {
    list.splice(index, 1);
    timer[field] = list;
    if (field === "details" && timer.type === "countdown") timer.facts = [...timer[field]];
    renderTimerEditorFields();
  } else {
    list[index] = value;
    timer[field] = list;
    if (field === "details" && timer.type === "countdown") timer.facts = [...timer[field]];
  }
  setTimerStatus("Timer details changed locally. Save timers to keep it.", "warning");
}

function addTimerListItem(field) {
  const timer = selectedTimer();
  if (!timer) return;
  if (!Array.isArray(timer[field])) timer[field] = [];
  timer[field].push("");
  renderTimerEditorFields();
}

function updateSelectedTimerFromFields() {
  const timer = selectedTimer();
  if (!timer) return;
  const oldId = timer.id;
  const newId = (timerFieldId.value || oldId || "timer").trim().toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "") || oldId;
  timer.enabled = timerFieldEnabled.checked;
  timer.type = timerFieldType.value === "countup" ? "countup" : "countdown";
  timer.id = newId;
  timer.emoji = timerFieldEmoji.value.trim();
  timer.title = timerFieldTitle.value.trim() || newId;
  timer.heroTitle = timerFieldHeroTitle.value.trim();
  timer.subtitle = timerFieldSubtitle.value.trim();
  timer.detailLabel = timerFieldDetailLabel.value.trim() || (timer.type === "countup" ? "Love note" : "Fun fact");
  timer.target = fromLocalDateTimeInput(timerFieldTarget.value, timer.target);
  timer.start = fromLocalDateTimeInput(timerFieldStart.value, timer.start);
  timer.showFromDaysBefore = Number(timerFieldShowBefore.value || 365);
  timer.showUntilDaysAfter = Number(timerFieldShowAfter.value || 14);
  timer.milestoneStepDays = Number(timerFieldMilestoneStep.value || 500);
  if (timer.type === "countdown") {
    timer.factsLabel = timer.detailLabel;
    timer.facts = Array.isArray(timer.details) ? [...timer.details] : [];
  }
  if (oldId !== newId) {
    for (const slot of Object.values(timerConfigCache.slots)) {
      slot.timerIds = slot.timerIds.map((id) => id === oldId ? newId : id);
    }
    syncTimerSettingsControls(newId);
  } else {
    const selectedOption = timerEditorSelect.querySelector(`option[value="${CSS.escape(timer.id)}"]`);
    if (selectedOption) selectedOption.textContent = timerLabel(timer);
  }
  setTimerStatus("Timer changed locally. Save timers to keep it.", "warning");
}

function addNewTimer() {
  if (!timerConfigCache) return;
  let index = timerConfigCache.timers.length + 1;
  let id = `new-timer-${index}`;
  while (timerConfigCache.timers.some((timer) => timer.id === id)) {
    index += 1;
    id = `new-timer-${index}`;
  }
  timerConfigCache.timers.push({
    id,
    type: "countdown",
    title: "New Timer",
    emoji: "⏳",
    target: "2026-12-31T00:00:00-07:00",
    subtitle: "New countdown target",
    heroTitle: "Something good is coming",
    detailLabel: "Detail",
    details: [],
    images: [],
    imageQueries: [],
    showFromDaysBefore: 365,
    showUntilDaysAfter: 14,
    enabled: true
  });
  syncTimerSettingsControls(id);
  setTimerStatus("New timer added locally. Save timers to keep it.", "warning");
}

function deleteSelectedTimer() {
  const timer = selectedTimer();
  if (!timer || timerConfigCache.timers.length <= 1) return;
  timerConfigCache.timers = timerConfigCache.timers.filter((item) => item.id !== timer.id);
  for (const slot of Object.values(timerConfigCache.slots)) {
    slot.timerIds = slot.timerIds.filter((id) => id !== timer.id);
  }
  syncTimerSettingsControls();
  setTimerStatus("Timer deleted locally. Save timers to keep it.", "warning");
}

function syncTimerSettingsControls(selectedId = timerEditorSelect?.value || "") {
  if (!timerConfigCache) return;
  timerLeftEnabledInput.checked = timerConfigCache.slots.lowerLeft.enabled;
  timerRightEnabledInput.checked = timerConfigCache.slots.lowerRight.enabled;
  renderTimerEditorSelect(selectedId);
  renderSlotAssignmentRows("lowerLeft");
  renderSlotAssignmentRows("lowerRight");
  renderTimerEditorFields();
}

async function loadTimerSettingsConfig() {
  try {
    await loadTimerConfig({ force: true });
    syncTimerSettingsControls();
    setTimerStatus("Timer settings loaded.", "success");
  } catch (error) {
    console.error("Timer settings load failed:", error);
    setTimerStatus(`Could not load timers: ${error.message}`, "error");
  }
}

async function saveTimerSettingsConfig() {
  try {
    updateSelectedTimerFromFields();
    timerConfigCache.slots.lowerLeft.enabled = timerLeftEnabledInput.checked;
    timerConfigCache.slots.lowerRight.enabled = timerRightEnabledInput.checked;
    const ids = new Set();
    for (const timer of timerConfigCache.timers) {
      if (!timer.id) throw new Error("Every timer needs an ID.");
      if (ids.has(timer.id)) throw new Error(`Duplicate timer ID: ${timer.id}`);
      ids.add(timer.id);
      if (timer.type === "countup" && !timer.start) throw new Error(`${timer.title || timer.id} needs a count-up start.`);
      if (timer.type === "countdown" && !timer.target) throw new Error(`${timer.title || timer.id} needs a countdown target.`);
    }
    const cleanedTimers = timerConfigCache.timers.map((timer) => ({
      ...timer,
      details: Array.isArray(timer.details) ? timer.details.filter((item) => `${item || ""}`.trim()).map((item) => `${item}`.trim()) : [],
      images: Array.isArray(timer.images) ? timer.images.filter((item) => `${item || ""}`.trim()).map((item) => `${item}`.trim()) : [],
      imageQueries: Array.isArray(timer.imageQueries) ? timer.imageQueries.filter((item) => `${item || ""}`.trim()).map((item) => `${item}`.trim()) : []
    }));
    for (const timer of cleanedTimers) {
      if (timer.type === "countdown") timer.facts = [...(timer.details || [])];
    }
    const payload = normalizeTimerConfig({
      version: 1,
      rotationSeconds: Number(dashboardSettings.rotationSeconds || 12),
      slots: timerConfigCache.slots,
      timers: cleanedTimers
    });
    const response = await fetch(TIMERS_DATA_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const saved = await response.json();
    if (!response.ok) throw new Error(saved?.error || `Save failed: ${response.status}`);
    timerConfigCache = normalizeTimerConfig(saved);
    syncTimerSettingsControls(timerEditorSelect.value);
    await refreshTimers();
    setTimerStatus("Timer settings saved.", "success");
  } catch (error) {
    console.error("Timer settings save failed:", error);
    setTimerStatus(`Could not save timers: ${error.message}`, "error");
  }
}


async function enrichSelectedTimerWithAI() {
  const timer = selectedTimer();
  if (!timer) {
    setTimerStatus("Select a timer first.", "warning");
    return;
  }
  updateSelectedTimerFromFields();
  const latestTimer = selectedTimer();
  if (timerAiEnrichButton) timerAiEnrichButton.disabled = true;
  setTimerStatus("Asking AI to enrich this timer…");
  try {
    const response = await fetch(TIMER_AI_ENRICH_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timer: latestTimer,
        context: {
          dashboardName: dashboardSettings.dashboardTitle || DEFAULT_SETTINGS.dashboardTitle,
          colorTheme: dashboardSettings.colorTheme || DEFAULT_SETTINGS.colorTheme
        }
      })
    });
    const data = await response.json();
    if (!response.ok || data.error) throw new Error(data.error || "AI enrichment failed");
    const suggestions = data.suggestions || {};
    if (suggestions.emoji) latestTimer.emoji = suggestions.emoji;
    if (suggestions.heroTitle) latestTimer.heroTitle = suggestions.heroTitle;
    if (suggestions.subtitle) latestTimer.subtitle = suggestions.subtitle;
    if (suggestions.detailLabel) {
      latestTimer.detailLabel = suggestions.detailLabel;
      if (latestTimer.type === "countdown") latestTimer.factsLabel = suggestions.detailLabel;
    }
    if (Array.isArray(suggestions.details) && suggestions.details.length) {
      latestTimer.details = suggestions.details;
      if (latestTimer.type === "countdown") latestTimer.facts = [...suggestions.details];
    }
    if (Array.isArray(suggestions.imageQueries) && suggestions.imageQueries.length) {
      latestTimer.imageQueries = suggestions.imageQueries;
    }
    syncTimerSettingsControls(latestTimer.id);
    setTimerStatus(`AI suggestions applied locally from ${data.model || "configured model"}. Review, tweak, then Save timers.`, "success");
  } catch (error) {
    console.error("Timer AI enrichment failed:", error);
    setTimerStatus(error.message || "AI enrichment failed.", "error");
  } finally {
    if (timerAiEnrichButton) timerAiEnrichButton.disabled = false;
  }
}

function syncBottomBarRotationInterval() {
  const intervalMs = Math.max(4, Number(countdownRotationSeconds) || 12) * 1000;
  if (countdownRotationIntervalId) clearInterval(countdownRotationIntervalId);
  if (familyMessageRotationIntervalId) clearInterval(familyMessageRotationIntervalId);
  countdownRotationIntervalId = setInterval(rotateTimerSlots, intervalMs);
  familyMessageRotationIntervalId = setInterval(showNextFamilyMessage, intervalMs);
}

function getTimerById(config, id) {
  return config.timers.find((timer) => timer.id === id);
}

function isTimerActive(timer) {
  if (!timer || timer.enabled === false) return false;
  if (timer.type === "countup") return Boolean(timer.start);
  if (!timer.target) return false;
  const metrics = getCountdownMetrics(timer);
  const before = Number(timer.showFromDaysBefore ?? 365);
  const after = Number(timer.showUntilDaysAfter ?? 14);
  return metrics.diffDays <= before && metrics.diffDays >= -after;
}

async function refreshTimers() {
  const config = await loadTimerConfig();
  countdownRotationSeconds = Number(dashboardSettings.rotationSeconds || config.rotationSeconds || 12);
  syncBottomBarRotationInterval();
  for (const slotName of ["lowerLeft", "lowerRight"]) {
    const slot = config.slots[slotName];
    activeTimerSlots[slotName] = slot.enabled
      ? slot.timerIds.map((id) => getTimerById(config, id)).filter(isTimerActive)
      : [];
    if (activeTimerSlotIndexes[slotName] >= activeTimerSlots[slotName].length) activeTimerSlotIndexes[slotName] = 0;
    renderTimerSlot(slotName);
  }
}

async function refreshCountdowns() {
  return refreshTimers();
}

function getActiveTimerForSlot(slotName) {
  const timers = activeTimerSlots[slotName] || [];
  return timers[activeTimerSlotIndexes[slotName] || 0] || null;
}

function getTimerSlotNodes(slotName) {
  if (slotName === "lowerRight") {
    return {
      block: countupBlock,
      emoji: countupBlock?.querySelector(".countup-emoji"),
      label: countupBlock?.querySelector(".countup-label"),
      text: document.getElementById("countup-text")
    };
  }
  return {
    block: countdownBlock,
    emoji: countdownBlock?.querySelector(".countdown-emoji"),
    label: countdownBlock?.querySelector(".countdown-label"),
    text: document.getElementById("countdown-text")
  };
}

function renderTimerSlot(slotName) {
  const active = getActiveTimerForSlot(slotName);
  const nodes = getTimerSlotNodes(slotName);
  if (!active) {
    nodes.emoji.textContent = slotName === "lowerRight" ? "💍" : "⏳";
    nodes.label.textContent = slotName === "lowerRight" ? "Right timer" : "Left timer";
    nodes.text.textContent = "No active timer configured";
    return;
  }
  const metrics = active.type === "countup" ? getCountupMetrics(active) : getCountdownMetrics(active);
  nodes.emoji.textContent = active.emoji || (active.type === "countup" ? "⏱️" : "⏳");
  nodes.label.textContent = active.title || "Timer";
  nodes.text.textContent = active.type === "countup" ? countupSummaryText(active, metrics) : countdownSummaryText(active, metrics);
}

function rotateTimerSlots() {
  for (const slotName of ["lowerLeft", "lowerRight"]) {
    const timers = activeTimerSlots[slotName] || [];
    if (!timers.length) continue;
    if (Date.now() < countdownRotationPausedUntil) continue;
    activeTimerSlotIndexes[slotName] = ((activeTimerSlotIndexes[slotName] || 0) + 1) % timers.length;
    renderTimerSlot(slotName);
  }
}

function getCountupMetrics(item) {
  const now = new Date();
  const start = new Date(item.start);
  const diffMs = Math.max(0, now - start);
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
  const seconds = Math.floor((diffMs / 1000) % 60);

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let dayOfMonth = now.getDate() - start.getDate();
  if (dayOfMonth < 0) {
    months -= 1;
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    dayOfMonth += previousMonth.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const nextAnniversary = new Date(now.getFullYear(), start.getMonth(), start.getDate(), start.getHours(), start.getMinutes());
  if (nextAnniversary <= now) nextAnniversary.setFullYear(nextAnniversary.getFullYear() + 1);
  const daysToAnniversary = Math.ceil((nextAnniversary - now) / (24 * 60 * 60 * 1000));
  const milestoneStep = Number(item.milestoneStepDays || 500);
  const nextMilestone = Math.ceil((days + 1) / milestoneStep) * milestoneStep;
  const daysToMilestone = nextMilestone - days;
  return {
    start,
    days,
    hours,
    minutes,
    seconds,
    totalHours: Math.floor(diffMs / (1000 * 60 * 60)),
    totalMinutes: Math.floor(diffMs / (1000 * 60)),
    years,
    months,
    dayOfMonth,
    anniversaries: Math.max(0, now.getFullYear() - start.getFullYear() - (now < new Date(now.getFullYear(), start.getMonth(), start.getDate(), start.getHours(), start.getMinutes()) ? 1 : 0)),
    daysToAnniversary,
    nextMilestone,
    daysToMilestone
  };
}

function countupSummaryText(item, metrics) {
  if (item.summaryTemplate) return item.summaryTemplate
    .replace(/\{days\}/g, metrics.days.toLocaleString())
    .replace(/\{hours\}/g, metrics.hours)
    .replace(/\{minutes\}/g, metrics.minutes)
    .replace(/\{seconds\}/g, metrics.seconds);
  return `${metrics.days}d ${metrics.hours}h ${metrics.minutes}m ${metrics.seconds}s`;
}

function updateHappilyEverAfter() {
  renderTimerSlot("lowerRight");
}

function timerDetails(item) {
  const details = Array.isArray(item.details) && item.details.length ? item.details : (Array.isArray(item.facts) ? item.facts : []);
  return details.length ? details : [item.type === "countup" ? "More memories coming soon." : "More details coming soon."];
}

function rotateTimerDetail() {
  if (!activeTimerDetail) return;
  const details = timerDetails(activeTimerDetail);
  timerDetailText.textContent = details[timerDetailIndex % details.length];
  timerDetailIndex = (timerDetailIndex + 1) % details.length;
}

function rotateTimerImage() {
  if (!activeTimerDetail) return;
  const images = Array.isArray(activeTimerDetail.images) ? activeTimerDetail.images : [];
  if (!images.length) {
    timerModalImage.style.backgroundImage = "none";
    timerModalImage.classList.add("hidden");
    timerModalIcon.classList.remove("hidden");
    return;
  }
  timerModalIcon.classList.add("hidden");
  timerModalImage.classList.remove("hidden");
  const imageUrl = images[timerImageIndex % images.length];
  timerModalImage.style.backgroundImage = `url("${imageUrl}")`;
  timerImageIndex = (timerImageIndex + 1) % images.length;
}

function openTimerModal(slotName) {
  const active = getActiveTimerForSlot(slotName);
  if (!active) return;
  const metrics = active.type === "countup" ? getCountupMetrics(active) : getCountdownMetrics(active);
  activeTimerDetail = active;
  timerDetailIndex = 0;
  timerImageIndex = 0;
  countdownRotationPausedUntil = Date.now() + (countdownRotationSeconds * 1000);
  timerModalKicker.textContent = active.title || "Timer";
  timerModalIcon.textContent = active.emoji || (active.type === "countup" ? "⏱️" : "⏳");
  timerModalTitle.textContent = active.heroTitle || active.title || "Timer details";
  timerModalSubtitle.textContent = active.subtitle || (active.type === "countup" ? `Started ${active.start}` : `Target ${active.target}`);
  timerDetailLabel.textContent = active.detailLabel || active.factsLabel || (active.type === "countup" ? "Love note" : "Fun fact");

  if (active.type === "countup") {
    timerModalTotal.textContent = `${metrics.days.toLocaleString()} days and counting`;
    timerModalComparison.textContent = `${metrics.totalHours.toLocaleString()} hours, ${metrics.totalMinutes.toLocaleString()} minutes`;
    timerStat1Label.textContent = "Together for";
    timerStat1.textContent = `${metrics.years} years, ${metrics.months} months, ${metrics.dayOfMonth} days`;
    timerStat2Label.textContent = "Next anniversary";
    timerStat2.textContent = `${metrics.daysToAnniversary} days to go`;
    timerStat3Label.textContent = "Next milestone";
    timerStat3.textContent = `${metrics.daysToMilestone} days until ${metrics.nextMilestone.toLocaleString()} days`;
    timerStat4Label.textContent = "Hours elapsed";
    timerStat4.textContent = metrics.totalHours.toLocaleString();
  } else {
    timerModalTotal.textContent = countdownSummaryText(active, metrics);
    timerModalComparison.textContent = buildCountdownMilestoneText(active, metrics);
    timerStat1Label.textContent = "Days to go";
    timerStat1.textContent = `${Math.max(0, metrics.diffDays)}`;
    timerStat2Label.textContent = "Weeks to go";
    timerStat2.textContent = `${metrics.totalWeeks.toFixed(1)}`;
    timerStat3Label.textContent = "Hours to go";
    timerStat3.textContent = `${metrics.totalHours.toLocaleString()}`;
    timerStat4Label.textContent = "Progress";
    timerStat4.textContent = `${metrics.progressPct}% there`;
  }
  rotateTimerDetail();
  rotateTimerImage();
  timerModal.classList.remove("hidden");
  timerModal.setAttribute("aria-hidden", "false");
}

function closeTimerModal() {
  timerModal.classList.add("hidden");
  timerModal.setAttribute("aria-hidden", "true");
  activeTimerDetail = null;
}

function openCountdownModal() {
  openTimerModal("lowerLeft");
}

function closeCountdownModal() {
  closeTimerModal();
}

function openCountupModal() {
  openTimerModal("lowerRight");
}

function closeCountupModal() {
  closeTimerModal();
}


function getTodayKey() {
  const now = new Date();
  const month = `${now.getMonth() + 1}`.padStart(2, "0");
  const day = `${now.getDate()}`.padStart(2, "0");
  return `${month}-${day}`;
}

function selectDeterministicItem(items, salt = 0) {
  if (!Array.isArray(items) || !items.length) return "";
  const now = new Date();
  const seed = Number(`${now.getFullYear()}${`${now.getMonth() + 1}`.padStart(2, "0")}${`${now.getDate()}`.padStart(2, "0")}`);
  return items[Math.abs(seed + salt) % items.length];
}

function formatFamilyMessageAiTime(event, field) {
  if (!event || isAllDay(event)) return field === "start" ? "All day" : "";
  const value = event[field];
  return value instanceof Date ? formatTime(value) : "";
}

function serializeFamilyMessageEvent(event) {
  return {
    summary: `${event?.summary || ""}`.trim(),
    start: formatFamilyMessageAiTime(event, "start"),
    end: formatFamilyMessageAiTime(event, "end"),
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || "local",
    allDay: Boolean(isAllDay(event)),
    location: `${event?.location || ""}`.trim(),
    description: `${event?.description || ""}`.trim().slice(0, 160),
    calendarName: `${event?.calendarName || ""}`.trim()
  };
}

function roundFamilyMessageWeather(value, decimals = 0) {
  const number = Number(value);
  if (!Number.isFinite(number)) return null;
  const factor = 10 ** decimals;
  return Math.round((number + Number.EPSILON) * factor) / factor;
}

function buildFamilyMessageWeatherContext() {
  if (!lastWeatherPayload || lastWeatherPayload.error) return null;
  const data = lastWeatherPayload;
  const source = data.source === "tempest" ? "tempest" : "zip";
  const todayForecast = Array.isArray(data.forecastDays)
    ? data.forecastDays.find((day) => day?.isToday) || data.forecastDays[0]
    : null;
  const conditionText = `${data.conditionsText || todayForecast?.conditions || ""}`.trim();
  const tempF = roundFamilyMessageWeather(data.temperatureF);
  const feelsLikeF = roundFamilyMessageWeather(data.feelsLikeF ?? data.temperatureF);
  const highF = roundFamilyMessageWeather(data.dailyHighF ?? todayForecast?.highF);
  const lowF = roundFamilyMessageWeather(data.dailyLowF ?? todayForecast?.lowF);
  const windMph = roundFamilyMessageWeather(data.windAvgMph);
  const gustMph = roundFamilyMessageWeather(data.windGustMph);
  const rainChance = roundFamilyMessageWeather(todayForecast?.precipProbability);
  const rainTodayIn = roundFamilyMessageWeather(data.precipTodayIn, 2);
  const uv = roundFamilyMessageWeather(data.uv, 1);

  return {
    source,
    sourceLabel: source === "tempest" ? "Tempest local station" : "ZIP code forecast",
    conditions: conditionText,
    currentTempF: tempF,
    feelsLikeF,
    highF,
    lowF,
    windMph,
    gustMph,
    rainChancePercent: rainChance,
    rainTodayIn,
    uv,
    summary: [
      conditionText,
      tempF === null ? "" : `${tempF}° now`,
      highF === null || lowF === null ? "" : `H ${highF}° / L ${lowF}°`,
      windMph === null ? "" : `wind ${windMph} mph${gustMph !== null && gustMph > windMph ? `, gust ${gustMph}` : ""}`,
      rainChance === null ? "" : `${rainChance}% rain chance`
    ].filter(Boolean).join(" • ")
  };
}

function buildFamilyMessageAiContext() {
  const now = new Date();
  const todayKey = getDateKey(now);
  const todayEvents = latestCalendarEvents
    .filter((event) => isSameDay(event.start, now) || (event.start < now && event.end > now))
    .sort((a, b) => a.start - b.start);
  const notesForDay = Array.isArray(dayNotes[todayKey]) ? dayNotes[todayKey].filter((item) => item?.text?.trim()) : [];
  const upcomingEvents = todayEvents.filter((event) => event.end > now).slice(0, 4);

  return {
    dateKey: todayKey,
    dateLabel: new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric" }).format(now),
    weekday: new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(now),
    currentTime: now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
    events: todayEvents.slice(0, 8).map(serializeFamilyMessageEvent),
    upcomingEvents: upcomingEvents.map(serializeFamilyMessageEvent),
    weather: buildFamilyMessageWeatherContext(),
    notes: notesForDay.slice(0, 4).map((note) => ({ text: `${note.text || ""}`.trim().slice(0, 140) })),
    existingMessages: [...configuredFamilyMessages.slice(0, 8)]
  };
}

function familyMessageAiCacheSignature(context) {
  return JSON.stringify({
    dateKey: context.dateKey,
    events: context.events,
    notes: context.notes,
    upcomingEvents: context.upcomingEvents,
    weather: context.weather
  });
}

function readCachedAiFamilyMessages(cacheKey) {
  try {
    const cached = JSON.parse(localStorage.getItem(FAMILY_MESSAGE_AI_CACHE_STORAGE_KEY) || "null");
    if (!cached || cached.cacheKey !== cacheKey || !Array.isArray(cached.messages)) return [];
    return cached.messages.map((message) => `${message ?? ""}`.trim()).filter(Boolean).slice(0, 6);
  } catch {
    return [];
  }
}

function writeCachedAiFamilyMessages(cacheKey, messages) {
  const cleanMessages = Array.isArray(messages)
    ? messages.map((message) => `${message ?? ""}`.trim()).filter(Boolean).slice(0, 6)
    : [];
  if (!cleanMessages.length) return;
  try {
    localStorage.setItem(FAMILY_MESSAGE_AI_CACHE_STORAGE_KEY, JSON.stringify({
      cacheKey,
      messages: cleanMessages,
      savedAt: new Date().toISOString()
    }));
  } catch {
    // localStorage is a best-effort speed/resilience cache only.
  }
}

async function refreshAiFamilyMessages(force = false) {
  if (!aiConfig) {
    try {
      await loadAiConfig();
    } catch {
      return;
    }
  }

  if (!aiConfig?.enabled) {
    currentAiGeneratedFamilyMessages = [];
    familyMessageAiCacheKey = "";
    buildFamilyMessages({ skipAiRefresh: true });
    return;
  }

  const context = buildFamilyMessageAiContext();
  const cacheKey = familyMessageAiCacheSignature(context);
  if (!force && cacheKey === familyMessageAiCacheKey && currentAiGeneratedFamilyMessages.length) return;

  const cachedMessages = readCachedAiFamilyMessages(cacheKey);
  if (!force && cachedMessages.length && !currentAiGeneratedFamilyMessages.length) {
    currentAiGeneratedFamilyMessages = cachedMessages;
    familyMessageAiCacheKey = cacheKey;
    buildFamilyMessages({ skipAiRefresh: true });
  }

  const requestId = ++familyMessageAiRequestId;
  try {
    const response = await fetch(FAMILY_MESSAGE_AI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ schedule: context, messageCount: 4 })
    });
    const payload = await response.json();
    if (requestId !== familyMessageAiRequestId) return;
    if (!response.ok || payload.error) throw new Error(payload.error || "Failed to generate family messages");

    const generatedMessages = (Array.isArray(payload.messages) ? payload.messages : [])
      .map((message) => {
        if (message && typeof message === "object") {
          return `${message.text || message.message || message.content || ""}`.trim();
        }
        return `${message ?? ""}`.trim();
      })
      .filter(Boolean);

    if (!generatedMessages.length && currentAiGeneratedFamilyMessages.length) {
      return;
    }

    currentAiGeneratedFamilyMessages = generatedMessages;
    familyMessageAiCacheKey = cacheKey;
    writeCachedAiFamilyMessages(cacheKey, currentAiGeneratedFamilyMessages);
    buildFamilyMessages({ skipAiRefresh: true });
  } catch (error) {
    console.error("AI family message generation failed:", error);
  }
}

async function loadTodayContent() {
  const todayKey = getTodayKey();
  if (todayContentCache && todayContentCacheKey === todayKey) return todayContentCache;

  const response = await fetch(`${TODAY_CONTENT_URL}?t=${Date.now()}`);
  const payload = await response.json();

  let joke = "Why did the baseball team hire a musician? Because they needed a good pitch.";
  try {
    const jokeResponse = await fetch("https://official-joke-api.appspot.com/jokes/general/random");
    const jokePayload = await jokeResponse.json();
    const jokeItem = Array.isArray(jokePayload) ? jokePayload[0] : jokePayload;
    const combined = jokeItem?.setup && jokeItem?.punchline ? `${jokeItem.setup} ${jokeItem.punchline}` : "";
    if (combined && !/(adult|nsfw|sex|drunk|beer|bar)/i.test(combined)) joke = combined;
  } catch {
    const fallbackJoke = selectDeterministicItem(payload.defaultJokes, 3);
    if (fallbackJoke?.setup && fallbackJoke?.punchline) joke = `${fallbackJoke.setup} ${fallbackJoke.punchline}`;
  }

  todayContentCache = {
    sportsHistory: selectDeterministicItem(payload.sportsHistory?.[todayKey], 1) || "No sports history highlight loaded for today.",
    joke,
    officialHolidays: (payload.officialHolidays?.[todayKey] || []).slice(0, 3),
    observances: (payload.observances?.[todayKey] || []).slice(0, 3),
    funFact: selectDeterministicItem(payload.funFacts?.[todayKey], 7) || "Today is a good day for a fun fact.",
    dateLabel: new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric" }).format(new Date())
  };
  todayContentCacheKey = todayKey;

  return todayContentCache;
}

function scheduleTodayContentMidnightRefresh() {
  const now = new Date();
  const nextMidnight = new Date(now);
  nextMidnight.setHours(24, 0, 0, 0);
  const delay = Math.max(1000, nextMidnight.getTime() - now.getTime());

  setTimeout(() => {
    todayContentCache = null;
    todayContentCacheKey = null;
    loadTodayContent().catch(() => {});
    scheduleTodayContentMidnightRefresh();
  }, delay);
}

async function openTodayModal() {
  todayModalDate.textContent = "Loading today's highlights...";
  todaySportsHistory.textContent = "Loading...";
  todayJoke.textContent = "Loading...";
  todayObservances.textContent = "Loading...";
  todayFunFact.textContent = "Loading...";
  todayModal.classList.remove("hidden");
  todayModal.setAttribute("aria-hidden", "false");

  try {
    const data = await loadTodayContent();
    todayModalDate.textContent = data.dateLabel;
    todaySportsHistory.textContent = data.sportsHistory;
    todayJoke.textContent = data.joke;
    todayObservances.textContent = data.officialHolidays.length ? data.officialHolidays.join(" • ") : "No official holidays today.";
    todayFunFact.textContent = data.funFact;
  } catch (error) {
    todayModalDate.textContent = "Today's highlights couldn't load";
    todaySportsHistory.textContent = "Try again in a bit.";
    todayJoke.textContent = "The joke machine is taking five.";
    todayObservances.textContent = "No observances available right now.";
    todayFunFact.textContent = error.message || "Today is still a good day for a fun fact.";
  }
}

function closeTodayModal() {
  todayModal.classList.add("hidden");
  todayModal.setAttribute("aria-hidden", "true");
}

function parseICSDate(rawValue) {
  if (!rawValue) return null;

  const [valuePart, tzPart] = rawValue.split("|");
  const value = valuePart.trim();
  const tzid = tzPart?.trim();

  if (/^\d{8}$/.test(value)) {
    const year = Number(value.slice(0, 4));
    const month = Number(value.slice(4, 6)) - 1;
    const day = Number(value.slice(6, 8));
    return new Date(year, month, day);
  }

  if (/Z$/.test(value)) {
    const year = Number(value.slice(0, 4));
    const month = Number(value.slice(4, 6)) - 1;
    const day = Number(value.slice(6, 8));
    const hour = Number(value.slice(9, 11) || 0);
    const minute = Number(value.slice(11, 13) || 0);
    const second = Number(value.slice(13, 15) || 0);
    return new Date(Date.UTC(year, month, day, hour, minute, second));
  }

  const compact = value.replace(/[-:]/g, "");
  const year = Number(compact.slice(0, 4));
  const month = Number(compact.slice(4, 6)) - 1;
  const day = Number(compact.slice(6, 8));
  const hour = Number(compact.slice(9, 11) || 0);
  const minute = Number(compact.slice(11, 13) || 0);
  const second = Number(compact.slice(13, 15) || 0);

  if (!tzid || tzid === "America/Phoenix") {
    return new Date(year, month, day, hour, minute, second);
  }

  const utcGuess = new Date(Date.UTC(year, month, day, hour, minute, second));
  const tzFormatted = new Intl.DateTimeFormat("en-US", {
    timeZone: tzid,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23"
  }).formatToParts(utcGuess);

  const getPart = (type) => Number(tzFormatted.find((part) => part.type === type)?.value || 0);
  const tzYear = getPart("year");
  const tzMonth = getPart("month") - 1;
  const tzDay = getPart("day");
  const tzHour = getPart("hour");
  const tzMinute = getPart("minute");
  const tzSecond = getPart("second");

  const asUtc = Date.UTC(year, month, day, hour, minute, second);
  const interpretedUtc = Date.UTC(tzYear, tzMonth, tzDay, tzHour, tzMinute, tzSecond);
  const offsetMs = interpretedUtc - asUtc;

  return new Date(asUtc - offsetMs);
}

function decodeICSValue(value) {
  return value
    .replace(/\\n/g, "\n")
    .replace(/\\,/g, ",")
    .replace(/\\;/g, ";")
    .replace(/\\\\/g, "\\");
}

function parseICS(text, calendarMeta) {
  const lines = text.replace(/\r\n/g, "\n").replace(/\n /g, "").split("\n");
  const events = [];
  let current = null;

  for (const line of lines) {
    if (line === "BEGIN:VEVENT") {
      current = { calendarName: calendarMeta.name, calendarColor: calendarMeta.color };
      continue;
    }
    if (line === "END:VEVENT") {
      if (current?.start && current?.end && current?.summary) {
        events.push(current);
      }
      current = null;
      continue;
    }
    if (!current) continue;

    const [rawKey, ...rest] = line.split(":");
    const value = rest.join(":");
    const key = rawKey.split(";")[0];
    const tzMatch = rawKey.match(/TZID=([^;:]+)/);
    const cnMatch = rawKey.match(/CN=([^;:]+)/);
    const valueWithTz = tzMatch ? `${value}|${tzMatch[1]}` : value;
    const decodedValue = decodeICSValue(value);

    if (key === "SUMMARY") current.summary = decodedValue;
    if (key === "LOCATION") current.location = decodedValue;
    if (key === "DESCRIPTION") current.description = decodedValue;
    if (key === "DTSTART") current.start = parseICSDate(valueWithTz);
    if (key === "DTEND") current.end = parseICSDate(valueWithTz);
    if (key === "ORGANIZER") {
      current.organizer = cnMatch ? decodeICSValue(cnMatch[1]) : decodedValue.replace(/^mailto:/i, "");
      current.organizerEmail = decodedValue.replace(/^mailto:/i, "");
    }
  }

  return events;
}

function eventForDay(event, dayStart, dayEnd) {
  return event.start < dayEnd && event.end > dayStart;
}

function isAllDay(event) {
  const duration = event.end - event.start;
  return event.start.getHours() === 0 && event.start.getMinutes() === 0 && duration >= 24 * 60 * 60 * 1000;
}

function formatEventRange(event) {
  if (isAllDay(event)) {
    return event.start.toDateString() === addDays(event.end, -1).toDateString()
      ? `${new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric" }).format(event.start)} • All day`
      : `${new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric" }).format(event.start)} - ${new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric" }).format(addDays(event.end, -1))} • All day`;
  }

  if (event.start.toDateString() === event.end.toDateString()) {
    return `${formatDateTime(event.start)} - ${formatTime(event.end)}`;
  }

  return `${formatDateTime(event.start)} - ${formatDateTime(event.end)}`;
}

function openEventModal(event) {
  eventModalCalendar.textContent = event.calendarName || "Calendar";
  eventModalCalendar.style.color = event.calendarColor || "#7dd3c7";
  eventModalTitle.textContent = event.summary || "Event";
  eventModalTime.textContent = formatEventRange(event);

  if (event.location) {
    eventModalLocation.textContent = event.location;
    eventModalLocationRow.classList.remove("hidden");
  } else {
    eventModalLocation.textContent = "";
    eventModalLocationRow.classList.add("hidden");
  }

  if (event.organizer || event.organizerEmail) {
    const organizerLabel = event.organizer && event.organizerEmail && event.organizer !== event.organizerEmail
      ? `${event.organizer} (${event.organizerEmail})`
      : (event.organizer || event.organizerEmail);
    eventModalOrganizer.textContent = organizerLabel;
    eventModalOrganizerRow.classList.remove("hidden");
  } else {
    eventModalOrganizer.textContent = "";
    eventModalOrganizerRow.classList.add("hidden");
  }

  if (event.description) {
    eventModalDescription.textContent = event.description;
    eventModalDescriptionRow.classList.remove("hidden");
  } else {
    eventModalDescription.textContent = "";
    eventModalDescriptionRow.classList.add("hidden");
  }

  eventModal.classList.remove("hidden");
  eventModal.setAttribute("aria-hidden", "false");
}

function closeEventModal() {
  eventModal.classList.add("hidden");
  eventModal.setAttribute("aria-hidden", "true");
}

function parseWeatherTimestamp(timestamp) {
  if (!timestamp) return null;
  if (typeof timestamp === "number") return new Date(timestamp * 1000);
  const parsed = new Date(timestamp);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatWeatherUpdated(timestamp) {
  const date = parseWeatherTimestamp(timestamp);
  if (!date) return "Updated recently";
  return `Updated ${new Intl.DateTimeFormat("en-US", { weekday: "short", hour: "numeric", minute: "2-digit" }).format(date)}`;
}

function formatClockTime(timestamp) {
  const date = parseWeatherTimestamp(timestamp);
  if (!date) return "--";
  return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit" }).format(date);
}

function formatWeatherNumber(value, suffix = "", decimals = 0) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "--";
  const factor = 10 ** decimals;
  return `${Math.round((number + Number.EPSILON) * factor) / factor}${suffix}`;
}

function formatWeatherInches(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "--";
  return `${Math.round((number + Number.EPSILON) * 100) / 100} in`;
}

function iconForForecast(condition = "") {
  const normalized = condition.toLowerCase();
  if (normalized.includes("storm") || normalized.includes("thunder")) return "⛈️";
  if (normalized.includes("rain") || normalized.includes("drizzle") || normalized.includes("shower")) return "🌧️";
  if (normalized.includes("cloud")) return "⛅";
  if (normalized.includes("fog")) return "🌫️";
  return "☀️";
}

function formatForecastDayLabel(dayName) {
  if (!dayName || !dayName.includes("/")) return dayName || "Day";
  const [month, day] = dayName.split("/").map(Number);
  const date = new Date(new Date().getFullYear(), month - 1, day);
  return new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);
}

function getWeatherForDate(date) {
  const dateKey = getDateKey(date);
  const historyEntry = lastWeatherPayload?.historyDays?.[dateKey] || null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const targetDate = new Date(date);
  targetDate.setHours(0, 0, 0, 0);
  const isPastDay = targetDate < today;

  if (isPastDay && historyEntry) {
    return {
      highF: historyEntry.actualHighF ?? historyEntry.forecastHighF ?? null,
      lowF: historyEntry.actualLowF ?? historyEntry.forecastLowF ?? null,
      precipProbability: historyEntry.precipProbability ?? null
    };
  }

  if (historyEntry) {
    return {
      highF: historyEntry.forecastHighF ?? historyEntry.actualHighF ?? null,
      lowF: historyEntry.forecastLowF ?? historyEntry.actualLowF ?? null,
      precipProbability: historyEntry.precipProbability ?? null
    };
  }

  if (!lastWeatherPayload?.forecastDays?.length) return null;
  return lastWeatherPayload.forecastDays.find((forecastDay) => forecastDay?.date === dateKey) || null;
}

function openWeatherModal() {
  if (!lastWeatherPayload) return;

  const data = lastWeatherPayload;
  const isPublicWeather = data.source === "public";
  weatherModalStation.textContent = data.stationName || (isPublicWeather ? "ZIP code weather" : "Tempest Weather");
  weatherModalTitle.textContent = data.conditionsText || (isPublicWeather ? "Public weather forecast" : "Weather details");
  weatherModalUpdated.textContent = formatWeatherUpdated(data.timestamp);
  weatherHeroMeta.textContent = `H ${formatWeatherNumber(data.dailyHighF ?? data.temperatureF, "°")} / L ${formatWeatherNumber(data.dailyLowF ?? data.temperatureF, "°")} • Feels like ${formatWeatherNumber(data.feelsLikeF ?? data.temperatureF, "°")}`;
  weatherHeroIcon.textContent = iconForForecast(data.conditionsText);
  weatherHeroTemp.textContent = formatWeatherNumber(data.temperatureF, "°");
  weatherSunrise.textContent = formatClockTime(data.sunrise);
  weatherSunset.textContent = formatClockTime(data.sunset);
  weatherDetailTemp.textContent = formatWeatherNumber(data.temperatureF, "°");
  weatherDetailFeelsLike.textContent = formatWeatherNumber(data.feelsLikeF ?? data.temperatureF, "°");
  weatherDetailHumidity.textContent = formatWeatherNumber(data.humidity, "%");
  weatherDetailWind.textContent = `${formatWeatherNumber(data.windAvgMph, " mph")}${Number.isFinite(Number(data.windGustMph)) && Number(data.windGustMph) > Number(data.windAvgMph || 0) ? `, gust ${Math.round(Number(data.windGustMph))}` : ""}`;
  weatherDetailUv.textContent = formatWeatherNumber(data.uv, "", 1);
  weatherDetailSolar.textContent = formatWeatherNumber(data.solarRadiation, " W/m²");
  weatherDetailRain.textContent = formatWeatherInches(data.precipTodayIn);
  weatherDetailRainYesterday.textContent = formatWeatherInches(data.precipYesterdayIn);
  weatherDetailRainHour.textContent = formatWeatherInches(data.precipLastHourIn);
  const lightningAgeSeconds = data.lightningLastEpoch ? Math.max(0, Math.floor(Date.now() / 1000) - data.lightningLastEpoch) : null;
  const lightningIsRecent = lightningAgeSeconds !== null && lightningAgeSeconds <= 3 * 60 * 60;
  weatherDetailLightning.textContent = isPublicWeather
    ? "Not provided by ZIP forecast"
    : (lightningIsRecent && data.lightningLastDistanceMi
      ? `Recent lightning: ${data.lightningLastDistanceMi} mi away`
      : "No recent lightning nearby");

  weatherForecast.innerHTML = "";
  for (const day of data.forecastDays || []) {
    const card = document.createElement("article");
    card.className = `forecast-card${day.isToday ? " forecast-card-today" : ""}`;
    const emoji = iconForForecast(day.conditions);
    card.innerHTML = `
      <div class="forecast-day-row">
        <div class="forecast-day">${formatForecastDayLabel(day.dayName)}</div>
        <div class="forecast-icon" aria-hidden="true">${emoji}</div>
      </div>
      <div class="forecast-date">${day.dayName}</div>
      <div class="forecast-conditions">${day.conditions || "Weather"}</div>
      <div class="forecast-temps"><span class="forecast-high">${Math.round(day.highF ?? 0)}°</span><span class="forecast-low">${Math.round(day.lowF ?? 0)}°</span></div>
      <div class="forecast-precip">Rain ${Math.round(day.precipProbability ?? 0)}%</div>
    `;
    weatherForecast.appendChild(card);
  }

  weatherModal.classList.remove("hidden");
  weatherModal.setAttribute("aria-hidden", "false");
}

function closeWeatherModal() {
  weatherModal.classList.add("hidden");
  weatherModal.setAttribute("aria-hidden", "true");
}

function updateDayOverflowState(dayNode, container) {
  const hasOverflow = container.scrollHeight > container.clientHeight + 2;
  dayNode.classList.toggle("scrollable", hasOverflow);
  container.classList.toggle("scrollable", hasOverflow);
  if (hasOverflow) {
    container.setAttribute("tabindex", "0");
    container.setAttribute("aria-label", "Scrollable list of events for this day");
  } else {
    container.removeAttribute("tabindex");
    container.removeAttribute("aria-label");
  }
}

function renderWeek(events) {
  weekGrid.innerHTML = "";
  const now = new Date();
  const currentWeekStart = startOfWeek(now);
  const weekStart = addDays(currentWeekStart, displayedWeekOffset * 7);
  setHeaderDates(weekStart, displayedWeekOffset);

  for (let i = 0; i < 7; i++) {
    const day = addDays(weekStart, i);
    const dayEnd = addDays(day, 1);
    const dateKey = getDateKey(day);
    const node = dayTemplate.content.firstElementChild.cloneNode(true);
    const isToday = day.toDateString() === now.toDateString();
    if (isToday) node.classList.add("today");

    node.querySelector(".day-name").textContent = formatDayLabel(day);
    node.querySelector(".day-date").textContent = formatDateLabel(day);

    const dayHeader = node.querySelector(".day-header");
    dayHeader.setAttribute("role", "button");
    dayHeader.setAttribute("tabindex", "0");
    dayHeader.setAttribute("aria-label", `Add or edit a note for ${formatDayLabel(day)} ${formatDateLabel(day)}`);
    dayHeader.addEventListener("click", () => openDayNoteModal(day));
    dayHeader.addEventListener("keydown", (keyboardEvent) => {
      if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
        keyboardEvent.preventDefault();
        openDayNoteModal(day);
      }
    });

    const dayEvents = events
      .filter((event) => eventForDay(event, day, dayEnd))
      .sort((a, b) => a.start - b.start);

    const notesForDay = Array.isArray(dayNotes[dateKey]) ? dayNotes[dateKey].filter((item) => item?.text?.trim()) : [];
    const densityCount = dayEvents.length + notesForDay.length;
    node.style.setProperty("--day-density-count", `${densityCount}`);
    if (densityCount >= 8) node.classList.add("ultra-dense");
    else if (densityCount >= 6) node.classList.add("very-dense");
    else if (densityCount >= 4) node.classList.add("dense");

    const container = node.querySelector(".events");
    if (dashboardSettings.showDailyWeather) {
      const forecast = getWeatherForDate(day);
      const forecastBadge = document.createElement("div");
      forecastBadge.className = "day-forecast-badge";
      forecastBadge.textContent = forecast
        ? `H ${Math.round(forecast.highF ?? 0)}° / L ${Math.round(forecast.lowF ?? 0)}° • ${Math.round(forecast.precipProbability ?? 0)}% rain`
        : "H --° / L --° • --% rain";
      dayHeader.appendChild(forecastBadge);
    }
    if (densityCount > 0) {
      const countBadge = document.createElement("div");
      countBadge.className = "event-count-badge";
      countBadge.textContent = `${densityCount} ${densityCount === 1 ? "item" : "items"}`;
      dayHeader.appendChild(countBadge);
    }

    for (const note of notesForDay) {
      const noteCard = eventTemplate.content.firstElementChild.cloneNode(true);
      noteCard.classList.add("day-note-card", "all-day");
      noteCard.style.setProperty("--calendar-color", "#b6f3ea");
      noteCard.querySelector(".event-time").textContent = "Note";
      noteCard.querySelector(".event-title").textContent = note.text;
      noteCard.querySelector(".event-calendar-name").textContent = "Tap to edit";
      noteCard.addEventListener("click", () => openDayNoteModal(day, note));
      noteCard.addEventListener("keydown", (keyboardEvent) => {
        if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
          keyboardEvent.preventDefault();
          openDayNoteModal(day, note);
        }
      });
      container.appendChild(noteCard);
    }

    if (dayEvents.length === 0 && notesForDay.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.textContent = "Nothing scheduled";
      container.appendChild(empty);
    } else {
      for (const event of dayEvents) {
        const card = eventTemplate.content.firstElementChild.cloneNode(true);
        const allDay = isAllDay(event);
        if (allDay) card.classList.add("all-day");
        card.style.setProperty("--calendar-color", event.calendarColor || "#7dd3c7");
        card.querySelector(".event-time").textContent = allDay ? "All day" : formatTime(event.start);
        card.querySelector(".event-title").textContent = event.summary;
        const calendarNameNode = card.querySelector(".event-calendar-name");
        calendarNameNode.textContent = event.calendarName || "Calendar";
        calendarNameNode.classList.toggle("hidden", !dashboardSettings.showCalendarNames);
        card.addEventListener("click", () => openEventModal(event));
        card.addEventListener("keydown", (keyboardEvent) => {
          if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
            keyboardEvent.preventDefault();
            openEventModal(event);
          }
        });
        container.appendChild(card);
      }
    }

    weekGrid.appendChild(node);
    requestAnimationFrame(() => updateDayOverflowState(node, container));
  }
}


function showCalendarSourceStatus(message, isError = false) {
  if (!calendarSourceStatus) return;
  if (!message) {
    calendarSourceStatus.textContent = "";
    calendarSourceStatus.classList.add("hidden");
    calendarSourceStatus.style.color = "";
    return;
  }
  calendarSourceStatus.textContent = message;
  calendarSourceStatus.style.color = isError ? "#fecaca" : "";
  calendarSourceStatus.classList.remove("hidden");
}

function createCalendarSourceId() {
  return `calendar-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

function renderCalendarSourceList() {
  if (!calendarSourceList) return;
  calendarSourceList.innerHTML = "";

  if (!calendarSources.length) {
    const empty = document.createElement("div");
    empty.className = "family-message-empty";
    empty.textContent = "No calendar sources yet. Add one to start populating the week.";
    calendarSourceList.appendChild(empty);
    return;
  }

  calendarSources.forEach((source, index) => {
    const row = document.createElement("div");
    row.className = "calendar-source-item";
    row.dataset.calendarSourceId = source.id;

    const enabledLabel = document.createElement("label");
    enabledLabel.className = "calendar-source-enabled";
    const enabledInput = document.createElement("input");
    enabledInput.type = "checkbox";
    enabledInput.checked = source.enabled !== false;
    enabledInput.addEventListener("change", () => {
      calendarSources[index].enabled = enabledInput.checked;
    });
    enabledLabel.appendChild(enabledInput);
    enabledLabel.appendChild(document.createTextNode("On"));
    row.appendChild(enabledLabel);

    const colorInput = document.createElement("input");
    colorInput.className = "calendar-source-color";
    colorInput.type = "color";
    colorInput.value = source.color || "#7dd3c7";
    colorInput.setAttribute("aria-label", "Calendar color");
    colorInput.addEventListener("input", () => {
      calendarSources[index].color = colorInput.value;
    });
    row.appendChild(colorInput);

    const fields = document.createElement("div");
    fields.className = "calendar-source-fields";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Calendar name";
    nameInput.value = source.name || "";
    nameInput.addEventListener("input", () => {
      calendarSources[index].name = nameInput.value;
    });
    fields.appendChild(nameInput);

    const urlInput = document.createElement("input");
    urlInput.type = "url";
    urlInput.placeholder = "ICS calendar URL";
    urlInput.value = source.url || "";
    urlInput.spellcheck = false;
    urlInput.addEventListener("input", () => {
      calendarSources[index].url = urlInput.value;
    });
    fields.appendChild(urlInput);
    row.appendChild(fields);

    const deleteButton = document.createElement("button");
    deleteButton.className = "family-message-delete";
    deleteButton.type = "button";
    deleteButton.textContent = "Remove";
    deleteButton.addEventListener("click", () => {
      calendarSources.splice(index, 1);
      renderCalendarSourceList();
      showCalendarSourceStatus("Calendar removed locally. Save calendars to apply.");
    });
    row.appendChild(deleteButton);

    calendarSourceList.appendChild(row);
  });
}

async function loadCalendarSources() {
  showCalendarSourceStatus("Loading calendars...");
  try {
    const response = await fetch(`${CALENDAR_SOURCES_URL}?t=${Date.now()}`);
    const data = await response.json();
    if (!response.ok || data.error) throw new Error(data.error || "Calendar sources could not load");
    calendarSources = (Array.isArray(data) ? data : []).map((source, index) => ({
      id: `${source.id || `calendar-${index + 1}`}`,
      name: `${source.name || ""}`,
      url: `${source.url || ""}`,
      color: `${source.color || "#7dd3c7"}`,
      enabled: source.enabled !== false
    }));
    renderCalendarSourceList();
    showCalendarSourceStatus("");
  } catch (error) {
    console.error("Calendar source load failed:", error);
    showCalendarSourceStatus("Calendar sources could not load.", true);
  }
}

function addCalendarSource() {
  calendarSources.push({
    id: createCalendarSourceId(),
    name: "",
    url: "",
    color: "#7dd3c7",
    enabled: true
  });
  renderCalendarSourceList();
  showCalendarSourceStatus("New calendar added locally. Fill it in and save calendars.");
}

function validateCalendarSources() {
  for (let index = 0; index < calendarSources.length; index += 1) {
    const source = calendarSources[index];
    const name = `${source.name || ""}`.trim();
    const url = `${source.url || ""}`.trim();
    if (!name || !url) return `Calendar ${index + 1} needs both a name and a URL.`;
    if (!url.startsWith("http://") && !url.startsWith("https://")) return `Calendar ${index + 1} needs a web URL.`;
  }
  return "";
}

async function saveCalendarSources() {
  const validationError = validateCalendarSources();
  if (validationError) {
    showCalendarSourceStatus(validationError, true);
    return;
  }

  showCalendarSourceStatus("Saving calendars...");
  try {
    const response = await fetch(CALENDAR_SOURCES_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ calendars: calendarSources })
    });
    const data = await response.json();
    if (!response.ok || data.error) throw new Error(data.error || "Calendar sources could not save");
    calendarSources = data;
    renderCalendarSourceList();
    showCalendarSourceStatus("Calendars saved. Refreshing dashboard...");
    await refreshDashboard();
    showCalendarSourceStatus("Calendars saved and dashboard refreshed.");
  } catch (error) {
    console.error("Calendar source save failed:", error);
    showCalendarSourceStatus(error.message || "Calendar sources could not save.", true);
  }
}

async function loadCalendarsConfig() {
  const response = await fetch(`${CALENDARS_URL}?t=${Date.now()}`);
  return response.json();
}

async function loadCalendarEvents() {
  const response = await fetch(`${CALENDAR_DATA_URL}?t=${Date.now()}`);
  const calendarPayload = await response.json();
  if (!response.ok || calendarPayload.error) {
    throw new Error(calendarPayload.error || "Failed to load calendar data");
  }
  const events = calendarPayload.flatMap((calendarMeta) => parseICS(calendarMeta.ics, calendarMeta));
  latestCalendarEvents = events;
  buildFamilyMessages();
  return events;
}

async function loadWeather() {
  const response = await fetch(`${WEATHER_DATA_URL}?t=${Date.now()}`);
  const rawText = await response.text();
  let data;

  try {
    data = JSON.parse(rawText);
  } catch {
    throw new Error("Weather endpoint returned invalid data");
  }

  if (!response.ok || data.error) {
    throw new Error(data.error || "Failed to load weather");
  }

  lastWeatherPayload = data;
  const temp = Math.round(data.temperatureF ?? 0);
  const feelsLike = Math.round(data.feelsLikeF ?? data.temperatureF ?? 0);
  const humidity = Math.round(data.humidity ?? 0);
  const wind = Math.round(data.windAvgMph ?? 0);
  const gust = Math.round(data.windGustMph ?? 0);
  const conditionText = data.conditionsText || "Weather";
  const normalized = conditionText.toLowerCase();
  const inferredCode = normalized.includes("storm") || normalized.includes("thunder") ? 95
    : normalized.includes("rain") || normalized.includes("drizzle") || normalized.includes("shower") ? 63
    : normalized.includes("cloud") || normalized.includes("fog") ? 3
    : (humidity >= 70 ? 3 : 0);
  const code = Number.isFinite(data.conditionsCode) ? data.conditionsCode : inferredCode;
  const summary = weatherCodeMap.get(code) || conditionText;
  const high = Math.round(data.dailyHighF ?? temp);
  const low = Math.round(data.dailyLowF ?? temp);

  lastWeatherCode = code;
  document.getElementById("weather-temp").textContent = `${temp}°`;
  document.getElementById("weather-summary").textContent = `${summary} • Feels like ${feelsLike}°`;
  document.getElementById("weather-highlow").textContent = `H ${high}° / L ${low}° • Wind ${wind} mph${gust > wind ? `, gust ${gust}` : ""}`;
  selectBackgroundImage(code, true);
  if (latestCalendarEvents.length) renderWeek(latestCalendarEvents);
}

function isSameDay(dateA, dateB) {
  return dateA.getFullYear() === dateB.getFullYear()
    && dateA.getMonth() === dateB.getMonth()
    && dateA.getDate() === dateB.getDate();
}

function clearMascotTimers() {
  if (mascotResetTimerId) {
    clearTimeout(mascotResetTimerId);
    mascotResetTimerId = null;
  }
  if (mascotNextRunTimerId) {
    clearTimeout(mascotNextRunTimerId);
    mascotNextRunTimerId = null;
  }
}

function getActiveMascotProfiles(events = latestCalendarEvents) {
  const now = new Date();
  const todayEvents = events.filter((event) => isSameDay(event.start, now) || (event.start < now && event.end > now));

  return MASCOT_PROFILES.filter((profile) => todayEvents.some((event) => {
      const haystack = `${event.summary || ""} ${event.location || ""} ${event.description || ""}`.toLowerCase();
      return profile.matchAny.some((term) => haystack.includes(term));
    }));
}

function hideArcadeAnimation() {
  if (!arcadeRunner) return;
  arcadeRunner.classList.add("hidden");
  arcadeRunner.classList.remove(...ARCADE_ANIMATION_CLASSES);
}

function showArcadeAnimation() {
  if (!mascotLane || !familyMessageTextNode || !arcadeRunner || ARCADE_ANIMATIONS.length === 0) {
    showFamilyMessageText();
    return;
  }

  const animation = ARCADE_ANIMATIONS[arcadeAnimationIndex % ARCADE_ANIMATIONS.length];
  arcadeAnimationIndex = (arcadeAnimationIndex + 1) % ARCADE_ANIMATIONS.length;
  familyMessageDisplayMode = "arcade";
  clearMascotTimers();
  mascotCreature?.classList.add("hidden");
  familyMessageTextNode.classList.add("hidden");
  mascotLane.classList.remove("hidden");
  arcadeRunner.classList.remove("hidden", ...ARCADE_ANIMATION_CLASSES);
  void arcadeRunner.offsetWidth;
  arcadeRunner.classList.add(animation);
}

function applyMascotProfile(profile) {
  if (!profile || !mascotCreature || !mascotAvatar) return;
  activeMascotProfile = profile;
  mascotCreature.title = `${profile.label} mascot is roaming`;
  mascotAvatar.setAttribute("aria-label", profile.label);
  mascotTrack?.classList.remove("mascot-scene-primary", "mascot-scene-secondary");
  mascotTrack?.classList.add(`mascot-scene-${profile.id}`);
  mascotCreature.classList.remove("hidden", "mascot-primary", "mascot-secondary");
  hideArcadeAnimation();
  mascotCreature.classList.add(`mascot-${profile.id}`);
}

function resetMascotPosition(direction = 1) {
  if (!mascotCreature) return;
  mascotCreature.style.transition = "none";
  mascotCreature.style.transform = `translate3d(${direction > 0 ? -96 : getMascotRunDistance() + 96}px, -50%, 0) scaleX(${direction > 0 ? 1 : -1})`;
}

function getMascotRunDistance() {
  const laneWidth = mascotTrack?.clientWidth || mascotLane?.clientWidth || 0;
  return Math.max(laneWidth - 68, 120);
}

function scheduleMascotRun(delayMs = 3000) {
  clearMascotTimers();
  if (!activeMascotProfile || !mascotLane || !mascotCreature || !mascotAvatar) return;
  mascotNextRunTimerId = setTimeout(() => startMascotRun(), delayMs);
}

function stopMascot() {
  clearMascotTimers();
  activeMascotProfiles = [];
  activeMascotProfile = null;
  activeMascotProfileIndex = 0;
  mascotRunToken += 1;
  hideArcadeAnimation();
  if (!mascotLane || !mascotCreature || !mascotAvatar) return;
  mascotLane.classList.add("hidden");
  mascotTrack?.classList.remove("mascot-scene-primary", "mascot-scene-secondary");
  mascotCreature.classList.remove("hidden", "mascot-walking");
  mascotCreature.classList.add("mascot-idle");
  mascotCreature.classList.remove("mascot-primary", "mascot-secondary");
  mascotCreature.style.transition = "none";
  mascotCreature.style.transform = "translate3d(-96px, -50%, 0) scaleX(1)";
  if (familyMessageDisplayMode === "mascot") {
    showFamilyMessageText();
  }
}

function startMascotRun() {
  if (!activeMascotProfile || !mascotLane || !mascotCreature || !mascotAvatar) return;
  hideArcadeAnimation();
  mascotCreature.classList.remove("hidden");
  const runToken = ++mascotRunToken;
  const direction = Math.random() > 0.5 ? 1 : -1;
  const durationMs = 16000 + Math.floor(Math.random() * 8000);
  const destination = direction > 0 ? getMascotRunDistance() + 96 : -96;

  mascotCreature.classList.remove("mascot-idle");
  mascotCreature.classList.add("mascot-walking");
  resetMascotPosition(direction);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (runToken !== mascotRunToken) return;
      mascotCreature.style.transition = `transform ${durationMs}ms linear`;
      mascotCreature.style.transform = `translate3d(${destination}px, -50%, 0) scaleX(${direction > 0 ? 1 : -1})`;
    });
  });

  mascotResetTimerId = setTimeout(() => {
    if (runToken !== mascotRunToken) return;
    mascotCreature.classList.remove("mascot-walking");
    mascotCreature.classList.add("mascot-idle");
    resetMascotPosition(direction > 0 ? 1 : -1);
    scheduleMascotRun(45000 + Math.floor(Math.random() * 60000));
  }, durationMs + 120);
}

function syncMascot(events = latestCalendarEvents) {
  const nextProfiles = getActiveMascotProfiles(events);
  if (!nextProfiles.length) {
    stopMascot();
    return;
  }

  const previousIds = activeMascotProfiles.map((profile) => profile.id).join("|");
  const nextIds = nextProfiles.map((profile) => profile.id).join("|");
  const rosterChanged = previousIds !== nextIds;

  activeMascotProfiles = nextProfiles;
  if (rosterChanged) {
    activeMascotProfileIndex = 0;
  }

  if (!activeMascotProfile || !activeMascotProfiles.some((profile) => profile.id === activeMascotProfile.id)) {
    applyMascotProfile(activeMascotProfiles[0]);
  }

  mascotLane.classList.remove("hidden");

  if (rosterChanged) {
    scheduleMascotRun(1500);
  } else if (!mascotResetTimerId && !mascotNextRunTimerId) {
    scheduleMascotRun(4000);
  }

  if (familyMessageDisplayMode === "mascot") {
    showMascotMessage();
  }
}

function buildFamilyMessages({ skipAiRefresh = false } = {}) {
  const baseMessages = configuredFamilyMessages;
  const now = new Date();
  const todayEvents = latestCalendarEvents
    .filter((event) => isSameDay(event.start, now) || (event.start < now && event.end > now))
    .sort((a, b) => a.start - b.start);
  const generatedMessages = [];

  const upcomingEvents = todayEvents.filter((event) => event.end > now);
  if (upcomingEvents.length > 0) {
    const nextEvent = upcomingEvents[0];
    const nextLabel = isAllDay(nextEvent) ? "All day" : formatTime(nextEvent.start);
    generatedMessages.push(`Next Up: ${nextEvent.summary} at ${nextLabel}`);
  }

  if (todayEvents.length >= 2 && todayEvents.length <= 3) {
    const namedEvents = todayEvents.map((event) => event.summary).filter(Boolean);
    if (namedEvents.length) {
      const summary = namedEvents.length === 2
        ? `${namedEvents[0]} and ${namedEvents[1]}`
        : `${namedEvents[0]}, ${namedEvents[1]}, and ${namedEvents[2]}`;
      generatedMessages.push(`Today: ${summary}`);
    }
  } else if (todayEvents.length >= 4 && upcomingEvents.length > 0) {
    generatedMessages.push(`Busy day: ${todayEvents.length} events, next is ${upcomingEvents[0].summary}`);
  } else if (todayEvents.length === 1 && upcomingEvents.length === 0) {
    generatedMessages.push(`Today: ${todayEvents[0].summary}`);
  }

  for (const rule of familyMessageRules) {
    const matchTerms = Array.isArray(rule.matchAny) ? rule.matchAny.map((term) => `${term}`.toLowerCase()) : [];
    const matchedEvent = todayEvents.find((event) => {
      const haystack = `${event.summary || ""} ${event.location || ""} ${event.description || ""}`.toLowerCase();
      return matchTerms.some((term) => haystack.includes(term));
    });

    if (matchedEvent && rule.message) {
      generatedMessages.push(`${rule.message}`.trim());
    }
  }

  if (currentAiGeneratedFamilyMessages.length) {
    generatedMessages.push(...currentAiGeneratedFamilyMessages);
  }

  currentGeneratedFamilyMessages = [...new Set(generatedMessages.filter(Boolean))];
  const activeMessages = [...new Set([
    ...baseMessages,
    ...currentAiGeneratedFamilyMessages,
    ...currentGeneratedFamilyMessages
  ].filter(Boolean))].slice(0, 8);
  familyMessages = activeMessages.length
    ? activeMessages
    : [...new Set(configuredDefaultFamilyMessages.filter(Boolean))].slice(0, 8);
  familyMessageIndex = 0;
  familyMessageDisplayMode = "message";
  syncMascot(latestCalendarEvents);
  showFamilyMessageText();
  renderFamilyMessagesList();
}

function showFamilyMessageStatus(message, isError = false) {
  if (!message) {
    familyMessagesStatus.textContent = "";
    familyMessagesStatus.classList.add("hidden");
    familyMessagesStatus.style.color = "";
    return;
  }

  familyMessagesStatus.textContent = message;
  familyMessagesStatus.style.color = isError ? "#fecaca" : "";
  familyMessagesStatus.classList.remove("hidden");
}

function renderFamilyMessagesList() {
  if (!familyMessagesList) return;
  const allMessages = [
    ...configuredFamilyMessages.map((message) => ({ text: message, generated: false })),
    ...currentGeneratedFamilyMessages.map((message) => ({
      text: message,
      generated: true,
      source: currentAiGeneratedFamilyMessages.includes(message) ? "AI" : "auto"
    }))
  ];

  familyMessagesList.innerHTML = "";

  if (!allMessages.length) {
    const empty = document.createElement("div");
    empty.className = "family-message-empty";
    empty.textContent = "No active family messages right now.";
    familyMessagesList.appendChild(empty);
    return;
  }

  for (const item of allMessages) {
    const row = document.createElement("div");
    row.className = "family-message-item";

    const text = document.createElement("div");
    text.className = "family-message-text";
    text.textContent = item.generated ? `${item.text} (${item.source || "auto"})` : item.text;
    row.appendChild(text);

    if (!item.generated) {
      const deleteButton = document.createElement("button");
      deleteButton.className = "family-message-delete";
      deleteButton.type = "button";
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => deleteFamilyMessage(item.text));
      row.appendChild(deleteButton);
    }

    familyMessagesList.appendChild(row);
  }
}

function showFamilyMessageText() {
  familyMessageDisplayMode = "message";
  hideArcadeAnimation();
  if (!familyMessageTextNode) return;

  familyMessageTextNode.classList.remove("hidden");
  mascotCreature?.classList.remove("hidden");
  mascotLane?.classList.add("hidden");

  if (!familyMessages.length) {
    familyMessageTextNode.textContent = "No active family messages right now.";
    return;
  }

  familyMessageTextNode.textContent = familyMessages[familyMessageIndex % familyMessages.length];
  familyMessageIndex = (familyMessageIndex + 1) % familyMessages.length;
}

function showMascotMessage() {
  if (!activeMascotProfiles.length || !mascotLane || !familyMessageTextNode) {
    showFamilyMessageText();
    return;
  }

  const nextProfile = activeMascotProfiles[activeMascotProfileIndex % activeMascotProfiles.length] || activeMascotProfiles[0];
  activeMascotProfileIndex = (activeMascotProfileIndex + 1) % activeMascotProfiles.length;
  applyMascotProfile(nextProfile);

  familyMessageDisplayMode = "mascot";
  hideArcadeAnimation();
  familyMessageTextNode.classList.add("hidden");
  mascotLane.classList.remove("hidden");
  clearMascotTimers();
  mascotCreature?.classList.remove("hidden", "mascot-walking");
  mascotCreature?.classList.add("mascot-idle");
  resetMascotPosition(Math.random() > 0.5 ? 1 : -1);
  scheduleMascotRun(150);
}

function showBottomBarAnimation() {
  if (dashboardSettings.reducedMotion) {
    showFamilyMessageText();
    return;
  }

  const visualChoices = activeMascotProfile ? ["mascot", ...ARCADE_ANIMATIONS] : [...ARCADE_ANIMATIONS];
  if (!visualChoices.length) {
    showFamilyMessageText();
    return;
  }
  const visual = visualChoices[familyVisualRotationIndex % visualChoices.length];
  familyVisualRotationIndex = (familyVisualRotationIndex + 1) % visualChoices.length;

  if (visual === "mascot") {
    showMascotMessage();
    return;
  }

  showArcadeAnimation();
}

function showNextFamilyMessage() {
  if (dashboardSettings.visualMode === "messages") {
    showFamilyMessageText();
    return;
  }

  if (dashboardSettings.visualMode === "animations") {
    showBottomBarAnimation();
    return;
  }

  if (familyMessageDisplayMode !== "message") {
    showFamilyMessageText();
    return;
  }
  showBottomBarAnimation();
}

async function loadFamilyMessage() {
  const response = await fetch(`${FAMILY_MESSAGE_URL}?t=${Date.now()}`);
  const data = await response.json();
  configuredFamilyMessages = (Array.isArray(data?.messages) ? data.messages : [])
    .map((message) => `${message ?? ""}`.trim())
    .filter(Boolean);
  configuredDefaultFamilyMessages = (Array.isArray(data?.defaultMessages) ? data.defaultMessages : [])
    .map((message) => `${message ?? ""}`.trim())
    .filter(Boolean);
  familyMessageRules = Array.isArray(data?.rules) ? data.rules : [];
  buildFamilyMessages();
}

async function syncFamilyMessagesFromApi(payload) {
  configuredFamilyMessages = (Array.isArray(payload?.messages) ? payload.messages : [])
    .map((message) => `${message ?? ""}`.trim())
    .filter(Boolean);
  configuredDefaultFamilyMessages = (Array.isArray(payload?.defaultMessages) ? payload.defaultMessages : [])
    .map((message) => `${message ?? ""}`.trim())
    .filter(Boolean);
  familyMessageRules = Array.isArray(payload?.rules) ? payload.rules : familyMessageRules;
  buildFamilyMessages();
}

function openFamilyMessagesModal() {
  renderFamilyMessagesList();
  showFamilyMessageStatus("");
  familyMessagesModal.classList.remove("hidden");
  familyMessagesModal.setAttribute("aria-hidden", "false");
  if (familyMessageInput) {
    familyMessageInput.value = "";
    setTimeout(() => familyMessageInput.focus(), 40);
  }
}

function closeFamilyMessagesModal() {
  familyMessagesModal.classList.add("hidden");
  familyMessagesModal.setAttribute("aria-hidden", "true");
  showFamilyMessageStatus("");
}

async function deleteFamilyMessage(message) {
  showFamilyMessageStatus("Deleting message...");
  try {
    const response = await fetch(FAMILY_MESSAGE_DATA_URL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });
    const payload = await response.json();
    if (!response.ok || payload.error) throw new Error(payload.error || "Failed to delete message");
    await syncFamilyMessagesFromApi(payload);
    showFamilyMessageStatus("Message deleted.");
  } catch (error) {
    showFamilyMessageStatus(error.message || "Failed to delete message.", true);
  }
}

async function addFamilyMessage() {
  if (!familyMessageInput) return;
  const message = familyMessageInput.value.trim();
  if (!message) {
    showFamilyMessageStatus("Type a message first.", true);
    familyMessageInput.focus();
    return;
  }

  showFamilyMessageStatus("Adding message...");
  try {
    const response = await fetch(FAMILY_MESSAGE_DATA_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });
    const payload = await response.json();
    if (!response.ok || payload.error) throw new Error(payload.error || "Failed to add message");
    await syncFamilyMessagesFromApi(payload);
    familyMessageInput.value = "";
    showFamilyMessageStatus("Message added.");
    familyMessageInput.focus();
  } catch (error) {
    showFamilyMessageStatus(error.message || "Failed to add message.", true);
  }
}

function shiftDisplayedWeek(delta) {
  displayedWeekOffset += delta;
  renderWeek(latestCalendarEvents);
}

function resetDisplayedWeek() {
  displayedWeekOffset = 0;
  renderWeek(latestCalendarEvents);
}

async function loadDayNotes() {
  const response = await fetch(`${DAY_NOTES_DATA_URL}?t=${Date.now()}`);
  const payload = await response.json();
  if (!response.ok || payload.error) {
    throw new Error(payload.error || "Failed to load day notes");
  }
  dayNotes = payload && typeof payload === "object" ? payload : {};
}

function showDayNoteStatus(message, isError = false) {
  if (!message) {
    dayNoteStatus.textContent = "";
    dayNoteStatus.classList.add("hidden");
    dayNoteStatus.style.color = "";
    return;
  }

  dayNoteStatus.textContent = message;
  dayNoteStatus.style.color = isError ? "#fecaca" : "";
  dayNoteStatus.classList.remove("hidden");
}

function openDayNoteModal(day, note = null) {
  const dateKey = getDateKey(day);
  activeDayNoteDateKey = dateKey;
  activeDayNoteId = note?.id || null;
  const existing = note?.text || "";
  dayNoteModalTitle.textContent = existing ? "Edit day note" : "Add a note for this day";
  dayNoteModalDate.textContent = new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric" }).format(day);
  dayNoteInput.value = existing;
  dayNoteDeleteButton.classList.toggle("hidden", !existing);
  showDayNoteStatus("");
  dayNoteModal.classList.remove("hidden");
  dayNoteModal.setAttribute("aria-hidden", "false");
  setTimeout(() => dayNoteInput.focus(), 40);
}

function closeDayNoteModal() {
  dayNoteModal.classList.add("hidden");
  dayNoteModal.setAttribute("aria-hidden", "true");
  activeDayNoteId = null;
  showDayNoteStatus("");
}

async function saveDayNote() {
  if (!activeDayNoteDateKey) return;
  const text = dayNoteInput.value.trim();
  if (!text) {
    showDayNoteStatus("Type a note first.", true);
    dayNoteInput.focus();
    return;
  }

  showDayNoteStatus("Saving note...");
  try {
    const response = await fetch(DAY_NOTES_DATA_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date: activeDayNoteDateKey, id: activeDayNoteId, text })
    });
    const payload = await response.json();
    if (!response.ok || payload.error) throw new Error(payload.error || "Failed to save note");
    dayNotes = payload;
    renderWeek(latestCalendarEvents);
    dayNoteDeleteButton.classList.remove("hidden");
    if (!activeDayNoteId) {
      const savedNotes = Array.isArray(dayNotes[activeDayNoteDateKey]) ? dayNotes[activeDayNoteDateKey] : [];
      activeDayNoteId = savedNotes[savedNotes.length - 1]?.id || null;
    }
    showDayNoteStatus("Note saved.");
  } catch (error) {
    showDayNoteStatus(error.message || "Failed to save note.", true);
  }
}

async function deleteDayNote() {
  if (!activeDayNoteDateKey) return;
  showDayNoteStatus("Deleting note...");
  try {
    const response = await fetch(DAY_NOTES_DATA_URL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date: activeDayNoteDateKey, id: activeDayNoteId })
    });
    const payload = await response.json();
    if (!response.ok || payload.error) throw new Error(payload.error || "Failed to delete note");
    dayNotes = payload;
    renderWeek(latestCalendarEvents);
    closeDayNoteModal();
  } catch (error) {
    showDayNoteStatus(error.message || "Failed to delete note.", true);
  }
}

async function refreshDashboard() {
  displayedWeekOffset = 0;
  try {
    await loadDayNotes();
  } catch (error) {
    console.error("Day note refresh failed:", error);
  }

  try {
    const events = await loadCalendarEvents();
    renderWeek(events);
  } catch (error) {
    console.error("Calendar refresh failed:", error);
  }

  try {
    await loadWeather();
  } catch (error) {
    console.error("Weather refresh failed:", error);
    document.getElementById("weather-summary").textContent = "Tempest weather unavailable";
    document.getElementById("weather-highlow").textContent = "Calendar is still live";
  }

  try {
    await loadFamilyMessage();
  } catch (error) {
    console.error("Family message refresh failed:", error);
  }

  try {
    await refreshAiFamilyMessages();
  } catch (error) {
    console.error("Family message AI refresh failed:", error);
  }

  try {
    await refreshCountdowns();
  } catch (error) {
    console.error("Countdown refresh failed:", error);
  }
}

async function init() {
  selectBackgroundImage(0, true);
  applySettings({ rerender: false });
  loadCalendarSources();
  scheduleTodayContentMidnightRefresh();
  refreshCountdowns();
  updateHappilyEverAfter();
  setInterval(refreshCountdowns, 60 * 1000);
  setInterval(() => {
    renderTimerSlot("lowerLeft");
    renderTimerSlot("lowerRight");
  }, 1000);
  eventModalClose.addEventListener("click", closeEventModal);
  eventModal.addEventListener("click", (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.closeModal === "true") {
      closeEventModal();
    }
  });
  weekPrevButton.addEventListener("click", () => shiftDisplayedWeek(-1));
  weekPrevButton.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      shiftDisplayedWeek(-1);
    }
  });
  weekRangeButton.addEventListener("click", resetDisplayedWeek);
  weekRangeButton.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      resetDisplayedWeek();
    }
  });
  weekNextButton.addEventListener("click", () => shiftDisplayedWeek(1));
  weekNextButton.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      shiftDisplayedWeek(1);
    }
  });
  familyMessageNode.addEventListener("click", openFamilyMessagesModal);
  familyMessageNode.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openFamilyMessagesModal();
    }
  });
  familyMessagesModalClose.addEventListener("click", closeFamilyMessagesModal);
  familyMessageAddButton?.addEventListener("click", addFamilyMessage);
  familyMessageInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addFamilyMessage();
    }
  });
  familyMessagesModal.addEventListener("click", (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.closeFamilyMessagesModal === "true") {
      closeFamilyMessagesModal();
    }
  });
  dayNoteModalClose?.addEventListener("click", closeDayNoteModal);
  dayNoteSaveButton?.addEventListener("click", saveDayNote);
  dayNoteDeleteButton?.addEventListener("click", deleteDayNote);
  dayNoteInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      saveDayNote();
    }
  });
  dayNoteModal?.addEventListener("click", (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.closeDayNoteModal === "true") {
      closeDayNoteModal();
    }
  });
  dashboardTitle?.addEventListener("click", openSettingsModal);
  dashboardTitle?.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openSettingsModal();
    }
  });
  settingsModalClose?.addEventListener("click", closeSettingsModal);
  settingsModal?.addEventListener("click", (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.closeSettingsModal === "true") {
      closeSettingsModal();
    }
  });
  document.querySelectorAll(".settings-tab").forEach((tab) => {
    tab.addEventListener("click", () => showSettingsPage(tab.dataset.settingsTab));
  });
  for (const [key, control] of Object.entries(settingControls)) {
    control?.addEventListener("input", () => updateSettingFromControl(key, control));
    control?.addEventListener("change", () => updateSettingFromControl(key, control));
  }
  settingsResetButton?.addEventListener("click", resetSettings);
  calendarSourceAddButton?.addEventListener("click", addCalendarSource);
  calendarSourceSaveButton?.addEventListener("click", saveCalendarSources);
  calendarSourceReloadButton?.addEventListener("click", loadCalendarSources);
  weatherProviderSelect?.addEventListener("change", syncWeatherProviderPanels);
  weatherConfigSaveButton?.addEventListener("click", saveWeatherConfig);
  weatherConfigReloadButton?.addEventListener("click", loadWeatherConfig);
  aiConfigSaveButton?.addEventListener("click", saveAiConfig);
  aiConfigReloadButton?.addEventListener("click", loadAiConfig);
  aiPromptResetButton?.addEventListener("click", () => {
    if (aiFamilyMessagePromptInput) aiFamilyMessagePromptInput.value = aiConfig?.defaultFamilyMessagePrompt || "";
    setAiConfigStatus("Default family message prompt restored locally. Save AI settings to keep it.", "warning");
  });
  weatherBlock.addEventListener("click", openWeatherModal);
  timeBlock.addEventListener("click", openTodayModal);
  timeBlock.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openTodayModal();
    }
  });
  weatherBlock.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openWeatherModal();
    }
  });
  countdownBlock.addEventListener("click", openCountdownModal);
  countdownBlock.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openCountdownModal();
    }
  });
  timerModalClose.addEventListener("click", closeTimerModal);
  timerModal.addEventListener("click", (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.closeTimerModal === "true") {
      closeTimerModal();
    }
  });
  countupBlock.addEventListener("click", openCountupModal);
  countupBlock.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openCountupModal();
    }
  });
  timerConfigSaveButton?.addEventListener("click", saveTimerSettingsConfig);
  timerConfigReloadButton?.addEventListener("click", loadTimerSettingsConfig);
  timerAiEnrichButton?.addEventListener("click", enrichSelectedTimerWithAI);
  timerLeftAddButton?.addEventListener("click", () => addTimerToSlot("lowerLeft"));
  timerRightAddButton?.addEventListener("click", () => addTimerToSlot("lowerRight"));
  timerEditorSelect?.addEventListener("change", renderTimerEditorFields);
  timerAddNewButton?.addEventListener("click", addNewTimer);
  timerDeleteSelectedButton?.addEventListener("click", deleteSelectedTimer);
  timerDetailAddButton?.addEventListener("click", () => addTimerListItem("details"));
  timerImageAddButton?.addEventListener("click", () => addTimerListItem("images"));
  timerImageQueryAddButton?.addEventListener("click", () => addTimerListItem("imageQueries"));
  for (const control of [timerFieldEnabled, timerFieldType, timerFieldId, timerFieldEmoji, timerFieldTitle, timerFieldHeroTitle, timerFieldSubtitle, timerFieldDetailLabel, timerFieldTarget, timerFieldStart, timerFieldShowBefore, timerFieldShowAfter, timerFieldMilestoneStep]) {
    control?.addEventListener("input", () => setTimerStatus("Timer changed locally. Save timers to keep it.", "warning"));
    control?.addEventListener("change", updateSelectedTimerFromFields);
  }
  weatherModalClose.addEventListener("click", closeWeatherModal);
  todayModalClose.addEventListener("click", closeTodayModal);
  weatherModal.addEventListener("click", (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.closeWeatherModal === "true") {
      closeWeatherModal();
    }
  });
  todayModal.addEventListener("click", (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.closeTodayModal === "true") {
      closeTodayModal();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !eventModal.classList.contains("hidden")) {
      closeEventModal();
    }
    if (event.key === "Escape" && !familyMessagesModal.classList.contains("hidden")) {
      closeFamilyMessagesModal();
    }
    if (event.key === "Escape" && !weatherModal.classList.contains("hidden")) {
      closeWeatherModal();
    }
    if (event.key === "Escape" && !todayModal.classList.contains("hidden")) {
      closeTodayModal();
    }
    if (event.key === "Escape" && !timerModal.classList.contains("hidden")) {
      closeTimerModal();
    }
    if (event.key === "Escape" && settingsModal && !settingsModal.classList.contains("hidden")) {
      closeSettingsModal();
    }
  });
  window.addEventListener("resize", () => {
    renderWeek(latestCalendarEvents);
    if (activeMascotProfile) scheduleMascotRun(500);
  });

  await refreshDashboard();
  setInterval(refreshDashboard, 5 * 60 * 1000);
  setInterval(() => {
    if (activeTimerDetail && !timerModal.classList.contains("hidden")) rotateTimerDetail();
  }, 10000);
  setInterval(() => {
    if (activeTimerDetail && !timerModal.classList.contains("hidden")) rotateTimerImage();
  }, 12000);
}

init();
