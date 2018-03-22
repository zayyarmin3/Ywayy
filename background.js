function toUni(info, tab) {
    var origin = info.selectionText;
    var result = Rabbit.zg2uni(origin);
    chrome.tabs.sendMessage(tab.id, {text: result});
}

  chrome.contextMenus.create({
    title: "To Unicode", 
    contexts:["selection"], 
    onclick: toUni,
  });


  function toUni(info, tab) {
    var origin = info.selectionText;
    var result = Rabbit.uni2zg(origin);
    chrome.tabs.sendMessage(tab.id, {text: result});
}

  chrome.contextMenus.create({
    title: "To Zawgyi", 
    contexts:["selection"], 
    onclick: toUni,
  });