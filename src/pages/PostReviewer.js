import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Avatar, Button, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core';
import { Comment as CommentIcon, Share as ShareIcon, Favorite as FavoriteIcon } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import SpinnerLoading from '../components/SpinnerLoading/SpinnerLoading';
import formatDate from '../utilities/formatDate';
import SeeDetail from './SeeDetail';
import { FAKE_AVATAR } from '../constants/config';
import InforReviewPost from './InforReviewPost';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: 'auto',
    marginBottom: theme.spacing(2),
  },
  media: {
    height: "100%",
    width: "100%",
  },
  expand: {
    marginLeft: 'auto',
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function PostReviewer({reviewerDetailShowtimes, reviewList, avatar }) {
  const classes = useStyles();

  let [danhSachTinTuc, setDanhSachTinTuc] = useState();
  let [loading, setLoading] = useState(true);

  const [selectedPost, setSelectedPost] = useState(null);

  console.log("Danh sách nè: ", reviewList);
  console.log("reviewerDetailShowtimes: ", reviewerDetailShowtimes);

  useEffect(() => {
      setDanhSachTinTuc(reviewList);
      setLoading(false);
  }, [reviewList]);
  // console.log("danhSachTinTuc: ", danhSachTinTuc);

const [open, setOpen] = useState(false);
const [scroll, setScroll] = useState('paper');

console.log(avatar);
const handleClickOpen = (tinTuc) => {
  setSelectedPost(tinTuc);
  setOpen(true);
};


const handleClose = () => {
    setOpen(false);
};

  const renderTinTuc = () => {
    return danhSachTinTuc?.map((tinTuc, index) => {
      if(tinTuc?.type === "REVIEWS" && tinTuc?.status === "APPROVE") {
      return (
        <div key={tinTuc.id}>
        <Card className={classes.root} key={tinTuc.id}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  <img style={{width: "40px", height:"40px"}} src={avatar ? avatar : FAKE_AVATAR} alt="Avatar"/>
                </Avatar>
            }
                title={tinTuc?.title} //Đề mục tên bài review
                subheader={formatDate(tinTuc?.createdAt).dateFull} // ngày đăng
            />
            <img className={classes.media} src={tinTuc?.mainImage} alt="postimage" />

        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                {tinTuc?.brief}
            </Typography>

        <div onClick={() => handleClickOpen(tinTuc)} style={{ cursor: "pointer", ":hover": { cursor: "pointer" } , color:"rgb(251, 66, 38)"}}>
          <span>Xem thêm...</span>
        </div>

        </CardContent>

          <SeeDetail
            open={open}
            handleClose={handleClose}
            scroll={scroll}
            title={selectedPost?.title}
            description={selectedPost?.description}
          />

          <InforReviewPost idReviewPost={tinTuc?.id}/>
          
      </Card>
      </div>
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
                CÁC BÀI REVIEW CỦA {reviewerDetailShowtimes?.name}
            </div>
          </div>
        </div>
        <div className="news__container container">
          <div className="news__content row">
            <div className="news__left col-md-12 col-sm-12">
              {renderTinTuc()}
            </div>
            {/* <div className="news__right col-md-4 col-sm-12">
              <h3 className="news__title">Hot</h3>
              {renderTinTucHot()}
            </div> */}
          </div>
        </div>
        </div>
    );
  }
}