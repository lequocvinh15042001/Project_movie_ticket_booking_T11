// lấy danh sách vé và đặt vé
// import ticketApi from '../../api/ticketApi';
import usersApi from '../../api/usersApi';
import { GET_TICKET_FAIL, GET_TICKET_REQUEST, GET_TICKET_SUCCESS } from "../constants/Ticket";

export const getAllTicket = (userId) => {
  return (dispatch) => {
    dispatch({
      type: GET_TICKET_REQUEST
    })
    usersApi.getTicket(userId)
      .then(result => {
       console.log("data ticket: ", result?.data?.data);
        dispatch({
          type: GET_TICKET_SUCCESS,
          payload: { data: result?.data?.data }
        })
      })
      .catch(
        error => {
          dispatch({
            type: GET_TICKET_FAIL,
            payload: { error: error.response?.data ? error.response.data : error.message, }
          })
        }
      )
  }
}
