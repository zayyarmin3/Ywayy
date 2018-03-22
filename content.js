chrome.runtime.onMessage.addListener(function (request) {
    replaceSelectedText(window.getSelection(), request.text);
});

function replaceSelectedText(elem, text) {
    debugger;
    elem.anchorNode.data = text;
}