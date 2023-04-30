import interactionApi from '../../api/interactionApi';
import {GET_LISTLIKE_REQUEST, 
  GET_LISTLIKE_SUCCESS, 
  GET_LISTLIKE_FAIL,
  GET_LISTCOMMENT_REQUEST,
  GET_LISTCOMMENT_SUCCESS,
  GET_LISTCOMMENT_FAIL,
  POST_LIKEUNLIKE_REQUEST,
  POST_LIKEUNLIKE_SUCCESS,
  POST_LIKEUNLIKE_FAIL,
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAIL

    } from "../../reducers/constants/Interaction"

export const getListLikeBaiViet = (articleId) => {
  return (dispatch) => {
    dispatch({
      type: GET_LISTLIKE_REQUEST
    })
    interactionApi.getAllLikeBaiViet(articleId)
      .then(result => {
       console.log("data danh sách like bài viết: ", result.data);
        dispatch({
          type: GET_LISTLIKE_SUCCESS,
          payload: { data: result.data.data }
        })
      })
      .catch(
        error => {
          dispatch({
            type: GET_LISTLIKE_FAIL,
            payload: { error: error.response?.data ? error.response.data : error.message, }
          })
        }
      )
  }
}

export const getListCommentBaiViet = (articleId) => {
    return (dispatch) => {
      dispatch({
        type: GET_LISTCOMMENT_REQUEST
      })
      interactionApi.getAllCommentBaiViet(articleId)
        .then(result => {
         console.log("data danh sách comment bài viết: ", result.data);
          dispatch({
            type: GET_LISTCOMMENT_SUCCESS,
            payload: { data: result.data.data }
          })
        })
        .catch(
          error => {
            dispatch({
              type: GET_LISTCOMMENT_FAIL,
              payload: { error: error.response?.data ? error.response.data : error.message, }
            })
          }
        )
    }
  }


export const postLikeUnlikeBaiViet = (data) => {
    return (dispatch) => {
      console.log(data);
        dispatch({
        type: POST_LIKEUNLIKE_REQUEST
        })
        interactionApi.postLikeVaHuyThichBaiViet(data)
        .then(result => {
            console.log("post like / unlike: ", result.data);
            dispatch({
            type: POST_LIKEUNLIKE_SUCCESS,
            payload: { data: result.data.data }
            })
        })
        .catch(
            error => {
            dispatch({
                type: POST_LIKEUNLIKE_FAIL,
                payload: { error: error.response?.data ? error.response.data : error.message, }
            })
            }
        )
    }
}


export const postCommentBaiViet = (data) => {
    return (dispatch) => {
        dispatch({
        type: POST_COMMENT_REQUEST
        })
        interactionApi.postThemComment(data)
        .then(result => {
            console.log("post comment: ", result.data);
            dispatch({
            type: POST_COMMENT_SUCCESS,
            payload: { data: result.data.data }
            })
        })
        .catch(
            error => {
            dispatch({
                type: POST_COMMENT_FAIL,
                payload: { error: error.response?.data ? error.response.data : error.message, }
            })
            }
        )
    }
}

