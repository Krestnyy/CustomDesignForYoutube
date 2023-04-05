if (!localStorage.start) {
    alartnote = `
    Welcome Dear User❤

    Are you ready to enter the world of YouTube?
    Go ahead and have a Nice day
    `;
    alert(alartnote)
    localStorage.start="codehemu";
}
var logo = chrome.runtime.getURL('data/icons/icon-128.png'),
codehemu_stylesheet = `html:not(.style-scope), :not(.style-scope), html:not(.style-scope) { --yt-spec-brand-background-primary: var(--top-bar-and-search-background) !important; --yt-spec-brand-background-solid: var(--bg-color) !important; --yt-spec-general-background-a: var(--bg-color) !important; --yt-spec-call-to-action: var(--theme) !important; --yt-spec-badge-chip-background: var(--playlist-bg) !important; --yt-spec-text-primary: var(--text-color) !important; --yt-spec-text-secondary: var(--nd-text-color) !important; --yt-spec-brand-button-background: var(--theme) !important; --yt-spec-static-brand-red: var(--theme) !important; --yt-spec-brand-icon-inactive: var(--theme) !important } #tooltip.tp-yt-paper-tooltip { background-color: var(--bg-color) !important } body::-webkit-scrollbar, .playlist-items.ytd-playlist-panel-renderer::-webkit-scrollbar, #guide-inner-content.ytd-app:hover::-webkit-scrollbar { width: 11px !important } .ytp-preview:not(.ytp-text-detail) .ytp-tooltip-text-no-title { display: block !important; background-color: var(--hover-time-background) !important } ytd-live-chat-frame { transition: all .2s cubic-bezier(0, 1, 1, 1) !important } .sbdd_b, #container.style-scope.ytd-masthead, ytd-multi-page-menu-renderer, .ytp-gradient-bottom, .ytp-popup.ytp-settings-menu, #chips-wrapper.ytd-feed-filter-chip-bar-renderer, .iv-drawer, #card.ytd-miniplayer, ytd-miniplayer, .ytp-bezel, .ytp-caption-segment, .ytp-bezel-text { backdrop-filter: blur(var(--blur-amount)) !important } .ytp-ce-expanding-overlay-background, .ytp-ce-playlist-count { background: var(--things-end-on-video) !important } .sbdd_b, #scrim, tp-yt-iron-overlay-backdrop { background: var(--top-bar-and-search-background) !important } ytd-thumbnail-overlay-hover-text-renderer { background-color: var(--top-bar-and-search-background) !important } .sbfl_b, .sbsb_a, #container.style-scope.ytd-masthead { background: transparent !important } .sbsb_d, #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:hover, #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:focus, .ytp-menuitem:not([aria-disabled=true]):hover { background: var(--search-background-hover) !important; transition: all .2s cubic-bezier(0.1, 0.7, 1, 1) !important } .gsfs, .ytp-ce-channel-metadata, .ytp-cards-teaser .ytp-cards-teaser-text, .ytp-panel-menu, .ytp-ce-website-title, .ytp-ce-merchandise-title { color: var(--text-color) !important } #player, ytd-multi-page-menu-renderer { border-radius: var(--theme-radius-big) !important } a.thumbnail>.ytcd-basic-item-large-image, ytcp-thumbnail-with-title, ytd-playlist-thumbnail, ytd-thumbnail, #thumbnail, .thumbnail-container.ytd-notification-renderer, .sbdd_b, .ytp-ce-video, .ytp-ce-playlist, [aria-live="polite"], .ytp-tooltip-bg, .ytp-tooltip-text.ytp-tooltip-text-no-title, .branding-img.iv-click-target, .branding-context-container-inner, ytd-thumbnail-overlay-bottom-panel-renderer, .ytp-progress-list, .ytp-play-progress.ytp-swatch-background-color, .ytp-load-progress, .ytp-hover-progress.ytp-hover-progress-light, .ytp-gradient-bottom, .style-scope.ytd-subscribe-button-renderer, #container.ytd-playlist-panel-renderer, .header.ytd-playlist-panel-renderer, ytd-button-renderer.style-suggestive[is-paper-button] tp-yt-paper-button.ytd-button-renderer, ytd-live-chat-frame, .ytp-ce-playlist-count, .ytp-ce-expanding-overlay-background, .ytp-popup.ytp-settings-menu, .ytp-sb-subscribe, .ytp-sb-unsubscribe, .iv-drawer, .iv-card, .iv-card a.iv-click-target, .ytp-cards-teaser-box, .miniplayer.ytd-miniplayer, .ytp-popup, .badge.ytd-badge-supported-renderer, .ytp-ce-website .ytp-ce-expanding-image, .ytp-ce-merchandise .ytp-ce-expanding-image, .ytp-flyout-cta .ytp-flyout-cta-body, #ytp-ad-image, .ytp-ad-preview-container, .ytp-ad-message-container, #guide-content, .sbsb_d, #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer, #masthead, #search-icon-legacy, .ytp-ad-skip-button.ytp-button, .ytp-flyout-cta .ytp-flyout-cta-icon, #banner>img, #icon>img, #action, .ytp-cards-teaser, .ytp-ce-video-duration, .ytp-show-tiles .ytp-videowall-still, .ytp-videowall-still-info-content, .ytp-videowall-still-listlabel-mix.ytp-videowall-still-listlabel, .style-scope.ytd-popup-container, .style-scope.ytd-miniplayer, #action-companion-ad-info-button.ytd-action-companion-ad-renderer, .ytp-flyout-cta .ytp-flyout-cta-action-button, .ytp-autonav-endscreen-upnext-thumbnail, .ytp-autonav-endscreen-upnext-button, ytd-playlist-panel-video-renderer, tp-yt-paper-item.ytd-menu-service-item-renderer, ytd-menu-service-item-renderer[use-icons], .ytp-ad-overlay-image, .ytp-ad-button-icon, .ytp-ad-overlay-close-button, .ytp-ad-text-overlay, .ytp-ad-button-icon, .ytp-ad-button-icon, .html5-video-player .caption-visual-line .ytp-caption-segment:last-child, #media-container.ytd-display-ad-renderer, ytd-display-ad-renderer[layout=display-ad-layout-top-landscape-image] #media-badge.ytd-display-ad-renderer, #chips-wrapper.ytd-feed-filter-chip-bar-renderer, ytd-mini-guide-entry-renderer { border-radius: var(--theme-radius) !important } a.thumbnail>.ytcd-basic-item-large-image, ytcp-thumbnail-with-title, ytd-playlist-thumbnail, ytd-thumbnail, #thumbnail, .thumbnail-container.ytd-notification-renderer, #avatar, #author-thumbnail.ytd-comment-simplebox-renderer, .style-scope.ytd-comment-renderer.no-transition, #player, .ytp-preview:not(.ytp-text-detail) .ytp-tooltip-text-no-title, #container.ytd-playlist-panel-renderer, ytd-live-chat-frame, ytd-thumbnail-overlay-side-panel-renderer, ytd-thumbnail-overlay-bottom-panel-renderer, .ytp-gradient-bottom, .ytp-popup.ytp-settings-menu, .iv-drawer, .ytp-cards-teaser-box, .miniplayer.ytd-miniplayer, .ytp-flyout-cta .ytp-flyout-cta-body, #ytp-ad-image, .ytp-ad-preview-container, .ytp-ad-message-container, #guide-content, .ytp-ad-skip-button.ytp-button, #banner>img, #icon>img, #action, .ytp-show-tiles .ytp-videowall-still, yt-confirm-dialog-renderer[dialog][dialog][dialog], .ytp-ce-element.ytp-ce-element-show, #contentWrapper.tp-yt-iron-dropdown>* { border-collapse: separate !important; overflow: hidden !important; box-shadow: var(--border-minus) 0 var(--border-color), 0 var(--border-width) var(--border-color), var(--border-width) 0 var(--border-color), 0 var(--border-minus) var(--border-color) !important } .ytp-gradient-bottom, .ytp-popup.ytp-settings-menu, .ytp-tooltip-bg { box-shadow: var(--player-bg-border-width) 0 var(--border-color), 0 var(--bg-border-minus) var(--border-color), var(--bg-border-minus) 0 var(--border-color), 0 var(--player-bg-border-width) var(--border-color) !important } #text.ytd-channel-name, yt-button-renderer.yt-formatted-string.yt-button-renderer, paper-ripple, a.yt-simple-endpoint.yt-formatted-string, .style-scope.ytd-menu-renderer.force-icon-button.style-default-active, .badge-style-type-live-now.ytd-badge-supported-renderer, .badge-style-type-starting-soon.ytd-badge-supported-renderer { border-color: var(--theme) !important; color: var(--theme) !important } paper-ripple, .ytp-swatch-color, a.ytp-ce-link, yt-icon.ytd-compact-link-renderer, yt-icon.ytd-toggle-theme-compact-link-renderer { border-radius: var(--theme-radius) !important; color: var(--theme) !important } .ytp-swatch-background-color, .ytp-settings-button.ytp-hd-quality-badge:after, .ytp-chrome-controls .ytp-button[aria-pressed]:after, .ytp-sb-subscribe, a.ytp-sb-subscribe { background-color: var(--theme) !important } ytd-thumbnail-overlay-time-status-renderer, ytd-thumbnail-overlay-side-panel-renderer, ytd-thumbnail-overlay-toggle-button-renderer, .iv-branding-active .branding-context-container-inner, .ytp-ce-video-duration { border-radius: var(--theme-time-radius) !important; background-color: var(--hover-time-background) !important } a.yt-simple-endpoint.yt-formatted-string::selection, span::selection, yt-formatted-string::selection, .ytp-menuitem[aria-checked=true] .ytp-menuitem-toggle-checkbox, .ytp-volume-slider-handle, .ytp-volume-slider-handle:before { background: var(--theme) !important } #container.ytd-searchbox, .yt-ui-ellipsis, .ytp-tooltip.ytp-preview:not(.ytp-text-detail), #contentContainer, .ytp-videowall-still-info-duration { background-color: transparent !important; border-color: transparent !important } ytd-playlist-thumbnail, ytd-thumbnail, ytd-compact-playlist-renderer, ytd-compact-video-renderer, ytd-compact-radio-renderer, ytd-compact-playlist-renderer>div>div>div>a, ytd-compact-video-renderer>div>div>div>a, ytd-compact-radio-renderer>div>div>div>a, ytd-thumbnail.ytd-rich-grid-media, ytd-thumbnail.ytd-rich-grid-media>a, #button.ytd-menu-renderer.yt-icon.ytd-menu-renderer { transition: all .2s cubic-bezier(0.1, 0.5, 1, 1) !important } ytd-thumbnail-overlay-toggle-button-renderer { background-color: transparent } ytd-compact-playlist-renderer:hover>div>ytd-playlist-thumbnail, ytd-compact-video-renderer:hover>div>ytd-thumbnail, ytd-compact-radio-renderer:hover>div>ytd-thumbnail { box-shadow: var(--border-minus) 0 var(--border-hover-color), 0 var(--border-width) var(--border-hover-color), var(--border-width) 0 var(--border-hover-color), 0 var(--border-minus) var(--border-hover-color) !important } ytd-thumbnail.ytd-rich-grid-media:hover { margin-block-start: -15px !important; margin-block-end: 15px !important; box-shadow: var(--border-minus) 0 var(--border-hover-color), 0 var(--border-width) var(--border-hover-color), var(--border-width) 0 var(--border-hover-color), 0 var(--border-minus) var(--border-hover-color) !important } ytd-thumbnail.ytd-rich-grid-media:active { box-shadow: var(--border-minus) 0 var(--border-click-color), 0 var(--border-width) var(--border-click-color), var(--border-width) 0 var(--border-click-color), 0 var(--border-minus) var(--border-click-color) !important } ytd-compact-playlist-renderer:hover, ytd-compact-video-renderer:hover, ytd-compact-radio-renderer:hover { margin-inline-start: -15px !important } ytd-compact-playlist-renderer:hover>div>div>div>a, ytd-compact-video-renderer:hover>div>div>div>a, ytd-compact-radio-renderer:hover>div>div>div>a { margin-inline-end: 15px !important } ytd-compact-playlist-renderer:active>div>ytd-playlist-thumbnail, ytd-compact-video-renderer:active>div>ytd-thumbnail, ytd-compact-radio-renderer:active>div>ytd-thumbnail { box-shadow: var(--border-minus) 0 var(--border-click-color), 0 var(--border-width) var(--border-click-color), var(--border-width) 0 var(--border-click-color), 0 var(--border-minus) var(--border-click-color) !important } .ytp-button:not([aria-disabled=true]):not([disabled]):not([aria-hidden=true]):hover>svg>path, ytd-topbar-logo-renderer>a>div>yt-icon>svg>g>g>path { fill: var(--theme) !important } .ytp-chrome-top, .ytp-chrome-bottom, .ytp-gradient-bottom, .ytp-button:not([aria-disabled=true]):not([disabled]):not([aria-hidden=true])>svg>path { transition: all .2s cubic-bezier(0, 1, 1, 1) !important } .ytp-autohide:not(.ytp-autohide-active) .ytp-gradient-top, .ytp-autohide:not(.ytp-autohide-active) .ytp-gradient-bottom { display: block !important } .ytp-gradient-bottom { height: 30px !important; background-image: none !important } .ytp-popup.ytp-settings-menu, .ytp-gradient-bottom, .iv-drawer, .ytp-cards-teaser-box, .ytp-popup, .ytp-bezel { background-color: var(--in-player-bg-color) !important } .ytp-gradient-top[aria-hidden=true], .ytp-gradient-bottom[aria-hidden=true], .ytp-autohide .ytp-gradient-top, .ytp-autohide .ytp-gradient-bottom, .ytp-autohide .ytp-playlist-menu-button, .ytp-autohide .ytp-back-button, .ytp-autohide .ytp-title-channel, .ytp-autohide .ytp-title, .ytp-autohide .ytp-chrome-top .ytp-watch-later-button, .ytp-autohide .ytp-chrome-top .ytp-share-button, .ytp-autohide .ytp-chrome-top .ytp-copylink-button, .ytp-autohide:not(.ytp-cards-teaser-shown) .ytp-cards-button, .ytp-autohide .ytp-overflow-button, .ytp-autohide .ytp-chrome-bottom, .ytp-chrome-top[aria-hidden=true], .ytp-chrome-bottom[aria-hidden=true] { margin-block-start: 50px !important; margin-block-end: -50px !important; transition: all .1s cubic-bezier(0.1, 0.5, 1, 0) !important }
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
    background: #7bf46b;
  }
    
  .CheckBox:after{
    position: absolute;
    display: flex;
    content: "";
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
  .CheckBox:checked:after{
    left: calc(100% - 1.5em);
    transform: rotate(180deg);
    filter: drop-shadow(0px 0px 10px black);
  }
.HOVERLINK {
    transition: all .2s ease-in-out;
    border-bottom: 1px solid currentColor;
    text-decoration: none;
}
.HOVERLINK:hover{
  color:#86c2ff;
}
.IMGFormat {
    width: 35px;
    height: 35px;
    object-fit: cover;
    border-radius: 10px;
}
@keyframes slide {
  0% {width: 0px; float: right;}
  100% {width: 750px; float: right;}
}
@keyframes slide1 {
  0% {width: 750px; float: left;}
  100% {width: 0px; float: left;}
}
.like_review{
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
  .like_review:hover {
      transform: translateY(-3px);
  }
  @keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
  }
  .text_des {
      margin-inline: 10px;
      color: white;
      font-size: 15px;
  }
  .SendBox {
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
  .codehemu_btn{
    width: -webkit-fill-available; 
    padding: 10px; 
    background: rgba(94, 94, 94, 0.76); 
    color: white; border-radius: 10px; 
    transition: all 0.2s ease 0s; 
    margin-inline: 10px; margin-block: 10px; 
    border-top: transparent; border-right: transparent; 
    border-left: transparent; border-image: initial; 
    border-bottom: 1px solid rgba(255, 255, 255, 0.42); 
    box-shadow: 0px 0px 3px;
  }
  .codehemu_btn:hover{
    background: white;
    color:black;
  }
  .review {
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
    background-size: 400%;
  }
  .hedding {
    width: -webkit-fill-available;
    font-size: 18px;
    padding: 10px;
    margin-inline: -10px;
    background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(255, 0, 0, 0) 100%);
    border-radius: 10px;
    color: black !important;
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
  #codehemuBody{
    width: 550px;
    height: 100%;
    overflow: auto;
  }
  .HoverList{
    border-radius: 10px;
    transition: all 0.2s;
    margin-inline-start: 10px;
    user-select: none;
    position: relative;
    width: -webkit-fill-available;
    font-size: 16px;
    padding: 10px;
    color: white;
    opacity: 1;
    margin-block-start: 0px;
  }
  .HoverList:hover {
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%) !important;
        color: black !important;
        margin-inline-start: 0px !important;
    }
  #codehemuList{
    width: 210px; 
    height: 100%; 
    display: flex; 
    flex-direction: column;
  }
  #codehemuBodyDiv{
    width: 750px;
    height: 656px;
    position: fixed;
    top: 56px;
    right: 0px;
    transition: all 0.5s ease 0s;
    z-index: 2020;
    display: flex;
    flex-direction: row;
    opacity: 1;
    border-collapse: separate;
    outline: solid !important;
    outline-color: var(--border-color) !important;
    outline-width: var(--player-bg-border-width) !important;
    border-radius: 10px;
    background: rgba(0,0,0,0.95) !important;
    animation: slide .5s;
  }
  .codehemu_img_shadow:hover{
    transform: rotate(180deg);
  }

  @keyframes spin {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
  }`;

