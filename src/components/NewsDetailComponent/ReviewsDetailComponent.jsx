import React from "react";
import { NavLink } from "react-router-dom";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ShareIcon from "@material-ui/icons/Share";
import "./ReviewsDetailComponent.scss";
export default function ReviewsDetailComponent(props) {
  let { tinTuc, danhSachTinTuc } = props;
  var moment = require("moment");
  const renderTinTucHot = () => {
    return danhSachTinTuc.slice(0, 5).map((tinTuc, index) => {
      return (
        <div className="news__items" key={index} 
        style={{
          backgroundColor:"white",
        }}>
          <div className="items__img">
            <img src={tinTuc.image2} alt={tinTuc.image2} />
          </div>
          <div className="items__text">
            <h5 className="items__text-title">
              <NavLink
                className="items__text-link"
                to={`/review/${tinTuc.id}`}
              >
                {tinTuc.title}
              </NavLink>
            </h5>
          </div>
        </div>
      );
    });
  };

  const renderHinhAnh = () => {
    if (tinTuc.image3 === "none") {
      return null;
    } else {
      return (
        <div className="news__form--img">
          <img src={tinTuc.image3} alt={tinTuc.image3} />
        </div>
      );
    }
  };
  const renderTinTuc = () => {
    return (
      <div className="news__form"             
        style={{
        backgroundColor:"white", 
        paddingTop:"1rem"
      }}>
        <h1 className="news__form--title mb-2"             
            style={{
              color:"black",
            }}>{tinTuc.title}</h1>
        <div className="below__title">
          <div className="title--info">
            <div className="info--author" style={{color:"red"}}>
              {tinTuc.author}
              <span className="info--days" style={{color:"blue"}}>
                Update: {" "}
                {moment(tinTuc.dayupload).format("hh:mm DD/MM/yyyy")}
              </span>
            </div>
          </div>
          <div className="title--social">
            <div className="social--item mr-2">
              <ThumbUpAltIcon style={{ marginRight: "5px" }} />
              <span>{tinTuc.likes}</span>
            </div>
            <div className="social--item">
              <ShareIcon style={{ marginRight: "5px" }} />
              <span>{tinTuc.shares}</span>
            </div>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{__html:post.content}} />
        {/* <div className="news__form--description">{tinTuc.description1}</div>
        <div className="news__form--img">
          <img src={tinTuc.image1} alt={tinTuc.image1} />
        </div>
        <div className="news__form--description">{tinTuc.description2}</div>
        <div className="news__form--img">
          <img src={tinTuc.image2} alt={tinTuc.image2} />
        </div>
        <div className="news__form--description">{tinTuc.description3}</div>
        {renderHinhAnh()} */}

        <div className="news__form--source">Nguồn: game8.vn</div>
        <div className="news__form--footer">
          <div className="news__form--button row">
            <div className="button--content col-4">
              <button className="button--item fb">
                <i className="fab fa-facebook-f mr-2"></i>Chia sẻ
              </button>
            </div>
            <div className="button--content col-4">
              <button className="button--item tw">
                <i className="fab fa-twitter mr-2"></i>TWEET
              </button>
            </div>
            <div className="button--content col-4">
              <button className="button--item email">
                <i className="fa fa-envelope mr-2"></i>EMAIL
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const post = {
    title:"Black Adam: Cứu tinh cho vũ trụ DC mở rộng?",
    content:`<p><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 16px;"><strong>15 năm </strong>kể từ ngày được chọn diễn <strong style="font-size: 16px;">Black Adam, Dwayne Johnson</strong> và các nhà làm phim WB rốt cuộc đã thành công đưa gã mặc đồ đen lên màn ảnh rộng.</span></p><p><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><br></span></p><p><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 16px;">Teth Adam vốn là một tên nô lệ. May mắn thừa hưởng sức mạnh bảy đại phù thủy ban tặng nhưng gã lỡ phạm sai lầm rồi vùi thây nơi hầm mộ hơn <strong>5000 </strong>năm ròng rã. Khi thoát ra, Kahndaq- quê nhà Teth Adam nay là miếng mồi ngon bị lính đánh thuê xâu xé. Nhân dân lầm than, họ cần siêu anh hùng như Batman, Superman hay The Flash… của riêng dân tộc. Thế nhưng, Teth sở hữu sức mạnh vô địch lại chẳng phải anh hùng.</span></p><p><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><br></span></p><p><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 16px;"><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 16px;"><strong style="font-size: 24px;">Gã là kẻ tội đồ.</strong></span></span></p><p><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><br></span></span></p><p><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><img src="https://www.galaxycine.vn/media/2022/10/27/black-adam-cuu-tinh-cho-vu-tru-dc-mo-rong--2_1666852923548.jpg" style="display: block; margin-left: auto; margin-right: auto;" width="594" height="312"></span></span></p><p><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><br></span></span></p><p><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 16px;"><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 16px;"><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 16px;">Với kinh phí <strong>200 triệu $</strong>, Black Adam gánh trên vai trách nhiệm nặng nề – phục hưng vũ trụ DC mở rộng sau hàng núi khó khăn. Wonder Woman 1984 thất bại, Bagirl “ra chuồng gà”, The Flash gặp nguy cơ khỏi chiếu vì Ezra Miller lắm tài nhiều tật… Đến cả thương hiệu tỷ đô Aquaman cũng lao đao phải dời lịch chiếu vì Amber Heard thua Johnny Depp trong vụ kiện tụng đình đám gần đây.</span></span></span></p><p><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><br></span></span></span></p><p><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">Có thể nói, thành bại của Black Adam ảnh hưởng sâu sắc tới DCEU. May mắn thay, dù giới phê bình ghẻ lạnh, công chúng vẫn dành tình cảm cho Black Adam và Dwayne Johnson. Sự ủng hộ nhiệt tình giúp Black Adam ra mắt 142 triệu $ tại phòng vé toàn cầu, gần phân nửa đến từ doanh thu nội địa Mỹ.</span></span></span></span></p><p><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><br></span></span></span></span></p><p><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><img src="https://www.galaxycine.vn/media/2022/10/27/black-adam-cuu-tinh-cho-vu-tru-dc-mo-rong--1_1666852949751.jpg" style="display: block; margin-left: auto; margin-right: auto;"></span></span></span></span></p><p><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><br></span></span></span></span></p><p><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 16px;"><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 16px;"><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 16px;"><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 16px;"><span style="color: rgb(67, 70, 75); font-family: Roboto, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important; font-size: 16px;">Với hàng tá trận đánh mãn nhãn khiến khán giả phải tập trung theo dõi liên tục, Jaume Collet-Serra chứng minh rằng Warner Bros. và DC Comics đã đúng. Ngoài ra, không thể không kể đến sự ăn ý giữa Collet-Serra và Dwayne Johnson. Họ từng cộng tác ở Jungle Cruise (2021). Kĩ xảo đỉnh cao, hành động chất lừ và cộng thêm cái tên Dwayne Johnson lừng lẫy và post-credit hé lộ tương lai hoành tráng… Black Adam lần nữa thắp lên hi vọng cho cả nhà sản xuất lẫn người hâm mộ vũ trụ DC mở rộng. Liệu <strong>“Người Mặc Đồ Đen”</strong> có phá vỡ thành tỉ đô như phim chiếu rạp Aquaman, hãy cùng chờ xem!</span></span></span><br></span></span></p>`
  }
  return (
    <div className="news__container container">
      <div className="news__content row">
        <div className="news__left col-md-9 col-sm-12">
          {renderTinTuc()}
          <div>
              <h5 style={{color:"white"}}>Các bài viết liên quan</h5>
              <div style={{display:"block"}}>
                <ul style={{width: "100%", listStyle: "none" }}>
                  <li>
                    <a href="#">
                    ➞ Black Adam: Cứu tinh cho vũ trụ DC mở rộng?
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    ➞  Black Adam: Cứu tinh cho vũ trụ DC mở rộng?
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    ➞  Black Adam: Cứu tinh cho vũ trụ DC mở rộng?
                    </a>
                  </li>
                </ul>
              </div>
          </div>

        </div>
        <div className="news__right col-md-3 col-sm-12" >
          <h3 className="news__title">Tin liên quan</h3>
          {renderTinTucHot()}
        </div>
      </div>
    </div>
  );
}
