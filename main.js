!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=(r(o,a),o.locals?o.locals:{});e.exports=i},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function d(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],c=t.base?a[0]+t.base:a[0],s=n[c]||0,l="".concat(c," ").concat(s);n[c]=s+1;var u=d(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:v(p,t),references:1}),r.push(l)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function m(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,y=0;function v(e,t){var n,r,o;if(t.singleton){var a=y++;n=f||(f=s(t)),r=p.bind(null,n,a,!1),o=p.bind(null,n,a,!0)}else n=s(t),r=m.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=d(n[r]);i[o].references--}for(var a=c(e,t),s=0;s<n.length;s++){var l=d(n[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=a}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"body{background:url(https://a-static.besthdwallpaper.com/zapusk-office-desk-oboi-1680x1050-16911_5.jpg) no-repeat center top fixed;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;font-size:18px}a,button{cursor:pointer}nav{background-color:rgba(0,116,217,0.842);z-index:999}aside{background-color:rgba(17,102,55,0.815);height:100vh;min-height:100vh;padding:15px;border-radius:40px;box-shadow:0rem 0.5rem 5rem rgba(0,0,0,0.9);margin-right:25px}.head{color:rgba(0,7,13,0.842)}.head2{color:rgba(115,190,255,0.842);font-size:40px}.addBtn{padding:10px;border:none;border-radius:25px;background-color:rgba(115,190,255,0.842);box-shadow:0 0.5rem 1rem rgba(0,0,0,0.63);cursor:pointer}.addBtn:hover{background-color:rgba(0,116,217,0.842)}form{margin-top:25px}.small{font-size:14px;border-radius:15px;background-color:rgba(13,142,255,0.842)}.smallest{border-radius:8px;padding:3px;font-size:10px;background-color:rgba(13,142,255,0.842)}.tasks{background-color:rgba(27,18,18,0.973);height:100vh;margin-top:10px;border-radius:40px}.none{display:none}.taskBtn{position:fixed;bottom:0;margin-bottom:15px}.mainList{color:white}.mainList li{background-color:rgba(0,0,0,0.267);padding:5px;cursor:pointer;margin-bottom:2px}.active{font-weight:bold;text-decoration:underline}.deleteList{font-size:15px;padding:5px;background-color:rgba(166,214,255,0.842);border:none}.deleteList:hover{background-color:rgba(141,202,255,0.842)}.todos{display:flex}.todos input{color:white}.task-body{display:flex;flex-wrap:nowrap}.task-body li{margin:0 25px;text-align:center;width:100%}.headerList{display:flex;flex-wrap:nowrap}.headerList li{margin:0 25px;text-align:center;width:100%}.tskContainer{color:white;margin-top:35px}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,d=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(c," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,d,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";n.r(t);const r={refresh:e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},deleteTodo:e=>{e.parentElement.parentElement.remove()}},o={renderHTML:()=>{const e=document.createElement("aside");e.classList.add("left","col","m3","s12");const t=document.createElement("h2"),n=document.createElement("ul"),r=document.createElement("div");r.classList.add("tableTask");const o=document.createElement("div");o.classList.add("tskContainer"),o.innerHTML='\n      <ul class="headerList"><li>Title</li>\n      <li>Due date</li>\n      <li>Priority</li>\n      <li>Action1</li>\n      <li>Action2 </li></ul>',n.classList.add("mainList");const a=document.createElement("h2");t.classList.add("head"),a.classList.add("head2");const i=document.createElement("button");i.classList.add("addBtn");const d=document.createElement("section");d.classList.add("tasks","col","m8","s12");const c=document.querySelector(".row"),s=document.createElement("form"),l=document.createElement("button"),u=document.createElement("form");u.classList.add("todos"),u.innerHTML='<input type="text" class="titleName" placeholder="title" data-title>\n      <input type="text" class="description" placeholder="description" data-desc>\n      <input type="date" class="dueDate" placeholder="due-date" data-date>\n      <select class="browser-default " id="priority" data-priority>\n          <option value="" disabled selected>Priority</option>\n          <option value="Low">Low</option>\n          <option value="Medium">Medium</option>\n          <option value="High">High</option>\n      </select>\n      <input type="submit" id="action" class=" addBtn actionEdit none" value="Edit">\n      <input type="submit"  class="addBtn smallest" value="Add">',l.classList.add("deleteList"),l.innerHTML="Delete Project",s.classList.add("form1"),s.style.display="none",c.appendChild(e),e.appendChild(t),e.appendChild(n),e.appendChild(i),c.appendChild(d),d.appendChild(a),d.appendChild(u),d.appendChild(l),d.appendChild(o),o.appendChild(r);const p=document.createElement("button");p.classList.add("cancelEdit","none"),p.innerText="Cancel Edit",o.appendChild(p),e.appendChild(s),t.innerText=" List of projects: ",i.innerText="Add new project",s.innerHTML='\n    <input type="text" class="project" placeholder="Project name">\n    <br><br>\n    <input type="submit" class="addBtn small" value="Add project">\n    ';const m=[{id:"1",name:"default",tasks:[{id:"1",title:"default",description:"description",dueDate:"2025-05-05",priority:"Low",done:!1},{id:"2",title:"default2",description:"description2",dueDate:"2025-05-05",priority:"High",done:!1}]}];null===localStorage.getItem("projects")&&localStorage.setItem("projects",JSON.stringify(m))}},a=(()=>{o.renderHTML();const e=document.querySelector(".head2"),t=document.querySelector(".mainList"),n=document.querySelector(".tskContainer"),a=document.querySelector(".tableTask"),i=document.querySelector(".addBtn"),d=document.querySelector(".tasks"),c=document.querySelector(".form1"),s=document.querySelector(".deleteList"),l=document.querySelector(".cancelEdit"),u=document.querySelector("template");let p,m=JSON.parse(localStorage.getItem("projects"))||[];const f=()=>{localStorage.setItem("projects",JSON.stringify(m))},y=e=>{e.tasks.forEach(e=>{const t=document.importNode(u.content,!0),n=t.querySelector("input");t.querySelector(".task-body").dataset.taskList=e.id,n.checked=e.done;const r=t.querySelector(".name-title"),o=t.querySelector(".date"),i=t.querySelector(".priorityTd");r.append(e.title),o.append(e.dueDate),i.append(e.priority),a.appendChild(t)}),a.addEventListener("click",e=>{if("input"===e.target.tagName.toLowerCase()){const t=e.target.parentNode.parentNode.parentNode;m.find(e=>e.id===p).tasks.find(e=>e.id===t.dataset.taskList).done=e.target.checked,f()}if("btn-delete"===e.target.className){r.deleteTodo(e.target);const t=e.target.parentNode.parentNode,n=m.find(e=>e.id===p);n.tasks=n.tasks.filter(e=>e.id!==t.dataset.taskList),f()}if("btn-edit"===e.target.className){const r=e.target.parentNode.parentNode,i=document.getElementById("action"),d=m.find(e=>e.id===p).tasks.find(e=>e.id===r.dataset.taskList);t=d.title,n=d.description,o=d.dueDate,a=d.priority,document.querySelector("[data-title]").value=t,document.querySelector("[data-desc]").value=n,document.querySelector("[data-date]").value=o,document.querySelector("[data-priority]").value=a,i.dataset.taskAction=d.id,l.classList.remove("none"),i.classList.remove("none"),document.querySelector(".smallest").classList.add("none")}var t,n,o,a})},v=()=>{document.querySelector("[data-title]").value="",document.querySelector("[data-desc]").value="",document.querySelector("[data-date]").value="",document.querySelector("[data-priority]").value=""},h=()=>{(()=>{const e=document.getElementById("action");e.dataset.taskAction=null,e.classList.add("none"),document.querySelector(".smallest").classList.remove("none"),l.classList.add("none")})(),v()},g=()=>{r.refresh(t),m.forEach(e=>{const n=document.createElement("li");n.dataset.projectList=e.id,n.classList.add("list-name"),n.innerText=e.name,e.id===p&&n.classList.add("active"),t.appendChild(n)});const o=m.find(e=>e.id===p);null==p?d.style.display="none":(d.style.display="",e.innerText=`${o.name}   :  ${o.tasks.length}`,r.refresh(a),y(o),h(),0===o.tasks.length?(n.style.display="none",l.style.display="none"):(n.style.display="",l.style.display=""))},b=()=>{g(),f()},L=()=>{document.querySelector(".small").addEventListener("click",e=>{e.preventDefault();const t=document.querySelector(".project"),n=t.value;if(null==n||""===n)return;c.style.display="none",i.innerText="Add new Project";const r=(o=n,{id:Math.floor(1e3*Math.random()).toString(),name:o,tasks:[]});var o;t.value=null,m.push(r),b()})},x=()=>{document.querySelector(".smallest").addEventListener("click",e=>{const t=document.querySelector("[data-title]"),n=document.querySelector("[data-desc]"),r=document.querySelector("[data-date]"),o=document.querySelector("[data-priority]");e.preventDefault();const a=t.value,i=n.value,d=r.value,c=o.value;if(""===a||""===i||null===d||""===c)return;const s=(l=a,u=i,f=d,y=c,{id:Math.floor(1e3*Math.random()).toString(),title:l,description:u,dueDate:f,priority:y,done:!1});var l,u,f,y;m.find(e=>e.id===p).tasks.push(s),b(),v()})};l.addEventListener("click",()=>{h()});return{render:()=>{document.querySelector(".addBtn").addEventListener("click",()=>{"none"===c.style.display?setTimeout(()=>{i.innerText="Cancel",c.style.display="inherit"},200):(i.innerText="Add new Project",c.style.display="none")}),g(),L(),t.addEventListener("click",e=>{"li"===e.target.tagName.toLowerCase()&&(p=e.target.dataset.projectList,b())}),s.addEventListener("click",()=>{m=m.filter(e=>e.id!==p),p=null,d.style.display="none",b()}),x(),document.getElementById("action").addEventListener("click",e=>{const t=document.getElementById("action").dataset.taskAction,n=m.find(e=>e.id===p).tasks.find(e=>e.id===t),r=document.querySelector("[data-title]"),o=document.querySelector("[data-desc]"),a=document.querySelector("[data-date]"),i=document.querySelector("[data-priority]");e.preventDefault(),""!==r.value&&""!==o.value&&""!==a.value&&""!==i.value&&(n.title=r.value,n.description=o.value,n.dueDate=a.value,n.priority=i.value,b(),h())})}}})();n(0);a.render()}]);