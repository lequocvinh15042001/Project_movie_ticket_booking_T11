import React from 'react'

import { useSelector } from 'react-redux'

import useStyles from './style'
import { colorTheater } from '../../../constants/theaterData'

export default function SuccessBooking() {
  const { isMobile, amount, email, phone, paymentMethod, listSeatSelected, successBookingTicketMessage, errorBookTicketMessage, danhSachPhongVe: { thongTinPhim }, thongTinPhongVe } = useSelector((state) => state.bookTicketReducer)
  const { currentUser } = useSelector((state) => state.authReducer)
  // const classes = useStyles({ thongTinPhongVe, color: colorTheater[thongTinPhongVe?.setRap.slice(0, 3).toUpperCase()], isMobile })
  const classes = useStyles({ thongTinPhongVe, isMobile })

  return (
    <div className={classes.resultBookticket}>
      <div className={classes.infoTicked} >
        <div className={classes.infoTicked__img}>
          <img src={thongTinPhongVe?.setPhim.smallImageURl}/>
        </div>
        <div className={classes.infoTicked__txt}>
          <p className={classes.tenPhim}>
            {thongTinPhongVe?.setPhim.name}
          </p>
          <p className={classes.text__first}><span>{thongTinPhongVe?.setRap.split("-")[0]}</span><span className={classes.text__second}>-{thongTinPhongVe?.setRap.split("-")[1]}</span></p>
          <p className={classes.diaChi} >{thongTinPhongVe?.cumRapChieuData[0].address}</p>
          <table className={classes.table}>
            <tbody>
              <tr>
                <td valign='top' >Showtime:</td>
                <td valign='top'>{`${thongTinPhongVe?.suatChieu} ${thongTinPhongVe?.setNgayXem}`}</td>
              </tr>
              <tr>
                <td valign='top'>Room:</td>
                <td>Phòng 01</td>
              </tr>
              <tr>
                <td valign='top'>Seat(s):</td>
                <td>{listSeatSelected?.join(", ")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div>
          <h3 className={classes.infoResult_label}>Ticket Information</h3>
          <table className={`${classes.table} table`}>
            <tbody>
              <tr>
                <td valign='top' >Name:</td>
                <td>{currentUser?.hoTen}</td>
              </tr>
              {/* <tr>
                <td valign='top'>Phone:</td>
                <td valign='top'>{phone}</td>
              </tr> */}
              <tr>
                <td valign='top'>Email:</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td valign='top'>Status:</td>
                <td>
                  {successBookingTicketMessage && <span>Booking ticket Successfully <span className={classes.paymentColor}>{paymentMethod}</span></span>}
                  {errorBookTicketMessage && <span>Booking ticket Fail: <span className={classes.errorColor}>{errorBookTicketMessage}</span></span>}
                </td>
              </tr>
              <tr>
                <td valign='top' >Total:</td>
                <td valign='top'><span>{`${amount.toLocaleString('vi-VI')} đ`}</span></td>
              </tr>
            </tbody>
          </table>
          {successBookingTicketMessage && <p className={classes.noteresult}>Check this ticket into your information!</p>}
        </div>
      </div>
    </div>
  )
}
