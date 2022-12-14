// lấy danh sách vé và đặt vé
import bookingApi from '../../api/bookingApi';
import {
  BOOK_TICKET_REQUEST, BOOK_TICKET_SUCCESS, BOOK_TICKET_FAIL, GET_LISTSEAT_REQUEST, GET_LISTSEAT_SUCCESS, GET_LISTSEAT_FAIL,
  CREATE_SHOWTIME_REQUEST, CREATE_SHOWTIME_SUCCESS, CREATE_SHOWTIME_FAIL, RESET_CREATE_SHOWTIME,
} from "../constants/BookTicket";

export const getListSeat = (maLichChieu) => {
  return (dispatch) => {
    dispatch({
      type: GET_LISTSEAT_REQUEST
    })
    console.log("getListSeat: ", maLichChieu);
    bookingApi.getDanhSachPhongVe(maLichChieu)
      .then(result => {
       console.log("data danh sách ghế nè: ", result.data);
        dispatch({
          type: GET_LISTSEAT_SUCCESS,
          payload: { data: result.data }
        })
      })
      .catch(
        error => {
          dispatch({
            type: GET_LISTSEAT_FAIL,
            payload: { error: error.response?.data ? error.response.data : error.message, }
          })
        }
      )
  }
}

export const bookTicket = (data) => {
  console.log("Data đặt vé: ",data);
  return (dispatch) => {
    dispatch({
      type: BOOK_TICKET_REQUEST
    })
    bookingApi.postDatVe(data)
      .then(result => {
        dispatch({
          type: BOOK_TICKET_SUCCESS,
          payload: {
            data: result.data,
          }
        })
        console.log("Kết quả: ",result);
      })
      .catch(
        error => {
          dispatch({
            type: BOOK_TICKET_FAIL,
            payload: { error: error.response?.data ? error.response.data : error.message, }
          })

        }
      )
  }
}

export const createShowtime = (data) => {
  return (dispatch) => {
    console.log("Truyền vô thêm showtime: ", data);
    dispatch({
      type: CREATE_SHOWTIME_REQUEST
    })
    bookingApi.postTaoLichChieu(data)
      .then(result => {
        dispatch({
          type: CREATE_SHOWTIME_SUCCESS,
          payload: {
            data: result.data,
          }
        })
      })
      .catch(
        error => {
          dispatch({
            type: CREATE_SHOWTIME_FAIL,
            payload: { error: error.response?.data ? error.response.data : error.message, }
          })

        }
      )
  }
}

export const resetCreateShowtime = () => {
  return (dispatch) => {
    dispatch({
      type: RESET_CREATE_SHOWTIME
    })
  }
}


