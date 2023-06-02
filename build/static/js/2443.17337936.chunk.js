"use strict";(self.webpackChunkstandard=self.webpackChunkstandard||[]).push([[2443],{934:function(n,t,e){var i=e(65608),o={postDangKy:function(n){return i.Z.post("/auth/signup",n)},postDangNhap:function(n){return console.log(n),i.Z.post("/auth/signin",n)},getDanhSachNguoiDung:function(){return i.Z.get("/user/getAll")},getDanhSachNguoiDungPhanTrang:function(n,t){return i.Z.get("/",{soTrang:n,soPhanTuTrenTrang:t})},postThemNhanVien:function(n){return i.Z.post("/auth/registerStaff",n)},postThemNguoiDung:function(n){return i.Z.post("/auth/signup",n)},getTicket:function(n){var t="/tickets?userId=".concat(n);return i.Z.get(t)},getTicketUser:function(n){var t="/tickets?userId=".concat(n);return i.Z.get(t)},getTicketByAdminStaff:function(){return i.Z.get("/tickets/getList")},deleteUser:function(n){var t="user/".concat(n);return i.Z.delete(t)},editTaiKhoan:function(n){return i.Z.put("/user/updateInfo",n)},editPassword:function(n,t){var e="/auth/changePassword?newPassword=".concat(n,"&oldPassword=").concat(t);return i.Z.put(e)},getThongTinTaiKhoan:function(){return i.Z.get("/user/me")},getChiTietTaiKhoan:function(n){var t="/user/".concat(n);return i.Z.get(t)},getChiTietTaiKhoanReviewer:function(n){var t="/user/".concat(n);return i.Z.get(t)}};t.Z=o},62443:function(n,t,e){e.r(t),e.d(t,{default:function(){return rn}});var i=e(29439),o=e(72791),r=e(98246),a=e(8154),s=e(16789),c=e(80881),l=e(31706),u=e(79271),d=e(38596),h=e(54859),f=e(17447),p=e(70272),g=e(38302),x=e(52067),v=e(12168),m=e(71600),Z=e(75566),y=e(1413),j=e(45987),b=e(28182),T=e(78096),w=e(26513),k=e(21830),C=e.n(k),N=e(80184),D=["className","href","icon","title"],S=(0,d.Z)((function(n){return{item:{display:"flex",paddingTop:0,paddingBottom:0,position:"relative",zIndex:1201},button:{color:n.palette.text.secondary,fontWeight:n.typography.fontWeightMedium,justifyContent:"flex-start",letterSpacing:0,padding:"10px 8px",textTransform:"none",width:"100%"},icon:{marginRight:n.spacing(1)},title:{marginRight:"auto"},active:{color:n.palette.primary.main,"& $title":{fontWeight:n.typography.fontWeightMedium},"& $icon":{color:n.palette.primary.main}}}})),B=function(n){var t=n.className,e=n.href,i=n.icon,o=n.title,r=(0,j.Z)(n,D),a=(0,s.v9)((function(n){return n.usersManagementReducer.isExistUserModified})),c=S(),l=(0,u.useHistory)(),d=(0,u.useLocation)();return(0,N.jsx)(T.Z,(0,y.Z)((0,y.Z)({className:(0,b.Z)(c.item,t),disableGutters:!0},r),{},{children:(0,N.jsxs)(w.Z,{className:(0,b.Z)(c.button,d.pathname===e&&c.active),onClick:function(){a&&"/admin/users"===d.pathname&&"/admin/users"!==e?C().fire({title:"D\u1eef li\u1ec7u \u0111\xe3 ch\u1ec9nh s\u1eeda s\u1ebd b\u1ecb m\u1ea5t khi chuy\u1ec3n trang?",text:"B\u1ea1n kh\xf4ng th\u1ec3 ho\xe0n nguy\xean!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Chuy\u1ec3n trang!",cancelButtonText:"\u1ede l\u1ea1i!"}).then((function(n){n.isConfirmed&&l.push(e)})):l.push(e)},children:[i&&(0,N.jsx)(i,{className:c.icon,size:"20"}),(0,N.jsx)("span",{className:c.title,children:o})]})}))},M=(e(87850),e(84731)),P=e(934),E=[{href:"/staff/movies",icon:c.Z,title:"Qu\u1ea3n l\xfd phim"},{href:"/staff/branch",icon:l.Z,title:"Qu\u1ea3n l\xfd chi nh\xe1nh r\u1ea1p"},{href:"/staff/reviews",icon:l.Z,title:"Qu\u1ea3n l\xfd Review"},{href:"/staff/category",icon:l.Z,title:"Qu\u1ea3n l\xfd Category"},{href:"/staff/events",icon:l.Z,title:"Qu\u1ea3n l\xfd s\u1ef1 ki\u1ec7n"},{href:"/staff/ticket",icon:l.Z,title:"Qu\u1ea3n l\xfd v\xe9"},{href:"/staff/bills/",icon:l.Z,title:"Thanh to\xe1n"},{href:"/staff/book/",icon:l.Z,title:"\u0110\u1eb7t cho ng\u01b0\u1eddi d\xf9ng"},{href:"/staff/showtimes",icon:l.Z,title:"Qu\u1ea3n l\xfd l\u1ecbch chi\u1ebfu"}],O=(0,d.Z)((function(){return{mobileDrawer:{width:256},desktopDrawer:{width:256,position:"relative",height:"calc(100% - 64px)"},avatar:{cursor:"pointer",width:64,height:64}}}));function U(n){var t=n.onMobileClose,e=n.openMobile,r=O(),a=(0,u.useLocation)(),c=(0,u.useHistory)(),l=(0,s.I0)(),d=(0,o.useState)(),y=(0,i.Z)(d,2),j=y[0],b=y[1];(0,s.v9)((function(n){return n.authReducer})).currentUser;(0,o.useEffect)((function(){l({type:M.dz}),P.Z.getThongTinTaiKhoan().then((function(n){b(n.data.data),l({type:M.uH,payload:{data:n.data}})})).catch((function(n){var t,e,i;l({type:M.vQ,payload:{error:null!==(t=n.response)&&void 0!==t&&null!==(e=t.data)&&void 0!==e&&e.data?null===(i=n.response.data)||void 0===i?void 0:i.data:n.message}})}))}),[]),(0,o.useEffect)((function(){e&&t&&t()}),[a.pathname]);var T={avatar:null===j||void 0===j?void 0:j.image,jobTitle:"Nh\xe2n vi\xean",name:null===j||void 0===j?void 0:j.name},w=(0,N.jsxs)(h.Z,{height:"100%",display:"flex",flexDirection:"column",children:[(0,N.jsx)(f.Z,{}),(0,N.jsxs)(h.Z,{alignItems:"center",display:"flex",flexDirection:"column",p:3,children:[(0,N.jsx)(Z.ZP,{title:"User information",children:(0,N.jsx)(p.Z,{className:r.avatar,src:T.avatar,onClick:function(){c.push("/taikhoan")}})}),(0,N.jsx)(g.Z,{className:r.name,color:"textPrimary",variant:"h5",children:T.name}),(0,N.jsx)(g.Z,{color:"textSecondary",variant:"body2",children:T.jobTitle})]}),(0,N.jsx)(h.Z,{p:2,children:(0,N.jsx)(x.Z,{children:E.map((function(n){return(0,N.jsx)(B,{href:n.href,title:n.title},n.title)}))})})]});return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(v.Z,{lgUp:!0,children:(0,N.jsx)(m.ZP,{anchor:"left",classes:{paper:r.mobileDrawer},onClose:t,open:e,variant:"temporary",children:w})}),(0,N.jsx)(v.Z,{mdDown:!0,children:(0,N.jsx)(m.ZP,{anchor:"left",classes:{paper:r.desktopDrawer},open:!0,variant:"persistent",children:w})})]})}U.defaultProps={onMobileClose:function(){},openMobile:!1};var z,K,R,I,Q,L,W,H=e(30168),A=e(17225),F=e(91523),G=((0,A.default)(F.rU)(z||(z=(0,H.Z)(["\n  display: flex;\n  color: #e1e9fc;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  list-style: none;\n  height: 60px;\n  text-decoration: none;\n  font-size: 18px;\n\n  &:hover {\n    background: #252831;\n    border-left: 4px solid #632ce4;\n    cursor: pointer;\n  }\n"]))),A.default.span(K||(K=(0,H.Z)(["\n  margin-left: 16px;\n"]))),(0,A.default)(F.rU)(R||(R=(0,H.Z)(["\n  background: #414757;\n  height: 60px;\n  padding-left: 3rem;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: #f5f5f5;\n  font-size: 18px;\n\n  &:hover {\n    background: #632ce4;\n    cursor: pointer;\n  }\n"]))),{color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0});o.createContext&&o.createContext(G);A.default.div(I||(I=(0,H.Z)(["\n  background: #15171c;\n  height: 80px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"]))),(0,A.default)(F.rU)(Q||(Q=(0,H.Z)(["\n  margin-left: 2rem;\n  font-size: 2rem;\n  height: 80px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"]))),A.default.nav(L||(L=(0,H.Z)(["\n  background: #15171c;\n  width: 250px;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: ",";\n  transition: 350ms;\n  z-index: 10;\n"])),(function(n){return n.sidebar?"0":"-100%"})),A.default.div(W||(W=(0,H.Z)(["\n  width: 100%;\n"])));var $=e(88167),V=e(77690),X=e(67025),_=e(24364),q=e(68336),J=e(95737),Y=e(99282),nn=e(44212),tn=e(4733),en=["onMobileNavOpen"],on=function(n){var t=n.onMobileNavOpen,e=(0,j.Z)(n,en),r=(0,o.useState)([]),a=(0,i.Z)(r,1)[0],c=(0,s.I0)(),l=(0,u.useHistory)();return(0,N.jsx)($.Z,(0,y.Z)((0,y.Z)({elevation:0,position:"static"},e),{},{children:(0,N.jsxs)(V.Z,{children:[(0,N.jsx)("div",{onClick:function(){c({type:tn.sS}),setTimeout((function(){l.push("/","")}),50)},style:{cursor:"pointer"},children:(0,N.jsx)("h5",{children:"WELCOM TO GOLDEN TICKET NEW THEATER"})}),(0,N.jsx)(h.Z,{flexGrow:1}),(0,N.jsxs)(v.Z,{mdDown:!0,children:[(0,N.jsx)(X.Z,{color:"inherit",children:(0,N.jsx)(_.Z,{badgeContent:a.length,color:"secondary",variant:"dot",children:(0,N.jsx)(J.Z,{})})}),(0,N.jsx)(Z.ZP,{title:"Log out",children:(0,N.jsx)(X.Z,{color:"inherit",onClick:function(){var n=C().mixin({customClass:{confirmButton:"btn btn-success",cancelButton:"btn btn-danger"},buttonsStyling:!1});n.fire({title:"\u0110\u0103ng xu\u1ea5t!",text:"Ch\u1eafc ch\u1eafn b\u1ea1n mu\u1ed1n \u0111\u0103ng xu\u1ea5t?",icon:"warning",showCancelButton:!0,confirmButtonText:"Okay, ngay b\xe2y gi\u1edd!",cancelButtonText:"Kh\xf4ng, d\u1eebng l\u1ea1i!",reverseButtons:!0}).then((function(t){t.isConfirmed?(c({type:nn.Nv}),n.fire("\u0110\xe3 \u0111\u0103ng xu\u1ea5t!","DONE.","success")):t.dismiss===C().DismissReason.cancel&&n.fire("\u0110\xe3 d\u1eebng","Kh\xf4ng \u0111\u0103ng xu\u1ea5t!","error")}))},children:(0,N.jsx)(Y.Z,{})})})]}),(0,N.jsx)(v.Z,{lgUp:!0,children:(0,N.jsx)(X.Z,{color:"inherit",onClick:t,children:(0,N.jsx)(q.Z,{})})})]})}))};function rn(n){var t,e=(0,o.useState)(!1),c=(0,i.Z)(e,2),l=c[0],u=c[1],d=(0,a.Z)("(max-width:768px)"),h=(0,s.I0)(),f=(0,s.v9)((function(n){return n.authReducer})).currentUser,p=(0,o.useState)(),g=(0,i.Z)(p,2),x=(g[0],g[1],(0,o.useState)()),v=(0,i.Z)(x,2),m=(v[0],v[1]);return(0,o.useEffect)((function(){P.Z.getThongTinTaiKhoan().then((function(n){m(null===n||void 0===n?void 0:n.data),h({type:nn.XP,payload:{data:null===n||void 0===n?void 0:n.data}})})).catch((function(n){var t,e,i,o;h({type:nn.Qj,payload:{error:null!==(t=n.response)&&void 0!==t&&null!==(e=t.data)&&void 0!==e&&e.data?null===(i=n.response)||void 0===i||null===(o=i.data)||void 0===o?void 0:o.data:n.message}})}))}),[]),"[ROLE_STAFF]"===!(null!==f&&void 0!==f&&null!==(t=f.data)&&void 0!==t&&t.role)?(0,N.jsx)(N.Fragment,{children:n.children}):(0,N.jsxs)(r.wT,{maxSnack:3,children:[(0,N.jsx)(on,{onMobileNavOpen:function(){return u(!0)},style:{backgroundColor:"white",color:"black"}}),(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{style:{width:255,backgroundColor:"white"},children:(0,N.jsx)(U,{onMobileClose:function(){return u(!1)},openMobile:l})}),(0,N.jsx)("div",{style:{width:d?"100%":"calc(100% - 255px)",backgroundColor:"white",height:"100vh"},children:n.children})]})]})}},30168:function(n,t,e){function i(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}e.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=2443.17337936.chunk.js.map