function stylesheets(css){
  codehemu_style = document.querySelector(".codehemu_style");
  if (codehemu_style) {codehemu_style.innerText=css;}
}


function actionButton(img_url) {
  targets = document.querySelector("#end.style-scope.ytd-masthead");
  if (targets) {
    const wrapper = document.createElement("ytd-topbar-menu-button-renderer");
    wrapper.classList.add("style-scope");
    wrapper.classList.add("ytd-masthead");
    targets.appendChild(wrapper);
    
    const button = document.createElement("button");
    button.classList.add("ytd-masthead");
    button.classList.add("ytd-topbar-menu-button-renderer");
    wrapper.appendChild(button);

    const img_shadow = document.createElement("yt-img-shadow");
    img_shadow.style.height="32";
    img_shadow.style.width="32";
    img_shadow.style.backgroundColor= "transparent";
    img_shadow.classList.add("style-scope");
    img_shadow.classList.add("codehemu_img_shadow");
    img_shadow.classList.add("ytd-topbar-menu-button-renderer");
    button.appendChild(img_shadow);

    const img = document.createElement("img");
    img.style.visibility= "visible"
    img.style.height="32";
    img.style.width="32";
    img.setAttribute("id", "img");
    img.classList.add("style-scope");
    img.classList.add("yt-img-shadow");
    img.classList.add("extension_logo");
    img.src = img_url;
    img_shadow.appendChild(img);
  }
}

