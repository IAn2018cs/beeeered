(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesB/single/single"],{"0669":function(e,t,a){"use strict";var n=a("59a8"),o=a.n(n);o.a},4743:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a("a34a")),o=(a("0b9d"),l(a("bf9d"))),i=l(a("3f44")),s=(a("2694"),l(a("01dc"))),r=(a("6130"),l(a("6db5"))),c=a("2ef0");function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function f(e,t,a,n,o,i,s){try{var r=e[i](s),c=r.value}catch(l){return void a(l)}r.done?t(c):Promise.resolve(c).then(n,o)}function p(e){return function(){var t=this,a=arguments;return new Promise((function(n,o){var i=e.apply(t,a);function s(e){f(i,n,o,s,r,"next",e)}function r(e){f(i,n,o,s,r,"throw",e)}s(void 0)}))}}var m=function(){Promise.all([a.e("common/vendor"),a.e("components/bee-zaudio/bee-zaudio")]).then(function(){return resolve(a("20f4"))}.bind(null,a)).catch(a.oe)},g=null,b={components:{zaudio:m},mixins:[o.default,i.default,s.default],props:{posttype:{type:String,default:""},id:{type:Number,default:""}},data:function(){return{snowdata:[],stardata:[],options:{},avatarImage:"",avatarFrame:[],facetoptitle:[],facetabmenu:[],facecategoryIndex:0,boxdata:[],faceboxtabmenu:[{menu_title:"素材"},{menu_title:"画布"}],faceboxIndex:0,color:"#000000",colorpick:{r:0,g:0,b:0,a:0},ava:!1,avatarradius:0,facecanvas:{},pickimgtempFilePath:"",pickimgcropFilePath:"",motion:{left:0,top:0,trans:0},opencntfold:!1,foldcount:80,previewimg:!0,showimgmenu:!0,selectable:!1,smallmsg:!1,viewscrolltop:null,threadheadTop:0,threadheadHeight:0,videolook:!1,hiddencnt:!0,entryHeight:0,fullheight:!1,navActive:!1,loaded:!1,thread:{},rating:0,parent:0,iscanpublish:!1,detailrating_avg:"",ratingtip:"",cmtcontent:"",keyboardheight:"",keyboardduration:"",textareafocus:!1,textNum:0,placeholder:"输入评论",post_likes:[],role:"",sharebox:!0,isshare:"0",btnsboxfixed:!1,msgboxfixed:!1,cntbtnsHeight:70,firsttoppadding:0,singleradius:0,tagsstyle:{text:"",color:"",bgcolor:"",radius:"",size:"",padding:"",margin:""},clickscdown:!1,audiolist:this.$zaudio.audiolist,playIndex:this.$zaudio.playIndex,paused:this.$zaudio.paused,playinfo:this.$zaudio.playinfo}},created:function(){},onLoad:function(e){this.options=e,this.isshare=e.isshare?e.isshare:"0",this.loadThread(),this.beebeeos.acf&&this.beebeeos.acf.mode_ads.ads_other.single_jili.open&&this.beebeeos.acf.mode_ads.ads_other.single_jili.data&&this.showVideoAd(),"beebee_face"!=e.posttype&&(this.navActive=!0)},onUnload:function(e){},mounted:function(){},computed:{userId:function(){return this.$store.getters["session/get"]("userId")},userInfo:function(){var e=this.$store.getters["jv/get"]("user/user");return e.user&&("subscriber"===e.user.role?this.role="订阅者":"contributor"===e.user.role?this.role="贡献者":(e.user.role,this.role)),e}},watch:{thread:{handler:function(e){var t=this;this.$nextTick((function(){setTimeout((function(){t.getEntryHeight()}),400)}))}}},onShow:function(){var e=this;this.$zaudio.syncRender(),this.$zaudio.syncStateOn("page-index-get-state",(function(t){var a=t.audiolist,n=t.playIndex,o=t.paused,i=t.playinfo;e.audiolist=a,e.playIndex=n,e.paused=o,e.playinfo=i}))},onHide:function(){this.$zaudio.syncStateOff("page-index-get-state"),this.$zaudio.off("seek","aaa"),this.$zaudio.off("stop","aaa")},methods:{play:function(e){this.$zaudio.operate(e)},reset:function(){this.audiolist=this.thread.acf.quot_list},showVideoAd:function(){var t=this;e.createRewardedVideoAd&&(g=e.createRewardedVideoAd({adUnitId:this.beebeeos.acf.mode_ads.ads_other.single_jili.data}),g.onLoad((function(){})),g.onError((function(e){t.videolook=!0,t.saveCans()})),g.onClose((function(a){a&&a.isEnded?(t.videolook=!0,t.saveCans(),e.setStorageSync("iscs_"+t.thread.id,1)):e.showToast({title:"你中途关闭了视频",icon:"none",duration:3e3})})))},watchVideo:function(){var t=this;g&&g.show().catch((function(){g.load().then((function(){return g.show()})).catch((function(a){console.log("激励视频 广告显示失败"),e.showToast({title:"运气爆表\r\n不用欣赏广告",icon:"none",duration:3e3}),t.videolook=!0,t.saveCans()}))}))},loadSnow:function(){var e=this;return p(n.default.mark((function t(){var a,o,i,s,r,c,l,u,h,d;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(console.log("雪花了吗"),a=[],o=0;o<50;o++)0,o<25?1:-1,i=parseInt(Math.random()*e.screenWidth),s=i+"px",r=Math.ceil(9*Math.random()),c=r+"px",l=9*Math.random()+6,u="newsnowfall "+l+"s linear infinite",h=-1*Math.ceil(8*Math.random()+1),d=h+"s",a.push({size:c,left:s,animation:u,animationDelay:d});e.snowdata=a;case 4:case"end":return t.stop()}}),t)})))()},loadStar:function(){var e=this;return p(n.default.mark((function t(){var a,o,i,s,r,c,l,u,h,d;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(a=[],o=0;o<100;o++)i=parseInt(Math.random()*e.screenWidth),s=parseInt(Math.random()*e.windowHeight),r=i+"px",c=s+"px",l=1.5*Math.random(),u="scale("+l+", "+l+")",h=1.5*Math.random(),d=h+"s",a.push({left:r,top:c,transform:u,animationDelay:d});e.stardata=a;case 3:case"end":return t.stop()}}),t)})))()},gyroscope:function(){var t=this;return p(n.default.mark((function a(){var o,i,s,r;return n.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:o=t,i={start:[0,4],end:[0,10]},s={x:(i.end[0]-i.start[0])/2+i.start[0],y:(i.end[1]-i.start[1])/2+i.start[1]},r=30,e.startDeviceMotionListening({interval:"normal",success:function(){console.log("开启设备方向监控"),e.onDeviceMotionChange((function(e){e.alpha;var t=e.beta,a=e.gamma,n={};n.left=s.x+a/90*r,n.top=s.y+t/180*r,n.trans=t,o.motion=n,console.log(n)}))}});case 5:case"end":return a.stop()}}),a)})))()},bindavatarradius:function(){this.ava?this.ava=!1:this.ava=!0,this.ava?Number(this.thread.acf.face_showarea.imgheight)>=Number(this.thread.acf.face_showarea.imgWidth)?this.avatarradius=Number(this.thread.acf.face_showarea.imgheight)/2:this.avatarradius=Number(this.thread.acf.face_showarea.imgwidth)/2:this.avatarradius=0},open:function(e){this.$refs.colorPicker.open()},confirm:function(e){this.colorpick=e.rgba,console.log("颜色选择器返回值：",e.rgba)},pickimgupload:function(){var t=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){var a=e.tempFilePaths[0];t.imageCheck(a)}})},imageCheck:function(t){var a=this;e.compressImage({src:t,quality:1,success:function(n){var o=n.tempFilePath;wx.getFileSystemManager().readFile({filePath:o,success:function(n){e.showLoading({title:"加载中..."}),console.log("buffer.data",o),wx.cloud.callFunction({name:"check",data:{imgData:wx.cloud.CDN({type:"filePath",filePath:o})},complete:function(n){e.hideLoading(),console.log("rrrres",n),0==n.result.errCode?a.pickimgtempFilePath=t:87014==n.result.errCode?e.showModal({title:"请勿使用违法违规内容",content:"图片含有违法违规内容",showCancel:!1,confirmText:"知道了"}):e.showModal({title:"请重试",content:"内容安全检查失败",showCancel:!1,confirmText:"好的"})}})}})}})},pickimgconfirm:function(e){this.pickimgtempFilePath="",this.pickimgcropFilePath=e.detail.tempFilePath},pickimgcancel:function(){console.log("canceled")},moveFace:function(){this.avatarImage=""},getUserFace:function(){var t=this;return p(n.default.mark((function a(){return n.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.getUserProfile({desc:"用于表情制作",success:function(){var a=p(n.default.mark((function a(o){var i;return n.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:i=o.userInfo,i?(t.avatarImage=o.userInfo.avatarUrl.replace("132","0"),console.log(t.avatarImage)):e.showToast({title:"授权失败，请重新授权",icon:"none",duration:4e3});case 3:case"end":return a.stop()}}),a)})));function o(e){return a.apply(this,arguments)}return o}()});case 1:case"end":return a.stop()}}),a)})))()},draw:function(){var t=this;g&&this.beebeeos.acf.mode_single.page_single.set_face.face.download_custom.needads?this.adistrue():g?this.saveCans():e.showToast({icon:"none",title:"未发现广告"}).then((function(e){t.saveCans()}))},adistrue:function(){var t=this,a=this,n=e.getStorageSync("iscs_"+this.thread.id)?e.getStorageSync("iscs_"+this.thread.id):0;if(n<0&&(n=0),console.log("当前次数",n),0==n)e.showModal({title:"温馨提示",content:"观看视频解锁两次保存机会",success:function(e){e.confirm?t.watchVideo():e.cancel&&console.log("用户点击取消")}});else{var o=n-1;e.setStorageSync("iscs_"+this.thread.id,o),a.saveCans()}},saveCans:function(){var e=this;return p(n.default.mark((function t(){var a;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={avatarFrame:e.avatarFrame,canvasWidth:e.thread.acf.face_showarea.imgwidth?e.thread.acf.face_showarea.imgwidth:300,canvasHeight:e.thread.acf.face_showarea.imgheight?e.thread.acf.face_showarea.imgheight:300,canvasColor:e.colorpick},e.pickimgcropFilePath&&(a.pickbgImage=e.pickimgcropFilePath,a.pickbgImageWidth=e.thread.acf.face_showarea.imgwidth?e.thread.acf.face_showarea.imgwidth:300,a.pickbgImageHeight=e.thread.acf.face_showarea.imgheight?e.thread.acf.face_showarea.imgheight:300,a.pickbgImageLeft=0,a.pickbgImageTop=0),e.avatarImage&&(a.avatarImage=e.avatarImage,a.avatarImageWidth=e.thread.acf.face_showarea.imgwidth?e.thread.acf.face_showarea.imgwidth:300,a.avatarImageHeight=e.thread.acf.face_showarea.imgheight?e.thread.acf.face_showarea.imgheight:300,a.avatarImageLeft=0,a.avatarImageTop=0,a.avatarRadius=e.avatarradius),e.$refs.facecanvas.params=a,t.next=6,e.$refs.facecanvas.canAimg();case 6:case"end":return t.stop()}}),t)})))()},changeImage:function(e,t,a){var n=this.facetabmenu;"icon"===e?n[t].icon=a:"color"===e&&(n[t].color=a);var o=this.thread.acf.face_iconarea;"0"===o.boxchoose?(this.avatarFrame[0].icon=o.box[t].box[n[t].color].icons[n[t].icon],this.avatarFrame[0].title=o.box[t].title,this.avatarFrame[0].custom=o.box[t].custom):this.avatarFrame[t].icon=o.box[t].box[n[t].color].icons[n[t].icon],console.log(this.avatarFrame)},backTop:function(){var e=this;return p(n.default.mark((function t(){return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.viewscrolltop=null,e.$nextTick((function(){e.viewscrolltop=0}));case 2:case"end":return t.stop()}}),t)})))()},toggleTab:function(e){var t=this;return p(n.default.mark((function a(){return n.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.facecategoryIndex=e.index;case 1:case"end":return a.stop()}}),a)})))()},toggleboxTab:function(e){var t=this;return p(n.default.mark((function a(){return n.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.faceboxIndex=e;case 1:case"end":return a.stop()}}),a)})))()},showAimg:function(){this.$refs.shareaimg.canAimg()},touchStop:function(){},loadThread:function(){var e=this,t={post_type:"post"===this.posttype?"posts":this.posttype,id:this.id,access_token:this.$store.getters["session/get"]("accessToken")};r.default.readThreadDetail({params:t}).then((function(t){e.thread=h({},t),e.loaded=!0,e.facetoptitle=t.title.rendered.split("");for(var a=0;a<t.acf.face_iconarea.box.length;a++)e.facetabmenu.push({menu_title:t.acf.face_iconarea.box[a].title,menu_icon:t.acf.face_iconarea.box[a].titleicon,icon:0,color:0});var n=[];if("0"===t.acf.face_iconarea.boxchoose)n.push({icon:t.acf.face_iconarea.box[0].box[0].icons[0],title:t.acf.face_iconarea.box[0].title,custom:t.acf.face_iconarea.box[0].custom});else for(var o=0;o<t.acf.face_iconarea.box.length;o++)n.push({icon:t.acf.face_iconarea.box[o].box[0].icons[0],title:t.acf.face_iconarea.box[o].title,custom:t.acf.face_iconarea.box[o].custom});if(e.avatarFrame=n,t.acf.face_showarea.bgcolorshow){var i=t.acf.face_showarea.bgcolor;parseInt("0x"+i.slice(1,3)),parseInt("0x"+i.slice(3,5)),parseInt("0x"+i.slice(5,7));e.colorpick={r:parseInt("0x"+i.slice(1,3)),g:parseInt("0x"+i.slice(3,5)),b:parseInt("0x"+i.slice(5,7)),a:1}}else e.colorpick={r:0,g:0,b:0,a:0};if(e.post_likes=t.post_likes,"beebee_face"===e.thread.type&&(e.navActive=!1),t.acf.face_bgarea.bgani.openmotion&&e.gyroscope(),"snow"===t.acf.face_bgarea.bgani.ani?e.loadSnow():"star"===t.acf.face_bgarea.bgani.ani&&e.loadStar(),t.acf.face_bgarea&&t.acf.face_bgarea.bgmedia.open&&t.acf.face_bgarea.bgmedia.url){var s=[{src:t.acf.face_bgarea.bgmedia.url,title:t.acf.face_bgarea.bgmedia.name,singer:t.acf.face_bgarea.bgmedia.author,coverImgUrl:""}];setTimeout((function(){e.$zaudio.setAudio(s),e.$zaudio.operate(0)}),1500)}e.beebeeos.acf&&(e.tagsstyle={text:e.beebeeos.acf.mode_single.page_single.set_all.all.tagsstyle.beforetxt,radius:e.beebeeos.acf.mode_single.page_single.set_all.all.tagsstyle.radius,size:e.beebeeos.acf.mode_single.page_single.set_all.all.tagsstyle.size,padding:e.beebeeos.acf.mode_single.page_single.set_all.all.tagsstyle.padding,margin:e.beebeeos.acf.mode_single.page_single.set_all.all.tagsstyle.margin},"3"===e.beebeeos.acf.mode_single.page_single.set_all.all.tagsstyle.bgcolortype?e.tagsstyle.bgcolor=e.beebeeos.acf.mode_single.page_single.set_all.all.tagsstyle.bgcolor:"2"===e.beebeeos.acf.mode_single.page_single.set_all.all.tagsstyle.bgcolortype?e.tagsstyle.bgcolor=e.beebeeos.acf.mode_layout.style.maincolor:"1"===e.beebeeos.acf.mode_single.page_single.set_all.all.tagsstyle.bgcolortype?e.tagsstyle.bgcolor="":e.tagsstyle.bgcolor="transparent","3"===e.beebeeos.acf.mode_single.page_single.set_all.all.tagsstyle.colortype?e.tagsstyle.color=e.beebeeos.acf.mode_single.page_single.set_all.all.tagsstyle.color:"2"===e.beebeeos.acf.mode_single.page_single.set_all.all.tagsstyle.colortype?e.tagsstyle.color=e.beebeeos.acf.mode_layout.style.maincolor:e.tagsstyle.color=""),e.$nextTick((function(){if(e.$refs.page){var t={id:e.id,page:1,per_page:3};e.$refs.page.isResetList=!0,e.$refs.page.sun=t,e.$refs.page.loadThreads()}})),e.$nextTick((function(){e.$refs.facetab&&e.$refs.facetab.getTabRect(),e.$refs.faceboxtab&&e.$refs.faceboxtab.getTabRect()}))}))},handleClickOk:function(){this.watchVideo()},handleClickCancel:function(){e.navigateBack()},showmoreCnt:(0,c.throttle)((function(t,a){var n=this;this.thread.acf.viewtype&&"1"===this.thread.acf.viewtype.action?this.userId?this.hiddencnt=!1:this.mpLoginMode():this.thread.acf.viewtype&&"2"===this.thread.acf.viewtype.action?this.userId?this.thread.islike?this.hiddencnt=!1:e.showToast({title:"请先点击"+this.text_dianzan,icon:"error",duration:3e3}):this.mpLoginMode():g&&this.thread.acf.viewtype&&"3"===this.thread.acf.viewtype.action?e.showModal({title:"哎呀～",content:"需要先看个激励视频才能继续",confirmText:"好的",editable:!0,placeholderText:"需要先看个激励视频才能继续",success:function(e){e.confirm?n.watchVideo():e.cancel&&console.log("用户点击取消")}}):this.hiddencnt=!1}),1e3),getEntryHeight:function(){var e=this;return p(n.default.mark((function t(){var a;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$uGetRect("#threadhead");case 2:a=t.sent,e.threadheadTop=a.top,e.threadheadHeight=a.height,e.threadheadHeight>Number(e.windowHeight-e.cntbtnsHeight)?e.btnsboxfixed=!0:e.btnsboxfixed=!1,e.threadheadHeight>Number(e.windowHeight-2*e.cntbtnsHeight)?e.msgboxfixed=!1:e.msgboxfixed=!0;case 7:case"end":return t.stop()}}),t)})))()},userrating:function(e){var t=e.value;this.rating=t,this.ratingtip=1==t?"很差":2==t?"较差":3==t?"还行":4==t?"推荐":5==t?"力荐":""},bindInputContent:function(e){e.detail.value.length>0&&(this.cmtcontent=e.detail.value,this.textNum=e.detail.value.length,this.iscanpublish=!0)},keyboardheightchange:function(e){var t=e.detail.height,a=e.detail.duration;this.keyboardheight=t,this.keyboardduration=a},subscribeMessage:function(t,a){var n={access_token:this.$store.getters["session/get"]("accessToken")};n.openid=this.$store.getters["session/get"]("userOpenId"),n.template=t,n.status=a,n.pages=getCurrentPages()[0].route,n.platform=e.getSystemInfoSync().platform,n.program="WeChat",r.default.postSubscribe({params:n}).then((function(e){}))},addComment:function(t){var a=this,n={type:"comment",id:this.id,content:this.cmtcontent,parent:this.parent,rating:this.rating,access_token:this.$store.getters["session/get"]("accessToken")};this.$store.getters["session/get"]("isLogin")?""==this.cmtcontent?e.showModal({title:"提示",content:"内容不能为空"}):r.default.postComment({params:n}).then((function(t){if(200===t.status){a.page=1,a.cmtcontent="",a.comments=[],a.rating=0,a.parent=0,a.ratingtip="",a.iscanpublish=!1,setTimeout((function(){e.showModal({title:"温馨提示",content:t.message})}),900);var n={id:a.thread.id,page:1,per_page:4};a.$refs.page.isResetList=!0,a.$refs.page.sun=n,a.$refs.page.loadThreads()}else 500===t.status&&e.showModal({title:"提示",content:a.text_pinglun+"失败，请稍后重试。"})})).catch((function(t){console.log(t),e.showModal({title:"提示",content:a.text_pinglun+"失败，请稍后重试吧。"})})):this.mpLoginMode()},showCommentpop:function(){this.$refs.commentspopup.open(),this.textareafocus=!0},contentClick:(0,c.throttle)((function(t,a){e.navigateTo({url:"/pagesB/single/single?posttype=".concat(t,"&id=").concat(a)})}),1e3),onPopupChange:function(e){var t=this;this.$nextTick((function(){t.textareafocus=e.show}))},cmtpopupcancel:function(){this.$refs.commentspopup.close()},cancel:function(){this.$refs.popup.close()},scroll:function(e){},heartClick:function(t){var a=this,n=this.thread,o=n.favs;if(this.$store.getters["session/get"]("isLogin")){var i={type:"fav",id:n.id,access_token:this.$store.getters["session/get"]("accessToken")};r.default.postComment({params:i}).then((function(t){200===t.status?(e.showToast({title:"加入"+a.text_shoucang+"!",icon:"success",duration:900}),n.favs=o+1,n.isfav=!0,a.thread=n):202===t.status?(e.showToast({title:"取消"+a.text_shoucang+"!",icon:"success",duration:900}),n.favs=o-1,n.isfav=!1,a.thread=n):e.showToast({title:"数据出错!",icon:"success",duration:900})})).catch((function(e){console.log(e)}))}else this.mpLoginMode()},likeClick:function(t){var a=this,n=this.thread,o=n.likes||n.content.likes;if(this.$store.getters["session/get"]("isLogin")){var i={type:"like",id:n.id,access_token:this.$store.getters["session/get"]("accessToken")};r.default.postComment({params:i}).then((function(t){if(200===t.status){e.showToast({title:"谢谢"+a.text_dianzan+"!",icon:"success",duration:900}),n.likes=o+1,n.content.likes=o+1,n.islike=!0,n.content.islike=!0,a.thread=n;var i={post_type:a.posttype,id:a.id};r.default.readThreadDetail({params:i}).then((function(e){a.post_likes=e.post_likes||e.content.post_likes}))}else if(202===t.status){e.showToast({title:"取消"+a.text_dianzan+"!",icon:"success",duration:900}),n.likes=o-1,n.content.likes=o-1,n.islike=!1,n.content.islike=!1,a.thread=n;var s={post_type:a.posttype,id:a.id};r.default.readThreadDetail({params:s}).then((function(e){a.post_likes=e.post_likes||e.content.post_likes}))}else e.showModal({title:"温馨提示",content:"数据出错, 建议清除缓存重新尝试"})})).catch((function(e){console.log(e)}))}else this.mpLoginMode()},login:function(){this.mpLoginMode()},sliderchanging:function(e){var t=e.detail.value;this.slidevalue=t},onShareAppMessage:function(){var e="%sitename%",t=this.beebeeos.acf.mode_common.site.name?this.beebeeos.acf.mode_common.site.name:"",a="%sitedesc%",n=this.beebeeos.acf.mode_common.site.desc?this.beebeeos.acf.mode_common.site.desc:"",o="%user%",i=this.userId?this.userInfo.user.nickName:"",s="%postname%",r=this.thread.title.rendered,c="%date%",l=this.thread.newdate?this.thread.newdate:"",u="%author%",h=this.thread.author&&this.thread.author.name?this.thread.author.name:"",d="%views%",f=this.thread.meta&&this.thread.meta.views?this.thread.meta.views:"",p=this.beebeeos.acf.mode_navi.sharetitle.single.img,m="";m=this.thread.acf.face_sharearea.image?this.thread.acf.face_sharearea.image:"1"===p?this.beebeeos.acf.mode_navi.sharetitle.single.custom:"2"===p?this.thread.meta.thumbnail:"";var g="";return g=this.thread.acf.face_sharearea.title?this.thread.acf.face_sharearea.title:this.userId?this.beebeeos.acf.mode_navi.sharetitle.single.after:this.beebeeos.acf.mode_navi.sharetitle.single.before,{title:g.replace(s,r).replace(c,l).replace(u,h).replace(d,f).replace(e,t).replace(a,n).replace(o,i),path:"/pages/index/index?gotourl=/pagesB/single/single&id="+this.id+"&isshare=1&posttype="+this.posttype+"&pagetype=single",imageUrl:m}},onShareTimeline:function(){var e,t="%sitename%",a=this.beebeeos.acf.mode_common.site.name?this.beebeeos.acf.mode_common.site.name:"",n="%sitedesc%",o=this.beebeeos.acf.mode_common.site.desc?this.beebeeos.acf.mode_common.site.desc:"",i="%user%",s=this.userId?this.userInfo.user.nickName:"",r="%postname%",c=this.thread.title.rendered,l="%date%",u=this.thread.newdate,h="%author%",d=this.thread.author.name,f="%views%",p=this.thread.meta.views,m=this.beebeeos.acf.mode_navi.sharetitle.single.img;if(e="1"===m?this.beebeeos.acf.mode_navi.sharetitle.single.custom:"2"===m?this.thread.meta.thumbnail:"",this.userId){var g=this.beebeeos.acf.mode_navi.sharetitle.single.after;return{title:g.replace(r,c).replace(l,u).replace(h,d).replace(f,p).replace(t,a).replace(n,o).replace(i,s),query:"id="+this.id+"&isshare=1&posttype="+this.posttype+"&pagetype=single",imageUrl:e}}var b=this.beebeeos.acf.mode_navi.sharetitle.single.before;return{title:b.replace(r,c).replace(l,u).replace(h,d).replace(f,p).replace(t,a).replace(n,o),query:"id="+this.id+"&isshare=1&posttype="+this.posttype+"&pagetype=single",imageUrl:e}}}};t.default=b}).call(this,a("543d")["default"])},"524f":function(e,t,a){"use strict";a.r(t);var n=a("4743"),o=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=o.a},"59a8":function(e,t,a){},"68e6":function(e,t,a){"use strict";(function(e){a("29b5");n(a("66fd"));var t=n(a("74ad"));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=a,e(t.default)}).call(this,a("543d")["createPage"])},"74ad":function(e,t,a){"use strict";a.r(t);var n=a("792b"),o=a("524f");for(var i in o)"default"!==i&&function(e){a.d(t,e,(function(){return o[e]}))}(i);a("0669");var s,r=a("f0c5"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"1ef060b1",null,!1,n["a"],s);t["default"]=c.exports},"792b":function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}));var n={beePage:function(){return Promise.all([a.e("common/vendor"),a.e("components/bee-page/bee-page")]).then(a.bind(null,"c7f6"))},uniNavBar:function(){return a.e("components/uni-nav-bar/uni-nav-bar").then(a.bind(null,"8737"))},beeBlock:function(){return Promise.all([a.e("common/vendor"),a.e("components/bee-block/bee-block")]).then(a.bind(null,"9f3f"))},mpHtml:function(){return Promise.all([a.e("common/vendor"),a.e("components/mp-html/mp-html")]).then(a.bind(null,"d38d"))},beeMenuclick:function(){return a.e("components/bee-menuclick/bee-menuclick").then(a.bind(null,"341a"))},beeCellItem:function(){return a.e("components/bee-cell-item/bee-cell-item").then(a.bind(null,"def1"))},uTabs:function(){return a.e("components/u-tabs/u-tabs").then(a.bind(null,"3422"))},beeSharebox:function(){return Promise.all([a.e("common/vendor"),a.e("components/bee-sharebox/bee-sharebox")]).then(a.bind(null,"c6c1"))},beeContent:function(){return Promise.all([a.e("common/vendor"),a.e("components/bee-content/bee-content")]).then(a.bind(null,"874b"))},beeIcon:function(){return a.e("components/bee-icon/bee-icon").then(a.bind(null,"33de"))},beeCellComments:function(){return Promise.all([a.e("common/vendor"),a.e("components/bee-cell-comments/bee-cell-comments")]).then(a.bind(null,"856f"))},uniPopup:function(){return a.e("components/uni-popup/uni-popup").then(a.bind(null,"8bf9"))},beeFacecanvas:function(){return Promise.all([a.e("common/vendor"),a.e("components/bee-facecanvas/bee-facecanvas")]).then(a.bind(null,"b2bb"))},tColorPicker:function(){return a.e("components/t-color-picker/t-color-picker").then(a.bind(null,"ef07"))},beeImgcrop:function(){return a.e("components/bee-imgcrop/bee-imgcrop").then(a.bind(null,"6d43"))}},o=function(){var e=this,t=e.$createElement,a=(e._self._c,"beebee_face"===e.options.posttype&&e.loaded?e.__map(e.avatarFrame,(function(t,a){var n=e.__get_orig(t),o=Number(a+10);return{$orig:n,m0:o}})):null),n="beebee_face"===e.options.posttype&&e.loaded?{"background-color":e.thread.acf.face_bgarea.bgcolor?e.thread.acf.face_bgarea.bgcolor:""}:null,o="beebee_face"===e.options.posttype&&e.loaded?e.__map(e.thread.acf.face_iconarea.box,(function(t,a){var n=e.__get_orig(t),o=Number((e.screenWidth-40-(Number(t.colum.count)-1)*Number(t.colum.spacex))/Number(t.colum.count)*Number(t.custom.height)/Number(t.custom.width)),i=Number((e.screenWidth-40-(Number(t.colum.count)-1)*Number(t.colum.spacex))/Number(t.colum.count)),s=Number(t.colum.spacex),r=Number(t.colum.spacex);return{$orig:n,m1:o,m2:i,m3:s,m4:r}})):null;e.$mp.data=Object.assign({},{$root:{l0:a,a0:n,l1:o}})},i=[]}},[["68e6","common/runtime","common/vendor"]]]);