(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/bee-auth/bee-auth"],{7642:function(e,t,n){"use strict";n.r(t);var o=n("eb83"),a=n("a0dd");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("f6d8");var c,i=n("f0c5"),s=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,"6aa46131",null,!1,o["a"],c);t["default"]=s.exports},a0dd:function(e,t,n){"use strict";n.r(t);var o=n("ecc0"),a=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=a.a},eb83:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}));var o={beeIcon:function(){return n.e("components/bee-icon/bee-icon").then(n.bind(null,"33de"))}},a=function(){var e=this,t=e.$createElement;e._self._c},r=[]},ecc0:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n("a34a")),a=s(n("bf9d")),r=s(n("3f44")),c=(n("0b9d"),n("6130")),i=s(n("01dc"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,o,a,r,c){try{var i=e[r](c),s=i.value}catch(u){return void n(u)}i.done?t(s):Promise.resolve(s).then(o,a)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var r=e.apply(t,n);function c(e){u(r,o,a,c,i,"next",e)}function i(e){u(r,o,a,c,i,"throw",e)}c(void 0)}))}}var f={mixins:[a.default,r.default,i.default],data:function(){return{canIUseGetUserProfile:!1,sitename:"登录"}},computed:{},created:function(){wx.getUserProfile&&(this.canIUseGetUserProfile=!0)},methods:{getUserProfile:function(){var t=this;return new Promise((function(n){e.getUserProfile({desc:"用于完善用户资料",success:function(a){e.login({success:function(){var r=d(o.default.mark((function r(c){var i;return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return i={code:c.code,iv:encodeURIComponent(a.iv),encryptedData:encodeURIComponent(a.encryptedData)},o.next=3,t.$store.dispatch("session/noSenseMPLogin",i).then((function(o){if(n(o),o&&o.data&&(t.$emit("login"),o.data.access_token&&(t.logind(),e.showToast({title:"登录成功",duration:2e3}),e.getStorage({key:"page",success:function(t){e.redirectTo({url:t.data})}})),"error"===o.data.code))switch(o.data.data.code.code){case-41003:e.showToast({icon:"none",title:"签名不同步，请重新登录",duration:2e3});break;default:e.showToast({title:"登录失败，重试登录",duration:2e3})}})).catch((function(e){console.log(e)}));case 3:case"end":return o.stop()}}),r)})));function c(e){return r.apply(this,arguments)}return c}()})}})}))},handleGetUserProfile:function(){var t=this,n=function(n){var o=n.encryptedData,a=n.iv,r=!o||!a;r?e.showToast({icon:"none",title:"请升级您的微信到最新版，当前版本不支持微信登录功能",duration:3e3}):t.getmpParams({encryptedData:o,iv:a})};wx.getUserProfile({desc:"用于完善用户资料",success:function(e){n(e)}})},getmpParams:function(t){var n=this,o=t.encryptedData,a=t.iv;return new Promise((function(t){e.login({success:function(e){if("login:ok"===e.errMsg){var r=e.code,c={code:r,iv:a,encryptedData:o};n.$store.dispatch("session/setParams",c),n.getParams(c),t()}}})}))},getParams:function(){var e={},t=this.$store.getters["session/get"]("params");t&&(e.code=t.code,e.iv=t.iv,e.encryptedData=encodeURIComponent(t.encryptedData)),this.noSenseLogin(e)},noSenseLogin:function(t){var n=this;return d(o.default.mark((function a(){return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n,e.setStorage({key:"page",data:(0,c.getCurUrl)()}),o.next=4,n.$store.dispatch("session/noSenseMPLogin",t).then((function(t){if(console.log(t,"微信无感"),t&&t.data&&(n.$emit("login"),t.data.access_token&&(n.logind(),e.showToast({title:"登录成功",duration:2e3}),e.getStorage({key:"page",success:function(t){console.log("提取缓存"),e.redirectTo({url:t.data})}})),"error"===t.data.code))switch(t.data.data.code.code){case-41003:e.showToast({icon:"none",title:"签名不同步，请重新登录",duration:2e3}),n.login();break;default:e.showToast({title:"登录失败，重试登录",duration:2e3})}})).catch((function(e){console.log(e)}));case 4:case"end":return o.stop()}}),a)})))()},close:function(){this.$emit("close")}}};t.default=f}).call(this,n("543d")["default"])},f50f:function(e,t,n){},f6d8:function(e,t,n){"use strict";var o=n("f50f"),a=n.n(o);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/bee-auth/bee-auth-create-component',
    {
        'components/bee-auth/bee-auth-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7642"))
        })
    },
    [['components/bee-auth/bee-auth-create-component']]
]);
