var Rabbit = function (o) { function r(f) { if (t[f]) return t[f].exports; var m = t[f] = { i: f, l: !1, exports: {} }; return o[f].call(m.exports, m, m.exports, r), m.l = !0, m.exports } var t = {}; return r.m = o, r.c = t, r.d = function (o, t, f) { r.o(o, t) || Object.defineProperty(o, t, { configurable: !1, enumerable: !0, get: f }) }, r.n = function (o) { var t = o && o.__esModule ? function () { return o.default } : function () { return o }; return r.d(t, "a", t), t }, r.o = function (o, r) { return Object.prototype.hasOwnProperty.call(o, r) }, r.p = "", r(r.s = 0) }([function (o, r, t) { "use strict"; var f = function (o) { return $([{ from: "င်္", to: "ၤ" }, { from: "္တွ", to: "႖" }, { from: "ါ်", to: "ၚ" }, { from: "ဋ္ဌ", to: "႒" }, { from: "ိံ", to: "ႎ" }, { from: "၎င်း", to: "၎" }, { from: "[ဥဉ](?=[္ုူ])", to: "ၪ" }, { from: "[ဥဉ](?=[့]?[်])", to: "ဥ" }, { from: "ည(?=[္ွ])", to: "ၫ" }, { from: "(္[က-အ])(ိ){0,1}ု", to: "$1$2ဳ" }, { from: "(္[က-အ])ူ", to: "$1ဴ" }, { from: "န(?=[ိီ]?[ူွှု္])", to: "ႏ" }, { from: "နြ", to: "ႏြ" }, { from: "္က", to: "ၠ" }, { from: "္ခ", to: "ၡ" }, { from: "္ဂ", to: "ၢ" }, { from: "္ဃ", to: "ၣ" }, { from: "္စ", to: "ၥ" }, { from: "္ဆ", to: "ၦ" }, { from: "္ဇ", to: "ၨ" }, { from: "္ဈ", to: "ၩ" }, { from: "္ဋ", to: "ၬ" }, { from: "္ဌ", to: "ၭ" }, { from: "ဍ္ဍ", to: "ၮ" }, { from: "ဎ္ဍ", to: "ၯ" }, { from: "္ဏ", to: "ၰ" }, { from: "္တ", to: "ၱ" }, { from: "္ထ", to: "ၳ" }, { from: "္ဒ", to: "ၵ" }, { from: "္ဓ", to: "ၶ" }, { from: "္[နႏ]", to: "ၷ" }, { from: "္ပ", to: "ၸ" }, { from: "္ဖ", to: "ၹ" }, { from: "္ဗ", to: "ၺ" }, { from: "္ဘ", to: "ၻ" }, { from: "္မ", to: "ၼ" }, { from: "္လ", to: "ႅ" }, { from: "ဿ", to: "ႆ" }, { from: "ွှ", to: "ႊ" }, { from: "(ၤ)([က-အ])([ျြ]?)ိ", to: "$2$3ႋ" }, { from: "(ၤ)([က-အ])([ျြ]?)ီ", to: "$2$3ႌ" }, { from: "(ၤ)([က-အ])([ျြ]?)ံ", to: "$2$3ႍ" }, { from: "(ၤ)([က-အ])([ျြ]?)([ေ]?)", to: "$2$3$4$1" }, { from: "ရ(?=([ိီ]?)[ုူွႊ])", to: "႐" }, { from: "ဏ္ဍ", to: "႑" }, { from: "ဋ္ဋ", to: "႗" }, { from: "([က-အႏဩ႐])([ၠ-ၩၬၭၰ-ၼႅႊ])?([ျ-ှ]*)?ေ", to: "ေ$1$2$3" }, { from: "ြှ", to: "ြႇ" }, { from: "([က-အႏဩ])([ၠ-ၩၬၭၰ-ၼႅ])?(ြ)", to: "$3$1$2" }, { from: "်", to: "္" }, { from: "ျ", to: "်" }, { from: "ြ", to: "ျ" }, { from: "ွ", to: "ြ" }, { from: "ှ", to: "ွ" }, { from: "([^်ည])ွ([ိီ]?)ု", to: "$1ႈ$2" }, { from: "([ရ်ြႊႈ႐])([ူွ])?([ဲံ္ိီႋႌႍႎ]?)(ု)?့", to: "$1$2$3$4႕" }, { from: "([ုနူွ])([ဲံ္ိီႋႌႍႎ]?)့", to: "$1$2႔" }, { from: "([ျ])([က-အ])([ႇ]?)([ံိီႋႌႍႎ]?)ု", to: "$1$2$3$4ဳ" }, { from: "([ျ])([က-အ])([ႇ]?)([ံိီႋႌႍႎ]?)ူ", to: "$1$2$3$4ဴ" }, { from: "([်ြညဠဥ])([ွ]?)([ံိီႋႌႍႎ]?)ု", to: "$1$2$3ဳ" }, { from: "([်ြညရ])(ွ?)([ံိီႋႌႍႎ]?)ူ", to: "$1$2$3ဴ" }, { from: "ညွ", to: "ညႇ" }, { from: "ွူ", to: "ႉ" }, { from: "ျ([ကဃဆဏတထဘယလယသဟ])", to: "ၾ$1" }, { from: "ၾ([ကဃဆဏတထဘယလယသဟ])([ြႊ])([ဲံိီႋႌႍႎ])", to: "ႄ$1$2$3" }, { from: "ၾ([ကဃဆဏတထဘယလယသဟ])([ြႊ])", to: "ႂ$1$2" }, { from: "ၾ([ကဃဆဏတထဘယလယသဟ])([ဳဴ]?)([ဲံိီႋႌႍႎ])", to: "ႀ$1$2$3" }, { from: "ျ([က-အ])([ြႊ])([ဲံိီႋႌႍႎ])", to: "ႃ$1$2$3" }, { from: "ျ([က-အ])([ြႊ])", to: "ႁ$1$2" }, { from: "ျ([က-အ])([ဳဴ]?)([ဲံိီႋႌႍႎ])", to: "ၿ$1$2$3" }, { from: "်ွ", to: "ွ်" }, { from: "်([ြႊ])", to: "$1ၽ" }, { from: "([ဳဴ])႔", to: "$1႕" }, { from: "ႏၱ", to: "ႏၲ" }, { from: "([က-အ])([ၻၦ])ာ", to: "$1ာ$2" }, { from: "ာ([ၻၦ])့", to: "ာ$1႔" }], o) }, m = function (o) { return $([{ from: "​", to: "" }, { from: "(ွ|ႇ)", to: "ှ" }, { from: "ြ", to: "ွ" }, { from: "(ျ|ၾ|ၿ|ႀ|ႁ|ႂ|ႃ|ႄ)", to: "ြ" }, { from: "(်|ၽ)", to: "ျ" }, { from: "္", to: "်" }, { from: "(ၦ|ၧ)", to: "္ဆ" }, { from: "ၪ", to: "ဉ" }, { from: "ၫ", to: "ည" }, { from: "ၬ", to: "္ဋ" }, { from: "ၭ", to: "္ဌ" }, { from: "ၮ", to: "ဍ္ဍ" }, { from: "ၯ", to: "ဍ္ဎ" }, { from: "ၰ", to: "္ဏ" }, { from: "(ၱ|ၲ)", to: "္တ" }, { from: "ၠ", to: "္က" }, { from: "ၡ", to: "္ခ" }, { from: "ၢ", to: "္ဂ" }, { from: "ၣ", to: "္ဃ" }, { from: "ၥ", to: "္စ" }, { from: "ၨ", to: "္ဇ" }, { from: "ၩ", to: "္ဈ" }, { from: "(ၳ|ၴ)", to: "္ထ" }, { from: "ၵ", to: "္ဒ" }, { from: "ၶ", to: "္ဓ" }, { from: "ၷ", to: "္န" }, { from: "ၸ", to: "္ပ" }, { from: "ၹ", to: "္ဖ" }, { from: "ၺ", to: "္ဗ" }, { from: "ၼ", to: "္မ" }, { from: "ႅ", to: "္လ" }, { from: "ဳ", to: "ု" }, { from: "ဴ", to: "ူ" }, { from: "ဿ", to: "ူ" }, { from: "ႆ", to: "ဿ" }, { from: "ံႈ", to: "ႈံ" }, { from: "ႈ", to: "ှု" }, { from: "ႉ", to: "ှူ" }, { from: "ႊ", to: "ွှ" }, { from: "ျၤ", to: "ၤျ" }, { from: "(ေ)?([က-အ])ၤ", to: "င်္$1$2" }, { from: "(ေ)?([က-အ])ႋ", to: "င်္$1$2ိ" }, { from: "(ေ)?([က-အ])ႌ", to: "င်္$1$2ီ" }, { from: "(ေ)?([က-အ])ႍ", to: "င်္$1$2ံ" }, { from: "ႎ", to: "ိံ" }, { from: "ႏ", to: "န" }, { from: "႐", to: "ရ" }, { from: "႑", to: "ဏ္ဍ" }, { from: "မာ(ၻ|႓)", to: "မ္ဘာ" }, { from: "(ၻ|႓)", to: "္ဘ" }, { from: "(႔|႕)", to: "့" }, { from: "([က-အ])့ဲ", to: "$1ဲ့" }, { from: "႖", to: "္တွ" }, { from: "႗", to: "ဋ္ဋ" }, { from: "ြ([က-အ])([က-အ])?", to: "$1ြ$2" }, { from: "([က-အ])ြ်", to: "ြ$1်" }, { from: "၇(?=[ာ-ူဲံ-းွး])", to: "ရ" }, { from: "ေ၇", to: "ေရ" }, { from: "၀(ီ|ု|ို|ူ|ံ|ွ|ှ)", to: "ဝ$1" }, { from: "([^၀၁၂၃၄၅၆၇၈၉])၀ါ", to: "$1ဝါ" }, { from: "([၀၁၂၃၄၅၆၇၈၉])၀ါ(?!း)", to: "$1ဝါ" }, { from: "^၀(?=ါ)", to: "ဝ" }, { from: "၀ိ(?! ?/)", to: "ဝိ" }, { from: "([^၀-၉])၀([^၀-၉ ]|[၊။])", to: "$1ဝ$2" }, { from: "([^၀-၉])၀(?=[\\f\\n\\r])", to: "$1ဝ" }, { from: "([^၀-၉])၀$", to: "$1ဝ" }, { from: "ေ([က-အ])(ှ)?(ျ)?", to: "$1$2$3ေ" }, { from: "([က-အ])ေ([ျြွှ]+)", to: "$1$2ေ" }, { from: "ဲွ", to: "ွဲ" }, { from: "([ိီ])ျ", to: "ျ$1" }, { from: "ွျ", to: "ျွ" }, { from: "့်", to: "့်" }, { from: "ု(ိ|ီ|ံ|့)ု", to: "ု$1" }, { from: "(ု|ူ)(ိ|ီ)", to: "$2$1" }, { from: "(ှ)(ျ|ြ)", to: "$2$1" }, { from: "ဥ(?=[့]?[်ာ])", to: "ဉ" }, { from: "ဦ", to: "ဦ" }, { from: "စျ", to: "ဈ" }, { from: "ံ(ု|ူ)", to: "$1ံ" }, { from: "ေ့ှ", to: "ှေ့" }, { from: "ေှာ", to: "ှော" }, { from: "ၚ", to: "ါ်" }, { from: "ေျှ", to: "ျှေ" }, { from: "(ိ|ီ)(ွ|ှ)", to: "$2$1" }, { from: "ာ္([က-အ])", to: "္$1ာ" }, { from: "ြင်္([က-အ])", to: "င်္$1ြ" }, { from: "္ြ်္([က-အ])", to: "်္$1ြ" }, { from: "ြ္([က-အ])", to: "္$1ြ" }, { from: "ံ္([က-အ])", to: "္$1ံ" }, { from: "႒", to: "ဋ္ဌ" }, { from: "၎", to: "၎င်း" }, { from: "၀(ါ|ာ|ံ)", to: "ဝ$1" }, { from: "ဥ္", to: "ဉ္" }, { from: "([က-အ])ြေွ", to: "$1ြွေ" }, { from: "([က-အ])ျေွ(ှ)?", to: "$1ျွ$2ေ" }, { from: "([က-အ])ွေျ", to: "$1ျွေ" }, { from: "([က-အ])ေ(္[က-အ])", to: "$1$2ေ" }, { from: "း်", to: "်း" }, { from: "ိ်|်ိ", to: "ိ" }, { from: "ို်", to: "ို" }, { from: " ့", to: "့" }, { from: "့ံ", to: "ံ့" }, { from: " ့", to: "့" }, { from: "[ိ]+", to: "ိ" }, { from: "[်]+", to: "်" }, { from: "[ွ]+", to: "ွ" }, { from: "[့]+", to: "့" }, { from: "[ီ]+", to: "ီ" }, { from: "ိီ|ီိ", to: "ီ" }, { from: "ုိ", to: "ို" }, { from: "့့", to: "့" }, { from: "ဲဲ", to: "ဲ" }, { from: "၄င်း", to: "၎င်း" }, { from: "([ိီ])္([က-အ])", to: "္$2$1" }, { from: "ံွ", to: "ွံ" }], o) }, $ = function (o, r) { for (var t = o.length, f = 0; f < t; f++) { var m = o[f], $ = m.from, n = m.to, e = new RegExp($, "g"); r = r.replace(e, n) } return r }, n = { zg2uni: m, uni2zg: f }; o.exports = n }]);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    var parent = getSelectionParent();
    parent.innerText = ywayy(parent.innerText);
});

