(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[7],{174:function(t,e,s){"use strict";s.r(e);s(1);var n=s(5),r=s(21),i=s(72),a=s.n(i),o=s(0),u=function(t){var e=t.data;return Object(o.jsx)("div",{className:"cell-container",children:Object(o.jsxs)("article",{className:"mini-post",children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("h3",{children:Object(o.jsx)("a",{href:e.link,children:e.title})}),Object(o.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),Object(o.jsx)("a",{href:e.link,className:"image",children:Object(o.jsx)("img",{src:"".concat("/me").concat(e.image),alt:e.title})}),Object(o.jsx)("div",{className:"description",children:Object(o.jsx)("p",{children:e.desc})})]})})},c=[{title:"OCR Sudoku",subtitle:"React + Flask personal project",image:"/images/projects/nearestdollar.jpg",date:"2020-12-20",desc:"Sudoku app uses OpenCV based OCR network to read Sudoku grid from uploaded image. Allows users to play uploaded grid and visualize the solution obtained, through the backtracking algorithm. "},{title:"FUK NOW Classifieds",subtitle:"AI, React, algirithm solving project",link:"https://devpost.com/software/harvest",image:"/images/projects/harvest.jpg",date:"2021-01-20",desc:"App allows users to input their name and email address to subscribe or updates when new posts are made to the Fukuoka-now Classified section, a platform for foreign residents of the city to buy and sell used goods. Web scraping, email server, database management, web app."},{title:"Barney bot",subtitle:"A twitter bot",link:"http://www.spacepotato.org",image:"/images/projects/spacepotato.jpg",date:"2020-04-13",desc:"A twitter bot designed to respond to posts about the How I Met Your Mother TV show. The bot responses are based on an Recurrent Neural Network based on the script from the entire 9 seasons of the show, scraped from IMDB."},{title:"URLs",subtitle:"A URL shortener microservice",image:"/images/projects/catdetector.jpg",date:"2021-05-01",desc:"A URL shortener microservice designed using express.js. Post requests made to the API are responded to with the shortened url. A valid url with the aapi as base will be redirected to the original url saved in the database"}];e.default=function(){return Object(o.jsx)(r.a,{title:"Projects",description:"Learn about Simon Juba's projects.",children:Object(o.jsxs)("article",{className:"post",id:"projects",children:[Object(o.jsx)("header",{children:Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("h2",{"data-testid":"heading",children:Object(o.jsx)(n.b,{to:"/projects",children:"Projects"})}),Object(o.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),c.map((function(t){return Object(o.jsx)(u,{data:t},t.title)}))]})})}},72:function(t,e,s){t.exports=function(){"use strict";var t="millisecond",e="second",s="minute",n="hour",r="day",i="week",a="month",o="quarter",u="year",c="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,s){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(s)+t},p={s:f,z:function(t){var e=-t.utcOffset(),s=Math.abs(e),n=Math.floor(s/60),r=s%60;return(e<=0?"+":"-")+f(n,2,"0")+":"+f(r,2,"0")},m:function t(e,s){if(e.date()<s.date())return-t(s,e);var n=12*(s.year()-e.year())+(s.month()-e.month()),r=e.clone().add(n,a),i=s-r<0,o=e.clone().add(n+(i?-1:1),a);return+(-(n+(s-r)/(i?r-o:o-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:a,y:u,w:i,d:r,D:c,h:n,m:s,s:e,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",$={};$[m]=l;var g=function(t){return t instanceof M},b=function(t,e,s){var n;if(!t)return m;if("string"==typeof t)$[t]&&(n=t),e&&($[t]=e,n=t);else{var r=t.name;$[r]=t,n=r}return!s&&n&&(m=n),n||!s&&m},j=function(t,e){if(g(t))return t.clone();var s="object"==typeof e?e:{};return s.date=t,s.args=arguments,new M(s)},v=p;v.l=b,v.i=g,v.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function l(t){this.$L=b(t.locale,null,!0),this.parse(t)}var f=l.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,s=t.utc;if(null===e)return new Date(NaN);if(v.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(h);if(n){var r=n[2]-1||0,i=(n[7]||"0").substring(0,3);return s?new Date(Date.UTC(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return v},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var s=j(t);return this.startOf(e)<=s&&s<=this.endOf(e)},f.isAfter=function(t,e){return j(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<j(t)},f.$g=function(t,e,s){return v.u(t)?this[e]:this.set(s,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var h=this,d=!!v.u(o)||o,l=v.p(t),f=function(t,e){var s=v.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return d?s:s.endOf(r)},p=function(t,e){return v.w(h.toDate()[t].apply(h.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},m=this.$W,$=this.$M,g=this.$D,b="set"+(this.$u?"UTC":"");switch(l){case u:return d?f(1,0):f(31,11);case a:return d?f(1,$):f(0,$+1);case i:var j=this.$locale().weekStart||0,M=(m<j?m+7:m)-j;return f(d?g-M:g+(6-M),$);case r:case c:return p(b+"Hours",0);case n:return p(b+"Minutes",1);case s:return p(b+"Seconds",2);case e:return p(b+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(i,o){var h,d=v.p(i),l="set"+(this.$u?"UTC":""),f=(h={},h[r]=l+"Date",h[c]=l+"Date",h[a]=l+"Month",h[u]=l+"FullYear",h[n]=l+"Hours",h[s]=l+"Minutes",h[e]=l+"Seconds",h[t]=l+"Milliseconds",h)[d],p=d===r?this.$D+(o-this.$W):o;if(d===a||d===u){var m=this.clone().set(c,1);m.$d[f](p),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[v.p(t)]()},f.add=function(t,o){var c,h=this;t=Number(t);var d=v.p(o),l=function(e){var s=j(h);return v.w(s.date(s.date()+Math.round(e*t)),h)};if(d===a)return this.set(a,this.$M+t);if(d===u)return this.set(u,this.$y+t);if(d===r)return l(1);if(d===i)return l(7);var f=(c={},c[s]=6e4,c[n]=36e5,c[e]=1e3,c)[d]||1,p=this.$d.getTime()+t*f;return v.w(p,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var s=t||"YYYY-MM-DDTHH:mm:ssZ",n=v.z(this),r=this.$locale(),i=this.$H,a=this.$m,o=this.$M,u=r.weekdays,c=r.months,h=function(t,n,r,i){return t&&(t[n]||t(e,s))||r[n].substr(0,i)},l=function(t){return v.s(i%12||12,t,"0")},f=r.meridiem||function(t,e,s){var n=t<12?"AM":"PM";return s?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:v.s(o+1,2,"0"),MMM:h(r.monthsShort,o,c,3),MMMM:h(c,o),D:this.$D,DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:h(r.weekdaysMin,this.$W,u,2),ddd:h(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(i),HH:v.s(i,2,"0"),h:l(1),hh:l(2),a:f(i,a,!0),A:f(i,a,!1),m:String(a),mm:v.s(a,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:n};return s.replace(d,(function(t,e){return e||p[t]||n.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,c,h){var d,l=v.p(c),f=j(t),p=6e4*(f.utcOffset()-this.utcOffset()),m=this-f,$=v.m(this,f);return $=(d={},d[u]=$/12,d[a]=$,d[o]=$/3,d[i]=(m-p)/6048e5,d[r]=(m-p)/864e5,d[n]=m/36e5,d[s]=m/6e4,d[e]=m/1e3,d)[l]||m,h?$:v.a($)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return $[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var s=this.clone(),n=b(t,e,!0);return n&&(s.$L=n),s},f.clone=function(){return v.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},l}(),w=M.prototype;return j.prototype=w,[["$ms",t],["$s",e],["$m",s],["$H",n],["$W",r],["$M",a],["$y",u],["$D",c]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,M,j),t.$i=!0),j},j.locale=b,j.isDayjs=g,j.unix=function(t){return j(1e3*t)},j.en=$[m],j.Ls=$,j.p={},j}()}}]);
//# sourceMappingURL=7.2f6764b1.chunk.js.map