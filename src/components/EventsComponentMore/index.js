import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import { useHistory } from 'react-router-dom';

import useStyles from './style'
import Seperate from '../../../components/Seperate';
import { useDispatch, useSelector } from 'react-redux';
import { getEventsList } from '../../../reducers/actions/EventsManagement';

function TabPanel(props) {
  const { isMobile, children, value, index, ...other } = props;
  return (<div hidden={value !== index}  {...other} >
    <Box p={(isMobile && index === 0) ? 1 : 3}>
      {children}
    </Box>
  </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function SimpleTabs() {
  const dispatch = useDispatch();
  let {
    eventList,
    loadingEventList,
    loadingDelete,
    errorDelete,
    successDelete,
    successUpdateEvent,
    errorUpdateEvent,
    loadingUpdateEvent,
    loadingAddEvent,
    successAddEvent,
    errorAddEvent,
    // loadingUpdateNoneImageMovie,
    // successUpdateNoneImageMovie,
    // errorUpdateNoneImageMovie,
  } = useSelector((state) => state.eventsManagementReducer);


  useEffect(() => {
    if (
      !eventList ||
      successUpdateEvent ||
      // successUpdateNoneImageMovie ||
      successDelete ||
      errorDelete ||
      successAddEvent
    ) {
      dispatch(getEventsList());
    }
  }, [
    successUpdateEvent,
    // successUpdateNoneImageMovie,
    successDelete,
    errorDelete,
    successAddEvent,
  ]);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [tinTuc, setTinTuc] = React.useState([]);
  const history = useHistory();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  // console.log(eventList);
  const handlerSeeMore =() =>{
    history.push("/event-all")
  }
  return (
    <div className={classes.root} id="tintuc">
      <Seperate />
      <div className={classes.content}>
        <AppBar className={classes.appBar} position="static" >
          <Tabs centered value={value} onChange={handleChange}>
            <Tab disableRipple classes={{ root: classes.tabButton, selected: classes.tabSelected }} label="Tin t???c khuy???n m??i" />
            {/* <Tab disableRipple classes={{ root: classes.tabButton, selected: classes.tabSelected }} label="Review" /> */}
            <Tab disableRipple classes={{ root: classes.tabButton, selected: classes.tabSelected }} label="Phim 24 gi???" />
          </Tabs>
        </AppBar>
        <Fade timeout={400} in={value === 0}>
          <TabPanel value={value} index={0}>
            {/* Nayf c???a event n?? */}
            <div className="row">
              {/* <div className={classes.repons}>
                <a href="https://tix.vn/goc-dien-anh/7965-an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat" className={classes.news}>
                  <img className={classes.fullImg} src="https://s3img.vcdn.vn/123phim/2021/03/an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat-fast-furious-mien-song-nuoc-16170881088272.png" alt="news-movie" />
                  <div className="py-3">
                    <h4 className="card-title">???n ?????nh ch???c n???ch ng??y kh???i chi???u 16.04, L?? H???i tung clip L???t M???t: 48H ?????m ch???t</h4>
                    <p className="text-secondary">Tr?????c th???m kh???i chi???u 16.04 n??y, L?? H???i b???t ng??? tung clip r?????t ??u???i gay c???n th??t tim fans h??m m???</p>
                  </div>
                </a>
              </div>
              <div className={classes.repons}>
                <a href="https://tix.vn/goc-dien-anh/7964-mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam" className={classes.news}>
                  <img className={classes.fullImg} src="https://s3img.vcdn.vn/123phim/2021/03/mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam-16170160290762.png" alt="news-movie" />
                  <div className="py-3">
                    <h4 className="card-title">[MORTAL KOMBAT: CU???C CHI???N SINH T???] - G???I T??N NH???NG PHIM ??I???N ???NH N???I...</h4>
                    <p className="text-secondary">C?? d??n n??i kh??c ??ang s???p ???gato n??? m???t??? v???i d??n S??i Th??nh khi s???p t???i ????y th??nh ph??? HCM s??? ch??o ????n m???t r???p chi???u phim mang phong c??ch Artistic Urban Lifestyle ?????u ti??n t???i Vi???t Nam!</p>
                  </div>
                </a>
              </div> */}
              {
                eventList?.data?.map((event, index) => {
                  return(
                  <div className={classes.repons} key={index}>
                    <a href="https://tix.vn/review/7946-review-dinh-thu-oan-khuat-ghost-of-war" className={classes.news}>
                      <img className={classes.fullImg} 
                      src={event.contents[0]?.image} 
                      alt="news-movie" />
                      <div className="py-3">
                        <h4 className="card-title" style={{color:"white"}}>
                          {event.brief}
                          </h4>
                        <p className="text-secondary" 
                            style={{
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis"
                          }}>
                          {event.contents[0]?.description}
                          </p>
                      </div>
                    </a>
                  </div>)
                })
              }
            </div>
            {/* <div className="row">
              <div className="col-sm-4 pl-0 pr-15">
                <a href="https://tix.vn/goc-dien-anh/7963-promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi" className={classes.news}>
                  <img className={classes.fullImg} src="https://s3img.vcdn.vn/123phim/2021/03/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png" alt="news-movie" />
                  <div className="py-3">
                    <h4 className="card-title">PROMISING YOUNG WOMAN | B??ng h???ng n?????c Anh Carey Mulligan v?? m??n tr??? th??...</h4>
                    <p className="text-secondary">????? c??? gi???i Oscar danh gi?? v???a g???i t??n Carey Mulligan ??? h???ng m???c n??? ch??nh xu???t s???c nh???t cho vai di???n "?????m m??u" nh???t s??? nghi???p c???a c?? trong phim</p>
                  </div>
                </a>
              </div>
              <div className="col-sm-4 pl-0 pr-15">
                <a href="https://tix.vn/goc-dien-anh/7962-vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em" className={classes.news}>
                  <img className={classes.fullImg} src="https://s3img.vcdn.vn/123phim/2021/03/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png" alt="news-movie" />
                  <div className="py-3">
                    <h4 className="card-title">V???A ?????P L???I V???A T??I N??NG, D??N SAO NAM C???A PHIM ???B??N TAY DI???T QU??????...</h4>
                    <p className="text-secondary">Quy t??? 3 nam t??i t??? v???a ??i???n trai, v???a ???????c ????nh gi?? cao v??? n??ng l???c di???n xu???t l?? Park Seo Joon, Woo Do Hwan v?? Choi Woo Sik, t??c ph???m kinh d??? ??? h??nh</p>
                  </div>
                </a>
              </div>
              <div className="col-sm-4 pl-0 pr-15" >
                <a className={classes.bonusNews} href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon">
                  <div className="row mb-2">
                    <div className="col-3 px-0">
                      <img className={classes.fullImg} src="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg" alt="news-movie" />
                    </div>
                    <div className="col-9">
                      <h6 className="text-secondary">Khai tr????ng r???p x???n gi?? ngon, chu???n x??-tai S??i G??n</h6>
                    </div>
                  </div>
                </a>
                <a className={classes.bonusNews} href="https://tix.vn/goc-dien-anh/7960-boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh">
                  <div className="row mb-2">
                    <div className="col-3 px-0">
                      <img className={classes.fullImg} src="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png" alt="news-movie" />
                    </div>
                    <div className="col-9">
                      <h6 className="text-secondary">???B??c tem??? t??? h???p gi???i tr?? m???i toanh c???a gi???i H?? Th??nh</h6>
                    </div>
                  </div>
                </a>
                <a className={classes.bonusNews} href="https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu">
                  <div className="row mb-2">
                    <div className="col-3 px-0">
                      <img className={classes.fullImg} src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png" alt="news-movie" />
                    </div>
                    <div className="col-9">
                      <h6 className="text-secondary">Ti???c Tr??ng M??u ch??nh th???c c??n m???c 100 t??? ch??? sau 2 tu???n c??ng</h6>
                    </div>
                  </div>
                </a>
                <a className={classes.bonusNews} href="https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman">
                  <div className="row mb-2">
                    <div className="col-3 px-0">
                      <img className={classes.fullImg} src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg" alt="news-movie" />
                    </div>
                    <div className="col-9">
                      <h6 className="text-secondary">NG?? THANH V??N CH??NH TH???C KH???I ?????NG CU???C THI THI???T</h6>
                    </div>
                  </div>
                </a>
              </div>
            </div> */}
          <div style={{justifyContent: "center"}}>
            <button style={{
                      borderRadius:3,
                      color:"white",
                      display: "flex",
                      position:"absolute",
                      border: "1px solid red",
                      padding: "0.5rem 1rem",
                      background: "none",
                      left:"47%",

                      // transition: "0.2s ease-in-out",
                    }} 
                    type="button" 
                    onClick={handlerSeeMore}>
                      Xem th??m
            </button>
          </div>
          </TabPanel>
        </Fade>
        {/* N??y c???a PHIM 24 gi??? */}
        <Fade timeout={400} in={value === 1}>
          <TabPanel value={value} index={1}>
            <div className="row">
              <div className={classes.repons}>
                <a href="https://tix.vn/goc-dien-anh/7964-mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam" className={classes.news}>
                  <img className={classes.fullImg} src="https://s3img.vcdn.vn/123phim/2020/08/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png" alt="news-movie" />
                  <div className="py-3">
                    <h4 className="card-title">[MORTAL KOMBAT: CU???C CHI???N SINH T???] - G???I T??N NH???NG PHIM ??I???N ???NH N???I...</h4>
                    <p className="text-secondary">C?? d??n n??i kh??c ??ang s???p ???gato n??? m???t??? v???i d??n S??i Th??nh khi s???p t???i ????y th??nh ph??? HCM s??? ch??o ????n m???t r???p chi???u phim mang phong c??ch Artistic Urban Lifestyle ?????u ti??n t???i Vi???t Nam!</p>
                  </div>
                </a>
              </div>
              <div className={classes.repons}>
                <a href="https://tix.vn/review/7946-review-dinh-thu-oan-khuat-ghost-of-war" className={classes.news}>
                  <img className={classes.fullImg} src="https://s3img.vcdn.vn/123phim/2020/08/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png" alt="news-movie" />
                  <div className="py-3">
                    <h4 className="card-title">Review: Dinh Th??? Oan Khu???t (Ghost Of War)</h4>
                    <p className="text-secondary">Tuy l?? m???t b??? phim c?? ch???t l?????ng t???t, nh??ng c?? v??? Dinh Th??? Oan Khu???t v???n ch??a ????? ????? ??em kh??n gi??? tr??? l???i ph??ng v??!</p>
                  </div>
                </a>
              </div>
              {/* {
                eventList?.data?.map((event, index) => {
                  return(
                  <div className={classes.repons} key={index}>
                    <a href="https://tix.vn/review/7946-review-dinh-thu-oan-khuat-ghost-of-war" className={classes.news}>
                      <img className={classes.fullImg} 
                      src={event.contents[0]?.image} 
                      alt="news-movie" />
                      <div className="py-3">
                        <h4 className="card-title" style={{color:"white"}}>
                          {event.brief}
                          </h4>
                        <p className="text-secondary">
                          {event.contents[0]?.description}
                          </p>
                      </div>
                    </a>
                  </div>)
                })
              } */}
            </div>
            <div className="row">
              {/* {
                eventList?.data?.map((event2, index) => {
                  return(
                    <div className="col-sm-4 pl-0 pr-15">
                    <a 
                      href="https://tix.vn/goc-dien-anh/7963-promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi" className={classes.news}>
                      <img className={classes.fullImg} 
                        src={event2.contents[0]?.image}  
                        alt="news-movie" />
                      <div className="py-3">
                        <h4 className="card-title">
                          {event2.brief}
                        </h4>
                        <p className="text-secondary">
                        {event2.contents[0]?.description}
                        </p>
                      </div>
                    </a>
                  </div>
                  )
                })
              } */}
              {/* <div className="col-sm-4 pl-0 pr-15" >
                <a className={classes.bonusNews} href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon">
                  <div className="row mb-2">
                    <div className="col-3 px-0">
                      <img className={classes.fullImgNho} src="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg" alt="news-movie" />
                    </div>
                    <div className="col-9">
                      <h6 className="text-secondary">Khai tr????ng r???p x???n gi?? ngon, chu???n x??-tai S??i G??n</h6>
                    </div>
                  </div>
                </a>
                <a className={classes.bonusNews} href="https://tix.vn/goc-dien-anh/7960-boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh">
                  <div className="row mb-2">
                    <div className="col-3 px-0">
                      <img className={classes.fullImgNho} src="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png" alt="news-movie" />
                    </div>
                    <div className="col-9">
                      <h6 className="text-secondary">???B??c tem??? t??? h???p gi???i tr?? m???i toanh c???a gi???i H?? Th??nh</h6>
                    </div>
                  </div>
                </a>
                <a className={classes.bonusNews} href="https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu">
                  <div className="row mb-2">
                    <div className="col-3 px-0">
                      <img className={classes.fullImgNho} src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png" alt="news-movie" />
                    </div>
                    <div className="col-9">
                      <h6 className="text-secondary">Ti???c Tr??ng M??u ch??nh th???c c??n m???c 100 t??? ch??? sau 2 tu???n c??ng</h6>
                    </div>
                  </div>
                </a>
                <a className={classes.bonusNews} href="https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman">
                  <div className="row mb-2">
                    <div className="col-3 px-0">
                      <img className={classes.fullImgNho} src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg" alt="news-movie" />
                    </div>
                    <div className="col-9">
                      <h6 className="text-secondary">NG?? THANH V??N CH??NH TH???C KH???I ?????NG CU???C THI THI???T</h6>
                    </div>
                  </div>
                </a>
              </div> */}
            </div>
          </TabPanel>
        </Fade>
        {/* N??y c???a review nh??ng m??nh hong d??ng ????u */}
        {/* <Fade timeout={400} in={value === 2}>
          <TabPanel value={value} index={2}>
            <div className="row">
              <div className={classes.repons}>
                <a href="https://tix.vn/khuyen-mai/7958-bhd-59k-ve-ca-tuan" className={classes.news}>
                  <img className={classes.fullImg} src="https://s3img.vcdn.vn/123phim/2021/04/bhd-59k-ve-ca-tuan-16190002421777.jpg" alt="news-movie" />

                  <div className="py-3">
                    <h4 className="card-title">BHD 59K/V?? C??? TU???N !!!</h4>
                    <p className="text-secondary">T???n h?????ng ??u ????i l??n ?????n 3 V?? BHD Star m???i tu???n ch??? v???i gi?? 59k/v?? khi mua v?? tr??n TIX ho???c M???c V?? Phim tr??n ZaloPay.</p>
                  </div>
                </a>

              </div>
              <div className={classes.repons}>
                <a href="https://tix.vn/khuyen-mai/7955-tix-1k-ve-ngai-chi-gia-ve" className={classes.news}>
                  <img className={classes.fullImg} src="https://s3img.vcdn.vn/123phim/2020/11/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg" alt="news-movie" />
                  <div className="py-3">
                    <h4 className="card-title">TIX 1K/V?? NG???I CHI GI?? V??</h4>
                    <p className="text-secondary">?????ng gi?? 1k/v?? c??? tu???n t???t c??? c??c r???p tr??n TIX + Nh???n th??m 02 voucher thanh to??n ZaloPay th??? ga</p>
                  </div>
                </a>

              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 pl-0 pr-15">
                <a href="https://tix.vn/goc-dien-anh/7963-promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi" className={classes.news}>
                  <img className={classes.fullImg} src="https://s3img.vcdn.vn/123phim/2021/03/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png" alt="news-movie" />
                  <div className="py-3">
                    <h4 className="card-title">PROMISING YOUNG WOMAN | B??ng h???ng n?????c Anh Carey Mulligan v?? m??n tr??? th??...</h4>
                    <p className="text-secondary">????? c??? gi???i Oscar danh gi?? v???a g???i t??n Carey Mulligan ??? h???ng m???c n??? ch??nh xu???t s???c nh???t cho vai di???n "?????m m??u" nh???t s??? nghi???p c???a c?? trong phim</p>
                  </div>
                </a>
              </div>
              <div className="col-sm-4 pl-0 pr-15">
                <a href="https://tix.vn/goc-dien-anh/7962-vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em" className={classes.news}>
                  <img className={classes.fullImg} src="https://s3img.vcdn.vn/123phim/2021/03/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png" alt="news-movie" />
                  <div className="py-3">
                    <h4 className="card-title">V???A ?????P L???I V???A T??I N??NG, D??N SAO NAM C???A PHIM ???B??N TAY DI???T QU??????...</h4>
                    <p className="text-secondary">Quy t??? 3 nam t??i t??? v???a ??i???n trai, v???a ???????c ????nh gi?? cao v??? n??ng l???c di???n xu???t l?? Park Seo Joon, Woo Do Hwan v?? Choi Woo Sik, t??c ph???m kinh d??? ??? h??nh</p>
                  </div>
                </a>
              </div>
              <div className="col-sm-4 pl-0 pr-15" >
                <a className={classes.bonusNews} href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon">
                  <div className="row mb-2">
                    <div className="col-3 px-0">
                      <img className={classes.fullImg} src="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg" alt="news-movie" />
                    </div>
                    <div className="col-9">
                      <h6 className="text-secondary">Khai tr????ng r???p x???n gi?? ngon, chu???n x??-tai S??i G??n</h6>
                    </div>
                  </div>
                </a>
                <a className={classes.bonusNews} href="https://tix.vn/goc-dien-anh/7960-boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh">
                  <div className="row mb-2">
                    <div className="col-3 px-0">
                      <img className={classes.fullImg} src="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png" alt="news-movie" />
                    </div>
                    <div className="col-9">
                      <h6 className="text-secondary">???B??c tem??? t??? h???p gi???i tr?? m???i toanh c???a gi???i H?? Th??nh</h6>
                    </div>
                  </div>
                </a>
                <a className={classes.bonusNews} href="https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu">
                  <div className="row mb-2">
                    <div className="col-3 px-0">
                      <img className={classes.fullImg} src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png" alt="news-movie" />
                    </div>
                    <div className="col-9">
                      <h6 className="text-secondary">Ti???c Tr??ng M??u ch??nh th???c c??n m???c 100 t??? ch??? sau 2 tu???n c??ng</h6>
                    </div>
                  </div>
                </a>
                <a className={classes.bonusNews} href="https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman">
                  <div className="row mb-2">
                    <div className="col-3 px-0">
                      <img className={classes.fullImg} src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg" alt="news-movie" />
                    </div>
                    <div className="col-9">
                      <h6 className="text-secondary">NG?? THANH V??N CH??NH TH???C KH???I ?????NG CU???C THI THI???T</h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </TabPanel>
        </Fade> */}
      </div >
    </div >

  );
}