setInterval(()=>{
  head = document.head;
  codehemu_style = document.querySelector(".codehemu_style");
  if (head) {
    if (!codehemu_style) {
      var css = document.createElement("style");
      css.classList.add("codehemu_style")
      head.appendChild(css);
      css.type = 'text/css';
      css.innerText = codehemu_stylesheet;
    }
  }

  img_shadow = document.querySelector(".codehemu_img_shadow");
  if (localStorage.actionButton_img) {
      img_url = localStorage.actionButton_img;
      if (!img_shadow) {
       actionButton(img_url);
      }else{
        img_shadow.addEventListener('click', codehemuBody , false);
        img_shadow.addEventListener('dblclick', function(){}, false); 
      }
  }else{
    localStorage.actionButton_img = logo;
  }

  //extra element
  extra_img_shadow = document.getElementsByClassName("codehemu_img_shadow")[1];
  if (extra_img_shadow) {
      extra_img_shadow.parentNode.removeChild(extra_img_shadow);
  }
  extra_codehemu_style = document.getElementsByClassName("codehemu_style")[1];
  if (extra_codehemu_style) {
      extra_codehemu_style.parentNode.removeChild(extra_codehemu_style);
  }

  if (!localStorage.enabled) {
    localStorage.enabled = "true";
  }

  const adsDisplay = document.querySelector(".codehemu_adsDisplay");

  const enabledfa = document.querySelector(".enabled_txt");
  if (enabledfa) {
    enabledfa.innerText = (localStorage.enabled=="true" ? "Enabled" : "Disabled");
  }

  //extension ON Code 
  if (localStorage.enabled=='true') {

    if (!localStorage.adsDisplay) {
      localStorage.adsDisplay = "true";
    }

    if (head) {
      if (localStorage.adsDisplay == "true") {
        if (!adsDisplay) {
            var css = document.createElement("style");
            css.classList.add("codehemu_adsDisplay");
            head.appendChild(css);
            css.type = 'text/css';
            css.innerText = `.ytd-ad-slot-renderer,ytd-display-ad-renderer,.ytd-display-ad-renderer, ytd-promoted-video-renderer, ytd-movie-offer-module-renderer, ytd-promoted-sparkles-web-renderer, ytd-promoted-sparkles-text-search-renderer, ytd-player-legacy-desktop-watch-ads-renderer { display: none !important; visibility: hidden !important; } #player-ads, #search-pva, #premium-yva, #masthead-ad, #feedmodule-PRO, #video-masthead, #watch-buy-urls, #sub-frame-error, #main-frame-error, #watch7-sidebar-ads, #feed-pyv-container, #shelf-pyv-container, #watch-branded-actions, #watch-channel-brand-div, #homepage-chrome-side-promo, #watch-channel-brand-div-text { display: none !important; visibility: hidden !important; } .iv-promo, .video-ads, .promoted-videos, .ytp-ad-progress, .ytp-ad-progress-list, .searchView.list-view, .html5-ad-progress-list, .watch-extra-info-right, .watch-extra-info-column, .lohp-pyv-shelf-container, .ytd-merch-shelf-renderer, .carousel-offer-url-container, .youtubeSuperLeaderBoardAdHolder, .youtubeSuperLeaderOverallAdArea, .ytd-movie-offer-module-renderer, .ytd-action-companion-ad-renderer { display: none !important; visibility: hidden !important; } iframe[id^=ad_], div[class*="-ad-v"], div[class*="-ads-"], a[href*="/adwords/"], a[href*="doubleclick.net"], iframe[src*="doubleclick.net"], a[href^="http://www.youtube.com/cthru?"], a[href^="https://www.youtube.com/cthru?"], a[onclick*="\"ping_url\":\"http://www.google.com/aclk?"] { display: none !important; visibility: hidden !important; } .badge-style-type-ad, .GoogleActiveViewElement, .sparkles-light-cta, .ytd-compact-promoted-video-renderer, .ytd-companion-slot-renderer, .ytd-player-legacy-desktop-watch-ads-renderer, .ytd-promoted-sparkles-text-search-renderer, .ytd-video-masthead-ad-v3-renderer, .ytp-ad-progress-list, #masthead-ad, #merch-shelf, #player-ads, #show-ad, #YtKevlarVisibilityIdentifier, ytd-compact-promoted-video-renderer, ytd-companion-slot-renderer, ytd-display-ad-renderer, ytd-promoted-sparkles-text-search-renderer, ytd-promoted-sparkles-web-renderer, ytd-video-masthead-ad-advertiser-info-renderer, ytd-video-masthead-ad-v3-renderer, ytm-promoted-sparkles-web-renderer { display: none !important; }`;
          }
      }else{
        if (adsDisplay) {
           adsDisplay.parentNode.removeChild(adsDisplay);
        }
      }
    }

    if (!localStorage.AdsSkip) {
      localStorage.AdsSkip = "true";
    }

    if (localStorage.AdsSkip=='true') {
      // console.log("AdsSkip");
      const btn=document.querySelector(".ytp-ad-skip-button");
      if(btn) {btn.click()}
      if(document.querySelector('.ad-showing') ){
        const video=document.querySelector('video');
        if (video) {
          if(btn) {
            btn.click();
          }else{
            video.currentTime = isNaN(video.duration) ? 0 : video.duration;
          }
        }
      }
    }
  }//extension OFF Code 
  else{
    if (adsDisplay) {
        adsDisplay.parentNode.removeChild(adsDisplay);
    }
  }

},300)


