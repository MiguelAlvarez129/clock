(this.webpackJsonpclock=this.webpackJsonpclock||[]).push([[0],{100:function(e,t,a){e.exports=a(278)},105:function(e,t,a){},278:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(98),r=a.n(o),l=(a(105),a(13)),s=(a(106),a(20)),i=a.n(s),d=function(e){Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){console.log(123123)})),function(){window.removeEventListener("scroll")}}),[]);return c.a.createElement("div",{className:"navBar d-flex justify-content-between mr-5",style:e.light?{background:"rgba(11, 11, 11, 0.7)",color:"white"}:{background:"rgba(235, 235, 235, 0.7)",color:"black"}},c.a.createElement("div",null,c.a.createElement("button",{className:"lightbulb btn btn-"+(e.light?"dark":"default"),onClick:function(){return e.turnOn()}},c.a.createElement("h6",{className:"d-inline-block mr-2"},"Turn lights off"),c.a.createElement("i",{class:"fa fa-lightbulb-o","aria-hidden":"true"}))),c.a.createElement("i",{className:"fa fa-clock-o clock","aria-hidden":"true"}),c.a.createElement("button",{className:"btn btn-"+(e.light?"dark":"default")},c.a.createElement("h6",null,"Themes")))},u=function(e){var t=e.font,a=e.double,o=e.overSize,r=e.setDouble,l=e.size,s=e.centrar,d=e.center,u=e.width,m=Object(n.useRef)(0);Object(n.useEffect)((function(){return document.addEventListener("dragstart",(function(e){var t=e.target.id;"clock"==t?e.dataTransfer.setData("clock",t):e.preventDefault()})),document.addEventListener("dragover",(function(e){e.preventDefault()})),document.addEventListener("dragenter",(function(e){"dropzone"==e.target.className&&(e.target.style.background="lightgray")})),document.addEventListener("dragleave",(function(e){"dropzone"==e.target.className&&(e.target.style.background="")})),document.addEventListener("drop",(function(e){e.preventDefault();var t=e.dataTransfer.getData("clock"),a=document.getElementById(t);e.target.className.startsWith("dropzone")&&(e.target.style.background="",t&&e.target.appendChild(a))})),document.addEventListener("dragend",(function(e){s(),console.log(m.current)})),function(){document.removeEventListener("dragstart"),document.removeEventListener("drop"),document.removeEventListener("dragleave"),document.removeEventListener("dragenter"),document.removeEventListener("dragover"),document.removeEventListener("dragend")}}),[]);var f=a?"scale(".concat(.75*l,") translate(").concat(d[0]/l*1.33,"px,").concat(d[1]/l*1.33,"px)"):o?"scale(".concat(.8*l,")"):"scale(".concat(u,") translateX(").concat(m.current,"px)"),g=c.a.createElement("div",{className:"grid-container ",onClick:function(){r()},style:{transform:f,fontFamily:t},draggable:a?"false":"true",id:"clock"},c.a.createElement("div",{className:"item-hora "},c.a.createElement("h1",{className:"change"},i()().format("h:mm"))),c.a.createElement("div",{className:"item-seg"},c.a.createElement("h1",{className:"change"},i()().format("ss"))),c.a.createElement("div",{className:"item-am"},c.a.createElement("h1",{className:"change"},i()().format("A"))),c.a.createElement("div",{className:"item-date text-center"},c.a.createElement("h1",{className:"change"},i()().format("MMMM dddd YYYY"))));return c.a.createElement("div",{className:"w-100 h-100",id:"clockWrapper"},c.a.createElement("span",{class:"ad badge title",id:"ad"},c.a.createElement("h5",null,"Click and drag the clock")),c.a.createElement("div",{className:" parentBox d-flex justify-content-around  bg bg-default"},c.a.createElement("div",{className:"dropzone"}," "),c.a.createElement("div",{className:"dropzone"}," "),c.a.createElement("div",{className:"dropzone"}," ")),c.a.createElement("div",{className:"  parentBox d-flex justify-content-around  bg bg-default"},c.a.createElement("div",{className:"dropzone"}," "),c.a.createElement("div",{className:"dropzone",id:"center"},g),c.a.createElement("div",{className:"dropzone"}," ")),c.a.createElement("div",{className:" parentBox d-flex justify-content-around  bg bg-default"},c.a.createElement("div",{className:"dropzone"}," "),c.a.createElement("div",{className:"dropzone"}," "),c.a.createElement("div",{className:"dropzone"}," ")))},m=a(4),f=function(){var e=Object(n.useState)(new Date),t=Object(l.a)(e,2),a=(t[0],t[1]),o=Object(n.useState)(!1),r=Object(l.a)(o,2),s=r[0],f=r[1],g=Object(n.useState)(!1),b=Object(l.a)(g,2),v=b[0],E=b[1],p=Object(n.useState)(!1),h=Object(l.a)(p,2),k=h[0],N=h[1],y=Object(n.useState)(1),w=Object(l.a)(y,2),O=w[0],j=w[1],S=Object(n.useState)({color1:"#ff0027",color2:"#7c00ff",color3:"#020fff"}),x=Object(l.a)(S,2),C=x[0],I=x[1],L=Object(n.useState)(localStorage.getItem("bgc")||"#FF4D67"),z=Object(l.a)(L,2),B=z[0],D=z[1],F=Object(n.useState)(localStorage.getItem("fc")||"#000000"),Y=Object(l.a)(F,2),R=Y[0],W=Y[1],M=Object(n.useState)(1),T=Object(l.a)(M,2),A=T[0],J=T[1],P=Object(n.useState)(!1),q=Object(l.a)(P,2),G=q[0],V=q[1],X=Object(n.useRef)([0,0]),H=(Object(n.useRef)(0),Object(n.useState)(localStorage.getItem("font")||"Bangers")),K=Object(l.a)(H,2),Q=K[0],U=K[1];localStorage.getItem("bgc"),localStorage.getItem("fc");var Z=function(){var e=document.getElementById("clock").getBoundingClientRect(),t=document.getElementById("center").getBoundingClientRect(),a=[t.x+t.width/2,t.y+t.height/2],n=[e.x+e.width/2,e.y+e.height/2],c=a[0]-n[0],o=a[1]-n[1];X.current=[c,o]},$=function(){var e=window.innerWidth,t=document.getElementById("clock").offsetWidth,a=document.getElementById("widthInput").value;console.log(a),Z(),null!=a&&N(a>=e),J(e/t)};Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){var e=document.getElementById("ad");console.log(window.pageYOffset),85>window.pageYOffset&&window.pageYOffset>75&&(e.style.display="inline-block",e.style.opacity=.7,setTimeout((function(){e.style.opacity=0}),3e3))})),window.addEventListener("resize",$),$(),function(){window.removeEventListener("resize",$),window.removeEventListener("scroll")}}),[]),Object(n.useEffect)((function(){var e=setInterval((function(){te()}),1e3);return function(){clearInterval(e)}}));var _=function(e,t){t?(D(e.value),localStorage.setItem("bgc",B)):(W(e.value),localStorage.setItem("fc",R))},ee=function(e){var t=e.color1,a=e.color2,n=e.color3;I({color1:t.value,color2:a.value,color3:n.value})},te=function(){a(new Date)},ae=function(){var e=document.getElementById("clock").offsetWidth,t=window.innerWidth;oe.value>=t?j(.7*A):j(oe.value/e),console.log(e)};document.title=i()().format("h:mm:ss");var ne,ce,oe={value:200},re={color1:"red",color2:"blue",color3:"white"},le={font:Q,width:O,center:X.current,double:s,overSize:k,setDouble:function(){f(!s)},size:A,centrar:Z};return c.a.createElement("div",{className:"clock-div",style:{color:R}},c.a.createElement(d,{turnOn:function(){V(!G)},light:G}),c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/",render:function(){return c.a.createElement(u,le)},exact:!0})),c.a.createElement("div",{className:"options bg bg-default ",style:G?{background:"rgba(11, 11, 11, 0.7)",color:"white"}:{background:"rgba(235, 235, 235, 0.7)",color:"black"}},c.a.createElement("label",{htmlFor:"check",className:"mx-2"},"Gradient background"),c.a.createElement("div",{className:"switch"},c.a.createElement("input",{onClick:function(){return E(!v)},id:"check",className:"check",type:"checkbox"}),c.a.createElement("span",{className:"slider"},"  ")),v?(document.body.style.backgroundAttachment="fixed",document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundImage="linear-gradient(120deg, ".concat(C.color1," 0%,  ").concat(C.color2," 50%,  ").concat(C.color3," 100%)"),c.a.createElement("div",{className:"d-inline-block"},c.a.createElement("label",{htmlFor:"gradientColor",className:"mx-2"},"Select background gradient color "),c.a.createElement("input",{id:"gradientColor1",className:"mx-2",type:"color",name:"color1",ref:function(e){return re.color1=e},value:C.color1,onChange:function(){return ee(re)}}),c.a.createElement("input",{id:"gradientColor2",className:"mx-2",type:"color",name:"color2",ref:function(e){return re.color2=e},value:C.color2,onChange:function(){return ee(re)}}),c.a.createElement("input",{id:"gradientColor3",className:"mx-2",type:"color",name:"color3",ref:function(e){return re.color3=e},value:C.color3,onChange:function(){return ee(re)}}))):(document.body.style.background=B,c.a.createElement("div",{className:"d-inline-block"},c.a.createElement("label",{htmlFor:"backgroundColor",className:"mx-2"},"Select background color "),c.a.createElement("input",{id:"backgroundColor",type:"color",name:"color",value:B,ref:function(e){return ne=e},onChange:function(){return _(ne,!0)}}))),c.a.createElement("div",{className:"d-inline-block"},c.a.createElement("label",{htmlFor:"fontColor",className:"mx-2"},"Select font color "),c.a.createElement("input",{id:"fontColor",type:"color",name:"color",ref:function(e){return ce=e},onChange:function(){return _(ce,!1)}})),c.a.createElement("div",{class:"d-inline-block"},c.a.createElement("input",{defaultValue:"200",id:"widthInput",style:{width:"5em"},type:"number",class:"form-control d-inline-block",ref:function(e){return oe=e}}),c.a.createElement("button",{class:"btn btn-outline-primary ",onClick:function(){return ae()}},"Change clock's size!")),c.a.createElement("div",{class:"d-block"},c.a.createElement("select",{className:"select",id:"exampleFormControlSelect1",onChange:function(e){return function(e){U(e.target.value),localStorage.setItem("font",e.target.value),ae()}(e)}},c.a.createElement("option",{value:"Bangers",selected:!0},"Bangers"),c.a.createElement("option",{value:"Bebas Neue"},"Bebas Neue"),c.a.createElement("option",{value:"Lobster"},"Lobster"),c.a.createElement("option",{value:"Anton"},"Anton"),c.a.createElement("option",{value:"Open Sans"},"Open Sans"),c.a.createElement("option",{value:"Oswald"},"Oswald"),c.a.createElement("option",{value:"Poppins"},"Poppins")),c.a.createElement("button",{className:"d-inline-block btn btn-default"},"asdwq"))))},g=a(58);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g.a,null,c.a.createElement(f,null))),document.getElementById("root"))}},[[100,1,2]]]);
//# sourceMappingURL=main.82f32767.chunk.js.map