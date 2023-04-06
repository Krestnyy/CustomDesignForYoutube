app.version = function () {return chrome.runtime.getManifest().version};
app.homepage = function () {return chrome.runtime.getManifest().homepage_url};

if (!navigator.webdriver) {
  app.on.uninstalled(app.homepage() + "#uninstall");
  app.on.installed(function (e) {
    app.on.management(function (result) {
      if (result.installType === "normal") {
        app.tab.query.index(function (index) {
          var previous = e.previousVersion !== undefined && e.previousVersion !== app.version();
          var doupdate = previous && parseInt((Date.now() - config.welcome.lastupdate) / (24 * 3600 * 1000)) > 45;
          if (e.reason === "install" || (e.reason === "update" && doupdate)) {
            var url = app.homepage();
            app.tab.open(url, index, e.reason === "install");
            config.welcome.lastupdate = Date.now();
          }
        });
      }
    });
  });
}

app.on.message(function (request) {
  if (request) {
    if (request.path === "popup-to-background") {
      for (var id in app.popup.message) {
        if (app.popup.message[id]) {
          if ((typeof app.popup.message[id]) === "function") {
            if (id === request.method) {
              app.popup.message[id](request.data);
            }
          }
        }
      }
    }
  }
});

app.on.connect(function (port) {
  if (port) {
    if (port.name) {
      if (port.name in app) {
        app[port.name].port = port;
      }
    }
    /*  */
    port.onDisconnect.addListener(function (e) {
      app.storage.load(function () {
        if (e) {
          if (e.name) {
            if (e.name in app) {
              app[e.name].port = null;
            }
          }
        }
      });
    });
    /*  */
    port.onMessage.addListener(function (e) {
      app.storage.load(function () {
        if (e) {
          if (e.path) {
            if (e.port) {
              if (e.port in app) {
                if (e.path === (e.port + "-to-background")) {
                  for (var id in app[e.port].message) {
                    if (app[e.port].message[id]) {
                      if ((typeof app[e.port].message[id]) === "function") {
                        if (id === e.method) {
                          app[e.port].message[id](e.data);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      });
    });
  }
});

chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        chrome.tabs.query({}, function (tabs) {
            tabs.forEach(async tab => {
                try {
                    if (tab.url.substring(0, 23) === "https://www.youtube.com") {
                        chrome.tabs.reload(tab.id)
                    }
                } catch (e) {
                    
                }
            });
        });
    }else if(details.reason == "update"){
        console.log("Updated from " + details.previousVersion + " to " + chrome.runtime.getManifest().version);
    }
})

chrome.commands.onCommand.addListener(async (command) => {
    console.log(`Command "${command}" triggered`);
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions)
    console.log(command)
    chrome.tabs.sendMessage(tab.id, command);
});
