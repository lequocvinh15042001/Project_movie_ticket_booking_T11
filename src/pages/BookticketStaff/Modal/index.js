import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

import useStyles from "./style";
import {
  RESET_DATA_BOOKTICKET,
  RESET_ALERT_OVER10,
} from "../../../reducers/constants/BookTicket";
import { LOADING_BACKTO_HOME } from "../../../reducers/constants/Lazy";
import { getListSeat } from "../../../reducers/actions/BookTicket";
import { colorTheater } from "../../../constants/theaterData";
import ResultBookticket from "../ResultBookticket";
import bookingApi from "../../../api/bookingApi";

export default function Modal() {
  const {
    alertOver10,
    isMobile,
    timeOut,
    successBookingTicketMessage,
    errorBookTicketMessage,
    danhSachPhongVe: { thongTinPhim },
  } = useSelector((state) => state.bookTicketReducer);
  const dispatch = useDispatch();
  const param = useParams(); // lấy dữ liệu param từ URL
  const history = useHistory();
  const classes = useStyles({
    thongTinPhim,
    color: colorTheater[thongTinPhim?.tenCumRap.slice(0, 3).toUpperCase()],
    isMobile,
  });
  const isBookticket =
    successBookingTicketMessage || errorBookTicketMessage ? true : false;

  const handleReBooking = () => {
    if (successBookingTicketMessage) {
      dispatch(getListSeat(param.maLichChieu));
    }
    dispatch({ type: RESET_DATA_BOOKTICKET });
  };
  const handleTimeOut = () => {
    dispatch({ type: RESET_DATA_BOOKTICKET });
    dispatch(getListSeat(param.maLichChieu));
  };
  const handleAlertOver10 = () => {
    dispatch({ type: RESET_ALERT_OVER10 });
  };

  const handleCombackHome = () => {
    dispatch({ type: RESET_DATA_BOOKTICKET });
    dispatch({ type: LOADING_BACKTO_HOME });
    history.push("/");
  };

  return (
    <Dialog
      open={timeOut || (isBookticket && !isMobile) || alertOver10}
      classes={{ paper: classes.modal }}
      maxWidth="md"
    >
      {timeOut &&
        !isBookticket && ( // không thông báo hết giờ khi đã có kết quả đặt vé
          <div className={classes.padding}>
            <p>
              Times out! Please booking ticket in 5 minutes.
              <span className={classes.txtClick} onClick={handleTimeOut}>
                Book again!
              </span>
            </p>
          </div>
        )}
      {alertOver10 &&
        !timeOut && ( // ẩn thông báo quá 10 ghế khi time out
          <div className={classes.over10}>
            <div className={classes.notification}>
              <img
                width="100%"
                src="/img/bookticket/Post-notification.png"
                alt="Post-notification"
              />
            </div>
            <p className={classes.textOver}>You don't choose over 10 seats</p>
            <Button
              variant="outlined"
              classes={{ root: classes.btnOver }}
              onClick={handleAlertOver10}
            >
              ok
            </Button>
          </div>
        )}
      {!isMobile &&
        isBookticket && ( // chỉ open modal khi là desktop và đã đạt vé
          <>
            <ResultBookticket />
            <div className={classes.spaceEvenly}>
              <Button
                classes={{ root: classes.btnResult }}
                onClick={handleReBooking}
              >
                {successBookingTicketMessage && "Book this movie again!"}
                {errorBookTicketMessage && "Try book again"}
              </Button>
              <Button
                classes={{ root: classes.btnResult }}
                onClick={handleCombackHome}
              >
                Go to Homepage
              </Button>
            </div>
          </>
        )}
    </Dialog>
  );
}