(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/bee-sharebox/bee-sharebox"],{"01ba":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n("a34a")),o=n("0b9d"),r=(s(n("6db5")),s(n("66fd")));s(n("c602"));function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t,n,i,o,r,s){try{var a=e[r](s),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(i,o)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var r=e.apply(t,n);function s(e){l(r,i,o,s,a,"next",e)}function a(e){l(r,i,o,s,a,"throw",e)}s(void 0)}))}}var p=[],d={data:function(){return{}},globalData:{themeChanged:function(t){r.default.prototype.$u.currentTheme=t,p.forEach((function(e){e(t)})),e.setStorage({key:"theme",data:t})},watchThemeChange:function(e){p.indexOf(e)<0&&p.push(e)},unWatchThemeChange:function(e){var t=p.indexOf(e);t>-1&&p.splice(t,1)}},onLaunch:function(){var t=this;return f(i.default.mark((function n(){var r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return wx.cloud.init({env:"cloud1-9g3wyn3mebb4b2c7",traceUser:!0}),r=function(){var n=f(i.default.mark((function n(){var r,s,a,c;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("jv/get",["acf/v3/options/options",{}]);case 2:if(r=n.sent,e.$emit("inited",r),console.log("%c\n       ","font-size:100px;background:url('"+r.acf.mode_common.site.tip.tip1.replace(/\\n/g,"\n").replace(/\%c/g,"%c")+"') no-repeat;background-size:contain;"),console.log(r.acf.mode_common.site.tip.tip2.replace(/\\n/g,"\n").replace(/\%c/g,"%c"),"font-weight:bold;"),console.log(r.acf.mode_common.site.tip.tip3.replace(/\\n/g,"\n").replace(/\%c/g,"%c"),"color:#FFB800;font-weight:bold;"),s=t.$store.getters["session/get"]("userId"),t.$store.getters["session/get"]("userOpenId"),{},!s){n.next=16;break}return a={access_token:s},n.next=14,t.$store.dispatch("jv/get",["mp/v1/user/user",{params:a}]);case 14:n.sent,e.setStorageSync(o.STORGE_GET_USER_TIME,(new Date).getTime());case 16:({}),c=getCurrentPages(),c.length>0&&c[c.length-1],t.$store.state.beebeeo.error.code||t.$store.dispatch("beebeeo/setError",{loading:!1});case 20:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),n.prev=2,n.next=5,r();case 5:n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](2),n.t0&&n.t0.data&&n.t0.data.errors&&("access_denied"===n.t0.data.errors[0].code?t.$store.dispatch("session/logout").then(r):t.$store.dispatch("beebeeo/setError",c({loading:!1},n.t0.data.errors[0])));case 10:case"end":return n.stop()}}),n,null,[[2,7]])})))()},onShow:function(e){},onHide:function(){}};t.default=d}).call(this,n("543d")["default"])},"0325":function(e,t,n){},"039b":function(e,t,n){"use strict";var i=n("bbb4"),o=n.n(i);o.a},"282e":function(e,t,n){"use strict";n.r(t);var i=n("01ba"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},"46a9":function(e,t,n){"use strict";var i=n("0325"),o=n.n(i);o.a},"4d3e":function(e,t,n){"use strict";n.r(t);var i=n("fe0a"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},"8a47":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={beeShareaimg:function(){return Promise.all([n.e("common/vendor"),n.e("components/bee-shareaimg/bee-shareaimg")]).then(n.bind(null,"21be"))},beeIcon:function(){return n.e("components/bee-icon/bee-icon").then(n.bind(null,"33de"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"8bf9"))}},o=function(){var e=this,t=e.$createElement,n=(e._self._c,"beebee_face"===e.item.type?Number(e.navbarHeight+10):null);e.$mp.data=Object.assign({},{$root:{m0:n}})},r=[]},bbb4:function(e,t,n){},c6c1:function(e,t,n){"use strict";n.r(t);var i=n("8a47"),o=n("4d3e");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("039b");var s,a=n("f0c5"),c=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"46286460",null,!1,i["a"],s);t["default"]=c.exports},ea44:function(e,t,n){"use strict";n.r(t);var i=n("282e");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("46a9");var r,s,a,c,u=n("f0c5"),l=Object(u["a"])(i["default"],r,s,!1,null,null,null,!1,a,c);t["default"]=l.exports},fe0a:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;s(n("ea44"));var i=s(n("bf9d")),o=s(n("6db5")),r=s(n("01dc"));n("26cb"),n("2ef0");function s(e){return e&&e.__esModule?e:{default:e}}var a={components:{},mixins:[i.default,r.default],props:{typetuitui:{type:Boolean,default:!1},typepengyouquan:{type:Boolean,default:!1},typewechat:{type:Boolean,default:!1},typeaimg:{type:Boolean,default:!1},item:{type:Object,default:function(){return{}}},sharebox:{type:Boolean,default:!0}},data:function(){return{pengyouquantip:!1,setTime:"",num:0,showpic:null,hidepic:null,islike:!1,likes:0,post_likes:[]}},computed:{},watch:{item:{handler:function(e){var t=this;this.$nextTick((function(){t.item=e,t.likes=t.item.likes,t.islike=t.item.islike,t.post_likes=t.item.post_likes}))}},islike:{handler:function(e){var t=this;this.$nextTick((function(){t.islike=e}))}},likes:{handler:function(e){var t=this;this.$nextTick((function(){t.likes=e}))}},post_likes:{handler:function(e){var t=this;this.$nextTick((function(){t.post_likes=e,t.post_likes&&0!=t.post_likes.length?t.noticenew():clearInterval(t.setTime)}))}}},created:function(e){this.likes=this.item.likes,this.islike=this.item.islike,this.post_likes=this.item.post_likes},onLoad:function(e){},mounted:function(){},methods:{noticenew:function(){var e=this,t=this,n=t.num,i=wx.createAnimation({});this.setTime=setInterval((function(){n++,n>e.post_likes.length-1&&(n=0),t.num=n,console.log(t.num),i.opacity(1).step({duration:1500}),t.showpic=i.export(),i.opacity(0).step({duration:1500}),t.hidepic=i.export()}),4e3)},backTop:function(){this.$emit("backTop")},showSharepop:function(){this.$refs.sharepopup.open()},sharepopupcancel:function(){this.$refs.sharepopup.close(),this.pengyouquantip=!1},shareaimgpopupcancel:function(){this.$refs.shareaimgpopup.close()},pengyouquanClick:function(){this.pengyouquantip=!0},pengyouquanClose:function(){this.pengyouquantip=!1},showAimg:function(){this.$refs.shareaimg.canAimg()},likeClick:function(t){var n=this;if(this.$store.getters["session/get"]("isLogin")){var i={type:"like",id:this.item.id,access_token:this.$store.getters["session/get"]("accessToken")};o.default.postComment({params:i}).then((function(t){if(console.log(t),200===t.status){e.showToast({title:"谢谢点赞!",icon:"success",duration:900}),n.likes=n.likes+1,n.islike=!0;var i={post_type:n.item.type,id:n.item.id};o.default.readThreadDetail({params:i}).then((function(e){n.post_likes=e.post_likes}))}else if(202===t.status){e.showToast({title:"取消点赞!",icon:"success",duration:900}),n.likes=n.likes-1,n.islike=!1;var r={post_type:n.item.type,id:n.item.id};o.default.readThreadDetail({params:r}).then((function(e){n.post_likes=e.post_likes}))}else e.showModal({title:"温馨提示",content:"数据出错, 建议清除缓存重新尝试"})})).catch((function(e){console.log(e)}))}else this.mpLoginMode()}}};t.default=a}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/bee-sharebox/bee-sharebox-create-component',
    {
        'components/bee-sharebox/bee-sharebox-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c6c1"))
        })
    },
    [['components/bee-sharebox/bee-sharebox-create-component']]
]);
