(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[12],{173:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s(5),r=s(21),l=s(0),i=function(e){var t=e.label,s=e.link,a=e.value,n=e.format;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{width:"70%",children:t}),Object(l.jsx)("td",{children:s?Object(l.jsx)("a",{href:s,children:n(a)}):n(a)})]})};i.defaultProps={format:function(e){return e},link:null,value:null};var c=i,o=function(e){var t=e.data;return Object(l.jsx)("table",{children:Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsx)(c,{format:e.format,label:e.label,link:e.link,value:e.value},e.label)}))})})},u=s(22),b=function(){var e=Object(a.useState)(),t=Object(u.a)(e,2),s=t[0],n=t[1];return Object(a.useEffect)((function(){var e=setInterval((function(){return function(){var e=new Date("1995-06-09T18:24:00");n(((Date.now()-e)/31556925190.079998).toFixed(11))}()}),25);return function(){clearInterval(e)}}),[]),Object(l.jsx)(l.Fragment,{children:s})},j=[{key:"age",label:"Current age",value:Object(l.jsx)(b,{})},{key:"Prefectures",label:"Prefectures visited",value:17,link:"https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2"},{key:"location",label:"Current city",value:"Fukuoka, FUK"}],h=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"Some stats about me"}),Object(l.jsx)(o,{data:j})]})},d=s(160),p=s.n(d),f=s(56),m=s(162),O=s(72),k=s.n(O),g=[{label:"Stars this repository has on github",key:"stargazers_count",link:"https://github.com/mldangelo/personal-site/stargazers"},{label:"Number of people watching this repository",key:"subscribers_count",link:"https://github.com/mldangelo/personal-site/stargazers"},{label:"Number of forks",key:"forks",link:"https://github.com/mldangelo/personal-site/network"},{label:"Number of spoons",value:"0"},{label:"Number of linter warnings",value:"0"},{label:"Open github issues",key:"open_issues_count",link:"https://github.com/mldangelo/personal-site/issues"},{label:"Last updated at",key:"pushed_at",link:"https://github.com/mldangelo/personal-site/commits",format:function(e){return k()(e).format("MMMM DD, YYYY")}},{label:"Lines of Javascript powering this website",value:"2115",link:"https://github.com/mldangelo/personal-site/graphs/contributors"}],v=function(){var e=Object(a.useState)(g),t=Object(u.a)(e,2),s=t[0],n=t[1],r=Object(a.useCallback)(Object(m.a)(p.a.mark((function e(){var t,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/mldangelo/personal-site");case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,n(g.map((function(e){return Object(f.a)(Object(f.a)({},e),{},{value:Object.keys(s).includes(e.key)?s[e.key]:e.value})})));case 7:case"end":return e.stop()}}),e)}))),[]);return Object(a.useEffect)((function(){r()}),[r]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Some stats about this site"}),Object(l.jsx)(o,{data:s})]})};t.default=function(){return Object(l.jsx)(r.a,{title:"Stats",description:"Some statistics about Simon Juba",children:Object(l.jsxs)("article",{className:"post",id:"stats",children:[Object(l.jsx)("header",{children:Object(l.jsx)("div",{className:"title",children:Object(l.jsx)("h2",{"data-testid":"heading",children:Object(l.jsx)(n.b,{to:"/stats",children:"Stats"})})})}),Object(l.jsx)(h,{}),Object(l.jsx)(v,{})]})})}}}]);
//# sourceMappingURL=12.e8add6b8.chunk.js.map