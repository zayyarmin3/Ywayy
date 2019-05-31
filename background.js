  chrome.contextMenus.create({
    title: "Ywayy", 
    contexts:["selection"], 
    onclick: onClickYwayy
  });


  function onClickYwayy(info, tab) {
    chrome.tabs.sendMessage(tab.id, {message: "ywayy clicked"});
  }
  
  chrome.commands.onCommand.addListener(function(command) {
    chrome.windows.getCurrent(function(currentWindow) {
      chrome.tabs.getSelected(currentWindow.id, function(selectedTab) {
        chrome.tabs.sendMessage(selectedTab.id, {message: "ywayy clicked"});
      });
    });
  });