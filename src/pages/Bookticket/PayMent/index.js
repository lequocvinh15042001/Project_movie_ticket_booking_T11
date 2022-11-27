import React, { useState, useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";

import useStyles from "./style";
import formatDate from "../../../utilities/formatDate";
import { bookTicket } from "../../../reducers/actions/BookTicket";
import {
  SET_DATA_PAYMENT,
  SET_READY_PAYMENT,
} from "../../../reducers/constants/BookTicket";
import { logger } from "workbox-core/_private";

const makeObjError = (name, value, dataSubmit) => {
  // kiểm tra và set lỗi rỗng
  let newErrors = {
    ...dataSubmit.errors,
    [name]:
      value?.trim() === ""
        ? `${name.charAt(0).toUpperCase() + name.slice(1)} not be empty!`
        : "",
  };

  // kiểm tra và set lỗi sai định dạng
  //eslint-disable-next-line
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //eslint-disable-next-line
  const regexNumber =
    /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;
  if (name === "email" && value) {
    if (!regexEmail.test(value)) {
      newErrors[name] = "Email not valid";
    }
  }
  if (name === "phone" && value) {
    if (!regexNumber.test(value)) {
      newErrors[name] = "Phone not valid";
    }
  }
  return newErrors;
};

export default function PayMent() {
  const {
    listSeat,
    amount,
    email,
    phone,
    paymentMethod,
    isReadyPayment,
    isMobile,
    danhSachVe,
    danhSachPhongVe: { thongTinPhim },
    maLichChieu,
    taiKhoanNguoiDung,
    isSelectedSeat,
    listSeatSelected,
    loadingBookingTicket,
    successBookingTicketMessage,
    errorBookTicketMessage,
    thongTinPhongVe,
  } = useSelector((state) => state.bookTicketReducer);
  console.log(maLichChieu, danhSachVe, taiKhoanNguoiDung);
  console.log("danhSachVe: ",danhSachVe);
  const dispatch = useDispatch();
  const emailRef = useRef();
  const phoneRef = useRef(); // dùng useRef để dom tớ element
  let variClear = useRef(""); // dùng useRef để lưu lại giá trị setTimeout
  const [dataFocus, setDataFocus] = useState({ phone: false, email: false });
  const [dataSubmit, setdataSubmit] = useState({
    values: {
      email: email,
      phone: phone,
      paymentMethod: paymentMethod,
      thongTinPhongVe: thongTinPhongVe,
    },
    errors: {
      email: "",
      phone: "",
    },
  });
  const classes = useStyles({
    isSelectedSeat,
    isReadyPayment,
    isMobile,
    dataFocus,
    dataSubmit,
  });

  const onChange = (e) => {
    // khi onchange update values và validation
    let { name, value } = e.target;
    let newValues = { ...dataSubmit.values, [name]: value };
    let newErrors = makeObjError(name, value, dataSubmit);
    setdataSubmit((dataSubmit) => ({
      ...dataSubmit,
      values: newValues,
      errors: newErrors,
    }));
  };

  useEffect(() => {
    // sau 0.5s mới đẩy data lên redux để tăng hiệu năng
    clearTimeout(variClear);
    variClear.current = setTimeout(() => {
      dispatch({
        type: SET_DATA_PAYMENT,
        payload: {
          email: dataSubmit.values.email,
          phone: dataSubmit.values.phone,
          paymentMethod: dataSubmit.values.paymentMethod,
        },
      });
      // khi không có lỗi và đủ dữ liệu thì set data sẵn sàng đặt vé và ngược lại, set activeStep = 1 nếu đủ dữ liệu và chưa đặt vé
      if (
        !dataSubmit.errors.email &&
        !dataSubmit.errors.phone &&
        dataSubmit.values.email &&
        dataSubmit.values.phone &&
        dataSubmit.values.paymentMethod &&
        isSelectedSeat
      ) {
        dispatch({
          type: SET_READY_PAYMENT,
          payload: { isReadyPayment: true },
        });
      } else {
        dispatch({
          type: SET_READY_PAYMENT,
          payload: { isReadyPayment: false },
        });
      }
    }, 500);
    return () => clearTimeout(variClear.current);
  }, [dataSubmit, isSelectedSeat]);

  useEffect(() => {
    // cập nhật lại data email, phone và validation khi reload
    let emailErrors = makeObjError(emailRef.current.name, email, dataSubmit);
    // let phoneErrors = makeObjError(phoneRef.current.name, phone, dataSubmit);
    setdataSubmit((dataSubmit) => ({
      ...dataSubmit,
      values: {
        email: email,
        phone: phone,
        paymentMethod: paymentMethod,
      },
      // errors: { email: emailErrors.email, phone: phoneErrors.phone },
    }));
  }, [listSeat]); // khi reload listSeat sẽ được cập nhật kèm theo, email, phone mặc định của tài khoản

  const handleBookTicket = () => {
    // khi đủ dữ liệu và chưa có lần đặt vé nào trước đó thì mới cho đặt vé
    if (
      isReadyPayment &&
      !loadingBookingTicket &&
      !successBookingTicketMessage &&
      !errorBookTicketMessage
    ) {
      let userId = taiKhoanNguoiDung
      let scheduleId = maLichChieu
      // let list=[]
      // for(var i=0;i<listSeatIds.length;i++){
      //   list.push({id:listSeatIds[i]})
      // }
      let listSeatIds=[]
      for(var i = 0;i < danhSachVe.length; i++){
        listSeatIds.push(danhSachVe[i].id)
      }
      console.log("Gửi đi: ",userId, scheduleId, listSeatIds);
    
      dispatch(bookTicket({userId, scheduleId, listSeatIds} ));
      // dispatch(bookTicket({ maLichChieu: 40396, danhSachVe: [{ maGhe: 9122569, giaVe: 75000 }], taiKhoanNguoiDung }))
    }
  };
  const onFocus = (e) => {
    setDataFocus({ ...dataFocus, [e.target.name]: true });
  };
  const onBlur = (e) => {
    setDataFocus({ ...dataFocus, [e.target.name]: false });
  };
  // let listSeatIds = [10,11]
  // let list=[]
  // for(var i=0;i<listSeatIds.length;i++){
  //   list.push({id:listSeatIds[i]})
  // }


  return (
    <aside className={classes.payMent}>
      <div>
        {/* tổng tiền */}
        <p className={`${classes.amount} ${classes.payMentItem}`}>
          {`${amount.toLocaleString("vi-VI")} đ`}
        </p>

        {/* thông tin phim và rạp */}
        <div className={classes.payMentItem}>
          <p className={classes.tenPhim}>{thongTinPhongVe?.setPhim?.name}</p>
          <p>{thongTinPhongVe?.setRap}</p>
          <p>Date show: {`${thongTinPhongVe?.setNgayXem} ${
            thongTinPhongVe?.ngayChieu
          } - ${thongTinPhongVe?.setSuatChieu} - ${thongTinPhongVe?.setPhim?.duration} Minutes 
          - ${thongTinPhongVe?.setPhim?.categories} - Language: ${thongTinPhongVe?.setPhim?.language}`}</p>
        </div>

        {/* ghế đã chọn */}
        <div className={`${classes.seatInfo} ${classes.payMentItem}`}>
          <span>{`Seat ${listSeatSelected?.join(", ")}`}</span>
          <p className={classes.amountLittle}>
            {`${amount.toLocaleString("vi-VI")} đ`}
          </p>
        </div>

        {/* email */}
        <div className={classes.payMentItem}>
          <label className={classes.labelEmail}>E-Mail</label>
          <input
            type="text"
            name="email"
            ref={emailRef}
            onFocus={onFocus}
            onBlur={onBlur}
            value={dataSubmit.values.email}
            className={classes.fillInEmail}
            onChange={onChange}
            autoComplete="off"
          />
          <p className={classes.error}>{dataSubmit.errors.email}</p>
        </div>

        {/* phone */}
        {/* <div className={classes.payMentItem}>
          <label className={classes.labelPhone}>Phone</label>
          <input
            type="number"
            name="phone"
            ref={phoneRef}
            onFocus={onFocus}
            onBlur={onBlur}
            value={dataSubmit.values.phone}
            className={classes.fillInPhone}
            onChange={onChange}
            autoComplete="off"
          />
          <p className={classes.error}>{dataSubmit.errors.phone}</p>
        </div> */}

        {/* Mã giảm giá */}
        {/* <div className={classes.payMentItem}>
          <label className={classes.label}>Mã giảm giá</label>
          <input
            type="text"
            value="Tạm thời không hỗ trợ..."
            readOnly
            className={classes.fillIn}
          />
          <button className={classes.btnDiscount} disabled>
            Áp dụng
          </button>
        </div> */}

        {/* hình thức thanh toán */}
        <div className={classes.selectedPayMentMethod}>
          <label className={classes.label}>Payments Type</label>
          <p className={classes.toggleNotice}>
              Please select the seat to display the appropriate payment method...
          </p>

          <div className={classes.formPayment}>
            <div className={classes.formPaymentItem}>
              <input
                className={classes.input}
                type="radio"
                name="paymentMethod"
                value="ZaloPay"
                onChange={onChange}
                checked={dataSubmit.values.paymentMethod === "ZaloPay"}
              />
              <img
                className={classes.img}
                src="/img/bookticket/zalo.jpg"
                alt="zalopay"
              />
              <label>ZaloPay</label>
            </div>
            {/* <div className={classes.formPaymentItem}>
              <input
                className={classes.input}
                type="radio"
                name="paymentMethod"
                value="Visa, Master, JCB"
                onChange={onChange}
                checked={
                  dataSubmit.values.paymentMethod === "Visa, Master, JCB"
                }
              />
              <img
                className={classes.img}
                src="/img/bookticket/visa.png"
                alt="visa"
              />
              <label>Visa, Master, JCB</label>
            </div> */}
            {/* <div className={classes.formPaymentItem}>
              <input
                className={classes.input}
                type="radio"
                name="paymentMethod"
                value="ATM nội địa"
                onChange={onChange}
                checked={dataSubmit.values.paymentMethod === "ATM nội địa"}
              />
              <img
                className={classes.img}
                src="/img/bookticket/atm.png"
                alt="atm"
              />
              <label>Thẻ ATM nội địa</label>
            </div> */}
            <div className={classes.formPaymentItem}>
              <input
                className={classes.input}
                type="radio"
                name="paymentMethod"
                value="Pay at the counter"
                onChange={onChange}
                checked={
                  dataSubmit.values.paymentMethod === "Pay at the counter"
                }
              />
              <img
                className={classes.img}
                src="/img/bookticket/cuahang.png"
                alt="cuahang"
              />
              <label>Pay at the counter</label>
            </div>
          </div>
        </div>

        {/* đặt vé */}
        <div className={classes.bottomSection}>
          <button
            className={classes.btnDatVe}
            disabled={!isReadyPayment}
            onClick={handleBookTicket}
          >
            <p className={classes.txtDatVe}>Book this</p>
          </button>
        </div>
      </div>

      {/* notice */}
      <div className={classes.notice}>
        <img
          className={classes.imgNotice}
          src="/img/bookticket/exclamation.png"
          alt="notice"
        />
        <span>Tickets purchased cannot be exchanged or refunded</span>
        <p>
          Ticket code will be sent via text message{" "}
          {/* <span className={classes.contactColor}></span> (Email) or{" "}
          <span className={classes.contactColor}>Email</span> đã nhập. */}
        </p>
      </div>
    </aside>
  );
}
