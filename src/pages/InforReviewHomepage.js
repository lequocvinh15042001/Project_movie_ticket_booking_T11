
import { Modal, Avatar, Button, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core';
import { Comment as CommentIcon, Share as ShareIcon, Favorite as FavoriteIcon } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLikeCheck, getListCommentBaiViet, getListLikeBaiViet, postCommentBaiViet, postLikeUnlikeBaiViet } from '../reducers/actions/Interaction';
import SeeComment from "./SeeComment"
import interactionApi from "../api/interactionApi"
import { getInfoUser } from '../reducers/actions/UsersManagement';
import { getIn } from 'formik';

import { makeStyles } from "@material-ui/core/styles";
import { Drawer } from "@material-ui/core";
import { SidebarComment } from "../pages/SidebarComment";
import Comment from './Comments/Comment';


// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import useStyles from './SeeCommentPost/style';
import Box from "@material-ui/core/Box";
import { scroller } from "react-scroll";
import Swal from 'sweetalert2';
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import TextField from "@material-ui/core/TextField";
import { FAKE_AVATAR, UNKNOW_USER } from '../constants/config';
import CircularProgress from "@material-ui/core/CircularProgress";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import moment from "moment";
import "moment/locale/vi";
moment.locale("vi");

function TabPanel(props) {
  const { isMobile, children, value, index, ...other } = props;
  return (
    <div hidden={value !== index} {...other}>
      <Box p={isMobile && index === 0 ? 0 : 3}>{children}</Box>
    </div>
  );
}

