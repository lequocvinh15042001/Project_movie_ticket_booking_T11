import React, { Component } from "react";
import "../Footer/Footer.scss";
import Logo from "../../assets/LeafSVG";
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer__content">
          <div className="footer__above">
            <div className="above__row row">
              <div className="above__item col-3 tix-info">
                <p className="above__title">GOLDENNEW TICKET MOVIE BOOKING</p>
                <ul className="above__list">
                  <li className="list__item">
                    <a className="list__link" href="/#">
                      FAQ
                    </a>
                  </li>
                  <li className="list__item">
                    <a className="list__link" href="/#">
                      Thương hiệu uỷ quyền
                    </a>
                  </li>
                </ul>
              </div>
              <div className="above__item col-2 tix-security">
                <p className="above__title non--title" />
                <ul className="above__list">
                  <li className="list__item">
                    <a className="list__link" href="/#">
                      Thoả thuận sử dụng
                    </a>
                  </li>
                  <li className="list__item">
                    <a className="list__link" href="/#">
                      Chính sách bảo mật
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className="above__item img__col col-3 tix-coop">
                <p className="above__title">THÀNH VIÊN</p>
                <ul className="img__list">
                  <li className="img__item">
                    <a className="img__link" href="/#">
                      <img
                        src="https://i.ibb.co/QPJb0sq/cgv.png"
                        alt="hinhanh"
                      />
                    </a>
                  </li>
                  <li className="img__item">
                    <a className="img__link" href="/#">
                      <img
                        src="https://i.ibb.co/qy7Zxt6/bhd.png"
                        alt="hinhanh"
                      />
                    </a>
                  </li>
                  <li className="img__item">
                    <a className="img__link" href="/#">
                      <img
                        src="https://i.ibb.co/nnYH6XW/galaxy.png"
                        alt="hinhanh"
                      />
                    </a>
                  </li>
                  <li className="img__item">
                    <a className="img__link" href="/#">
                      <img
                        src="https://i.ibb.co/Y7spP5M/cinestar.png"
                        alt="hinhanh"
                      />
                    </a>
                  </li>
                  <li className="img__item">
                    <a className="img__link" href="/#">
                      <img
                        src="https://i.ibb.co/vZ9myZy/lotte.png"
                        alt="hinhanh"
                      />
                    </a>
                  </li>
                  <li className="img__item">
                    <a className="img__link" href="/#">
                      <img
                        src="https://i.ibb.co/r2g97r7/megags.png"
                        alt="hinhanh"
                      />
                    </a>
                  </li>
                  <li className="img__item">
                    <a className="img__link" href="/#">
                      <img
                        src="https://i.ibb.co/7NDTSnJ/beta.jpg"
                        alt="hinhanh"
                      />
                    </a>
                  </li>
                  <li className="img__item">
                    <a className="img__link" href="/#">
                      <img
                        src="https://i.ibb.co/Hq57mwP/dongdacinema.png"
                        alt="hinhanh"
                      />
                    </a>
                  </li>
                </ul>
              </div> */}
              {/* <div className="above__item mobile__app col-2">
                <p className="above__title">MOBILE APP</p>
                <ul className="logo__list">
                  <li className="logo__item">
                    <a className="logo__link" href="https://www.apple.com/app-store/">
                      <img
                        src="https://i.ibb.co/Zm8vZgX/apple-logo.png"
                        alt="hinhanh"
                      />
                    </a>
                  </li>
                  <li className="logo__item">
                    <a className="logo__link" href="https://play.google.com/store/games">
                      <img
                        src="https://i.ibb.co/m6YfCrT/android-logo.png"
                        alt="hinhanh"
                      />
                    </a>
                  </li>
                </ul>
              </div> */}
              <div className="above__item text-center col-2 tix-social">
                <p className="above__title">SOCIAL</p>
                <ul className="logo__list">
                  <li className="logo__item">
                    <a className="logo__link" href="https://www.facebook.com/vinhlq.it">
                      <img
                        className="img__social"
                        src="https://i.ibb.co/9H50pyY/facebook-logo.png"
                        alt="hinhanh"
                      />
                    </a>
                  </li>
                  <li className="logo__item">
                    <a className="logo__link" href="/#">
                      <img
                        className="img__social"
                        src="https://i.ibb.co/1MrJQT3/zalo-logo.png"
                        alt="hinhanh"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="gachchan" />
          <div className="footer__below">
            <div className="below__row justify-content-center align-items-center row">
              <div className="below__middle col-md-9 col-sm-12 col-xs-12">
                <div className="middle__title">
                  KHOÁ LUẬN TỐT NGHIỆP
                  <br/>
                  Nhóm tác giả:
                  <br/>
                  <a href="https://www.facebook.com/vinhlq.it">
                    Lê Quốc Vinh
                  </a>
                  <br/>
                  <a href="https://www.facebook.com/minhphuong1807">
                    Trương Minh Phương
                  </a>
                </div>
                {/* <span>
                  <span>Số Điện Thoại (Hotline): 03766 212 99</span>
                  <br />
                  <span>
                    Email:
                    <br/>
                    <a className="middle__link" href="/#">
                      vinhlq.it1541@gmail.com
                    </a>
                    <br/>
                    <a className="middle__link" href="/#">
                      19110269@student.hcmute.edu.vn
                    </a>
                  </span>
                </span> */}
              </div>
              <div className="below__left col-md-3 col-xs-12 col-sm-12">
                <Logo fillColor={"rgb(250, 82, 56)"}/>
                <span className="text-logo">Golden Ticket Movie Booking</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
