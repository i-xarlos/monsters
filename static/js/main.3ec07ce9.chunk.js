(this["webpackJsonpmonsters-app"]=this["webpackJsonpmonsters-app"]||[]).push([[0],[,,,,,,,function(e,n,t){e.exports=t(17)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(2),o=t.n(c),s=(t(12),t(3)),l=t(4),i=t(6),u=t(5);t(13),t(14),t(15);function h(e){var n=e.id,t=e.name,a=e.email,c=e.username;return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:t,src:"https://robohash.org/".concat(n,"?size=200x200")}),r.a.createElement("h3",null,t),r.a.createElement("p",null,a),r.a.createElement("p",null,c))}function m(e){var n=e.search;return r.a.createElement("div",{className:"card-list"},n.map((function(e,n){return r.a.createElement(h,Object.assign({key:n},e,{name:e.name,email:e.email}))})))}t(16);function p(e){var n=e.onChange,t=function(e){var t=e.target.value;n(t)};return r.a.createElement("input",{className:"search-box",type:"search",placeholder:"Search monsters",onChange:function(e){return t(e)}})}var d=function(e){Object(i.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state={users:[],searchField:""},e.handleInputChange=function(n){e.setState({searchField:n})},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({users:n})}))}},{key:"render",value:function(){var e,n=this.state,t=n.users,a=n.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(a)}));return e=0===t.length?r.a.createElement("h2",null,"Loading..."):c.length>0?r.a.createElement(m,{search:c}):r.a.createElement("h2",null,"Don't have coincidences"),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters"),r.a.createElement(p,{onChange:this.handleInputChange}),r.a.createElement("div",{className:"App-content"},e))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.3ec07ce9.chunk.js.map