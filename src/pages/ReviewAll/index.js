import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getMovieList } from "../../reducers/actions/Movie";
import { getTheaters } from "../../reducers/actions/Theater";
import NewsComponentMore from "../../components/NewsComponentMore/NewsComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GET_INFO_USER_FAIL, GET_INFO_USER_REQUEST, GET_INFO_USER_SUCCESS } from "../../reducers/constants/UsersManagement";
import usersApi from "../../api/usersApi";
import { LOGIN_FAIL, LOGIN_SUCCESS } from "../../reducers/constants/Auth";

export default function Homepage() {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieReducer.movieList);
  // console.log("Lấy được DS Phim: ",movieList);
  const theaterList = useSelector((state) => state.theaterReducer.theaterList);
  // console.log("Lấy được DS Rạp chiếu của mình: ",theaterList);

  // const { currentUser } = useSelector((state) => state.authReducer); 

  const [cUser , setCUser] = useState();
  useEffect(() => {
    usersApi.getThongTinTaiKhoan()
    .then((response) =>{
      console.log("Home user: ", response?.data);
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
      {/* <Carousel /> */}
      {/* <Showtime />
      <Theaters /> */}
      {/* <News /> */}
      <NewsComponentMore />
       {/* <HomeApp /> */}
    </div>
  );
}