function codehemuBody() {
  codehemuBodyDiv = document.querySelector("#codehemuBodyDiv");
  body = document.body;
  if (!codehemuBodyDiv) {
    const div = document.createElement("div");
    div.setAttribute("id", "codehemuBodyDiv");
    div.classList.add("codehemuBodyDiv");
    body.appendChild(div);

    const codehemuList = document.createElement("div");
    codehemuList.setAttribute("id", "codehemuList");
    codehemuList.classList.add("codehemuList");
    div.appendChild(codehemuList);

    const label1 = document.createElement("label");
    label1.classList.add("HoverList");
    label1.addEventListener('click', (()=>{
      document
      .getElementById("codehemuBody")
      .scrollTo({ top: document.getElementById('p1').offsetTop, behavior: 'smooth' })
    }) , false);
    label1.innerText = "⚙️ Extention's settings";
    codehemuList.appendChild(label1);

    const label2 = document.createElement("label");
    label2.classList.add("HoverList");
    label2.addEventListener('click', (()=>{
      document
      .getElementById("codehemuBody")
      .scrollTo({ top: document.getElementById('p2').offsetTop, behavior: 'smooth' })
    }) , false);

    label2.innerText = "⭐ Review";
    codehemuList.appendChild(label2);

    const label3 = document.createElement("label");
    label3.classList.add("HoverList");
    label3.innerText = "🎉 Join my Work 🎉";
    label3.addEventListener('click', (()=>{
      document
      .getElementById("codehemuBody")
      .scrollTo({ top: document.getElementById('p3').offsetTop, behavior: 'smooth' })
    }) , false);
    codehemuList.appendChild(label3);

    const label4 = document.createElement("label");
    label4.classList.add("HoverList");
    label4.innerText = "🛑 Advertisement";
    label4.addEventListener('click', (()=>{
      document
      .getElementById("codehemuBody")
      .scrollTo({ top: document.getElementById('p4').offsetTop, behavior: 'smooth' })
    }) , false);
    codehemuList.appendChild(label4);

    const label5 = document.createElement("label");
    label5.classList.add("HoverList");
    label5.addEventListener('click', (()=>{
      document
      .getElementById("codehemuBody")
      .scrollTo({ top: document.getElementById('p5').offsetTop, behavior: 'smooth' })
    }) , false);
    label5.innerText = "🌈 Color/Theme";
    codehemuList.appendChild(label5);


    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx



    const codehemuBody = document.createElement("body");
    codehemuBody.setAttribute("id", "codehemuBody");
    codehemuBody.classList.add("codehemuBody");
    div.appendChild(codehemuBody);

    const p1 = document.createElement("p");
    p1.classList.add("MainBox");
    p1.setAttribute("id", "p1");
    codehemuBody.appendChild(p1);

    const bodylabel1 = document.createElement("label");
    bodylabel1.classList.add("hedding");
    bodylabel1.innerText = "⚙️ Extention's settings";
    p1.appendChild(bodylabel1);

    const sendboxaa = document.createElement("p");
    sendboxaa.classList.add("SendBox");
    p1.appendChild(sendboxaa);
    
    const ainput = document.createElement("input");
    ainput.classList.add("CheckBox");
    ainput.setAttribute("type","checkbox");
    ainput.checked = localStorage.enabled === 'true';
    ainput.addEventListener('change', (event) => {
      localStorage.enabled = ainput.checked;
    }, false)
    sendboxaa.appendChild(ainput);

    const isda = document.createElement("label");
    isda.classList.add("text_des");
    isda.classList.add("enabled_txt");
    isda.innerText = "Enabled";
    sendboxaa.appendChild(isda);
    

    const sendbox1 = document.createElement("p");
    sendbox1.classList.add("SendBox");
    p1.appendChild(sendbox1);

    const labelsendbox1 = document.createElement("label");
    labelsendbox1.classList.add("text_des");
    labelsendbox1.innerText = `Version ${chrome.runtime.getManifest().version}`
    sendbox1.appendChild(labelsendbox1);


    const btn1 = document.createElement("button");
    btn1.classList.add("codehemu_btn");
    btn1.innerText = "🔧 Reset Extention (fix bugs)";
    btn1.addEventListener('click', (()=>{
      console.log("🔧 Reset Extention (fix bugs)");
      localStorage.clear();
      document.location.reload();
    }) , false);
    p1.appendChild(btn1);

    const btn01 = document.createElement("button");
    btn01.classList.add("codehemu_btn");
    btn01.innerText = "Icon Same Profile Image";
    btn01.addEventListener('click', duplicateLogo , false);
    p1.appendChild(btn01);

    const sendbox2 = document.createElement("p");
    sendbox2.classList.add("SendBox");
    sendbox2.setAttribute("style", "display: flex; flex-direction: column;");
    p1.appendChild(sendbox2);

    const labelsendbox2 = document.createElement("label");
    labelsendbox2.classList.add("text_des");
    labelsendbox2.setAttribute("style","text-align: center;")
    labelsendbox2.innerText = "Extension Icon";
    sendbox2.appendChild(labelsendbox2);


    const pcreate = document.createElement("p");
    labelsendbox2.appendChild(pcreate);

    const input1 = document.createElement("input");
    input1.setAttribute("id", "ChooseExtensionLogo");
    input1.setAttribute("type", "file");
    input1.setAttribute("accept", "image/*");
    input1.addEventListener('change', ChooseExtensionLogo , false);
    input1.setAttribute("style", "margin-block: 10px; padding: 10px; color: white; border-radius: 10px; background: rgb(37, 37, 37);");
    pcreate.appendChild(input1);


    const pcreate1 = document.createElement("p");
    pcreate1.setAttribute("style","margin-block: 10px; width: 100%;");
    labelsendbox2.appendChild(pcreate1);

    const canvasa= document.createElement("img");
    canvasa.classList.add("canvasa");
    canvasa.setAttribute("style","width: 100%; opacity: 1; aspect-ratio: 114 / 114;");
    canvasa.width = "497";
    canvasa.height="497";
    pcreate1.appendChild(canvasa);

    const btn02 = document.createElement("button");
    btn02.classList.add("codehemu_btn");
    btn02.innerText = "Reset Extention Logo";
    btn02.addEventListener('click', (()=>{
      profile = document.querySelector(".extension_logo");
      if (profile) {
        localStorage.actionButton_img = logo;
        document.querySelector(".extension_logo").src = logo;
        if (document.querySelector(".canvasa")) {
          document.querySelector(".canvasa").src = logo;
        }
      }else{
        alert("Sorry, Reset Extention (fix bugs)")
      }

    }) , false);
    p1.appendChild(btn02);


    const p2 = document.createElement("p");
    p2.classList.add("MainBox");
    p2.setAttribute("id", "p2");
    codehemuBody.appendChild(p2);

    const bodylabel2 = document.createElement("label");
    bodylabel2.classList.add("review");
    bodylabel2.innerText = "⭐ Review";
    p2.appendChild(bodylabel2);


    const sendbox1212 = document.createElement("p");
    sendbox1212.classList.add("SendBox");
    sendbox1212.setAttribute("style", "display: flex; flex-direction: column;");
    p2.appendChild(sendbox1212);


    const labelsendboxf = document.createElement("label");
    labelsendboxf.classList.add("text_des");
    labelsendboxf.setAttribute("style","text-align: center;font-family: monospace;")
    labelsendboxf.innerText = "Did you like this Extension? Press Review to make it easier for others to see";
    sendbox1212.appendChild(labelsendboxf);

    const labela = document.createElement("a");
    labela.classList.add("like_review");
    labela.setAttribute("href",`https://chrome.google.com/webstore/detail/${chrome.runtime.id}`);
    labela.setAttribute("target","_blank");
    labela.innerText = "🤍 Like";
    labelsendboxf.appendChild(labela);


    const p3 = document.createElement("p");
    p3.classList.add("MainBox");
    p3.setAttribute("id", "p3");
    codehemuBody.appendChild(p3);

    const bodylabel3 = document.createElement("label");
    bodylabel3.classList.add("hedding");
    bodylabel3.innerText = "🎉 Join my Work 🎉";
    p3.appendChild(bodylabel3);


    const sendbox014 = document.createElement("p");
    sendbox014.classList.add("SendBox");
    sendbox014.setAttribute("style", "display: flex; flex-direction: column;");
    p3.appendChild(sendbox014);

    const pp1 = document.createElement("p");
    pp1.setAttribute("style", "display: flex; align-items: center; padding:10px; width: 100%;");
    sendbox014.appendChild(pp1);

    const imgasa = document.createElement("img");
    imgasa.classList.add("IMGFormat");
    imgasa.src="data:image/png;base64,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";
    pp1.appendChild(imgasa);


    const aa1 = document.createElement("a");
    aa1.innerText = "More Extensions, You can visit My Website";
    aa1.classList.add("text_des"); 
    aa1.classList.add("HOVERLINK");
    aa1.href = "https://www.downloadhub.cloud/";
    aa1.setAttribute("target","_blank");
    pp1.appendChild(aa1);


    const pp2 = document.createElement("p");
    pp2.setAttribute("style", "display: flex; align-items: center; padding:10px; width: 100%;");
    sendbox014.appendChild(pp2);

    const imgass = document.createElement("img");
    imgass.classList.add("IMGFormat");
    imgass.src = "data:image/png;base64,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";
    pp2.appendChild(imgass);


    const aa2 = document.createElement("a");
    aa2.innerText = "Subscribe to YouTube channel";
    aa2.classList.add("text_des"); 
    aa2.classList.add("HOVERLINK");
    aa2.href = "https://www.youtube.com/c/HemantaGayen?sub_confirmation=1";
    aa2.setAttribute("target","_blank");
    pp2.appendChild(aa2);

    const pp3 = document.createElement("p");
    pp3.setAttribute("style", "display: flex; align-items: center; padding:10px; width: 100%;");
    sendbox014.appendChild(pp3);

    const imgasd = document.createElement("img");
    imgasd.classList.add("IMGFormat");
    imgasd.src = "data:image/png;base64,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";
    pp3.appendChild(imgasd);


    const aa3 = document.createElement("a");
    aa3.innerText = "Interesting HTML content website";
    aa3.classList.add("text_des"); 
    aa3.classList.add("HOVERLINK");
    aa3.href = "https://www.codehemu.com/";
    aa3.setAttribute("target","_blank");
    pp3.appendChild(aa3);


    const p4 = document.createElement("p");
    p4.classList.add("MainBox");
    p4.setAttribute("id", "p4");
    codehemuBody.appendChild(p4);

    const bodylabel4 = document.createElement("label");
    bodylabel4.classList.add("hedding");
    bodylabel4.innerText = "🛑 Advertisement";
    bodylabel4.setAttribute("style","color:white!important; background: linear-gradient(90deg, rgb(255 0 0) 0%, rgba(255, 0, 0, 0) 100%) !important;")
    p4.appendChild(bodylabel4);

    const sendsad = document.createElement("p");
    sendsad.classList.add("SendBox");
    p4.appendChild(sendsad);
    
    const codehemu_input = document.createElement("input");
    codehemu_input.classList.add("CheckBox");
    codehemu_input.setAttribute("type","checkbox");
    codehemu_input.checked = localStorage.AdsSkip === 'true';
    codehemu_input.addEventListener('change', (event) => {
      localStorage.AdsSkip = codehemu_input.checked;
    }, false)
    sendsad.appendChild(codehemu_input);

    const codehemu_isda = document.createElement("label");
    codehemu_isda.classList.add("text_des");
    codehemu_isda.innerText = "Video Ads Skip";
    sendsad.appendChild(codehemu_isda);

    const sendsada2 = document.createElement("p");
    sendsada2.classList.add("SendBox");
    p4.appendChild(sendsada2);

    const codehemu_21input = document.createElement("input");
    codehemu_21input.classList.add("CheckBox");
    codehemu_21input.setAttribute("type","checkbox");
    codehemu_21input.checked = localStorage.adsDisplay === 'true';
    codehemu_21input.addEventListener('change', (event) => {
      localStorage.adsDisplay = codehemu_21input.checked;
    }, false)
    sendsada2.appendChild(codehemu_21input);

    const codehemu_isdasd = document.createElement("label");
    codehemu_isdasd.classList.add("text_des");
    codehemu_isdasd.innerText = "Advertisement display & visibility Hide";
    sendsada2.appendChild(codehemu_isdasd);

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXV2V2V2V2V2V2V2V2V2V2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXV2V2V2V2V2V2V2V2V2V2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXV2V2V2V2V2V2V2V2V2V2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXV2V2V2V2V2V2V2V2V2V2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXV2V2V2V2V2V2V2V2V2V2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXV2V2V2V2V2V2V2V2V2V2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 

    const senfsada2 = document.createElement("p");
    senfsada2.classList.add("SendBox");
    p4.appendChild(senfsada2);

    const codehemu_22input = document.createElement("input");
    codehemu_22input.classList.add("CheckBox");
    codehemu_22input.setAttribute("type","checkbox");
    codehemu_22input.checked = localStorage.AdRequest === 'true';
    senfsada2.appendChild(codehemu_22input);
    codehemu_22input.addEventListener('change', async (event) => {
      localStorage.AdRequest = event.currentTarget.checked;
      const enabled = event.currentTarget.checked;
      await chrome.storage.sync.set({ enabled });
    }, false)

    const codehemu_i2dasd = document.createElement("label");
    codehemu_i2dasd.classList.add("text_des");
    codehemu_i2dasd.innerText = "Ads Request Block";
    senfsada2.appendChild(codehemu_i2dasd);

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXV2V2V2V2V2V2V2V2V2V2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXV2V2V2V2V2V2V2V2V2V2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXV2V2V2V2V2V2V2V2V2V2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXV2V2V2V2V2V2V2V2V2V2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXV2V2V2V2V2V2V2V2V2V2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 



    const p5 = document.createElement("p");
    p5.classList.add("MainBox");
    p5.setAttribute("id", "p5");
    codehemuBody.appendChild(p5);

    const bodylabel5 = document.createElement("label");
    bodylabel5.classList.add("hedding");
    bodylabel5.innerText = "🌈 Color/Theme";
    p5.appendChild(bodylabel5);


    const p100 = document.createElement("p");
    p100.style="width:100px;height:500px;"

    p100.setAttribute("id", "p100");
    codehemuBody.appendChild(p100);



  }
  else if(codehemuBodyDiv){
    codehemuBodyDiv.setAttribute("style","animation: slide1 .5s !important;");
    setTimeout(()=>{
      if(codehemuBodyDiv){codehemuBodyDiv.parentNode.removeChild(codehemuBodyDiv);}
    },400);
  }
}



function duplicateLogo() {
  console.log("ok");
  profile = document.querySelector("img.yt-img-shadow").src;
  if (profile) {
    document.querySelector(".extension_logo").src = profile;
    localStorage.actionButton_img = profile;
    if (document.querySelector(".canvasa")) {
          document.querySelector(".canvasa").src = profile;
    }
  }else{
    if (document.querySelector(".canvasa")) {
        document.querySelector(".canvasa").src = logo;
    }
    localStorage.actionButton_img = logo;
    document.querySelector(".extension_logo").src = logo;
    alert("Sorry, it seems that you are not logged in to YouTube, so we are unable to collect and use your profile pic.")
  }
}

function ChooseExtensionLogo() {
  var element = document.querySelector("#ChooseExtensionLogo");
  canvasa = document.querySelector(".canvasa");
  var file = element.files[0];
  if (element && file && canvasa) {
    var reader = new FileReader();
    reader.onloadend = function() {
      console.log('RESULT', reader.result);
      localStorage.actionButton_img = reader.result;
      document.querySelector(".extension_logo").src = reader.result;
      canvasa.src = reader.result;
      document.querySelector("#ChooseExtensionLogo").value="";
    }
    reader.readAsDataURL(file);
  }
}

