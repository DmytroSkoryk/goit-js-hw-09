!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("6JpON"),u={createBtn:document.querySelector(".form button"),inputDelay:document.querySelector('[name="delay"]'),inputAmount:document.querySelector('[name="amount"]'),inputStep:document.querySelector('[name="step"]')};u.createBtn.addEventListener("click",(function(n){var t=function(n){var t,o;(t=n,o=i,new Promise((function(e,n){setTimeout((function(){Math.random()>.3?e({position:t,delay:o}):n({position:t,delay:o})}),o)}))).then((function(t){t.position;var o=t.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){t.position;var o=t.delay;e(r).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),i+=a};n.preventDefault();for(var o=u.inputAmount.valueAsNumber,i=u.inputDelay.valueAsNumber,a=u.inputStep.valueAsNumber,c=1;c<=o;c+=1)t(c)}))}();
//# sourceMappingURL=03-promises.12256ae9.js.map
