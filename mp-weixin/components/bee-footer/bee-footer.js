(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/bee-footer/bee-footer"],{"3c8e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=c(n("bf9d")),s=c(n("3f44")),a=n("26cb"),i=c(n("01dc"));n("0b9d");function c(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={mixins:[o.default,s.default,i.default],props:{bottom:{type:Number,default:0}},data:function(){return{sel:1,type:"",menu_style:"1",menu_cool:"1",menu_more_show:!0,menu_more_list:[{menu_icon:"",menu_title:"",menu_posttype:""},{menu_icon:"",menu_title:"",menu_posttype:""},{menu_icon:"",menu_title:"",menu_posttype:""},{menu_icon:"",menu_title:"",menu_posttype:""}],tabs:[{type:"1",tabsName:"",tabsIcon:"icon-home",selectedtabsIcon:"icon-home",id:1,url:"/pages/home/index"},{type:"1",tabsName:"",tabsIcon:"icon-faxian",selectedtabsIcon:"icon-faxian",id:2,url:"/pages/find/index"},{type:"2"},{type:"1",tabsName:"",tabsIcon:"icon-post",selectedtabsIcon:"icon-post",id:4,url:"/pages/notice/index"},{type:"1",tabsName:"",tabsIcon:"icon-mine",selectedtabsIcon:"icon-mine",id:5,url:"/pages/my/index"}],bottomData:[],bottomDataLength:0,isTabBar:[],sureType:"",sureTip:"",url:"",formData:{},uploadStatus:!0,isWeixin:"",isiOS:"",uploadImgMax:9}},computed:u({},(0,a.mapState)({getCategoryId:function(t){return t.session.categoryId},getCategoryIndex:function(t){return t.session.categoryIndex},footerIndex:function(t){return t.footerTab.footerIndex?parseInt(t.footerTab.footerIndex,10):0}})),mounted:function(){},created:function(){if(this.beebeeos.acf){var t=this.beebeeos.acf.mode_layout.style;this.style_maincolor=t.maincolor;var e=this.beebeeos.acf.mode_navi.tabbar;this.menu_more_list=e.more_list,this.menu_more_show=e.more_show,this.menu_style=e.style,this.menu_cool=e.menucool,this.tabs[0].tabsName=e.tabs.home.name,e.tabs.home.icon&&e.tabs.home.iconon?(this.tabs[0].customIcon=!0,this.tabs[0].tabsIcon=e.tabs.home.icon,this.tabs[0].show=!0,this.tabs[0].selectedtabsIcon=e.tabs.home.iconon):(this.tabs[0].customIcon=!1,this.tabs[0].show=!0),this.tabs[1].tabsName=e.tabs.faxian.name,e.tabs.faxian.icon&&e.tabs.faxian.iconon?(this.tabs[1].customIcon=!0,this.tabs[1].tabsIcon=e.tabs.faxian.icon,this.tabs[1].show=e.tabs.faxian.show,this.tabs[1].selectedtabsIcon=e.tabs.faxian.iconon):(this.tabs[1].customIcon=!1,this.tabs[1].show=e.tabs.faxian.show),this.tabs[2].show=e.tabs.more.show,this.tabs[3].tabsName=e.tabs.news.name,e.tabs.news.icon&&e.tabs.news.iconon?(this.tabs[3].customIcon=!0,this.tabs[3].tabsIcon=e.tabs.news.icon,this.tabs[3].show=e.tabs.news.show,this.tabs[3].selectedtabsIcon=e.tabs.news.iconon):(this.tabs[3].customIcon=!1,this.tabs[3].show=e.tabs.news.show),this.tabs[4].tabsName=e.tabs.mine.name,e.tabs.mine.icon&&e.tabs.mine.iconon?(this.tabs[4].customIcon=!0,this.tabs[4].tabsIcon=e.tabs.mine.icon,this.tabs[4].show=!0,this.tabs[4].selectedtabsIcon=e.tabs.mine.iconon):(this.tabs[4].customIcon=!1,this.tabs[4].show=!0)}},destroyed:function(){t.$off("uploadOver"),t.$off("uploadLength"),t.$off("uploadFail"),t.$off("uploadVideoOver")},methods:u(u({select:function(t,e){this.$store.getters["session/get"]("isLogin")&&this.setFooterIndex(parseInt(e,10)),this.$emit("click",t,e,this.isTabBar),this.sel=t.id}},(0,a.mapMutations)({setFooterIndex:"footerTab/SET_FOOTERINDEX"})),{},{footer_Open:function(){this.$refs.popup.open()},closeHomemAsk:function(){var t=this;this.bottomData.forEach((function(e,n){var o=JSON.parse(JSON.stringify(e));o.selected=!1,t.bottomData.splice(n,1,o)})),this.$refs.clickOpenQandA.close(),this.$refs.popup.close()},handleClick:function(t){},cancel:function(){this.$refs.popup.close()}})};e.default=f}).call(this,n("543d")["default"])},"793c":function(t,e,n){"use strict";n.r(e);var o=n("3c8e"),s=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=s.a},b45c:function(t,e,n){"use strict";n.r(e);var o=n("fb88"),s=n("793c");for(var a in s)"default"!==a&&function(t){n.d(e,t,(function(){return s[t]}))}(a);n("edd7");var i,c=n("f0c5"),r=Object(c["a"])(s["default"],o["b"],o["c"],!1,null,"6f97ed2c",null,!1,o["a"],i);e["default"]=r.exports},d7d3:function(t,e,n){},edd7:function(t,e,n){"use strict";var o=n("d7d3"),s=n.n(o);s.a},fb88:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var o={beeIcon:function(){return n.e("components/bee-icon/bee-icon").then(n.bind(null,"33de"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"8bf9"))},beeMenuclick:function(){return n.e("components/bee-menuclick/bee-menuclick").then(n.bind(null,"341a"))},beeBlock:function(){return Promise.all([n.e("common/vendor"),n.e("components/bee-block/bee-block")]).then(n.bind(null,"9f3f"))}},s=function(){var t=this,e=t.$createElement;t._self._c},a=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/bee-footer/bee-footer-create-component',
    {
        'components/bee-footer/bee-footer-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b45c"))
        })
    },
    [['components/bee-footer/bee-footer-create-component']]
]);