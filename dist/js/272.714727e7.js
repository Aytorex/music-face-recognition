(self["webpackChunkmusic_face_recognition"]=self["webpackChunkmusic_face_recognition"]||[]).push([[272],{6741:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=6741,e.exports=t},5787:function(e,t,n){var r=n(7976),a=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw a("Incorrect invocation")}},4019:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){"use strict";var r,a,s,i=n(4019),o=n(9781),l=n(7854),u=n(614),p=n(111),d=n(2597),c=n(648),h=n(6330),f=n(8880),m=n(8052),g=n(3070).f,y=n(7976),b=n(9518),w=n(7674),x=n(5112),v=n(9711),k=n(9909),I=k.enforce,S=k.get,N=l.Int8Array,T=N&&N.prototype,C=l.Uint8ClampedArray,_=C&&C.prototype,E=N&&b(N),A=T&&b(T),$=Object.prototype,F=l.TypeError,R=x("toStringTag"),D=v("TYPED_ARRAY_TAG"),M="TypedArrayConstructor",O=i&&!!w&&"Opera"!==c(l.opera),L=!1,P={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},z={BigInt64Array:8,BigUint64Array:8},B=function(e){if(!p(e))return!1;var t=c(e);return"DataView"===t||d(P,t)||d(z,t)},W=function(e){var t=b(e);if(p(t)){var n=S(t);return n&&d(n,M)?n[M]:W(t)}},V=function(e){if(!p(e))return!1;var t=c(e);return d(P,t)||d(z,t)},U=function(e){if(V(e))return e;throw F("Target is not a typed array")},G=function(e){if(u(e)&&(!w||y(E,e)))return e;throw F(h(e)+" is not a typed array constructor")},H=function(e,t,n,r){if(o){if(n)for(var a in P){var s=l[a];if(s&&d(s.prototype,e))try{delete s.prototype[e]}catch(i){try{s.prototype[e]=t}catch(u){}}}A[e]&&!n||m(A,e,n?t:O&&T[e]||t,r)}},j=function(e,t,n){var r,a;if(o){if(w){if(n)for(r in P)if(a=l[r],a&&d(a,e))try{delete a[e]}catch(s){}if(E[e]&&!n)return;try{return m(E,e,n?t:O&&E[e]||t)}catch(s){}}for(r in P)a=l[r],!a||a[e]&&!n||m(a,e,t)}};for(r in P)a=l[r],s=a&&a.prototype,s?I(s)[M]=a:O=!1;for(r in z)a=l[r],s=a&&a.prototype,s&&(I(s)[M]=a);if((!O||!u(E)||E===Function.prototype)&&(E=function(){throw F("Incorrect invocation")},O))for(r in P)l[r]&&w(l[r],E);if((!O||!A||A===$)&&(A=E.prototype,O))for(r in P)l[r]&&w(l[r].prototype,A);if(O&&b(_)!==A&&w(_,A),o&&!d(A,R))for(r in L=!0,g(A,R,{get:function(){return p(this)?this[D]:void 0}}),P)l[r]&&f(l[r],D,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:O,TYPED_ARRAY_TAG:L&&D,aTypedArray:U,aTypedArrayConstructor:G,exportTypedArrayMethod:H,exportTypedArrayStaticMethod:j,getTypedArrayConstructor:W,isView:B,isTypedArray:V,TypedArray:E,TypedArrayPrototype:A}},9671:function(e,t,n){var r=n(9974),a=n(8361),s=n(7908),i=n(6244),o=function(e){var t=1==e;return function(n,o,l){var u,p,d=s(n),c=a(d),h=r(o,l),f=i(c);while(f-- >0)if(u=c[f],p=h(u,f,d),p)switch(e){case 0:return u;case 1:return f}return t?-1:void 0}};e.exports={findLast:o(0),findLastIndex:o(1)}},206:function(e,t,n){var r=n(1702);e.exports=r([].slice)},8544:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},7045:function(e,t,n){var r=n(6339),a=n(3070);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),a.f(e,t,n)}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},6833:function(e,t,n){var r=n(8113);e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},5268:function(e,t,n){var r=n(4326),a=n(7854);e.exports="process"==r(a.process)},9974:function(e,t,n){var r=n(1702),a=n(9662),s=n(4374),i=r(r.bind);e.exports=function(e,t){return a(e),void 0===t?e:s?i(e,t):function(){return e.apply(t,arguments)}}},9518:function(e,t,n){var r=n(2597),a=n(614),s=n(7908),i=n(6200),o=n(8544),l=i("IE_PROTO"),u=Object,p=u.prototype;e.exports=o?u.getPrototypeOf:function(e){var t=s(e);if(r(t,l))return t[l];var n=t.constructor;return a(n)&&t instanceof n?n.prototype:t instanceof u?p:null}},7066:function(e,t,n){"use strict";var r=n(9670);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},261:function(e,t,n){var r,a,s,i,o=n(7854),l=n(2104),u=n(9974),p=n(614),d=n(2597),c=n(7293),h=n(490),f=n(206),m=n(317),g=n(8053),y=n(6833),b=n(5268),w=o.setImmediate,x=o.clearImmediate,v=o.process,k=o.Dispatch,I=o.Function,S=o.MessageChannel,N=o.String,T=0,C={},_="onreadystatechange";try{r=o.location}catch(R){}var E=function(e){if(d(C,e)){var t=C[e];delete C[e],t()}},A=function(e){return function(){E(e)}},$=function(e){E(e.data)},F=function(e){o.postMessage(N(e),r.protocol+"//"+r.host)};w&&x||(w=function(e){g(arguments.length,1);var t=p(e)?e:I(e),n=f(arguments,1);return C[++T]=function(){l(t,void 0,n)},a(T),T},x=function(e){delete C[e]},b?a=function(e){v.nextTick(A(e))}:k&&k.now?a=function(e){k.now(A(e))}:S&&!y?(s=new S,i=s.port2,s.port1.onmessage=$,a=u(i.postMessage,i)):o.addEventListener&&p(o.postMessage)&&!o.importScripts&&r&&"file:"!==r.protocol&&!c(F)?(a=F,o.addEventListener("message",$,!1)):a=_ in m("script")?function(e){h.appendChild(m("script"))[_]=function(){h.removeChild(this),E(e)}}:function(e){setTimeout(A(e),0)}),e.exports={set:w,clear:x}},4590:function(e,t,n){var r=n(3002),a=RangeError;e.exports=function(e,t){var n=r(e);if(n%t)throw a("Wrong offset");return n}},3002:function(e,t,n){var r=n(9303),a=RangeError;e.exports=function(e){var t=r(e);if(t<0)throw a("The argument can't be less than 0");return t}},8053:function(e){var t=TypeError;e.exports=function(e,n){if(e<n)throw t("Not enough arguments");return e}},2087:function(e,t,n){var r=n(7854),a=n(9781),s=n(7045),i=n(7066),o=n(7293),l=r.RegExp,u=l.prototype,p=a&&o((function(){var e=!0;try{l(".","d")}catch(p){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",a=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},s={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var i in e&&(s.hasIndices="d"),s)a(i,s[i]);var o=Object.getOwnPropertyDescriptor(u,"flags").get.call(t);return o!==r||n!==r}));p&&s(u,"flags",{configurable:!0,get:i})},8675:function(e,t,n){"use strict";var r=n(260),a=n(6244),s=n(9303),i=r.aTypedArray,o=r.exportTypedArrayMethod;o("at",(function(e){var t=i(this),n=a(t),r=s(e),o=r>=0?r:n+r;return o<0||o>=n?void 0:t[o]}))},2958:function(e,t,n){"use strict";var r=n(260),a=n(9671).findLastIndex,s=r.aTypedArray,i=r.exportTypedArrayMethod;i("findLastIndex",(function(e){return a(s(this),e,arguments.length>1?arguments[1]:void 0)}))},3408:function(e,t,n){"use strict";var r=n(260),a=n(9671).findLast,s=r.aTypedArray,i=r.exportTypedArrayMethod;i("findLast",(function(e){return a(s(this),e,arguments.length>1?arguments[1]:void 0)}))},3462:function(e,t,n){"use strict";var r=n(7854),a=n(6916),s=n(260),i=n(6244),o=n(4590),l=n(7908),u=n(7293),p=r.RangeError,d=r.Int8Array,c=d&&d.prototype,h=c&&c.set,f=s.aTypedArray,m=s.exportTypedArrayMethod,g=!u((function(){var e=new Uint8ClampedArray(2);return a(h,e,{length:1,0:3},1),3!==e[1]})),y=g&&s.NATIVE_ARRAY_BUFFER_VIEWS&&u((function(){var e=new d(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]}));m("set",(function(e){f(this);var t=o(arguments.length>1?arguments[1]:void 0,1),n=l(e);if(g)return a(h,this,n,t);var r=this.length,s=i(n),u=0;if(s+t>r)throw p("Wrong length");while(u<s)this[t+u]=n[u++]}),!g||y)},1118:function(e,t,n){n(2958)},7380:function(e,t,n){n(3408)},1091:function(e,t,n){var r=n(2109),a=n(7854),s=n(261).clear;r({global:!0,bind:!0,enumerable:!0,forced:a.clearImmediate!==s},{clearImmediate:s})},2801:function(e,t,n){"use strict";var r=n(2109),a=n(5005),s=n(9114),i=n(3070).f,o=n(2597),l=n(5787),u=n(9587),p=n(6277),d=n(3678),c=n(7741),h=n(1913),f="DOMException",m=a("Error"),g=a(f),y=function(){l(this,b);var e=arguments.length,t=p(e<1?void 0:arguments[0]),n=p(e<2?void 0:arguments[1],"Error"),r=new g(t,n),a=m(t);return a.name=f,i(r,"stack",s(1,c(a.stack,1))),u(r,this,y),r},b=y.prototype=g.prototype,w="stack"in m(f),x="stack"in new g(1,2),v=w&&!x;r({global:!0,constructor:!0,forced:h||v},{DOMException:v?y:g});var k=a(f),I=k.prototype;if(I.constructor!==k)for(var S in h||i(I,"constructor",s(1,k)),d)if(o(d,S)){var N=d[S],T=N.s;o(k,T)||i(k,T,s(6,N.c))}},4633:function(e,t,n){n(1091),n(2986)},2986:function(e,t,n){var r=n(2109),a=n(7854),s=n(261).set;r({global:!0,bind:!0,enumerable:!0,forced:a.setImmediate!==s},{setImmediate:s})},2492:function(e,t,n){n(6699),
/*!
* sweetalert2 v11.4.18
* Released under the MIT License.
*/
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2022 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
* @license
* Copyright 2018 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*/
/** @license See the LICENSE file. */const sae=(0,aae.Z)(rae,[["render",o]]);var iae=sae,oae={name:"App",components:{Webcam:iae}};const lae=(0,aae.Z)(oae,[["render",s]]);var uae=lae},4124:function(e,t,n){"use strict";e.exports=n.p+"media/Cymatics - Lofi Clap 3.23af2c3d.wav"},2452:function(e,t,n){"use strict";e.exports=n.p+"media/Cymatics - Lofi Kick 1 - C.37e93bc5.wav"},915:function(e,t,n){"use strict";e.exports=n.p+"media/Cymatics - Lofi Open Hihat 2.ec55a71e.wav"},5958:function(e,t,n){"use strict";e.exports=n.p+"media/Cymatics - Lofi Snare 1 - C.543aee23.wav"},3620:function(e,t,n){"use strict";e.exports=n.p+"media/rickroll.0afb9ffb.wav"}}]);
//# sourceMappingURL=272.714727e7.js.map