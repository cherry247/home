(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{108:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),c=t.n(l),s=(t(77),t(47)),o=t(5),i=!0,m={gradientColors:"#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",firstName:"Shaili",middleName:"",lastName:"Patel",message:"If passion drives you, let reason hold the reins . ",icons:[{image:"fa-github",url:"https://github.com/cherry247/"},{image:"fa-linkedin",url:"https://www.linkedin.com/in/shaili-patel-376663190/"},{image:"fa-twitter",url:"https://twitter.com/shaili__/"}]},u={show:!0,heading:"About Me",message:"I am Shaili Patel . Growing up I realized how  data plays an important role in decision making.  I was ambitious to challenge myself ,hence I took up a projects and courses  on  data analysis and Machine Learning . The reason why I enjoy these business challenges is the opportunity to deliver the right product at the right time . I love trying new things and introducing new ideas. Most of my implementations  are in python."},d={show:!0,heading:"Recent Projects",gitHubUsername:"cherry247",reposLength:4,specificRepos:["repo-11"]},f={show:!0,heading:"Skills",hardSkills:[{name:"Python",value:90},{name:"SQL",value:65},{name:"Data Structures",value:85},{name:"HTML/CSS",value:55}],softSkills:[{name:"Collaboration",value:90},{name:"Problem Solving",value:75},{name:"Resilience",value:70}]},h=!0,p="Get In Touch",g="I am strongly focused on the ability to complete tasks accurately in a fast-paced environment with conflicting deadlines. Inclined towards learning and self-development.",b="patelitnu@gmail.com",E=t(63),v=t.n(E),k=t(22),w=t(34),N=r.a.forwardRef((function(e,a){var t=e.gradient,n=e.title,l=e.message,c=e.icons;return r.a.createElement(w.a,{fluid:!0,id:"home",style:{background:"linear-gradient(136deg,".concat(t,")"),backgroundSize:"1200% 1200%"},className:"title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{id:"stars"}),r.a.createElement(k.a,{className:"text-center"},r.a.createElement("h1",{ref:a,className:"display-1"},n),r.a.createElement(v.a,{className:"lead typist",cursor:{show:!1}}," ",l),r.a.createElement("div",{className:"p-5"},c.map((function(e,a){return r.a.createElement("a",{key:"social-icon-".concat(a),target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},r.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x socialicons")}))}))),r.a.createElement("a",{className:"btn btn-outline-light btn-lg ",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me")))})),y=t(14),x=t.n(y),S=t(23),j=t(7),_=(t(79),t(19)),O=t.n(_),R=new RegExp(/[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/),L=function(e){var a=e.heading,t=e.message,n=e.link,l=e.imgSize,c=e.resume,s=r.a.useState(""),o=Object(j.a)(s,2),i=o[0],m=o[1],u=r.a.useState(Boolean(n)),d=Object(j.a)(u,2),f=d[0],h=d[1];r.a.useEffect((function(){n&&!R.test(n)?p():m(n)}),[n]);var p=function(){var e=Object(S.a)(x.a.mark((function e(){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.instagram.com/","/?__a=1",e.prev=2,e.next=5,O.a.get("https://www.instagram.com/"+n+"/?__a=1");case 5:a=e.sent,m(a.data.graphql.user.profile_pic_url_hd),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),h(!1),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},f&&r.a.createElement("img",{className:"border border-secondary rounded-circle",src:i,alt:"profilepicture",width:l,height:l})),r.a.createElement("div",{className:"col-lg-".concat(f?"7":"12")},r.a.createElement("h2",{className:"display-4 mb-5 text-center"},a),r.a.createElement("p",{className:"lead text-center"},t),c&&r.a.createElement("p",{className:"lead text-center"},r.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:c,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV"},"Resume"))))))},P=t(64),C=t(71),T=t(30),z=t(29),I=t(33),M=t(27),F=t.n(M),A=function(e){var a=e.svn_url;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"".concat(a,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3"},r.a.createElement("i",{className:"fab fa-github"})," Clone Project"),r.a.createElement("a",{href:a,target:" _blank",className:"btn btn-outline-secondary"},r.a.createElement("i",{className:"fab fa-github"})," Repo"))},B=function(e){var a=e.languages_url,t=e.repo_url,l=Object(n.useState)([]),c=Object(j.a)(l,2),s=c[0],o=c[1],i=Object(n.useCallback)(Object(S.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get(a);case 3:return t=e.sent,e.abrupt("return",o(t.data));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[a]);Object(n.useEffect)((function(){i()}),[i]);var m=[],u=0;for(var d in s)m.push(d),u+=s[d];return r.a.createElement("div",{className:"pb-3"},"Languages:"," ",m.length?m.map((function(e){return r.a.createElement("a",{key:e,className:"badge badge-light card-link",href:t+"/search?l=".concat(e),target:" _blank"},e,":"," ",Math.trunc(s[e]/u*1e3)/10," %")})):"code yet to be deployed.")},W=function(e){var a=e.star_count,t=e.repo_url,l=e.pushed_at,c=Object(n.useState)("0 mints"),s=Object(j.a)(c,2),o=s[0],i=s[1],m=Object(n.useCallback)((function(){var e=new Date(l),a=(new Date).getTime()-e.getTime(),t=Math.trunc(a/1e3/60/60);if(t<24){if(t<1)return i("just now");var n=1===t?"hour":"hours";return i("".concat(t.toString()," ").concat(n," ago"))}var r=new Intl.DateTimeFormat("en-US",{day:"numeric",month:"long",year:"numeric"}).format(e);return i("on ".concat(r))}),[l]);return Object(n.useEffect)((function(){m()}),[m]),r.a.createElement("p",{className:"card-text"},r.a.createElement("a",{href:t+"/stargazers",target:" _blank",className:"text-dark text-decoration-none"},r.a.createElement("span",{className:"text-dark card-link mr-4"},r.a.createElement("i",{className:"fab fa-github"})," Stars"," ",r.a.createElement("span",{className:"badge badge-dark"},a))),r.a.createElement("small",{className:"text-muted"},"Updated ",o))},H=function(e){var a=e.value,t=a.name,n=a.description,l=a.svn_url,c=a.stargazers_count,s=a.languages_url,o=a.pushed_at;return r.a.createElement(z.a,{md:6},r.a.createElement(I.a,{className:"card shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement(I.a.Body,null,r.a.createElement(I.a.Title,{as:"h5"},t||r.a.createElement(F.a,null)," "),r.a.createElement(I.a.Text,null,n?n||r.a.createElement(F.a,{count:3}):""," "),l?r.a.createElement(A,{svn_url:l}):r.a.createElement(F.a,{count:2}),r.a.createElement("hr",null),s?r.a.createElement(B,{languages_url:s,repo_url:l}):r.a.createElement(F.a,{count:3}),a?r.a.createElement(W,{star_count:c,repo_url:l,pushed_at:o}):r.a.createElement(F.a,null))))},D={name:null,description:null,svn_url:null,stargazers_count:null,languages_url:null,pushed_at:null},U="https://api.github.com",G=function(e){var a=e.heading,t=e.username,l=e.length,c=e.specfic,s="".concat(U,"/users/").concat(t,"/repos?sort=updated&direction=desc"),o="".concat(U,"/repos/").concat(t),i=new Array(l+c.length).fill(D),m=Object(n.useState)([]),u=Object(j.a)(m,2),d=u[0],f=u[1],h=Object(n.useCallback)(Object(S.a)(x.a.mark((function e(){var a,t,n,r,i,m;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.prev=1,e.next=4,O.a.get(s);case 4:t=e.sent,a=Object(C.a)(t.data.slice(0,l)),e.prev=6,n=Object(P.a)(c),e.prev=8,n.s();case 10:if((r=n.n()).done){e.next=18;break}return i=r.value,e.next=14,O.a.get("".concat(o,"/").concat(i));case 14:m=e.sent,a.push(m.data);case 16:e.next=10;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(8),n.e(e.t0);case 23:return e.prev=23,n.f(),e.finish(23);case 26:e.next=31;break;case 28:e.prev=28,e.t1=e.catch(6),console.error(e.t1.message);case 31:f(a),e.next=37;break;case 34:e.prev=34,e.t2=e.catch(1),console.error(e.t2.message);case 37:case"end":return e.stop()}}),e,null,[[1,34],[6,28],[8,20,23,26]])}))),[s,l,c,o]);return Object(n.useEffect)((function(){h()}),[h]),r.a.createElement(w.a,{fluid:!0,id:"projects",className:"bg-light m-0"},r.a.createElement(k.a,{className:""},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},a),r.a.createElement(T.a,null,d.length?d.map((function(e,a){return r.a.createElement(H,{key:"project-card-".concat(a),id:"project-card-".concat(a),value:e})})):i.map((function(e,a){return r.a.createElement(H,{key:"dummy-".concat(a),id:"dummy-".concat(a),value:e})})))))},K=function(e){return r.a.createElement("footer",{style:{backgroundColor:"#f5f5f5"},className:"mt-auto py-5 text-center "},r.a.createElement(k.a,null,e.children,r.a.createElement("i",{className:"fas fa-code"})," with ",r.a.createElement("i",{className:"fas fa-heart"})," by"," ",r.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/hashirshoaeb","aria-label":"My GitHub"},"Hashir Shoaib")," ","using ",r.a.createElement("i",{className:"fab fa-react"}),r.a.createElement("p",null,r.a.createElement("small",{className:"text-muted"},"Project code is open source. Feel free to fork and make your own version."))))},J="undefined"!==typeof window?n.useLayoutEffect:n.useEffect,Z="undefined"!==typeof window;function q(e){var a=e.element,t=e.useWindow;if(!Z)return{x:0,y:0};var n=(a?a.current:document.body).getBoundingClientRect();return t?{x:window.scrollX,y:window.scrollY}:{x:n.left,y:n.top}}function Q(e,a,t,r,l){var c=Object(n.useRef)(q({useWindow:r})),s=null,o=function(){var a=q({element:t,useWindow:r});e({prevPos:c.current,currPos:a}),c.current=a,s=null};J((function(){if(Z){var e=function(){l?null===s&&(s=setTimeout(o,l)):o()};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e),s&&clearTimeout(s)}}}),a)}Q.defaultProps={deps:[],element:!1,useWindow:!1,wait:null};var V=function(e){var a=r.a.useState(null),t=Object(j.a)(a,2),n=t[0],l=t[1];return r.a.useEffect((function(){var a=e.current,t=new ResizeObserver((function(e){e.forEach((function(e){l(e.contentRect)}))}));return t.observe(a),function(){t.unobserve(a)}}),[e]),n},X=t(32),Y=t(18),$=r.a.forwardRef((function(e,a){var t=Object(n.useState)(!0),l=Object(j.a)(t,2),c=l[0],s=l[1],o=Object(n.useState)(0),i=Object(j.a)(o,2),h=i[0],p=i[1],g=r.a.useRef(),b=V(g),E=b?b.bottom:0;return Q((function(e){e.prevPos;var t=e.currPos;b&&(t.y+a.current.offsetTop-b.bottom>5?s(!0):s(!1),p(t.y))}),[E]),r.a.useEffect((function(){b&&(E-h>=a.current.offsetTop?s(!1):s(!0))}),[E,b,a,h]),r.a.createElement(X.a,{ref:g,className:" fixed-top  ".concat(c?"navbar-transparent":"navbar-white"),expand:"lg"},r.a.createElement(X.a.Brand,{className:"brand",href:"/home/#home"},"<".concat(m.firstName," />")),r.a.createElement(X.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"toggler"}),r.a.createElement(X.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(Y.a,{className:"mr-auto"},d.show&&r.a.createElement(Y.a.Link,{className:"nav-link lead",href:"/home/#projects"},"Projects"),r.a.createElement(Y.a.Link,{className:"nav-link lead",href:u.resume,target:"_blank",rel:"noreferrer noopener"},"Resume"),u.show&&r.a.createElement(Y.a.Link,{className:"nav-link lead",href:"/home/#aboutme"},"About"),f.show&&r.a.createElement(Y.a.Link,{className:"nav-link lead",href:"/home/#skills"},"Skills"))))})),ee=t(48),ae=t(69),te=t(68);var ne=function(e){var a=e.skill,t=e.value,n=e.isScrolled;return r.a.createElement("div",{style:{width:"95%"}},r.a.createElement("p",{className:"lead mb-1 mt-2"},a),r.a.createElement(te.a,{className:n?" progress-bar-animation":"progress",now:t}))};function re(e){var a=e.skills,t=e.isScrolled;return r.a.createElement(r.a.Fragment,null,a.map((function(e,a){return r.a.createElement(ne,{key:"".concat(e,"-").concat(a),skill:e.name,value:e.value,isScrolled:t})})))}var le=function(e){var a=e.skills,t=e.isScrolled;return r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{xs:12,md:6},r.a.createElement(re,{skills:a.slice(0,Math.floor(a.length/2)),isScrolled:t})),r.a.createElement(z.a,{xs:12,md:6},r.a.createElement(re,{skills:a.slice(Math.floor(a.length/2),a.length),isScrolled:t})))};var ce=function(e){var a=e.heading,t=e.hardSkills,n=e.softSkills,l=r.a.useRef(),c=r.a.useState(!1),s=Object(j.a)(c,2),o=s[0],i=s[1];return Q((function(e){e.prevPos;var a=e.currPos;!o&&a.y-400<0&&i(!0)}),[],l),r.a.createElement(w.a,{ref:l,fluid:!0,className:"bg-white m-0",id:"skills"},r.a.createElement(k.a,{className:"p-5 "},r.a.createElement("h2",{ref:l,className:"display-4 pb-5 text-center"},a),r.a.createElement(ae.a,{className:"skills-tabs",defaultActiveKey:"hard-skills",id:"skills-tabs"},r.a.createElement(ee.a,{tabClassName:"skills-tab lead",eventKey:"hard-skills",title:"Technical Skills"},r.a.createElement(T.a,{className:"pt-3 px-1"},r.a.createElement(le,{skills:t,isScrolled:o}))),r.a.createElement(ee.a,{tabClassName:"skills-tab lead",eventKey:"soft-skills",title:"Soft Skills"},r.a.createElement(T.a,{className:"pt-3 px-1"},r.a.createElement(le,{skills:n,isScrolled:o}))))))},se=function(e){var a=e.heading,t=e.message,n=e.email;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 pb-3 text-center"},a),r.a.createElement("p",{className:"lead text-center pb-3"},t,", ",r.a.createElement("a",{href:"mailto:".concat(n)},n),"."))},oe=r.a.forwardRef((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{gradient:m.gradientColors,title:"".concat(m.firstName," ").concat(m.middleName," ").concat(m.lastName),message:m.message,icons:m.icons,ref:a}),u.show&&r.a.createElement(L,{heading:u.heading,message:u.message,link:u.imageLink,imgSize:u.imageSize,resume:u.resume}),d.show&&r.a.createElement(G,{heading:d.heading,username:d.gitHubUsername,length:d.reposLength,specfic:d.specificRepos}),f.show&&r.a.createElement(ce,{heading:f.heading,hardSkills:f.hardSkills,softSkills:f.softSkills}))})),ie=function(){var e=r.a.useRef();return r.a.createElement(s.a,{basename:"/home/"},i&&r.a.createElement($,{ref:e}),r.a.createElement(o.a,{path:"/",exact:!0,component:function(){return r.a.createElement(oe,{ref:e})}}),r.a.createElement(K,null,h&&r.a.createElement(se,{heading:p,message:g,email:b})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},72:function(e,a,t){e.exports=t(108)},77:function(e,a,t){},79:function(e,a,t){e.exports=t.p+"static/media/resume.9d3da0e2.pdf"}},[[72,1,2]]]);
//# sourceMappingURL=main.0f740cf0.chunk.js.map