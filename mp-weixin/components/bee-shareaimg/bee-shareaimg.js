(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/bee-shareaimg/bee-shareaimg"],{"21be":function(e,t,i){"use strict";i.r(t);var o=i("deb8"),s=i("8055");for(var n in s)"default"!==n&&function(e){i.d(t,e,(function(){return s[e]}))}(n);i("b83f");var a,u=i("f0c5"),c=Object(u["a"])(s["default"],o["b"],o["c"],!1,null,"78a7cabe",null,!1,o["a"],a);t["default"]=c.exports},"342b":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a(i("ea44"));var o=a(i("bf9d")),s=a(i("6db5")),n=a(i("d407"));i("26cb"),i("2ef0");function a(e){return e&&e.__esModule?e:{default:e}}var u={components:{},mixins:[o.default],props:{item:{type:Object,default:function(){return{}}}},data:function(){return{template:{},customStyle:"width:750px;position:fixed;height:1280px; z-index:-999;top:0;left:100%;",sharetype_borrow:!1,sharetype_download:!1,sharetype_onread:!1,sharetype_sell:!1,imagePath:"",showimg:!1,jurisdiction:!0}},computed:{},watch:{},created:function(e){},onLoad:function(e){},mounted:function(){},methods:{ontell:function(t){var i=t.detail.path;e.previewImage({current:i,urls:[i]})},imgErr:function(){},canAimg:function(){var t,i,o,a=this;if("post"===this.item.type||"posts"===this.item.type)"posts";else if("beebee_library"===this.item.type){var u=this.beebeeos.acf.mode_layout.layout.book.width,c=this.beebeeos.acf.mode_layout.layout.book.height;this.beebeeos.acf.mode_layout.layout.book.radius;u/c<1?(t=580,i=580*c/u):u/c>=1&&(i=580,t=580*u/c),this.item.type}else this.item.type;var r={id:this.item.id,title:this.item.title.rendered,excerpt:this.item.excerpt.rendered,thumb:this.item.meta.thumbnail,views:this.item.meta.views,liker:this.item.post_likes,likes:this.item.likes,libimg:this.item.meta.thumbnail,libimgwd:t,libimght:i,libimgrd:o,libbg:"",sitename:this.beebeeos.acf.mode_common.site.name,sitedesc:this.beebeeos.acf.mode_common.site.desc},l={api_type:"qrcode",id:this.item.id,access_token:this.$store.getters["session/get"]("accessToken")};s.default.postSpecial({params:l}).then((function(t){if(e.showLoading({title:"准备生成海报...",mask:!0}),200===t.status)e.downloadFile({url:t.qrcode,success:function(t){200===t.statusCode?(e.hideLoading(),r.qrcodePath=t.tempFilePath,r.qrcodePath&&"beebee_library"===a.item.type&&(a.template=(new n.default).palette(r))):(e.hideLoading(),e.showToast({title:"下载二维码失败",mask:!0,duration:2e3}))}})}))},saveAlbum:function(){var t=this;e.getSetting({success:function(e){e.authSetting["scope.writePhotosAlbum"]?t.jurisdiction=e.authSetting["scope.writePhotosAlbum"]:t.jurisdiction=!1}}),this.jurisdiction||e.openSetting({success:function(e){t.jurisdiction=e.authSetting["scope.writePhotosAlbum"]}}),e.showModal({title:"提示",content:"确定保存到相册吗",success:function(i){i.confirm&&e.saveImageToPhotosAlbum({filePath:t.imagePath,success:function(){e.showToast({title:"图片保存成功",icon:"none",duration:2e3})},fail:function(i){"saveImageToPhotosAlbum:fail auth deny"===i.errMsg&&(t.jurisdiction=!1),e.showToast({title:"图片保存失败",icon:"none",duration:2e3})}})}})},previewImage:function(){var t=this.imagePath;e.previewImage({current:t,urls:[t]})}}};t.default=u}).call(this,i("543d")["default"])},8055:function(e,t,i){"use strict";i.r(t);var o=i("342b"),s=i.n(o);for(var n in o)"default"!==n&&function(e){i.d(t,e,(function(){return o[e]}))}(n);t["default"]=s.a},b83f:function(e,t,i){"use strict";var o=i("bc22"),s=i.n(o);s.a},bc22:function(e,t,i){},deb8:function(e,t,i){"use strict";var o;i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return o}));var s=function(){var e=this,t=e.$createElement;e._self._c},n=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/bee-shareaimg/bee-shareaimg-create-component',
    {
        'components/bee-shareaimg/bee-shareaimg-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("21be"))
        })
    },
    [['components/bee-shareaimg/bee-shareaimg-create-component']]
]);