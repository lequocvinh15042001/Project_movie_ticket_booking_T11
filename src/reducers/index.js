import { combineReducers } from "redux";
import authReducer from "./Auth";
import movieReducer from "./Movie";
import usersManagementReducer from "./UsersManagement";
import eventsManagementReducer from "./EventsManagement";
import reviewsManagementReducer from "./ReviewsManagement";
import theaterReducer from "./Theater";
import bookTicketReducer from "./BookTicket";
import movieDetailReducer from "./MovieDetail";
import modalTrailerReducer from "./ModalTrailer";
import ticketReducer from "./Ticket";
import lazyReducer from "./Lazy";
import billsManagementReducer from "./Bill";

const rootReducer = combineReducers({
  authReducer, movieReducer, usersManagementReducer,
  theaterReducer, bookTicketReducer, movieDetailReducer,
  modalTrailerReducer, lazyReducer, ticketReducer, eventsManagementReducer, reviewsManagementReducer, billsManagementReducer
});
export default rootReducer;