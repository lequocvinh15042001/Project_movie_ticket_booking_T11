"use strict";(self.webpackChunkstandard=self.webpackChunkstandard||[]).push([[7447],{20018:function(e,n,t){var a=t(65608),r={getDanhSachPhim:function(){return a.Z.get("/movies/showing")},getSearchPhim:function(e){console.log(e);var n="/movies/showing/search?name=".concat(e);return a.Z.get(n)},getThongTinPhim:function(e){var n="/movies/details/".concat(e);return a.Z.get(n)},postThemPhimUpload:function(e){return console.log(e),a.Z.post("/movies/addNew",e)},postCapNhatPhimUpload:function(e){console.log("update phim upload: ",e);return a.Z.put("/movies/update",e)},postCapNhatPhim:function(e){console.log("update phim: ",e);return a.Z.put("/movies/update",e)},deleteMovie:function(e){var n="/movies/".concat(e);return a.Z.delete(n)}};n.Z=r},94086:function(e,n,t){var a=t(65608),r={getThongTinHeThongRap:function(){return a.Z.get("/branches/getAll")},getThongTinPhim:function(e){var n="/movies/details/".concat(e);return console.log("v\xf4 api"),a.Z.get(n)},getThongTinLichChieuHeThongRap:function(){return a.Z.get("/branches/getAll?page=0&size=20")},getThongTinLichChieuTheoNgayChieu:function(e){var n="/schedule/getAll?page=0&size=20&startDate=".concat(e);return a.Z.get(n)},postThemLichChieu:function(e){return a.Z.post("/schedule/add",e)},getThongTinLichChieuLe:function(){return a.Z.get("/schedule/getAll?page=0&size=20")},getTatCaLichChieuAdmin:function(){return a.Z.get("/schedule")},getThongTinLichChieuCoPhim:function(){return a.Z.get("/schedule")},getThongTinLichChieuHeThongRapTheoRap:function(e){var n="/schedule/getAll?page=0&size=20&branchId=".concat(e);return a.Z.get(n)},getThongTinLichChieuHeThongRapTheoNgayVaRap:function(e,n){var t="/schedule/getAll?page=0&size=20&branchId=".concat(e,"&startDate=").concat(n);return a.Z.get(t)},getThongTinLichChieuPhimCoRap:function(e,n){var t="schedule/getAll?page=0&size=20&movieId=".concat(e,"&branchId=").concat(n);return a.Z.get(t)},getThongTinLichChieuPhim:function(e,n){if(void 0===n){var t="schedule/getAll?page=0&size=20&movieId=".concat(e);return a.Z.get(t)}var r="schedule/getAll?page=0&size=20&movieId=".concat(e,"&branchId=").concat(n);return a.Z.get(r)},getThongTinLichCoNgay:function(e,n,t){console.log("truy\u1ec1n v\xf4 : ",e,n,t);var r="schedule/getAll?page=0&size=20&movieId=".concat(e,"&branchId=").concat(n,"&startDate=").concat(t);return a.Z.get(r)},getLichCoPhong:function(e,n,t,r){var o="schedule/getAll?page=0&size=20&movieId=".concat(e,"&branchId=").concat(n,"&startDate=").concat(t,"&roomId=").concat(r);return a.Z.get(o)}};n.Z=r},42182:function(e,n,t){t.d(n,{Z:function(){return c}});t(72791);var a=t(38596),r=t(16789),o=t(58741),i=t(80184),l=(0,a.Z)({button:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",zIndex:1,opacity:0,background:"0 0",border:"none",height:function(e){return e.width?e.width:70},width:function(e){return e.height?e.height:70},transition:"all .2s"},imgPlay:{height:"100%",width:"100%",transition:"all .2s","&:hover":{opacity:.7}}});function c(e){var n=e.cssRoot,t=e.width,a=e.height,c=e.urlYoutube,s=l({width:t,height:a}),d=(0,r.I0)();return(0,i.jsx)("div",{className:"".concat(s.button," ").concat(n),children:(0,i.jsx)("img",{src:"/img/carousel/play-video.png",className:s.imgPlay,onClick:function(){d({type:o.a,payload:{open:!0,urlYoutube:c}})},alt:"play"})})}},91994:function(e,n,t){t.r(n),t.d(n,{default:function(){return ue}});var a=t(1413),r=t(29439),o=t(72791),i=t(26347),l=t(16789),c=t(26513),s=t(98246),d=t(35720),u=t(13880),h=t(5088),g=t(83837),m=t(32772),p=t(38302),f=t(89526),v=t(47501),x=t(45987),b=t(4942),j=t(38596),y=t(13108),Z=t(38317),N=t(85159),C=t(94026),w=t(67025),T=t(30014),D=t(74829),I=t(80184),R=["children","classes","onClose"],k=(0,j.Z)((function(e){return{control:{margin:"11px 0"},addMovie:{width:"100%"},itemCtro:(0,b.Z)({paddingRight:16,paddingLeft:16},e.breakpoints.up("md"),{paddingRight:32,paddingLeft:32}),search:(0,b.Z)({verticalAlign:"bottom",position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:(0,y.U1)(e.palette.info.light,.5),"&:hover":{backgroundColor:(0,y.U1)(e.palette.info.light,1)}},e.breakpoints.down("md"),{marginTop:11}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",textOverflow:"ellipsis",overflow:"hidden",display:"flex"},inputInput:{padding:"8.5px 8.5px 8.5px 0px",paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},rootDataGrid:{"& .Mui-odd":{backgroundColor:"rgb(236,\t236,\t236)","&:hover":{backgroundColor:"rgb(236,\t135,\t14) !important"}},"& .MuiDataGrid-overlay":{zIndex:100},"& .Mui-even":{backgroundColor:"rgb(230, 230, 230)","&:hover":{backgroundColor:"rgb(236,\t135,\t14)"}},"& .MuiDataGrid-columnsContainer":{backgroundColor:"rgb(255, 213, 153)"},"& .custom-header":{backgroundColor:"rgb(236,\t135,\t14)","&:hover":{backgroundColor:"rgb(178,\t0,\t31)"}},"& .MuiDataGrid-colCellCheckbox":{width:48,height:55,minWidth:48,maxHeight:55,backgroundColor:"rgb(255, 213, 153)","&:hover":{backgroundColor:"rgb(255, 203, 127)"}}},button:{margin:e.spacing(1),width:270},rootTrailer:{cursor:"pointer",display:"inline-block",width:50,height:50,position:"relative","&:hover > div":{opacity:1},"& > div > img":{verticalAlign:"top"}},imgTrailer:{width:"100%",height:"100%",borderRadius:4},rootCellExpand:{alignItems:"center",lineHeight:"24px",width:"100%",height:"100%",position:"relative",display:"flex","& .cellValue":{width:"100%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},contentImage:{display:"flex",alignItems:"center",justifyContent:"space-between"},divImage:{flex:"50%"},image:{width:"auto",maxWidth:50,height:50,borderRadius:4},rootSlider:{flex:"50%",verticalAlign:"middle"},formControl:{display:"block",width:"100%",height:"calc(1.5em + .75rem + 2px)",padding:".375rem .75rem",fontSize:"1rem",fontWeight:400,lineHeight:1.5,color:"#495057",backgroundColor:"#fff",backgroundClip:"padding-box",border:"1px solid #ced4da",borderRadius:".25rem",transition:"border-color .15s ease-in-out,box-shadow .15s ease-in-out","& > div":{display:"block"}}}})),U=(0,Z.Z)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var n=e.children,t=e.classes,r=e.onClose,o=(0,x.Z)(e,R);return(0,I.jsxs)(N.Z,(0,a.Z)((0,a.Z)({disableTypography:!0,className:t.root},o),{},{children:[(0,I.jsx)(p.Z,{variant:"h6",children:n}),r?(0,I.jsx)(w.Z,{"aria-label":"close",className:t.closeButton,onClick:r,children:(0,I.jsx)(T.Z,{})}):null]}))})),L=(0,D.Z)({overrides:{MuiPickersToolbar:{toolbar:{backgroundColor:"#fb4226"}},MuiPickerDTTabs:{tabs:{backgroundColor:"#fb4226"}},MuiPickersDay:{day:{color:"#fb4226"},daySelected:{backgroundColor:"#fb4226"}},MuiButton:{textPrimary:{color:"#fb4226"}},PrivateTabIndicator:{colorSecondary:{backgroundColor:"#3f51b5"}},MuiInputBase:{input:{padding:"3px 0 2px"}},MuiInput:{underline:{display:"flex","&:before":{content:""},"&:after":{content:""}}}}}),S=(0,Z.Z)((function(e){return{root:{padding:e.spacing(2)}}}))(C.Z),M=t(21076),P=t(24076),A=t(8154),B=function(e){var n=e.width,t=e.value,l=e.field,c=k({field:l}),s=(0,o.useRef)(null),d=(0,o.useRef)(null),u=(0,o.useRef)(null),h=(0,o.useState)(null),g=(0,r.Z)(h,2),m=g[0],x=g[1],b=(0,o.useState)(!1),j=(0,r.Z)(b,2),y=j[0],Z=j[1],N=(0,o.useState)(!1),C=(0,r.Z)(N,2),w=C[0],T=C[1],D=(0,o.useState)({widthImage:200,value:20}),R=(0,r.Z)(D,2),U=R[0],L=R[1],S=(0,A.Z)("(max-width:768px)");return(0,I.jsxs)("div",{ref:s,className:c.rootCellExpand,onMouseEnter:function(e){var n="smallImageURl"===l||(0,i.OFR)(u.current),t=S?document.querySelector("body"):d.current;T(n),x(t),Z(!0)},onMouseLeave:function(){Z(!1)},children:[(0,I.jsx)("div",{ref:d,style:{height:1,width:n,display:"block",position:"absolute",top:0}}),(0,I.jsx)("div",{ref:u,className:"cellValue",children:"smallImageURl"!==l?t:(0,I.jsxs)("div",{className:c.contentImage,children:[(0,I.jsx)("div",{className:c.divImage,children:(0,I.jsx)("img",{className:c.image,src:t,alt:"poster movie"})}),(0,I.jsx)(P.Z,{value:U.value,classes:{root:c.rootSlider},onChange:function(e,n){e.cancelable&&e.preventDefault(),L({widthImage:(200*n+12e3)/80,value:n})}})]})}),w&&(0,I.jsx)(v.Z,{open:y&&null!==m,anchorEl:m,style:{width:"smallImageURl"===l?U.widthImage:n,marginLeft:-17},placement:S?"right-start":"right",transition:!0,children:function(e){var n=e.TransitionProps;return(0,I.jsx)(M.Z,(0,a.Z)((0,a.Z)({},n),{},{timeout:350,children:"smallImageURl"===l?(0,I.jsx)("img",{style:{width:"100%",height:"100%",borderRadius:4},src:t,alt:"poster movie"}):(0,I.jsx)(f.Z,{elevation:1,style:{minHeight:s.current.offsetHeight-3,backgroundColor:"#ffff"},children:(0,I.jsx)(p.Z,{variant:"body2",style:{padding:8},children:t})})}))}})]})};function _(e){return(0,I.jsx)(B,{field:e.field,value:e.value?e.value.toString():"",width:e.colDef.width})}var q=t(30333),z=t.n(q),E=t(32950),H=t(71143),Y=t(21079),F=t(23711),O=t(75566),K=t(30498);function $(e){var n=e.onDeleted,t=e.phimItem,a=e.onEdit,r=(0,K.Z)(t.id);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(O.ZP,{title:r?"Can Delete":"Can't Delete",children:(0,I.jsx)(w.Z,{color:"primary",style:{color:r?"#f50057":"#00000042"},onClick:function(){return n(t.id)},children:(0,I.jsx)(F.Z,{})})}),(0,I.jsx)(O.ZP,{title:"Edit",children:(0,I.jsx)(w.Z,{color:"primary",style:{color:"#b24332"},onClick:function(){return a(t)},children:(0,I.jsx)(Y.Z,{})})})]})}var G=t(25264),V=t(42182);function W(e){var n=e.urlYoutube,t=k();return(0,I.jsxs)("div",{className:t.rootTrailer,children:[(0,I.jsx)("img",{src:"https://img.youtube.com/vi/".concat((0,G.Z)(n),"/mqdefault.jpg"),alt:"trailer",className:t.imgTrailer}),(0,I.jsx)(V.Z,{width:40,height:40,urlYoutube:n})]})}var X=t(81724),J=t(26864),Q=t(97941);var ee=t(40678),ne=t(42124),te=t(12692),ae=t(1795),re=t(66828),oe=t(21830),ie=t.n(oe),le=t(1870);function ce(e){var n=e.selectedPhim,t=e.onUpdate,i=e.onAddMovie,l=k(),c=(0,o.useState)(null===n||void 0===n?void 0:n.smallImageURl),d=(0,r.Z)(c,2),u=d[0],h=(d[1],(0,o.useState)(null===n||void 0===n?void 0:n.largeImageURL)),g=(0,r.Z)(h,2),m=g[0],p=(g[1],(0,o.useState)("")),f=(0,r.Z)(p,2),v=f[0],x=f[1],b=(0,o.useState)(""),j=(0,r.Z)(b,2),y=j[0],Z=j[1],N=(0,s.Ds)().enqueueSnackbar,C=X.Ry().shape({name:X.Z_().required("*Kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng!"),shortDescription:X.Z_().required("*Kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng!").min(50,"M\xf4 t\u1ea3 c\u1ea7n 100 k\xfd t\u1ef1 tr\u1edf l\xean!"),longDescription:X.Z_().required("*Kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng!").min(50,"M\xf4 t\u1ea3 c\u1ea7n 100 k\xfd t\u1ef1 tr\u1edf l\xean!"),director:X.Z_().required("*Kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng!"),actors:X.Z_().required("*Kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng!"),categories:X.Z_().required("*Kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng!"),releaseDate:X.Z_().required("*Please choose release date!"),duration:X.Z_().required("*Kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng!"),trailerURL:X.Z_().required("*Kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng!").matches(/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,"*URL youtube kh\xf4ng h\u1ee3p l\u1ec7!"),language:X.Z_().required("*Kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng!"),rated:X.Z_().required("*Kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng!"),isShowing:X.Z_().required("*Kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng!")}),w=function(){var e=new FormData;e.append("file",v),e.append("upload_preset","hh37brtc"),e.append("cloud_name","dfb5p3kus"),fetch("https://api.cloudinary.com/v1_1/dfb5p3kus/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){console.log("\xfap \u1ea3nh nh\u1ecf: ",e.secure_url),x(e.secure_url),N("Th\xe0nh c\xf4ng",{variant:"success"})})).catch((function(e){console.log(e),N("Th\u1ea5t b\u1ea1i",{variant:"error"})}))},T=function(){var e=new FormData;e.append("file",y),e.append("upload_preset","hh37brtc"),e.append("cloud_name","dfb5p3kus"),fetch("https://api.cloudinary.com/v1_1/dfb5p3kus/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){console.log("ups \u1ea3nh l\u1edbn: ",e.secure_url),Z(e.secure_url),N("Th\xe0nh c\xf4ng",{variant:"success"})})).catch((function(e){console.log(e),N("Th\u1ea5t b\u1ea1i",{variant:"error"})}))};return console.log("SrcImage 1 : ",v),console.log("SrcImage 2: ",y),(0,I.jsx)(J.J9,{initialValues:{id:n.id,name:n.name,smallImageURl:n.smallImageURl,longDescription:n.longDescription,shortDescription:n.shortDescription,largeImageURL:n.largeImageURL,director:n.director,actors:n.actors,categories:n.categories,releaseDate:null!==n&&void 0!==n&&n.releaseDate?new Date(n.releaseDate):new Date,duration:n.duration,trailerURL:n.trailerURL,rated:n.rated,isShowing:n.isShowing},validationSchema:C,onSubmit:function(e){if((e=(0,a.Z)((0,a.Z)({},e),{},{releaseDate:e.releaseDate.toLocaleDateString("fr-CA")})).smallImageURl||e.largeImageURL||(e=(0,a.Z)((0,a.Z)({},e),{},{smallImageURl:v,largeImageURL:y})),n.id)t(e);else{var r=(0,a.Z)({},e);delete r.id,i(r)}},children:function(e){return(0,I.jsxs)(J.l0,{children:[(0,I.jsxs)("div",{className:"form-group",children:[(0,I.jsx)("label",{children:"T\xean phim\xa0"}),(0,I.jsx)(J.Bc,{name:"name",render:function(e){return(0,I.jsx)("span",{className:"text-danger",children:e})}}),(0,I.jsx)(J.gN,{name:"name",className:"form-control"})]}),(0,I.jsxs)("div",{className:"form-group",children:[(0,I.jsx)("label",{children:"Link Trailer\xa0"}),(0,I.jsx)(J.Bc,{name:"trailerURL",render:function(e){return(0,I.jsx)("span",{className:"text-danger",children:e})}}),(0,I.jsx)(J.gN,{name:"trailerURL",className:"form-control"})]}),(0,I.jsxs)("div",{className:"form-group",children:[(0,I.jsx)("label",{children:"H\xecnh \u1ea3nh nh\u1ecf\xa0"}),(0,I.jsx)(J.Bc,{name:"smallImageURl",render:function(e){return(0,I.jsx)("span",{className:"text-danger",children:e})}}),(0,I.jsxs)("div",{className:"form-row",children:[(0,I.jsx)("div",{className:"col-2",children:u?(0,I.jsx)("img",{src:u,id:"image-selected",alt:"movie",className:"img-fluid rounded"}):(0,I.jsx)(ee.Z,{style:{fontSize:60}})}),(0,I.jsx)("div",{className:"col-10",children:(0,I.jsx)("input",{type:"file",name:"smallImageURl",className:"form-control",onChange:function(e){x(e.target.files[0])}})}),(0,I.jsx)("div",{onClick:w,children:(0,I.jsx)(le.Z,{type:"button",data:"Up \u1ea3nh nh\u1ecf"})})]})]}),(0,I.jsxs)("div",{className:"form-group",children:[(0,I.jsx)("label",{children:"H\xecnh \u1ea3nh l\u1edbn\xa0"}),(0,I.jsx)(J.Bc,{name:"largeImageURL",render:function(e){return(0,I.jsx)("span",{className:"text-danger",children:e})}}),(0,I.jsxs)("div",{className:"form-row",children:[(0,I.jsx)("div",{className:"col-2",children:m?(0,I.jsx)("img",{src:m,id:"image-selected",alt:"movie",className:"img-fluid rounded"}):(0,I.jsx)(ee.Z,{style:{fontSize:60}})}),(0,I.jsx)("div",{className:"col-10",children:(0,I.jsx)("input",{type:"file",name:"largeImageURL",className:"form-control",onChange:function(e){Z(e.target.files[0])}})}),(0,I.jsx)("div",{onClick:T,children:(0,I.jsx)(le.Z,{type:"button",data:"Up \u1ea3nh l\u1edbn"})})]})]}),(0,I.jsxs)("div",{className:"form-group",children:[(0,I.jsx)("label",{children:"M\xf4 t\u1ea3 ng\u1eafn\xa0"}),(0,I.jsx)(J.Bc,{name:"shortDescription",render:function(e){return(0,I.jsx)("span",{className:"text-danger",children:e})}}),(0,I.jsx)(J.gN,{as:"textarea",name:"shortDescription",className:"form-control"})]}),(0,I.jsxs)("div",{className:"form-group",children:[(0,I.jsx)("label",{children:"M\xf4 t\u1ea3 chi ti\u1ebft\xa0"}),(0,I.jsx)(J.Bc,{name:"longDescription",render:function(e){return(0,I.jsx)("span",{className:"text-danger",children:e})}}),(0,I.jsx)(J.gN,{as:"textarea",name:"longDescription",className:"form-control"})]}),(0,I.jsxs)("div",{className:"form-group",children:[(0,I.jsx)("label",{children:"\u0110\u1ea1o di\u1ec5n\xa0"}),(0,I.jsx)(J.Bc,{name:"director",render:function(e){return(0,I.jsx)("span",{className:"text-danger",children:e})}}),(0,I.jsx)(J.gN,{name:"director",className:"form-control"})]}),(0,I.jsxs)("div",{className:"form-group",children:[(0,I.jsx)("label",{children:"Di\u1ec5n vi\xean\xa0"}),(0,I.jsx)(J.Bc,{name:"actors",render:function(e){return(0,I.jsx)("span",{className:"text-danger",children:e})}}),(0,I.jsx)(J.gN,{name:"actors",className:"form-control"})]}),(0,I.jsxs)("div",{className:"form-group",children:[(0,I.jsx)("label",{children:"Th\u1ec3 lo\u1ea1i phim\xa0"}),(0,I.jsx)(J.Bc,{name:"categories",render:function(e){return(0,I.jsx)("span",{className:"text-danger",children:e})}}),(0,I.jsx)(J.gN,{name:"categories",className:"form-control"})]}),(0,I.jsxs)("div",{className:"form-group",children:[(0,I.jsx)("label",{children:"Ng\xe0y kh\u1edfi chi\u1ebfu\xa0"}),(0,I.jsx)(J.Bc,{name:"releaseDate",render:function(e){return(0,I.jsx)("span",{className:"text-danger",children:e})}}),(0,I.jsx)(re.Z,{className:l.formControl,focused:!1,children:(0,I.jsx)(ne.M,{utils:Q.Z,children:(0,I.jsx)(ae.Z,{theme:L,children:(0,I.jsx)(te.e,{value:e.values.releaseDate,onChange:function(n){return e.setFieldValue("releaseDate",n)},format:"yyyy-MM-dd"})})})})]}),(0,I.jsxs)("div",{className:"form-group",children:[(0,I.jsx)("label",{children:"Th\u1eddi l\u01b0\u1ee3ng phim (ph\xfat)\xa0"}),(0,I.jsx)(J.Bc,{name:"duration",render:function(e){return(0,I.jsx)("span",{className:"text-danger",children:e})}}),(0,I.jsx)(J.gN,{name:"duration",type:"number",className:"form-control"})]}),(0,I.jsxs)("div",{className:"form-group",children:[(0,I.jsx)("label",{children:"Ng\xf4n ng\u1eef\xa0"}),(0,I.jsx)(J.Bc,{name:"language",render:function(e){return(0,I.jsx)("span",{className:"text-danger",children:e})}}),(0,I.jsx)(J.gN,{name:"language",className:"form-control"})]}),(0,I.jsxs)("div",{className:"form-group",children:[(0,I.jsx)("label",{children:"\u0110\xe1nh gi\xe1\xa0"}),(0,I.jsx)(J.Bc,{name:"rated",render:function(e){return(0,I.jsx)("span",{className:"text-danger",children:e})}}),(0,I.jsx)(J.gN,{name:"rated",className:"form-control"})]}),(0,I.jsxs)("div",{className:"form-group",children:[(0,I.jsx)("label",{children:"C\xf3 \u0111ang chi\u1ebfu kh\xf4ng (n\u1ebfu c\xf3 ch\u1ecdn 1, ng\u01b0\u1ee3c l\u1ea1i ch\u1ecdn 0)\xa0"}),(0,I.jsx)(J.Bc,{name:"isShowing",render:function(e){return(0,I.jsx)("span",{className:"text-danger",children:e})}}),(0,I.jsx)(J.gN,{name:"isShowing",type:"number",className:"form-control"})]}),(0,I.jsx)("button",{type:"submit",className:"form-control",children:"Submit"})]})}})}var se=t(67380);function de(){return(0,I.jsx)(i.nik,{children:(0,I.jsx)(d.Z,{style:{margin:"auto"}})})}function ue(){var e,n,t=(0,o.useState)([]),d=(0,r.Z)(t,2),p=d[0],f=d[1];console.log("movieListDisplay: ",p);var v=k(),x=(0,s.Ds)().enqueueSnackbar,b=(0,l.v9)((function(e){return e.movieReducer})),j=b.movieList2,y=b.loadingMovieList2,Z=b.loadingDeleteMovie,N=b.errorDeleteMovie,C=b.successDeleteMovie,w=b.successUpdateMovie,T=b.errorUpdateMovie,D=b.loadingUpdateMovie,R=b.loadingAddUploadMovie,L=b.successAddUploadMovie,M=b.errorAddUploadMovie,P=b.loadingUpdateNoneImageMovie,B=b.successUpdateNoneImageMovie,q=b.errorUpdateNoneImageMovie,Y=(0,l.I0)(),F=(0,o.useRef)(""),O=(0,o.useRef)(!1),K=(0,o.useState)(""),G=(0,r.Z)(K,2),V=G[0],X=G[1],J=(0,o.useRef)(0),Q=o.useState(!1),ee=(0,r.Z)(Q,2),ne=ee[0],te=ee[1],ae=(0,o.useRef)(null);(0,A.Z)("(max-width:768px)");(0,o.useEffect)((function(){(!j||w||B||C||N||L)&&Y((0,H.C$)())}),[w,B,C,N,L]);(0,o.useEffect)((function(){return function(){Y((0,H.p5)())}}),[]),(0,o.useEffect)((function(){if(j){var e,n=null===j||void 0===j||null===(e=j.data)||void 0===e?void 0:e.map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{hanhDong:"",id:e.id})}));f(n)}}),[j]),(0,o.useEffect)((function(){"Delete Success but backend return error"===N&&(C="Delete Success !"),C?x(C,{variant:"success"}):N&&x(N,{variant:"error"})}),[N,C]),(0,o.useEffect)((function(){var e,n;(w||B)&&(O.current=!0,x("Update successfully: ".concat(null!==(e=w.name)&&void 0!==e?e:"").concat(null!==(n=B.name)&&void 0!==n?n:""),{variant:"success"}));(T||q)&&(O.current=!1,x("".concat(null!==T&&void 0!==T?T:"").concat(null!==q&&void 0!==q?q:""),{variant:"error"}))}),[w,T,B,q]),(0,o.useEffect)((function(){L&&x("Add new movie successfully: ".concat(L.name),{variant:"success"}),M&&x(M,{variant:"error"})}),[L,M]);var re=function(e){var n=ie().mixin({customClass:{confirmButton:"btn btn-success",cancelButton:"btn btn-danger"},buttonsStyling:!1});n.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then((function(t){t.isConfirmed?(Z||Y((0,H.fx)(e)),n.fire("Deleted!","Your file has been deleted.","success")):t.dismiss===ie().DismissReason.cancel&&n.fire("Cancelled","Your movie is safe :)","error")}))},oe=function(e){ae.current=e,te(!0)},le=[{field:"hanhDong",headerName:"Action",width:130,renderCell:function(e){return(0,I.jsx)($,{onEdit:oe,onDeleted:re,phimItem:e.row})},headerAlign:"center",align:"left",headerClassName:"custom-header"},{field:"name",headerName:"T\xean phim",width:250,headerAlign:"center",align:"left",headerClassName:"custom-header",renderCell:_},{field:"trailerURL",headerName:"Trailer",width:130,renderCell:function(e){return(0,I.jsx)("div",{style:{display:"inline-block"},children:(0,I.jsx)(W,{urlYoutube:e.row.trailerURL})})},headerAlign:"center",align:"center",headerClassName:"custom-header"},{field:"smallImageURl",headerName:"H\xecnh \u1ea3nh",width:200,headerAlign:"center",align:"center",headerClassName:"custom-header",renderCell:function(e){return _(e)}},{field:"longDescription",headerName:"M\xf4 t\u1ea3",width:170,headerAlign:"center",align:"left",headerClassName:"custom-header",renderCell:_},{field:"releaseDate",headerName:"Ng\xe0y kh\u1edfi chi\u1ebfu",width:190,type:"date",headerAlign:"center",align:"center",headerClassName:"custom-header",valueFormatter:function(e){return(0,se.Z)(e.value.slice(0,10)).dateFull}},{field:"rated",headerName:"\u0110\xe1nh gi\xe1",width:120,headerAlign:"center",align:"center",headerClassName:"custom-header"},{field:"id",hide:!0,width:130},{field:"categories",hide:!0,width:130},{field:"duration",hide:!0,width:200,renderCell:_}],ue={lower:!0,locale:"vi"};return(0,I.jsxs)("div",{style:{height:"80vh",width:"100%",backgroundColor:"white"},children:[(0,I.jsx)("div",{className:v.control,children:(0,I.jsxs)("div",{className:"row",children:[(0,I.jsx)("div",{className:"col-12 col-md-6 ".concat(v.itemCtro),children:(0,I.jsx)(c.Z,{variant:"contained",color:"primary",className:v.addMovie,onClick:function(){ae.current={id:"",name:"",smallImageURl:"",longDescription:"",shortDescription:"",largeImageURL:"",director:"",actors:"",categories:"",releaseDate:"",duration:"",trailerURL:"",language:"",rated:"",isShowing:null},te(!0)},disabled:R,startIcon:(0,I.jsx)(m.Z,{}),children:"Th\xeam phim"})}),(0,I.jsx)("div",{className:"col-12 col-md-4 ".concat(v.itemCtro),children:(0,I.jsxs)("div",{className:v.search,children:[(0,I.jsx)("div",{className:v.searchIcon,children:(0,I.jsx)(u.Z,{})}),(0,I.jsx)(h.Z,{placeholder:"T\xecm ki\u1ebfm...",classes:{root:v.inputRoot,input:v.inputInput},style:{color:"black"},onChange:function(e){return n=e.target.value,clearTimeout(J.current),void(J.current=setTimeout((function(){X(n)}),500));var n}})]})}),(0,I.jsx)("div",{className:"col-12 col-md-2 ".concat(v.itemCtro),onClick:function(){Y((0,H.C$)())},children:(0,I.jsx)(E.Z,{})})]})}),(0,I.jsx)(i._$r,{className:v.rootDataGrid,rows:function(){var e,n=null===p||void 0===p?void 0:p.filter((function(e){var n,t,a,r,o,i,l=-1!==(null===(n=z()(null!==(t=e.name)&&void 0!==t?t:"",ue))||void 0===n?void 0:n.indexOf(z()(V,ue))),c=-1!==(null===(a=z()(null!==(r=e.longDescription)&&void 0!==r?r:"",ue))||void 0===a?void 0:a.indexOf(z()(V,ue))),s=-1!==(null===(o=z()(null!==(i=e.releaseDate)&&void 0!==i?i:"",ue))||void 0===o?void 0:o.indexOf(z()(V,ue)));return l||c||s}));F.current&&O.current&&(n=null===(e=n)||void 0===e?void 0:e.map((function(e){return e.id===F.current.id?(0,a.Z)((0,a.Z)({},e),{},{smallImageURl:F.current.smallImageURl}):e})));return n}(),columns:le,pageSize:25,rowsPerPageOptions:[10,25,50],loading:D||Z||y||P,components:{LoadingOverlay:de,Toolbar:i.npt},sortModel:[{field:"name",sort:"asc"}]}),(0,I.jsxs)(g.Z,{open:ne,children:[(0,I.jsx)(U,{onClose:function(){return te(!1)},children:null!==ae&&void 0!==ae&&null!==(e=ae.current)&&void 0!==e&&e.name?"Edit: ".concat(null===ae||void 0===ae||null===(n=ae.current)||void 0===n?void 0:n.name):"Add new"}),(0,I.jsx)(S,{dividers:!0,children:(0,I.jsx)(ce,{selectedPhim:ae.current,onUpdate:function(e,n,t){if(!D&&!P){if(te(!1),F.current=t,"string"===typeof n){var a=null===p||void 0===p?void 0:p.find((function(e){return e.id===t.id}));return e.smallImageURl=a.smallImageURl,void Y((0,H.u8)(e))}Y((0,H.OZ)(e))}},onAddMovie:function(e){R||Y((0,H.Um)(e)),te(!1)}})})]})]})}},71143:function(e,n,t){t.d(n,{C$:function(){return s},It:function(){return c},OZ:function(){return g},Um:function(){return p},ac:function(){return u},fx:function(){return h},p5:function(){return f},u8:function(){return m},zY:function(){return d}});var a=t(74165),r=t(15861),o=t(20018),i=t(94086),l=t(28941),c=function(){return function(){var e=(0,r.Z)((0,a.Z)().mark((function e(n){var t,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:l.u}),e.prev=1,e.next=4,o.Z.getDanhSachPhim();case 4:t=e.sent,console.log(t),n({type:l.Fo,payload:{data:t.data}}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n({type:l.jN,payload:{errorMovieList:null!==(r=e.t0.response)&&void 0!==r&&r.data?e.t0.response.data:e.t0.message}});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n){return e.apply(this,arguments)}}()},s=function(){return function(e){e({type:l.js}),o.Z.getDanhSachPhim().then((function(n){e({type:l.pi,payload:{data:n.data}})})).catch((function(n){var t;e({type:l.yI,payload:{errorMovieList:null!==(t=n.response)&&void 0!==t&&t.data?n.response.data:n.message}})}))}},d=function(e){return console.log(e),function(n){n({type:l.BB}),i.Z.getThongTinLichChieuHeThongRapTheoRap(e).then((function(e){console.log("L\u1ea5y lch: ",e),n({type:l.Bn,payload:{data:e.data.data.content}})})).catch((function(e){var t;n({type:l.Uq,payload:{errorScheduleList2:null!==(t=e.response)&&void 0!==t&&t.data?e.response.data:e.message}})}))}},u=function(){return function(e){e({type:l.BB}),i.Z.getTatCaLichChieuAdmin().then((function(n){console.log("L\u1ea5y lch: ",n),e({type:l.Bn,payload:{data:n.data}})})).catch((function(n){var t;e({type:l.Uq,payload:{errorScheduleList:null!==(t=n.response)&&void 0!==t&&t.data?n.response.data:n.message}})}))}},h=function(e){return console.log(e),function(n){n({type:l.md}),o.Z.deleteMovie(e).then((function(e){n({type:l.C,payload:{data:e.data.data}})})).catch((function(e){var t,a=null!==e&&void 0!==e&&null!==(t=e.response)&&void 0!==t&&t.data?e.response.data:"X\xf3a th\xe0nh c\xf4ng nh\u01b0ng backend return error";n({type:l.XC,payload:{error:a}})}))}},g=function(e){return console.log("updateMovieUpload",e),function(n){n({type:l.yT}),o.Z.postCapNhatPhimUpload(e).then((function(e){n({type:l.iF,payload:{data:e.data.data}})})).catch((function(e){n({type:l.y6,payload:{error:"Update fail! Don't be empty any field or Release Date was wrong!"}})}))}},m=function(e){return console.log("Update phim: ",e),function(n){n({type:l.LA}),o.Z.postCapNhatPhim(e).then((function(e){console.log(e),n({type:l.gZ,payload:{data:e.data}})})).catch((function(e){console.log(e),n({type:l.j_,payload:{error:"Update fail! Don't be empty any field or Release Date was wrong!"}})}))}},p=function(e){return function(n){console.log("movieObj: ",e),n({type:l.Yq}),o.Z.postThemPhimUpload(e).then((function(e){console.log("Th\xeam: ",e),n({type:l.Tx,payload:{data:e.data}})})).catch((function(e){console.log("L\u1ed7i th\xeam: ",e.message),n({type:l.vF,payload:{error:"Update fail! Don't be empty any field or Release Date was wrong!"}})}))}},f=function(){return function(e){e({type:l.$_})}}},1870:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(1413),r=t(29439),o=t(72791),i=t(96015),l=t(96580),c=t(91487),s=t(17205),d=t(55590),u=t(872),h=t(53329),g=t(80184);function m(e){var n=e.data,t=o.useState(!1),m=(0,r.Z)(t,2),p=m[0],f=m[1],v=o.useState(!1),x=(0,r.Z)(v,2),b=x[0],j=x[1],y=o.useRef(),Z=(0,a.Z)({},b&&{bgcolor:c.Z[500],"&:hover":{bgcolor:c.Z[700]}});o.useEffect((function(){return function(){clearTimeout(y.current)}}),[]);var N=function(){p||(j(!1),f(!0),y.current=window.setTimeout((function(){j(!0),f(!1)}),2e3))};return(0,g.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,g.jsxs)(i.Z,{sx:{m:1,position:"relative"},children:[(0,g.jsx)(d.Z,{"aria-label":"save",color:"primary",sx:Z,onClick:N,children:b?(0,g.jsx)(u.Z,{}):(0,g.jsx)(h.Z,{})}),p&&(0,g.jsx)(l.Z,{size:68,sx:{color:c.Z[500],position:"absolute",top:-6,left:-6,zIndex:1}})]}),(0,g.jsxs)(i.Z,{sx:{m:1,position:"relative"},children:[(0,g.jsx)(s.Z,{variant:"contained",sx:Z,disabled:p,onClick:N,children:n}),p&&(0,g.jsx)(l.Z,{size:24,sx:{color:c.Z[500],position:"absolute",top:"50%",left:"50%",marginTop:"-12px",marginLeft:"-12px"}})]})]})}},32950:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(26513),r=(t(72791),t(12163)),o=t(80184);function i(){return(0,o.jsx)(a.Z,{color:"primary",variant:"contained",startIcon:(0,o.jsx)(r.Z,{}),children:"Refresh"})}},67380:function(e,n,t){var a=t(52007),r=t.n(a),o=function(e){var n;if(!e)return{dayToday:"loading...",dateShort:"loading...",dateFull:"loading...",dDMmYy:"loading..."};if(-1!==(null===(n=e)||void 0===n?void 0:n.indexOf("/"))){var t,a=null===(t=e)||void 0===t?void 0:t.split("/");e="".concat(a[2],"-").concat(a[1],"-").concat(a[0])}var r=new Date(e),o=r.getDay(),i="";0===o&&(i="Ch\u1ee7 nh\u1eadt"),1===o&&(i="Th\u1ee9 hai"),2===o&&(i="Th\u1ee9 ba"),3===o&&(i="Th\u1ee9 t\u01b0"),4===o&&(i="Th\u1ee9 n\u0103m"),5===o&&(i="Th\u1ee9 s\xe1u"),6===o&&(i="Th\u1ee9 b\u1ea3y"),(new Date).toString().slice(0,10)===r.toString().slice(0,10)&&(i="H\xf4m nay");var l="0".concat(r.getDate()).slice(-2),c="0".concat(r.getMonth()+1).slice(-2),s=r.getFullYear(),d=i+", "+l+" th\xe1ng "+c+", "+s,u=r.getTime();return{dayToday:i,dateShort:e,dateFull:d,YyMmDd:"".concat(s,".").concat(c,".").concat(l),getTime:u}};n.Z=o,o.propTypes={ISODate:r().string.isRequired}},30498:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(29439),r=t(72791),o=(t(74569),t(52007)),i=t.n(o);function l(e){var n=(0,r.useState)(!0),t=(0,a.Z)(n,2),o=t[0];t[1],"https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=".concat(e);return o}l.propTypes={maPhim:i().number.isRequired}}}]);
//# sourceMappingURL=7447.9bffc62f.chunk.js.map