"use strict";(()=>{var n="data-theme",i=r=>{var e;return r==="system"&&((e=window==null?void 0:window.matchMedia)===null||e===void 0?void 0:e.call(window,"(prefers-color-scheme: dark)").matches)||r==="dark"},o=()=>{let r=localStorage.getItem(n),e=r!==null&&["system","dark","light"].includes(r)?r:"light";return{mode:e,isDark:i(e)}};var t=r=>{let e=()=>{let a=o();r(a)};return e(),window.addEventListener("storage",e),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e),()=>{window.removeEventListener("storage",e),window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",e)}};document.body.setAttribute("data-theme",o().isDark?"dark":"light"),t(({isDark:r})=>{document.body.setAttribute("data-theme",r?"dark":"light")});})();
