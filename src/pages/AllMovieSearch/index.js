import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Showtime from "./Showtime";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieItem from "./Showtime/Desktop/MovieItem";
import { useParams } from "react-router-dom";
import moviesApi from "../../api/moviesApi";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./Showtime/Desktop";
import useStyle from "./Showtime/Desktop/style";

export default function AllMovieSearch() {
  const dispatch = useDispatch();
  const [listKetQua, setListKetQua]= useState([])
  // const movieList = useSelector((state) => state.movieReducer.movieList);
  // console.log("search tất cả phim hiển thị", movieList);
  const params = useParams()
  var item = params.searchItem.toString()
  console.log((params.searchItem).toString());

  useEffect(() =>{
    moviesApi.getSearchPhim(item)
    .then((res) =>{
      console.log(res);
      setListKetQua(res?.data?.data)
    })
    .catch((err) =>{
      console.log(err)
    })
  },[])

  console.log(listKetQua);
  const classes = useStyle();
  const settings = {
    className: "center",
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div className={classes.container}>
      
      <Slider {...settings}>
        {listKetQua ?   
            (listKetQua.map((movie) => {
              return (
                <div className="px-1 align-top" key={movie.id}>
                  <MovieItem
                    movie={movie}
                  />
                </div>
              )
          })): <h1 style={{
            left:"50%",
            top:"50%",
            color:"white",
            textAlign:"center",
            fontSize:"larger",
            fontWeight:"bolder",
            padding:"5rem"
          }}>Không tìm thấy kết quả!</h1>
          }
      </Slider>   
    </div>
  );
}
