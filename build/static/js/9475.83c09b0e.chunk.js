"use strict";(self.webpackChunkstandard=self.webpackChunkstandard||[]).push([[9475],{57328:function(t,n,e){e(72791),e(16789),e(95717),e(42182),e(72233);var o=e(38596);(0,o.Z)({addbg:{backgroundImage:function(t){return"url(".concat(t.bg,")")},backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",paddingTop:"147.9%",borderRadius:4}}),e(71580),e(80184);var r=e(4942);(0,o.Z)((function(t){var n;return{container:(0,r.Z)({width:"80vw",maxWidth:940,margin:"auto"},t.breakpoints.down(960),{width:"90vw"}),Arrow:(n={position:"absolute",top:"48%",transform:"translateY(-50%)"},(0,r.Z)(n,t.breakpoints.down(960),{display:"none"}),(0,r.Z)(n,"zIndex",2),(0,r.Z)(n,"width","50px"),(0,r.Z)(n,"height","100px"),(0,r.Z)(n,"color","#d8d8d8 !important"),(0,r.Z)(n,"cursor","pointer"),(0,r.Z)(n,"transition","all .2s"),(0,r.Z)(n,"&:hover",{color:"#fb4226 !important"}),n)}}));(0,o.Z)((function(t){return{appBar:{backgroundColor:"transparent",color:"black",boxShadow:"none",justifyContent:"center",alignItem:"center",marginBottom:30},tabBar:{alignItem:"center",height:50,margin:"0 auto",textTransform:"none",display:"block"},flexContainer:{display:"block"},indicator:{backgroundColor:"transparent",transition:"none"},tabButton:{opacity:1,lineHeight:"24px",height:"24px",boxShadow:"none",justifyContent:"center",alignItem:"center",transition:"all 0.2s",fontWeight:500,textTransform:"none",fontFamily:'"Arial", "Helvetica", "sans-serif"',"& > span":{transition:"all 0.2s","&:hover":{fontSize:"20px"}}},tabDangChieu:{color:function(t){return t.notDelay?"#FFFFFF":"#fa5238"},backgroundColor:function(t){return t.notDelay?"#fa5238":"#FFFFFF"},fontSize:function(t){return t.notDelay?"15px":"20px"}},tabSapChieu:{color:function(t){return t.notDelay?"#fa5238":"#FFFFFF"},backgroundColor:function(t){return t.notDelay?"#FFFFFF":"#fa5238"},fontSize:function(t){return t.notDelay?"20px":"15px"}},Arrow:{position:"absolute",top:"48%",transform:"translateY(-50%)",zIndex:2,width:"50px",height:"100px",color:"#d8d8d8 !important",cursor:"pointer",transition:"all .2s","&:hover":{color:"#fb4226 !important"}},listMovie:{opacity:function(t){return t.fade?1:0},transition:"opacity .1s linear"}}})),(0,o.Z)((function(t){return{movieItem:{padding:"20px 10px 0px"},movieContent:{position:"relative",width:"100%",height:"45vw"},bgImg:{width:"100%",height:"100%",backgroundPosition:"center",borderRadius:4},moreMovie:{margin:"30px auto",textAlign:"center",display:function(t){return t.openMore?"none":"block"}},moreMovieButton:{color:"#949494",borderColor:"#949494",padding:"7px 25px","&:hover":{backgroundColor:"#fb4226",borderColor:"#fb4226",color:"#fff !important"}},c18:{position:"absolute",bottom:10,left:10,backgroundColor:"#fb4226",color:"#fff",fontSize:"14px",borderRadius:"4px",textAlign:"center",minWidth:"33px"}}}));e(87850),e(20018),e(71143)},49708:function(t,n,e){e.d(n,{d7:function(){return l},TP:function(){return d},xC:function(){return u},xG:function(){return f},w:function(){return p}});var o=e(74569),r=e.n(o)().create({baseURL:"https://6092b87185ff5100172137f4.mockapi.io/"}),i={getComment:function(){return r.get("/commentMovie")},postComment:function(t){return r.post("/commentMovie",t)},likeComment:function(t,n){var e="/commentMovie/".concat(t);return r.put(e,n)}},a=e(20018),c=e(94086),s=e(56223),u=function(t){return function(n){n({type:s.W9}),console.log("Movie ID: ",t),c.Z.getThongTinLichChieuPhim(t).then((function(t){n({type:s.TZ,payload:{data:t.data}})})).catch((function(t){var e;n({type:s.af,payload:{error:null!==(e=t.response)&&void 0!==e&&e.data?t.response.data:t.message}})}))}},d=function(t){return function(n){n({type:s.xh}),console.log("Movie ID: ",t),a.Z.getThongTinPhim(t).then((function(t){n({type:s.jV,payload:{data:t.data}})})).catch((function(t){var e;n({type:s.K2,payload:{error:null!==(e=t.response)&&void 0!==e&&e.data?t.response.data:t.message}})}))}},l=function(){return function(t){t({type:s.ff}),i.getComment().then((function(n){t({type:s.uV,payload:{data:n.data}})})).catch((function(n){var e;t({type:s.rq,payload:{error:null!==(e=n.response)&&void 0!==e&&e.data?n.response.data:n.message}})}))}},p=function(t){return function(n){n({type:s.Fq}),i.postComment(t).then((function(t){n({type:s.MX,payload:{data:t.data}})})).catch((function(t){var e;n({type:s.z8,payload:{error:null!==(e=t.response)&&void 0!==e&&e.data?t.response.data:t.message}})}))}},f=function(t,n){return function(e){e({type:s.pM}),i.likeComment(t,n).then((function(t){e({type:s.oP,payload:{data:t.data}})})).catch((function(t){var n;e({type:s.GA,payload:{error:null!==(n=t.response)&&void 0!==n&&n.data?t.response.data:t.message}})}))}}},17709:function(t,n,e){e.d(n,{Z:function(){return i}});var o=e(52007),r=e.n(o);function i(t,n){document.getElementById(t).scrollIntoView({behavior:"smooth",block:n||"nearest"})}i.propTypes={id:r().string.isRequired,block:r().string}},79370:function(t,n,e){var o=e(87462),r=e(29439),i=e(45987),a=e(72791),c=e(28182),s=e(18875),u=e(38317),d=e(10812),l=e(56043),p=e(23364),f=e(69806),m=a.forwardRef((function(t,n){var e=t.children,u=t.classes,m=t.className,g=t.collapsedHeight,h=void 0===g?"0px":g,v=t.component,y=void 0===v?"div":v,x=t.disableStrictModeCompat,b=void 0!==x&&x,Z=t.in,C=t.onEnter,w=t.onEntered,E=t.onEntering,k=t.onExit,F=t.onExited,M=t.onExiting,D=t.style,T=t.timeout,S=void 0===T?d.x9.standard:T,I=t.TransitionComponent,R=void 0===I?s.ZP:I,z=(0,i.Z)(t,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),H=(0,p.Z)(),N=a.useRef(),A=a.useRef(null),L=a.useRef(),B="number"===typeof h?"".concat(h,"px"):h;a.useEffect((function(){return function(){clearTimeout(N.current)}}),[]);var P=H.unstable_strictMode&&!b,W=a.useRef(null),j=(0,f.Z)(n,P?W:void 0),V=function(t){return function(n,e){if(t){var o=P?[W.current,n]:[n,e],i=(0,r.Z)(o,2),a=i[0],c=i[1];void 0===c?t(a):t(a,c)}}},q=V((function(t,n){t.style.height=B,C&&C(t,n)})),Y=V((function(t,n){var e=A.current?A.current.clientHeight:0,o=(0,l.C)({style:D,timeout:S},{mode:"enter"}).duration;if("auto"===S){var r=H.transitions.getAutoHeightDuration(e);t.style.transitionDuration="".concat(r,"ms"),L.current=r}else t.style.transitionDuration="string"===typeof o?o:"".concat(o,"ms");t.style.height="".concat(e,"px"),E&&E(t,n)})),G=V((function(t,n){t.style.height="auto",w&&w(t,n)})),U=V((function(t){var n=A.current?A.current.clientHeight:0;t.style.height="".concat(n,"px"),k&&k(t)})),K=V(F),O=V((function(t){var n=A.current?A.current.clientHeight:0,e=(0,l.C)({style:D,timeout:S},{mode:"exit"}).duration;if("auto"===S){var o=H.transitions.getAutoHeightDuration(n);t.style.transitionDuration="".concat(o,"ms"),L.current=o}else t.style.transitionDuration="string"===typeof e?e:"".concat(e,"ms");t.style.height=B,M&&M(t)}));return a.createElement(R,(0,o.Z)({in:Z,onEnter:q,onEntered:G,onEntering:Y,onExit:U,onExited:K,onExiting:O,addEndListener:function(t,n){var e=P?t:n;"auto"===S&&(N.current=setTimeout(e,L.current||0))},nodeRef:P?W:void 0,timeout:"auto"===S?null:S},z),(function(t,n){return a.createElement(y,(0,o.Z)({className:(0,c.Z)(u.container,m,{entered:u.entered,exited:!Z&&"0px"===B&&u.hidden}[t]),style:(0,o.Z)({minHeight:B},D),ref:j},n),a.createElement("div",{className:u.wrapper,ref:A},a.createElement("div",{className:u.wrapperInner},e)))}))}));m.muiSupportAuto=!0,n.Z=(0,u.Z)((function(t){return{container:{height:0,overflow:"hidden",transition:t.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(m)},20269:function(t,n,e){var o=e(87462),r=e(45987),i=e(72791),a=e(28182),c=e(38317),s=i.forwardRef((function(t,n){var e=t.disableSpacing,c=void 0!==e&&e,s=t.classes,u=t.className,d=(0,r.Z)(t,["disableSpacing","classes","className"]);return i.createElement("div",(0,o.Z)({className:(0,a.Z)(s.root,u,!c&&s.spacing),ref:n},d))}));n.Z=(0,c.Z)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(s)},94026:function(t,n,e){var o=e(87462),r=e(45987),i=e(72791),a=e(28182),c=e(38317),s=i.forwardRef((function(t,n){var e=t.classes,c=t.className,s=t.dividers,u=void 0!==s&&s,d=(0,r.Z)(t,["classes","className","dividers"]);return i.createElement("div",(0,o.Z)({className:(0,a.Z)(e.root,c,u&&e.dividers),ref:n},d))}));n.Z=(0,c.Z)((function(t){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(t.palette.divider),borderBottom:"1px solid ".concat(t.palette.divider)}}}),{name:"MuiDialogContent"})(s)},46169:function(t,n,e){var o=e(87462),r=e(72791),i=e(38317),a=e(38302),c=r.forwardRef((function(t,n){return r.createElement(a.Z,(0,o.Z)({component:"p",variant:"body1",color:"textSecondary",ref:n},t))}));n.Z=(0,i.Z)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(c)},26803:function(t,n,e){var o=e(64836),r=e(75263);n.Z=void 0;var i=r(e(72791)),a=(0,o(e(44894)).default)(i.createElement("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");n.Z=a},19147:function(t,n,e){var o=e(64836),r=e(75263);n.Z=void 0;var i=r(e(72791)),a=(0,o(e(44894)).default)(i.createElement("path",{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"}),"ThumbUp");n.Z=a}}]);
//# sourceMappingURL=9475.83c09b0e.chunk.js.map