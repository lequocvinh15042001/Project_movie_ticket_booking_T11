import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getMovieList } from "../../reducers/actions/Movie";
import { getTheaters } from "../../reducers/actions/Theater";
import News from "./News";
import Carousel from "./Carousel";
import HomeApp from "./HomeApp";
import Theaters from "./Theaters";
import Showtime from "./Showtime";
import NewsComponent from "../../components/NewsComponent/NewsComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GET_INFO_USER_FAIL, GET_INFO_USER_REQUEST, GET_INFO_USER_SUCCESS } from "../../reducers/constants/UsersManagement";
import usersApi from "../../api/usersApi";

export default function Homepage() {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieReducer.movieList);
  // console.log("Lấy được DS Phim: ",movieList);
  const theaterList = useSelector((state) => state.theaterReducer.theaterList);
  // console.log("Lấy được DS Rạp chiếu của mình: ",theaterList);

  useEffect(() => {
    dispatch({
      type: GET_INFO_USER_REQUEST
    })
    usersApi.getThongTinTaiKhoan()
      .then(result => {
        console.log("getThongTinTaiKhoan: ", result);
        dispatch({
          type: GET_INFO_USER_SUCCESS,
          payload: {
            data: result.data,
          }
        })
      }
      )
      .catch(
        error => {
          dispatch({
            type: GET_INFO_USER_FAIL,
            payload: {
              error: error.response?.data?.data ? error.response.data?.data : error.message,
            }
          })
        }
      )
  },[])

  useEffect(() => {
    if (!movieList.length) {
      dispatch(getMovieList());
    }
    if (!theaterList.length) {
      dispatch(getTheaters());
    }
  }, []);

  return (
    <div>
      <Carousel />
      <Showtime />
      <Theaters />
      <News />
      <NewsComponent />
       {/* <HomeApp /> */}
    </div>
  );
}
