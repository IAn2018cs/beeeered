(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/bee-page-home/bee-page-home"],{"224c":function(e,t,o){"use strict";o.r(t);var a=o("3eb1"),n=o.n(a);for(var s in a)"default"!==s&&function(e){o.d(t,e,(function(){return a[e]}))}(s);t["default"]=n.a},"3eb1":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(o("a34a")),n=i(o("bf9d")),s=(i(o("6db5")),o("26cb"));o("2ef0");function i(e){return e&&e.__esModule?e:{default:e}}function p(e,t,o,a,n,s,i){try{var p=e[s](i),r=p.value}catch(h){return void o(h)}p.done?t(r):Promise.resolve(r).then(a,n)}function r(e){return function(){var t=this,o=arguments;return new Promise((function(a,n){var s=e.apply(t,o);function i(e){p(s,a,n,i,r,"next",e)}function r(e){p(s,a,n,i,r,"throw",e)}i(void 0)}))}}function h(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?h(Object(o),!0).forEach((function(t){u(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):h(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var m=null,g={components:{},mixins:[n.default],props:{showindex:{type:Number,default:0}},data:function(){return{homepullcurrent:0,homepulldotcurrent:0,headerShow:!0,showBlocks:!1,viewscrolltop:null,swiperHeight:"",topperHeight:"",subHeight:"",subBulletHeight:"",mainTop:"",mainHeight:"",navboxTop:"",openSessionsub:!1,navActive:!0,navFixed:!1,freshani:!1,page:1,per_page:10,iscatsarea:!1,loadingType:!1,loading:!1,triggered:!1,face_state:"",post_state:"",postcats:[],poststate:[],catsids:"",stateids:"",hometabmenu:[{}],navrightshow_nav:!0,navrightshow_fresh:!0,navrightshow_cats:!0}},computed:c({},(0,s.mapState)({homecategoryIndex:function(e){return e.session.homecategoryIndex},footerIndex:function(e){return e.footerTab.footerIndex?parseInt(e.footerTab.footerIndex,10):0}})),created:function(){this.beebeeos.acf&&(this.hometabmenu=this.beebeeos.acf.mode_page.page_home.menu?this.beebeeos.acf.mode_page.page_home.menu:[{menu_posttype:"beebee_face",menu_title:"挂件"}],this.$emit("hometabmenu",this.hometabmenu),this.hometabmenu[this.homecategoryIndex].loaded=!0,this.subBulletHeight=this.beebeeos.acf.mode_page.page_home.pull.type_swiper.length<2?0:37.5*this.beebeeos.acf.mode_page.page_home.pull.custom.height/375,this.beebeeos.acf.mode_page.page_home.pull.type_swiper.length<2||"0"===this.beebeeos.acf.mode_page.page_home.pull.custom.bullet?this.subBulletHeight=0:"1"===this.beebeeos.acf.mode_page.page_home.pull.custom.bullet?this.subBulletHeight=2:"2"===this.beebeeos.acf.mode_page.page_home.pull.custom.bullet?this.subBulletHeight=30:"3"===this.beebeeos.acf.mode_page.page_home.pull.custom.bullet?this.subBulletHeight=20:this.subBulletHeight=0)},destroyed:function(){e.$off("logind")},onReady:function(){0===this.footerIndex&&this.pageload()},onPullDownRefresh:function(){this.refreshPage()},onReachBottom:function(){this.pullDown()},methods:c(c({},(0,s.mapMutations)({setHomeCategoryIndex:"session/SET_HOMECATEGORYINDEX"})),{},{pageload:function(){var e=this;return r(a.default.mark((function t(){var o;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getLayoutHeight(),e.beebeeos.acf.mode_page.page_home.show&&(e.pageList=e.$refs.pagehome,e.pageList[e.homecategoryIndex].page=1,e.pageList[e.homecategoryIndex].isResetList=!0,e.pageList[e.homecategoryIndex].loadingType="loading",o={post_type:e.hometabmenu[e.homecategoryIndex].menu_posttype},"beebee_face"===e.hometabmenu[e.homecategoryIndex].menu_posttype?o.per_page=e.beebeeos.acf.mode_single.page_single.set_face.face.per_page:"post"===e.hometabmenu[e.homecategoryIndex].menu_posttype||"posts"===e.hometabmenu[e.homecategoryIndex].menu_posttype?o.per_page=e.beebeeos.acf.mode_single.page_single.set_post.post.per_page:o.per_page=e.per_page,"beebee_face"===e.hometabmenu[e.homecategoryIndex].menu_posttype&&e.hometabmenu[e.homecategoryIndex].beebee_face_cats?o.beebee_face_cats=e.hometabmenu[e.homecategoryIndex].beebee_face_cats:"post"!==e.hometabmenu[e.homecategoryIndex].menu_posttype&&"posts"!==e.hometabmenu[e.homecategoryIndex].menu_posttype||!e.hometabmenu[e.homecategoryIndex].categories||(o.categories=e.hometabmenu[e.homecategoryIndex].categories),e.pageList[e.homecategoryIndex].sun=o,e.pageList[e.homecategoryIndex].loadThreads(),e.postcats=[]),e.beebeeos.acf.mode_single.page_single.set_all.all.navrightshow&&(-1!=e.beebeeos.acf.mode_single.page_single.set_all.all.navrightshow.indexOf("nav")?e.navrightshow_nav=!0:e.navrightshow_nav=!1,-1!=e.beebeeos.acf.mode_single.page_single.set_all.all.navrightshow.indexOf("fresh")?e.navrightshow_fresh=!0:e.navrightshow_fresh=!1),e.$nextTick((function(){setTimeout((function(){e.getNavboxTop(),e.showBlocks=!0}),400);e.$refs.hometab&&e.$refs.hometab.getTabRect(),e.$refs.hometab2&&e.$refs.hometab2.getTabRect()}));case 4:case"end":return t.stop()}}),t)})))()},getLayoutHeight:function(){var e=this;return r(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.subHeight=e.beebeeos.acf.mode_page.page_home.pull.open?e.beebeeos.acf.mode_page.page_home.pull.custom.height-20:0,!e.openSessionsub&&e.beebeeos.acf.mode_page.page_home.pull.open&&(e.openSessionsub=!0,e.navActive=!1,e.navFixed=!1);case 2:case"end":return t.stop()}}),t)})))()},getNavboxTop:function(){var t=this;return r(a.default.mark((function o(){var n;return a.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,t.$uGetRect(".session-nav");case 2:n=o.sent,t.navboxTop=n.top,t.beebeeos.acf.mode_ads.ads_other.home_chaping.open&&(e.createInterstitialAd&&(m=e.createInterstitialAd({adUnitId:t.beebeeos.acf.mode_ads.ads_other.home_chaping.data}),m.onLoad((function(){})),m.onError((function(e){})),m.onClose((function(){}))),m&&m.show().catch((function(e){console.error(e)})));case 5:case"end":return o.stop()}}),o)})))()},getSwipperHeight:function(){var e=this;return r(a.default.mark((function t(){var o;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$uGetRect(".page-item-".concat(e.homecategoryIndex));case 2:o=t.sent,e.swiperHeight=o.height,e.triggered=!1;case 5:case"end":return t.stop()}}),t)})))()},homepullcurrentHandle:function(e){var t=e.detail,o=t.current,a=t.source;"autoplay"!==a&&"touch"!==a||(this.homepulldotcurrent=o)},homepullChange:function(e){var t=e.detail,o=t.current,a=t.source;"autoplay"!==a&&"touch"!==a||(this.homepullcurrent=o)},homepulldot:function(e){this.homepullcurrent=e,this.homepulldotcurrent=e},loadType:function(e,t){this.pageList[this.homecategoryIndex].loadingType=e,this.loadingType=this.pageList[this.homecategoryIndex].loadingType,this.freshani=!1},refreshPage:function(){this.triggered=!0,this.pageList=this.$refs.pagehome,this.pageList[this.homecategoryIndex].page=1,this.pageList[this.homecategoryIndex].isResetList=!0,this.pageList[this.homecategoryIndex].loadingType="loading",this.freshani=!0;var e={post_type:this.hometabmenu[this.homecategoryIndex].menu_posttype,per_page:this.per_page};this.pageList[this.homecategoryIndex].sun=e,this.pageList[this.homecategoryIndex].threads=[],this.pageList[this.homecategoryIndex].loadThreads(),this.postcats=[]},pullDown:function(){if("more"===this.loadingType){this.pageList=this.$refs.pagehome,this.pageList[this.homecategoryIndex].page+=1;this.hometabmenu[this.homecategoryIndex].menu_posttype;var e={post_type:this.hometabmenu[this.homecategoryIndex].menu_posttype,per_page:this.per_page};"beebee_face"===this.hometabmenu[this.homecategoryIndex].menu_posttype?e.per_page=this.beebeeos.acf.mode_single.page_single.set_face.face.per_page:"post"===this.hometabmenu[this.homecategoryIndex].menu_posttype||"posts"===this.hometabmenu[this.homecategoryIndex].menu_posttype?e.per_page=this.beebeeos.acf.mode_single.page_single.set_post.post.per_page:e.per_page=this.per_page,"beebee_face"===this.hometabmenu[this.homecategoryIndex].menu_posttype?e.per_page=this.beebeeos.acf.mode_single.page_single.set_face.face.per_page:"post"===this.hometabmenu[this.homecategoryIndex].menu_posttype||"posts"===this.hometabmenu[this.homecategoryIndex].menu_posttype?e.per_page=this.beebeeos.acf.mode_single.page_single.set_post.post.per_page:e.per_page=this.per_page,"beebee_face"===this.hometabmenu[this.homecategoryIndex].menu_posttype&&this.hometabmenu[this.homecategoryIndex].beebee_face_cats?e.beebee_face_cats=this.hometabmenu[this.homecategoryIndex].beebee_face_cats:"post"!==this.hometabmenu[this.homecategoryIndex].menu_posttype&&"posts"!==this.hometabmenu[this.homecategoryIndex].menu_posttype||!this.hometabmenu[this.homecategoryIndex].categories||(e.categories=this.hometabmenu[this.homecategoryIndex].categories),this.pageList[this.homecategoryIndex].sun=e,this.pageList[this.homecategoryIndex].isResetList=!1,this.pageList[this.homecategoryIndex].loadThreads()}},scroll:function(e){e.detail.scrollTop>=this.subHeight-this.navbarHeight?this.navActive=!0:this.navActive=!1;var t=this.openSessionsub?this.navboxTop+this.subHeight-2*this.navbarHeight:this.navboxTop-this.navbarHeight;e.detail.scrollTop>=t?this.navFixed=!0:this.navFixed=!1},openWrapTab:function(){this.$emit("openWrapTab")},toggleTab:function(e){var t=this;return r(a.default.mark((function o(){var n;return a.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:t.setHomeCategoryIndex(e.index),t.pageList=t.$refs.pagehome,0===t.pageList[t.homecategoryIndex].threads.length?(t.pageList[t.homecategoryIndex].page=1,t.pageList[t.homecategoryIndex].isResetList=!0,t.pageList[t.homecategoryIndex].loadingType="loading",n={post_type:t.hometabmenu[t.homecategoryIndex].menu_posttype},"beebee_face"===t.hometabmenu[t.homecategoryIndex].menu_posttype?n.per_page=t.beebeeos.acf.mode_single.page_single.set_face.face.per_page:"post"===t.hometabmenu[t.homecategoryIndex].menu_posttype||"posts"===t.hometabmenu[t.homecategoryIndex].menu_posttype?n.per_page=t.beebeeos.acf.mode_single.page_single.set_post.post.per_page:n.per_page=t.per_page,"beebee_face"===t.hometabmenu[t.homecategoryIndex].menu_posttype&&t.hometabmenu[t.homecategoryIndex].beebee_face_cats?n.beebee_face_cats=t.hometabmenu[t.homecategoryIndex].beebee_face_cats:"post"!==t.hometabmenu[t.homecategoryIndex].menu_posttype&&"posts"!==t.hometabmenu[t.homecategoryIndex].menu_posttype||!t.hometabmenu[t.homecategoryIndex].categories||(n.categories=t.hometabmenu[t.homecategoryIndex].categories),t.pageList[t.homecategoryIndex].sun=n,t.pageList[t.homecategoryIndex].threads=[],t.pageList[t.homecategoryIndex].loadThreads()):t.getSwipperHeight(),t.loadingType=t.pageList[t.homecategoryIndex].loadingType;case 4:case"end":return o.stop()}}),o)})))()},swiperChange:function(e){var t={};t.index=e.detail.current,t.menu_title=this.hometabmenu[e.detail.current].name,t.item=this.hometabmenu[e.detail.current],this.toggleTab(t)}})};t.default=g}).call(this,o("543d")["default"])},"5ab2":function(e,t,o){"use strict";var a=o("7076"),n=o.n(a);n.a},7076:function(e,t,o){},eea7:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return s})),o.d(t,"a",(function(){return a}));var a={uniNavBar:function(){return o.e("components/uni-nav-bar/uni-nav-bar").then(o.bind(null,"8737"))},beeMenuclick:function(){return o.e("components/bee-menuclick/bee-menuclick").then(o.bind(null,"341a"))},beeBlock:function(){return Promise.all([o.e("common/vendor"),o.e("components/bee-block/bee-block")]).then(o.bind(null,"9f3f"))},uTabs:function(){return o.e("components/u-tabs/u-tabs").then(o.bind(null,"3422"))},uLoading:function(){return o.e("components/u-loading/u-loading").then(o.bind(null,"60e3"))},beeContentPage:function(){return Promise.all([o.e("common/vendor"),o.e("components/bee-content-page/bee-content-page")]).then(o.bind(null,"7469"))}},n=function(){var e=this,t=e.$createElement,o=(e._self._c,e.beebeeos.acf.mode_page.page_home.pull.open&&"1"===e.beebeeos.acf.mode_page.page_home.pull.type?e.__map(e.beebeeos.acf.mode_page.page_home.pull.type_swiper,(function(t,o){var a=e.__get_orig(t),n=t.menu_title&&!(e.beebeeos.acf.mode_page.page_home.pull.type_swiper.length<2||"0"===e.beebeeos.acf.mode_page.page_home.pull.custom.bullet)?Number(e.beebeeos.acf.mode_page.page_home.pull.custom.uuh):null;return{$orig:a,m0:n}})):null),a=e.beebeeos.acf.mode_page.page_home.pull.open&&"1"===e.beebeeos.acf.mode_page.page_home.pull.type&&e.beebeeos.acf.mode_page.page_home.pull.type_swiper.length>1&&"0"!=e.beebeeos.acf.mode_page.page_home.pull.custom.bullet&&"3"===e.beebeeos.acf.mode_page.page_home.pull.custom.bullet?Number(e.homepulldotcurrent+1):null,n=e.beebeeos.acf.mode_page.page_home.pull.open&&"1"===e.beebeeos.acf.mode_page.page_home.pull.type&&e.beebeeos.acf.mode_page.page_home.pull.type_swiper.length>1&&"0"!=e.beebeeos.acf.mode_page.page_home.pull.custom.bullet&&"3"===e.beebeeos.acf.mode_page.page_home.pull.custom.bullet?Number(e.beebeeos.acf.mode_page.page_home.pull.type_swiper.length):null;e.$mp.data=Object.assign({},{$root:{l0:o,m1:a,m2:n}})},s=[]},f4fa:function(e,t,o){"use strict";o.r(t);var a=o("eea7"),n=o("224c");for(var s in n)"default"!==s&&function(e){o.d(t,e,(function(){return n[e]}))}(s);o("5ab2");var i,p=o("f0c5"),r=Object(p["a"])(n["default"],a["b"],a["c"],!1,null,"f31661de",null,!1,a["a"],i);t["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/bee-page-home/bee-page-home-create-component',
    {
        'components/bee-page-home/bee-page-home-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f4fa"))
        })
    },
    [['components/bee-page-home/bee-page-home-create-component']]
]);
