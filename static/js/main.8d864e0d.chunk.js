(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{38:function(n,e,t){n.exports=t(50)},50:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(23),c=t.n(o),i=t(3),u=t(21),l={color:{buttonBackground:"#008080",sectionBackground:"#fff",shadow:"#ccc",background:"#eee",transparent:"transparent",check:"#008000",remove:"#ff0000",edit:"#ffa500",outline:"#000",interactionButtonText:"#fff",text:"#000"},breakpoint:{mobileMax:767,mini:375}},d=Object(u.a)(Object(u.a)({},l),{},{color:{buttonBackground:"#6CAAE0",sectionBackground:"#3C4453",shadow:"#000",background:"#272A30",transparent:"transparent",check:"#008000",remove:"#f00",edit:"#ffa500",outline:"#808080",interactionButtonText:"#fff",text:"#EBEDEF"}}),s=t(4);function f(){var n=Object(s.a)(["\n    html {\n        box-sizing: border-box;\n        background-color: ",";\n    }\n\n    *, ::before, ::after {\n        box-sizing: inherit;\n    }\n\n    :focus {\n        outline: 2px solid ",";\n    }\n\n    body {\n        font-family: 'Montserrat', sans-serif;\n        color: ",";\n        font-size: 16px;\n        background-color: ",";\n        transition: background 0.3s;\n        height: 100vh;\n    }\n"]);return f=function(){return n},n}var m=Object(i.b)(f(),(function(n){return n.theme.color.background}),(function(n){return n.theme.color.outline}),(function(n){return n.theme.color.text}),(function(n){return n.theme.color.background})),b=t(22),p=t(7);function g(){var n=Object(s.a)(["\n    height: 55px;\n    font-size: 20px;\n    background-color: ",";\n    color: ",";\n    border: none;\n    padding: 15px;\n    transition: background 0.3s, transform 0.3s;\n    cursor: pointer;\n\n    &:hover {\n        filter: brightness(120%);\n        transform: scale(1.1);\n    }\n"]);return g=function(){return n},n}function h(){var n=Object(s.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-gap: 20px;\n\n    @media(max-width: ","px) {\n        grid-template-columns: 1fr;\n    }\n"]);return h=function(){return n},n}var k=i.d.form(h(),(function(n){return n.theme.breakpoint.mobileMax})),v=i.d.button(g(),(function(n){return n.theme.color.buttonBackground}),(function(n){return n.theme.color.sectionBackground})),x=t(16),j=Object(x.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem("tasks"))||[],isHidingEnabled:!1,exampleTasksLoading:!1,query:""},reducers:{addTasks:function(n,e){var t=n.tasks;e.payload.forEach((function(n){return t.push(n)}))},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,a=t.findIndex((function(n){return n.id===r}));t[a].done=!t[a].done},deleteTask:function(n,e){var t=e.payload;n.tasks=n.tasks.filter((function(n){return n.id!==t}))},doAllTasks:function(n){n.tasks=n.tasks.map((function(n){return Object(u.a)(Object(u.a)({},n),{},{done:!0})}))},removeAllTasks:function(n){n.tasks=[]},toggleIsHidingEnabled:function(n){n.isHidingEnabled=!n.isHidingEnabled},editTask:function(n,e){var t=n.tasks,r=e.payload,a=r.id,o=r.name,c=t.findIndex((function(n){return n.id===a}));t[c].name=o},fetchExampleTasks:function(){},setExampleTasksLoading:function(n,e){var t=e.payload;n.exampleTasksLoading=t},setQuery:function(n,e){var t=e.payload;n.query=t}}}),O=j.actions,E=O.addTasks,w=O.toggleIsHidingEnabled,y=O.toggleTaskDone,z=O.deleteTask,T=O.doAllTasks,C=O.removeAllTasks,B=O.editTask,S=O.fetchExampleTasks,A=O.setExampleTasksLoading,H=O.setQuery,I=function(n){return n.tasks.tasks},J=function(n){return n.tasks.isHidingEnabled},L=function(n){return n.tasks.exampleTasksLoading},D=function(n){return n.tasks.query},N=function(n){return n.tasks.tasks.every((function(n){return n.done}))},M=function(n){return n.tasks.tasks.every((function(n){return!n.done}))},F=j.reducer;function U(){var n=Object(s.a)(["\n    width: 100%;\n    height: 55px;\n    border: 3px solid ",";\n    padding: 10px;\n    background-color: ",";\n    color: ",";\n    border: 1px solid ",";\n"]);return U=function(){return n},n}var q=i.d.input(U(),(function(n){return n.theme.color.background}),(function(n){return n.theme.color.background}),(function(n){return n.theme.color.text}),(function(n){return n.theme.color.shadow})),W=function(){var n=Object(r.useState)(""),e=Object(b.a)(n,2),t=e[0],o=e[1],c=Object(r.useRef)(null),i=Object(p.b)();return a.a.createElement(k,{onSubmit:function(n){if(n.preventDefault(),c.current.focus(),!t.trim())return 0;i(E([{name:t.trim(),done:!1,id:Object(x.c)()}])),o("")}},a.a.createElement(q,{ref:c,value:t,onChange:function(n){var e=n.target;return o(e.value)},autoFocus:!0,placeholder:"Co jest do zrobienia?"}),a.a.createElement(v,null,"Dodaj zadanie"))},P=t(19);function Q(){var n=Object(s.a)(["\n    text-decoration: none;\n    color: ",";\n    transition: 0.3s;\n\n    &:hover {\n        filter: brightness(120%);\n    }\n    &:active {\n        filter: brightness(140%);\n    }\n"]);return Q=function(){return n},n}function Z(){var n=Object(s.a)(["\n    width: 100%;\n    padding: 5px;\n    border: 1px solid ",";\n    background-color: ",";\n    color: ",";\n"]);return Z=function(){return n},n}function K(){var n=Object(s.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-gap: 10px;\n    align-items: center;\n"]);return K=function(){return n},n}function R(){var n=Object(s.a)(["\n        background-color: ",";\n    "]);return R=function(){return n},n}function $(){var n=Object(s.a)(["\n        background-color: ",";\n        font-size: unset;\n        width: unset;\n        padding: 0px 10px;\n    "]);return $=function(){return n},n}function G(){var n=Object(s.a)(["\n        background-color: ",";\n    "]);return G=function(){return n},n}function V(){var n=Object(s.a)(["\n        background-color: ",";\n    "]);return V=function(){return n},n}function X(){var n=Object(s.a)(["\n    width: 30px;\n    height: 30px;\n    border: none;\n    transition: 0.3s;\n    color: ",";\n    font-size: 22px;\n    padding: 0px;\n    cursor: pointer;\n\n    ","\n    ","\n    ","\n    ","\n\n    &:hover {\n        filter: brightness(120%);\n    }\n    &:active {\n        filter: brightness(140%);\n    }\n"]);return X=function(){return n},n}function Y(){var n=Object(s.a)(["\n        text-decoration: line-through;\n    "]);return Y=function(){return n},n}function _(){var n=Object(s.a)(["\n    overflow-wrap: anywhere;\n\n    ","\n"]);return _=function(){return n},n}function nn(){var n=Object(s.a)(["\n        display: none;\n    "]);return nn=function(){return n},n}function en(){var n=Object(s.a)(["\n    border-bottom: 3px solid ",";\n    display: grid;\n    grid-template-columns: auto 1fr auto ;\n    grid-gap: 10px;\n    padding: 10px;\n    align-items: center;\n\n    ","\n"]);return en=function(){return n},n}function tn(){var n=Object(s.a)(["\n    list-style-type: none;\n    padding-left: 0;\n    margin: 0;\n"]);return tn=function(){return n},n}var rn=i.d.ul(tn()),an=i.d.li(en(),(function(n){return n.theme.color.background}),(function(n){return n.hidden&&Object(i.c)(nn())})),on=i.d.span(_(),(function(n){return n.done&&Object(i.c)(Y())})),cn=i.d.button(X(),(function(n){return n.theme.color.interactionButtonText}),(function(n){return n.toggleDone&&Object(i.c)(V(),(function(n){return n.theme.color.check}))}),(function(n){return n.edit&&Object(i.c)(G(),(function(n){return n.theme.color.edit}))}),(function(n){return n.save&&Object(i.c)($(),(function(n){return n.theme.color.edit}))}),(function(n){return n.remove&&Object(i.c)(R(),(function(n){return n.theme.color.remove}))})),un=i.d.div(K()),ln=i.d.input(Z(),(function(n){return n.theme.color.shadow}),(function(n){return n.theme.color.background}),(function(n){return n.theme.color.text})),dn=Object(i.d)(P.b)(Q(),(function(n){return n.theme.color.buttonBackground})),sn=function(){var n=Object(p.c)(D),e=Object(p.c)((function(e){return function(n,e){return e&&""!==e.trim()?I(n).filter((function(n){return n.name.toLowerCase().includes(e.trim().toLowerCase())})):I(n)}(e,n)})),t=Object(p.c)(J),o=Object(r.useState)(""),c=Object(b.a)(o,2),i=c[0],u=c[1],l=Object(r.useState)(0),d=Object(b.a)(l,2),s=d[0],f=d[1],m=Object(p.b)();if(!e.length)return a.a.createElement("p",null,n?"Brak pasuj\u0105cych zada\u0144.":"Aktualnie nie masz \u017cadnych zada\u0144 do wykonania. Ciesz si\u0119 wolnym czasem :)");return a.a.createElement(rn,null,e.map((function(n){var e=n.id,r=n.name,o=n.done;return a.a.createElement(an,{key:e,hidden:o&&t},a.a.createElement(cn,{toggleDone:!0,onClick:function(){return m(y(e))}},o?"\u2714":""),s===e?a.a.createElement(un,{as:"form"},a.a.createElement(ln,{autoFocus:!0,value:i,onChange:function(n){var e=n.target;return u(e.value)}}),a.a.createElement(cn,{save:!0,onClick:function(){return function(n,e){m(B({name:i.trim()||e,id:n})),f(void 0)}(e,r)}},"Zapisz")):a.a.createElement(un,null,a.a.createElement(on,{done:o},a.a.createElement(dn,{to:"/zadania/".concat(e)},r)),a.a.createElement(cn,{edit:!0,onClick:function(){return function(n,e){f(n),u(e)}(e,r)}},"\u270f")),a.a.createElement(cn,{remove:!0,onClick:function(){return m(z(e))}},"\ud83d\uddd1"))})))};function fn(){var n=Object(s.a)(["\n    display: flex;\n    align-items: center;\n\n    @media (max-width: ","px) {\n        flex-direction: column;\n        margin-bottom: 20px;\n    }\n"]);return fn=function(){return n},n}var mn=i.d.div(fn(),(function(n){return n.theme.breakpoint.mobileMax}));function bn(){var n=Object(s.a)(["\n    background-color: ",";\n    border: none;\n    padding: 20px;\n    color: ",";\n    transition: 0.3s;\n    cursor: pointer;\n\n    @media (max-width: ","px) {\n        padding: 15px;\n    }\n\n    &:hover {\n        filter: brightness(120%);\n    }\n\n    &:active {\n        filter: brightness(140%);\n    }\n\n    &:disabled {\n        color: ",";\n        cursor: unset;\n        filter: none;\n    }\n"]);return bn=function(){return n},n}var pn=i.d.button(bn(),(function(n){return n.theme.color.transparent}),(function(n){return n.theme.color.buttonBackground}),(function(n){return n.theme.breakpoint.mobileMax}),(function(n){return n.theme.color.shadow})),gn=function(){var n=Object(p.c)(I),e=Object(p.c)(J),t=Object(p.c)(N),r=Object(p.c)(M),o=Object(p.b)();return a.a.createElement(mn,null,n.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement(pn,{disabled:r,onClick:function(){return o(w())}},e?"Poka\u017c":"Ukryj"," uko\u0144czone"),a.a.createElement(pn,{disabled:t,onClick:function(){return o(T())}},"Uko\u0144cz wszystkie"),a.a.createElement(pn,{onClick:function(){return o(C())}},"Usu\u0144 wszystkie")))};function hn(){var n=Object(s.a)(["\n    padding: 20px;\n    border-top: 3px solid ",";\n"]);return hn=function(){return n},n}function kn(){var n=Object(s.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n\n    @media (max-width: ","px) {\n        grid-template-columns: 1fr;\n    }\n"]);return kn=function(){return n},n}function vn(){var n=Object(s.a)(["\n    padding: 20px;\n    margin: 0;\n"]);return vn=function(){return n},n}function xn(){var n=Object(s.a)(["\n    background: ",";\n    margin-bottom: 15px;\n    box-shadow: 0 0 5px ",";\n"]);return xn=function(){return n},n}var jn=i.d.section(xn(),(function(n){return n.theme.color.sectionBackground}),(function(n){return n.theme.color.shadow})),On=i.d.h2(vn()),En=i.d.div(kn(),(function(n){return n.theme.breakpoint.mobileMax})),wn=i.d.div(hn(),(function(n){return n.theme.color.background})),yn=function(n){var e=n.title,t=n.extraHeaderContent,r=n.body;return a.a.createElement(jn,null,a.a.createElement(En,null,a.a.createElement(On,null,e),t),a.a.createElement(wn,null,r))},zn=Object(x.b)({name:"theme",initialState:{darkTheme:JSON.parse(localStorage.getItem("theme"))||!1},reducers:{toggleTheme:function(n){n.darkTheme=!n.darkTheme}}}),Tn=zn.actions.toggleTheme,Cn=function(n){return n.theme.darkTheme},Bn=zn.reducer;function Sn(){var n=Object(s.a)(["\n    border: none;\n    background-color: ",";\n    color: ",";\n    box-shadow: 0 0 5px ",";\n    font-size: 1em;\n    display: block;\n    padding: 10px;\n    cursor: pointer;\n"]);return Sn=function(){return n},n}function An(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    @media(max-width: 1100px) {\n        padding: 0 10px;\n    }\n\n    @media(max-width: ","px ) {\n        flex-direction: column;\n        margin-bottom: 20px;\n    }\n"]);return An=function(){return n},n}var Hn=i.d.header(An(),(function(n){return n.theme.breakpoint.mini})),In=i.d.button(Sn(),(function(n){return n.theme.color.sectionBackground}),(function(n){return n.theme.color.text}),(function(n){return n.theme.color.shadow})),Jn=function(n){var e=n.title,t=Object(p.c)(Cn),r=Object(p.b)();return a.a.createElement(Hn,null,a.a.createElement("h1",null,e),a.a.createElement(In,{onClick:function(){return r(Tn())}},t?"Jasny motyw":"Ciemny motyw"))};function Ln(){var n=Object(s.a)(["\n    width: 1100px;\n    max-width: 100%;\n    margin: 60px auto 0;\n"]);return Ln=function(){return n},n}var Dn=i.d.main(Ln()),Nn=function(n){var e=n.children;return a.a.createElement(Dn,null,e)},Mn=function(){var n=Object(p.b)(),e=Object(p.c)(L);return a.a.createElement(pn,{onClick:function(){return n(S())},disabled:e},e?"\u0141adowanie...":"Pobierz przyk\u0142adowe zadania")},Fn=function(){var n=Object(p.c)(D),e=Object(p.b)();return a.a.createElement(q,{placeholder:"Filtruj zadania",value:n,onChange:function(n){var t=n.target;return e(H(t.value))}})},Un=function(){return a.a.createElement(Nn,null,a.a.createElement(Jn,{title:"Lista zada\u0144"}),a.a.createElement(yn,{title:"Dodaj nowe zadanie",extraHeaderContent:a.a.createElement(Mn,null),body:a.a.createElement(W,null)}),a.a.createElement(yn,{title:"Wyszukiwarka",body:a.a.createElement(Fn,null)}),a.a.createElement(yn,{title:"Lista zada\u0144",extraHeaderContent:a.a.createElement(gn,null),body:a.a.createElement(sn,null)}))},qn=t(8),Wn=function(){var n=Object(qn.g)().id,e=Object(p.c)((function(e){return function(n,e){return I(n).find((function(n){return n.id===e}))}(e,n)}));return a.a.createElement(Nn,null,a.a.createElement(Jn,{title:"Szczeg\xf3\u0142y zadania"}),e?a.a.createElement(yn,{title:e.name,body:a.a.createElement(a.a.Fragment,null,a.a.createElement("strong",null,"Uko\u0144czono:"),e.done?" Tak":" Nie")}):a.a.createElement(yn,{title:"Nie ma takiego zadania na li\u015bcie"}))},Pn=function(){return a.a.createElement(Nn,null,a.a.createElement(Jn,{title:"O Autorze"}),a.a.createElement(yn,{title:"Kalina Jakubowska",body:"Hej! Jak zapewne si\u0119 domy\u015blasz, lubi\u0119 mizia\u0107 koty.\r Nie lubi\u0119 za to pisa\u0107 o sobie, tak\u017ce ten... mi\u0142ego dnia!\r A je\u017celi masz jakiego\u015b kota pod r\u0119k\u0105 - wiesz co robi\u0107 \ud83d\ude01"}))};function Qn(){var n=Object(s.a)(["\n    padding: 20px;\n"]);return Qn=function(){return n},n}function Zn(){var n=Object(s.a)(["\n    background-color: ",";\n    display: flex;\n    justify-content: center;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n\n    @media (max-width: ","px) {\n        flex-direction: column;\n        align-items: center\n    }\n"]);return Zn=function(){return n},n}function Kn(){var n=Object(s.a)(["\n        font-size: 20px;\n        font-weight: bold;\n        text-decoration: none;\n        background-color: ",";\n        color: ",";\n        padding: 10px;\n\n        &."," {\n            filter: brightness(90%);\n        }\n    "]);return Kn=function(){return n},n}var Rn=Object(i.d)(P.c).attrs((function(){return{activeClassName:"active"}}))(Kn(),(function(n){return n.theme.color.buttonBackground}),(function(n){return n.theme.color.sectionBackground}),"active"),$n=i.d.ul(Zn(),(function(n){return n.theme.color.buttonBackground}),(function(n){return n.theme.breakpoint.mini})),Gn=i.d.li(Qn()),Vn=function(){var n=Object(p.c)(Cn);return a.a.createElement(i.a,{theme:n?d:l},a.a.createElement(m,null),a.a.createElement(P.a,null,a.a.createElement("nav",null,a.a.createElement($n,null,a.a.createElement(Gn,null,a.a.createElement(Rn,{to:"/zadania"},"Zadania")),a.a.createElement(Gn,null,a.a.createElement(Rn,{to:"/o-autorze"},"O autorze"))),a.a.createElement(qn.d,null,a.a.createElement(qn.b,{path:"/zadania/:id"},a.a.createElement(Wn,null)),a.a.createElement(qn.b,{path:"/zadania"},a.a.createElement(Un,null)),a.a.createElement(qn.b,{path:"/o-autorze"},a.a.createElement(Pn,null)),a.a.createElement(qn.b,{path:"/"},a.a.createElement(qn.a,{to:"/zadania"}))))))},Xn=t(37),Yn=t(14),_n=t.n(Yn),ne=t(15),ee=t(36),te=function(){var n=Object(ee.a)(_n.a.mark((function n(){var e;return _n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/todos-list-react/exampleTasks.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),re=_n.a.mark(oe),ae=_n.a.mark(ce);function oe(){var n;return _n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(ne.d)(A(!0));case 3:return e.next=5,Object(ne.c)(1e3);case 5:return e.next=7,Object(ne.b)(te);case 7:return n=e.sent,e.next=10,Object(ne.d)(E(n));case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),e.next=16,Object(ne.b)(alert,"Co\u015b posz\u0142o nie tak!");case 16:return e.prev=16,e.next=19,Object(ne.d)(A(!1));case 19:return e.finish(16);case 20:case"end":return e.stop()}}),re,null,[[0,12,16,20]])}function ce(){return _n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ne.e)(S.type,oe);case 2:case"end":return n.stop()}}),ae)}var ie=_n.a.mark(ue);function ue(){return _n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ne.a)([ce()]);case 2:case"end":return n.stop()}}),ie)}var le=Object(Xn.a)(),de=Object(x.a)({reducer:{tasks:F,theme:Bn},middleware:[le]});le.run(ue),de.subscribe((function(){localStorage.setItem("theme",JSON.stringify(de.getState().theme.darkTheme)),localStorage.setItem("tasks",JSON.stringify(de.getState().tasks.tasks))}));var se=de;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(p.a,{store:se},a.a.createElement(a.a.StrictMode,null,a.a.createElement(Vn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.8d864e0d.chunk.js.map