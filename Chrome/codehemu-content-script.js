var logo = chrome.runtime.getURL('icon/128.png'),
Ver = chrome.runtime.getManifest().version,
image1 = "data:image/png;base64,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",
image2 = "data:image/png;base64,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",
image3 = "data:image/png;base64,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";

var PreloadImg = new Image
PreloadImg.onload = function () {
  SetGlobalBGImage(PreloadImg.src)
}

window.onerror =
  function (msg, source, lineNo, columnNo, error) {
    if (localStorage["codehemu-ErrorCollectT"] == true) {
      alert("CODEHEMU_ERROR" +
        "\n\n" + msg +
        "\n" + lineNo)
      return true;
    }
  };

function SetWhenUpdate() {
  presetarray = JSON.parse(localStorage["codehemu-NUMPRESET"])

  for (obj of ForcePre) {
    if (!presetarray.includes(obj)) {
      presetarray.push(obj)
      break;
    }
  }

  localStorage["codehemu-NUMPRESET"] = JSON.stringify(presetarray)

  SetNormalPre()

  localStorage["codehemu-NewVDOanimaT"] = "true"
}

ForcePre = [
  "(Current)",
  "(Low PC) Purple",
  "(Low-end PC) Cyan",
  "(SUPER LOW PC) (CSS) Potato machine (less blur)",
  "(SUPER_SUPER LOW PC) (CSS) Potato machine (none blur)",
  "Light Theme",
  "Dark Theme",
  "Black Theme",
  "Pink-Black",
  "Glass",
  "My Waifu ♥",
  "I'm Using :D"
]

function SetidxTo(Name, Va) {
  store.put(Va, Name)
}

