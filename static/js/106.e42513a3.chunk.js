"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[106],{713:function(t,e,r){r.d(e,{Hx:function(){return p},Y5:function(){return o},mv:function(){return i},uV:function(){return f},wr:function(){return c}});var n=r(861),a=r(757),u=r.n(a),s=r(16);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.params={api_key:"b86981a07e5296001ff10a61d56b5942"};var c=function(){var t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("trending/movie/day");case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("search/movie?query=".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(e,"/credits?"));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(e,"/reviews?"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},106:function(t,e,r){r.r(e),r.d(e,{default:function(){return _}});var n=r(861),a=r(439),u=r(757),s=r.n(u),c=r(791),i=r(689),o=r(713),f="CastListItem_castListItem__iTy6w",p="CastListItem_castName__+Qlhd",m="CastListItem_castImage__GOW4u",v=r(184),l=function(t){var e=t.profilePath,r=t.originalName,n=t.name;return(0,v.jsxs)("li",{className:f,children:[(0,v.jsx)("img",{className:m,src:e?"https://image.tmdb.org/t/p/w300".concat(e):"https://dummyimage.com/150x225/969696/e0e0e0.jpg&text=No+image",alt:r}),(0,v.jsx)("p",{className:p,children:n})]})},h="CastList_castList__YQOUt",d=r(455),_=function(){var t=(0,i.UO)().movieId,e=(0,c.useState)([]),r=(0,a.Z)(e,2),u=r[0],f=r[1],p=(0,c.useState)(!0),m=(0,a.Z)(p,2),_=m[0],x=m[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.uV)(t);case 3:r=e.sent,f(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching cast data:",e.t0);case 10:return e.prev=10,x(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),_?(0,v.jsx)(d.Z,{}):(0,v.jsx)("ul",{className:h,children:u.map((function(t){return(0,v.jsx)(l,{profilePath:t.profile_path,originalName:t.original_name,name:t.name},t.id)}))})}}}]);
//# sourceMappingURL=106.e42513a3.chunk.js.map