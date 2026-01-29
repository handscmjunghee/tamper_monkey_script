// ==UserScript==

// @name         微信夜间模式

// @namespace    http://tampermonkey.net/

// @version      1.0.0

// @description  控制微信黑色模式，减少刺眼

// @author       handscmjunghee

// @match        *://wx.qq.com/*

// @match        *://wx2.qq.com/*

// @homepageURL  https://github.com/handscmjunghee/tamper_monkey_script

// @source       https://github.com/handscmjunghee/tamper_monkey_script

// @grant        none

// @license      MIT

// ==/UserScript==

(function () {
    'use strict';

    function applyStyle() {
        const title = document.querySelector('#chatArea');
        if (title) {
            title.style.background = '#707070';
        }

        const title2 = document.querySelector('.title_wrap');
        if (title2) {
            title2.style.background = '#707070';
        }
    }

    applyStyle();

    const observer = new MutationObserver(() => {
        applyStyle();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
