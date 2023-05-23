
// import { Modal, Avatar, Button, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core';
// import { Comment as CommentIcon, Share as ShareIcon, Favorite as FavoriteIcon } from '@material-ui/icons';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getListCommentBaiViet, getListLikeBaiViet, postLikeUnlikeBaiViet } from '../reducers/actions/Interaction';
// import SeeComment from "./SeeComment"

// export default function InforReviewHomepage({ idReviewPost }) {
//   const { likeList } = useSelector((state) => state.interactionReducer);
//   const { commentList } = useSelector((state) => state.interactionReducer);
//   const { successInfoUser, loadingInfoUser } = useSelector(
//     (state) => state.usersManagementReducer
//   );
//   const { currentUser } = useSelector((state) => state.authReducer);
// //   console.log("successInfoUser: ", successInfoUser);
//   const [soLike, setSoLike] = useState(0);
//   const [soCmt, setSoCmt] = useState(0);
//   const [isLiked, setIsLiked] = useState(false);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getListLikeBaiViet(idReviewPost));
//     dispatch(getListCommentBaiViet(idReviewPost));
//   }, [idReviewPost]);

//   useEffect(() => {
//     if (likeList && commentList) {
//       setSoLike(likeList.length);
//       setSoCmt(commentList.number);
//     }
//   }, [likeList, commentList]);


//   const handleLikeClick = () => {
//     if (isLiked) {
//       setIsLiked(false);
//     let data = {
//         userId : 3,
//         articleId : idReviewPost
//       }
//       dispatch(postLikeUnlikeBaiViet(data))
//       dispatch(getListLikeBaiViet(idReviewPost));
//       setSoLike(likeList.length);
//     } else {
//       setIsLiked(true);
//       let data = {
//         userId : 3,
//         articleId : idReviewPost
//       }
//       dispatch(postLikeUnlikeBaiViet(data))
//       dispatch(getListLikeBaiViet(idReviewPost));
//       setSoLike(likeList.length);
//     }
//   };

//   return (
//     <CardActions disableSpacing>
//       <IconButton aria-label="add to favorites" style={{ color: isLiked ? "blue" : "white" }} onClick={handleLikeClick}>
//         <FavoriteIcon />
//         <Typography>{soLike} {" "} thích</Typography>
//       </IconButton>
//       <IconButton aria-label="comment" style={{ color: "white" }}>
//         <CommentIcon />
//         <Typography>{soCmt}  {" "} lượt bình luận</Typography>
//       </IconButton>
//     </CardActions>
//   );
// }


import { Modal, Avatar, Button, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core';
import { Comment as CommentIcon, Share as ShareIcon, Favorite as FavoriteIcon } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLikeCheck, getListCommentBaiViet, getListLikeBaiViet, postLikeUnlikeBaiViet } from '../reducers/actions/Interaction';
import SeeComment from "./SeeComment"
import interactionApi from "../api/interactionApi"
import { getInfoUser } from '../reducers/actions/UsersManagement';
import { getIn } from 'formik';

import { makeStyles } from "@material-ui/core/styles";
import { Drawer } from "@material-ui/core";
import { SidebarComment } from "../pages/SidebarComment";
import Comment from './Comments/Comment';

const drawerWidth = 600;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  }
}));

export default function InforReviewHomepage({ idReviewPost }) {
  const { likeList } = useSelector((state) => state.interactionReducer);
  const { commentList } = useSelector((state) => state.interactionReducer);
  const { successInfoUser, loadingInfoUser } = useSelector(
    (state) => state.usersManagementReducer
  );
  // const {likeCheck, loadingCheck} = useSelector((state) => state.interactionReducer);
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

  const handleLikeClick = () => {
    if (isLiked) {
      console.log("Unlike");
      dispatch(postLikeUnlikeBaiViet({ userId: successInfoUser?.data?.id, articleId: idReviewPost }));
      dispatch(getListLikeBaiViet(idReviewPost));
      setSoLike(likeList.length);
      setIsLiked(false);
    } else {
      console.log("Like");
      dispatch(postLikeUnlikeBaiViet({ userId: successInfoUser?.data?.id, articleId: idReviewPost }));
      dispatch(getListLikeBaiViet(idReviewPost));
      setSoLike(likeList.length);
      setIsLiked(true);
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

console.log(isLiked);

    // const classes = useStyles();
    // const [open, setOpen] = useState(false);

    // const handleDrawerOpen = () => {
    //   setOpen(true);
    // };

    // const handleDrawerClose = () => {
    //   setOpen(false);
    // };

    const [isPaneOpen, setIsPaneOpen] = useState(false);

  return (
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites" style={{ color: isLiked ? "blue" : "white" }} onClick={handleLikeClick}>
        <FavoriteIcon />
        <Typography>{soLike}</Typography>
      </IconButton>
      <div >
        <IconButton aria-label="comment" style={{ color: "white" }} 
              onClick={() => {
                setIsPaneOpen(true);
              }}>
          <CommentIcon />
          <Typography>{soCmt}</Typography>
        </IconButton>
      </div>
        <Comment
        isPaneOpen={isPaneOpen}
        onClose={() => {
          setIsPaneOpen(false);
        }}
        idReviewPost={idReviewPost}
        />
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

    </CardActions>
  );
}
