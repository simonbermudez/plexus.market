(function(e){function t(t){for(var i,r,l=t[0],a=t[1],c=t[2],d=0,p=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,l=1;l<n.length;l++){var a=n[l];0!==s[a]&&(i=!1)}i&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},s={app:0},o=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/plexus.market/dist/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=a;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("85ec"),s=n.n(i);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"app"}},[e.selectedPlaylist?n("div",{staticClass:"row row-cols-1 row-cols-md-2"},e._l(e.videos,(function(t){return n("div",{key:t.id,staticClass:"col mb-4"},[e.selectedVideo!==t.snippet.resourceId.videoId?n("div",{staticClass:"holder"},[n("img",{attrs:{id:t.snippet.resourceId.videoId,src:t.snippet.thumbnails.medium.url},on:{mouseover:function(n){return e.videoHover(t.snippet.resourceId.videoId)}}})]):n("div",{},[n("div",{staticClass:"holder"},[n("iframe",{staticClass:"frame",attrs:{id:t.snippet.resourceId.videoId,width:"320",height:"180",src:"https://www.youtube.com/embed/"+e.selectedVideo+"?autoplay=1&mute=1",frameborder:"0"}}),n("div",{staticClass:"bar",on:{mouseleave:function(t){return e.videoHoverLeave()},click:function(n){return e.buy(t.snippet.resourceId.videoId)}}})])])])})),0):n("playlists",{attrs:{playlists:e.playlists},on:{"select-playlist":e.selectPlaylist}})],1)},o=[],r=(n("7db0"),n("bc3a")),l=n.n(r),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"playlists"},e._l(e.playlists,(function(t){return n("div",{key:t.id},[e._v(" "+e._s(t.snippet.title)+" "),n("img",{attrs:{src:t.snippet.thumbnails.standard.url},on:{click:function(n){return e.$emit("select-playlist",t.id)}}})])})),0)},c=[],u={name:"Playlists",props:["playlists"]},d=u,p=n("2877"),f=Object(p["a"])(d,a,c,!1,null,null,null),v=f.exports,y={name:"App",components:{playlists:v},data:function(){return{selectedVideo:"",playlists:[],videos:[],selectedPlaylist:"",api:{endpoint:"https://www.googleapis.com/youtube/v3",key:"AIzaSyC-C3ut8Wm3KeYYuxs_RawKtT6oHhl0tLg",channelId:"UCp0Kd665CtievA0ss105ujA"}}},methods:{getPlaylists:function(){var e=this;l.a.get("https://plexus-flask-api.herokuapp.com/api.json").then((function(t){e.playlists=t.data.items}))},getPlaylistVideos:function(e){this.videos=this.playlists.find((function(t){return t.id===e})).videos},selectPlaylist:function(e){console.log(e),this.selectedPlaylist=e,this.getPlaylistVideos(e)},videoHover:function(e){this.selectedVideo=e},videoHoverLeave:function(){this.selectedVideo=""},buy:function(e){window.location.href="https://form.jotform.com/82301321716243?productLink=https://youtu.be/".concat(e)}},created:function(){this.getPlaylists()}},h=y,m=(n("034f"),Object(p["a"])(h,s,o,!1,null,null,null)),b=m.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(b)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.2c74cfce.js.map