function ywayy(text) {
    var result = "";
    if (isZg(text)) {
        result = Rabbit.zg2uni(text);
    } else if (isMM(text)) {
        result = Rabbit.uni2zg(text);
    } else {
        result = text;
    }

    return result;
}


function isZg(input) {
    let zgRegex = new RegExp("[\u1050-\u109f]|\u0020[\u103b\u107e-\u1084]|\u0020\u1031|^\u1031|^\103b|\u1038\u103b|\u1038\u1031|\u1033|\u1034|[\u102d\u102e\u1032]\u103b|\u1039[^\1000-1021]|\u1039$|\u108c");
    for (var i = 0; i < input.length; i++) {
        if (zgRegex.test(input[i])) {
            return true;
        }
    }
    return false;
}

function isMM(input) {
    let regexMM = new RegExp("[က-အ]+|[\u1025-\u1027]");
    for (var i = 0; i < input.length; i++) {
        if (regexMM.test(input[i])) {
            return true;
        }
    }
    return false;
}

function getSelectionParent() {
    var parentEl = null;
    var sel = window.getSelection();
    if (sel.rangeCount) {
        parentEl = sel.getRangeAt(0).commonAncestorContainer;
        if (parentEl.nodeType != 1) {
            parentEl = parentEl.parentNode;
        }
    }
    return parentEl;
}