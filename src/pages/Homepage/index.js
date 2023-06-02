import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList, getMovieSapChieuList } from "../../reducers/actions/Movie";
import { getTheaters } from "../../reducers/actions/Theater";
import News from "./News";
import Carousel from "./Carousel";
import Showtime from "./Showtime";
import NewsComponent from "../../components/NewsComponent/NewsComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GET_INFO_USER_FAIL, GET_INFO_USER_REQUEST, GET_INFO_USER_SUCCESS } from "../../reducers/constants/UsersManagement";
import usersApi from "../../api/usersApi";
import { LOGIN_FAIL, LOGIN_SUCCESS } from "../../reducers/constants/Auth";

export default function Homepage() {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieReducer.movieList);
  const movieSapChieuList = useSelector((state) => state.movieReducer.movieSapChieuList);
  const theaterList = useSelector((state) => state.theaterReducer.theaterList);
  const [cUser , setCUser] = useState();
  useEffect(() => {
    usersApi.getThongTinTaiKhoan()
    .then((response) =>{
      setCUser(response?.data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          data: response?.data,
        },
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: LOGIN_FAIL,
        payload: {
          error: error.response?.data?.data ? error.response?.data?.data : error.message,
        },
      });
    })
    // console.log(setUserLog.data);
    // localStorage.setItem('userInfo', JSON.stringify({...cUser}))
    // localStorage.setItem('userLogin', JSON.stringify(...setUserLog.data))
  },[])

  useEffect(() => {
    dispatch({
      type: GET_INFO_USER_REQUEST
    })
    usersApi.getThongTinTaiKhoan()
      .then(result => {
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
    if (!movieSapChieuList.length) {
      dispatch(getMovieSapChieuList());
    }
    if (!theaterList.length) {
      dispatch(getTheaters());
    }
  }, []);

  return (
    <div>
      {/* Component show banner chạy auto */}
      <Carousel />

      {/* Component show các bộ phim đang chiếu/sắp chiếu */}
      <Showtime />

      {/* Component show các tin tức, sự kiện */}
      <News />
      
      {/* Component show các bài review */}
      <NewsComponent />
    </div>
  );
}
