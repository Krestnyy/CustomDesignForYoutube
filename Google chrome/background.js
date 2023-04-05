chrome.runtime.onStartup.addListener(async () => {
  var a = new Promise(function(resolve, reject){
        chrome.storage.sync.get({"enabled": true}, function(options){
            resolve(options.enabled);
      })
  });
  console.log("enable");
  const enabled = await a;
  if (enabled) {
    await enable();
  } else {
    await disable();
  }
});

chrome.storage.onChanged.addListener(async (changes, namespace) => {
  if (namespace !== "sync") return;

  if (changes.enabled) {
    if (changes.enabled.newValue) {
      await enable();
    } else {
      await disable();
    }
  }
});

/**
 * Enables this extension core
 * @returns Promise
 */

async function enable() {
  await chrome.declarativeNetRequest.updateEnabledRulesets({
    enableRulesetIds: ["youtube"],
  });
  console.log("enable");
}

/**
 * @returns Promise
 */

async function disable() {
  await chrome.declarativeNetRequest.updateEnabledRulesets({
    disableRulesetIds: ["youtube"],
  });
  console.log("disable");
}