!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);t(1);document.querySelector(".hamburger--js").addEventListener("click",(function(){document.querySelector(".navigation--js").classList.toggle("navigation--open")}));var o=document.querySelector(".action--js");console.log(o);console.log("Anna"),console.log(27),console.log("Hej, nazywam się ".concat("Anna"," i mam ").concat(27," lat"));var r,a,c=document.querySelector(".main__header--js");c.innerHTML="Tu miał być inny tekst ale go zmieniłam za pomocą js",console.log(c),console.log(c.innerHTML),function(e,n){console.log("Hej, nazywam się ".concat(n," i mam ").concat(e," lat"))}(27,"Anna"),r=".heading__paragraph--js",a="Witaj świecie",document.querySelector(r).innerHTML=a,o.addEventListener("click",(function(){var e=document.querySelector(".main__header--js");e.innerHTML="witaj, nazywam się Anna",e.classList.add("klasa-z-js")}))},function(e,n,t){}]);