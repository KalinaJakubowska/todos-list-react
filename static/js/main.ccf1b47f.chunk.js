(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{16:function(n,e,t){n.exports=t(24)},21:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(11),c=t.n(o),i=(t(21),t(3)),u=t(1),l=t(2);function d(){var n=Object(u.a)(["\n    height: 55px;\n    font-size: 20px;\n    background-color: teal;\n    color: white;\n    border: none;\n    padding: 15px;\n    transition: background 0.3s, transform 0.3s;\n    cursor: pointer;\n\n    &:hover {\n        background-color: hsl(180, 100%, 35%);\n        transform: scale(1.1);\n    }\n"]);return d=function(){return n},n}function s(){var n=Object(u.a)(["\n    height: 55px;\n    border: 3px solid #eee;\n    padding: 10px;\n"]);return s=function(){return n},n}function f(){var n=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-gap: 20px;\n\n    @media(max-width: 767px) {\n        grid-template-columns: 1fr;\n    }\n"]);return f=function(){return n},n}var b=l.b.form(f()),m=l.b.input(s()),g=l.b.button(d()),p=function(n){var e=n.addNewTask,t=Object(r.useState)(""),o=Object(i.a)(t,2),c=o[0],u=o[1],l=Object(r.useRef)(null);return a.a.createElement(b,{onSubmit:function(n){n.preventDefault(),e(c.trim()),u(""),l.current.focus()}},a.a.createElement(m,{ref:l,value:c,onChange:function(n){var e=n.target;return u(e.value)},autoFocus:!0,placeholder:"Co jest do zrobienia?"}),a.a.createElement(g,null,"Dodaj zadanie"))};function v(){var n=Object(u.a)(["\n        background-color: red;\n\n        &:hover {\n            background-color: hsl(0, 100%, 65%);\n        }\n        &:active {\n            background-color: hsl(0, 100%, 75%);\n        }\n    "]);return v=function(){return n},n}function h(){var n=Object(u.a)(["\n        background-color: green;\n\n        &:hover {\n            background-color: hsl(120, 100%, 35%);\n        }\n        &:active {\n            background-color: hsl(120, 100%, 45%);\n        }\n    "]);return h=function(){return n},n}function k(){var n=Object(u.a)(["\n    width: 30px;\n    height: 30px;\n    border: none;\n    transition: background 0.3s;\n    color: white;\n    font-size: 22px;\n    padding: 0px;\n    cursor: pointer;\n\n    ","\n    ","\n"]);return k=function(){return n},n}function j(){var n=Object(u.a)(["\n        text-decoration: line-through;\n    "]);return j=function(){return n},n}function x(){var n=Object(u.a)(["\n    ","\n"]);return x=function(){return n},n}function E(){var n=Object(u.a)(["\n        display: none;\n    "]);return E=function(){return n},n}function O(){var n=Object(u.a)(["\n    border-bottom: 3px solid #eee;\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    grid-gap: 10px;\n    padding: 10px;\n    align-items: center;\n\n    ","\n"]);return O=function(){return n},n}function w(){var n=Object(u.a)(["\n    list-style-type: none;\n    padding-left: 0;\n    margin: 0;\n"]);return w=function(){return n},n}var y=l.b.ul(w()),T=l.b.li(O(),(function(n){return n.hidden&&Object(l.a)(E())})),z=l.b.span(x(),(function(n){return n.done&&Object(l.a)(j())})),C=l.b.button(k(),(function(n){return n.toggleDone&&Object(l.a)(h())}),(function(n){return n.remove&&Object(l.a)(v())})),D=function(n){var e=n.tasks,t=n.isHidingEnabled,r=n.deleteTask,o=n.toggleTaskDone;return e.length?a.a.createElement(y,null,e.map((function(n){var e=n.id,c=n.name,i=n.done;return a.a.createElement(T,{key:e,hidden:i&&t},a.a.createElement(C,{toggleDone:!0,onClick:function(){return o(e)}},i?"\u2714":""),a.a.createElement(z,{done:i},c),a.a.createElement(C,{remove:!0,onClick:function(){return r(e)}},"\ud83d\uddd1"))}))):a.a.createElement("p",null,"Aktualnie nie masz \u017cadnych zada\u0144 do wykonania. Ciesz si\u0119 wolnym czasem :)")};function S(){var n=Object(u.a)(["\n    background-color: transparent;\n    border: none;\n    padding: 20px;\n    color: teal;\n    transition: color 0.3s;\n    cursor: pointer;\n\n    @media (max-width: 767px) {\n        padding: 15px;\n    }\n\n    &:hover {\n        color: hsl(180, 100%, 35%);\n    }\n\n    &:active {\n        color: hsl(180, 100%, 45%);\n    }\n\n    &:disabled {\n        color: #ccc;\n    }\n"]);return S=function(){return n},n}function H(){var n=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n\n    @media (max-width: 767px) {\n        grid-template-columns: 1fr;\n        margin-bottom: 20px;\n    }\n"]);return H=function(){return n},n}var N=l.b.div(H()),A=l.b.button(S()),I=function(n){var e=n.tasks,t=n.isHidingEnabled,r=n.toggleIsHidingEnabled,o=n.doAllTasks;return a.a.createElement(N,null,e.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement(A,{disabled:e.every((function(n){return!n.done})),onClick:r},t?"Poka\u017c":"Ukryj"," uko\u0144czone"),a.a.createElement(A,{disabled:e.every((function(n){return n.done})),onClick:o},"Uko\u0144cz wszystkie")))};function J(){var n=Object(u.a)(["\n    padding: 20px;\n    border-top: 3px solid #eee;\n"]);return J=function(){return n},n}function B(){var n=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n\n    @media (max-width: 767px) {\n        grid-template-columns: 1fr;\n    }\n"]);return B=function(){return n},n}function F(){var n=Object(u.a)(["\n    padding: 20px;\n    margin: 0;\n"]);return F=function(){return n},n}function L(){var n=Object(u.a)(["\n    background: #fff;\n    margin-bottom: 15px;\n    box-shadow: 0 0 5px #ccc;\n"]);return L=function(){return n},n}var U=l.b.section(L()),W=l.b.h2(F()),M=l.b.div(B()),P=l.b.div(J()),R=function(n){var e=n.title,t=n.extraHeaderContent,r=n.body;return a.a.createElement(U,null,a.a.createElement(M,null,a.a.createElement(W,null,e),t),a.a.createElement(P,null,r))},$=function(n){var e=n.title;return a.a.createElement("header",null,a.a.createElement("h1",null,e))};function q(){var n=Object(u.a)(["\n    width: 1100px;\n    max-width: 100%;\n    margin: 60px auto 0;\n"]);return q=function(){return n},n}var G=l.b.main(q()),K=function(n){var e=n.children;return a.a.createElement(G,null,e)},Q=t(15),V=t(5);var X=function(){var n=Object(r.useState)(!1),e=Object(i.a)(n,2),t=e[0],o=e[1],c=function(){var n=Object(r.useState)(JSON.parse(localStorage.getItem("tasks"))||[]),e=Object(i.a)(n,2),t=e[0],a=e[1];Object(r.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(t))}),[t]);return{tasks:t,deleteTask:function(n){a((function(e){return e.filter((function(e){return e.id!==n}))}))},toggleTaskDone:function(n){a((function(e){return e.map((function(e){return e.id===n?Object(V.a)(Object(V.a)({},e),{},{done:!e.done}):e}))}))},doAllTasks:function(){a((function(n){return n.map((function(n){return Object(V.a)(Object(V.a)({},n),{},{done:!0})}))}))},addNewTask:function(n){n&&a((function(e){return[].concat(Object(Q.a)(e),[{name:n,done:!1,id:e.length?e[e.length-1].id+1:1}])}))}}}(),u=c.tasks,l=c.deleteTask,d=c.toggleTaskDone,s=c.doAllTasks,f=c.addNewTask;return a.a.createElement(K,null,a.a.createElement($,{title:"Lista zada\u0144"}),a.a.createElement(R,{title:"Dodaj nowe zadanie",body:a.a.createElement(p,{addNewTask:f})}),a.a.createElement(R,{title:"Lista zada\u0144",extraHeaderContent:a.a.createElement(I,{tasks:u,isHidingEnabled:t,toggleIsHidingEnabled:function(){o((function(n){return!n}))},doAllTasks:s}),body:a.a.createElement(D,{tasks:u,isHidingEnabled:t,deleteTask:l,toggleTaskDone:d})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.ccf1b47f.chunk.js.map