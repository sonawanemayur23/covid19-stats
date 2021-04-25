(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{128:function(e,t,c){},182:function(e,t,c){"use strict";c.r(t);var s=c(0),r=c.n(s),a=c(21),n=c.n(a),i=(c(128),c(190)),d=c(107),l=c(6);function o(){return Object(l.jsx)("div",{id:"outer-container",children:Object(l.jsxs)(d.slide,{pageWrapId:"page-wrap",width:"20%",id:"sidebar",className:"my-menu",children:[Object(l.jsx)("a",{id:"home",className:"menu-item",href:"/",children:"Home"}),Object(l.jsx)("a",{id:"about",className:"menu-item",href:"/about",children:"About"}),Object(l.jsx)("a",{id:"contact",className:"menu-item",href:"/resources",children:"Resources"})]})})}var j=i.a.Footer;function h(){return Object(l.jsx)(j,{style:{textAlign:"center"},children:"Built by Mayur Sonawane."})}var b=c(118),x=c(23),u=c(92),O=c(68),m=c(189),f=c(62),g=c(40),p=c(187),v=c(188),y={color:{primary:"#6A1B4D",active:"blue",confirmed:"#E83A59",recovered:"#1FAA59",deaths:"#242B2E",white:"#fff",black:"#000"},size:{xs:"0.5vw",sm:"1vw",md:"1.2vw",xl:"1.4vw",xxl:"2vw",xxxl:"2.2vw"},padding:{xs:"2px",sm:"4px",md:"8px",xl:"16px",xxl:"32px",xxxl:"64px"},weight:{normal:300,bold:700,bolder:"bolder"}},w=function(e){return(new Intl.NumberFormat).format(e)},k=m.a.Title;function D(e){var t=e.data.statewise.filter((function(e){return"Total"===e.state})).map((function(e){return"Total"===e.state?[{title:"Confirmed",data:e.confirmed,delta:e.deltaconfirmed},{title:"Active",data:e.active,delta:0},{title:"Recovered",data:e.recovered,delta:e.deltarecovered},{title:"Deceased",data:e.deaths,delta:e.deltadeaths}]:[]}));console.log(t);var c=function(e){return"Confirmed"===e.title?{color:y.color.confirmed,borderRadius:10,background:"linear-gradient(180deg, #f2cbd0 0%, white 100%)"}:"Active"===e.title?{color:y.color.active,borderRadius:10,background:"linear-gradient(180deg, #cbccf2 0%, white 100%)"}:"Recovered"===e.title?{color:y.color.recovered,borderRadius:10,background:"linear-gradient(180deg, #cef2cb 0%, white 100%)"}:"Deceased"===e.title?{color:y.color.deaths,borderRadius:10,background:"linear-gradient(180deg, #c1c6c1 0%, white 100%)"}:void 0};return Object(l.jsx)("div",{children:Object(l.jsxs)(f.a,{children:[Object(l.jsx)(g.a,{xs:2,sm:4,md:6,lg:8,xl:4}),Object(l.jsxs)(g.a,{xs:20,sm:16,md:12,lg:8,xl:16,children:[Object(l.jsxs)(f.a,{children:[" ",Object(l.jsx)(k,{style:{fontSize:y.size.xxl,color:y.color.primary},level:4,children:"COVID19 INDIA \u2764\ufe0f"})]}),Object(l.jsx)(p.b,{grid:{gutter:16,column:4},dataSource:t[0],renderItem:function(e){return Object(l.jsx)(p.b.Item,{children:Object(l.jsxs)(v.a,{style:c(e),children:[Object(l.jsxs)(f.a,{children:[" ",Object(l.jsx)("span",{style:{fontSize:y.size.md},children:e.title})]}),Object(l.jsxs)(f.a,{children:[" ",e.delta&&Object(l.jsxs)("span",{style:{fontSize:y.size.sm},children:[" ","+ ",w(e.delta)]})]}),Object(l.jsx)(f.a,{children:Object(l.jsx)("span",{style:{fontSize:y.size.xl,fontWeight:y.weight.bolder},children:w(e.data)})})]})})}})]}),Object(l.jsx)(g.a,{xs:2,sm:4,md:6,lg:8,xl:4})]})})}var A=c(116),S={url:c.n(A).a.create({baseURL:"https://api.covid19india.org/"}),path:{data:"data.json",stateDistrict:"state_district_wise.json"}},C=c(191),R=function(e){var t=e,c=(t=t.split("/"))[2].split(" "),s=c[1].split(":");return new Date(c[0],t[1]-1,t[0],s[0],s[1],s[2]).getTime()},T=c(117),z=c.n(T);function I(e){var t=e.data,c=e.history;return console.log(c),Object(l.jsxs)(f.a,{children:[Object(l.jsx)(g.a,{xs:2,sm:4,md:6,lg:8,xl:4}),Object(l.jsx)(g.a,{xs:20,sm:16,md:12,lg:8,xl:16,children:Object(l.jsxs)(C.a,{responsive:!0,size:"sm",hover:!0,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{style:{color:y.color.primary},children:[Object(l.jsx)("th",{children:"State"}),Object(l.jsx)("th",{children:"Confirmed"}),Object(l.jsx)("th",{children:"Active"}),Object(l.jsx)("th",{children:"Recovered"}),Object(l.jsx)("th",{children:"Deceased"}),Object(l.jsx)("th",{children:"Update"})]})}),Object(l.jsx)("tbody",{children:t.statewise.map((function(e,t){return e.state.includes("Total")||e.state.includes("State Unassigned")?null:Object(l.jsxs)("tr",{onClick:function(){return c.push("/state-details/".concat(e.state))},children:[Object(l.jsx)("th",{scope:"row",style:{color:y.color.primary},children:e.state}),Object(l.jsx)("td",{style:{color:y.color.confirmed},children:w(e.confirmed)}),Object(l.jsx)("td",{style:{color:y.color.active},children:w(e.active)}),Object(l.jsx)("td",{style:{color:y.color.recovered},children:w(e.recovered)}),Object(l.jsx)("td",{style:{color:y.color.deaths},children:w(e.deaths)}),Object(l.jsx)("td",{style:{color:"gray"},children:Object(l.jsx)("small",{children:z()(R(e.lastupdatedtime)).fromNow()})})]},t)}))})]})}),Object(l.jsx)(g.a,{xs:2,sm:4,md:6,lg:8,xl:4})]})}function N(e){var t=Object(s.useState)(null),c=Object(O.a)(t,2),r=c[0],a=c[1];return Object(s.useEffect)((function(){S.url.get(S.path.data).then((function(e){return a(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)("marquee",{children:"All data is provided by covid19india.org, volunteer driven, crowdsourced tracker for Covid19 cases in India. "}),r&&Object(l.jsx)(D,Object(u.a)({data:r},e)),r&&Object(l.jsx)(I,Object(u.a)({data:r},e))]})}function F(){return Object(l.jsx)("div",{children:Object(l.jsxs)(f.a,{children:[Object(l.jsx)(g.a,{xs:2,sm:4,md:6,lg:8,xl:4}),Object(l.jsxs)(g.a,{xs:20,sm:16,md:12,lg:8,xl:16,children:[Object(l.jsx)("h1",{children:"About"}),"You will find that any event which causes the chart to re-render, such as hover tooltips, etc., will cause the first dataset to be copied over to other datasets, causing your lines and bars to merge together. This is because to track changes in the dataset series, the library needs a key to be specified - if none is found, it can't tell the difference between the datasets while updating. To get around this issue, you can take these two approaches:"]}),Object(l.jsx)(g.a,{xs:2,sm:4,md:6,lg:8,xl:4})]})})}function B(){return Object(l.jsx)("div",{children:Object(l.jsxs)(f.a,{children:[Object(l.jsx)(g.a,{xs:2,sm:4,md:6,lg:8,xl:4}),Object(l.jsxs)(g.a,{xs:20,sm:16,md:12,lg:8,xl:16,children:[Object(l.jsx)("h1",{children:"Resources"}),"You will find that any event which causes the chart to re-render, such as hover tooltips, etc., will cause the first dataset to be copied over to other datasets, causing your lines and bars to merge together. This is because to track changes in the dataset series, the library needs a key to be specified - if none is found, it can't tell the difference between the datasets while updating. To get around this issue, you can take these two approaches:"]}),Object(l.jsx)(g.a,{xs:2,sm:4,md:6,lg:8,xl:4})]})})}var E=c(192);function L(e){var t=e.match,c=e.history,r=Object(s.useState)(null),a=Object(O.a)(r,2),n=a[0],i=a[1],d=Object(s.useState)(null),o=Object(O.a)(d,2),j=o[0],h=o[1];return Object(s.useEffect)((function(){var e=t.params.name;S.url.get(S.path.stateDistrict).then((function(t){var c,s;i(null===(c=t.data[e])||void 0===c?void 0:c.districtData),h(Object.keys(null===(s=t.data[e])||void 0===s?void 0:s.districtData))})).catch((function(e){return console.log(e)}))}),[t]),console.log(n),Object(l.jsxs)(f.a,{children:[Object(l.jsx)(g.a,{xs:2,sm:4,md:6,lg:8,xl:4}),Object(l.jsx)(g.a,{xs:20,sm:16,md:12,lg:8,xl:16,children:j&&Object(l.jsxs)(C.a,{responsive:!0,size:"sm",hover:!0,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"District"}),Object(l.jsx)("th",{children:"Confirmed"}),Object(l.jsx)("th",{children:"Active"}),Object(l.jsx)("th",{children:"Recovered"}),Object(l.jsx)("th",{children:"Deceased"})]})}),Object(l.jsx)("tbody",{children:j.map((function(e,t){return Object(l.jsxs)("tr",{onClick:function(){return c.push("/state-details/".concat(e.state))},children:[Object(l.jsx)("th",{scope:"row",children:e}),Object(l.jsxs)("td",{style:{color:y.color.confirmed},children:[w(n[e].confirmed),Object(l.jsxs)("small",{style:{padding:y.padding.md},children:[" ",Object(l.jsx)(E.a,{})," ",w(n[e].delta.confirmed)]})]}),Object(l.jsx)("td",{style:{color:y.color.active},children:w(n[e].active)}),Object(l.jsxs)("td",{style:{color:y.color.recovered},children:[w(n[e].recovered),Object(l.jsxs)("small",{style:{padding:y.padding.md},children:[" ",Object(l.jsx)(E.a,{})," ",w(n[e].delta.recovered)]})]}),Object(l.jsxs)("td",{style:{color:y.color.deaths},children:[w(n[e].deceased),Object(l.jsxs)("small",{style:{padding:y.padding.md},children:[" ",Object(l.jsx)(E.a,{})," ",w(n[e].delta.deceased)]})]})]},t)}))})]})}),Object(l.jsx)(g.a,{xs:2,sm:4,md:6,lg:8,xl:4})]})}var U=i.a.Content;function J(){return Object(l.jsx)(U,{style:{marginLeft:"10%",marginRight:"10%",marginTop:"2rem"},children:Object(l.jsx)("div",{className:"site-layout-background",children:Object(l.jsx)(b.a,{children:Object(l.jsxs)(x.c,{children:[Object(l.jsx)(x.a,{path:"/",component:N,exact:!0}),Object(l.jsx)(x.a,{path:"/about",component:F}),Object(l.jsx)(x.a,{path:"/resources",component:B}),Object(l.jsx)(x.a,{path:"/state-details/:name",component:L})]})})})})}function M(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(o,{}),Object(l.jsx)(J,{}),Object(l.jsx)(h,{})]})}var P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,193)).then((function(t){var c=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),s(e),r(e),a(e),n(e)}))};c(180),c(181);n.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("root")),P()}},[[182,1,2]]]);
//# sourceMappingURL=main.c27bb318.chunk.js.map