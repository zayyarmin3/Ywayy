  chrome.contextMenus.create({
    title: "Ywayy", 
    contexts:["selection"], 
    onclick: ywayy
  });

  function ywayy(info, tab) {
    var origin = info.selectionText;
    var result = "";
    if(!isMM(origin)) {
      result = origin;
    } else {
      if(isZg(origin)) {
        result = Rabbit.zg2uni(origin);
      } else {
        result = Rabbit.uni2zg(origin);
      }
    }
    chrome.tabs.sendMessage(tab.id, {text: result});
  }


  function isZg(input) {
    let zgRegex = new RegExp("[\u1050-\u109f]|\u0020[\u103b\u107e-\u1084]|\u0020\u1031|^\u1031|^\103b|\u1038\u103b|\u1038\u1031|\u1033|\u1034|[\u102d\u102e\u1032]\u103b|\u1039[^\1000-1021]|\u1039$|\u108c");
    for(var i = 0; i<input.length; i++) {
      if(zgRegex.test(input[i])) {
        return true;
      }
    }
    return false;
  }

  function isMM(input) {
    let regexMM = new RegExp("[က-အ]+|[\u1025-\u1027]");
    for(var i = 0; i<input.length; i++) {
      if(regexMM.test(input[i])) {
        return true;
      }
    }
    return false;
  }