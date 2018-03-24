chrome.runtime.onMessage.addListener(function (request) {
    replaceSelectedText(window.getSelection(), request.text);
});

function replaceSelectedText(elem, text) {
    elem.focusNode.data = text;
}