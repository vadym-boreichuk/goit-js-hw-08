var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var a=o("kEUo3");const n=document.querySelector("form"),l=document.querySelector("form textarea"),f=document.querySelector("form input"),c={};!function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);t&&(f.value=t.email,l.value=t.message)}(),n.addEventListener("input",(0,a.throttle)((function(e){c[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(c))}),500)),n.addEventListener("submit",(e=>{e.preventDefault(),e.currentTarget.reset();const t=localStorage.getItem("feedback-form-state"),r=JSON.parse(t);console.log(r),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.17610fdd.js.map
