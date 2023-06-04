import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieItem from "./Showtime/Desktop/MovieItem";
import { useHistory, useParams } from "react-router-dom";
import moviesApi from "../../api/moviesApi";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./Showtime/Desktop";
import useStyle from "./Showtime/Desktop/style";
import Swal from "sweetalert2";

export default function AllMovieSearch() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [listKetQua, setListKetQua]= useState([])
  const params = useParams()
  var item = params.searchItem.toString()

  console.log(listKetQua);
  useEffect(() =>{
    moviesApi.getSearchPhim(item)
    .then((res) =>{
      if(res.data.data)
      {
        setListKetQua(res.data.data)
      } else {
        setListKetQua([])
      }
    })
    .catch((err) =>{
      console.log(err)
    })
  },[item])

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
        {listKetQua.length > 0 ?
            (listKetQua?.map((movie) => {
              return (
                <div className="px-1 align-top" key={movie.id}>
                  <MovieItem
                    movie={movie}
                  />
                </div>
              )
          })): <h5><a href="/">❌ Không thấy, về trang chủ</a></h5>
        }
        {/* {listKetQua.length === 0 &&  
          Swal.fire({
            title: "Không tìm thấy phim!",
            icon: "warning",
            // showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Về trang chủ",
            // cancelButtonText: "Không",
              }).then((result) => {
                if (result.isConfirmed) {
                  history.push("/");
                  window.location.reload();
                }
          })
        } */}
        {/* {listKetQua.length === 0 && 
           Swal.fire({
            title: "Không tìm thấy phim!",
            icon: "warning",
            // showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Về trang chủ",
            // cancelButtonText: "Không",
              }).then((result) => {
                if (result.isConfirmed) {
                  history.push("/");
                  window.location.reload();
                }
          })
        }  */}
      </Slider>   
    </div>
  );
}

        
          // Swal.fire({
          //   title: "Không tìm thấy phim!",
          //   icon: "warning",
          //   // showCancelButton: true,
          //   confirmButtonColor: "#3085d6",
          //   confirmButtonText: "Về trang chủ",
          //   // cancelButtonText: "Không",
          //     }).then((result) => {
          //       if (result.isConfirmed) {
          //         history.push("/");
          //         window.location.reload();
          //       }
          //     })
          // <div style={{
          //   left:"50%",
          //   top:"50%",
          //   color:"white !important",
          //   textAlign:"center",
          //   fontWeight:"bolder",
          //   padding:"5rem",
          //   position: "absolute",
          //   transform: "translate(-50%, -50%)",
          // }}
          // >Không tìm thấy kết quả!</div>  