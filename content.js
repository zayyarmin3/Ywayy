chrome.runtime.onMessage.addListener(function (request) {
    replce(window.getSelection(), request.text);
});

function replace(elem, text) {
    elem.anchorNode.data = text;
}