function SetNormalPre() {
  SetidxTo("PRESETLight Theme", JSON.stringify(["SubtitleC", "#000000", "RepeatT", "false", "TimeEdge", "10", "EndBGO", "50", "NdTextO", "100", "ThemeSndO", "50", "MediaBlurT", "true", "ThumbClickC", "#ffffff", "CUSTOM", "", "TextC", "#000000", "CenterMediaT", "true", "SubtitleO", "100", "IMGS", "100", "ThemeC", "#ff0000", "FlipT", "false", "BottomGT", "true", "transitionT", "true", "IMGX", "50", "Edge", "10", "TIMETEXTC", "#000000", "VDOTEXTC", "#000000", "MediaBGC", "#ffffff", "TimeBGC", "#ffffff", "TimeLoadedC", "#ffffff", "TimeOutT", "true", "HBTC", "#ffffff", "HBTO", "100", "PlayerOutT", "true", "ThemeFortO", "50", "Border", "3", "OutShaC", "#000000", "ThumbHoverT", "Slide", "ThemeThrO", "20", "NdTextC", "#383838", "CapOutT", "true", "PlaylisthoverO", "27", "ThemeO", "100", "ThemehoverC", "#ff0000", "ThumbHoverColorC", "#ff94f6", "ThemeFortC", "#ff0000", "EndBGC", "#000000", "HoverBorder", "1", "CapBGC", "#ffffff", "BlurBGAM", "10", "SubOutT", "true", "BlurWhatT", "all", "ThumbHoverColorO", "100", "PlayerBorder", "1", "TIMETEXTO", "100", "OutOrShaT", "Sha", "ThumbClickO", "100", "ThemehoverO", "25", "MediaH", "24", "TopOutT", "true", "ThemeThrC", "#ff0000", "PlaylisthoverC", "#ff0000", "TimeLoadedO", "50", "CenterTimeT", "true", "IMGY", "50", "BlurAm", "5", "PlayerEdge", "20", "Time-LineBGC", "#ffffff", "ThemeSndC", "#ffffff", "BGO", "100", "EnaCUSCSST", "false", "BlurSubT", "true", "CapBGO", "72", "OutShaO", "32", "VDOTEXTO", "100", "MediaBGO", "50", "TimeBGO", "50", "CenterMedia", "true", "VBGT", "true", "TextO", "100", "BGC", "#ffffff", "TimeH", "18", "Time-LineBGO", "20", "Zoom", "1.075", "SyncLogoT", "true", "ScWidth", "11", "BGIMG", ""]))
  SetidxTo("PRESETDark Theme", JSON.stringify(["SubtitleC", "#ffffff", "RepeatT", "false", "TimeEdge", "10", "EndBGO", "50", "NdTextO", "100", "ThemeSndO", "50", "MediaBlurT", "true", "ThumbClickC", "#00eeff", "CUSTOM", "", "TextC", "#ffffff", "CenterMediaT", "true", "SubtitleO", "100", "IMGS", "100", "ThemeC", "#ff0000", "FlipT", "false", "BottomGT", "true", "transitionT", "true", "IMGX", "50", "Edge", "10", "TIMETEXTC", "#ffffff", "VDOTEXTC", "#ffffff", "MediaBGC", "#000000", "TimeBGC", "#000000", "TimeLoadedC", "#ffffff", "TimeOutT", "true", "HBTC", "#ffffff", "HBTO", "100", "PlayerOutT", "true", "ThemeFortO", "50", "Border", "3", "OutShaC", "#000000", "ThumbHoverT", "Slide", "ThemeThrO", "20", "NdTextC", "#9e9e9e", "CapOutT", "true", "PlaylisthoverO", "50", "ThemeO", "100", "ThemehoverC", "#ff0000", "ThumbHoverColorC", "#eeff00", "ThemeFortC", "#ff0000", "EndBGC", "#000000", "HoverBorder", "1", "CapBGC", "#000000", "BlurBGAM", "10", "SubOutT", "true", "BlurWhatT", "all", "ThumbHoverColorO", "100", "PlayerBorder", "1", "TIMETEXTO", "100", "OutOrShaT", "Sha", "ThumbClickO", "100", "ThemehoverO", "50", "MediaH", "24", "TopOutT", "true", "ThemeThrC", "#ff0000", "PlaylisthoverC", "#ff0000", "TimeLoadedO", "50", "CenterTimeT", "true", "IMGY", "50", "BlurAm", "5", "PlayerEdge", "20", "Time-LineBGC", "#000000", "ThemeSndC", "#000000", "BGO", "85", "EnaCUSCSST", "false", "BlurSubT", "true", "CapBGO", "72", "OutShaO", "100", "VDOTEXTO", "100", "MediaBGO", "50", "TimeBGO", "50", "CenterMedia", "true", "VBGT", "true", "TextO", "100", "BGC", "#1a1a1a", "TimeH", "18", "Time-LineBGO", "20", "Zoom", "1.075", "SyncLogoT", "true", "ScWidth", "11", "BGIMG", ""]))
  SetidxTo("PRESETBlack Theme", JSON.stringify(["SubtitleC", "#ff8a8a", "RepeatT", "false", "TimeEdge", "10", "EndBGO", "50", "NdTextO", "100", "ThemeSndO", "50", "MediaBlurT", "true", "ThumbClickC", "#ffffff", "CUSTOM", "", "TextC", "#ffffff", "CenterMediaT", "true", "SubtitleO", "100", "IMGS", "100", "ThemeC", "#ff0000", "FlipT", "false", "BottomGT", "false", "transitionT", "true", "IMGX", "50", "Edge", "10", "TIMETEXTC", "#ffffff", "VDOTEXTC", "#ffffff", "MediaBGC", "#000000", "TimeBGC", "#000000", "TimeLoadedC", "#ffffff", "TimeOutT", "true", "HBTC", "#ffffff", "HBTO", "100", "PlayerOutT", "true", "ThemeFortO", "50", "Border", "1", "OutShaC", "#ff0000", "ThumbHoverT", "Slide", "ThemeThrO", "20", "NdTextC", "#c4c4c4", "CapOutT", "false", "PlaylisthoverO", "50", "ThemeO", "100", "ThemehoverC", "#ff0000", "ThumbHoverColorC", "#00ffd5", "ThemeFortC", "#ff0000", "EndBGC", "#000000", "HoverBorder", "1", "CapBGC", "#000000", "BlurBGAM", "10", "SubOutT", "false", "BlurWhatT", "all", "ThumbHoverColorO", "100", "PlayerBorder", "1", "TIMETEXTO", "100", "OutOrShaT", "Out", "ThumbClickO", "100", "ThemehoverO", "50", "MediaH", "24", "TopOutT", "true", "ThemeThrC", "#ff0000", "PlaylisthoverC", "#ff0000", "TimeLoadedO", "50", "CenterTimeT", "true", "IMGY", "50", "BlurAm", "5", "PlayerEdge", "20", "Time-LineBGC", "#ffffff", "ThemeSndC", "#000000", "BGO", "70", "EnaCUSCSST", "false", "BlurSubT", "true", "CapBGO", "80", "OutShaO", "50", "VDOTEXTO", "100", "MediaBGO", "50", "TimeBGO", "50", "CenterMedia", "true", "VBGT", "true", "TextO", "100", "BGC", "#000000", "TimeH", "18", "Time-LineBGO", "20", "Zoom", "1.075", "SyncLogoT", "true", "ScWidth", "11", "BGIMG", ""]))
  SetidxTo("PRESETMy Waifu ♥", JSON.stringify(["SubtitleC", "#da8aff", "RepeatT", "false", "TimeEdge", "10", "EndBGO", "50", "NdTextO", "100", "ThemeSndO", "50", "MediaBlurT", "true", "ThumbClickC", "#ff0000", "CUSTOM", "", "TextC", "#ffffff", "CenterMediaT", "true", "SubtitleO", "100", "IMGS", "100", "ThemeC", "#bf70ff", "FlipT", "false", "BottomGT", "true", "transitionT", "true", "IMGX", "50", "Edge", "10", "TIMETEXTC", "#ffffff", "VDOTEXTC", "#ffffff", "MediaBGC", "#000000", "TimeBGC", "#000000", "TimeLoadedC", "#ffffff", "TimeOutT", "true", "HBTC", "#ffffff", "HBTO", "100", "PlayerOutT", "true", "ThemeFortO", "50", "Border", "1", "OutShaC", "#cd70ff", "ThumbHoverT", "Slide", "ThemeThrO", "20", "NdTextC", "#c4c4c4", "CapOutT", "false", "PlaylisthoverO", "50", "ThemeO", "100", "ThemehoverC", "#dc5cff", "ThumbHoverColorC", "#ff00dd", "ThemeFortC", "#c494ff", "EndBGC", "#000000", "HoverBorder", "1", "CapBGC", "#000000", "BlurBGAM", "0", "SubOutT", "false", "BlurWhatT", "all", "ThumbHoverColorO", "100", "PlayerBorder", "1", "TIMETEXTO", "100", "OutOrShaT", "Out", "ThumbClickO", "100", "ThemehoverO", "50", "MediaH", "24", "TopOutT", "true", "ThemeThrC", "#b061ff", "PlaylisthoverC", "#d666ff", "TimeLoadedO", "50", "CenterTimeT", "true", "IMGY", "15", "BlurAm", "5", "PlayerEdge", "20", "Time-LineBGC", "#ffffff", "ThemeSndC", "#000000", "BGO", "70", "EnaCUSCSST", "false", "BlurSubT", "true", "CapBGO", "80", "OutShaO", "50", "VDOTEXTO", "100", "MediaBGO", "50", "TimeBGO", "50", "CenterMedia", "true", "VBGT", "true", "TextO", "100", "BGC", "#000000", "TimeH", "18", "Time-LineBGO", "20", "Zoom", "1.075", "SyncLogoT", "true", "ScWidth", "11", "BGIMG", "https://raw.githubusercontent.com/hemucode/ImageAPI/main/images/%20(4).jpg"]))
  SetidxTo("PRESET(SUPER_SUPER LOW PC) (CSS) Potato machine (none blur)", JSON.stringify(["VDOBGT", "false", "EnaCUSCSST", 'true', "CUSTOM", ":root {\n    --blur-amount: 10px;\n    --theme: red;\n    --playlist-bg: rgba(255, 0, 0, 0.1);\n    --text-color: #FFF;\n    --nd-text-color: #7D7D7D;\n    --border-width: 1px;\n    --player-bg-border-width: 1px;\n    --border-color: rgba(0, 0, 0, 0);\n    --border-hover-color: red;\n    --border-click-color: #0FF;\n    --bg-color: #000;\n    --in-player-bg-color: rgba(0, 0, 0, 0.5);\n    --top-bar-and-search-background: rgba(0, 0, 0, 0.507);\n    --things-end-on-video: rgba(66, 66, 66, 0.507);\n    --hover-time-background: rgba(0, 0, 0, 0.425);\n    --search-background-hover: rgba(255, 0, 0, 0.5);\n    --theme-radius: 10px;\n    --theme-time-radius: 10px;\n    --theme-radius-big: 20px;\n    --border-minus: calc(var(--border-width) * -1);\n    --bg-border-minus: calc(var(--player-bg-border-width) * -1)\n}\n\nhtml:not(.style-scope),\n:not(.style-scope),\nhtml:not(.style-scope) {\n    --yt-spec-brand-background-primary: var(--top-bar-and-search-background) !important;\n    --yt-spec-brand-background-solid: var(--bg-color) !important;\n    --yt-spec-general-background-a: var(--bg-color) !important;\n    --yt-spec-call-to-action: var(--theme) !important;\n    --yt-spec-badge-chip-background: var(--playlist-bg) !important;\n    --yt-spec-text-primary: var(--text-color) !important;\n    --yt-spec-text-secondary: var(--nd-text-color) !important;\n    --yt-spec-brand-button-background: var(--theme) !important;\n    --yt-spec-static-brand-red: var(--theme) !important;\n    --yt-spec-brand-icon-inactive: var(--theme) !important\n}\n\n#tooltip.tp-yt-paper-tooltip {\n    background-color: var(--bg-color) !important\n}\n\nbody::-webkit-scrollbar,\n.playlist-items.ytd-playlist-panel-renderer::-webkit-scrollbar,\n#guide-inner-content.ytd-app:hover::-webkit-scrollbar {\n    width: 11px !important\n}\n\n.ytp-preview:not(.ytp-text-detail) .ytp-tooltip-text-no-title {\n    display: block !important;\n    background-color: var(--hover-time-background) !important\n}\n\nytd-live-chat-frame {\n    transition: all .2s cubic-bezier(0, 1, 1, 1) !important\n}\n\n.ytp-ce-expanding-overlay-background,\n.ytp-ce-playlist-count {\n    background: var(--things-end-on-video) !important\n}\n\n.sbdd_b,\n#scrim,\ntp-yt-iron-overlay-backdrop {\n    background: var(--top-bar-and-search-background) !important\n}\n\nytd-thumbnail-overlay-hover-text-renderer {\n    background-color: var(--top-bar-and-search-background) !important\n}\n\n.sbfl_b,\n.sbsb_a,\n#container.style-scope.ytd-masthead {\n    background: transparent !important\n}\n\n.sbsb_d,\n#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:hover,\n#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:focus,\n.ytp-menuitem:not([aria-disabled=true]):hover {\n    background: var(--search-background-hover) !important;\n    transition: all .2s cubic-bezier(0.1, 0.7, 1, 1) !important\n}\n\n.gsfs,\n.ytp-ce-channel-metadata,\n.ytp-cards-teaser .ytp-cards-teaser-text,\n.ytp-panel-menu,\n.ytp-ce-website-title,\n.ytp-ce-merchandise-title {\n    color: var(--text-color) !important\n}\n\n#player,\nytd-multi-page-menu-renderer {\n    border-radius: var(--theme-radius-big) !important\n}\n\na.thumbnail>.ytcd-basic-item-large-image,\nytcp-thumbnail-with-title,\nytd-playlist-thumbnail,\nytd-thumbnail,\n#thumbnail,\n.thumbnail-container.ytd-notification-renderer,\n.sbdd_b,\n.ytp-ce-video,\n.ytp-ce-playlist,\n[aria-live=\"polite\"],\n.ytp-tooltip-bg,\n.ytp-tooltip-text.ytp-tooltip-text-no-title,\n.branding-img.iv-click-target,\n.branding-context-container-inner,\nytd-thumbnail-overlay-bottom-panel-renderer,\n.ytp-progress-list,\n.ytp-play-progress.ytp-swatch-background-color,\n.ytp-load-progress,\n.ytp-hover-progress.ytp-hover-progress-light,\n.ytp-gradient-bottom,\n.style-scope.ytd-subscribe-button-renderer,\n#container.ytd-playlist-panel-renderer,\n.header.ytd-playlist-panel-renderer,\nytd-button-renderer.style-suggestive[is-paper-button] tp-yt-paper-button.ytd-button-renderer,\nytd-live-chat-frame,\n.ytp-ce-playlist-count,\n.ytp-ce-expanding-overlay-background,\n.ytp-popup.ytp-settings-menu,\n.ytp-sb-subscribe,\n.ytp-sb-unsubscribe,\n.iv-drawer,\n.iv-card,\n.iv-card a.iv-click-target,\n.ytp-cards-teaser-box,\n.miniplayer.ytd-miniplayer,\n.ytp-popup,\n.badge.ytd-badge-supported-renderer,\n.ytp-ce-website .ytp-ce-expanding-image,\n.ytp-ce-merchandise .ytp-ce-expanding-image,\n.ytp-flyout-cta .ytp-flyout-cta-body,\n#ytp-ad-image,\n.ytp-ad-preview-container,\n.ytp-ad-message-container,\n#guide-content,\n.sbsb_d,\n#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer,\n#masthead,\n#search-icon-legacy,\n.ytp-ad-skip-button.ytp-button,\n.ytp-flyout-cta .ytp-flyout-cta-icon,\n#banner>img,\n#icon>img,\n#action,\n.ytp-cards-teaser,\n.ytp-ce-video-duration,\n.ytp-show-tiles .ytp-videowall-still,\n.ytp-videowall-still-info-content,\n.ytp-videowall-still-listlabel-mix.ytp-videowall-still-listlabel,\n.style-scope.ytd-popup-container,\n.style-scope.ytd-miniplayer,\n#action-companion-ad-info-button.ytd-action-companion-ad-renderer,\n.ytp-flyout-cta .ytp-flyout-cta-action-button,\n.ytp-autonav-endscreen-upnext-thumbnail,\n.ytp-autonav-endscreen-upnext-button,\nytd-playlist-panel-video-renderer,\ntp-yt-paper-item.ytd-menu-service-item-renderer,\nytd-menu-service-item-renderer[use-icons],\n.ytp-ad-overlay-image,\n.ytp-ad-button-icon,\n.ytp-ad-overlay-close-button,\n.ytp-ad-text-overlay,\n.ytp-ad-button-icon,\n.ytp-ad-button-icon,\n.html5-video-player .caption-visual-line .ytp-caption-segment:last-child,\n#media-container.ytd-display-ad-renderer,\nytd-display-ad-renderer[layout=display-ad-layout-top-landscape-image] #media-badge.ytd-display-ad-renderer,\n#chips-wrapper.ytd-feed-filter-chip-bar-renderer,\nytd-mini-guide-entry-renderer {\n    border-radius: var(--theme-radius) !important\n}\n\na.thumbnail>.ytcd-basic-item-large-image,\nytcp-thumbnail-with-title,\nytd-playlist-thumbnail,\nytd-thumbnail,\n#thumbnail,\n.thumbnail-container.ytd-notification-renderer,\n#avatar,\n#author-thumbnail.ytd-comment-simplebox-renderer,\n.style-scope.ytd-comment-renderer.no-transition,\n#player,\n.ytp-preview:not(.ytp-text-detail) .ytp-tooltip-text-no-title,\n#container.ytd-playlist-panel-renderer,\nytd-live-chat-frame,\nytd-thumbnail-overlay-side-panel-renderer,\nytd-thumbnail-overlay-bottom-panel-renderer,\n.ytp-gradient-bottom,\n.ytp-popup.ytp-settings-menu,\n.iv-drawer,\n.ytp-cards-teaser-box,\n.miniplayer.ytd-miniplayer,\n.ytp-flyout-cta .ytp-flyout-cta-body,\n#ytp-ad-image,\n.ytp-ad-preview-container,\n.ytp-ad-message-container,\n#guide-content,\n.ytp-ad-skip-button.ytp-button,\n#banner>img,\n#icon>img,\n#action,\n.ytp-show-tiles .ytp-videowall-still,\nyt-confirm-dialog-renderer[dialog][dialog][dialog],\n.ytp-ce-element.ytp-ce-element-show,\n#contentWrapper.tp-yt-iron-dropdown>* {\n    border-collapse: separate !important;\n    overflow: hidden !important;\n    box-shadow: var(--border-minus) 0 var(--border-color), 0 var(--border-width) var(--border-color), var(--border-width) 0 var(--border-color), 0 var(--border-minus) var(--border-color) !important\n}\n\n.ytp-gradient-bottom,\n.ytp-popup.ytp-settings-menu,\n.ytp-tooltip-bg {\n    box-shadow: var(--player-bg-border-width) 0 var(--border-color), 0 var(--bg-border-minus) var(--border-color), var(--bg-border-minus) 0 var(--border-color), 0 var(--player-bg-border-width) var(--border-color) !important\n}\n\n#text.ytd-channel-name,\nyt-button-renderer.yt-formatted-string.yt-button-renderer,\npaper-ripple,\na.yt-simple-endpoint.yt-formatted-string,\n.style-scope.ytd-menu-renderer.force-icon-button.style-default-active,\n.badge-style-type-live-now.ytd-badge-supported-renderer,\n.badge-style-type-starting-soon.ytd-badge-supported-renderer {\n    border-color: var(--theme) !important;\n    color: var(--theme) !important\n}\n\npaper-ripple,\n.ytp-swatch-color,\na.ytp-ce-link,\nyt-icon.ytd-compact-link-renderer,\nyt-icon.ytd-toggle-theme-compact-link-renderer {\n    border-radius: var(--theme-radius) !important;\n    color: var(--theme) !important\n}\n\n.ytp-swatch-background-color,\n.ytp-settings-button.ytp-hd-quality-badge:after,\n.ytp-chrome-controls .ytp-button[aria-pressed]:after,\n.ytp-sb-subscribe,\na.ytp-sb-subscribe {\n    background-color: var(--theme) !important\n}\n\nytd-thumbnail-overlay-time-status-renderer,\nytd-thumbnail-overlay-side-panel-renderer,\nytd-thumbnail-overlay-toggle-button-renderer,\n.iv-branding-active .branding-context-container-inner,\n.ytp-ce-video-duration {\n    border-radius: var(--theme-time-radius) !important;\n    background-color: var(--hover-time-background) !important\n}\n\na.yt-simple-endpoint.yt-formatted-string::selection,\nspan::selection,\nyt-formatted-string::selection,\n.ytp-menuitem[aria-checked=true] .ytp-menuitem-toggle-checkbox,\n.ytp-volume-slider-handle,\n.ytp-volume-slider-handle:before {\n    background: var(--theme) !important\n}\n\n#container.ytd-searchbox,\n.yt-ui-ellipsis,\n.ytp-tooltip.ytp-preview:not(.ytp-text-detail),\n#contentContainer,\n.ytp-videowall-still-info-duration {\n    background-color: transparent !important;\n    border-color: transparent !important\n}\n\nytd-playlist-thumbnail,\nytd-thumbnail,\nytd-compact-playlist-renderer,\nytd-compact-video-renderer,\nytd-compact-radio-renderer,\nytd-compact-playlist-renderer>div>div>div>a,\nytd-compact-video-renderer>div>div>div>a,\nytd-compact-radio-renderer>div>div>div>a,\nytd-thumbnail.ytd-rich-grid-media,\nytd-thumbnail.ytd-rich-grid-media>a,\n#button.ytd-menu-renderer.yt-icon.ytd-menu-renderer {\n    transition: all .2s cubic-bezier(0.1, 0.5, 1, 1) !important\n}\n\nytd-thumbnail-overlay-toggle-button-renderer {\n    background-color: transparent\n}\n\nytd-compact-playlist-renderer:hover>div>ytd-playlist-thumbnail,\nytd-compact-video-renderer:hover>div>ytd-thumbnail,\nytd-compact-radio-renderer:hover>div>ytd-thumbnail {\n    box-shadow: var(--border-minus) 0 var(--border-hover-color), 0 var(--border-width) var(--border-hover-color), var(--border-width) 0 var(--border-hover-color), 0 var(--border-minus) var(--border-hover-color) !important\n}\n\nytd-thumbnail.ytd-rich-grid-media:hover {\n    margin-block-start: -15px !important;\n    margin-block-end: 15px !important;\n    box-shadow: var(--border-minus) 0 var(--border-hover-color), 0 var(--border-width) var(--border-hover-color), var(--border-width) 0 var(--border-hover-color), 0 var(--border-minus) var(--border-hover-color) !important\n}\n\nytd-thumbnail.ytd-rich-grid-media:active {\n    box-shadow: var(--border-minus) 0 var(--border-click-color), 0 var(--border-width) var(--border-click-color), var(--border-width) 0 var(--border-click-color), 0 var(--border-minus) var(--border-click-color) !important\n}\n\nytd-compact-playlist-renderer:hover,\nytd-compact-video-renderer:hover,\nytd-compact-radio-renderer:hover {\n    margin-inline-start: -15px !important\n}\n\nytd-compact-playlist-renderer:hover>div>div>div>a,\nytd-compact-video-renderer:hover>div>div>div>a,\nytd-compact-radio-renderer:hover>div>div>div>a {\n    margin-inline-end: 15px !important\n}\n\nytd-compact-playlist-renderer:active>div>ytd-playlist-thumbnail,\nytd-compact-video-renderer:active>div>ytd-thumbnail,\nytd-compact-radio-renderer:active>div>ytd-thumbnail {\n    box-shadow: var(--border-minus) 0 var(--border-click-color), 0 var(--border-width) var(--border-click-color), var(--border-width) 0 var(--border-click-color), 0 var(--border-minus) var(--border-click-color) !important\n}\n\n.ytp-button:not([aria-disabled=true]):not([disabled]):not([aria-hidden=true]):hover>svg>path,\nytd-topbar-logo-renderer>a>div>yt-icon>svg>g>g>path {\n    fill: var(--theme) !important\n}\n\n.ytp-chrome-top,\n.ytp-chrome-bottom,\n.ytp-gradient-bottom,\n.ytp-button:not([aria-disabled=true]):not([disabled]):not([aria-hidden=true])>svg>path {\n    transition: all .2s cubic-bezier(0, 1, 1, 1) !important\n}\n\n.ytp-autohide:not(.ytp-autohide-active) .ytp-gradient-top,\n.ytp-autohide:not(.ytp-autohide-active) .ytp-gradient-bottom {\n    display: block !important\n}\n\n.ytp-gradient-bottom {\n    height: 30px !important;\n    background-image: none !important\n}\n\n.ytp-popup.ytp-settings-menu,\n.ytp-gradient-bottom,\n.iv-drawer,\n.ytp-cards-teaser-box,\n.ytp-popup,\n.ytp-bezel {\n    background-color: var(--in-player-bg-color) !important\n}\n\n.ytp-gradient-top[aria-hidden=true],\n.ytp-gradient-bottom[aria-hidden=true],\n.ytp-autohide .ytp-gradient-top,\n.ytp-autohide .ytp-gradient-bottom,\n.ytp-autohide .ytp-playlist-menu-button,\n.ytp-autohide .ytp-back-button,\n.ytp-autohide .ytp-title-channel,\n.ytp-autohide .ytp-title,\n.ytp-autohide .ytp-chrome-top .ytp-watch-later-button,\n.ytp-autohide .ytp-chrome-top .ytp-share-button,\n.ytp-autohide .ytp-chrome-top .ytp-copylink-button,\n.ytp-autohide:not(.ytp-cards-teaser-shown) .ytp-cards-button,\n.ytp-autohide .ytp-overflow-button,\n.ytp-autohide .ytp-chrome-bottom,\n.ytp-chrome-top[aria-hidden=true],\n.ytp-chrome-bottom[aria-hidden=true] {\n    margin-block-start: 50px !important;\n    margin-block-end: -50px !important;\n    transition: all .1s cubic-bezier(0.1, 0.5, 1, 0) !important\n}"]))
  SetidxTo("PRESET(SUPER LOW PC) (CSS) Potato machine (less blur)", JSON.stringify(["VDOBGT", "false", "EnaCUSCSST", 'true', "CUSTOM", ":root {\n    --blur-amount: 10px;\n    --theme: red;\n    --playlist-bg: rgba(255, 0, 0, 0.1);\n    --text-color: #FFF;\n    --nd-text-color: #7D7D7D;\n    --border-width: 1px;\n    --player-bg-border-width: 1px;\n    --border-color: rgba(0, 0, 0, 0);\n    --border-hover-color: red;\n    --border-click-color: #0FF;\n    --bg-color: #000;\n    --in-player-bg-color: rgba(0, 0, 0, 0.5);\n    --top-bar-and-search-background: rgba(0, 0, 0, 0.507);\n    --things-end-on-video: rgba(66, 66, 66, 0.507);\n    --hover-time-background: rgba(0, 0, 0, 0.425);\n    --search-background-hover: rgba(255, 0, 0, 0.5);\n    --theme-radius: 10px;\n    --theme-time-radius: 10px;\n    --theme-radius-big: 20px;\n    --border-minus: calc(var(--border-width) * -1);\n    --bg-border-minus: calc(var(--player-bg-border-width) * -1)\n}\n\nhtml:not(.style-scope),\n:not(.style-scope),\nhtml:not(.style-scope) {\n    --yt-spec-brand-background-primary: var(--top-bar-and-search-background) !important;\n    --yt-spec-brand-background-solid: var(--bg-color) !important;\n    --yt-spec-general-background-a: var(--bg-color) !important;\n    --yt-spec-call-to-action: var(--theme) !important;\n    --yt-spec-badge-chip-background: var(--playlist-bg) !important;\n    --yt-spec-text-primary: var(--text-color) !important;\n    --yt-spec-text-secondary: var(--nd-text-color) !important;\n    --yt-spec-brand-button-background: var(--theme) !important;\n    --yt-spec-static-brand-red: var(--theme) !important;\n    --yt-spec-brand-icon-inactive: var(--theme) !important\n}\n\n#tooltip.tp-yt-paper-tooltip {\n    background-color: var(--bg-color) !important\n}\n\nbody::-webkit-scrollbar,\n.playlist-items.ytd-playlist-panel-renderer::-webkit-scrollbar,\n#guide-inner-content.ytd-app:hover::-webkit-scrollbar {\n    width: 11px !important\n}\n\n.ytp-preview:not(.ytp-text-detail) .ytp-tooltip-text-no-title {\n    display: block !important;\n    background-color: var(--hover-time-background) !important\n}\n\nytd-live-chat-frame {\n    transition: all .2s cubic-bezier(0, 1, 1, 1) !important\n}\n\n.sbdd_b,\n#container.style-scope.ytd-masthead,\nytd-multi-page-menu-renderer,\n.ytp-gradient-bottom,\n.ytp-popup.ytp-settings-menu,\n#chips-wrapper.ytd-feed-filter-chip-bar-renderer,\n.iv-drawer,\n#card.ytd-miniplayer,\nytd-miniplayer,\n.ytp-bezel,\n.ytp-caption-segment,\n.ytp-bezel-text {\n    backdrop-filter: blur(var(--blur-amount)) !important\n}\n\n.ytp-ce-expanding-overlay-background,\n.ytp-ce-playlist-count {\n    background: var(--things-end-on-video) !important\n}\n\n.sbdd_b,\n#scrim,\ntp-yt-iron-overlay-backdrop {\n    background: var(--top-bar-and-search-background) !important\n}\n\nytd-thumbnail-overlay-hover-text-renderer {\n    background-color: var(--top-bar-and-search-background) !important\n}\n\n.sbfl_b,\n.sbsb_a,\n#container.style-scope.ytd-masthead {\n    background: transparent !important\n}\n\n.sbsb_d,\n#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:hover,\n#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:focus,\n.ytp-menuitem:not([aria-disabled=true]):hover {\n    background: var(--search-background-hover) !important;\n    transition: all .2s cubic-bezier(0.1, 0.7, 1, 1) !important\n}\n\n.gsfs,\n.ytp-ce-channel-metadata,\n.ytp-cards-teaser .ytp-cards-teaser-text,\n.ytp-panel-menu,\n.ytp-ce-website-title,\n.ytp-ce-merchandise-title {\n    color: var(--text-color) !important\n}\n\n#player,\nytd-multi-page-menu-renderer {\n    border-radius: var(--theme-radius-big) !important\n}\n\na.thumbnail>.ytcd-basic-item-large-image,\nytcp-thumbnail-with-title,\nytd-playlist-thumbnail,\nytd-thumbnail,\n#thumbnail,\n.thumbnail-container.ytd-notification-renderer,\n.sbdd_b,\n.ytp-ce-video,\n.ytp-ce-playlist,\n[aria-live=\"polite\"],\n.ytp-tooltip-bg,\n.ytp-tooltip-text.ytp-tooltip-text-no-title,\n.branding-img.iv-click-target,\n.branding-context-container-inner,\nytd-thumbnail-overlay-bottom-panel-renderer,\n.ytp-progress-list,\n.ytp-play-progress.ytp-swatch-background-color,\n.ytp-load-progress,\n.ytp-hover-progress.ytp-hover-progress-light,\n.ytp-gradient-bottom,\n.style-scope.ytd-subscribe-button-renderer,\n#container.ytd-playlist-panel-renderer,\n.header.ytd-playlist-panel-renderer,\nytd-button-renderer.style-suggestive[is-paper-button] tp-yt-paper-button.ytd-button-renderer,\nytd-live-chat-frame,\n.ytp-ce-playlist-count,\n.ytp-ce-expanding-overlay-background,\n.ytp-popup.ytp-settings-menu,\n.ytp-sb-subscribe,\n.ytp-sb-unsubscribe,\n.iv-drawer,\n.iv-card,\n.iv-card a.iv-click-target,\n.ytp-cards-teaser-box,\n.miniplayer.ytd-miniplayer,\n.ytp-popup,\n.badge.ytd-badge-supported-renderer,\n.ytp-ce-website .ytp-ce-expanding-image,\n.ytp-ce-merchandise .ytp-ce-expanding-image,\n.ytp-flyout-cta .ytp-flyout-cta-body,\n#ytp-ad-image,\n.ytp-ad-preview-container,\n.ytp-ad-message-container,\n#guide-content,\n.sbsb_d,\n#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer,\n#masthead,\n#search-icon-legacy,\n.ytp-ad-skip-button.ytp-button,\n.ytp-flyout-cta .ytp-flyout-cta-icon,\n#banner>img,\n#icon>img,\n#action,\n.ytp-cards-teaser,\n.ytp-ce-video-duration,\n.ytp-show-tiles .ytp-videowall-still,\n.ytp-videowall-still-info-content,\n.ytp-videowall-still-listlabel-mix.ytp-videowall-still-listlabel,\n.style-scope.ytd-popup-container,\n.style-scope.ytd-miniplayer,\n#action-companion-ad-info-button.ytd-action-companion-ad-renderer,\n.ytp-flyout-cta .ytp-flyout-cta-action-button,\n.ytp-autonav-endscreen-upnext-thumbnail,\n.ytp-autonav-endscreen-upnext-button,\nytd-playlist-panel-video-renderer,\ntp-yt-paper-item.ytd-menu-service-item-renderer,\nytd-menu-service-item-renderer[use-icons],\n.ytp-ad-overlay-image,\n.ytp-ad-button-icon,\n.ytp-ad-overlay-close-button,\n.ytp-ad-text-overlay,\n.ytp-ad-button-icon,\n.ytp-ad-button-icon,\n.html5-video-player .caption-visual-line .ytp-caption-segment:last-child,\n#media-container.ytd-display-ad-renderer,\nytd-display-ad-renderer[layout=display-ad-layout-top-landscape-image] #media-badge.ytd-display-ad-renderer,\n#chips-wrapper.ytd-feed-filter-chip-bar-renderer,\nytd-mini-guide-entry-renderer {\n    border-radius: var(--theme-radius) !important\n}\n\na.thumbnail>.ytcd-basic-item-large-image,\nytcp-thumbnail-with-title,\nytd-playlist-thumbnail,\nytd-thumbnail,\n#thumbnail,\n.thumbnail-container.ytd-notification-renderer,\n#avatar,\n#author-thumbnail.ytd-comment-simplebox-renderer,\n.style-scope.ytd-comment-renderer.no-transition,\n#player,\n.ytp-preview:not(.ytp-text-detail) .ytp-tooltip-text-no-title,\n#container.ytd-playlist-panel-renderer,\nytd-live-chat-frame,\nytd-thumbnail-overlay-side-panel-renderer,\nytd-thumbnail-overlay-bottom-panel-renderer,\n.ytp-gradient-bottom,\n.ytp-popup.ytp-settings-menu,\n.iv-drawer,\n.ytp-cards-teaser-box,\n.miniplayer.ytd-miniplayer,\n.ytp-flyout-cta .ytp-flyout-cta-body,\n#ytp-ad-image,\n.ytp-ad-preview-container,\n.ytp-ad-message-container,\n#guide-content,\n.ytp-ad-skip-button.ytp-button,\n#banner>img,\n#icon>img,\n#action,\n.ytp-show-tiles .ytp-videowall-still,\nyt-confirm-dialog-renderer[dialog][dialog][dialog],\n.ytp-ce-element.ytp-ce-element-show,\n#contentWrapper.tp-yt-iron-dropdown>* {\n    border-collapse: separate !important;\n    overflow: hidden !important;\n    box-shadow: var(--border-minus) 0 var(--border-color), 0 var(--border-width) var(--border-color), var(--border-width) 0 var(--border-color), 0 var(--border-minus) var(--border-color) !important\n}\n\n.ytp-gradient-bottom,\n.ytp-popup.ytp-settings-menu,\n.ytp-tooltip-bg {\n    box-shadow: var(--player-bg-border-width) 0 var(--border-color), 0 var(--bg-border-minus) var(--border-color), var(--bg-border-minus) 0 var(--border-color), 0 var(--player-bg-border-width) var(--border-color) !important\n}\n\n#text.ytd-channel-name,\nyt-button-renderer.yt-formatted-string.yt-button-renderer,\npaper-ripple,\na.yt-simple-endpoint.yt-formatted-string,\n.style-scope.ytd-menu-renderer.force-icon-button.style-default-active,\n.badge-style-type-live-now.ytd-badge-supported-renderer,\n.badge-style-type-starting-soon.ytd-badge-supported-renderer {\n    border-color: var(--theme) !important;\n    color: var(--theme) !important\n}\n\npaper-ripple,\n.ytp-swatch-color,\na.ytp-ce-link,\nyt-icon.ytd-compact-link-renderer,\nyt-icon.ytd-toggle-theme-compact-link-renderer {\n    border-radius: var(--theme-radius) !important;\n    color: var(--theme) !important\n}\n\n.ytp-swatch-background-color,\n.ytp-settings-button.ytp-hd-quality-badge:after,\n.ytp-chrome-controls .ytp-button[aria-pressed]:after,\n.ytp-sb-subscribe,\na.ytp-sb-subscribe {\n    background-color: var(--theme) !important\n}\n\nytd-thumbnail-overlay-time-status-renderer,\nytd-thumbnail-overlay-side-panel-renderer,\nytd-thumbnail-overlay-toggle-button-renderer,\n.iv-branding-active .branding-context-container-inner,\n.ytp-ce-video-duration {\n    border-radius: var(--theme-time-radius) !important;\n    background-color: var(--hover-time-background) !important\n}\n\na.yt-simple-endpoint.yt-formatted-string::selection,\nspan::selection,\nyt-formatted-string::selection,\n.ytp-menuitem[aria-checked=true] .ytp-menuitem-toggle-checkbox,\n.ytp-volume-slider-handle,\n.ytp-volume-slider-handle:before {\n    background: var(--theme) !important\n}\n\n#container.ytd-searchbox,\n.yt-ui-ellipsis,\n.ytp-tooltip.ytp-preview:not(.ytp-text-detail),\n#contentContainer,\n.ytp-videowall-still-info-duration {\n    background-color: transparent !important;\n    border-color: transparent !important\n}\n\nytd-playlist-thumbnail,\nytd-thumbnail,\nytd-compact-playlist-renderer,\nytd-compact-video-renderer,\nytd-compact-radio-renderer,\nytd-compact-playlist-renderer>div>div>div>a,\nytd-compact-video-renderer>div>div>div>a,\nytd-compact-radio-renderer>div>div>div>a,\nytd-thumbnail.ytd-rich-grid-media,\nytd-thumbnail.ytd-rich-grid-media>a,\n#button.ytd-menu-renderer.yt-icon.ytd-menu-renderer {\n    transition: all .2s cubic-bezier(0.1, 0.5, 1, 1) !important\n}\n\nytd-thumbnail-overlay-toggle-button-renderer {\n    background-color: transparent\n}\n\nytd-compact-playlist-renderer:hover>div>ytd-playlist-thumbnail,\nytd-compact-video-renderer:hover>div>ytd-thumbnail,\nytd-compact-radio-renderer:hover>div>ytd-thumbnail {\n    box-shadow: var(--border-minus) 0 var(--border-hover-color), 0 var(--border-width) var(--border-hover-color), var(--border-width) 0 var(--border-hover-color), 0 var(--border-minus) var(--border-hover-color) !important\n}\n\nytd-thumbnail.ytd-rich-grid-media:hover {\n    margin-block-start: -15px !important;\n    margin-block-end: 15px !important;\n    box-shadow: var(--border-minus) 0 var(--border-hover-color), 0 var(--border-width) var(--border-hover-color), var(--border-width) 0 var(--border-hover-color), 0 var(--border-minus) var(--border-hover-color) !important\n}\n\nytd-thumbnail.ytd-rich-grid-media:active {\n    box-shadow: var(--border-minus) 0 var(--border-click-color), 0 var(--border-width) var(--border-click-color), var(--border-width) 0 var(--border-click-color), 0 var(--border-minus) var(--border-click-color) !important\n}\n\nytd-compact-playlist-renderer:hover,\nytd-compact-video-renderer:hover,\nytd-compact-radio-renderer:hover {\n    margin-inline-start: -15px !important\n}\n\nytd-compact-playlist-renderer:hover>div>div>div>a,\nytd-compact-video-renderer:hover>div>div>div>a,\nytd-compact-radio-renderer:hover>div>div>div>a {\n    margin-inline-end: 15px !important\n}\n\nytd-compact-playlist-renderer:active>div>ytd-playlist-thumbnail,\nytd-compact-video-renderer:active>div>ytd-thumbnail,\nytd-compact-radio-renderer:active>div>ytd-thumbnail {\n    box-shadow: var(--border-minus) 0 var(--border-click-color), 0 var(--border-width) var(--border-click-color), var(--border-width) 0 var(--border-click-color), 0 var(--border-minus) var(--border-click-color) !important\n}\n\n.ytp-button:not([aria-disabled=true]):not([disabled]):not([aria-hidden=true]):hover>svg>path,\nytd-topbar-logo-renderer>a>div>yt-icon>svg>g>g>path {\n    fill: var(--theme) !important\n}\n\n.ytp-chrome-top,\n.ytp-chrome-bottom,\n.ytp-gradient-bottom,\n.ytp-button:not([aria-disabled=true]):not([disabled]):not([aria-hidden=true])>svg>path {\n    transition: all .2s cubic-bezier(0, 1, 1, 1) !important\n}\n\n.ytp-autohide:not(.ytp-autohide-active) .ytp-gradient-top,\n.ytp-autohide:not(.ytp-autohide-active) .ytp-gradient-bottom {\n    display: block !important\n}\n\n.ytp-gradient-bottom {\n    height: 30px !important;\n    background-image: none !important\n}\n\n.ytp-popup.ytp-settings-menu,\n.ytp-gradient-bottom,\n.iv-drawer,\n.ytp-cards-teaser-box,\n.ytp-popup,\n.ytp-bezel {\n    background-color: var(--in-player-bg-color) !important\n}\n\n.ytp-gradient-top[aria-hidden=true],\n.ytp-gradient-bottom[aria-hidden=true],\n.ytp-autohide .ytp-gradient-top,\n.ytp-autohide .ytp-gradient-bottom,\n.ytp-autohide .ytp-playlist-menu-button,\n.ytp-autohide .ytp-back-button,\n.ytp-autohide .ytp-title-channel,\n.ytp-autohide .ytp-title,\n.ytp-autohide .ytp-chrome-top .ytp-watch-later-button,\n.ytp-autohide .ytp-chrome-top .ytp-share-button,\n.ytp-autohide .ytp-chrome-top .ytp-copylink-button,\n.ytp-autohide:not(.ytp-cards-teaser-shown) .ytp-cards-button,\n.ytp-autohide .ytp-overflow-button,\n.ytp-autohide .ytp-chrome-bottom,\n.ytp-chrome-top[aria-hidden=true],\n.ytp-chrome-bottom[aria-hidden=true] {\n    margin-block-start: 50px !important;\n    margin-block-end: -50px !important;\n    transition: all .1s cubic-bezier(0.1, 0.5, 1, 0) !important\n}"]))
  SetidxTo("PRESETPink-Black", JSON.stringify(["SubtitleC", "#ff94f6", "RepeatT", "false", "TimeEdge", "10", "EndBGO", "50", "NdTextO", "100", "ThemeSndO", "50", "MediaBlurT", "true", "ThumbClickC", "#ffffff", "CUSTOM", "", "TextC", "#ffffff", "CenterMediaT", "true", "SubtitleO", "100", "IMGS", "100", "ThemeC", "#ff94f6", "FlipT", "false", "BottomGT", "true", "transitionT", "true", "IMGX", "50", "Edge", "10", "TIMETEXTC", "#ffffff", "VDOTEXTC", "#ffffff", "MediaBGC", "#000000", "TimeBGC", "#000000", "TimeLoadedC", "#ffffff", "TimeOutT", "true", "HBTC", "#ffffff", "HBTO", "100", "PlayerOutT", "true", "ThemeFortO", "50", "Border", "1", "OutShaC", "#ff94f6", "ThumbHoverT", "Slide", "ThemeThrO", "20", "NdTextC", "#c4c4c4", "CapOutT", "false", "PlaylisthoverO", "50", "ThemeO", "100", "ThemehoverC", "#ff94f6", "ThumbHoverColorC", "#ff94f6", "ThemeFortC", "#ff94f6", "EndBGC", "#000000", "HoverBorder", "1", "CapBGC", "#000000", "BlurBGAM", "10", "SubOutT", "false", "BlurWhatT", "all", "ThumbHoverColorO", "100", "PlayerBorder", "1", "TIMETEXTO", "100", "OutOrShaT", "Out", "ThumbClickO", "100", "ThemehoverO", "50", "MediaH", "24", "TopOutT", "true", "ThemeThrC", "#ff94f6", "PlaylisthoverC", "#ff94f6", "TimeLoadedO", "50", "CenterTimeT", "true", "IMGY", "50", "BlurAm", "5", "PlayerEdge", "20", "Time-LineBGC", "#ffffff", "ThemeSndC", "#000000", "BGO", "70", "EnaCUSCSST", "false", "BlurSubT", "true", "CapBGO", "50", "OutShaO", "50", "VDOTEXTO", "100", "MediaBGO", "50", "TimeBGO", "50", "CenterMedia", "true", "VBGT", "true", "TextO", "100", "BGC", "#000000", "TimeH", "18", "Time-LineBGO", "20", "Zoom", "1.075", "SyncLogoT", "true", "ScWidth", "11", "BGIMG", ""]))
  SetidxTo("PRESET(Low PC) Purple", JSON.stringify(["SubtitleC", "#da8aff", "RepeatT", "false", "TimeEdge", "10", "EndBGO", "50", "CenterUDT", "true", "ThemeSndO", "50", "MediaBlurT", "true", "ThumbClickC", "#ff0000", "TextC", "#ffffff", "HBTO", "100", "SubtitleO", "100", "IMGS", "100", "ThemeFortC", "#c494ff", "CenterMediaT", "true", "ThemeC", "#bf70ff", "FlipT", "false", "BottomGT", "true", "transitionT", "true", "IMGX", "50", "NVDOC", "1", "VDOTEXTC", "#ffffff", "MediaBGC", "#000000", "TimeAniT", "true", "TimeLoadedC", "#ffffff", "TimeOutT", "true", "HBTC", "#ffffff", "PlayerOutT", "true", "VDOSYT", "true", "ThemeThrO", "20", "Border", "1", "OutShaC", "#cd70ff", "ThumbHoverT", "Slide", "Edge", "10", "Zoom", "1.075", "NdTextC", "#c4c4c4", "ScrollT", "false", "CapOutT", "false", "CapBGO", "80", "BlurWhatT", "main", "ThemehoverC", "#dc5cff", "TIMETEXTC", "#ffffff", "CenterMedia", "true", "EndBGC", "#000000", "HoverBorder", "1", "CapBGC", "#000000", "BlurBGAM", "0", "TimeBGC", "#000000", "SubOutT", "false", "NVDOT", "2", "ThumbHoverColorO", "100", "PlayerBorder", "1", "TIMETEXTO", "100", "OutOrShaT", "Out", "ThumbClickO", "100", "ThemehoverO", "50", "MediaH", "24", "NVDOB", "50", "NdTextO", "100", "ThemeFortO", "100", "ThemeThrC", "#b061ff", "PlaylisthoverC", "#d666ff", "TimeLoadedO", "50", "CenterUDFT", "true", "CenterTimeT", "true", "IMGY", "15", "BlurAm", "5", "PlayerEdge", "20", "ThemeSndC", "#000000", "BGO", "70", "VDOBGT", "false", "EnaCUSCSST", "false", "BlurSubT", "true", "CUSTOM", "", "OutShaO", "0", "VDOTEXTO", "100", "MediaBGO", "50", "NVDOBGT", "0.4", "ThemeO", "100", "TimeBGO", "50", "VBGT", "true", "TextO", "100", "LoadVDOT", "false", "BGC", "#000000", "TimeH", "18", "Time-LineBGO", "20", "Time-LineBGC", "#ffffff", "TopOutT", "true", "SyncLogoT", "true", "PlaylisthoverO", "50", "ScWidth", "0", "ThumbHoverColorC", "#ff00dd", "BGIMG", ""]))
  SetidxTo("PRESETI'm Using :D", JSON.stringify({ "FlipT": "false", "TimeBGC": "#000000", "IMGSBOX": "100", "AutoEXPIPT": "true", "ThemeFortC": "#b67aff", "VisualT": "false", "TimeH": "18", "SubtitleO": "100", "TimeAniT": "true", "STUPIDME": "true", "SubtitleC": "#ffffff", "IMGS": "100", "SyncLogoT": "true", "ADDCUSTOM": "", "TextC": "#ffffff", "BGO": "70", "ThumbHoverColorC": "#ff00dd", "MediaBlurT": "false", "ThumbHoverColorO": "100", "Time-LineBGO": "20", "NVDOC": "1", "EndBGC": "#000000", "Border": "1", "CenterUDFT": "true", "MediaBGO": "31", "ScWidth": "0", "BlurBGAM": "0", "ThemehoverC": "#dc5cff", "VDOTEXTO": "100", "NdTextO": "100", "IconFillT": "true", "ScrollT": "true", "ThemeSndO": "88", "AutoPIPT": "true", "LoadVDOT": "false", "ThemeThrC": "#b061ff", "PlaylisthoverO": "50", "TimeBGO": "50", "NVDOT": "2", "SubOutT": "false", "SwapRowT": "true", "TimeLoadedO": "50", "CenterMedia": "true", "OutShaO": "0", "ThemehoverO": "50", "HBTO": "100", "CenterUDT": "true", "IMGXBOX": "50", "PlaylisthoverC": "#d666ff", "TimeOutT": "true", "ThumbClickC": "#ff0000", "EnaCUSCSST": "false", "PlayerOutT": "true", "IMGY": "0", "ThumbClickO": "100", "transitionT": "true", "TIMETEXTO": "100", "ConUnderVDOT": "false", "BlurWhatT": "none", "PlayerBorder": "1", "ThumbAnimT": "true", "OutShaC": "#cd70ff", "ThemeC": "#c680ff", "subShaColorC": "#000000", "CenterTimeT": "true", "LeftBarT": "true", "LeftBar": "true", "NewSubT": "true", "EndBGO": "50", "BGC": "#000000", "CanvasQua": "40", "HoverBorder": "1", "IMGX": "50", "Test": "Test", "CapBGC": "#000000", "TimeLoadedC": "#ffffff", "Enable": "false", "ControlUnderVDOT": "true", "NVDOB": "50", "TIMETEXTC": "#ffffff", "ThemeO": "100", "CapOutT": "false", "CUSTOM": "", "subSpace": "1", "LeftBarC": "#000000", "CenterMediaT": "true", "ThumbHoverT": "Slide", "RepeatT": "false", "subWidth": "700", "OutOrShaT": "Out", "ThemeSndC": "#000000", "LeftBarO": "0", "BottomGT": "true", "MediaH": "30", "TextO": "100", "subShaWidth": "0", "ThemeThrO": "20", "APIT": "false", "subShaColorO": "100", "TopOutT": "true", "VBGT": "true", "Edge": "10", "subShaBlur": "0", "VDOTEXTC": "#ffffff", "PlayerEdge": "20", "CapBGO": "0", "BlurAm": "5", "PtranT": "true", "VDOBGT": "true", "Zoom": "1.075", "TimeEdge": "10", "VDOSYT": "true", "MediaBGC": "#000000", "MediaSpace": "70", "NewSub": "true", "NewVDOanimaT": "true", "EnaADDCSST": "true", "NdTextC": "#c4c4c4", "HBTC": "#ffffff", "NVDOBGT": "0.4", "BlurSubT": "false", "ThemeFortO": "56", "Time-LineBGC": "#ffffff", "BGIMG": "https://raw.githubusercontent.com/hemucode/ImageAPI/main/images/%20(4).jpg" }))
  SetidxTo("PRESET(Low-end PC) Cyan", JSON.stringify(["SubtitleC", "#8adcff", "RepeatT", "false", "LeftBar", "true", "EndBGO", "50", "CenterUDT", "true", "ThemeSndO", "50", "MediaBlurT", "false", "ThumbClickC", "#ff0000", "TextC", "#ffffff", "HBTO", "100", "SubtitleO", "100", "IMGS", "100", "ThemeFortC", "#94fff3", "CenterMediaT", "true", "ThemeC", "#70cfff", "FlipT", "false", "BottomGT", "true", "transitionT", "true", "IMGX", "50", "NVDOC", "1", "TimeLoadedC", "#ffffff", "VDOTEXTC", "#ffffff", "MediaBGC", "#000000", "TimeAniT", "true", "TimeEdge", "10", "TimeOutT", "true", "HBTC", "#ffffff", "PlayerOutT", "true", "VDOSYT", "true", "ThemeThrO", "20", "Border", "1", "OutShaC", "#cd70ff", "ThumbHoverT", "Slide", "Edge", "10", "Zoom", "1.075", "NdTextC", "#c4c4c4", "ScrollT", "false", "CapOutT", "false", "CapBGO", "80", "BlurWhatT", "none", "ThemehoverC", "#5cd6ff", "TIMETEXTC", "#ffffff", "CenterMedia", "true", "EndBGC", "#000000", "HoverBorder", "1", "CapBGC", "#000000", "BlurBGAM", "0", "TimeBGC", "#000000", "SubOutT", "false", "NVDOT", "2", "ThumbHoverColorO", "100", "PlayerBorder", "1", "TIMETEXTO", "100", "OutOrShaT", "Out", "ThumbClickO", "100", "ThemehoverO", "50", "MediaH", "24", "NVDOB", "50", "NdTextO", "100", "ThemeFortO", "50", "ThemeThrC", "#61fcff", "PlaylisthoverC", "#66d9ff", "TimeLoadedO", "50", "CenterUDFT", "true", "CenterTimeT", "true", "IMGY", "15", "BlurAm", "5", "PlayerEdge", "20", "ThemeSndC", "#000000", "BGO", "70", "VDOBGT", "false", "EnaCUSCSST", "false", "BlurSubT", "false", "CUSTOM", "", "OutShaO", "0", "VDOTEXTO", "100", "MediaBGO", "50", "NVDOBGT", "0.4", "ThemeO", "100", "TimeBGO", "50", "VBGT", "true", "TextO", "100", "LoadVDOT", "false", "BGC", "#000000", "TimeH", "18", "LeftBarT", "true", "Time-LineBGO", "20", "Time-LineBGC", "#ffffff", "TopOutT", "true", "SyncLogoT", "true", "PlaylisthoverO", "50", "ScWidth", "0", "ThumbHoverColorC", "#009dff", "BGIMG", ""]))
  SetidxTo("PRESETGlass", JSON.stringify({ "FlipT": "false", "TimeBGC": "#000000", "IMGSBOX": "100", "AutoEXPIPT": "true", "ThemeFortC": "#ffffff", "VisualT": "false", "TimeH": "18", "SubtitleO": "100", "TimeAniT": "true", "STUPIDME": "true", "SubtitleC": "#ffffff", "IMGS": "100", "SyncLogoT": "true", "ADDCUSTOM": "", "TextC": "#ffffff", "BGO": "77", "ThumbHoverColorC": "#808080", "MediaBlurT": "true", "ThumbHoverColorO": "100", "Time-LineBGO": "20", "NVDOC": "1", "EndBGC": "#000000", "Border": "1", "CenterUDFT": "true", "MediaBGO": "31", "ScWidth": "0", "BlurBGAM": "0", "ThemehoverC": "#dc5cff", "VDOTEXTO": "100", "NdTextO": "100", "IconFillT": "true", "ScrollT": "true", "ThemeSndO": "54", "AutoPIPT": "true", "LoadVDOT": "false", "ThemeThrC": "#474747", "PlaylisthoverO": "50", "NVDOT": "2", "SubOutT": "true", "SwapRowT": "false", "TimeBGO": "50", "TimeLoadedO": "50", "CenterMedia": "true", "OutShaO": "37", "SPSubScribeBGC": "#ff0000", "ThemehoverO": "50", "HBTO": "100", "CenterUDT": "true", "IMGXBOX": "50", "PlaylisthoverC": "#d666ff", "SPSubScribeColorC": "#000000", "ThumbClickC": "#ff0000", "TimeOutT": "true", "EnaCUSCSST": "false", "PlayerOutT": "true", "IMGY": "0", "ThumbClickO": "100", "transitionT": "true", "TIMETEXTO": "100", "ConUnderVDOT": "false", "BlurWhatT": "all", "PlayerBorder": "-1", "ThumbAnimT": "true", "SPSubScribeBGO": "100", "OutShaC": "#000000", "ThemeC": "#ffffff", "subShaColorC": "#000000", "CenterTimeT": "true", "LeftBarT": "true", "LeftBar": "true", "NewSubT": "true", "EndBGO": "50", "BGC": "#000000", "CanvasQua": "40", "HoverBorder": "1", "IMGX": "50", "Test": "Test", "CapBGC": "#000000", "TimeLoadedC": "#ffffff", "Enable": "false", "ControlUnderVDOT": "true", "NVDOB": "50", "TIMETEXTC": "#ffffff", "ThemeO": "63", "CapOutT": "false", "CUSTOM": "", "subSpace": "1", "LeftBarC": "#000000", "CenterMediaT": "true", "ThumbHoverT": "Slide", "RepeatT": "false", "subWidth": "700", "OutOrShaT": "Sha", "ThemeSndC": "#000000", "SPSubScribeColorO": "100", "LeftBarO": "39", "BottomGT": "true", "MediaH": "30", "TextO": "100", "subShaWidth": "0", "ThemeThrO": "46", "APIT": "false", "subShaColorO": "100", "TopOutT": "true", "VBGT": "true", "Edge": "10", "subShaBlur": "0", "VDOTEXTC": "#ffffff", "PlayerEdge": "20", "CapBGO": "0", "BlurAm": "15", "PtranT": "true", "VDOBGT": "true", "Zoom": "1.075", "TimeEdge": "10", "VDOSYT": "true", "MediaBGC": "#000000", "MediaSpace": "70", "NewSub": "true", "NewVDOanimaT": "true", "EnaADDCSST": "false", "NdTextC": "#b8b8b8", "SPSubScribeT": "false", "HBTC": "#ffffff", "NVDOBGT": "0.4", "BlurSubT": "false", "ThemeFortO": "17", "Time-LineBGC": "#ffffff", "BGIMG": "https://raw.githubusercontent.com/hemucode/CustomDesignForYoutube/main/Images/GradientsImage.png" }))
}

