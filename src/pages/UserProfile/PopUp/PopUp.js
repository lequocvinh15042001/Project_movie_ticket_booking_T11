import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import useStyles from './style'
import { colorTheater } from '../../../constants/theaterData'
import bookingApi from '../../../api/bookingApi'
import { useParams } from 'react-router-dom'

export default function DetailPopup({ ThongTin }) {
    const { isMobile, amount, email, phone, paymentMethod, listSeatSelected, successBookingTicketMessage, errorBookTicketMessage, danhSachPhongVe: { thongTinPhim }, thongTinPhongVe } = useSelector((state) => state.bookTicketReducer)
    const { currentUser } = useSelector((state) => state.authReducer)
    // const classes = useStyles({ thongTinPhongVe, color: colorTheater[thongTinPhongVe?.setRap.slice(0, 3).toUpperCase()], isMobile })
    const classes = useStyles({ thongTinPhongVe, isMobile })
    console.log(ThongTin, "resThongTinponse");
    const [thongTin, setThongTin] = useState(ThongTin)
    useEffect(() => {
        bookingApi.getLichChieuChiTietHeThong(ThongTin?.schedule?.movie?.id, ThongTin?.schedule?.branch?.id, ThongTin?.schedule?.startDate, ThongTin?.schedule?.startTime, ThongTin?.schedule?.room?.id)
            .then((response) => {
                console.log(response.data.data);
                setThongTin(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <div className={classes.resultBookticket}>
            <div className={classes.infoTicked} >
                <div className={classes.infoTicked__img}>
                    <img src={thongTin?.data?.content[0]?.movie?.smallImageURl} />
                </div>
                <div className={classes.infoTicked__txt}>
                    <p className={classes.tenPhim}>
                        {thongTin?.data?.content[0]?.movie?.name}
                    </p>
                    <p className={classes.text__first}><span>{thongTin?.data?.content[0]?.branch?.name.split("-")[0]}</span><span className={classes.text__second}> - {thongTin?.data?.content[0]?.branch?.phoneNo}</span></p>
                    <p className={classes.diaChi} >{thongTin?.data?.content[0]?.branch?.address}</p>
                    <table className={classes.table}>
                        <tbody>
                            <tr>
                                <td valign='top' >Lịch chiếu:</td>
                                <td valign='top'>{`${thongTin?.data?.content[0]?.startTime}, ${thongTin?.data?.content[0]?.startDate}`}</td>
                            </tr>
                            <tr>
                                <td valign='top'>Phòng:</td>
                                <td>{thongTin?.data?.content[0]?.room?.name}</td>
                            </tr>
                            <tr>
                                <td valign='top'>Ghế(s):</td>
                                <td>{listSeatSelected?.join(", ")}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <div>
                    <h3 className={classes.infoResult_label}>Thông tin vé</h3>
                    <table className={`${classes.table} table`}>
                        <tbody>
                            <tr>
                                <td valign='top' >Tên:</td>
                                <td>{currentUser?.data?.name}</td>
                            </tr>
                            <tr>
                                <td valign='top'>Email:</td>
                                <td>{email}</td>
                            </tr>
                            <tr>
                                <td valign='top'>Trạng thái:</td>
                                <td>
                                    {successBookingTicketMessage && <span>Đặt vé thành công</span>}
                                    {errorBookTicketMessage && <span>Đặt vé thất bại: <span className={classes.errorColor}>{errorBookTicketMessage}</span></span>}
                                </td>
                            </tr>
                            <tr>
                                <td valign='top' >Tổng cộng:</td>
                                <td valign='top'><span>{`${amount.toLocaleString('vi-VI')} đ`}</span></td>
                            </tr>
                        </tbody>
                    </table>
                    {successBookingTicketMessage && <p className={classes.noteresult}>Kiểm tra vé trong thông tin cá nhân!</p>}
                </div>
            </div>
        </div>
    )
}
