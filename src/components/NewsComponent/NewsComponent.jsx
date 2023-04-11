import React, { useState, useEffect, Fragment } from "react";
import "./NewsComponent.scss";
import { NavLink,useHistory } from "react-router-dom";
import { qLyPhimService } from "../../services/QuanLyPhimServices";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 150,
  },
});

export default function NewsComponent() {
  let [danhSachTinTuc, setDanhSachTinTuc] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    qLyPhimService
      .layReviewDuocDuyet()
      // .layReviewChuaDuyet()
      .then((res) => {
        setDanhSachTinTuc(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("danhSachTinTuc: ", danhSachTinTuc);
  const history = useHistory();
  const handlerSeeMore =() =>{
    history.push("/review")
  }
  var moment = require("moment");
  const renderTinTuc = () => {
    return danhSachTinTuc?.data?.reverse().map((tinTuc, index) => {
      if(tinTuc?.type === "REVIEWS" && tinTuc?.status === "APPROVE") {
      return (
        <div className="news__items" key={index}>
          <div className="items__img">
            <img src={tinTuc?.mainImage} alt={tinTuc?.mainImage} />
          </div>
          <div className="items__text">
            <h2 className="items__text-title">
              <NavLink
                className="items__text-link"
                to={`/review/${tinTuc?.id}`}
              >
                {tinTuc?.title || (
                  <SkeletonTheme color="#202020" highlightColor="#111111">
                    <h2>
                      <Skeleton count={3} duration={2} />
                    </h2>
                  </SkeletonTheme>
                )}
              </NavLink>
            </h2>
            <p className="items__text-description">{tinTuc?.brief}</p>
            {/* <div className="items__text-author">
              {tinTuc.author}
              <span className="items__text-days">
                {moment(tinTuc.dayupload).format("hh:mm DD/MM/yyyy")}
              </span>
            </div> */}
          </div>
        </div>
      );
    }
    });
  };
  const classes = useStyles();
  const renderTinTucHot = () => {
    return danhSachTinTuc?.data?.reverse().map((tinTuc, index) => {
      if(tinTuc?.type === "REVIEWS" && tinTuc?.status === "APPROVE") {
      return (
        // <div className="news__items" key={index}>
        //   <div className="items__img">
        //     <img src={tinTuc.mainImage} alt={tinTuc.mainImage} />
        //   </div>
        //   <div className="items__text">
        //     <h5 className="items__text-title">
        //       <NavLink
        //         className="items__text-link"
        //         to={`/review/${tinTuc.id}`}
        //       >
        //         {tinTuc.title}
        //       </NavLink>
        //     </h5>
        //   </div>
        // </div>
        <Card className={classes.root} key={index}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={tinTuc.mainImage}
              title={tinTuc.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">

                  <NavLink
                className="items__text-link"  
                  to={`/review/${tinTuc.id}`}
                >
                 {tinTuc.title}
               </NavLink>
                {/* {tinTuc.title} */}
              </Typography>
            </CardContent>
          </CardActionArea>
          {/* <CardActions>
            <Button size="small" color="primary">
              Đọc thêm
            </Button>
            <Button size="small" color="primary">
              Viết Review
            </Button>
          </CardActions> */}
        </Card>
      );
      }
    });
  };
  if (loading) {
    return <SpinnerLoading />;
  } else {
    return (
      <div>
        <div className="news__header">
          <div className="overlay">
            <div className="title__description">
                Latest News and Reviews
            </div>
          </div>
        </div>
        <div className="news__container container">
          <div className="news__content row">
            <div className="news__left col-md-8 col-sm-12">
              <h3 className="news__title">Reviews</h3>
              {renderTinTuc()}
            </div>
            <div className="news__right col-md-4 col-sm-12">
              <h3 className="news__title">Hot</h3>
              {renderTinTucHot()}
            </div>
          </div>
          <div className="readMore">
            <button className="btn__readmore" type="button" onClick={handlerSeeMore}>See More</button>
          </div>
        </div>
        </div>
    );
  }
}