export default function InforReviewHomepage({ idReviewPost,   
  data,
  onClickBtnMuave,
  isMobile,
  onIncreaseQuantityComment, }) {
  const { likeList } = useSelector((state) => state.interactionReducer);
  const { commentList } = useSelector((state) => state.interactionReducer);
  const { successInfoUser, loadingInfoUser } = useSelector(
    (state) => state.usersManagementReducer
  );
  const {likeCheck, loadingCheck} = useSelector((state) => state.interactionReducer);
  const { currentUser } = useSelector((state) => state.authReducer);
  const [soLike, setSoLike] = useState(0);
  const [soCmt, setSoCmt] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfoUser)
    dispatch(getListLikeBaiViet(idReviewPost));
    dispatch(getListCommentBaiViet(idReviewPost));
    dispatch(getLikeCheck({ userId: successInfoUser?.data?.id, articleId: idReviewPost }))
  }, [idReviewPost]);

  useEffect(() => {
    if (likeList && commentList) {
      setSoLike(likeList.length);
      setSoCmt(commentList.totalElements);
    }
  }, [likeList, commentList,soLike]);
  console.log(currentUser);

  const handleLikeClick = () => {
    console.log(likeCheck?.success);
    if (likeCheck?.success) {
      console.log("Unlike");
      dispatch(postLikeUnlikeBaiViet({ userId: successInfoUser?.data?.id, articleId: idReviewPost }));
      dispatch(getListLikeBaiViet(idReviewPost));
      setSoLike(likeList.length);
      setIsLiked(likeCheck.success);
    } else {
      console.log("Like");
      dispatch(postLikeUnlikeBaiViet({ userId: successInfoUser?.data?.id, articleId: idReviewPost }));
      dispatch(getListLikeBaiViet(idReviewPost));
      setSoLike(likeList.length);
      setIsLiked(likeCheck.success);
    }
  };
  // useEffect(() => {
  //   // Call your API to check if the user has liked the post
  //   const checkUserLike = async () => {
  //     try {
  //       const response = await interactionApi.checkUserLikeOrUnlike(successInfoUser.data.id, idReviewPost);
  //       // console.log(response);
  //       setIsLiked(response.data.success); // Assuming the API returns { isLiked: true/false }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   checkUserLike();
  // }, []);

    // console.log(isLiked);

    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleCloseDialog = () => {
      setOpen(false);
    };
    const {
      loadingPostComment,
      postCommentObj,
      loadingLikeComment,
      likeCommentObj,
    } = useSelector((state) => state.movieDetailReducer);
    // const { commentList } = useSelector((state) =>
    //   selectCommentByMaPhimAndCommentTest(state, param.maPhim)
    // );
    let location = useLocation();
    const history = useHistory();
    const [valueTab, setValueTab] = useState(0);
    const [croll, setCroll] = useState(0);
    const [openComment, setOpenComment] = useState(false);
    const [warningtext, setwarningtext] = useState(false);
    const [commentListDisplay, setCommentListDisplay] = useState({
      comment: [],
      page: 5,
      hideBtn: false,
      idScrollTo: "",
    });
    const [dataComment, setdataComment] = useState({
      avtId: currentUser?.username,
      username: currentUser?.name,
      // point: 2.5,
      description: "",
      // likes: 0,
      // maPhim: param.maPhim,
      dataTest: false,
      createdAt: "",
      // userLikeThisComment: [],
    });
    const classes = useStyles({ hideBtn: commentListDisplay.hideBtn, isMobile });


  useEffect(() => {
    // khi commentList lấy về thành công thì cập nhật số người bình luận
    if (commentList?.length && !isMobile) {
      onIncreaseQuantityComment(commentList?.length);
    }
  }, [commentList]);

  useEffect(() => {
    // mỗi khi mount component, postComment, likeComment thành công thì call api lấy comment mới
    // dispatch(getComment());
    dispatch(getListCommentBaiViet(idReviewPost));
    if (postCommentObj) {
      // reset text comment
      setdataComment((data) => ({ ...data, description: "" }));
    }
  }, [postCommentObj, likeCommentObj]);

  useEffect(() => {
    // const comment = commentList?.slice(0, commentListDisplay.page);
    const comment = commentList?.content?.slice(0,5);
    setCommentListDisplay((data) => ({ ...data, comment }));
  }, [commentList]);

  useEffect(() => {
    if (commentListDisplay.idScrollTo) {
      scroller.scrollTo(commentListDisplay.idScrollTo, {
        duration: 800,
        offset: -79,
        smooth: "easeInOutQuart",
      });
    }
  }, [commentListDisplay.idScrollTo]);

  const handlePostComment = () => {
    if (loadingPostComment) {
      return;
    }
    if (dataComment.description.length < 11) {
      // nếu comment quá ngắn
      setwarningtext(true);
      return;
    }
    setwarningtext(false);
    const currentISOString = new Date().toISOString();
    setOpenComment(false);
    // console.log("đăng cmt:", dataComment);
    dispatch(postCommentBaiViet(
      {
        description: dataComment?.description, 
        articleId: idReviewPost, 
        userId: successInfoUser?.data?.id
      }
    ))
    // dispatch(
    //   postComment({
    //     ...dataComment,
    //     createdAt: currentISOString,
    //     point: dataComment.point * 2,
    //   })
    // );
  };

  const setopenMore = () => {
    let hideBtn = false;
    let addComment = commentList?.content?.length % 5;
    if (commentList?.content?.length % 5 === 0) {
      addComment = 5;
    }
    if (commentListDisplay.page + addComment === commentList?.content?.length) {
      hideBtn = true;
    }
    const idScrollTo = `idComment${
      commentList?.content[commentListDisplay.page].createdAt
    }`;
    const page = commentListDisplay.page + 5;
    const comment = commentList?.content?.slice(0, page);
    setCommentListDisplay((data) => ({
      ...data,
      comment,
      page,
      hideBtn,
      idScrollTo,
    }));
  };

  const handleLike = (id) => {
    if (loadingLikeComment) {
      return;
    }
    if (!currentUser) {
      isLogin();
      return;
    }
    // tăng giảm số lượng like và add/remove email đã like
    const commentUserLiked = commentList.find((item) => item.id === id);
    if (commentUserLiked.userLikeThisComment.includes(currentUser.email)) {
      // xóa user khỏi danh sách liked comment, trừ số lượng like
      commentUserLiked.userLikeThisComment =
        commentUserLiked.userLikeThisComment.filter((item) => {
          return item !== currentUser.email;
        });
      commentUserLiked.likes = commentUserLiked.likes - 1;
    } else {
      commentUserLiked.userLikeThisComment.push(currentUser.email);
      commentUserLiked.likes = commentUserLiked.likes + 1;
    }
    // dispatch(likeComment(id, commentUserLiked));
  };

  const handletyping = (event) => {
    if (event.target.value.length >= 11) {
      // nếu comment quá ngắn
      setwarningtext(false);
    }
    setdataComment((data) => ({ ...data, description: event.target.value }));
  };
  const handleClose = () => {
    setOpenComment(false);
  };
  const isLogin = () => {
    if (!currentUser) {
      // nếu chưa đăng nhập
      Swal.fire({
        title: "You need to login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Đăng nhập",
        cancelButtonText: "Không",
      }).then((result) => {
        if (result.isConfirmed) {
          history.push("/dangnhap", location.pathname);
        }
      });
    }
  };
  const handleClickComment = () => {
    if (!currentUser) {
      isLogin();
      return;
    }
    setOpenComment(true);
    setwarningtext(false);
  };
  console.log(commentListDisplay);
  return (
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites" style={{ color: likeCheck?.success === true ? "blue" : "white" }} onClick={handleLikeClick}>
        <FavoriteIcon />
        <Typography>{soLike}</Typography>
      </IconButton>
      <div >
        <IconButton aria-label="comment" style={{ color: "white" }} 
              // onClick={() => {
              //   setIsPaneOpen(true);
              // }}>
              onClick={() => {
                setOpen(true);
              }}
              // onClick={handleClickOpen}
              >
          <CommentIcon />
          <Typography>{soCmt}</Typography>
        </IconButton>
      </div>
        {/* <Comment
        isPaneOpen={isPaneOpen}
        onClose={() => {
          setIsPaneOpen(false);
        }}
        idReviewPost={idReviewPost}
        /> */}
      {/* <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <SidebarComment handleDrawerClose={handleDrawerClose} />
      </Drawer> */}

    <div>
      {/* <Button variant="outlined">
        Open responsive dialog
      </Button> */}
      <Dialog
        // fullScreen={fullScreen}
        fullWidth
        open={open}
        onClose={handleCloseDialog}
        aria-labelledby="responsive-dialog-title"
      >
         <MuiDialogTitle disableTypography className={classes.rootcloseButton}>
          <DialogTitle id="responsive-dialog-title">
            {"Để lại bình luận của bạn"}
          </DialogTitle>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleCloseDialog}
          >
            <CloseIcon />
          </IconButton>
        </MuiDialogTitle>
        {/* <DialogActions> */}
        <div className={classes.theLon}>
          <div className={classes.danhGia}>
              <div className={classes.inputRoot} onClick={handleClickComment}>
                <span className={classes.avatarReviewer}>
                  <img
                    src={currentUser ? successInfoUser?.data?.image : FAKE_AVATAR}
                    alt="avatar"
                    className={classes.avatarImg}
                  />
                </span>
                <input
                  className={classes.inputReviwer}
                  type="text"
                  placeholder="Để lại bình luận cho bài viết?"
                  readOnly="readonly"
                />
                {/* <span className={classes.imgReviewerStar}>
                  <Rating
                    value={5}
                    size={isMobile ? "small" : "medium"}
                    readOnly
                  />
                </span> */}
              </div>
            </div>
            <div
              className="text-center mb-2 text-white"
              hidden={!loadingPostComment && !loadingLikeComment}
            >
              <CircularProgress size={20} color="inherit" />
            </div>
            {commentListDisplay?.comment?.map((item) => (
              <div
                key={`${item.createdAt}`}
                className={classes.itemDis}
                id={`idComment${item.createdAt}`}
              >
                <div className={classes.infoUser}>
                  <div className={classes.left}>
                    <span className={classes.avatar}>
                      <img
                        // src={item?.image}
                        src={item?.image ?item?.image: FAKE_AVATAR}
                        alt="avatar"
                        className={classes.avatarImg}
                      />
                    </span>
                    <span className={classes.liveUser}>
                      <p className={classes.userName}>{item.name}</p>
                      <p className={classes.timePost}>
                        {moment(item.createdAt).fromNow()}
                      </p>
                    </span>
                  </div>
                  {/* <div className={classes.right}>
                    <p className="text-success">{item.point}</p>
                    <Rating
                      value={(item.point * 5) / 10}
                      precision={0.5}
                      size={isMobile ? "small" : "medium"}
                      readOnly
                    />
                  </div> */}
                  <div className="clearfix"></div>
                </div>
                <div className="py-3 mb-3 border-bottom">
                  <p className="text-break">{item.description}</p>
                </div>

                {/* <span
                  className="d-inline-block"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleLike(item.id)}
                >
                  <span className="mr-2">
                    {((userLikeThisComment) => {
                      return (
                        <ThumbUpIcon
                          style={{
                            color: userLikeThisComment?.includes(
                              currentUser?.email
                            )
                              ? "#fb4226"
                              : "#73757673",
                          }}
                        />
                      );
                    })(item.userLikeThisComment)}
                  </span>
                  <span style={{ color: "#737576" }}>
                    <span>{item.likes}</span> Thích
                  </span>
                </span> */}
              </div>
            ))}
            <div className={classes.moreMovie}>
              <Button
                variant="outlined"
                onClick={() => setopenMore()}
                className={classes.moreMovieButton}
              >
                Xem thêm
              </Button>
            </div>
          </div>
        {/* </DialogActions> */}

        {/* <MuiDialogTitle disableTypography className={classes.rootcloseButton}>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </MuiDialogTitle> */}

        {/* <Grid container direction="column" justify="center" alignItems="center">
          <span className={classes.pointPopup}>{dataComment.point * 2}</span>
          <Rating
            name="customStar"
            size="large"
            precision={0.5}
            value={dataComment.point}
            className={classes.starPopup}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
            onChange={(event, newValue) => {
              setdataComment((data) => ({ ...data, point: newValue }));
            }}
          />
        </Grid> */}
        {/* <DialogContent className={classes.dialogContent}>
          <TextField
            className={classes.textField}
            onChange={(event) => handletyping(event)}
            fullWidth
            value={dataComment.post}
            variant="outlined"
            label={
              dataComment.post
                ? ""
                : "Nói lên suy nghĩ của bạn..."
            }
          />
        </DialogContent>
        <DialogActions className="justify-content-center flex-column px-4">
          {warningtext && (
            <DialogContentText className="text-danger">
              Vui lòng gõ hơn 60 ký tự!
            </DialogContentText>
          )}
          <Button
            onClick={handlePostComment}
            variant="contained"
            className={classes.btnDang}
          >
            Đăng
          </Button>
        </DialogActions>

        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Ẩn
          </Button>
        </DialogActions> */}
      </Dialog>

      <Dialog
        open={openComment}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        className={classes.dialog}
      >
        <MuiDialogTitle disableTypography className={classes.rootcloseButton}>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </MuiDialogTitle>
        <Grid container direction="column" justify="center" alignItems="center">
          <span style={{fontSize: "20px", marginTop:"1rem"}}>Để lại bình luận</span>
        </Grid>
        <DialogContent className={classes.dialogContent}>
          <TextField
            className={classes.textField}
            onChange={(event) => handletyping(event)}
            fullWidth
            value={dataComment.description}
            variant="outlined"
            label={
              dataComment.description
                ? ""
                : "Nói lên suy nghĩ của bạn..."
            }
          />
        </DialogContent>
        <DialogActions className="justify-content-center flex-column px-4">
          {warningtext && (
            <DialogContentText className="text-danger">
              Vui lòng gõ hơn 10 ký tự!
            </DialogContentText>
          )}
          <Button
            onClick={handlePostComment}
            variant="contained"
            className={classes.btnDang}
          >
            Đăng
          </Button>
        </DialogActions>
      </Dialog>
      {/* <Dialog
        open={openComment}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        className={classes.dialog}
      >
        <MuiDialogTitle disableTypography className={classes.rootcloseButton}>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </MuiDialogTitle>
        <Grid container direction="column" justify="center" alignItems="center">
          <span className={classes.pointPopup}>{dataComment.point * 2}</span>
          <Rating
            name="customStar"
            size="large"
            precision={0.5}
            value={dataComment.point}
            className={classes.starPopup}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
            onChange={(event, newValue) => {
              setdataComment((data) => ({ ...data, point: newValue }));
            }}
          />
        </Grid>
        <DialogContent className={classes.dialogContent}>
          <TextField
            className={classes.textField}
            onChange={(event) => handletyping(event)}
            fullWidth
            value={dataComment.post}
            variant="outlined"
            label={
              dataComment.post
                ? ""
                : "Nói lên suy nghĩ của bạn..."
            }
          />
        </DialogContent>
        <DialogActions className="justify-content-center flex-column px-4">
          {warningtext && (
            <DialogContentText className="text-danger">
              Vui lòng gõ hơn 60 ký tự!
            </DialogContentText>
          )}
          <Button
            onClick={handlePostComment}
            variant="contained"
            className={classes.btnDang}
          >
            Đăng
          </Button>
        </DialogActions>
      </Dialog> */}
    </div>
    
    </CardActions>
  );
}
