
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
import { getListCommentBaiViet, getListLikeBaiViet, postLikeUnlikeBaiViet } from '../reducers/actions/Interaction';
import SeeComment from "./SeeComment"
import interactionApi from "../api/interactionApi"

export default function InforReviewHomepage({ idReviewPost }) {
  const { likeList } = useSelector((state) => state.interactionReducer);
  const { commentList } = useSelector((state) => state.interactionReducer);
  const { successInfoUser, loadingInfoUser } = useSelector(
    (state) => state.usersManagementReducer
  );
  const { currentUser } = useSelector((state) => state.authReducer);
  const [soLike, setSoLike] = useState(0);
  const [soCmt, setSoCmt] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListLikeBaiViet(idReviewPost));
    dispatch(getListCommentBaiViet(idReviewPost));
  }, [idReviewPost]);


  useEffect(() => {
    // Call your API to check if the user has liked the post
    const checkUserLike = async () => {
      try {
        const response = await interactionApi.checkUserLikeOrUnlike(3, idReviewPost);
        console.log(response);
        setIsLiked(response.data.success); // Assuming the API returns { isLiked: true/false }
      } catch (error) {
        console.error(error);
      }
    };

    checkUserLike();
  }, [currentUser, idReviewPost, soLike]);

  const handleLikeClick = () => {
    if (isLiked) {
      console.log("Unlike");
      setIsLiked(false);
      dispatch(postLikeUnlikeBaiViet({ userId: 3, articleId: idReviewPost }));
      dispatch(getListLikeBaiViet(idReviewPost));
      setSoLike(likeList.length);
    } else {
      console.log("Like");
      setIsLiked(true);
      dispatch(postLikeUnlikeBaiViet({ userId: 3, articleId: idReviewPost }));
      dispatch(getListLikeBaiViet(idReviewPost));
      setSoLike(likeList.length);
    }
  };


  useEffect(() => {
    if (likeList && commentList) {
      setSoLike(likeList.length);
      setSoCmt(commentList.number);
    }
  }, [likeList, commentList,soLike]);

  return (
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites" style={{ color: isLiked ? "blue" : "white" }} onClick={handleLikeClick}>
        <FavoriteIcon />
        <Typography>{soLike} {" "} thích</Typography>
      </IconButton>
      <IconButton aria-label="comment" style={{ color: "white" }}>
        <CommentIcon />
        <Typography>{soCmt}  {" "} lượt bình luận</Typography>
      </IconButton>
    </CardActions>
  );
}
