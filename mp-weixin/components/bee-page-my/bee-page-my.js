(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/bee-page-my/bee-page-my"],{"1d80":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("0b9d"),r=a(n("bf9d")),s=a(n("3f44")),i=a(n("01dc")),c=a(n("6db5")),u=n("26cb");function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p={mixins:[r.default,s.default,i.default],data:function(){return{navActive:!1,imagescale:0,bee_custom_cell:[],role:"",styledefault:!1,checked:!1,text_dianzan:"",text_shoucang:"",text_pingfen:"",text_pinglun:"",text_face:""}},computed:f(f({},(0,u.mapState)({footerIndex:function(e){return e.footerTab.footerIndex?parseInt(e.footerTab.footerIndex,10):0}})),{},{userId:function(){return this.$store.getters["session/get"]("userId")},userInfo:function(){var e=this.$store.getters["jv/get"]("user/user");return e}}),watch:{userInfo:{handler:function(e){var t=this;this.$nextTick((function(){"subscriber"===t.userInfo.user.role?t.role="订阅者":"contributor"===t.userInfo.user.role?t.role="贡献者":(t.userInfo.user.role,t.role)}))}}},created:function(){if(this.beebeeos.acf){this.bee_custom_cell=this.beebeeos.acf.mode_page.page_mine.cell;var t=this.beebeeos.acf.mode_single.page_single.set_all.all.texts;this.text_face=t.text1,this.text_post=t.text4,this.text_dianzan=t.text5,this.text_pinglun=t.text6,this.text_pingfen=t.text7,this.text_shoucang=t.text8}(e.getSystemInfoSync().version>"7.0.12"&&"ios"===e.getSystemInfoSync().platform||e.getSystemInfoSync().version>"7.0.13"&&"android"===e.getSystemInfoSync().platform&&"SMARTISAN"!=e.getSystemInfoSync().brand)&&(this.styledefault=!0)},ready:function(){},methods:f(f({},(0,u.mapMutations)({setFooterIndex:"footerTab/SET_FOOTERINDEX"})),{},{pageload:function(){this.checked=this.theme!==o.THEME_DEFAULT},preloaduser:function(){if(this.userId){this.userInfo&&("subscriber"===this.userInfo.user.role?this.role="订阅者":"contributor"===this.userInfo.user.role?this.role="贡献者":(this.userInfo.user.role,this.role));var e={access_token:this.userId};this.$store.dispatch("jv/get",["mp/v1/user/user",{params:e}])}},changeCheck:function(e){getApp().globalData.themeChanged(e?o.THEME_DARK:o.THEME_DEFAULT)},login:function(){this.mpLoginMode()},logout:function(){this.$refs.popuplogin.open()},handleClickOk:function(){var t=this;this.$store.dispatch("session/logout").then((function(){e.clearStorage(),t.$refs.popuplogin.close()}))},handleClickCancel:function(){this.$refs.popuplogin.close()},clear:function(t){var n=this;this.$store.dispatch("session/logout").then((function(){e.clearStorage(),n.setFooterIndex(parseInt(0,10))})),e.showToast({title:"清除完毕"})},openWrapTab:function(){this.$emit("openWrapTab")},scroll:function(e){var t=this,n=(e.detail.deltaY,e.detail.scrollTop),o=t.windowHeight,r=e.detail.scrollHeight-50;n>88?this.navActive=!0:(this.imagescale=n,this.navActive=!1)},subscribeMessage:function(t,n){var o={access_token:this.$store.getters["session/get"]("accessToken")};o.openid=this.$store.getters["session/get"]("userOpenId"),o.template=t,o.status=n,o.pages=getCurrentPages()[0].route,o.platform=e.getSystemInfoSync().platform,o.program="WeChat",c.default.postSubscribe({params:o}).then((function(e){console.log("postSubscribe",e)}))},clickSubscribe:function(t){if(this.$store.getters["session/get"]("isLogin")){var n=[t],o=this;e.requestSubscribeMessage({tmplIds:n,success:function(t){if("requestSubscribeMessage:ok"==t.errMsg){for(var r=0;r<n.length;r++){var s=n[r];o.subscribeMessage(s,"accept")}e.showToast({title:"订阅完成",icon:"success",duration:1e3})}},fail:function(e){}})}else this.mpLoginMode()}})};t.default=p}).call(this,n("543d")["default"])},"3e4a":function(e,t,n){"use strict";n.r(t);var o=n("7ce2"),r=n("6fce");for(var s in r)"default"!==s&&function(e){n.d(t,e,(function(){return r[e]}))}(s);n("fbc3");var i,c=n("f0c5"),u=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"6824fa49",null,!1,o["a"],i);t["default"]=u.exports},"6fce":function(e,t,n){"use strict";n.r(t);var o=n("1d80"),r=n.n(o);for(var s in o)"default"!==s&&function(e){n.d(t,e,(function(){return o[e]}))}(s);t["default"]=r.a},"7ce2":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return o}));var o={uniNavBar:function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"8737"))},beeWeather:function(){return Promise.all([n.e("common/vendor"),n.e("components/bee-weather/bee-weather")]).then(n.bind(null,"01a3"))},beeBlock:function(){return Promise.all([n.e("common/vendor"),n.e("components/bee-block/bee-block")]).then(n.bind(null,"9f3f"))},beeCellItem:function(){return n.e("components/bee-cell-item/bee-cell-item").then(n.bind(null,"def1"))},beeIcon:function(){return n.e("components/bee-icon/bee-icon").then(n.bind(null,"33de"))},uSwitch:function(){return n.e("components/u-switch/u-switch").then(n.bind(null,"581b"))},beeMenuclick:function(){return n.e("components/bee-menuclick/bee-menuclick").then(n.bind(null,"341a"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"8bf9"))}},r=function(){var e=this,t=e.$createElement;e._self._c},s=[]},c40e:function(e,t,n){},fbc3:function(e,t,n){"use strict";var o=n("c40e"),r=n.n(o);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/bee-page-my/bee-page-my-create-component',
    {
        'components/bee-page-my/bee-page-my-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3e4a"))
        })
    },
    [['components/bee-page-my/bee-page-my-create-component']]
]);
