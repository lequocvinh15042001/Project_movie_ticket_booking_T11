import { Modal, Avatar, Button, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core';
import { Comment as CommentIcon, Share as ShareIcon, Favorite as FavoriteIcon } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListCommentBaiViet, getListLikeBaiViet } from '../reducers/actions/Interaction';
import SeeComment from "./SeeComment"

export default function InforReviewPost({idReviewPost}) {

    const {likeList} = useSelector( (state) => state.interactionReducer)
    const {commentList} = useSelector( (state) => state.interactionReducer)
    const [selectedPost, setSelectedPost] = useState(null);

    const [soLike, setSoLike] = useState(likeList?.length);
    const [soCmt, setSoCmt] = useState(commentList?.number);

    const dispatch = useDispatch();
    console.log(commentList);

    // useEffect(() => {
    //     dispatch(getListLikeBaiViet(idReviewPost))
    //     dispatch(getListCommentBaiViet(idReviewPost))
    //     if(likeList && commentList){
    //         setSoLike(likeList.length)
    //         setSoCmt(commentList.number)
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

    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');

    const handleClickOpen = (tinTuc) => {
    setSelectedPost(tinTuc);
    setOpen(true);
    };


    const handleClose = () => {
        setOpen(false);
    };

    console.log(soLike);
    console.log(soCmt);

    return(
    <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <FavoriteIcon />
        <Typography>{soLike}</Typography>
        </IconButton>
        <IconButton aria-label="comment">
        <CommentIcon onClick={() => handleClickOpen()}  />
        <Typography>{soCmt}</Typography>
        </IconButton>
        {/* <IconButton aria-label="share">
        <ShareIcon />
        <Typography>10</Typography>
        </IconButton> */}
        <SeeComment
            open={open}
            handleClose={handleClose}
            scroll={scroll}
            title={selectedPost?.title}
            description={selectedPost?.description}
        />
    </CardActions>
    );
}