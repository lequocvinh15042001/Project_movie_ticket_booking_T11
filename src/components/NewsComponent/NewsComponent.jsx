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
import LikeButton from "./LikeButton/LikeButton";
import { useSelector } from "react-redux";
import { IconButton } from "@material-ui/core";

import { Comment as CommentIcon, Share as ShareIcon, Favorite as FavoriteIcon } from '@material-ui/icons';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 150,
  },
});

export default function NewsComponent() {
  const {successInfoUser} = useSelector((state) => state.usersManagementReducer)
  // console.log("usẻ thích", successInfoUser);
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
        // if(tinTuc?.status === "APPROVE") {
      return (
        <div className="news__items" key={index}>
          <div className="items__img">
            <img src={tinTuc?.mainImage} alt={tinTuc?.mainImage} />
          </div>
          <div className="items__text">
            <h4 className="items__text-title">
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
            </h4>
            <p className="items__text-description">{tinTuc?.brief}</p>
            <div className="items__text-author">
            Tác giả:{" "}
              <NavLink
                to={`/reviewer/${tinTuc?.createdBy}`}
              >
                {tinTuc?.createdBy}
              </NavLink>

              <span className="items__text-days">
                Ngày cập nhật{" "}{moment(tinTuc?.dayupload).format("hh:mm DD/MM/yyyy")}
              </span>
            </div>

            {/* Hiển thị số lượng */}
            {/* <div style={{display: "flex"}}>
              <div className="items__text-likes">
                <i className="fas fa-heart"></i> {tinTuc?.likes?.length}
              </div>
              <div className="items__text-comments">
                <i className="fas fa-comment"></i> {tinTuc?.comments?.length}
              </div>
            </div> */}
            {/* <div> */}
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" style={{color: "white"}}>
                  <FavoriteIcon />
                  <Typography>100 {" "} lượt thích</Typography>
                  </IconButton>
                <IconButton aria-label="comment" style={{color: "white"}}>
                  <CommentIcon />
                  <Typography>20  {" "} lượt bình luận</Typography>
                </IconButton>
                <IconButton aria-label="share" style={{color: "white"}}>
                  <ShareIcon />
                  <Typography>10  {" "} lượt chia sẻ</Typography>
                </IconButton>
              </CardActions>
            {/* </div> */}
          </div>
          {/* <div>
            <LikeButton userId={successInfoUser?.data?.id} articleId={tinTuc?.id}/>
          </div> */}

        </div>
      );
    }
    });
  };
  const classes = useStyles();
  const renderTinTucHot = () => {
    return danhSachTinTuc?.data?.reverse().map((tinTuc, index) => {
      if(tinTuc?.type === "REVIEWS" && tinTuc?.status === "APPROVE") {
        // if(tinTuc?.status === "APPROVE") {
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
                Latest Reviews
            </div>
          </div>
        </div>
        <div className="news__container container">
          <div className="news__content row">
            <div className="news__left col-md-12 col-sm-12">
              <h3 className="news__title">Reviews</h3>
              {renderTinTuc()}
            </div>
            {/* <div className="news__right col-md-4 col-sm-12">
              <h3 className="news__title">Hot</h3>
              {renderTinTucHot()}
            </div> */}
          </div>
          <div className="readMore">
            <button className="btn__readmore" type="button" onClick={handlerSeeMore}>See More</button>
          </div>
        </div>
        </div>
    );
  }
}
