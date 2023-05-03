import { Modal, Avatar, Button, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core';
import { Comment as CommentIcon, Share as ShareIcon, Favorite as FavoriteIcon } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListCommentBaiViet, getListLikeBaiViet } from '../reducers/actions/Interaction';
import SeeComment from "./SeeComment"

export default function InforReviewHomepage({idReviewPost}) {

    const {likeList} = useSelector( (state) => state.interactionReducer)
    const {commentList} = useSelector( (state) => state.interactionReducer)
    // const [selectedPost, setSelectedPost] = useState(null);

    const [soLike, setSoLike] = useState(0);
    const [soCmt, setSoCmt] = useState(0);

    const dispatch = useDispatch();
    console.log(commentList);

    // useEffect(() => {
    //     dispatch(getListLikeBaiViet(idReviewPost))
    //     dispatch(getListCommentBaiViet(idReviewPost))
    //     if(!soLike && !soCmt){
    //         setSoLike(likeList?.length)
    //         setSoCmt(commentList?.number)
    //     }
    // },[])

    useEffect(() => {
        dispatch(getListLikeBaiViet(idReviewPost))
        dispatch(getListCommentBaiViet(idReviewPost))
      }, [idReviewPost]);
      
    useEffect(() => {
        if (likeList && commentList) {
            setSoLike(likeList.length)
            setSoCmt(commentList.number)
        }
    }, [likeList, commentList]);

    // const [open, setOpen] = useState(false);
    // const [scroll, setScroll] = useState('paper');

    // const handleClickOpen = (tinTuc) => {
    // setSelectedPost(tinTuc);
    // setOpen(true);
    // };


    // const handleClose = () => {
    //     setOpen(false);
    // };

    console.log(soLike);
    console.log(soCmt);

    return(
    <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" style={{color: "white"}}>
            <FavoriteIcon />
            <Typography>{soLike} {" "} lượt thích</Typography>
            </IconButton>
        <IconButton aria-label="comment" style={{color: "white"}}>
            <CommentIcon />
            <Typography>{soCmt}  {" "} lượt bình luận</Typography>
        </IconButton>
        {/* <IconButton aria-label="share" style={{color: "white"}}>
            <ShareIcon />
            <Typography>10  {" "} lượt chia sẻ</Typography>
        </IconButton> */}
    </CardActions>
    );
}