!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};t.startBtn.addEventListener("click",(function(){timerId=setInterval((function(){document.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.startBtn.disabled=!0,t.stopBtn.disabled=!1})),t.stopBtn.addEventListener("click",(function(){clearInterval(timerId),t.startBtn.disabled=!1,t.stopBtn.disabled=!0})),t.stopBtn.disabled=!0}();
//# sourceMappingURL=01-color-switcher.03ae2a99.js.map
