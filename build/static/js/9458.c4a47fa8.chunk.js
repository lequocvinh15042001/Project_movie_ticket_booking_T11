"use strict";(self.webpackChunkstandard=self.webpackChunkstandard||[]).push([[9458],{42182:function(e,n,t){t.d(n,{Z:function(){return d}});t(72791);var i=t(38596),a=t(16789),o=t(58741),r=t(80184),l=(0,i.Z)({button:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",zIndex:1,opacity:0,background:"0 0",border:"none",height:function(e){return e.width?e.width:70},width:function(e){return e.height?e.height:70},transition:"all .2s"},imgPlay:{height:"100%",width:"100%",transition:"all .2s","&:hover":{opacity:.7}}});function d(e){var n=e.cssRoot,t=e.width,i=e.height,d=e.urlYoutube,c=l({width:t,height:i}),s=(0,a.I0)();return(0,r.jsx)("div",{className:"".concat(c.button," ").concat(n),children:(0,r.jsx)("img",{src:"/img/carousel/play-video.png",className:c.imgPlay,onClick:function(){s({type:o.a,payload:{open:!0,urlYoutube:d}})},alt:"play"})})}},19458:function(e,n,t){t.r(n),t.d(n,{default:function(){return J}});var i=t(1413),a=t(29439),o=t(72791),r=t(26347),l=t(16789),d=t(26513),c=t(98246),s=t(35720),u=t(13880),h=t(5088),g=t(83837),m=t(32772),v=t(38302),p=t(89526),f=t(47501),b=t(45987),x=t(4942),y=t(38596),C=t(13108),Z=t(38317),j=t(85159),w=t(94026),k=t(67025),N=t(30014),R=t(74829),T=t(80184),S=["children","classes","onClose"],L=(0,y.Z)((function(e){return{control:{margin:"11px 0"},addMovie:{width:"100%"},itemCtro:(0,x.Z)({paddingRight:16,paddingLeft:16},e.breakpoints.up("md"),{paddingRight:32,paddingLeft:32}),search:(0,x.Z)({verticalAlign:"bottom",position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:(0,C.U1)(e.palette.info.light,.5),"&:hover":{backgroundColor:(0,C.U1)(e.palette.info.light,1)}},e.breakpoints.down("md"),{marginTop:11}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",textOverflow:"ellipsis",overflow:"hidden",display:"flex"},inputInput:{padding:"8.5px 8.5px 8.5px 0px",paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},rootDataGrid:{"& .Mui-odd":{backgroundColor:"rgb(236,\t236,\t236)","&:hover":{backgroundColor:"rgb(236,\t135,\t14) !important"}},"& .MuiDataGrid-overlay":{zIndex:100},"& .Mui-even":{backgroundColor:"rgb(230, 230, 230)","&:hover":{backgroundColor:"rgb(236,\t135,\t14)"}},"& .MuiDataGrid-columnsContainer":{backgroundColor:"rgb(255, 213, 153)"},"& .custom-header":{backgroundColor:"rgb(236,\t135,\t14)","&:hover":{backgroundColor:"rgb(178,\t0,\t31)"}},"& .MuiDataGrid-colCellCheckbox":{width:48,height:55,minWidth:48,maxHeight:55,backgroundColor:"rgb(255, 213, 153)","&:hover":{backgroundColor:"rgb(255, 203, 127)"}}},button:{margin:e.spacing(1),width:270},rootTrailer:{cursor:"pointer",display:"inline-block",width:50,height:50,position:"relative","&:hover > div":{opacity:1},"& > div > img":{verticalAlign:"top"}},imgTrailer:{width:"100%",height:"100%",borderRadius:4},rootCellExpand:{alignItems:"center",lineHeight:"24px",width:"100%",height:"100%",position:"relative",display:"flex","& .cellValue":{width:"100%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},contentImage:{display:"flex",alignItems:"center",justifyContent:"space-between"},divImage:{flex:"50%"},image:{width:"auto",maxWidth:50,height:50,borderRadius:4},rootSlider:{flex:"50%",verticalAlign:"middle"},formControl:{display:"block",width:"100%",height:"calc(1.5em + .75rem + 2px)",padding:".375rem .75rem",fontSize:"1rem",fontWeight:400,lineHeight:1.5,color:"#495057",backgroundColor:"#fff",backgroundClip:"padding-box",border:"1px solid #ced4da",borderRadius:".25rem",transition:"border-color .15s ease-in-out,box-shadow .15s ease-in-out","& > div":{display:"block"}}}})),M=(0,Z.Z)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var n=e.children,t=e.classes,a=e.onClose,o=(0,b.Z)(e,S);return(0,T.jsxs)(j.Z,(0,i.Z)((0,i.Z)({disableTypography:!0,className:t.root},o),{},{children:[(0,T.jsx)(v.Z,{variant:"h6",children:n}),a?(0,T.jsx)(k.Z,{"aria-label":"close",className:t.closeButton,onClick:a,children:(0,T.jsx)(N.Z,{})}):null]}))})),I=((0,R.Z)({overrides:{MuiPickersToolbar:{toolbar:{backgroundColor:"#fb4226"}},MuiPickerDTTabs:{tabs:{backgroundColor:"#fb4226"}},MuiPickersDay:{day:{color:"#fb4226"},daySelected:{backgroundColor:"#fb4226"}},MuiButton:{textPrimary:{color:"#fb4226"}},PrivateTabIndicator:{colorSecondary:{backgroundColor:"#3f51b5"}},MuiInputBase:{input:{padding:"3px 0 2px"}},MuiInput:{underline:{display:"flex","&:before":{content:""},"&:after":{content:""}}}}}),(0,Z.Z)((function(e){return{root:{padding:e.spacing(2)}}}))(w.Z)),D=t(21076),P=t(24076),A=t(8154),U=function(e){var n=e.width,t=e.value,l=e.field,d=L({field:l}),c=(0,o.useRef)(null),s=(0,o.useRef)(null),u=(0,o.useRef)(null),h=(0,o.useState)(null),g=(0,a.Z)(h,2),m=g[0],b=g[1],x=(0,o.useState)(!1),y=(0,a.Z)(x,2),C=y[0],Z=y[1],j=(0,o.useState)(!1),w=(0,a.Z)(j,2),k=w[0],N=w[1],R=(0,o.useState)({widthImage:200,value:20}),S=(0,a.Z)(R,2),M=S[0],I=S[1],U=(0,A.Z)("(max-width:768px)");return(0,T.jsxs)("div",{ref:c,className:d.rootCellExpand,onMouseEnter:function(e){var n="imgURL"===l||(0,r.OFR)(u.current),t=U?document.querySelector("body"):s.current;N(n),b(t),Z(!0)},onMouseLeave:function(){Z(!1)},children:[(0,T.jsx)("div",{ref:s,style:{height:1,width:n,display:"block",position:"absolute",top:0}}),(0,T.jsx)("div",{ref:u,className:"cellValue",children:"imgURL"!==l?t:(0,T.jsxs)("div",{className:d.contentImage,children:[(0,T.jsx)("div",{className:d.divImage,children:(0,T.jsx)("img",{className:d.image,src:t,alt:"poster movie"})}),(0,T.jsx)(P.Z,{value:M.value,classes:{root:d.rootSlider},onChange:function(e,n){e.cancelable&&e.preventDefault(),I({widthImage:(200*n+12e3)/80,value:n})}})]})}),k&&(0,T.jsx)(f.Z,{open:C&&null!==m,anchorEl:m,style:{width:"imgURL"===l?M.widthImage:n,marginLeft:-17},placement:U?"right-start":"right",transition:!0,children:function(e){var n=e.TransitionProps;return(0,T.jsx)(D.Z,(0,i.Z)((0,i.Z)({},n),{},{timeout:350,children:"imgURL"===l?(0,T.jsx)("img",{style:{width:"100%",height:"100%",borderRadius:4},src:t,alt:"poster movie"}):(0,T.jsx)(p.Z,{elevation:1,style:{minHeight:c.current.offsetHeight-3,backgroundColor:"#ffff"},children:(0,T.jsx)(v.Z,{variant:"body2",style:{padding:8},children:t})})}))}})]})};function B(e){return(0,T.jsx)(U,{field:e.field,value:e.value?e.value.toString():"",width:e.colDef.width})}var H=t(30333),O=t.n(H),E=t(32950);t(30498);t(25264),t(42182);var z=t(81724),q=t(26864);t(97941);function G(e){var n=e.selectedPhim,t=(e.onUpdate,e.onAddCate),a=(L(),z.Ry().shape({name:z.Z_().required("*Kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng!")}));return(0,T.jsx)(q.J9,{initialValues:{id:n.id,name:n.name},validationSchema:a,onSubmit:function(e){console.log("cateObj th\xeam m\u1edbi: ",null===e||void 0===e?void 0:e.name);var n=(0,i.Z)({},e);t(n)},children:function(e){return(0,T.jsxs)(q.l0,{children:[(0,T.jsxs)("div",{className:"form-group",children:[(0,T.jsx)("label",{children:"T\xean danh m\u1ee5c\xa0"}),(0,T.jsx)(q.Bc,{name:"name",render:function(e){return(0,T.jsx)("span",{className:"text-danger",children:e})}}),(0,T.jsx)(q.gN,{name:"name",className:"form-control"})]}),(0,T.jsx)("button",{type:"submit",className:"form-control",children:"Submit"})]})}})}t(21830),t(67380);var V=t(65608),Y={getListBranchByAdminStaff:function(){return V.Z.get("/branches/getList")}},F=t(70932),W=function(){return function(e){e({type:F.dc}),Y.getListBranchByAdminStaff().then((function(n){console.log("data danh s\xe1ch branch: ",n.data),e({type:F.Uj,payload:{data:n.data.data}})})).catch((function(n){var t;e({type:F.x3,payload:{error:null!==(t=n.response)&&void 0!==t&&t.data?n.response.data:n.message}})}))}};function _(){return(0,T.jsx)(r.nik,{children:(0,T.jsx)(s.Z,{style:{margin:"auto"}})})}function J(){var e,n,t=(0,o.useState)([]),s=(0,a.Z)(t,2),v=s[0],p=s[1];console.log("branchListDisplay: ",v);var f=L(),b=((0,c.Ds)().enqueueSnackbar,(0,l.v9)((function(e){return e.branchManagementReducer}))),x=b.branchList,y=b.loadingBranchList,C=(b.loadingAddUploadBranch,(0,l.I0)()),Z=(0,o.useRef)(""),j=(0,o.useRef)(!1),w=(0,o.useState)(""),k=(0,a.Z)(w,2),N=k[0],R=k[1],S=(0,o.useRef)(0),D=o.useState(!1),P=(0,a.Z)(D,2),U=P[0],H=P[1],z=(0,o.useRef)(null);(0,A.Z)("(max-width:768px)");(0,o.useEffect)((function(){x&&!y||C(W())}),[x,y]);console.log("branchList: ",x),(0,o.useEffect)((function(){if(x){var e=null===x||void 0===x?void 0:x.map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{hanhDong:"",id:null===e||void 0===e?void 0:e.id,address:null===e||void 0===e?void 0:e.address,imgURL:null===e||void 0===e?void 0:e.imgURL,name:null===e||void 0===e?void 0:e.name,phoneNo:null===e||void 0===e?void 0:e.phoneNo})}));p(e)}}),[x]);console.log("branchListDisplay",v);var q=[{field:"id",headerName:"M\xe3 chi nh\xe1nh",width:180,headerAlign:"center",align:"center",headerClassName:"custom-header",renderCell:B},{field:"name",headerName:"T\xean chi nh\xe1nh",width:200,headerAlign:"center",align:"center",headerClassName:"custom-header",renderCell:B},{field:"imgURL",headerName:"H\xecnh \u1ea3nh",width:200,headerAlign:"center",align:"center",headerClassName:"custom-header",renderCell:function(e){return B(e)}},{field:"address",headerName:"\u0110\u1ecba ch\u1ec9",width:250,headerAlign:"center",align:"center",headerClassName:"custom-header",renderCell:B},{field:"phoneNo",headerName:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",width:200,headerAlign:"center",align:"center",headerClassName:"custom-header",renderCell:B}],V={lower:!0,locale:"vi"};return(0,T.jsxs)("div",{style:{height:"80vh",width:"100%",backgroundColor:"white"},children:[(0,T.jsx)("div",{className:f.control,children:(0,T.jsxs)("div",{className:"row",children:[(0,T.jsx)("div",{className:"col-12 col-md-6 ".concat(f.itemCtro),children:(0,T.jsx)(d.Z,{variant:"contained",color:"primary",className:f.addMovie,startIcon:(0,T.jsx)(m.Z,{}),children:"Th\xeam chi nh\xe1nh"})}),(0,T.jsx)("div",{className:"col-12 col-md-4 ".concat(f.itemCtro),children:(0,T.jsxs)("div",{className:f.search,children:[(0,T.jsx)("div",{className:f.searchIcon,children:(0,T.jsx)(u.Z,{})}),(0,T.jsx)(h.Z,{placeholder:"T\xecm ki\u1ebfm danh m\u1ee5c...",classes:{root:f.inputRoot,input:f.inputInput},style:{color:"black"},onChange:function(e){return n=e.target.value,clearTimeout(S.current),void(S.current=setTimeout((function(){R(n)}),500));var n}})]})}),(0,T.jsx)("div",{className:"col-12 col-md-2 ".concat(f.itemCtro),onClick:function(){C(W())},children:(0,T.jsx)(E.Z,{})})]})}),(0,T.jsx)(r._$r,{className:f.rootDataGrid,rows:function(){var e,n=null===v||void 0===v?void 0:v.filter((function(e){var n,t,i,a,o,r,l=-1!==(null===(n=O()(null!==(t=null===e||void 0===e?void 0:e.name)&&void 0!==t?t:"",V))||void 0===n?void 0:n.indexOf(O()(N,V))),d=-1!==(null===(i=O()(null!==(a=null===e||void 0===e?void 0:e.phoneNo)&&void 0!==a?a:"",V))||void 0===i?void 0:i.indexOf(O()(N,V))),c=-1!==(null===(o=O()(null!==(r=null===e||void 0===e?void 0:e.address)&&void 0!==r?r:"",V))||void 0===o?void 0:o.indexOf(O()(N,V)));return l||d||c}));Z.current&&j.current&&(n=null===(e=n)||void 0===e?void 0:e.map((function(e){return e.id===Z.current.id?(0,i.Z)((0,i.Z)({},e),{},{imgURL:Z.current.imgURL}):e})));return n}(),columns:q,pageSize:25,rowsPerPageOptions:[10,25,50],loading:y,components:{LoadingOverlay:_,Toolbar:r.npt},sortModel:[{field:"id",sort:"asc"}]}),(0,T.jsxs)(g.Z,{open:U,children:[(0,T.jsx)(M,{onClose:function(){return H(!1)},children:null!==z&&void 0!==z&&null!==(e=z.current)&&void 0!==e&&e.name?"Edit: ".concat(null===z||void 0===z||null===(n=z.current)||void 0===n?void 0:n.name):"Add new"}),(0,T.jsx)(I,{dividers:!0,children:(0,T.jsx)(G,{selectedPhim:z.current})})]})]})}},32950:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(26513),a=(t(72791),t(12163)),o=t(80184);function r(){return(0,o.jsx)(i.Z,{color:"primary",variant:"contained",startIcon:(0,o.jsx)(a.Z,{}),children:"Refresh"})}},67380:function(e,n,t){var i=t(52007),a=t.n(i),o=function(e){var n;if(!e)return{dayToday:"loading...",dateShort:"loading...",dateFull:"loading...",dDMmYy:"loading..."};if(-1!==(null===(n=e)||void 0===n?void 0:n.indexOf("/"))){var t,i=null===(t=e)||void 0===t?void 0:t.split("/");e="".concat(i[2],"-").concat(i[1],"-").concat(i[0])}var a=new Date(e),o=a.getDay(),r="";0===o&&(r="Ch\u1ee7 nh\u1eadt"),1===o&&(r="Th\u1ee9 hai"),2===o&&(r="Th\u1ee9 ba"),3===o&&(r="Th\u1ee9 t\u01b0"),4===o&&(r="Th\u1ee9 n\u0103m"),5===o&&(r="Th\u1ee9 s\xe1u"),6===o&&(r="Th\u1ee9 b\u1ea3y"),(new Date).toString().slice(0,10)===a.toString().slice(0,10)&&(r="H\xf4m nay");var l="0".concat(a.getDate()).slice(-2),d="0".concat(a.getMonth()+1).slice(-2),c=a.getFullYear(),s=r+", "+l+" th\xe1ng "+d+", "+c,u=a.getTime();return{dayToday:r,dateShort:e,dateFull:s,YyMmDd:"".concat(c,".").concat(d,".").concat(l),getTime:u}};n.Z=o,o.propTypes={ISODate:a().string.isRequired}},30498:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(29439),a=t(72791),o=(t(74569),t(52007)),r=t.n(o);function l(e){var n=(0,a.useState)(!0),t=(0,i.Z)(n,2),o=t[0];t[1],"https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=".concat(e);return o}l.propTypes={maPhim:r().number.isRequired}},32772:function(e,n,t){var i=t(64836),a=t(75263);n.Z=void 0;var o=a(t(72791)),r=(0,i(t(44894)).default)(o.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}),"AddBox");n.Z=r},12163:function(e,n,t){var i=t(64836),a=t(75263);n.Z=void 0;var o=a(t(72791)),r=(0,i(t(44894)).default)(o.createElement("path",{d:"M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"}),"Cached");n.Z=r}}]);
//# sourceMappingURL=9458.c4a47fa8.chunk.js.map