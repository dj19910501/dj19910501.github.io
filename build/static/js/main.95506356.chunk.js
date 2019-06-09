(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);for(var a=n(0),i=n.n(a),o=n(7),r=n.n(o),c=(n(14),n(15),n(16),n(1)),l=n(2),s=n(4),m=n(3),d=n(5),u=(n(17),n(18),function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this,e))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"myInfoContainer",className:"my-info-container general-container"},i.a.createElement("p",null,"Welcome to my github page!"),i.a.createElement("p",null,"I'm Jian, originally from China. Currently I'm working as a Front End Developer at Hive9, located in Austin, Texas. For the past two years and a half, I've been working on both building out new features and converting the existing app into React. The process of crafting all kinds of components and have them work efficiently with each other has been thrilling and satisfying."))}}]),t}(i.a.Component)),v=(n(19),function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this,e))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"experienceContainer",className:"experience-container"},i.a.createElement("div",{className:"section-title"},"My Expierence"),i.a.createElement("div",{className:"experience-section"},i.a.createElement("div",{className:"inline-middle experience-image-container"},i.a.createElement("img",{src:"/images/hive9Logo.webp"})),i.a.createElement("div",{className:"inline-top experience-content-container"},i.a.createElement("p",null,"Front end Developer (2017 - present)"),i.a.createElement("p",null,"Leading the UI development for marketing performance and planning software helping B2B marketers make a measurable and predictable impact on revenue."),i.a.createElement("p",null,"Achievements:"),i.a.createElement("ul",null,i.a.createElement("li",null,"Converted existing app into React with better performance and usability."),i.a.createElement("li",null,"Developed a React grid component from the ground in replacement of DHTMLX grid for presenting large data sets more efficiently."),i.a.createElement("li",null,"Refactored existing frond end code base, with 10k+ lines of code removal.")))),i.a.createElement("div",{className:"experience-section"},i.a.createElement("div",{className:"inline-top experience-content-container"},i.a.createElement("p",null,"UI Developer (2015 - 2016 as a contractor via Marlabs)"),i.a.createElement("p",null,"Developed UI for Microsoft's internal tool Dynamics AX 2012 Expense app, which is for creating, managing and submitting expense report."),i.a.createElement("p",null,"Responsibilities:"),i.a.createElement("ul",null,i.a.createElement("li",null,"Create pages, panels and flyouts using HTML5, CSS3, JavaScript, JQuery, Bootstrap and KnockoutJS to provide rich and responsive display."),i.a.createElement("li",null,"Provide globalization and localization support for 40+ countries."))),i.a.createElement("div",{className:"inline-middle experience-image-container"},i.a.createElement("img",{src:"/images/microsoft-logo.png"}))))}}]),t}(i.a.Component)),p=(n(20),function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this,e))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"educationContainer",className:"education-container general-container"},i.a.createElement("div",{className:"section-title"},"My Education"),i.a.createElement("p",null,"Allow me to present you a glance of both gorgeous campus."),i.a.createElement("div",{className:"education-section education-northwestern"},i.a.createElement("div",{className:"inline-top education-content-container"},i.a.createElement("img",{src:"/images/northwesternLogo.png"}),i.a.createElement("div",{className:"inline-top education-content-text"},i.a.createElement("div",null,"Northwestern University, Evanston, IL"),i.a.createElement("div",null,"Master of Science in Electrical Engineering"),i.a.createElement("div",null,"Dec 2014")))),i.a.createElement("div",{className:"education-section education-purdue"},i.a.createElement("div",{className:"inline-top education-content-container"},i.a.createElement("img",{src:"/images/purdueLogo.png"}),i.a.createElement("div",{className:"inline-top education-content-text"},i.a.createElement("div",null,"Purdue University, West Lafayette, IN"),i.a.createElement("div",null,"Bachelor of Science in Electrical Engineering"),i.a.createElement("div",null,"May 2013")))))}}]),t}(i.a.Component)),f=(n(21),n(22),[15,15]),g=Math.floor(f[0]/2),E=Math.floor(f[1]/2),h=[[g,E-2],[g,E-1],[g,E-0],[g,E+1],[g,E+2]],b=[],y=f[1]-1;y>=0;y--)for(var w=0;w<f[0];w++)b.push([w,y]);var k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).interval=null,n.componentDidMount=function(){n.interval=setInterval(n.moveNext,200),document.getElementById("snakeContainer").addEventListener("keydown",n.keyDownHandler)},n.componentDidUpdate=function(e,t){t.direction!=n.state.direction&&(clearInterval(n.interval),n.moveNext(),n.interval=setInterval(n.moveNext,200))},n.keyDownHandler=function(e){var t=n.state.bodyCoordinates,a=t[t.length-1],i=t[t.length-2];switch(e.keyCode){case 38:i[1]-a[1]!==1&&n.setState({direction:"up"});break;case 40:i[1]-a[1]!==-1&&n.setState({direction:"down"});break;case 37:i[0]-a[0]!==-1&&n.setState({direction:"left"});break;case 39:i[0]-a[0]!==1&&n.setState({direction:"right"})}e.preventDefault()},n.moveNext=function(){var e=n.state,t=e.start,a=e.direction,i=e.bodyCoordinates,o=e.food;if(t){var r,c=i[i.length-1];switch(a){case"up":r=[c[0],c[1]+1];break;case"down":r=[c[0],c[1]-1];break;case"left":r=[c[0]-1,c[1]];break;case"right":r=[c[0]+1,c[1]]}i.length===f[0]*f[1]?n.setState({win:!0,start:!1}):r[0]<0||r[0]>=f[0]||r[1]<0||r[1]>=f[1]||i.some(function(e){return e[0]===r[0]&&e[1]===r[1]})?n.setState({start:!1,gameover:!0}):o[0]===r[0]&&o[1]===r[1]?n.setState({bodyCoordinates:i.concat([r]),food:n.generateFood()}):n.setState({bodyCoordinates:i.slice(1).concat([r])})}},n.reset=function(){n.setState({bodyCoordinates:h,start:!0,food:n.generateFood(),gameover:!1,direction:"up"})},n.generateFood=function(){var e=n.state,t=e.bodyCoordinates,a=e.food,i=b.filter(function(e){return e[0]!==a[0]&&e[1]!==a[1]&&!t.some(function(t){return t[0]===e[0]&&t[1]===e[1]})});return i[Math.floor(Math.random(1)*i.length)]},n.state={bodyCoordinates:h,direction:"up",food:[],start:!1,gameover:!1,win:!1},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.bodyCoordinates,n=e.food,a=e.gameover,o=e.win,r={width:500,height:500,position:"relative"},c={width:500/f[0],height:500/f[1]};return i.a.createElement("div",{id:"snakeContainer",className:"snake-container",style:r},b.map(function(e,a){var o=t.some(function(t){return t[0]===e[0]&&t[1]===e[1]})||e[0]===n[0]&&e[1]===n[1];return i.a.createElement("div",{className:"inline-top snake-cell ".concat(o?"active":""),key:100*a+y,style:c})}),i.a.createElement("div",{className:"align-center",style:{margin:"10px 0"}},i.a.createElement("button",{onClick:this.reset},"Start")),a&&i.a.createElement("div",{style:{position:"absolute",top:0,left:"30%",color:"red",fontSize:"40px"}},"GAME OVER !"),o&&i.a.createElement("div",{style:{position:"absolute",top:0,left:"30%",color:"green",fontSize:"40px"}},"You Win !"))}}]),t}(i.a.Component),N=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={game:"snake"},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.game;return i.a.createElement("div",{id:"gamesContainer",className:"games-container general-container"},i.a.createElement("div",{className:"section-title"},"Games"),i.a.createElement("div",{className:"game-nav-container align-center"},i.a.createElement("div",{className:"game-nav inline-top ".concat("snake"==e?"active":"")},"Snake")),"snake"==e&&i.a.createElement(k,null))}}]),t}(i.a.Component),x=[{id:"myInfo",name:"Me",containerId:"myInfoContainer"},{id:"experience",name:"Experience",containerId:"experienceContainer"},{id:"education",name:"Education",containerId:"educationContainer"},{id:"games",name:"Games",containerId:"gamesContainer"}],C=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){document.addEventListener("scroll",function(e){for(var t=window.scrollY,a=x.length-1;a>=0;a--)if(document.getElementById(x[a].containerId)&&t+30>=document.getElementById(x[a].containerId).offsetTop){n.setState({activeSection:x[a].id});break}})},n.scrollToSection=function(e){window.scrollTo(0,document.getElementById(e.containerId).offsetTop)},n.state={activeSection:"myInfo"},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.activeSection,n=["#082656","#15428c","#2c5fb2","#7da0d8","#2c5fb2","#15428c","#082656"],a="linear-gradient(to right, ".concat(n[0]," 0%, ").concat(n[1]," 15%, ").concat(n[2]," 30%, ").concat(n[3]," 50%, ").concat(n[4]," 70%, ").concat(n[5]," 85%, ").concat(n[6]," 100%)");return i.a.createElement("div",{className:"home-container"},i.a.createElement("div",{className:"vertical-nav"},x.map(function(n){return i.a.createElement("div",{className:t==n.id?"active":"",onClick:function(){return e.scrollToSection(n)}},n.name)})),i.a.createElement("div",{className:"avatar-container",style:{background:a}},i.a.createElement("div",{className:"avatar"}),i.a.createElement("div",{className:"avatar-description align-center"},i.a.createElement("div",{style:{fontSize:"36px"}},"Jian Deng"),i.a.createElement("div",null,i.a.createElement("span",null,"Front End Developer @ "),i.a.createElement("img",{src:"/images/hive9Icon.webp",className:"hive9-icon"}),i.a.createElement("span",null,"Hive9")),i.a.createElement("div",{style:{fontSize:"18px"}},i.a.createElement("span",null,"dengj1991@hotmail.com")))),i.a.createElement(u,{ref:"myInfo"}),i.a.createElement(v,{ref:"experience"}),i.a.createElement(p,{ref:"education"}),i.a.createElement(N,{ref:"games"}))}}]),t}(i.a.Component);var j=function(){return i.a.createElement(C,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.95506356.chunk.js.map