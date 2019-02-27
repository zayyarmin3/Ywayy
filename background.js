  chrome.contextMenus.create({
    title: "Ywayy", 
    contexts:["selection"], 
    onclick: onClickYwayy
  });


  function onClickYwayy(info, tab) {
    chrome.tabs.sendMessage(tab.id, {message: "ywayy clicked"});
  }