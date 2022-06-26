(function(){var e={6741:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=6741,e.exports=t},683:function(e,t,n){"use strict";var o=n(9242),i=n(3396);function r(e,t,n,o,r,a){const c=(0,i.up)("Webcam");return(0,i.wg)(),(0,i.j4)(c)}const a={id:"video",width:"720",height:"560",autoplay:"",muted:""};function c(e,t,n,o,r,c){return(0,i.wg)(),(0,i.iD)("video",a)}var s=n(1999),u=n(2492),d=n.n(u),f={name:"Webcam",data(){return{}},methods:{loadModels(){Promise.all([s.qB.tinyFaceDetector.loadFromUri("../models"),s.qB.faceLandmark68Net.loadFromUri("../models"),s.qB.faceRecognitionNet.loadFromUri("../models"),s.qB.faceExpressionNet.loadFromUri("../models")]).then(this.startVideo)},startVideo(){const e={audio:!0,video:{width:720,height:560}};navigator.mediaDevices.getUserMedia(e).then((async function(e){const t=document.getElementById("video");t.srcObject=e,t.onloadedmetadata=function(){t.play()};const o=new Audio(n(2452)),i=new Audio(n(4124)),r=new Audio(n(915)),a=new Audio(n(5958)),c=new Audio(n(3620));t.addEventListener("play",(()=>{const e=s.Jd(t);document.body.append(e);const n={width:t.width,height:t.height};s.JF(e,n),setInterval((async()=>{const u=await s.Qr(t,new s.aK).withFaceLandmarks().withFaceExpressions(),f=s._C(u,n);if(0!==f.length){const e=f[0].angle,t=f[0].expressions;if(t.surprised>.7){await c.play(),d().fire({title:"YOU GOT RICK ROLLED",width:600,padding:"3em",timer:26e3,timerProgressBar:!0,color:"#716add",background:"#fff",backdrop:'\n                      rgba(0,0,123,0.4)\n                      url("/images/rickroll.gif")\n                      center\n                      repeat\n                    '})}else c.paused&&(e.roll>.3&&await o.play(),e.roll<-.3&&await i.play(),e.pitch>.3&&e.roll<.3&&await r.play(),e.pitch<-.2&&e.roll>-.2&&await a.play())}e.getContext("2d").clearRect(0,0,e.width,e.height),s.ii.drawDetections(e,f),s.ii.drawFaceLandmarks(e,f)}),450)}))}))}},mounted(){this.loadModels()}},l=n(89);const p=(0,l.Z)(f,[["render",c]]);var m=p,h={name:"App",components:{Webcam:m}};const w=(0,l.Z)(h,[["render",r]]);var v=w;(0,o.ri)(v).mount("#app")},4124:function(e,t,n){"use strict";e.exports=n.p+"media/Cymatics - Lofi Clap 3.23af2c3d.wav"},2452:function(e,t,n){"use strict";e.exports=n.p+"media/Cymatics - Lofi Kick 1 - C.37e93bc5.wav"},915:function(e,t,n){"use strict";e.exports=n.p+"media/Cymatics - Lofi Open Hihat 2.ec55a71e.wav"},5958:function(e,t,n){"use strict";e.exports=n.p+"media/Cymatics - Lofi Snare 1 - C.543aee23.wav"},3620:function(e,t,n){"use strict";e.exports=n.p+"media/rickroll.0afb9ffb.wav"}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,o,i,r){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],i=e[d][1],r=e[d][2];for(var c=!0,s=0;s<o.length;s++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(c=!1,r<a&&(a=r));if(c){e.splice(d--,1);var u=i();void 0!==u&&(t=u)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[o,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,a=o[0],c=o[1],s=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(i in c)n.o(c,i)&&(n.m[i]=c[i]);if(s)var d=s(n)}for(t&&t(o);u<a.length;u++)r=a[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},o=self["webpackChunkmusic_face_recognition"]=self["webpackChunkmusic_face_recognition"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(683)}));o=n.O(o)})();
//# sourceMappingURL=app.afdbdc6b.js.map