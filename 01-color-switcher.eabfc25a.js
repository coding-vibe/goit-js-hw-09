!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),e=document.body,a=null;var o=function(){e.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))),t.disabled=!0};t.addEventListener("click",(function(){a=setInterval(o,1e3)}));n.addEventListener("click",(function(){t.disabled=!1,clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.eabfc25a.js.map