var Set = document.createElement("button"),
  Collect_Style,
  MODE,
  request,
  LIST,
  CHOOSE,
  IWantTOset,
  ReturnCode,
  ChangeslogMain,
  CanSave = true,
  USEING = `(Current)`,
  ADDScrollEVENT = false,
  VDOBG = false,
  TranHead = false,
  EPar,
  LoopCheck,
  ADDCSS

CODEHEMU_N_style = document.createElement("style");

CODEHEMU_N_style.id = "CODEHEMUSTYLE";

function styleloop() {
  if (document.head == null) {
    setTimeout(() => {
      styleloop()
    }, 10);
  } else {
    document.head.appendChild(CODEHEMU_N_style)
  }
}

styleloop()

function waitForElmByID(selector) {
  return new Promise(resolve => {
    if (document.getElementById(selector)) {
      return resolve(document.getElementById(selector));
    }

    const observer = new MutationObserver(mutations => {
      if (document.getElementById(selector)) {
        resolve(document.getElementById(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

function waitForElm(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}


function UpdateIcon() {
  DOwithindexed(function () {
    get = store.get('IconURL')
    get.onsuccess = function (got) {
      icon = document.getElementsByTagName('link')

      Array.from(icon).forEach(e => {
        if (e.getAttribute('rel') == "icon" || e.getAttribute('rel') == "shortcut icon") {
          e.href = got.target.result
        }
      })
    }
  })
}

window.addEventListener('DOMContentLoaded', () => {
  UpdateIcon()
})

function CheckPar(ThisE) {
  if (LoopCheck != 0 && ThisE != null) {
    if (ThisE.id == "dismissible" || ThisE.id == "wc-endpoint") {
      EPar = ThisE
    } else {
      LoopCheck = LoopCheck - 1
      CheckPar(ThisE.parentNode)
    }
  } else {
    EPar = false
  }
}

codehemuset_logo = `<img src="${logo}" class="CODEHEMUSET_img" style="width: 35px;height: 35px;">`;
Set.insertAdjacentHTML('afterbegin', codehemuset_logo);
Set.id = "CODEHEMUSET";
Set.style = `display: inline-block;
background-color: transparent;
border: transparent;
color: var(--yt-spec-text-primary);
text-align: center;
font-size: 15px;
transition: all 0.5s;
margin: 5px;
width: 50px;`;

async function DOwithindexed(Successdo) {
  let reqdb = window.indexedDB.open("CODEHEMU", 1)

  reqdb.onupgradeneeded = () => {
    reqdb.result.createObjectStore("User_saved")
  }

  reqdb.onsuccess = function () {
    let db
    try {
      db = reqdb.result
    } catch (e) {

    }
    let transaction = db.transaction("User_saved", "readwrite")
    store = transaction.objectStore("User_saved")

    Successdo()

    transaction.oncomplete = function () {
      db.close()
    }
  }
}

function NUllColor(THIS, Color, Opa) {
  SetTo(THIS + 'C', Color)
  SetTo(THIS + 'O', Opa)
}

function SetTo(THIS, DE) {
  if (localStorage["codehemu-" + THIS] == null) {
    localStorage["codehemu-" + THIS] = DE
  }
  if (localStorage[THIS] != null) {
    localStorage["codehemu-" + THIS] = localStorage[THIS]
    localStorage.removeItem(THIS)
  }
}

function SetValueCheck2(Match, IFTRUE, IFFLASE) {
  if (IWantTOset[1] == Match) {
    if (IWantTOset[0] == 'true') {
      ReturnCode = IFTRUE
    } else {
      ReturnCode = IFFLASE
    }
  }
}

function SetValueCheck() {

  SetValueCheck2("IconFill", ``, `:not([d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"])`)

  SetValueCheck2("PlayerOut", `.ytp-gradient-bottom,`, ``)

  SetValueCheck2("TopOut", `#masthead,`, ``)

  SetValueCheck2("TimeOut", `ytd-thumbnail-overlay-time-status-renderer,`, ``)

  SetValueCheck2("SubOut", `tp-yt-paper-button.ytd-subscribe-button-renderer,`, ``)

  SetValueCheck2("CapOut", `.caption-window.ytp-caption-window-bottom,`, ``)

  SetValueCheck2("CenterTime", `
    ytd-thumbnail-overlay-time-status-renderer
    {
        width: 100% !important;
        margin: 0px !important;
        padding: 0px !important;
        bottom: 0px;
    }
    
    #text.ytd-thumbnail-overlay-time-status-renderer
    {
        margin-left: auto;
        margin-right: auto;
    }
    
    .ytp-ce-video-duration
    {
        width: 97% !important;
        margin: -2px !important;
        text-align:center !important;
    }`, ``)

  SetValueCheck2("BlurSub", `
    .caption-window.ytp-caption-window-bottom
    {
        backdrop-filter: blur(var(--blur-amount)) !important;
    }`, ``)

  SetValueCheck2("Repeat", `background-repeat: repeat !important;`, `background-repeat: no-repeat !important;`)

  SetValueCheck2("BottomG", 'background-image: none !important;', ``)

  SetValueCheck2("VBG", `ytd-watch-flexy[theater] #player-theater-container.ytd-watch-flexy,
    ytd-watch-flexy[fullscreen] #player-theater-container.ytd-watch-flexy,`, ``)

  SetValueCheck2("CenterMedia", `.ytp-chrome-controls {
        display: flex !important;
        flex-direction: row !important;
        justify-content: center !important;
    }

    .ytp-left-controls,
    .ytp-chapter-title.ytp-button,
    .ytp-chapter-container{
        display: contents !important;
    }
    
    .ytp-big-mode .ytp-chrome-controls .ytp-fullerscreen-edu-button.ytp-button{
        display:none !important;
    }`, ``)

  SetValueCheck2("MediaBlur", `.ytp-gradient-bottom{
        backdrop-filter: blur(var(--blur-amount)) !important;
    }`, ``)

  SetValueCheck2("CenterUD", `#title.ytd-watch-metadata,#container.ytd-video-primary-info-renderer {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-block: 30px;
    }
    
    ytd-watch-metadata.ytd-watch-flexy{
        display: flex;
        flex-direction: column;
    }
    
    .style-scope ytd-watch-metadata{
        display: flex;
    }
    
    h1.ytd-watch-metadata{
        text-align: center;
    }`, ``)

  SetValueCheck2("CenterUDF", `.ytp-big-mode .ytp-title-text {
        text-align: center;
    }`, ``)

  SetValueCheck2("TimeAni", `ytd-thumbnail-overlay-time-status-renderer{
        transition:all .2s;
        }
        
        #thumbnail:hover > #overlays > ytd-thumbnail-overlay-time-status-renderer {
        margin-bottom:-20px !important;
    }`, ``)

  SetValueCheck2("Scroll", `#masthead > #background{
        transition: background .2s;
    }`, ``)

  SetValueCheck2("Ptran", `ytd-page-manager:has(div.html5-video-player:not(.ytp-fullscreen):not(.ytp-small-mode)){
        transition: all 0.5s;
    }`, ``)

  SetValueCheck2("NewSub", `
    .ytp-caption-segment {
        background: transparent !important;

        filter: drop-shadow(0px 0px 1px var(--sub-sha-color)) drop-shadow(0px 0px var(--sub-ShaBlur) var(--sub-sha-color)) drop-shadow(0px 0px 1px var(--sub-sha-color));

        font-weight: var(--sub-Width);

        letter-spacing: var(--sub-Space);
        color: var(--sub-color) !important;
    }
    
    .captions-text{
        background: var(--sub-bg) !important;
    }

    .caption-window{
        background: transparent !important;
    }
    `, ``)

  SetValueCheck2("SwapRow", `
    #columns{
        display:flex !important;
        flex-direction: row-reverse !important;
    }
    `, ``)

  SetValueCheck2("ThumbAnim", `
    #dismissible:has(.yt-core-image){
        transition: all 1s ease;
        margin-top: 100px !important;
        opacity:0 !important;
    }

    #dismissible:has(.yt-core-image--loaded){
        margin-top: 0px !important;
        opacity:1 !important;
    }
    `, ``)

  SetValueCheck2("SPSubScribe", `
    .ytd-subscribe-button-renderer button.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled{
        background: var(--SubSc-BG) !important;
        color: var(--SubSc-Tx) !important;
    }
    `, ``)

  SetValueCheck2("AutohideBar", ``, `
    div.html5-video-player:not(.ytp-fullscreen):not(.ytp-embed).ytp-autohide .ytp-gradient-bottom,
    div.html5-video-player:not(.ytp-fullscreen):not(.ytp-embed).ytp-autohide .ytp-chrome-bottom
    {
    margin-left:0px !important;
    opacity: 1 !important;
    }
    
    div.html5-video-player:not(.ytp-fullscreen):not(.ytp-embed).ytp-autohide .ytp-gradient-bottom
    {
    width:100% !important;
    }
    
    div.html5-video-player:not(.ytp-fullscreen):not(.ytp-embed).ytp-autohide .ytp-chrome-bottom
    {
    width: calc(100% - 24px) !important;
    }`)

  SetValueCheck2("ControlUnderVDO", `
.html5-video-container{
      height:100%;
}

div.html5-video-player:not(.ytp-fullscreen) video {
    position: unset !important;
}

div.html5-video-player:not(.ytp-fullscreen):not(.ytp-small-mode):not(.ytp-embed){
      padding-bottom: var(--Media-Space);
}

div.html5-video-player:not(.ytp-fullscreen) .ytp-chrome-bottom{
      padding-top: 50px !important;
}

div.html5-video-player:not(.ytp-fullscreen):not(.ytp-embed) .ytp-gradient-bottom,
div.html5-video-player:not(.ytp-fullscreen):not(.ytp-embed) .ytp-chrome-bottom{
    overflow: hidden !important;
}

.ytp-gradient-bottom[aria-hidden=true], .ytp-autohide .ytp-gradient-bottom,.ytp-autohide .ytp-playlist-menu-button, .ytp-autohide .ytp-back-button, .ytp-autohide .ytp-title-channel, .ytp-autohide .ytp-title, .ytp-autohide .ytp-chrome-top .ytp-watch-later-button, .ytp-autohide .ytp-chrome-top .ytp-share-button, .ytp-autohide .ytp-chrome-top .ytp-copylink-button, .ytp-autohide:not(.ytp-cards-teaser-shown) .ytp-cards-button, .ytp-autohide .ytp-overflow-button, .ytp-autohide .ytp-chrome-bottom, .ytp-chrome-top[aria-hidden=true], .ytp-chrome-bottom[aria-hidden=true]
{
      transition: all 0.5s !important;
      opacity:0 !important;
      width:0px !important;
      margin-left: 50% !important;
}

#player:has(div.html5-video-player:not(.ytp-embed)),
#player-theater-container:has(#player-container){
      margin-bottom:var(--Media-Space);
}

div.html5-video-player:not(.ytp-embed) div[aria-live="polite"]{
      top: unset !important;
      bottom: 100px;
}

div.html5-video-player.ytp-embed{
    overflow:hidden !important;
}

div.html5-video-player:not(.ytp-fullscreen):not(.ytp-small-mode):not(.ytp-embed) .ytp-caption-window-container,
div.html5-video-player:not(.ytp-fullscreen):not(.ytp-small-mode):not(.ytp-embed) .ytp-player-content,
div.html5-video-player:not(.ytp-fullscreen):not(.ytp-small-mode):not(.ytp-embed) .ytp-cued-thumbnail-overlay{
      height:calc(100% - var(--Media-Space)) !important;
}

div.html5-video-player:not(.ytp-fullscreen):not(.ytp-small-mode) .ytp-caption-window-bottom{
      margin-bottom: 0px !important;
}

#player-theater-container div.html5-video-player:not(.ytp-fullscreen) video{
      height:100% !important;
      width:auto !important;
}

.html5-video-container{
      display: flex;
      justify-content: center;
}

.iv-branding {
    bottom: 10px !important;
}

#player{
    outline: transparent !important;
    box-shadow: 0px 0px 0px 0px transparent !important;
}
    `, `
    .ytp-chrome-top,
                .ytp-chrome-bottom,
                .ytp-gradient-bottom,
                .ytp-button:not([aria-disabled=true]):not([disabled]):not([aria-hidden=true]) > svg > path,
                ytd-playlist-panel-video-renderer,
                ytd-menu-renderer
                {
                    transition: all .2s  !important;
                }
                
                .ytp-popup.ytp-settings-menu,
                .ytp-gradient-bottom,
                .iv-drawer,
                .ytp-cards-teaser-box,
                .ytp-popup,
                [aria-live="polite"]
                {
                    background-color: var(--in-player-bg-color) !important;
                }
                
                .ytp-gradient-top[aria-hidden=true], .ytp-gradient-bottom[aria-hidden=true], .ytp-autohide .ytp-gradient-top, .ytp-autohide .ytp-gradient-bottom,.ytp-autohide .ytp-playlist-menu-button, .ytp-autohide .ytp-back-button, .ytp-autohide .ytp-title-channel, .ytp-autohide .ytp-title, .ytp-autohide .ytp-chrome-top .ytp-watch-later-button, .ytp-autohide .ytp-chrome-top .ytp-share-button, .ytp-autohide .ytp-chrome-top .ytp-copylink-button, .ytp-autohide:not(.ytp-cards-teaser-shown) .ytp-cards-button, .ytp-autohide .ytp-overflow-button, .ytp-autohide .ytp-chrome-bottom, .ytp-chrome-top[aria-hidden=true], .ytp-chrome-bottom[aria-hidden=true]
                {
                    margin-block-start: 50px !important;
                    margin-block-end: -50px !important;
                    transition: all .1s cubic-bezier(0.1,0.5,1,0) !important;
                }

                #player{
                    overflow: hidden;
                }
    `)
}




function SetValueSelect2(Match, IFCHOOSETHIS, DOTHIS) {
  if (IWantTOset[1] == Match && IWantTOset[0] == IFCHOOSETHIS) {
    ReturnCode = DOTHIS
  }
}


function SetValueSelect() {
  SetValueSelect2("BlurWhat", "all", `
    .sbdd_b,
    #masthead,
    ytd-multi-page-menu-renderer,
    .ytp-popup.ytp-settings-menu,
    #chips-wrapper.ytd-feed-filter-chip-bar-renderer,
    .iv-drawer,
    .branding-context-container-inner
    .ytp-cards-teaser,
    #card.ytd-miniplayer,
    .ytp-popup,
    .ytp-tooltip-text.ytp-tooltip-text-no-title,
    .ytp-ce-playlist-count,
    .ytp-ce-expanding-overlay-background,
    ytd-thumbnail-overlay-bottom-panel-renderer,
    ytd-thumbnail-overlay-time-status-renderer,
    ytd-thumbnail-overlay-toggle-button-renderer,
    #scrim,
    .ytp-ad-preview-container,
    .ytp-ad-message-container,
    ytd-miniplayer,
    .ytp-cards-teaser,
    .ytp-ce-video-duration,
    .ytp-videowall-still-info-content,
    .ytp-videowall-still-listlabel-mix.ytp-videowall-still-listlabel,
    tp-yt-iron-overlay-backdrop.opened,
    .iv-branding-active .branding-context-container-inner,
    .ytp-ce-shadow:not([aria-hidden=true]),
    .ytp-ad-preview-container,
    .ytp-ad-skip-button-container,
    ytd-video-preview,
    #CODEHEMUBG,
    .CODEHEMUBG,
    ytd-thumbnail-overlay-side-panel-renderer,
    .ytd-thumbnail-overlay-loading-preview-renderer,
    ytd-thumbnail-overlay-inline-unplayable-renderer,
    .ytp-tooltip.ytp-text-detail.ytp-preview,
    .ytp-ad-skip-button,
    tp-yt-paper-dialog
    {
        backdrop-filter: blur(var(--blur-amount)) !important;
    }
    
    #thumbnail:has(ytd-thumbnail-overlay-hover-text-renderer) img{
        transition:filter 0.2s;
    }

    #thumbnail:has(ytd-thumbnail-overlay-hover-text-renderer):hover img{
        filter:blur(var(--blur-amount));
    }`)

  SetValueSelect2("BlurWhat", "main", `.sbdd_b,
    #masthead,
    ytd-multi-page-menu-renderer,
    .ytp-popup.ytp-settings-menu,
    #chips-wrapper.ytd-feed-filter-chip-bar-renderer,
    .iv-drawer,
    #card.ytd-miniplayer,
    ytd-miniplayer
    {
        backdrop-filter: blur(var(--blur-amount)) !important;
    }`)
  SetValueSelect2("BlurWhat", "none", `
    * {
        -webkit-backdrop-filter: none !important;
        backdrop-filter: none !important;
    }`)





  SetValueSelect2("ThumbHover", "Slide", `#dismissible.ytd-rich-grid-media:hover > ytd-thumbnail
    {   
        margin-block-start: -15px !important;
        margin-block-end: 15px !important;;
    }
    
    ytd-compact-playlist-renderer:hover,
    ytd-compact-video-renderer:hover,
    ytd-compact-radio-renderer:hover,
    ytd-video-renderer:hover,
    ytd-playlist-renderer:hover
    {    
        margin-inline-start: -15px !important;
    }

    ytd-compact-link-renderer:hover
    {    
        margin-inline-start: 15px !important;
    }
    
    ytd-compact-playlist-renderer:hover>div>div>div>a,
    ytd-compact-video-renderer:hover>div>div>div>a,
    ytd-compact-radio-renderer:hover>div>div>div>a
    {
        margin-inline-end: 15px !important;
    }
    
    ytd-playlist-panel-video-renderer:hover > .yt-simple-endpoint.ytd-playlist-panel-video-renderer,
    ytd-guide-entry-renderer:hover
    {
        margin-inline-start: -10px !important;
        margin-inline-end: 10px !important;
    }`)

  SetValueSelect2("ThumbHover", "Zoom", `ytd-thumbnail:hover,
    ytd-playlist-thumbnail:hover
    {   
        transform: scale(var(--Zoom)) !important;
        z-index: 400;
    }`)

  SetValueSelect2("ThumbHover", "Slide&Zoom", `#dismissible.ytd-rich-grid-media:hover > ytd-thumbnail
    {   
        margin-block-start: -15px !important;
        margin-block-end: 15px !important;;
    }
    
    ytd-compact-playlist-renderer:hover,
    ytd-compact-video-renderer:hover,
    ytd-compact-radio-renderer:hover
    {    
        margin-inline-start: -15px !important;
    }
    
    ytd-compact-playlist-renderer:hover>div>div>div>a,
    ytd-compact-video-renderer:hover>div>div>div>a,
    ytd-compact-radio-renderer:hover>div>div>div>a,
    ytd-video-renderer:hover,
    ytd-playlist-renderer:hover
    {
        margin-inline-end: 15px !important;
    }

    ytd-compact-link-renderer:hover
    {
        margin-inline-end: -15px !important;
    }
    
    ytd-thumbnail:hover,
    ytd-playlist-thumbnail:hover
    {   
        transform: scale(var(--Zoom)) !important;
        z-index: 400;
    }
    
    ytd-playlist-panel-video-renderer:hover > .yt-simple-endpoint.ytd-playlist-panel-video-renderer,
    ytd-guide-entry-renderer:hover
    {
        margin-inline-start: -10px !important;
    }`)

  SetValueSelect2("ThumbHover", "none", ``)



  SetValueSelect2("OutOrSha", "Out", JSON.stringify([`outline: solid !important;
    outline-color: var(--border-color) !important;
    outline-width:var(--border-width) !important;`,
    `outline: solid !important;
    outline-color: var(--border-color) !important;
    outline-width:var(--player-bg-border-width) !important;`
  ]))

  SetValueSelect2("OutOrSha", "Sha", JSON.stringify([`box-shadow: var(--border-width) var(--border-width) 10px var(--border-color) !important;`, `box-shadow: var(--player-bg-border-width) var(--player-bg-border-width) 10px var(--border-color) !important;`]))

  SetValueSelect2("OutOrSha", "None", JSON.stringify([`outline-color: transparent !important;`, `outline-color: transparent !important;`]))
}

function GetCodeC(Id) {
  IWantTOset = [localStorage["codehemu-" + Id + "T"], Id]
  SetValueCheck()
  SetValueSelect()
  return ReturnCode
}

//-----------------------------------------------------------------

function SetNull() {
  SetTo("NUMPRESET", JSON.stringify(ForcePre))
  //Text-------------------------
  SetTo("BlurAm", `5`)
  SetTo("BlurBGAM", '10')

  SetTo("Border", '1')
  SetTo("PlayerBorder", '1')

  SetTo("MediaH", '24')

  SetTo("IMGX", '50')
  SetTo("IMGY", '50')
  SetTo("IMGS", '100')

  SetTo("Edge", '10')
  SetTo("TimeEdge", '10')
  SetTo("PlayerEdge", '20')

  SetTo("Zoom", '1.075')
  SetTo("ScWidth", '11')

  SetTo("HoverBorder", '1')
  SetTo("TimeH", `18`)

  SetTo("SHOWPRESET", true)

  SetTo("CUSTOM", ``)
  SetTo("ADDCUSTOM", ``)

  SetTo("NVDOB", `60`)
  SetTo("NVDOC", `1`)
  SetTo("NVDOBGT", `0.4`)
  SetTo("NVDOT", `2`)

  SetTo("subWidth", `700`)
  SetTo("subSpace", `2`)

  SetTo("subShaWidth", `0`)
  SetTo("subShaBlur", `2`)

  SetTo("MediaSpace", `70`)

  SetTo("CanvasQua", `40`)

  //Check------------------------

  SetTo("ErrorCollectT", false)

  SetTo("EnaCUSCSST", false)
  SetTo("EnaADDCSST", false)

  SetTo("APIT", false)
  SetTo("RealtimeT", false)
  SetTo("FlipT", false)
  SetTo("EnableButtonT", true)
  SetTo("AdsSkipT", true)
  SetTo("AdsDisplayT", true)
  SetTo("TopOutT", true)
  SetTo("TimeOutT", true)
  SetTo("PlayerOutT", true)
  SetTo("SubOutT", false)
  SetTo("CapOutT", false)
  SetTo("BlurSubT", false)
  SetTo("RepeatT", false)
  SetTo("CenterTimeT", true)
  SetTo("BottomGT", true)
  SetTo("VBGT", true)
  SetTo("CenterMediaT", true)
  SetTo("MediaBlurT", false)
  SetTo("CenterUDT", true)
  SetTo("CenterUDFT", true)
  SetTo("TimeAniT", true)
  SetTo("ScrollT", true)
  SetTo("VDOBGT", false)
  SetTo("PtranT", false)
  SetTo("SwapRowT", false)
  SetTo("ThumbAnimT", true)

  SetTo("VDOSYT", true)

  SetTo("NewSubT", true)

  SetTo("VisualT", false)
  SetTo("NewVDOanimaT", false)

  SetTo("ControlUnderVDOT", true)

  SetTo("AutoPIPT", true)
  SetTo("AutoEXPIPT", true)

  SetTo("IconFillT", true)
  SetTo("SPSubScribeT", false)

  SetTo("DelBarT", false)
  SetTo("DelBarDebugT", false)

  SetTo("AutohideBarT", true)

  //Select------------------------

  SetTo("BlurWhatT", "none")
  SetTo("ThumbHoverT", "Slide")
  SetTo("OutOrShaT", "Sha")

  //Color------------------------

  NUllColor("Theme", `#659aff`, `100`)
  NUllColor("ThemeSnd", `#000000`, `50`)
  NUllColor("ThemeThr", `#659aff`, `20`)
  NUllColor("ThemeFort", `#659aff`, `20`)
  NUllColor("ThemeChips", `#000000`, `50`)

  NUllColor("OutSha", `#000000`, `50`)
  NUllColor("BG", `#000000`, `70`)
  NUllColor("Themehover", `#659aff`, `50`)
  NUllColor("Playlisthover", `#659aff`, `50`)
  NUllColor("Subtitle", `#ffffff`, `100`)

  NUllColor("Time-LineBG", `#ffffff`, `20`)
  NUllColor("TimeLoaded", `#ffffff`, `50`)

  NUllColor("MediaBG", `#000000`, `50`)

  NUllColor("TimeBG", `#000000`, `50`)

  NUllColor("ThumbHoverColor", `#659aff`, `100`)

  NUllColor("ThumbClick", `#ffffff`, `100`)

  NUllColor("Text", `#ffffff`, `100`)

  NUllColor("NdText", `#c4c4c4`, `100`)

  NUllColor("EndBG", `#000000`, `50`)

  NUllColor("CapBG", `#000000`, `0`)

  NUllColor("VDOTEXT", `#ffffff`, `100`)

  NUllColor("TIMETEXT", `#ffffff`, `100`)

  NUllColor("HBT", `#ffffff`, `100`)

  NUllColor("LeftBar", "#000000", `0`)

  NUllColor("subShaColor", "#000000", `100`)

  NUllColor("SPSubScribeColor", `#ffffff`, `100`)
  NUllColor("SPSubScribeBG", `#ff0000`, `100`)
}

let NORMAL = `

    @keyframes glowing {
        0% { background-position: 0 0; }
        50% { background-position: 400% 0; }
        100% { background-position: 0 0; }
    }

    .NDel:hover {
        background: #41ffe5 !important;
    }

    .NUp:hover {
        background: #ffaf76 !important;
    }

    input[CODEHEMU]::-webkit-file-upload-button{
        border-radius: 10px;
        border: transparent;
        padding: 10px;
        margin-inline-end: 10px;
        transition: all 0.2s;
    }

    input[CODEHEMU]::-webkit-file-upload-button:hover{
       background: black !important;
       color: white !important;
    }

    html
    {
        height:100% !important;
    }

    [type="range"]
    {
        width:100px;
    }

    .needspace
    {
        margin-bottom:10px;
    }
    #CODEHEMUSET img {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
    }

    .CODEHEMUSET_img:hover{
        filter: hue-rotate(125deg);
    }
    .like_review {
      display: block;
      margin: 20px auto 20px;
      text-align: center;
      background: #ed2553;
      border-radius: 3px;
      box-shadow: 0 10px 20px -8px rgb(240, 75, 113);
      padding: 10px 17px;
      font-size: 18px;
      cursor: pointer;
      border: none;
      outline: none;
      color: #ffffff;
      text-decoration: none;
      -webkit-transition: 0.3s ease;
      transition: 0.3s ease;
    }

    [hover]:hover
    {
        background:rgb(100, 100, 100) !important;
    }

    .HoverList {
        border-radius: 10px;
        transition: all 0.2s;
        margin-inline-start: 10px;
        user-select: none;
    }

    .HoverList:hover {
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%) !important;
        color: black !important;
        margin-inline-start: 0px !important;
    }

    .select
    {
        color:white;
        border-radius: 10px;
        background:rgb(33, 33, 33);
        text-align: center;
    }

    .TextBox{
        background:rgb(33, 33, 33);
        width:70px;
        color:white;
        border-radius:10px;
        text-align:center;
        border: transparent;
        padding:4px;
        box-shadow: 0px 0px 3px 0px #ffffff;
    }

    .DoY{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .ColorPick{
        width: 200px;
        border-width: 0px;
        background: transparent;
    }

    .MainBox{
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        font-size: 10px;
        margin-inline: 10px;
        margin-block: 10px;
    }

    .ListBox {
        padding: 10px 15px 10px 20px;
        border-radius: 10px;
        background: #383838;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        font-size: 10px;
        margin-inline: 10px;
        margin-block: 10px;
    }

    .SndBox{
        position: relative;
        border-radius: 10px;
        background: rgb(60 60 60 / 40%);
        padding: 10px;
        width: 100%;
        display: flex;
        align-items: center;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        font-size: 10px;
        margin-inline: -10px;
        margin-block: 10px;
        border-bottom: 1px solid #ffffff6b;
    }


    .DES
    {
        margin-inline:10px;
        color: white;
        font-size: 15px;
    }

    .Reset:hover
    {
        background:white !important;
        color:black !important;
    }

    #CODEHEMUBG
    {
        background: rgba(0, 0, 0);
        border-radius:10px;
    }

    .CODEHEMUBG,.CODEHEMUMAIN{
        overflow: hidden;
    }

    .CODEHEMU::-webkit-scrollbar,
    #MAINPRESET::-webkit-scrollbar
    {
        width:6px !important;
    }

    .CODEHEMU textarea{
        white-space: nowrap !important;
    }

    .CODEHEMU textarea::-webkit-scrollbar
    {
        width:10px !important;
        height:10px !important;
    }

    .CODEHEMU::-webkit-scrollbar-track,
    #MAINPRESET::-webkit-scrollbar-track,
    .CODEHEMU textarea::-webkit-scrollbar-track
    {
        background: transparent;
        border-radius:10px !important;
    }

    .CODEHEMU::-webkit-scrollbar-thumb,
    #MAINPRESET::-webkit-scrollbar-thumb,
    .CODEHEMU textarea::-webkit-scrollbar-thumb
    {
        background: rgba(100, 100, 100, 1) !important;
        border-radius:10px !important;
    }
     
    .CheckBox{
        margin-block: 10px;
        font-size: 20px;
        -webkit-appearance: none;
           -moz-appearance: none;
                appearance: none;
        width: 4em;
        height: 1.5em;
        background: rgb(33, 33, 33);
        border-radius: 3em;
        position: relative;
        cursor: pointer;
        outline: none;
        transition: all .2s;
        box-shadow: 0px 0px 3px 0px #ffffff;
    }
        
    .CheckBox:checked{
        background: linear-gradient(229deg, #00a2ff, #00ff6e);;
    }
        
    .CheckBox:after{
        position: absolute;
        display: flex;
        content: "◈";
        font-weight: 1000;
        width: 1.5em;
        height: 1.5em;
        border-radius: 50%;
        background: #fff !important;
        box-shadow: 0 0 0.25em rgb(0 0 0 / 30%);
        transform: scale(.7);
        left: 0;
        transition: all .2s;
        justify-content: center;
    }

    .NDel,.NUp
    {
        transition: background .2s;
    }
        
    .CheckBox:checked:after{
        left: calc(100% - 1.5em);
        transform: rotate(180deg);
        filter: drop-shadow(0px 0px 10px black);
    }

    #header
    {
        z-index:999 !important;
    }

    .TextBox[type=number]::-webkit-inner-spin-button, 
    .TextBox[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: meter;
    }

    #HOVERLINK,
    #Imgid
    {
        transition: all .2s ease-in-out;
        border-bottom: 1px solid currentColor;
        text-decoration: none;
    }
    .IMGFormat {
      width: 35px;
      height: 35px;
      object-fit: cover;
      border-radius: 10px;
    }

    #HOVERLINK:hover,
    #Imgid:hover
    {
        color:#86c2ff;
    }

    .ColorPick{
        filter: drop-shadow(0px 0px 1px white);
        padding: 0px;
    }
    
    .ColorPick::-webkit-color-swatch {
        border: 0px transparent;
        padding: 0px;
        border-radius:10px;
    }
    `,
  AfterCODEHEMU = `#CODEHEMUBG,
    .CODEHEMUMAIN {
        background: rgba(0,0,0,0.95) !important;
    }
    
    .CODEHEMUBG {
        background: var(--top-bar-and-search-background) !important;
    }
    `

function LOADANIMATION(e) {
  LoopCheck = 7
  CheckPar(e.target)
  if (EPar) {
    ThisVDIMG = EPar.getElementsByTagName("img")[0].currentSrc

    LoadBG = document.createElement("div")
    document.body.append(LoadBG)

    LoadIMG = document.createElement("div")
    LoadBG.append(LoadIMG)

    LoadBG.style = `
        width: 100%;
        height: 100%;
        z-index: 5000;
        position: fixed;
        opacity: 0;
        transition: opacity 0.2s;
        backdrop-filter:blur(100px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        `

    LoadIMG.style = `
        height: 90px;
        width: 160px;
        background-image: url("` + ThisVDIMG + `");
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: var(--theme-radius);
        transition: all 2s;
        `

    setTimeout(() => {
      LoadBG.style.setProperty("opacity", "1")
      LoadIMG.style.setProperty("width", "1920px")
      LoadIMG.style.setProperty("height", "1080px")
    }, 1);

    setTimeout(() => {
      LoadBG.style.setProperty("opacity", "0")
      setTimeout(() => {
        LoadBG.remove()
      }, 200);
    }, 500);

    ThisVDIMG = null
  }
  EPar = null
}

var Masterhead

function ScrollEv() {
  if (Masterhead == null) {
    Masterhead = document.querySelector("#masthead > #background")
  }

  if (Masterhead) {
    toppo = document.documentElement.scrollTop
    if (toppo == 0 && TranHead == false) {
      TranHead = true
      Masterhead.style = `background:transparent;
                backdrop-filter: none !important;
                box-shadow: 0px 0px transparent !important;
                outline: transparent !important;`
    } else {
      if (toppo > 0 && TranHead == true) {
        TranHead = false
        Masterhead.style = ``
      }
    }

  } else {
    setTimeout(() => {
      ScrollEv()
    }, 2000);
  }
}

function SetGlobalBGImage(ImgValue) {
  if (document.getElementById("BGIMG")) {
    RenderPreImg(ImgValue)
  }
}

function update() {
  console.log("UPDATE");
  Collect_Style = ``
  ADDCSS = ``

  if (localStorage["codehemu-VDOBGT"] != 'true' || localStorage["codehemu-EnableButtonT"] != 'true') {
    if (VDOBG == true) {
      VDOBG = false
      DisableBGBlur(true)
    }
  }

  if (localStorage["codehemu-EnaADDCSST"] == 'true') {
    ADDCSS = localStorage["codehemu-ADDCUSTOM"]
  }

  if (localStorage["codehemu-EnableButtonT"] == 'false') {
    CODEHEMU_N_style.textContent = NORMAL;
  } else if (localStorage["codehemu-EnaCUSCSST"] == 'true') {
    CODEHEMU_N_style.textContent = NORMAL + localStorage["codehemu-CUSTOM"] + ADDCSS + AfterCODEHEMU
  } else {

    if (localStorage["codehemu-ScrollT"] == 'true' && localStorage["codehemu-EnableButtonT"] == 'true') {
      if (ADDScrollEVENT == false) {
        ADDScrollEVENT = true
        window.addEventListener("scroll", ScrollEv, {
          passive: true
        })
        ScrollEv()
      }
    } else {
      if (ADDScrollEVENT == true) {
        ADDScrollEVENT = false
        window.removeEventListener('scroll', ScrollEv, {
          passive: true
        })
        document.getElementById("masthead").style.removeProperty("background")
      }
    }

    DOwithindexed(function () {
      let get = store.get("BGIMG")
      get.onsuccess = function (e) {
        let BGIMGCODE = ``,
          BGBLURCODE = ``,
          Flip = ``

        if (localStorage["codehemu-BlurBGAM"] > 0 && e.target.result != null) {
          BGBLURCODE = `#BGFRAME
                {
                    filter: blur(var(--Bg-blur)) !important;
                }`
        }

        if (localStorage["codehemu-FlipT"] == `true`) {
          Flip = `transform: scaleX(-1);`
        }

        if (e.target.result != null && e.target.result != "") {
          BGIMGCODE = `#BGFRAME
                    {
                        width:100%;
                        height:100%;
                        background-image : url("` + e.target.result + `");
                        ` + GetCodeC("Repeat") + `
                        background-position: ` + localStorage["codehemu-IMGX"] + `% ` + localStorage["codehemu-IMGY"] + `% !important;
                        background-size: ` + localStorage["codehemu-IMGS"] + `% !important;
                        top:0;
                        position:fixed;
                        z-index: -10000;
                        ` + Flip + `;
                        transition : opacity 2s;
                    }`

        }

        PreloadImg.src = e.target.result

        if (e.target.result == "") {
          SetGlobalBGImage(e.target.result)
        }

        setTimeout(() => {
          if (localStorage["codehemu-VDOBGT"] == 'true' && localStorage["codehemu-EnableButtonT"] == 'true') {
            if (VDOBG == false) {
              VDOBG = true
              EnableBGBlur()
            }
          }
        }, 10);

        Collect_Style = `html:not(.style-scope)[system-icons]:not(.style-scope)
                {
                    background: black !important;
                }

                body {
                    overflow: auto;
                }

                :root {
                    --blur-amount: ` + localStorage["codehemu-BlurAm"] + `px;
                    --Bg-blur: ` + localStorage["codehemu-BlurBGAM"] + `px;
                    --theme: ` + 'Theme'.GetSaveRgba() + `;
                    --theme-fort: ${"ThemeFort".GetSaveRgba()};
                    --playlist-bg: ` + 'Playlisthover'.GetSaveRgba() + `;
                    --text-color: ` + 'Text'.GetSaveRgba() + `;
                    --nd-text-color: ` + 'NdText'.GetSaveRgba() + `;
                    --border-width: ` + localStorage["codehemu-Border"] + `px;
                    --player-bg-border-width: ` + localStorage["codehemu-PlayerBorder"] + `px;
                    --border-color: ` + 'OutSha'.GetSaveRgba() + `;
                    --border-hover-color: ` + 'ThumbHoverColor'.GetSaveRgba() + `;
                    --border-click-color: ` + 'ThumbClick'.GetSaveRgba() + `;
                    --bg-color: ` + 'BG'.GetSaveRgba() + `;
                    --in-player-bg-color: ` + 'MediaBG'.GetSaveRgba() + `;
                    --top-bar-and-search-background: ` + 'ThemeSnd'.GetSaveRgba() + `;
                    --things-end-on-video: ` + 'EndBG'.GetSaveRgba() + `;
                    --hover-time-background: ` + 'TimeBG'.GetSaveRgba() + `;
                    --search-background-hover: ` + 'Themehover'.GetSaveRgba() + `;
                    --theme-radius: ` + localStorage["codehemu-Edge"] + `px;
                    --theme-time-radius: ` + localStorage["codehemu-TimeEdge"] + `px;
                    --theme-radius-big: ` + localStorage["codehemu-PlayerEdge"] + `px;
                    --border-minus: calc(var(--border-width) * -1);
                    --bg-border-minus: calc(var(--player-bg-border-width) * -1);
                    
                    --border-width-hover: ` + localStorage["codehemu-HoverBorder"] + `px;
                    --border-minus-hover: calc(var(--border-width-hover) * -1);
                    
                    --ThirdTheme: ` + 'ThemeThr'.GetSaveRgba() + `;
                    --Zoom: ` + localStorage["codehemu-Zoom"] + `;

                    --sub-ShaWidth: ` + localStorage["codehemu-subShaWidth"] + `px;
                    --sub-ShaBlur: ` + localStorage["codehemu-subShaBlur"] + `px;

                    --sub-Width: ` + localStorage["codehemu-subWidth"] + `;
                    --sub-Space: ` + localStorage["codehemu-subSpace"] + `px;
                    --sub-color: ` + 'Subtitle'.GetSaveRgba() + `;
                    --sub-bg: ` + 'CapBG'.GetSaveRgba() + `;
                    --sub-sha-color: ` + 'subShaColor'.GetSaveRgba() + `;

                    --Media-Space: ` + localStorage["codehemu-MediaSpace"] + `px;

                    --SubSc-BG : ${'SPSubScribeBG'.GetSaveRgba()};
                    --SubSc-Tx : ${'SPSubScribeColor'.GetSaveRgba()};
                }

                #chips-wrapper{
                    background: ${'ThemeChips'.GetSaveRgba()} !important;
                }

                ytd-app::-webkit-scrollbar {
                    width: 0px !important;
                }
                
                *::-webkit-scrollbar
                {
                width: ` + localStorage["codehemu-ScWidth"] + `px  !important;
                }
                
                *::-webkit-scrollbar-thumb
                {
                    border-radius:10px;
                    background-color: var(--theme) !important;
                }
                
                *:not(body)::-webkit-scrollbar-track,
                html[watch-color-update]
                {
                    --yt-spec-general-background-a: transparent !important;
                    background: transparent !important;
                }
                
                body::-webkit-scrollbar-track
                {
                    background: ` + localStorage["codehemu-BGC"] + ` !important;
                }
                
                ytd-thumbnail-overlay-time-status-renderer
                {
                    height: ` + localStorage["codehemu-TimeH"] + `px !important;
                }

                .ytp-time-current, .ytp-time-separator, .ytp-time-duration
                {
                    color: ` + 'VDOTEXT'.GetSaveRgba() + `!important;
                }
                
                a.thumbnail > .ytcd-basic-item-large-image,
                ytcp-thumbnail-with-title,
                ytd-playlist-thumbnail,
                ytd-thumbnail,
                #thumbnail,
                .thumbnail-container.ytd-notification-renderer,
                yt-img-shadow.ytd-channel-renderer,
                #author-thumbnail.ytd-comment-simplebox-renderer,
                .style-scope.ytd-comment-renderer.no-transition,
                div.html5-video-player:not(.ytp-fullscreen) video,
                .ytp-preview:not(.ytp-text-detail) .ytp-tooltip-text-no-title,
                ytd-thumbnail-overlay-side-panel-renderer,
                ytd-thumbnail-overlay-bottom-panel-renderer,
                ` + GetCodeC("PlayerOut") + `
                .ytp-popup.ytp-settings-menu,
                .iv-drawer,
                .ytp-cards-teaser-box,
                .miniplayer.ytd-miniplayer,
                .ytp-flyout-cta .ytp-flyout-cta-body,
                #ytp-ad-image,
                .ytp-ad-preview-container,
                .ytp-ad-message-container,
                #guide-content,
                .ytp-ad-skip-button.ytp-button,
                #banner > img,
                #icon > img,
                #action,
                ` + GetCodeC("TopOut") + `
                ytd-video-preview,
                ` + GetCodeC("CapOut") + `
                ` + GetCodeC("SubOut") + `
                ` + GetCodeC("TimeOut") + `
                .ytp-show-tiles .ytp-videowall-still,
                #tabs-container,
                yt-confirm-dialog-renderer[dialog][dialog][dialog],
                .ytp-ce-element.ytp-ce-element-show,
                #contentWrapper.tp-yt-iron-dropdown > *,
                .ytp-tooltip-bg,
                .skeleton-bg-color.ytd-ghost-grid-renderer
                {
                    border-collapse: separate;
                    ` + JSON.parse(GetCodeC("OutOrSha"))[0] + `
                }

                div.html5-video-player{
                    overflow: visible;
                }
                
                ` + GetCodeC("PlayerOut") + `
                .ytp-popup.ytp-settings-menu,
                #CODEHEMUBG,
                .CODEHEMUMAIN
                {
                    border-collapse: separate;
                    ` + JSON.parse(GetCodeC("OutOrSha"))[1] + `
                }
                
                #hearted-border.ytd-creator-heart-renderer
                {
                    opacity:0 !important;
                }
                
                .ytp-svg-shadow
                {
                    stroke: #0000 !important;
                }
                
                .gstl_50.sbdd_a
                {
                    top:56px !important;
                }
                
                html:not(.style-scope)[watch-color-update] {
                    --yt-live-chat-background-color: transparent;
                    --yt-live-chat-header-background-color: var(--yt-spec-brand-background-primary);
                }

                html,[dark]{
                    --ytd-chip-cloud-background: rgba(0,0,0,.3) !important;
                    --yt-spec-brand-background-primary: var(--top-bar-and-search-background) !important;
                    --yt-spec-brand-background-solid: var(--bg-color) !important;
                    --yt-spec-general-background-a: var(--bg-color) !important;
                    --yt-spec-call-to-action: var(--theme) !important;
                    --yt-spec-suggested-action: var(--theme-fort) !important;
                    --yt-spec-badge-chip-background: var(--theme-fort) !important;
                    --yt-spec-text-primary: var(--text-color) !important;
                    --yt-spec-text-secondary: var(--nd-text-color) !important;
                    --yt-spec-brand-button-background: var(--theme) !important;
                    --yt-spec-static-brand-red: var(--theme) !important;
                    --yt-spec-brand-icon-inactive: var(--theme) !important;
                    --yt-spec-10-percent-layer: var(--ThirdTheme) !important;
                    --yt-spec-general-background-b: transparent !important;
                    --yt-spec-wordmark-text: var(--text-color) !important;
                    --yt-spec-button-chip-background-hover: var(--search-background-hover) !important;
                    --yt-spec-text-primary-inverse: var(--top-bar-and-search-background) !important;
                    --yt-spec-static-brand-white: ` + 'TIMETEXT'.GetSaveRgba() + ` !important;
                    --yt-spec-base-background: var(--top-bar-and-search-background) !important;
                    --yt-spec-raised-background: var(--top-bar-and-search-background) !important;
                    --yt-spec-menu-background: var(--top-bar-and-search-background) !important;
                    --yt-spec-static-overlay-text-primary: var(--text-color) !important;
                }

                ytd-playlist-panel-video-renderer:hover {
                    background-color: var(--playlist-bg) !important;
                }

                ytd-app{
                    background: var(--bg-color) !important;
                    --app-drawer-content-container-background-color: var(--bg-color) !important;
                }

                .ytp-tooltip-text-no-title
                {
                    color: var(--yt-spec-static-brand-white) !important;
                }

                .ytp-tooltip-text.ytp-tooltip-text-no-title{
                    background: var(--hover-time-background) !important;
                }
                
                html
                {
                    background:black !important;
                }
                
                #hover-overlays
                {
                    transition: opacity .4s;
                    opacity: 0 !important;
                }

                #CODEHEMUBlurBG{
                    transition: opacity 2s , margin-top 0.1s , margin-left 0.1s;
                    filter: blur(` + localStorage["codehemu-NVDOB"] + `px) contrast(` + localStorage["codehemu-NVDOC"] + `) brightness(` + localStorage["codehemu-NVDOBGT"] + `);
                    transform: scale(` + localStorage["codehemu-NVDOT"] + `);
                }

                #CODEHEMUVDOCanvas{
                    transition: margin-top 0.1s , margin-left 0.1s;
                }

                html:has(div.html5-video-player.ytp-fullscreen) #CODEHEMUBlurBG {
                    display: none;
                }
                
                #thumbnail:hover > #hover-overlays
                {
                    opacity: 1 !important;
                }
                
                .ytp-preview:not(.ytp-text-detail) .ytp-tooltip-text-no-title,
                .ytd-thumbnail-overlay-loading-preview-renderer,
                ytd-thumbnail-overlay-inline-unplayable-renderer
                {
                    background-color: var(--hover-time-background) !important;
                }

                .ytp-preview:not(.ytp-text-detail) .ytp-tooltip-text-no-title
                {
                    display: block !important;
                }
                
                ytd-live-chat-frame,
                .yt-simple-endpoint.ytd-playlist-panel-video-renderer,
                ytd-guide-entry-renderer,
                ytd-playlist-thumbnail,
                ytd-thumbnail,
                ytd-compact-playlist-renderer,
                ytd-compact-video-renderer,
                ytd-compact-radio-renderer,
                ytd-compact-playlist-renderer>div>div>div>a,
                ytd-compact-video-renderer>div>div>div>a,
                ytd-compact-radio-renderer>div>div>div>a,
                ytd-thumbnail.ytd-rich-grid-media,
                ytd-thumbnail.ytd-rich-grid-media>a,
                #button.ytd-menu-renderer.yt-icon.ytd-menu-renderer,
                ytd-playlist-video-renderer,
                ytd-video-renderer,
                ytd-playlist-renderer,
                ytd-compact-link-renderer,
                ytd-notification-renderer
                {
                    transition: all .2s;
                }
                
                tp-yt-paper-button.ytd-subscribe-button-renderer[subscribed]{
                    border-bottom: var(--yt-spec-10-percent-layer) !important;
                }
                
                .ytp-ce-expanding-overlay-background,
                .ytp-ce-playlist-count
                {
                    background: var(--things-end-on-video) !important;
                }
                
                .sbdd_b,
                #scrim,
                tp-yt-iron-overlay-backdrop,
                ytd-video-preview[active],
                #tabs-container
                {
                    background: var(--top-bar-and-search-background) !important;
                }
                
                ytd-thumbnail-overlay-hover-text-renderer
                {
                    background-color: var(--top-bar-and-search-background) !important;
                }
                
                #video-preview-container
                {
                    box-shadow: 0px 0px 0px 0px !important;
                }
                
                .sbfl_b,.sbsb_a,
                #container.style-scope.ytd-masthead,
                ytd-mini-guide-renderer,
                ytd-mini-guide-entry-renderer,
                ytd-page-manager>*.ytd-page-manager,
                ` + GetCodeC("VBG") + `
                #channel-container,
                #channel-header,
                #tabs-inner-container,
                .playlist-items,
                #video-preview-container,
                ytd-simple-menu-header-renderer,
                .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal,
                #description,
                #player
                {
                    background: transparent !important;
                }
                
                .sbsb_d,
                #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:hover,
                #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:focus,
                .ytp-menuitem:not([aria-disabled=true]):hover,
                ytd-mini-guide-entry-renderer:hover {
                    background: var(--search-background-hover) !important;
                    transition: all .2s cubic-bezier(0.1,0.7,1,1);
                }
                
                .gsfs,
                .ytp-ce-channel-metadata,
                .ytp-cards-teaser .ytp-cards-teaser-text,
                .ytp-panel-menu,
                .ytp-ce-website-title, .ytp-ce-merchandise-title
                {
                    color: var(--text-color) !important;
                }
                
                ytd-multi-page-menu-renderer,
                div.html5-video-player:not(.ytp-fullscreen) video,
                .ytp-offline-slate-background
                {   
                    border-radius: var(--theme-radius-big) !important;
                }
                
                a.thumbnail > .ytcd-basic-item-large-image,
                ytcp-thumbnail-with-title,
                ytd-playlist-thumbnail,
                ytd-thumbnail,
                #thumbnail,
                .thumbnail-container.ytd-notification-renderer,
                .sbdd_b,
                .ytp-ce-video,
                .ytp-ce-playlist,
                [aria-live="polite"],
                .ytp-tooltip-bg,
                .ytp-tooltip-text.ytp-tooltip-text-no-title,
                .branding-img.iv-click-target,
                .branding-context-container-inner,
                ytd-thumbnail-overlay-bottom-panel-renderer,
                .ytp-progress-list,
                .ytp-play-progress.ytp-swatch-background-color,
                .ytp-load-progress,
                .ytp-hover-progress.ytp-hover-progress-light,
                .style-scope.ytd-subscribe-button-renderer,
                #container.ytd-playlist-panel-renderer,
                .header.ytd-playlist-panel-renderer,
                ytd-button-renderer.style-suggestive[is-paper-button] tp-yt-paper-button.ytd-button-renderer,
                ytd-live-chat-frame,
                .ytp-ce-playlist-count,
                .ytp-ce-expanding-overlay-background,
                .ytp-popup.ytp-settings-menu,
                .ytp-sb-subscribe, .ytp-sb-unsubscribe,
                .iv-drawer,
                .iv-card, .iv-card a.iv-click-target,
                .ytp-cards-teaser-box,
                .miniplayer.ytd-miniplayer,
                .ytp-popup,
                .badge.ytd-badge-supported-renderer,
                .ytp-ce-website .ytp-ce-expanding-image, .ytp-ce-merchandise .ytp-ce-expanding-image,
                .ytp-flyout-cta .ytp-flyout-cta-body,
                #ytp-ad-image,
                .ytp-ad-preview-container,
                .ytp-ad-message-container,
                #guide-content,
                .sbsb_d,
                #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer,
                #search-icon-legacy,
                .ytp-ad-skip-button.ytp-button,
                .ytp-flyout-cta .ytp-flyout-cta-icon,
                #banner > img,
                #icon > img,
                #action,
                .ytp-cards-teaser,
                .ytp-ce-video-duration,
                .ytp-show-tiles .ytp-videowall-still,
                .ytp-videowall-still-info-content,
                .ytp-videowall-still-listlabel-mix.ytp-videowall-still-listlabel,
                .style-scope.ytd-popup-container,
                #action-companion-ad-info-button.ytd-action-companion-ad-renderer,
                .ytp-flyout-cta .ytp-flyout-cta-action-button,
                .ytp-autonav-endscreen-upnext-thumbnail,
                .ytp-autonav-endscreen-upnext-button,
                ytd-playlist-panel-video-renderer,
                ytd-guide-entry-renderer,
                ytd-menu-service-item-renderer[use-icons],
                .ytp-ad-overlay-image,
                .ytp-ad-button-icon,
                .ytp-ad-overlay-close-button,
                .ytp-ad-text-overlay,
                .ytp-ad-button-icon,
                .ytp-ad-button-icon,
                #media-container.ytd-display-ad-renderer,
                ytd-display-ad-renderer[layout=display-ad-layout-top-landscape-image] #media-badge.ytd-display-ad-renderer,
                #chips-wrapper.ytd-feed-filter-chip-bar-renderer,
                ytd-mini-guide-entry-renderer,
                ytd-video-preview,
                ytd-toggle-button-renderer,
                ytd-post-renderer[uses-compact-lockup],
                ytd-backstage-image-renderer,
                #tabs-container,
                ytd-playlist-video-renderer,
                ytd-miniplayer,
                ytd-button-renderer,
                .ytd-thumbnail-overlay-loading-preview-renderer,
                ytd-thumbnail-overlay-inline-unplayable-renderer,
                ytd-thumbnail.ytd-rich-grid-media:before,
                .skeleton-bg-color.ytd-ghost-grid-renderer,
                .captions-text,
                #container,
                [round],
                ytd-engagement-panel-section-list-renderer,
                #tooltip,
                ytd-compact-link-renderer,
                ytd-notification-renderer
                {
                    border-radius: var(--theme-radius) !important;
                }

                ytd-engagement-panel-section-list-renderer
                {
                    overflow:hidden;
                }
                
                .ytp-gradient-bottom
                {
                    border-radius: var(--theme-radius) var(--theme-radius) 0px 0px !important;
                }
                
                #masthead
                {
                    border-radius: 0px 0px var(--theme-radius) var(--theme-radius) !important;
                }

                path.ytp-large-play-button-bg[d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"]{
                    fill: black !important;
                }

                .ytp-large-play-button.ytp-button:hover > svg > path[d="M 45,24 27,14 27,34"][fill="#fff"] {
                    fill: black !important;
                }

                .ytp-large-play-button.ytp-button:hover path.ytp-large-play-button-bg{
                    filter: drop-shadow(0px 0px 6px black);
                }

                .ytp-large-play-button.ytp-button *{
                    overflow: visible;
                }
                
                .ytp-menuitem-icon path:not([fill="none"]),.ytd-thumbnail-overlay-hover-text-renderer path,.ytd-thumbnail-overlay-bottom-panel-renderer,#search-icon.ytd-searchbox ,svg path[fill="#FF0000"]${GetCodeC("IconFill")} , svg [fill="#FF0000"]${GetCodeC("IconFill")}, svg [fill="red"], svg [fill="#F00"] , button:not(.yt-share-target-renderer) path:not([fill="none"]), [role="button"] path, [role="option"]:not(.yt-third-party-share-target-section-renderer) path
                {
                    fill: var(--theme) !important;
                }

                ytd-author-comment-badge-renderer{
                    background: ` + 'ThemeFort'.GetSaveRgba() + ` !important;
                }

                #text.ytd-channel-name,
                yt-button-renderer.yt-formatted-string.yt-button-renderer,
                paper-ripple,
                a.yt-simple-endpoint.yt-formatted-string,
                .style-scope.ytd-menu-renderer.force-icon-button.style-default-active,
                .badge-style-type-live-now.ytd-badge-supported-renderer, .badge-style-type-starting-soon.ytd-badge-supported-renderer
                {   
                    border-color : var(--theme) !important;
                    color: var(--theme) !important;
                }
                
                paper-ripple,
                .ytp-swatch-color,
                a.ytp-ce-link,
                yt-icon.ytd-compact-link-renderer,
                yt-icon.ytd-toggle-theme-compact-link-renderer {
                    border-radius: var(--theme-radius) !important;
                    color: var(--theme) !important;
                }
                
                .ytp-swatch-background-color,
                .ytp-settings-button.ytp-hd-quality-badge:after,
                .ytp-chrome-controls .ytp-button[aria-pressed]:after,
                .ytp-sb-subscribe, a.ytp-sb-subscribe
                {
                    background-color: var(--theme) !important;
                }
                
                ytd-thumbnail-overlay-time-status-renderer,
                ytd-thumbnail-overlay-side-panel-renderer,
                ytd-thumbnail-overlay-toggle-button-renderer,
                .iv-branding-active .branding-context-container-inner,
                .ytp-ce-video-duration
                {
                    border-radius: var(--theme-time-radius) !important;
                    background-color: var(--hover-time-background) !important;
                }
                
                a.yt-simple-endpoint.yt-formatted-string::selection,
                span::selection,
                yt-formatted-string::selection,
                .ytp-menuitem[aria-checked=true] .ytp-menuitem-toggle-checkbox,
                .ytp-volume-slider-handle,
                .ytp-volume-slider-handle:before
                {
                    background: var(--theme) !important;
                }

                #container.ytd-searchbox input.ytd-searchbox{
                    color: var(--theme) !important;
                }
                
                #container.ytd-searchbox,.yt-ui-ellipsis,.ytp-tooltip.ytp-preview:not(.ytp-text-detail),
                #contentContainer,
                .ytp-videowall-still-info-duration
                {
                    background-color: transparent !important;
                    border-color: transparent !important;
                }
                
                ytd-playlist-sidebar-renderer,
                ytd-two-column-browse-results-renderer,
                ytd-alert-with-button-renderer,
                .caption-window.ytp-caption-window-bottom,
                .ytp-tooltip.ytp-text-detail.ytp-preview .ytp-tooltip-text
                {
                    background: transparent !important;
                }
                
                ytd-compact-playlist-renderer:hover>div>ytd-playlist-thumbnail,
                ytd-compact-video-renderer:hover>div>ytd-thumbnail,
                ytd-compact-radio-renderer:hover>div>ytd-thumbnail,
                ytd-thumbnail.ytd-rich-grid-media:hover
                {   
                    outline-color: var(--border-hover-color) !important;
                    outline-width: var(--border-width-hover) !important;
                }
                
                ytd-thumbnail.ytd-rich-grid-media:active
                {   
                    box-shadow: var(--border-minus) 0 var(--border-click-color), 0 var(--border-width) var(--border-click-color), var(--border-width) 0 var(--border-click-color), 0 var(--border-minus) var(--border-click-color) !important;
                }
                
                ytd-compact-playlist-renderer:active>div>ytd-playlist-thumbnail,
                ytd-compact-video-renderer:active>div>ytd-thumbnail,
                ytd-compact-radio-renderer:active>div>ytd-thumbnail
                {
                    box-shadow: var(--border-minus) 0 var(--border-click-color), 0 var(--border-width) var(--border-click-color), var(--border-width) 0 var(--border-click-color), 0 var(--border-minus) var(--border-click-color) !important;
                }
                
                .ytp-button:not([aria-disabled=true]):not([disabled]):not([aria-hidden=true]):hover > svg > path
                {
                    fill: ` + "HBT".GetSaveRgba() + ` !important;
                }
                
                .ytp-chrome-top,
                .ytp-chrome-bottom,
                .ytp-gradient-bottom,
                .ytp-button:not([aria-disabled=true]):not([disabled]):not([aria-hidden=true]) > svg > path,
                ytd-playlist-panel-video-renderer,
                ytd-menu-renderer
                {
                    transition: all .2s !important;
                }
                
                .ytp-autohide:not(.ytp-autohide-active) .ytp-gradient-top, .ytp-autohide:not(.ytp-autohide-active) .ytp-gradient-bottom
                {
                    display: block !important;
                }
                
                .ytp-popup.ytp-settings-menu,
                .ytp-gradient-bottom,
                .iv-drawer,
                .ytp-cards-teaser-box,
                .ytp-popup,
                [aria-live="polite"]
                {
                    background-color: var(--in-player-bg-color) !important;
                }
                
                
                .ytp-button,
                .ytp-cards-button-icon
                {
                    transition: all .2s !important;
                }

                .ytp-tooltip-text-wrapper{
                    transition: margin-block .5s;
                }

                #show-more-button
                {
                    transition: background .2s;
                }

                ytd-app{
                    transition: background 2s;
                }
                
                .ytp-tooltip:not([aria-hidden=true])
                {
                    transform: scale(1) !important;
                }
                
                .ytp-tooltip[aria-hidden=true]
                {
                    transform: scale(1.2) !important;
                }
                
                .ytp-tooltip[aria-hidden=true] > .ytp-tooltip-text-wrapper
                {
                    margin-block: -15px;
                }
                
                .ytp-tooltip:not([aria-hidden=true]) > .ytp-tooltip-text-wrapper
                {
                    margin-block: 0px;
                }
                
                .ytp-button:not(.ytp-chapter-title):not(.ytp-ad-skip-button):not(.ytp-fullerscreen-edu-button):hover,
                .ytp-replay-button:hover,
                .ytp-cards-button-icon:hover
                {
                    transform: scale(1.5) !important;
                }
                
                .ytp-progress-list
                {
                    background: ` + "Time-LineBG".GetSaveRgba() + ` !important;
                }
                
                .ytp-load-progress
                {
                    background: ` + "TimeLoaded".GetSaveRgba() + ` !important;
                }
                
                #play
                {
                    display:none !important; 
                }

                #tooltip.tp-yt-paper-tooltip
                {
                    background-color: var(--bg-color) !important;
                }
                
                #tooltip.tp-yt-paper-tooltip
                {
                    color: var(--text-color) !important;
                }
                
                ytd-compact-radio-renderer > #dismissible > ytd-thumbnail > a > yt-img-shadow > img,
                ytd-playlist-thumbnail > a > #playlist-thumbnails > ytd-playlist-video-thumbnail-renderer > yt-img-shadow > img,
                ytd-playlist-thumbnail > a > div > ytd-playlist-custom-thumbnail-renderer > yt-img-shadow > img
                {
                    transition: all .2s ;
                }

                .sbqs_c:before {
                    background: transparent !important;
                    width: 0px !important;
                }

                #search-icon.ytd-searchbox{
                    transition:all 0.4s ease;
                    display:block !important;
                    opacity:0;
                    width: 20px !important;
                    position: absolute;
                    left:0px;
                }
                 
                ytd-searchbox[has-focus] #search-icon.ytd-searchbox{
                    opacity:1;
                }
                 
                #container.ytd-searchbox{
                    transition:all 0.4s ease;
                }

                .ytp-chapter-title-prefix {
                    display: none;
                }
                
                .ytp-chapter-title-content {
                    margin-left: 10px;
                }

                .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled{
                    color: var(--yt-spec-text-primary) !important;
                    background: var(--theme) !important;
                }

                .sbsb_i{
                    background: black;
                    padding: 5px 10px;
                    border-radius: var(--theme-radius);
                    outline: solid white 1px;
                    color: white !important;
                    transition:all 0.2s;
                }
                
                .sbsb_i:hover{
                    background: white !important;
                    color: black !important;
                }

                .sbse{
                    color: var(--theme) !important;
                }
                    
                .sbpqs_a{
                    color: var(--nd-text-color) !important;
                }
                    
                .sbpqs_a:before{
                    filter: invert(1);
                }

                #guide-content{
                    background: ` + "LeftBar".GetSaveRgba() + ` !important;
                }

                ytd-action-companion-ad-renderer,
                #container,
                ytd-live-chat-frame
                {
                    border:transparent !important;
                }

                .ytp-gradient-bottom
                {
                    height: ` + localStorage["codehemu-MediaH"] + `px !important;
                    border-radius: var(--theme-radius-big) !important;
                    ` + GetCodeC("BottomG") + `
                }

                #player,
                #CODEHEMUVDOCanvas{
                    border-radius: var(--theme-radius-big) !important;
                }

                div.html5-video-player.ytp-fullscreen .ytp-gradient-bottom{
                        border-radius: var(--theme-radius-big) var(--theme-radius-big) 0px 0px !important;
                }
                
                ytd-player:has(div.html5-video-player:not(.ytp-fullscreen)){
                    transition: all 1s;
                    top: 0px !important
                }

                div.html5-video-player:not(.ytp-fullscreen) video{
                    transition: all 1s ,background 0.1s;
                    top: 0px !important
                }
              
                div.ended-mode video,
                div.unstarted-mode:not(.ytp-small-mode) video{
                    transform:scale(0.5);
                    opacity:0 !important;
                }

                div.ended-mode video,
                div.unstarted-mode:not(.ytp-small-mode) video.html5-main-video{
                    background: black;
                }
              
                div.ytp-cued-thumbnail-overlay{
                    overflow:hidden !important;
                    border-radius:10px !important;
                }
              
                div.html5-video-player:not(.ytp-fullscreen){
                    background:transparent !important;
                }
              
                .badge-style-type-simple.ytd-badge-supported-renderer,
                .badge-style-type-live-now-alternate.ytd-badge-supported-renderer{
                    width: 100%;
                    text-align: center;
                }
              
                div.html5-video-player:not(.ytp-embed):not(.playing-mode.unstarted-mode) div.ytp-cued-thumbnail-overlay{
                    display:none;
                }
              
                div.unstarted-mode .ytp-cued-thumbnail-overlay .ytp-large-play-button .ytp-large-play-button-bg,
                div.unstarted-mode .ytp-cued-thumbnail-overlay .ytp-large-play-button:hover path[d="M 45,24 27,14 27,34"]
                {
                    fill:black !important;
                }
              
                .badge-style-type-live-now-alternate{
                    padding: 2px !important;
                }
              
                yt-live-chat-message-input-renderer{
                    border-radius: 10px;
                }
                
                ytd-thumbnail-overlay-time-status-renderer{
                    display: flex !important;
                }

                html:has(div.html5-video-player.unstarted-mode:not(.ytp-small-mode)):not(:has(div.ytp-offline-slate)) #secondary,
                html:has(div.html5-video-player.unstarted-mode:not(.ytp-small-mode)):not(:has(div.ytp-offline-slate)) #below,
                html:has(div.html5-video-player.unstarted-mode:not(.ytp-small-mode)):not(:has(div.ytp-offline-slate)) div.ytp-gradient-bottom,
                html:has(div.html5-video-player.unstarted-mode:not(.ytp-small-mode)):not(:has(div.ytp-offline-slate)) div.ytp-chrome-bottom
                {
                    transition: all 0.5s !important;
                    opacity:0 !important;
                }

                html:has(div.html5-video-player.unstarted-mode:not(.ytp-small-mode)):not(:has(div.ytp-offline-slate)) #below {
                    transform: translate(0,100px);
                }

                #secondary,
                #below{
                    transition: all 1.5s;
                }

                .ytp-spinner-circle{
                    border-color: var(--theme) var(--theme) transparent !important;
                }

                div.gstl_50.sbdd_a{
                    display: block !important;
                    overflow:hidden;
                    transition: all 0.4s ease;
                }   
                
                html:has(input#search:not(:focus)) div.gstl_50.sbdd_a{
                        transform: translate(50px,0) !important;
                        pointer-events: none;
                        opacity:0;
                }

                path[stroke="rgb(255,255,255)"] {
                    stroke: var(--theme) !important;
                }

                yt-button-shape button{
                    transition: all 0.2s ease-out;
                }

                .ytp-offline-slate > button{
                    display:none;
                }

                ytd-app > #content{
                    overflow-x: hidden;
                }
                    
                ` + BGBLURCODE + `
                
                ` + BGIMGCODE + `

                ` + GetCodeC("CenterMedia") + `

                ` + GetCodeC("MediaBlur") + `
                
                ` + GetCodeC("BlurWhat") + `
                
                ` + GetCodeC("ThumbHover") + `
                
                ` + GetCodeC("BlurSub") + `
                
                ` + GetCodeC("CenterTime") + `

                ` + GetCodeC("CenterUD") + `

                ` + GetCodeC("CenterUDF") + `

                ` + GetCodeC("TimeAni") + `

                ` + GetCodeC("Scroll") + `

                ` + GetCodeC("LeftBar") + `

                ` + GetCodeC("Ptran") + `

                ` + GetCodeC("NewSub") + `

                ` + GetCodeC("SwapRow") + `

                ` + GetCodeC("ThumbAnim") + `

                ` + GetCodeC("ControlUnderVDO") + `

                ` + GetCodeC("SPSubScribe") + `
                
                ` + GetCodeC("AutohideBar") + `
                
                ` + ADDCSS + `

                `

        var thisStyle = NORMAL + Collect_Style + AfterCODEHEMU

        if (localStorage["codehemu-SwapRowT"] == "true") {
          thisStyle = thisStyle + `
                    html:has(div.html5-video-player.unstarted-mode:not(.ytp-small-mode)):not(:has(div.ytp-offline-slate)) #secondary{
                        transform: translate(-100px,0);
                    }`
        } else {
          thisStyle = thisStyle + `
                    html:has(div.html5-video-player.unstarted-mode:not(.ytp-small-mode)):not(:has(div.ytp-offline-slate)) #secondary{
                        transform: translate(100px,0);
                    }`
        }


        CODEHEMU_N_style.textContent = thisStyle
      };
    })
  }
}

function WaitAvatar() {
  return new Promise(resolve => {
    if (document.getElementById("avatar-btn")) {
      return resolve(document.getElementById("avatar-btn"));
    }

    if (document.querySelector("ytd-topbar-menu-button-renderer")) {
      return resolve(document.querySelector("ytd-topbar-menu-button-renderer"));
    }

    const observer = new MutationObserver(mutations => {
      if (document.getElementById("avatar-btn")) {
        resolve(document.getElementById("avatar-btn"));
        observer.disconnect();
      }
      if (document.querySelector("ytd-topbar-menu-button-renderer")) {
        resolve(document.querySelector("ytd-topbar-menu-button-renderer"));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

if (inIframe() == true) {
  update()
} else {
  if (document.documentElement.getAttribute("dark") == null) {
    document.addEventListener("DOMContentLoaded", async function () {
      await WaitAvatar()

      try {
        document.getElementById("avatar-btn").click()
      } catch (e) {
        document.getElementsByTagName("ytd-topbar-menu-button-renderer")[0].click()
      }

      await waitForElm("ytd-toggle-theme-compact-link-renderer")
      document.getElementsByTagName("ytd-toggle-theme-compact-link-renderer")[0].click()
      await waitForElmByID("submenu")
      await waitForElm("ytd-compact-link-renderer")
      document.getElementById("submenu").getElementsByTagName("ytd-compact-link-renderer")[2].click()
    })
  } else {
    update()
    SettoEnd()
  }
}

function RESETTUBE() {
  if (document.getElementById("CODEHEMUBG")) {
    let remem = document.getElementById("CODEHEMU").scrollTop
    document.getElementById("CODEHEMUBG").remove()
    CreateMENU()
    document.getElementById("CODEHEMU").scrollTop = remem
  }
}

//IDK----------------------------------------------------------------------------

function createList(Name, num) {
  ThisList = document.createElement("body")

  if (num != null) {
    ThisList.id = `CODEHEMUPRESET` + num
  }
  ThisList.className = "ListBox";
  ThisList.setAttribute("hover", "")
  ThisList.style = `display: flex;
    overflow: hidden;
    width: -webkit-fill-available;
    flex-direction: row;
    align-items: center;
    transition: all 0.2s;
    position: relative;`

  TellName = document.createElement("lable")
  TellName.style = `overflow-wrap: break-word;
    word-break: break-all;
    width: -webkit-fill-available;`
  TellName.insertAdjacentHTML('afterbegin', Name)
  TellName.className = `DES`

  LIST.appendChild(ThisList)
  ThisList.appendChild(TellName)

  if (Name == "(Current)") {
    CHOOSE = ThisList
    ThisList.style.setProperty("background", "#747474")
    ThisList.style.height = '40px'
  } else {
    ThisUp = document.createElement("img")
    ThisUp.src = chrome.runtime.getURL('icon/upload.svg')
    ThisUp.className = "NUp"
    ThisUp.style = `
        width: 30px;
        border-radius: 10px;
        background: white;
        padding: 5px;
        margin-inline: 10px;`
    ThisList.appendChild(ThisUp)

    var found = false
    for (var i = 0; i < ForcePre.length; i++) {
      if (Name == ForcePre[i]) {
        found = true
      }
    }
    if (found == false) {
      ThisDel = document.createElement("img")
      ThisDel.src = chrome.runtime.getURL('icon/delete.svg')
      ThisDel.className = "NDel"
      ThisDel.style = `filter: invert(1);
                width: 30px;
                border-radius: 10px;
                background: white;
                padding: 5px;`;
      ThisList.appendChild(ThisDel)
    }
  }

  var busy = false

  USEING = `(Current)`

  ThisList.onclick = function (v) {
    Tar = v.target
    if (Tar.className == "NDel") {
      let Par = Tar.parentNode,
        arr = JSON.parse(localStorage["codehemu-NUMPRESET"]),
        ThisName = "PRESET" + Par.getElementsByTagName("lable")[0].textContent
      DOwithindexed(function () {
        store.delete(ThisName)
      })
      Par.style.setProperty("height", "0px")
      Par.style.setProperty("padding", "0px")
      Par.style.setProperty("opacity", "0")
      for (let i = 0; i < arr.length; i++) {
        if ("PRESET" + arr[i] == ThisName) {
          arr.splice(i, 1);
        }
      }
      localStorage["codehemu-NUMPRESET"] = JSON.stringify(arr)
      setTimeout(() => {
        Par.remove()
      }, 200);
    } else if (Tar.className == "NUp") {
      ParName = Tar.parentNode.getElementsByTagName("lable")[0].textContent
      DOwithindexed(function () {
        var get = store.get("PRESET" + ParName)
        get.onsuccess = function (e) {
          download(e.target.result, ParName + '.NPreset')
        }
      })
    } else {
      if (Tar.className == "DES") {
        Tar = v.target.parentNode
      }
      let TarID = Tar.getElementsByTagName("lable")[0].textContent
      if ((busy == false) && (TarID != USEING)) {
        busy = true
        CHOOSE.style.setProperty("background", "")
        CHOOSE = Tar
        USEING = TarID

        if (VDOBG == true) {
          VDOBG = false
          DisableBGBlur(true)
        }

        DOwithindexed(function () {
          let get = store.get("PRESET" + TarID)
          get.onsuccess = function (e) {
            e.target.result.LoadCustomizer()
            Tar.style.setProperty("background", "#747474")
            setTimeout(() => {
              busy = false
            }, 1000);
          }
        })
      }
    }
  }
  return ThisList
};

debg = `width: 100%;
height: 100%;
z-index: 5000;
top: 0px;
position: fixed;
transition: opacity 0.2s ease 0s;`

//Preset--------------------------------------------------------------------------------------

function setCODEHEMUbg(opacity) {
  CODEHEMUbg = document.getElementById('CODEHEMUBG')
  if (CODEHEMUbg) {
    CODEHEMUbg.style.opacity = opacity
  }
}

function PRESET() {

  var hover = false

  var BG = document.createElement("body")
  BG.className = "CODEHEMUBG"
  BG.style = debg + `opacity:0;`

  setTimeout(() => {
    BG.style.setProperty('opacity', 1)
  }, 1);

  document.body.appendChild(BG)

  leftbar = document.createElement('div')
  BG.append(leftbar)

  leftbar.style = `background: rgb(90 90 90 / 51%);
    width: 15%;
    margin-left:-15%;
    height: 100%;
    border-radius: 0px 20px 20px 0px;
    border-right: 1px solid white;
    font-size: 2vw;
    color: #ffffff82;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition:all 0.5s`;

  Codehemeuleftbarset = "Hover Here<br>to hide menu<br><br>Click anywhere<br>to close menu<br><br>Drop file here<br>to import preset";
  leftbar.insertAdjacentHTML('afterbegin', Codehemeuleftbarset);

  Main = document.createElement('body');
  BG.appendChild(Main)
  Main.className = "CODEHEMUMAIN"
  Main.style = `position: absolute;
        width:70%;
        height:85%;
        top: 50%;
        left: 60%;
        transform: translate(-50%, -50%);
        background: rgb(20,20,20);
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        transition:all 0.2s ease;
        border:solid white 1px;
        opacity: 0;
        `
  setTimeout(() => {
    leftbar.style.marginLeft = '0px'
    Main.style.left = '55%'
    Main.style.opacity = ''
  }, 0);

  function ShowPre() {
    Main.style.opacity = "1"
    Main.style.left = "55%"
    BG.style = debg
    setCODEHEMUbg('')
    leftbar.style.opacity = ''
  }

  function HidePre() {
    Main.style.opacity = "0"
    Main.style.left = "60%"
    BG.style = debg + `backdrop-filter: blur(0px) !important;
                    background:transparent !important;`
    setCODEHEMUbg('0')
    leftbar.style.opacity = '0'
  }

  BG.style.setProperty("backdrop-filter", "blur(0px) !important")




  leftbar.addEventListener('mouseover', function () {
    if (Clicked == false) {
      HidePre()
    }
  })

  leftbar.addEventListener('mouseout', function () {
    if (Clicked == false) {
      ShowPre()
    }
  })




  Main.addEventListener('mouseover', function () {
    if (Clicked == false) {
      hover = true
    }
  })

  Main.addEventListener('mouseout', function () {
    if (Clicked == false) {
      hover = false
    }
  })




  leftbar.addEventListener('dragover', function (e) {
    e.stopPropagation()
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
  })




  leftbar.addEventListener('drop', async function (e) {
    e.stopPropagation();
    e.preventDefault();
    var files = e.dataTransfer.files; // Array of all files

    F_NameArr = []
    F_ReaderArr = []

    for (var i = 0, file; file = files[i]; i++) {
      var reader = new FileReader();
      var FileName = file.name
      if ('.NPreset' == FileName.substring(FileName.length - 8, FileName.length)) {
        F_NameArr.push(FileName)
        reader.onload = function (e) {
          F_ReaderArr.push(e.target.result)
        };
        reader.readAsText(file);
      }
    }

    function SetFile() {
      console.log(F_NameArr.length == F_ReaderArr.length)
      if (F_NameArr.length == F_ReaderArr.length) {

        console.log(F_NameArr)
        console.log(F_ReaderArr)

        DOwithindexed(async function () {
          for (var i = 0; i < F_NameArr.length; i++) {

            var filename = F_NameArr[i],
              Name = filename.substring(0, filename.length - 8),
              arr = JSON.parse(localStorage["codehemu-NUMPRESET"]),
              f = 0


            for (let i = 0; i < arr.length; i++) {
              if (arr[i] == Name) {
                f++
              }
            }

            var Par

            if (f == 0) {
              Par = createList(Name)
              Par.style.height = "0px"
              Par.style.padding = "0px"
              Par.style.opacity = "0"
            }

            await store.put(F_ReaderArr[i], "PRESET" + Name)

            if (f == 0) {
              localStorage["codehemu-NUMPRESET"] = JSON.stringify([...arr, Name])
            }

            if (Par) {
              Par.style.height = null
              Par.style.padding = null
              Par.style.opacity = null
            }
          }
        })
      } else {
        setTimeout(() => {
          SetFile()
        }, 100);
      }
    }

    SetFile()
  });




  sndmain = document.createElement('div')

  sndmain.style = `width:100%;
    position: relative;
    height: 140px;`

  OK = document.createElement("button")
  OK.innerText = "OK"
  OK.className = "Reset"

  OK.style = `position: absolute;
        left:20px;
        bottom:-3px;
        width: 45%;
        height:35px;
        background: #383838;
        color:white;
        border-radius: 10px;
        transition: all .2s ;
        margin-block: 15px;
        border:transparent;`

  OK.onclick = function () {
    if (Clicked == false) {
      Clicked = true
      HidePre()
      leftbar.style.marginLeft = '-15%'
      setCODEHEMUbg('')
      BG.style.setProperty('opacity', 0)
      setTimeout(() => {
        DOwithindexed(function () {
          store.delete("PRESET(Current)")
        })
        BG.remove()
      }, 500);
      setTimeout(() => {
        BG.remove()
      }, 500);
    }
  }

  Cancel = document.createElement("button")
  Cancel.innerText = "Cancel"
  Cancel.className = "Reset"

  Cancel.style = `position: absolute;
        right:20px;
        bottom:-3px;
        width: 45%;
        height:35px;
        background: #383838;
        color:white;
        border-radius: 10px;
        transition: all .2s ;
        margin-block: 15px;
        border:transparent;`


  function CancelCode() {
    if (Clicked == false) {
      Clicked = true
      HidePre()
      leftbar.style.marginLeft = '-15%'
      setCODEHEMUbg('')
      BG.style.setProperty('opacity', 0)
      if (USEING != `(Current)`) {
        DOwithindexed(function () {
          let get = store.get("PRESET(Current)")
          get.onsuccess = function (e) {
            e.target.result.LoadCustomizer()
            store.delete("PRESET(Current)")
          }
          store.delete("PRESET(Current)")
        })
      }
      setTimeout(() => {
        DOwithindexed(function () {
          store.delete("PRESET(Current)")
        })
        BG.remove()
      }, 500);
    }
  }

  Cancel.onclick = function () {
    CancelCode()
  }

  THISDES = createDes("Select preset", Main).style = `font-size: 25px; padding:10px; font-width:700;`

  THISDES.style = 'font-size:20px'

  Clicked = false

  BG.onclick = function () {
    if (hover == false) {
      CancelCode()
    }
  }

  LIST = document.createElement("body")
  LIST.style = `width: 90%;
    height: -webkit-fill-available;
    top: 50%;
    left: 50%;
    border-radius: 10px;
    border-bottom: solid white 1px;`

  LIST.id = `MAINPRESET`

  Main.appendChild(LIST)
  Main.append(sndmain)


  DOwithindexed(function () {
    let get = store.get("BGIMG")
    get.onsuccess = function (e) {
      let arr = GenCustomizer()
      arr["BGIMG"] = e.target.result
      store.put(JSON.stringify(arr), "PRESET(Current)")
    }
  })

  let ALLPRE = JSON.parse(localStorage["codehemu-NUMPRESET"]),
    num


  for (num = 0; num < ALLPRE.length; num++) {
    createList(ALLPRE[num])
  }

  BoxSave = document.createElement("div");
  codehemu_BoxSave = `<input type="text" id="TextPreset" placeholder="Enter preset name.">
    <button id="OKOver" disabled>Yes!</button>
    <button id="SavePreset">Save</button>`;
  BoxSave.insertAdjacentHTML('afterbegin', codehemu_BoxSave);

  BoxSave.style = `display: flex;
    position: absolute;
    bottom: 60px;
    width: 95%;
    margin-left: 2.5%;
    height: 35px;
    flex-direction: row;`

  sndmain.appendChild(BoxSave)

  let TextPre = document.getElementById("TextPreset")
  let OKOver = document.getElementById("OKOver")
  let SavePRe = document.getElementById("SavePreset")

  TextPre.style = `width: -webkit-fill-available;
    background: rgb(56, 56, 56);
    border-radius: 10px;
    border: transparent;
    color: white;
    text-align: center;
    transition: all 0.2s ease 0s;`

  SavePRe.className = "Reset"
  SavePRe.style = `background: rgb(56, 56, 56);
    color: white;
    border-radius: 10px;
    border: transparent;
    height: 100%;
    width: 100px;
    margin-left: 10px;
    transition: all 0.2s ease 0s;`

  OKOver.className = "Reset"
  OKOver.style = `background: rgb(56, 56, 56);
    color: white;
    border-radius: 10px;
    border: transparent;
    width: 0px;
    height: 100%;
    opacity: 0;
    margin-left: 0px;
    padding:0px;
    transition: all 0.2s ease 0s;`

  var OverName

  OKOver.onclick = function () {
    DOwithindexed(function () {
      let get = store.get("BGIMG")
      get.onsuccess = function (e) {
        let arr = GenCustomizer()
        arr["BGIMG"] = e.target.result
        store.put(JSON.stringify(arr), "PRESET" + OverName)
        hideOkOver()
      }
    })
  }

  function hideOkOver() {
    SavePRe.innerText = "Save"
    OKOver.style.opacity = "0"
    OKOver.style.width = "0px"
    OKOver.style.marginLeft = "0px"
    OKOver.style.padding = "0px"
    OKOver.setAttribute("disabled", "")
    CanSave = true
    TextPre.value = OverName
  }

  SavePRe.onclick = function () {
    if (CanSave == "Over") {
      hideOkOver()
    } else {
      if (CanSave == true) {
        if (TextPre.value != null && TextPre.value != "") {
          CanSave = false
          let f = 0,
            arr = JSON.parse(localStorage["codehemu-NUMPRESET"])

          OverName = TextPre.value


          for (let i = 0; i < arr.length; i++) {
            if (arr[i] == OverName) {
              f++
            }
          }

          if (f > 0) {
            CanSave = "Over"
            SavePRe.innerText = "Cancel"
            TextPre.value = "This name has already exists , overwrite?"
            OKOver.removeAttribute("disabled")
            OKOver.style.opacity = "1"
            OKOver.style.width = "70px"
            OKOver.style.marginLeft = "10px"
            OKOver.style.paddingInline = "5px"
          } else {
            let Par = createList(OverName)
            Par.style.height = "0px"
            Par.style.padding = "0px"
            Par.style.opacity = "0"

            DOwithindexed(function () {
              let get = store.get("BGIMG")
              get.onsuccess = function (e) {
                let arr2 = GenCustomizer(),
                  Name = OverName
                arr2["BGIMG"] = e.target.result
                store.put(JSON.stringify(arr2), "PRESET" + Name)
                localStorage["codehemu-NUMPRESET"] = JSON.stringify([...arr, Name])
                Par.style.height = null
                Par.style.padding = null
                Par.style.opacity = null
                CanSave = true
              }
            })

            setTimeout(() => {
              Par.scrollIntoView()
            }, 100);
          }
        }
      }
    }
  }

  sndmain.appendChild(OK)
  sndmain.appendChild(Cancel)
}

//Function----------------------------------------------------------------------------

var THISPar = "CODEHEMU",
  LeftCount,
  LeftList

function createMainframe() {
  var List = document.createElement("p");
  List.className = "MainBox";
  List.id = THISPar

  var Head = document.createElement('label');
  Head.className = "DES"
  Head.insertAdjacentHTML('afterbegin', THISPar);
  Head.style = `width: -webkit-fill-available;
    font-size: 18px;
    padding: 10px;
    margin-inline: -10px;
    color: black !important;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,0,0,0) 100%);
    border-radius: 10px;`

  List.appendChild(Head)

  LeftList = document.createElement('label');
  LeftList.className = "HoverList"
  LeftList.insertAdjacentHTML('afterbegin', THISPar);

  LeftList.style = `
    position:relative;
    width: -webkit-fill-available;
    font-size: 16px;
    padding: 10px;
    color: white;`
  LeftCount++
  document.getElementById("CODEHEMUBG").style.height = (LeftCount * 41) + "px"

  LeftList.onclick = function () {
    List.scrollIntoView({
      behavior: 'smooth'
    });
  }

  document.getElementById("CODEHEMU").appendChild(List)
  document.getElementById("CODEHEMULIST").appendChild(LeftList)

  return List
};

function CreateNew(E) {
  var New = document.createElement("p")
  E.append(New)
}

function createframe(inner, NEW) {
  var List = document.createElement("p");
  List.className = "SndBox";
  List.insertAdjacentHTML('afterbegin', inner);

  var ParFrame = document.getElementById(THISPar)

  if (ParFrame == null) {
    createMainframe()
  }

  document.getElementById(THISPar).appendChild(List)

  if (NEW) {
    CreateNew(List)
    if (LeftList.getElementsByClassName("New").length == 0) {
      CreateNew(LeftList)
    }
  }

  return List
};

function createDes(Des, Box) {
  var Descrip = document.createElement('label');
  Descrip.className = "DES";
  Descrip.insertAdjacentHTML('afterbegin', Des);
  Box.appendChild(Descrip);

  return Descrip
};

function createCheck(id, Des, NEW) {
  var Box = createframe('<input type="checkbox" id=' + id + ' class="CheckBox" >', NEW);
  createDes(Des, Box);

  ThisCheck = document.getElementById(id);

  ThisCheck.checked = JSON.parse(localStorage["codehemu-" + id + "T"])

  ThisCheck.addEventListener('input', function (WHAT) {
    var Tar = WHAT.target
    var Tarid = Tar.id

    localStorage["codehemu-" + Tarid + "T"] = Tar.checked

    if (Tarid == "Realtime") {
      RESETTUBE()
    }

    update()
  });
};


function createTextBox(id, Des, NEW) {
  var Box = createframe('<input type="number" id=' + id + ' class="TextBox" >', NEW);
  createDes(Des, Box);

  ThisText = document.getElementById(id);

  ThisText.value = localStorage["codehemu-" + id]

  ThisText.addEventListener(MODE, function (WHAT) {
    var Tar = WHAT.target
    localStorage["codehemu-" + Tar.id] = Tar.value
    update()
  });

  return Box
};


function PickerAndSlide(thiscolor) {
  localStorage["codehemu-" + thiscolor.id] = thiscolor.value
}

function createColor(id, Des, NEW) {
  var Box = createframe('<input type="color" id=' + id + 'C class="ColorPick" > <p> <label class="DES" >Opacity : </label> <input type="range" id=' + id + 'O class="slidebar" min="0" max="100" > </p>', NEW);

  Box.className = "DoY";

  var Box2 = document.createElement('p');
  Box2.className = "SndBox"

  document.getElementById(THISPar).appendChild(Box2)

  Box2.appendChild(Box)

  var THISDES = createDes(Des, Box2);

  THISDES.style = "padding:10px;"

  var thiscolor = document.getElementById(id + 'C');
  var thisopa = document.getElementById(id + 'O');


  thiscolor.value = localStorage["codehemu-" + id + 'C']
  thisopa.value = localStorage["codehemu-" + id + 'O']

  thiscolor.addEventListener(MODE, function (WHAT) {
    PickerAndSlide(WHAT.target)
    update();
  });

  thisopa.addEventListener(MODE, function (WHAT) {
    PickerAndSlide(WHAT.target)
    update();
  });

  return document.getElementById
};



function createselect(id, option, Des) {
  var Box = createframe('<select id=' + id + ' class="select" > ' + option + ' </select>');
  createDes(Des, Box);

  var thisSelect = document.getElementById(id);
  thisSelect.value = localStorage["codehemu-" + id + 'T']

  thisSelect.addEventListener("change", function (WHAT) {
    localStorage["codehemu-" + WHAT.target.id + 'T'] = WHAT.target.value
    update();
  });
};

String.prototype.GetSaveRgba = function () {
  var HEX = localStorage["codehemu-" + this + "C"].replace('#', '')
  var aRgbHex = HEX.match(/.{1,2}/g);
  var aRgb = [
    parseInt(aRgbHex[0], 16) + ',' + parseInt(aRgbHex[1], 16) + ',' + parseInt(aRgbHex[2], 16)
  ]

  return `rgba(` + aRgb + `,` + (localStorage["codehemu-" + this + "O"] / 100) + `)`
}

function RenderPreImg(GettedImg) {
  console.log(GettedImg)

  var Preimg = document.getElementById("BGIMG")

  if (GettedImg == "") {
    Preimg.style.opacity = 0
  } else {
    Preimg.style.opacity = 1
    Preimg.style.aspectRatio = `${PreloadImg.width}/${PreloadImg.height}`

    requestAnimationFrame(function () {
      var imgcw = Preimg.clientWidth
      var imgch = Preimg.clientHeight

      Preimg.width = imgcw
      Preimg.height = imgch

      Preimg.getContext('2d').drawImage(PreloadImg, 0, 0, imgcw, imgch)

      document.getElementById("Imgid").href = GettedImg
      document.getElementById("Imgid").innerText = "Image link"
    })
  }
}

function applyIcon() {
  DOwithindexed(function () {
    let get = store.get("IconURL")
    get.onsuccess = function (e) {
      document.getElementById("IconUrlSHOW").style.setProperty("background-image", 'url("' + e.target.result + '")')
      document.getElementById("Iconid").href = e.target.result
      document.getElementById("Iconid").insertAdjacentHTML('afterbegin', e.target.result);
    };
  })
}


function ShowTexForIMG(Text) {
  if (document.getElementById("STATUS")) {
    document.getElementById("STATUS").innerText = Text;
  }

}

function ShowTexForICON(Text) {
  if (document.getElementById("IconSTATUS")) {
    document.getElementById("IconSTATUS").innerText = Text;
  }
}

function IMGXY(Tar, S) {
  if (S == "S") {
    document.getElementById(Tar.id + "BOX").value = Tar.value
    update()
  } else {
    document.getElementById(Tar.id.substring(0, 4)).value = Tar.value
  }
  localStorage["codehemu-" + Tar.id.substring(0, 4)] = Tar.value
  update()
}

function CreateXY(XorY) {
  PoOrSize = ["position ", ""]
  Max = "100"
  if (XorY == "S") {
    PoOrSize = ["", "ize"]
    Max = "300"
  }
  createframe(`<lable class="DES">Image ` + PoOrSize[0] + XorY + PoOrSize[1] + ` : </lable>
    <input id="IMG` + XorY + `" type="range" min=0 max=` + Max + `>`).appendChild(createTextBox("IMG" + XorY + "BOX", "%"))

  ThisSlide = document.getElementById("IMG" + XorY)
  ThisText = document.getElementById("IMG" + XorY + "BOX")

  ThisSlide.value = localStorage["codehemu-IMG" + XorY]
  ThisText.value = localStorage["codehemu-IMG" + XorY]

  if (localStorage["codehemu-RealtimeT"] == "true") {
    ThisSlide.addEventListener('input', function (WHAT) {
      IMGXY(WHAT.target, "S")
    })
    ThisText.addEventListener('input', function (WHAT) {
      IMGXY(WHAT.target)
    })
  } else {
    ThisSlide.addEventListener('change', function (WHAT) {
      IMGXY(WHAT.target, "S")
    })
    ThisText.addEventListener('change', function (WHAT) {
      IMGXY(WHAT.target)
    })
  }
}

String.prototype.LoadCustomizer = function () {
  let array = JSON.parse(this),
    BG

  if (Object.prototype.toString.call(array) == '[object Object]') {
    Object.entries(array).forEach(entry => {
      const [key, value] = entry;
      if (key == "BGIMG") {
        BG = value
      } else {
        localStorage["codehemu-" + key] = value
      }
    })
  } else {
    for (let i = 0; i < array.length; i = i + 2) {
      if (array[i] == "BGIMG") {
        BG = array[i + 1]
      } else {
        localStorage["codehemu-" + array[i]] = array[i + 1]
      }
    }
  }

  DOwithindexed(function () {
    store.put(BG, "BGIMG")
    update()
    RESETTUBE()
  })
}

function GenCustomizer() {
  arrdata = {}
  for (z in localStorage) {
    if (z.substring(0, 3) == "codehemu-" && z != "codehemu-NUMPRESET" && z != 'nt-SHOWPRESET' && z != 'nt-EnableButtonT' && z != 'nt-RealtimeT' && z != 'nt-ErrorCollectT') {
      arrdata[z.substring(3, z.length)] = localStorage[z]
    }
  }
  console.log(arrdata)
  return arrdata
}

let v

function setV() {
  v = document.getElementsByClassName('video-stream html5-main-video')[0]
}

function FindVideo() {
  try {
    v.tagName
    if (v.tagName != "VIDEO") {
      console.log("FindVDOE")
      setV()
    }
  } catch (e) {
    console.log("FindVDOE")
    setV()
  }
  return v
}

function CreateMENU() {

  LeftCount = 0

  let DeBu = `width: -webkit-fill-available;
    padding: 10px;
    background: rgb(94 94 94 / 76%);
    color: white;
    border-radius: 10px;
    transition: all 0.2s ease 0s;
    margin-inline: 10px;
    margin-block: 10px;
    border: transparent;
    border-bottom: 1px solid #ffffff6b;
    box-shadow: 0px 0px 3px;`

  if (localStorage["codehemu-RealtimeT"] == 'true') {
    MODE = 'input'
  } else {
    MODE = 'change'
  }

  let BG = document.createElement("div")
  BG.id = "CODEHEMUBG";
  BG.className = "CODEHEMU"
  BG.style = "width: 750px; height: 0px; position: fixed; top:56px; right: 0px; transition: all 0.5s; z-index: 2020; display: flex; flex-direction: row;";
  document.body.appendChild(BG)

  let LIST = document.createElement("div")
  LIST.id = "CODEHEMULIST"
  LIST.className = "CODEHEMU"
  LIST.style = "width: 210px; height: 100%; display: flex; flex-direction: column;";
  BG.appendChild(LIST)

  let SetBg = document.createElement("body")
  SetBg.id = "CODEHEMU";
  SetBg.className = "CODEHEMU"
  SetBg.style = "width: 550px; height: 100%;";
  BG.appendChild(SetBg)

  var Reset = document.createElement('button')
  Reset.innerText = "Reset Extention (fix bugs)"
  Reset.className = "Reset"
  Reset.style = DeBu
  Reset.onclick = function () {
    localStorage.clear()
    DOwithindexed(function () {
      store.clear()
      SetNull()
      update()
      RESETTUBE()
    })
    location.reload()
  }
  SetBg.appendChild(Reset)

  THISPar = "⚙️ Extention's settings"

  Frame = createMainframe()

  createframe(`<label class="DES">Version : ` + Ver + `</label>`)

  var Preset = document.createElement('button')
  Preset.innerText = "Select Preset"
  Preset.className = "Reset"
  Preset.style = DeBu + `width: 100% !important;
    margin-inline: 0px !important;
    margin-block-start: 20px !important;`
  Preset.onclick = function () {
    PRESET()
  }
  Frame.appendChild(Preset)

  createCheck("EnableButton", "Enable");

  createCheck("Realtime", "Realtime Changing (lag when changing!)");

  createCheck("ErrorCollect", "Error Detector");

  var Chlog = document.createElement('button')
  Chlog.innerText = "Changes log"
  Chlog.className = "Reset"
  Chlog.style = DeBu
  Chlog.onclick = function () {
    window.open(
      'https://github.com/hemucode/CustomDesignForYoutube',
      '_blank'
    )
  }

  SetBg.appendChild(Chlog)

  var Rebug = document.createElement('button')
  Rebug.innerText = "♻Report bugs/Issue♻"
  Rebug.className = "Reset"
  Rebug.style = DeBu + `background: linear-gradient(45deg, red, #0030ff);`
  Rebug.onclick = function () {
    window.open(
      'https://www.downloadhub.cloud/p/contact-us.html',
      '_blank'
    )
  }

  SetBg.appendChild(Rebug)

  THISPar = "⭐ Review"

  CODEHEMUDASS = createframe(`<label class="DES" style="text-align: center;font-family: monospace;">Did you like this Extension? Press Review to make it easier for others to see<a class="like_review" href="https://chrome.google.com/webstore/detail/${chrome.runtime.id}" target="_blank">🤍 Like</a></label>`)

  document.getElementById(THISPar).getElementsByTagName("label")[0].style = `
    -webkit-text-stroke: black 1px;
    text-shadow: 0px 0px 3px white;;
    width: -webkit-fill-available;
    font-size: 18px;
    padding: 10px;
    margin-inline: -10px;
    border-radius: 10px;
    color: black;
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    animation: glowing 20s linear infinite;
    background-size: 400%;`;

  CODEHEMUDASS.style = "display: flex;flex-direction: column;"



  //----------------------------------------------------------------------------------------------

  THISPar = "🎉 Join my Work 🎉"

  CODEHEMUDAS = createframe(`
    <p style="display: flex; align-items: center; padding:10px; width: 100%;">
    <img src="${image1}" class="IMGFormat">
    <a id="HOVERLINK" href="https://www.downloadhub.cloud/" target="_blank" class="DES" >More Extensions, You can visit My Website</a>
    </p>

    <p style="display: flex; align-items: center; padding:10px; width: 100%;"><img src="${image2}" class="IMGFormat"><a id="HOVERLINK" href="https://www.youtube.com/c/HemantaGayen?sub_confirmation=1" target="_blank" class="DES" >Subscribe to YouTube channel</a></p> 

    <p style="display: flex; align-items: center; padding:10px; width: 100%;"><img src="${image3}" class="IMGFormat"><a id="HOVERLINK" href="https://www.codehemu.com/" target="_blank" class="DES" >Interesting HTML content website</a></p>`)

  CODEHEMUDAS.style = "display: flex;flex-direction: column;"

  //-------------------------------------------------------------------------------

  THISPar = "🛑 Advertisement"

  createCheck("AdsSkip", "Video Ads Skip")

  createCheck("AdsDisplay", "Advertisement display & visibility Hide")

  //-------------------------------------------------------------------------------

  THISPar = "✨ Enhancement"

  createCheck("Scroll", "Auto transparent top bar");

  createframe(`<label class="DES">Background Video</label>`)

  createCheck("VDOBG", "Background Video<br>(NOT RECOMMEND FOR LOW END PC!)");

  createTextBox("CanvasQua", "% (Background VDO) Quality")
  createTextBox("NVDOB", `(Background VDO) Blur amount`)
  createTextBox("NVDOC", `(Background VDO) Contrast`)
  createTextBox("NVDOBGT", `(Background VDO) Brightness`)
  createTextBox("NVDOT", `(Background VDO) Size`)

  createframe(`<label class="DES">New Subtitles/Captions</label>`)

  createCheck("NewSub", `New Subtitles/Captions`)

  createColor("Subtitle", "Subtitles/Captions color")
  createColor("CapBG", "Subtitles/Captions background color")

  createTextBox("subWidth", `(Text) Width`)
  createTextBox("subSpace", `(Text) Space by letters`)

  createColor("subShaColor", `(Shadow) Color`)
  createTextBox("subShaBlur", `(Shadow) Blur amount`)

  createframe(`<label class="DES">Video controls panel</label>`, )

  createCheck("ControlUnderVDO", `Move to under of video`)
  createTextBox("MediaSpace", `Under video distance`)
  createCheck("AutohideBar", `Autohide (If you enabled Under VDO)`, true)
  createCheck("CenterMedia", "Move to center")
  createCheck("BottomG", "remove background gradient")
  createTextBox("MediaH", "Background height")

  createframe(`<label class="DES">Pictue In Pictue (For stable pls use Opera browser)</label>`)

  createCheck("AutoPIP", "Auto Pictue In Pictue mode<br>(Pls click anywhere In page after you back to page)<br>(Security problem) (I do my best T_T)")
  createCheck("AutoEXPIP", "Auto exit Pictue In Pictue mode")


  //-------------------------------------------------------------------------------

  THISPar = "📜 Import / Export Style"

  imexstyle = `width: 100%;
    padding: 10px;
    margin-block: 5px;
    right: 0px;
    top: 560px;
    background: rgb(56 56 56);
    color: white;
    border-radius: 10px;
    transition: all 0.5s ease 0s;
    border: transparent;`

  LocatePar = createMainframe()


  createframe(`<textarea id="Export" style="background: rgb(30, 30, 30); color: white; width: 100%; resize: vertical; height: 400px; font-size: 18px;" placeholder="Paste Customizer Code here."></textarea>`)

  var ExportTEXT = document.getElementById("Export")


  var Import = document.createElement('button')
  Import.innerText = "Import Customizer Code"
  Import.className = "Reset"
  Import.style = imexstyle

  LocatePar.appendChild(Import)

  var Export = document.createElement('button')
  Export.innerText = "Export Customizer Code"
  Export.className = "Reset"
  Export.style = imexstyle

  LocatePar.appendChild(Export)

  var Export2 = document.createElement('button')
  Export2.innerText = "Export Style as CSS"
  Export2.className = "Reset"
  Export2.style = imexstyle

  LocatePar.appendChild(Export2)


  Import.onclick = function () {
    let save = ExportTEXT.value
    ExportTEXT.value = "Please wait...(If it's take too long it might eror!)"
    save.LoadCustomizer()
    ExportTEXT.value = "Successful."
  }

  Export.onclick = function () {
    ExportTEXT.value = "Please wait..."
    DOwithindexed(function () {
      let get = store.get("BGIMG")
      get.onsuccess = function (e) {
        let arr = GenCustomizer()
        if (e.target.result == null) {
          arr["BGIMG"] = ""
        } else {
          arr["BGIMG"] = e.target.result
        }
        gentext = JSON.stringify(arr).replace(/",/g, '",\n')
        gentext = gentext.substring(0, 1) + '\n' + gentext.substring(1)
        gentextL = gentext.length
        gentext = gentext.substring(0, gentextL - 1) + '\n' + gentext.substring(gentextL - 1)
        ExportTEXT.value = gentext
      }
    })
  }

  Export2.onclick = function () {
    ExportTEXT.value = "Please wait..."
    ExportTEXT.value = Collect_Style
  }

  //-------------------------------------------------------------------------------

  THISPar = "📝 Custom CSS"

  createCheck("EnaCUSCSS", "Enable Custom CSS")

  createframe(`<textarea id="Custom_CSS" placeholder="Paste CSS here." style="background: rgb(30, 30, 30); color: white; width: 100%; resize: vertical; font-size: 18px; height: 400px;"></textarea>`)

  CusText = document.getElementById("Custom_CSS")

  CusText.value = localStorage["codehemu-CUSTOM"]

  CusText.addEventListener('change', function () {
    localStorage["codehemu-CUSTOM"] = CusText.value
    update()
  })


  //-------------------------------------------------------------------------------

  THISPar = "⏫ Additional CSS"

  createCheck("EnaADDCSS", "Enable Additional CSS")

  createframe(`<textarea id="Additional_CSS" placeholder="Paste CSS here." style="background: rgb(30, 30, 30); color: white; width: 100%; resize: vertical; font-size: 18px; height: 400px;"></textarea>`)

  ADDTEXT = document.getElementById("Additional_CSS")

  ADDTEXT.value = localStorage["codehemu-ADDCUSTOM"]

  ADDTEXT.addEventListener('change', function () {
    localStorage["codehemu-ADDCUSTOM"] = ADDTEXT.value
    update()
  })


  //EDGE-------------------------------------------------------------------------------

  THISPar = "⏹️ Round Edges"

  createTextBox("Edge", "Round edges amount")

  createTextBox("TimeEdge", "(UI in Thumbnail) Round edges amount")

  createTextBox("PlayerEdge", "Round video player edges amount")

  //theme-------------------------------------------------------------------------------

  THISPar = "🌈 Color/Theme"

  createColor("Theme", "1 Theme color")

  createCheck("IconFill", `Logo theme sync`)

  createColor("ThemeThr", "2 theme color")

  createColor("ThemeFort", "3 theme color")

  createColor("ThemeSnd", "Topbar & Search list color")

  createColor("ThemeChips", "Snd Topbar color")

  createColor("LeftBar", "Sidebar color")

  createColor("Time-LineBG", "Time-line background color")

  createColor("TimeLoaded", "Time-line loaded color")

  createColor("Text", "Main text color")

  createColor("NdText", "Second text color")

  createColor("VDOTEXT", "Video controls panel text color")

  createColor("TIMETEXT", "Thumbnails time text color")

  createColor("MediaBG", "Video controls panel background color")

  createColor("TimeBG", "Video preview time background color")

  createColor("EndBG", "End of video chanel hover background color")

  createCheck("SPSubScribe", "Separate Subscribe button color.")

  createColor("SPSubScribeBG", "(Subscribe button) Background color")

  createColor("SPSubScribeColor", "(Subscribe button) Text color")


  //Outline-------------------------------------------------------------------------------

  THISPar = "🔳 Borders / Shadows"

  createselect("OutOrSha",
    `<option value="Out">Borders</option>
    <option value="Sha">Shadows</option>
    <option value="None">None</option>`,
    "Borders or Shadows")

  createTextBox("Border", "Borders/Shadows width")

  createTextBox("PlayerBorder", "(Video controls panel) Borders/Shadows width")

  createColor("OutSha", "Borders/Shadows color")

  createCheck("TopOut", "Enable top_bar Borders/Shadows");

  createCheck("TimeOut", "(Clip cover) enable time Borders/Shadows");

  createCheck("PlayerOut", "(Video controls panel) enable Borders/Shadows");

  createCheck("CapOut", "(Subtitles/Captions) enable Borders/Shadows");

  createCheck("SubOut", "(Subscribe button) enable Borders/Shadows");


  THISPar = "Text"

  THISPar = "🎴 Background"

  createColor("BG", " Change background/tint color")

  createTextBox("BlurBGAM", "Background blur amount (0 = None)")

  createCheck("API", "Use my image library(+300 Picture)");

  var ChooseBG = createframe(`<lable class="DES">Background Image (Recommend to use URL)</lable>
    <p><input id="ChooseBG" type="file" accept="image/*" > </p>
    <p><label class="DES" style="display: flex; text-align: center; margin-block: 15px; flex-direction: column;">If you enable "Use my image library" <br/> Option on your computer, your YouTube background<br/> will automatically change with selected images. </label> </p>
    <p><label class="DES" style="display: flex; text-align: center; margin-bottom: 30px;"></label> </p><p><label class="DES">Enter URL :</label><input id="IMGFORBG" class="TextBox" type="text" style="display: flex;"></p>
    <p><lable class="DES" style="display: flex; text-align: center;" id="STATUS"></label></p>`)

  ChooseBG.style = `display: flex; flex-direction: column;`

  var IMGURL = document.getElementById("IMGFORBG")
  IMGURL.style = `width:200px;  margin-bottom: 10px;`

  IMGURL.addEventListener('change', function () {
    ShowTexForIMG("Please wait...")
    DOwithindexed(function () {
      store.put(IMGURL.value, "BGIMG")
      update()
      ShowTexForIMG("Successful.</br>(If an image didn't show up.Then the URL can't access.)")
      IMGURL.value = ``
    })
  })

  var Par = document.createElement('p')
  Par.style = "margin-block: 10px; width:100%;"
  var ThisIMG = document.createElement('canvas')
  ThisIMG.id = "BGIMG"
  ThisIMG.style = `width:100%;`

  ChooseBG.appendChild(Par)
  Par.appendChild(ThisIMG)

  var input = document.getElementById('ChooseBG');
  input.style = "margin-block: 10px; padding:10px; color:white; border-radius:10px; background:rgb(37, 37, 37);"
  input.setAttribute('CODEHEMU', '')
  input.onchange = function (evt) {
    ShowTexForIMG("Please wait...")
    var file = evt.target.files[0]

    const reader = new FileReader();

    reader.addEventListener('loadend', () => {
      DOwithindexed(function () {
        store.put(reader.result, "BGIMG")
        update()
        ShowTexForIMG("Successful.</br>(If an image not show yet please wait.)")
      })
    });
    try {
      reader.readAsDataURL(file);
    } catch (e) {

    }

  }

  let imgid = document.createElement('a')
  imgid.className = "DES"
  imgid.style = `white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 400px;`
  imgid.id = "Imgid"
  imgid.target = "_blank"

  ChooseBG.appendChild(imgid)


  var RemoveBu = document.createElement('button')
  RemoveBu.innerText = "Remove"
  RemoveBu.className = "Reset"
  RemoveBu.style = `margin-block-start: 10px;
    color: #ffffff;
    border-radius: 10px;
    transition: all 0.2s;
    background: #242424;
    border: transparent;
    padding: 5px;
    padding-inline: 10px;`
  RemoveBu.onclick = function () {
    DOwithindexed(function () {
      store.put("", "BGIMG")
      update()
    })
  }
  ChooseBG.appendChild(RemoveBu)

  CreateXY("X")
  CreateXY("Y")
  CreateXY("S")

  createCheck("Flip", "Enable flip image")

  createCheck("Repeat", "Enable repeat image")


  //blur-------------------------------------------------------------------------------

  THISPar = "🎞 Blur"

  createTextBox("BlurAm", "Blur amount")

  createselect("BlurWhat",
    `<option value="all">All (Lag!)</option>
    <option value="main">Main-things</option>
    <option value="none">None</option>`,
    "Things to blur")

  createCheck("BlurSub", "(Caption/Subtitle) blur background")

  createCheck("MediaBlur", "(Video controls panel) blur background")

  //Animate-------------------------------------------------------------------------------

  THISPar = "🚶 Animations"

  createselect("ThumbHover",
    `<option value="Slide">Slide</option>
    <option value="Zoom">Zoom</option>
    <option value="Slide&Zoom">Slide&Zoom</option>
    <option value="none">None</option>`,
    "Thumbnail hover style")

  createTextBox("Zoom", 'Zoom amount (If you choose "Zoom")')

  createCheck("TimeAni", "Enable hide video time when hover")

  createCheck("Ptran", "Enable Page transition")

  createCheck("ThumbAnim", "Enable thumbnail loaded animation")

  //Hover-------------------------------------------------------------------------------

  THISPar = "🖱️ Hover/Click color"

  createTextBox("HoverBorder", "(Clip cover) hover Borders width")

  createColor("ThumbHoverColor", "(Clip cover) Borders/Shadows on hover color")

  createColor("ThumbClick", "(Clip cover) Borders/Shadows on click color")

  createColor("Themehover", "Most hover background color")

  createColor("Playlisthover", "(Playlist) hover background color")

  createColor("HBT", "(Video controls panel) button hover color")

  //-------------------------------------------------------------------------------

  THISPar = "⚛️ Other settings"



  var IconFrame = createframe(`<lable class="DES">Icon Image (Recommend to use URL)</lable>
    <p><input id="IconFrame" type="file" accept="image/*" > </p>
    <p class="DES">Enter URL :  </label><input id="IconURL" class="TextBox" type="text" style="display: flex;"></p>
    <p><lable class="DES" style="display: flex; text-align: center;" id="IconSTATUS"></label></p>`)

  IconFrame.style = `display: flex; flex-direction: column;`

  var IconURL = document.getElementById("IconURL")
  IconURL.style = `width:200px;  margin-bottom: 10px;`

  IconURL.addEventListener('change', function () {
    ShowTexForICON("Please wait...")
    DOwithindexed(function () {
      store.put(IconURL.value, "IconURL")
      UpdateIcon()
      applyIcon()
      ShowTexForICON("Successful.</br>(If an image didn't show up.Then the URL can't access.)")
      IconURL.value = ``
    })
  })

  var Par = document.createElement('p')
  Par.style = "margin-block: 10px; width:100%;"
  var IconArea = document.createElement('canvas')
  IconArea.id = "IconUrlSHOW"
  IconArea.style = `background-repeat: no-repeat; background-position: center; background-size: contain; width:100%;`

  IconFrame.appendChild(Par)
  Par.appendChild(IconArea)

  var Iconinput = document.getElementById('IconFrame');
  Iconinput.setAttribute('CODEHEMU', '')
  Iconinput.style = "margin-block: 10px; padding:10px; color:white; border-radius:10px; background:rgb(37, 37, 37);"
  Iconinput.onchange = function (evt) {
    var file = evt.target.files[0]
    const reader = new FileReader();
    reader.addEventListener('loadend', () => {
      ShowTexForICON("Please wait...")
      DOwithindexed(function () {
        store.put(reader.result, "IconURL")
        applyIcon()
        UpdateIcon()
        ShowTexForICON("Successful.</br>(If an image not show yet,Your image might too large!)")
      })
    });
    try {
      reader.readAsDataURL(file);
    } catch (e) {

    }
  }

  Iconid = document.createElement('a')
  Iconid.className = "DES"
  Iconid.style = `white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 400px;`
  Iconid.id = "Iconid"
  Iconid.target = "_blank"

  IconFrame.appendChild(Iconid)


  var ResetBu = document.createElement('button')
  ResetBu.innerText = "Reset"
  ResetBu.className = "Reset"
  ResetBu.style = `margin-block-start: 10px;
    color: #ffffff;
    border-radius: 10px;
    transition: all 0.2s;
    background: #242424;
    border: transparent;
    padding: 5px;
    padding-inline: 10px;`
  ResetBu.onclick = function () {
    DOwithindexed(function () {
      store.put('https://www.youtube.com/s/desktop/6588612c/img/favicon.ico', "IconURL")
      applyIcon()
      UpdateIcon()
    })
  }
  IconFrame.appendChild(ResetBu)

  applyIcon()

  createCheck("SwapRow", "(Video) Move to right row")

  createCheck("CenterUD", "(Under Video) Move tittle to the center")

  createCheck("CenterUDF", "(Fullscreen) Move tittle to the center")

  createCheck("CenterTime", "(Clip cover) Move the time position to the center")

  createTextBox("TimeH", "(Clip cover) time height")

  createTextBox("ScWidth", "(Scrollbar) width")

  createCheck("VBG", "(Video) remove background solid color (Theater mode)")

  DOwithindexed(function () {
    let get = store.get("BGIMG")
    get.onsuccess = function (e) {
      RenderPreImg(e.target.result)
    }
  })

  createframe(`<label class="DES">Maybe need to reload website</label>`)

  createCheck("Visual", "Audio Visualizer")

  createCheck("NewVDOanima", "New video animation (Volume up/down,Pause,Play)")

  createCheck("DelBar", "Remove black bar top-bottom (Background VDO Should Enabled)", true)

  createCheck("DelBarDebug", "Remove black bar Debug", true)
}









//----------------------------------------------------------------------------------
function Show() {
  document.getElementById("CODEHEMUBG").style.setProperty('right', "0px");
  document.getElementById("CODEHEMUBG").style.setProperty('opacity', "1");
}

function Hide() {
  document.getElementById("CODEHEMUBG").style.setProperty('right', "-700px");
  document.getElementById("CODEHEMUBG").style.setProperty('opacity', "0");
}

var Can = false

function clickSetting() {
  console.log(Can)
  if (Can == true) {
    if (document.getElementById("CODEHEMUBG") == null) {
      Can = false
      CreateMENU()
      Hide()
      setTimeout(() => {
        Show()
      }, 1);

      Arr = document.getElementById("CODEHEMULIST").getElementsByTagName("label")

      setTimeout(() => {
        Can = true
      }, 500);

      for (z = 0; z < Arr.length; z++) {
        let mem = z
        Arr[mem].style.setProperty('opacity', "0");
        Arr[mem].style.setProperty('margin-block-start', "20px");
        setTimeout(() => {
          Arr[mem].style.setProperty('opacity', "1");
          Arr[mem].style.setProperty('margin-block-start', "0px");
        }, mem * 80);
      }

    } else {
      Can = false
      Hide()
      setTimeout(() => {
        document.getElementById("CODEHEMUBG").remove()
      }, 505)
      setTimeout(() => {
        Can = true
      }, 600)
    }
  }
}



let volchange = 0

function UpdateVol() {
  volchange++
  voldata = document.getElementsByClassName("ytp-volume-panel")[0]
  volvalue = voldata.getAttribute('aria-valuenow')
  volpanel.innerText = volvalue + `%`

  if (volchange == 1) {
    volpanel.style.opacity = 1
    volpanel.style.top = '10px'
  }

  setTimeout(() => {
    volchange--
    if (volchange == 0) {
      volpanel.style.opacity = 0
      volpanel.style.top = '-50px'
    }
  }, 1000);
}


function ShowUpdated() {
  console.log("ShowUp")
  upbg = document.createElement('div')
  upbg.style = `
    width: 100%;
    height: 160px;
    position: fixed;
    z-index: 3000;
    bottom: -130px;
    border-radius: 15px;
    left: 0px;
    margin-left: 0px;
    box-shadow: white 0px 0px 100px 0px;
    background: rgb(0 0 0 / 52%);
    transition: all 1s ease;
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    backdrop-filter: blur(30px);
    `

  Codehemuupbg = `
    <div style="
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    ">
    <img src=` + chrome.runtime.getURL('icon/64.png') + `
    style="
    filter: drop-shadow(0px 0px 8px rgba(255,255,255,0.7));
    ">
    <p style="
    font-size: 28px;
    padding: 10px;
    color: white;
    font-weight: 700;
    ">🎉 NEW V` + Ver + ` has updated!</p>
    </div>
    <div id="sndUpdatedBlock" style="
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    ">
    </div>`;
  upbg.insertAdjacentHTML('afterbegin', Codehemuupbg);

  document.body.append(upbg)
  sndblock = document.getElementById('sndUpdatedBlock')

  okbut = document.createElement('div')
  okbut.className = `Reset`
  okbut.style = `
    width: 40%;
    height: 30px;
    background: #57ffbc;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    transition:all 0.2s ease;
    padding: 5px;
    `
  okbut.innerText = "Ok !"

  sndblock.append(okbut)


  setTimeout(() => {
    upbg.style.width = '550px'
    upbg.style.opacity = '1'
    upbg.style.bottom = '20px'
    upbg.style.left = '50%'
    upbg.style["margin-left"] = "-275px"
    setTimeout(() => {
      upbg.style.transition = "all 0.5s ease"
    }, 1000)
  }, 200);

  okbut.onclick = function () {
    upbg.style.opacity = '0'
    upbg.style.bottom = '-130px'
    DOwithindexed(function () {
      store.put(Ver, "Oldver")
    })
    setTimeout(() => {
      upbg.remove()
    }, 500)
  }

  changelogbt = document.createElement('div')
  changelogbt.className = `Reset`
  changelogbt.style = `
    width: 40%;
    height: 30px;
    background: rgb(255 201 87);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    transition:all 0.2s ease;
    margin-left: 10px;
    padding: 5px;
    `
  changelogbt.innerText = "Changes log"

  changelogbt.onclick = function () {
    window.open(
      'https://github.com/hemucode/CustomDesignForYoutube',
      '_blank'
    )
  }

  sndblock.append(changelogbt)
}

SeeRemove = 1

function SettoEnd() {
  setTimeout(() => {
    if (document.getElementById("end") == null) {
      SettoEnd()
    } else {
      if (document.getElementById("CODEHEMUSET") == null) {
        document.getElementById("end").appendChild(Set);

        if (SeeRemove == 1) {
          if (localStorage["codehemu-SHOWPRESET"] == "true") {

            DOwithindexed(function () {
              store.put(Ver, "Oldver")

              store.put(logo, "IconURL")
              UpdateIcon()
              SetidxTo("BGIMG", "https://raw.githubusercontent.com/hemucode/ImageAPI/main/images/%20(4).jpg")
              SetNormalPre()

              update()
              PRESET()
            })
            localStorage["codehemu-SHOWPRESET"] = "STOP"
            setTimeout(() => {
                  alartnote = `
                  Welcome Dear User❤

                  Are you ready to enter the world of YouTube?
                  Go ahead and have a Nice day

                  Tab Open : www.youtube.com
                  `;
              window.alert(alartnote);
            }, 200);
          } else {
            DOwithindexed(function () {

              get = store.get("Oldver")
              get.onsuccess = function (e) {

                if (e.target.result != Ver) {
                  ShowUpdated()
                  DOwithindexed(function () {
                    SetNormalPre()
                  })

                  SetWhenUpdate()
                }

              }

            })
          }

          var YTAPP

          if (document.getElementById('BGFRAME') == null) {
            BGFRAME = document.createElement('div')
            BGFRAME.id = "BGFRAME"
            YTAPP = document.getElementsByTagName('ytd-app')[0]
            YTAPP.appendChild(BGFRAME)
          }

          Can = true
          Set.addEventListener('click', clickSetting);


          if (localStorage["codehemu-" + 'NewVDOanimaT'] == 'true') {
            function ThisFunc() {
              if (FindVideo()) {
                thisStyle = document.createElement('style')
                thisStyle.textContent = `
                            .ytp-doubletap-ui-legacy{
                                display: flex !important;
                                align-content: center;
                                justify-content: center;
                                opacity: 0;
                                transition: all 0.5s;
                                pointer-events: none;
                                backdrop-filter: blur(var(--blur-amount));
                                border-radius: var(--theme-radius-big) !important;
                                height: 0% !important;
                                margin: auto;
                            }
                            
                            .ytp-doubletap-ui-legacy.ytp-time-seeking{
                                opacity: 1 !important;
                                height: 20% !important;
                            }
                            
                            .ytp-doubletap-overlay-a11y{
                                background: transparent !important;
                            }
                            
                            .ytp-doubletap-static-circle{
                                background: radial-gradient(circle, rgba(0,0,0,.8), transparent 50%) !important;
                                height: 100% !important;
                                left: 0px !important;
                                width: 100% !important;
                                top: 50% !important;
                                border-radius: var(--theme-radius-big) !important;
                            }
                            
                            .ytp-doubletap-seek-info-container{
                                text-align: center;
                                left: 0px !important;
                                top: 0px !important;
                                font-weight: 700;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                justify-content: center;
                                transition:all 1s;
                                filter: drop-shadow(0px 0px 10px white) drop-shadow(0px 0px 0px var(--theme)) drop-shadow(0px 0px 1px black);
                            }
                            
                            .ytp-doubletap-ui-legacy.ytp-time-seeking > .ytp-doubletap-seek-info-container{
                                transform: scale(2);
                            }
                            
                            .ytp-doubletap-ui-legacy[data-side=forward] .ytp-doubletap-base-arrow{
                                border-left-color: var(--theme) !important;
                            }
                            
                            .ytp-doubletap-ui-legacy[data-side=back] .ytp-doubletap-base-arrow{
                                border-right-color: var(--theme) !important;
                            }
                            
                            .ytp-bezel{
                                display: block !important;
                            }

                            .ytp-bezel-text-wrapper{
                                display: none !important;
                            }
                            
                            .ytp-bezel{
                                background: black !important;
                                filter: drop-shadow(0px 0px 10px var(--theme)) drop-shadow(0px 0px 10px white);
                            }
                            
                            .ytp-bezel path{
                                fill: var(--theme);
                            }`

                document.head.append(thisStyle)

                vdpar = FindVideo().parentNode

                volpanel = document.createElement('p')

                volpanel.style = `top: -50px;
                        background: #0000008c;
                        width: 100px;
                        height: 50px;
                        opacity:0;
                        position: absolute;
                        margin: auto;
                        z-index: 1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 30px;
                        backdrop-filter: blur(10px);
                        font-weight: 600;
                        transition: all 0.5s ease;
                        box-shadow: 0px 0px 10px white;`

                volpanel.setAttribute('round', '')

                vdpar.append(volpanel)

                FindVideo().addEventListener('volumechange', function () {
                  UpdateVol()
                })
              } else {
                setTimeout(() => {
                  ThisFunc()
                }, 1000);
              }
            }
            ThisFunc()
          }

          if (localStorage["codehemu-VisualT"] == 'true') {
            window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;

            setTimeout(() => {
              var ctx = new AudioContext();
              var analyser = ctx.createAnalyser();
              var audioSrc = ctx.createMediaElementSource(v);

              audioSrc.connect(analyser);
              analyser.connect(ctx.destination);

              analyser.fftSize = 1024;


              canvas3 = document.createElement('canvas')

              canvas3.style = `position: fixed;
                    z-index: 1;
                bottom: 0px;
                pointer-events: none;
                filter: drop-shadow(0px 0px 3px white);`
              canvas3.width = 1920
              canvas3.height = 250

              var cwidth = canvas3.width,
                cheight = canvas3.height,
                meterWidth = 5,
                gap = 4,
                capHeight = 2,
                capStyle = '#fff',
                meterNum = 1024,
                capYPositionArray = [];

              YTAPP.insertBefore(canvas3, YTAPP.firstChild)

              ctx = canvas3.getContext('2d'),
                gradient = ctx.createLinearGradient(0, 0, 0, 300);
              gradient.addColorStop(1, '#ffffff00');
              gradient.addColorStop(0.5, '#ffffff');
              gradient.addColorStop(0, '#ffffff');

              function renderFrame() {
                var array = new Uint8Array(analyser.frequencyBinCount);
                analyser.getByteFrequencyData(array);
                var step = 1;
                ctx.clearRect(0, 0, cwidth, cheight);
                for (var i = 0; i < meterNum; i++) {
                  var value = array[i * step]
                  value = ((value * value) / 500) - 20
                  if (capYPositionArray.length < Math.round(meterNum)) {
                    capYPositionArray.push(value);
                  };
                  ctx.fillStyle = capStyle;
                  if (value < capYPositionArray[i]) {
                    ctx.fillRect(i * 12, cheight - (--capYPositionArray[i]), meterWidth, capHeight);
                  } else {
                    ctx.fillRect(i * 12, cheight - value, meterWidth, capHeight);
                    capYPositionArray[i] = value;
                  };
                  ctx.fillStyle = gradient;
                  ctx.fillRect(i * 12, cheight - value + capHeight, meterWidth, cheight);
                }
                requestAnimationFrame(renderFrame);
              }
              renderFrame();
            }, 1000);
          }

          if (localStorage["codehemu-EnableButtonT"] == 'true') {

            function RemoveCinema() {
              if (document.getElementById("cinematics")) {
                console.log("Removed")
                document.getElementById("cinematics").remove()
              } else {
                setTimeout(() => {
                  RemoveCinema()
                }, 1000)
              }
            }
            RemoveCinema()
          }
        }
      }
      if (SeeRemove == 1) {
        SeeRemove = 0
        document.getElementById("end").addEventListener('DOMNodeRemoved', function (e) {
          SettoEnd()
        });
      }
    }
  }, 1000);
}

SetNull()



var UPSEQ = 33,
  NotOverFlow,

  canvas,
  context,
  cw,
  ch,

  canvas2,
  context2,
  cw2,
  ch2,

  Cloning,
  YTAPP,
  BGFRAME

var CanvasQua,
  CanvasNewQua,
  VDOBOUND

function ChangeCanvasQua() {
  cw = Math.floor(Math.floor(VDOBOUND.width) * CanvasNewQua)
  ch = Math.floor(Math.floor(VDOBOUND.height) * CanvasNewQua)

  CanvasQua = CanvasNewQua
  canvas.width = cw
  canvas.height = ch
}

function SetCanvas() {
  if (canvas) {
    VDOBOUND = FindVideo().getBoundingClientRect()

    VcenY = VDOBOUND.top + VDOBOUND.height / 2
    canvasbound = canvas.getBoundingClientRect()

    var Distance = (VcenY) - (canvasbound.top + canvasbound.height / 2)

    if (Distance < 0) {
      Distance = Distance * -1
    }

    CanvasNewQua = localStorage["codehemu-CanvasQua"] / 100

    if (CanvasQua != CanvasNewQua) {
      ChangeCanvasQua()
    }

    if (Distance > 1) {
      console.log("SetCanvasPo")

      canvas.style.setProperty('margin-top', VDOBOUND.top + window.pageYOffset + 'px')
      canvas.style.setProperty('margin-left', VDOBOUND.left + window.pageXOffset + 'px')
    }

    VdoWith = VDOBOUND.width + "px"

    if (canvas.style.width != VdoWith) {
      console.log("SetCanvasSize")
      VdoHeight = VDOBOUND.height + "px"
      var tempCanvas = document.createElement('canvas')
      tempCanvas.width = context.canvas.width
      tempCanvas.height = context.canvas.height
      tempCanvas.getContext("2d").drawImage(context.canvas, 0, 0)

      canvas.style.width = VdoWith
      canvas.style.height = VdoHeight

      ChangeCanvasQua()

      context.drawImage(tempCanvas, 0, 0)
      tempCanvas.remove()
    }

    if (EnaCanvas2 == true) {
      if (canvas2.height != VDOBOUND.height) {
        canvas2.width = 5
        canvas2.height = VDOBOUND.height
      }
    }
  } else {
    setTimeout(() => {
      SetCanvas()
    }, 100);
  }
}

function DetectPlay() {
  console.log("PLAY")
  SetCanvas()
  thisframe = 0
  FindVideo().requestVideoFrameCallback(drawpic)
  // WaitForFrame()
}

function SetBGTran(Status) {
  if (YTAPP == null) {
    YTAPP = document.getElementsByTagName('ytd-app')[0]
  }
  if (Status == true) {
    YTAPP.style = `background: transparent !important;
        width: 100%;`
  } else {
    YTAPP.style = `background:var(--bg-color) !important;
        width: 100%;`
  }
}

LastMode = null

function CheckVDO() {
  if (FindVideo().parentNode) {

    VDOPARCLASS = FindVideo().parentNode.parentNode.className

    pg = document.getElementById("page-manager")

    if (VDOPARCLASS.search("ytp-fullscreen") == -1) {
      pg.style = ``
    } else {
      pg.style = `margin-top:0px;`
      v.style.marginTop = "unset"
      v.parentNode.style.height = "100%"
      v.parentNode.style.marginTop = "unset"

      console.log("Set LastHeight")
      LastHeight = 0
    }

    if (

      VDOPARCLASS.search('ytp-small-mode') == -1 &&
      VDOPARCLASS.search("ytp-fullscreen") == -1 &&
      (VDOPARCLASS.search("unstarted-mode") == -1 || VDOPARCLASS.search("playing-mode") > 0)

    ) {
      if (Cloning == false) {
        CreateCanvas()
      }
    } else {
      if (Cloning == true) {
        RemoveCanvas()
        console.log("Set LastHeight")
        LastHeight = 0
      }
    }
  } else {
    setTimeout(() => {
      CheckVDO()
    }, 500);
  }
}

function CheckVDOSTATUS() {
  if (!inIframe()) {
    setTimeout(() => {
      console.log("CheckStatus")
      YTAPP = document.getElementsByTagName('ytd-app')[0]
      BGFRAME = document.getElementById("BGFRAME")
      if (FindVideo() == null || YTAPP == null || BGFRAME == null) {
        setTimeout(() => {
          CheckVDOSTATUS()
        }, 1000);
      } else {
        VDOChangeEvent.observe(FindVideo().parentNode.parentNode, {
          attributes: true
        })
        CheckVDO()
      }
    }, 1);
  }
}


BlackMode = false
BlackBar = JSON.parse(localStorage["codehemu-DelBarT"])
EnaCanvas2 = JSON.parse(localStorage["codehemu-DelBarT"])

let drawing = false,
  CheckBlackQua = 300
CheckBlackThreshold = 20,
  LastFind = null,
  ThisR = null,
  ThisG = null,
  ThisB = null

BlackDebug = JSON.parse(localStorage["codehemu-DelBarDebugT"])

addMultiply = 1.2

function CheckAddMultiply(R, G, B) {

  return [R, G, B]
}

function CheckThisPX(R, G, B) {
  GetRGB = CheckAddMultiply(R, G, B)
  R = GetRGB[0]
  G = GetRGB[1]
  B = GetRGB[2]

  return Math.abs(R - ThisR) + Math.abs(G - ThisG) + Math.abs(B - ThisB) > CheckBlackThreshold
}

function Check2ThisPX(R, G, B) {
  GetRGB = CheckAddMultiply(R, G, B)
  R = GetRGB[0]
  G = GetRGB[1]
  B = GetRGB[2]

  return Math.abs(R - ThisR) + Math.abs(G - ThisG) + Math.abs(B - ThisB) > 10
}

function contrastImage(imgData, contrast) { //input range [-100..100]
  var d = imgData.data;
  contrast = (contrast / 100) + 1; //convert to decimal & shift range: [0..2]
  var intercept = 128 * (1 - contrast);
  for (var i = 0; i < d.length; i += 4) { //r,g,b,a
    d[i] = d[i] * contrast
    d[i + 1] = d[i + 1] * contrast
    d[i + 2] = d[i + 2] * contrast
  }
  return imgData;
}

var LastFrame
var LastHeight = 0

function drawOnePic() {
  if (document.visibilityState == 'visible') {

    SetCanvas()
    Scale = 1
    context.drawImage(v, (cw * (1 - Scale) / 2), (ch * (1 - Scale) / 2), cw * Scale, ch * Scale);

    if (BlackMode == true) {
      context2.drawImage(v, 0, 0, VDOBOUND.width, VDOBOUND.height);
      frame = context2.getImageData(0, 0, VDOBOUND.width, VDOBOUND.height)
      l = frame.data.length / 4
      for (let i = 0; i < l; i++) {
        frame.data[i * 4 + 3] = (frame.data[i * 4 + 0] * 10 +
          frame.data[i * 4 + 1] * 10 +
          frame.data[i * 4 + 2] * 10) / 10
      }
      context2.putImageData(frame, 0, 0)
    }

    if (BlackBar) {
      redPX = context2.createImageData(1, 1)
      redPX.data[0] = 255
      redPX.data[3] = 255

      context2.clearRect(0, 0, VDOBOUND.width, VDOBOUND.height);

      context2.drawImage(v, 0, 0, 5, VDOBOUND.height);


      ThisActualPX = context2.getImageData(1, 3, 1, 1)
      ThisPX = ThisActualPX.data


      FistGetRGB = CheckAddMultiply(ThisPX[0], ThisPX[1], ThisPX[2])

      ThisR = FistGetRGB[0]
      ThisG = FistGetRGB[1]
      ThisB = FistGetRGB[2]


      ThisHeightArray = []

      for (x = 0; x < 5; x++) {
        ThisFind = x
        ThisR = FistGetRGB[0]
        ThisG = FistGetRGB[1]
        ThisB = FistGetRGB[2]

        Find = null
        ThisActualPX = context2.getImageData(ThisFind, 0, 1, VDOBOUND.height)
        ThisPX = ThisActualPX.data

        for (i = 5; i < VDOBOUND.height / 2; i++) {
          if (CheckThisPX(ThisPX[i * 4], ThisPX[i * 4 + 1], ThisPX[i * 4 + 2])) {
            i += 10
            if (CheckThisPX(ThisPX[i * 4], ThisPX[i * 4 + 1], ThisPX[i * 4 + 2])) {
              Find = i - 10
              i = VDOBOUND.height / 2
            }
          } else {
            if (!Check2ThisPX(ThisPX[i * 4], ThisPX[i * 4 + 1], ThisPX[i * 4 + 2])) {
              ThisR = ThisPX[i * 4]
              ThisG = ThisPX[i * 4 + 1]
              ThisB = ThisPX[i * 4 + 2]
            }
          }
        }

        if (Find) {
          ThisHeightArray.push(Find)

          if (BlackDebug) {
            for (i = 5; i < Find; i++) {
              context2.putImageData(redPX, ThisFind, i)
            }
          }
        } else {
          ThisHeightArray.push("inf")
        }

        ThisR = FistGetRGB[0]
        ThisG = FistGetRGB[1]
        ThisB = FistGetRGB[2]


        Find = null
        ThisActualPX = context2.getImageData(ThisFind, 0, 1, VDOBOUND.height)
        ThisPX = ThisActualPX.data

        for (i = VDOBOUND.height - 5; i > VDOBOUND.height / 2; i--) {
          if (CheckThisPX(ThisPX[i * 4], ThisPX[i * 4 + 1], ThisPX[i * 4 + 2])) {
            i -= 10
            if (CheckThisPX(ThisPX[i * 4], ThisPX[i * 4 + 1], ThisPX[i * 4 + 2])) {
              Find = i + 10
              i = VDOBOUND.height / 2
            }
          } else {
            if (!Check2ThisPX(ThisPX[i * 4], ThisPX[i * 4 + 1], ThisPX[i * 4 + 2])) {
              ThisR = ThisPX[i * 4]
              ThisG = ThisPX[i * 4 + 1]
              ThisB = ThisPX[i * 4 + 2]
            }
          }
        }

        if (Find) {
          ThisHeightArray.push(VDOBOUND.height - Find)

          if (BlackDebug) {
            for (i = VDOBOUND.height - 5; i > Find; i--) {
              context2.putImageData(redPX, ThisFind, i)
            }
          }
        } else {
          ThisHeightArray.push("inf")
        }


        ThisFind += CheckBlackQua
      }

      var mf = 0;
      var m = 0;
      var SureTHisHeight;

      for (var i = 0; i < ThisHeightArray.length; i++) {
        lowest = null
        for (var j = i; j < ThisHeightArray.length; j++) {
          if (ThisHeightArray[i] == ThisHeightArray[j] || Math.abs(ThisHeightArray[i] - ThisHeightArray[j]) < 5) {
            if (ThisHeightArray[i] == "inf") {
              lowest = "inf"
            } else {
              if (ThisHeightArray[j] > lowest || lowest == null) {
                lowest = ThisHeightArray[j]
              }
            }
            m++;
          }
        }

        if (lowest == "inf") {
          if (m > mf) {
            mf = m;
            SureTHisHeight = lowest;
          }
        } else {
          if (m > mf || (m == mf && lowest > SureTHisHeight)) {
            mf = m;
            SureTHisHeight = lowest;
          }
        }
        m = 0;
      }

      if (BlackDebug) {
        YellowLinePX = context2.createImageData(VDOBOUND.width, 1)

        for (i = 0; i < VDOBOUND.width; i++) {
          YellowLinePX.data[i * 4] = 255
          YellowLinePX.data[i * 4 + 1] = 255
          YellowLinePX.data[i * 4 + 3] = 255
        }

        context2.putImageData(YellowLinePX, 0, 10)
      }


      if (mf < 5 || SureTHisHeight == "inf") {
        SureTHisHeight = LastHeight
      }

      if (SureTHisHeight > 10 && (Math.abs(SureTHisHeight - LastHeight) > 10 || SureTHisHeight > LastHeight)) {

        if (SureTHisHeight > LastHeight) {
          v.style.transition = "none"
          v.parentNode.style.transition = "none"
        } else {
          v.style.transition = "margin-top 0.5s"
          v.parentNode.style.transition = "all 0.5s"
        }

        LastHeight = SureTHisHeight

        v.parentNode.style.overflow = "hidden"
        v.parentNode.style.position = "absolute"
        v.parentNode.style.width = "100%"

        v.parentNode.style.borderRadius = "var(--theme-radius-big)"

        v.parentNode.style.marginTop = LastHeight + 2 + 'px'
        v.style.marginTop = -LastHeight - 1 + 'px'
        v.parentNode.style.height = VDOBOUND.height - LastHeight * 2 - 2 + 'px'
      } else {
        if (SureTHisHeight <= 10) {
          v.style.transition = "margin-top 0.5s"
          v.parentNode.style.transition = "all 0.5s"
          LastHeight = 0
          v.style.marginTop = "unset"
          v.parentNode.style.height = "100%"
          v.parentNode.style.marginTop = "unset"
        }
      }

      if (BlackDebug) {
        GreenLinePX = context2.createImageData(VDOBOUND.width, 1)

        for (i = 0; i < VDOBOUND.width; i++) {
          GreenLinePX.data[i * 4 + 1] = 255
          GreenLinePX.data[i * 4 + 3] = 255
        }

        context2.putImageData(GreenLinePX, 0, LastHeight)
        context2.putImageData(GreenLinePX, 0, VDOBOUND.height - LastHeight)
      }
    }
  }
}

let fps = 30,
  calPerFrameTime = 1000 / fps



function drawpic() {
  if (drawing == false) {
    drawing = true

    function DrawApic() {
      FindVideo()
      if (v.paused || v.ended || Cloning == false) {
        drawing = false
        console.log("CancelDraw")
      } else {
        drawOnePic()

        v.requestVideoFrameCallback(DrawApic)
      }
    }
    DrawApic()
  }
}

function callback(mutationsList, observer) {
  if (mutationsList[0].type == "attributes") {
    console.log("CHANGE")
    CheckVDOSTATUS()
    if (!FindVideo().paused) {
      SetCanvas()
    }
  }
}

VDOChangeEvent = new MutationObserver(callback)

let CanvasSpawned = false

function CreateCanvas() {
  CanvasSpawned = true
  drawing = 0
  console.log("CreateCanvas")

  Cloning = true

  if (!NotOverFlow) {
    canvas = document.createElement('canvas');
    NotOverFlow = document.createElement('div')
    YTAPP.append(NotOverFlow)
    NotOverFlow.append(canvas)
    NotOverFlow.style = `width: 100%;
                height: 100%;
                top: 0px;
                position: absolute;
                object-position: center;
                overflow: hidden;
                z-index: -1;
                image-rendering: pixelated;
                }`
    canvas.id = "CODEHEMUBlurBG"

    canvas.style.opacity = 0
  }
  setTimeout(() => {
    canvas.style.opacity = 1
  }, 0);

  context = canvas.getContext('2d', {
    alpha: false
  })
  context.imageSmoothingEnabled = false

  if (EnaCanvas2 == true) {
    canvas2 = document.createElement('canvas')
    v.parentNode.parentNode.append(canvas2)
    canvas2.style = `position: absolute;
        top: 0px;
        image-rendering: pixelated;
        z-index:100;
        width:50px;
        height:calc(100% - 70px);
        left:0px;`

    canvas2.id = "CODEHEMUVDOCanvas"
    context2 = canvas2.getContext('2d')
    context2.imageSmoothingEnabled = false
  }

  v.addEventListener('play', DetectPlay)

  v.pause()

  try {
    v.play()
  } catch (e) {

  }

  SetBGTran(true)
  BGFRAME.style.setProperty("opacity", "0")

  if (EnaCanvas2 == true || BlackDebug == true) {
    if (BlackDebug == true) {
      FindVideo().style.setProperty("opacity", "1")
    } else {
      canvas2.style.setProperty("display", "none")
    }
  }
}

function RemoveCanvas(Force) {
  console.log("Remove")
  Cloning = false

  if (CanvasSpawned == true) {
    if (localStorage["codehemu-VDOBGT"] == 'true' && localStorage["codehemu-EnableButtonT"] == 'true' && !Force) {
      canvas.style.opacity = 0
    } else {
      NotOverFlow.remove()
      NotOverFlow = null
    }
    if (canvas2) {
      canvas2.remove()
    }
    SetBGTran(false)
    BGFRAME.style.setProperty("opacity", "1")

    FindVideo()
    v.style.setProperty("opacity", "1")
    v.removeEventListener('play', DetectPlay, false)

    CanvasSpawned = false
  }
  drawing = 0
}

function CheckLoop() {
  if (FindVideo() && BGFRAME) {
    CheckVDO()
  }
  setTimeout(() => {
    CheckLoop()
  }, 100);
}


function EnableBGBlur() {
  console.log("EnaVDOBG")
  Cloning = false

  CheckVDOSTATUS()

  window.addEventListener('yt-page-data-updated', CheckVDOSTATUS)
}

function DisableBGBlur(Force) {
  console.log("DisaVDOBG")
  RemoveCanvas(Force)

  window.removeEventListener('yt-page-data-updated', CheckVDOSTATUS)
  VDOChangeEvent.disconnect()
}


function download(data, filename, type) {
  var file = new Blob([data], {
    type: type
  })
  var a = document.createElement("a"),
    url = URL.createObjectURL(file)
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  setTimeout(function () {
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }, 0)
}

chrome.runtime.onMessage.addListener(function (recived) {
  console.log("revice " + recived)
  if (recived == 'Enable') {
    if (localStorage["codehemu-EnableButtonT"] == "true") {
      localStorage["codehemu-EnableButtonT"] = "false"
    } else {
      localStorage["codehemu-EnableButtonT"] = "true"
    }
    update()
  }

  if (recived == 'Setting') {
    clickSetting()
  }
})

var hidden = false

document.addEventListener('visibilitychange', function () {
  if (document.visibilityState == 'hidden' && hidden == true && localStorage["codehemu-AutoPIPT"] == "true") {
    hidden = false
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    }
    FindVideo();
  }
})

window.addEventListener('focus', function () {
  if (localStorage["codehemu-AutoEXPIPT"] == "true") {
    console.log("Focus")
    console.log(document.pictureInPictureElement)
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    }
  }
})

window.addEventListener('blur', function () {
  console.log("Bruh")
  hidden = true
})


var IMGURLAIP = true;

setInterval(() => {
  if (localStorage["codehemu-EnableButtonT"] == 'true') {

    if (localStorage["codehemu-APIT"] == "true" && IMGURLAIP) {

      IMGURLAIP = false;

      IMGURL = `https://raw.githubusercontent.com/hemucode/ImageAPI/main/images/%20(${Math.floor(Math.random() * 330) + 1}).jpg`;

      DOwithindexed(function () {
        store.put(IMGURL, "BGIMG")
        update()
        ShowTexForIMG("Successful. (If an image not show yet please wait.)")
      })
    }
    if (localStorage["codehemu-APIT"] == "false") {
      IMGURLAIP = true;
    }

    if (localStorage["codehemu-AdsSkipT"] == 'true') {
      const btn = document.querySelector(".ytp-ad-skip-button");
      if (btn) {
        btn.click()
      }
      if (document.querySelector('.ad-showing')) {
        const video = document.querySelector('video');
        if (video) {
          if (btn) {
            btn.click();
          } else {
            video.currentTime = isNaN(video.duration) ? 0 : video.duration;
          }
        }
      }
    }

    head = document.head;
    adsDisplay = document.querySelector(".codehemu_adsDisplay");
    if (localStorage["codehemu-AdsDisplayT"] == "true") {
      if (!adsDisplay) {
        if (head) {
          var css = document.createElement("style");
          css.classList.add("codehemu_adsDisplay");
          head.appendChild(css);
          css.type = 'text/css';
          css.innerText = `.ytd-ad-slot-renderer,ytd-display-ad-renderer,.ytd-display-ad-renderer, ytd-promoted-video-renderer, ytd-movie-offer-module-renderer, ytd-promoted-sparkles-web-renderer, ytd-promoted-sparkles-text-search-renderer, ytd-player-legacy-desktop-watch-ads-renderer { display: none !important; visibility: hidden !important; } #player-ads, #search-pva, #premium-yva, #masthead-ad, #feedmodule-PRO, #video-masthead, #watch-buy-urls, #sub-frame-error, #main-frame-error, #watch7-sidebar-ads, #feed-pyv-container, #shelf-pyv-container, #watch-branded-actions, #watch-channel-brand-div, #homepage-chrome-side-promo, #watch-channel-brand-div-text { display: none !important; visibility: hidden !important; } .iv-promo, .video-ads, .promoted-videos, .ytp-ad-progress, .ytp-ad-progress-list, .searchView.list-view, .html5-ad-progress-list, .watch-extra-info-right, .watch-extra-info-column, .lohp-pyv-shelf-container, .ytd-merch-shelf-renderer, .carousel-offer-url-container, .youtubeSuperLeaderBoardAdHolder, .youtubeSuperLeaderOverallAdArea, .ytd-movie-offer-module-renderer, .ytd-action-companion-ad-renderer { display: none !important; visibility: hidden !important; } iframe[id^=ad_], div[class*="-ad-v"], div[class*="-ads-"], a[href*="/adwords/"], a[href*="doubleclick.net"], iframe[src*="doubleclick.net"], a[href^="http://www.youtube.com/cthru?"], a[href^="https://www.youtube.com/cthru?"], a[onclick*="\"ping_url\":\"http://www.google.com/aclk?"] { display: none !important; visibility: hidden !important; } .badge-style-type-ad, .GoogleActiveViewElement, .sparkles-light-cta, .ytd-compact-promoted-video-renderer, .ytd-companion-slot-renderer, .ytd-player-legacy-desktop-watch-ads-renderer, .ytd-promoted-sparkles-text-search-renderer, .ytd-video-masthead-ad-v3-renderer, .ytp-ad-progress-list, #masthead-ad, #merch-shelf, #player-ads, #show-ad, #YtKevlarVisibilityIdentifier, ytd-compact-promoted-video-renderer, ytd-companion-slot-renderer, ytd-display-ad-renderer, ytd-promoted-sparkles-text-search-renderer, ytd-promoted-sparkles-web-renderer, ytd-video-masthead-ad-advertiser-info-renderer, ytd-video-masthead-ad-v3-renderer, ytm-promoted-sparkles-web-renderer { display: none !important; }`;
        }
      }
    } else if (localStorage["codehemu-AdsDisplayT"] == "false") {
      if (adsDisplay) {
        adsDisplay.parentNode.removeChild(adsDisplay);
      }
    }

  }
}, 300)