import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { getListCommentBaiViet, putDeleteComment } from '../reducers/actions/Interaction';
import interactionApi from '../api/interactionApi';

const options = [
  'Chỉnh sửa',
  'Xóa',
];

const ITEM_HEIGHT = 48;

export default function DeleteOrEdit(data) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const {commentList} = useSelector((state) => state.interactionReducer)


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    dispatch(getListCommentBaiViet(data.idReviewPost))
  },[data.idReviewPost])

// console.log(data.setCommentListDisplay);
  const handleDelete = () => {
    console.log(data.id);
    interactionApi.putDeleteComment(data.id)
      .then(result => {
          console.log("Delete comment: ", result.data);

          interactionApi.getAllCommentBaiViet(data.idReviewPost)
          .then(result => {
            data.setCommentList(result.data)
            // console.log(result.data);
          })
          .catch(
            console.log("lỗi")
          )
      })
      .catch(
            console.log("lỗi xóa")
      )
    // dispatch(putDeleteComment(id));
    // dispatch(getListCommentBaiViet(data.idReviewPost))
    // data.setCommentListDisplay(commentList.content)
    handleClose();
    setAnchorEl(null);
  };
  console.log(commentList);

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          Chỉnh sửa
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          Xóa
        </MenuItem>
      </Menu>
    </div>
  );
}