import {
    GET_TICKET_REQUEST, GET_TICKET_SUCCESS, GET_TICKET_FAIL,
  } from './constants/Ticket';
  
  const initialState = {
    loadingTicketList: false,
    errorTicketList: null,
    ticketList: [],
  
  }
  
  const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_TICKET_REQUEST: {
        return {
          ...state, loadingTicketList: true, errorTicketList: null
        }
      }
      case GET_TICKET_SUCCESS: {
        return {
          ...state,
          ticketList: action.payload?.data,
          loadingTicketList: false
        }
      }
      case GET_TICKET_FAIL: {
        return {
          ...state,
          errorTicketList: action.payload.errorTicketList,
          loadingTicketList: false,
        };
      }
  
      default:
        return state;
    }
  }
  export default ticketReducer;