function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");const u={createBtn:document.querySelector(".form button"),inputDelay:document.querySelector('[name="delay"]'),inputAmount:document.querySelector('[name="amount"]'),inputStep:document.querySelector('[name="step"]')};function l(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}u.createBtn.addEventListener("click",(function(t){t.preventDefault();const n=u.inputAmount.valueAsNumber;let o=u.inputDelay.valueAsNumber;const r=u.inputStep.valueAsNumber;for(let t=1;t<=n;t+=1)l(t,o).then((({position:n,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:n,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)})),o+=r}));
//# sourceMappingURL=03-promises.ce5b0e0f.js.map