import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Avatar, Button, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core';
import { Comment as CommentIcon, Share as ShareIcon, Favorite as FavoriteIcon } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import SpinnerLoading from '../components/SpinnerLoading/SpinnerLoading';
import formatDate from '../utilities/formatDate';

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
//   expand: {
//     marginLeft: 'auto',
//   },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function PostReviewer({reviewerDetailShowtimes, reviewList }) {
  const classes = useStyles();

  let [danhSachTinTuc, setDanhSachTinTuc] = useState();
  let [loading, setLoading] = useState(true);
  console.log("Danh sách nè: ", reviewList);
  console.log("reviewerDetailShowtimes: ", reviewerDetailShowtimes);

  useEffect(() => {
      setDanhSachTinTuc(reviewList);
      setLoading(false);
  }, [reviewList]);
  console.log("danhSachTinTuc: ", danhSachTinTuc);
//   const history = useHistory();
//   const handlerSeeMore =() =>{
//     history.push("/review")
//   }
//   var moment = require("moment");

//   const handleXemthem =(tinTuc) =>{
//     console.log(tinTuc);
//   }

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderTinTuc = () => {
    return danhSachTinTuc?.map((tinTuc, index) => {
      if(tinTuc?.type === "REVIEWS" && tinTuc?.status === "APPROVE") {
      return (
        <div key={index}>
        <Card className={classes.root}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                </Avatar>
            }
                title={tinTuc?.title} //Đề mục tên bài review
                subheader={formatDate(tinTuc?.createdAt).dateFull} // ngày đăng
            />
            <img className={classes.media} src={tinTuc?.mainImage} alt="post image" />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                {tinTuc?.brief}
            </Typography>
            <div onClick={handleOpen} style={{ cursor: "pointer", ":hover": { cursor: "pointer" } }}>
                <span>Xem thêm...</span>
            </div>

            <Modal open={open} onClose={handleClose}>
                <div>
                <h2>Modal Title</h2>
                <p>Modal content goes here</p>
                <Button variant="contained" color="secondary" onClick={handleClose}>
                    Close Modal
                </Button>
                </div>
            </Modal>
        </CardContent>

        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            <Typography>100</Typography>
            </IconButton>
            <IconButton aria-label="comment">
            <CommentIcon />
            <Typography>20</Typography>
            </IconButton>
            <IconButton aria-label="share">
            <ShareIcon />
            <Typography>10</Typography>
            </IconButton>
        </CardActions>
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
        {/* <div className="news__header">
          <div className="overlay">
            <div className="title__description">
                CÁC BÀI REVIEW CỦA {reviewerDetailShowtimes?.name}
            </div>
          </div>
        </div> */}
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