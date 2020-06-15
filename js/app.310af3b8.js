(function(e){function t(t){for(var r,s,a=t[0],c=t[1],u=t[2],p=0,f=[];p<a.length;p++)s=a[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="//";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"126a":function(e,t,n){},"13e8":function(e,t,n){"use strict";var r=n("7720"),i=n.n(r);i.a},"21f1":function(e,t,n){"use strict";var r=n("9e4c"),i=n.n(r);i.a},2531:function(e,t,n){"use strict";var r=n("126a"),i=n.n(r);i.a},"4e73":function(e,t,n){"use strict";var r=n("b2d8"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=n("8c4f"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"progress-bar"}}),n("router-view")],1)},s=[],a={name:"App"},c=a,u=(n("5c0b"),n("2877")),l=Object(u["a"])(c,o,s,!1,null,null,null),p=l.exports,f=n("2f62"),d=(n("caad"),n("07ac"),n("2532"),{spotifyApi:{mode:Object({VUE_APP_BASE_PATH:"//",NODE_ENV:"production",BASE_URL:"//"}).VUE_APP_SPOTIFY_API_MODE,modes:{DEV:"development",PROXY:"proxy"},baseUrl:"https://api.spotify.com/v1",secrets:{clientId:Object({VUE_APP_BASE_PATH:"//",NODE_ENV:"production",BASE_URL:"//"}).VUE_APP_SPOTIFY_API_CLIENT_ID,clientSecret:Object({VUE_APP_BASE_PATH:"//",NODE_ENV:"production",BASE_URL:"//"}).VUE_APP_SPOTIFY_API_CLIENT_SECRET},isSaveTokensEnabled:"true"===Object({VUE_APP_BASE_PATH:"//",NODE_ENV:"production",BASE_URL:"//"}).VUE_APP_SPOTIFY_API_SAVE_TOKENS.toLowerCase()}}),h=d.spotifyApi;Object.values(h.modes).includes(h.mode)||console.error("Invalid api mode in config!"),h.mode===h.modes.DEV&&(void 0===h.secrets.clientId&&console.error("No client id specified in dev mode!"),void 0===h.secrets.clientSecret&&console.error("No client secret specified in dev mode!"));var m=d;r["a"].use(f["a"]);var y="spotifyAccessToken",v="spotifyTokenExpiry",g=new f["a"].Store({state:{spotifyAccessToken:localStorage.getItem(y),spotifyTokenExpiration:localStorage.getItem(v),isLoading:!1,selectedPlaylists:{}},mutations:{setSpotifyAccessToken:function(e,t){m.spotifyApi.isSaveTokensEnabled&&(localStorage.setItem(y,t.accessToken),localStorage.setItem(v,t.expirationDate)),e.spotifyAccessToken=t.accessToken,e.spotifyTokenExpiration=t.expirationDate},invalidateSpotifyAccessToken:function(e){localStorage.removeItem(y),localStorage.removeItem(v),e.spotifyAccessToken=null,e.spotifyTokenExpiration=null},startLoading:function(e){e.isLoading=!0},finishLoading:function(e){e.isLoading=!1},changeSelectPlaylistState:function(e,t){void 0!==e.selectedPlaylists[t.id]?r["a"].delete(e.selectedPlaylists,t.id):r["a"].set(e.selectedPlaylists,t.id,t)}},actions:{},getters:{spotifyAccessToken:function(e){return e.spotifyAccessToken},spotifyTokenExpiry:function(e){return e.spotifyTokenExpiration},isAuthenticated:function(e){return null!=e.spotifyAccessToken&&e.spotifyTokenExpiration>(new Date).getTime()},isLoading:function(e){return e.isLoading},getSelectedPlaylists:function(e){return e.selectedPlaylists},isPlaylistSelected:function(e){return function(t){return void 0!==e.selectedPlaylists[t]}}}}),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login-page"}},[n("div",{attrs:{id:"container"}},[n("h1",[e._v("Spoti.fish")]),n("img",{attrs:{id:"logo",src:"https://placeholder.pics/svg/300",alt:"Spoti.fish Icon"}}),n("button",{attrs:{id:"btn-login"},on:{click:e.login}},[e._v("Login with Spotify")])])])},_=[],k=(n("96cf"),n("1da1")),S=(n("d3b7"),n("25f0"),n("3ca3"),n("ddb0"),n("2b3d"),function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return void 0===n.headers&&(n.headers={}),n.headers["Authorization"]="Bearer "+g.getters.spotifyAccessToken,e.next=4,fetch(m.spotifyApi.baseUrl+t,n);case 4:if(r=e.sent,401!==r.status){e.next=10;break}g.commit("invalidateSpotifyAccessToken"),window.location.href="/",e.next=15;break;case 10:if(!r.ok){e.next=14;break}return e.abrupt("return",r.json());case 14:throw new Error("Error while accessing spotify api: "+r.status);case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),P="/me/playlists";function A(){return w.apply(this,arguments)}function w(){return w=Object(k["a"])(regeneratorRuntime.mark((function e(){var t,n,r,i=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:20,n=i.length>1&&void 0!==i[1]?i[1]:0,r=new URLSearchParams({limit:t,offset:n}),e.abrupt("return",S(P+"?"+r.toString(),{method:"GET"}));case 4:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}var E={getCurrentUserPlaylists:A};function x(e,t,n){var r=new URLSearchParams({client_id:m.spotifyApi.secrets.clientId,response_type:"code",redirect_uri:e,state:t});void 0!==n&&r.set("scope",n),location.href="https://accounts.spotify.com/authorize?"+r.toString()}function T(e,t){return O.apply(this,arguments)}function O(){return O=Object(k["a"])(regeneratorRuntime.mark((function e(t,n){var r,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=new URLSearchParams({grant_type:"authorization_code",code:n,redirect_uri:t}),null==m.spotifyApi.secrets.clientSecret){e.next=17;break}return r.set("client_id",m.spotifyApi.secrets.clientId),r.set("client_secret",m.spotifyApi.secrets.clientSecret),e.next=6,fetch("https://accounts.spotify.com/api/token",{method:"POST",body:r,headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 6:if(i=e.sent,!i.ok){e.next=14;break}return e.next=10,i.json();case 10:return o=e.sent,e.abrupt("return",{expirationDate:(new Date).getTime()+1e3*o.expires_in,accessToken:o.access_token,refreshToken:o.refresh_token});case 14:throw new Error(i.status+" in requestAccessToken!");case 15:e.next=18;break;case 17:throw new Error("Server-side authentication not implemented yet!");case 18:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}var j={requestAccessToken:T,requestAuthorizationToken:x},I={playlistRepository:E,authRepository:j},R={name:"LoginPage",methods:{login:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,I.authRepository.requestAuthorizationToken(location.origin+this.$router.resolve({name:"authCallback"}).href,"/");case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},L=R,$=(n("21f1"),Object(u["a"])(L,b,_,!1,null,"52ffd79b",null)),U=$.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login-return"}},[!e.$store.getters.isAuthenticated&&e.isSuccess?[n("Spinner"),n("h2",[e._v("Authenticating...")])]:e.isSuccess?e._e():[n("h2",[e._v("Authentication failed!")]),n("router-link",{attrs:{to:"/"}},[n("button",{on:{click:function(t){return e.$router.push("/")}}},[e._v("Return to home")])])]],2)},D=[],V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"spinner"}})},N=[],B={name:"Spinner"},q=B,z=(n("b41a"),Object(u["a"])(q,V,N,!1,null,"ce4c8f92",null)),M=z.exports,Y={name:"LoginReturn",data:function(){return{isSuccess:!0}},components:{Spinner:M},created:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){var n,r,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.$store.getters.isAuthenticated){t.next=3;break}return t.next=3,e.$router.push("/");case 3:if(n=e.$route.query,r=n.state,!(n.error||null==n.error&&null==n.code)){t.next=8;break}return e.isSuccess=!1,t.abrupt("return");case 8:return i=n.code,t.next=11,I.authRepository.requestAccessToken(location.origin+e.$router.resolve({name:"authCallback"}).href,i);case 11:if(o=t.sent,e.$store.commit("setSpotifyAccessToken",{accessToken:o.accessToken,expirationDate:o.expirationDate}),null==r){t.next=18;break}return t.next=16,e.$router.push(r);case 16:t.next=20;break;case 18:return t.next=20,e.$router.push("/");case 20:case"end":return t.stop()}}),t)})))()}},F=Y,H=(n("2531"),Object(u["a"])(F,C,D,!1,null,"4084ebe4",null)),J=H.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"playlists"}},[n("ul",e._l(e.playlistItems,(function(e){return n("PlaylistCard",{key:e.id,attrs:{item:e}})})),1)])},K=[],W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{selected:e.isPlaylistSelected},attrs:{id:"playlist-card"}},[n("img",{attrs:{src:e.item.images[0].url,alt:e.item.name}}),n("span",{attrs:{id:"name"}},[e._v(e._s(e.item.name))]),n("span",{attrs:{id:"tracks"}},[e._v(e._s(e.item.tracks.total)+" tracks")]),n("button",{on:{click:function(t){return e.onItemSelected(e.item)}}},[e._v(e._s(e.isPlaylistSelected?"Selected":"Select"))])])},X=[],Q={name:"PlaylistCard",props:{item:Object},methods:{onItemSelected:function(e){this.$store.commit("changeSelectPlaylistState",e)}},computed:{isPlaylistSelected:function(){return this.$store.getters.isPlaylistSelected(this.item.id)}}},Z=Q,ee=(n("eb93"),Object(u["a"])(Z,W,X,!1,null,"14e2463d",null)),te=ee.exports,ne={name:"Playlists",components:{PlaylistCard:te},data:function(){return{playlistItems:[]}},created:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("startLoading"),t.next=3,I.playlistRepository.getCurrentUserPlaylists();case 3:n=t.sent,e.$store.commit("finishLoading"),e.playlistItems=n.items;case 6:case"end":return t.stop()}}),t)})))()}},re=ne,ie=(n("13e8"),Object(u["a"])(re,G,K,!1,null,"220cb8ca",null)),oe=ie.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"workflow-container"}},[n("div",{attrs:{id:"progress"}},[e._v("stepper progress bar")]),n("div",{attrs:{id:"router-container"}},[n("router-view")],1)])},ae=[],ce={name:"WorkflowContainer"},ue=ce,le=(n("4e73"),Object(u["a"])(ue,se,ae,!1,null,"8e366604",null)),pe=le.exports;r["a"].config.productionTip=!1,r["a"].use(i["a"]);var fe=[{path:"/",component:pe,children:[{path:"",component:oe,name:"chooseSource"}]},{path:"/login",component:U,name:"login"},{path:"/authCallback",component:J,name:"authCallback"}],de=new i["a"]({mode:"history",routes:fe});de.beforeEach((function(e,t,n){g.getters.isAuthenticated||"authCallback"===e.name||"login"===e.name?n():n("/login")})),new r["a"]({store:g,render:function(e){return e(p)},router:de}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),i=n.n(r);i.a},7720:function(e,t,n){},"92a1":function(e,t,n){},"991a":function(e,t,n){},"9c0c":function(e,t,n){},"9e4c":function(e,t,n){},b2d8:function(e,t,n){},b41a:function(e,t,n){"use strict";var r=n("991a"),i=n.n(r);i.a},eb93:function(e,t,n){"use strict";var r=n("92a1"),i=n.n(r);i.a}});
//# sourceMappingURL=app.310af3b8.js.map