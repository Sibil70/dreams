!function(e){var t={};function n(c){if(t[c])return t[c].exports;var o=t[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(c,o,function(t){return e[t]}.bind(null,o));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);const c=document.querySelector(".registration"),o=document.querySelector(".content"),s=document.querySelector(".platform"),r=document.querySelectorAll(".form__checkbox"),i=document.querySelector(".form");let l=[];const d=a();for(let e=0;e<r.length;e++)l.push(r[e]);function a(){const e=document.createElement("div");e.className="content-template",e.innerHTML='<div class="content__wrap">\n        <div class="content__col content__col-left">\n            <ul class="content__list">\n                <li class="content__choise"></li>\n                <li class="content__choise-sc"></li>\n                <li class="content__choise-trd"></li>\n                <li class="content__prize"></li>\n            </ul>\n        </div>\n        <div class="content__col content__col-right">\n            <div class="content__text"></div>\n        </div>\n    </div>';let t=e.querySelector(".content__choise"),n=e.querySelector(".content__choise-sc"),r=e.querySelector(".content__choise-trd"),i=e.querySelector(".content__prize"),l=e.querySelector(".content__text");return{clear(){t.innerHTML="",n.innerHTML="",r.innerHTML="",i.innerHTML="",l.innerHTML=""},open(){o.appendChild(e),o.style.display="",s.style.display="",c.style.display=""},setChoise(e){t.innerHTML=e},setChoiseSc(e){n.innerHTML=e},setChoiseTrd(e){r.innerHTML=e},setPrize(e){i.innerHTML=e},setText(e){l.innerHTML=e}}}function h(){window.scrollTo({top:i.offsetTop,behavior:"smooth"})}o.style.display="none",s.style.display="none",c.style.display="none",a(),r.forEach(function(e){e.addEventListener("change",()=>{"iphone"==e.id&&0==l[1].checked&&0==l[2].checked?(d.clear(),d.open(),d.setChoise("Iphone xs"),d.setPrize("Цена 1000$"),d.setText("Цена для трейдера Olymp Trade - 50$ и 2 дня торговли на платформе."),h()):"iphone"==e.id&&l[1].checked&&0==l[2].checked?(d.clear(),d.open(),d.setChoise("Iphone Xs - Цена 1000$"),d.setChoiseSc("Audi A5 - Цена 30000$"),d.setPrize("31000$"),d.setText("Цена для трейдера Olymp Trade - 50$ и 3 часа торговли каждый вечер."),h()):"iphone"==e.id&&l[1].checked&&l[2].checked?(d.clear(),d.open(),d.setChoise("Iphone Xs - Цена 1000$"),d.setChoiseSc("Audi A5 - Цена 30000$"),d.setChoiseTrd("Финансовая независимость - бесценно"),d.setPrize(""),d.setText("Цена для трейдера Olymp Trade - 50$ и занятие любимым делом в любой точке мира всю вашу жизнь."),h()):"iphone"==e.id&&0==l[1].checked&&l[2].checked?(d.clear(),d.open(),d.setChoise("Iphone Xs - Цена 1000$"),d.setChoiseSc("Финансовая независимость - бесценно"),d.setPrize(""),d.setText("Цена для трейдера Olymp Trade - 50$ и занятие любимым делом в любой точке мира всю вашу жизнь."),h()):"car"==e.id&&0==l[0].checked&&0==l[2].checked?(d.clear(),d.open(),d.setChoise("Audi A5"),d.setPrize("Цена 30000$"),d.setText("Цена для трейдера Olymp Trade - 50$ и 2 часа торговли каждый вечер."),h()):"car"==e.id&&l[0].checked&&0==l[2].checked?(d.clear(),d.open(),d.setChoise("Iphone Xs - Цена 1000$"),d.setChoiseSc("Audi A5 - Цена 30000$"),d.setPrize("31000$"),d.setText("Цена для трейдера Olymp Trade - 50$ и занятие любимым делом в любой точке мира всю вашу жизнь."),h()):"car"==e.id&&l[0].checked&&l[2].checked?(d.clear(),d.open(),d.setChoise("Iphone Xs - Цена 1000$"),d.setChoiseSc("Audi A5 - Цена 30000$"),d.setChoiseTrd("Финансовая независимость - бесценно"),d.setPrize(""),d.setText("Цена для трейдера Olymp Trade - 50$ и занятие любимым делом в любой точке мира всю вашу жизнь."),h()):"car"==e.id&&0==l[0].checked&&l[2].checked?(d.clear(),d.open(),d.setChoise("Audi A5 - Цена 30000$"),d.setChoiseSc("Финансовая независимость - бесценно"),d.setPrize(""),d.setText("Цена для трейдера Olymp Trade - 50$ и 2 часа торговли каждый вечер."),h()):"palm"==e.id&&0==l[0].checked&&0==l[1].checked?(d.clear(),d.open(),d.setChoise("Финансовая независимость"),d.setPrize(""),d.setText("Цена для трейдера Olymp Trade - 50$ и занятие любимым делом в любой точке мира всю вашу жизнь"),h()):"palm"==e.id&&l[0].checked&&0==l[1].checked?(d.clear(),d.open(),d.setChoise("Iphone Xs - Цена 1000$"),d.setChoiseSc("Финансовая независимость - бесценно"),d.setPrize(""),d.setText("Цена для трейдера Olymp Trade - 50$ и занятие любимым делом в любой точке мира всю вашу жизнь."),h()):"palm"==e.id&&l[0].checked&&l[1].checked?(d.clear(),d.open(),d.setChoise("Iphone Xs - Цена 1000$"),d.setChoiseSc("Audi A5 - Цена 30000$"),d.setChoiseTrd("Финансовая независимость - бесценно"),d.setPrize(""),d.setText("Цена для трейдера Olymp Trade - 50$ и занятие любимым делом в любой точке мира всю вашу жизнь."),h()):"palm"==e.id&&0==l[0].checked&&l[1].checked?(d.clear(),d.open(),d.setChoise("Audi A5 - Цена 30000$"),d.setChoiseSc("Финансовая независимость - бесценно"),d.setPrize(""),d.setText("Цена для трейдера Olymp Trade - 50$ и 2 часа торговли каждый вечер."),h()):"iphone"!=e.id&&"car"!=e.id&&"palm"!=e.id||d.clear()})})},function(e,t){}]);