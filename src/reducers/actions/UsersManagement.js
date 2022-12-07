import Swal from 'sweetalert2';
import usersApi from '../../api/usersApi';
import {
  GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAIL,
  DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL, RESET_USER_LIST,
  UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL,
  ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAIL,
  SET_IS_EXIST_USER_MODIFIED,
  GET_INFO_USER_REQUEST, GET_INFO_USER_SUCCESS, GET_INFO_USER_FAIL,
} from '../constants/UsersManagement';

export const getUsersList = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USER_LIST_REQUEST
    })
    usersApi.getDanhSachNguoiDung()
      .then(result => {
        console.log(result.data);
        dispatch({
          type: GET_USER_LIST_SUCCESS,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispatch({
            type: GET_USER_LIST_FAIL,
            payload: { error: error.response?.data ? error.response.data : error.message, }
          })
        }
      )
  }
}
// useEffect(() => {
//   if (successUpdateUser) {
//     Swal.fire({
//       position: "center",
//       icon: "success",
//       title: "Update Successfully",
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   }
// }, [successUpdateUser]);
export const deleteUser = (taiKhoanUser) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_USER_REQUEST
    })
    usersApi.deleteUser(taiKhoanUser)
      .then(result => {
        console.log(result);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Delete Successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        dispatch({
          type: DELETE_USER_SUCCESS,
          payload: { data: result.data.data }
        })
      }
      )
      .catch(
        error => {
          dispatch({
            type: DELETE_USER_FAIL,
            payload: { error: error.response?.data ? error.response.data : error.message, }
            // payload: "Delete fail!"
          })
        }
      )
  }
}

export const resetUserList = () => {
  return (dispatch) => {
    dispatch({
      type: RESET_USER_LIST
    })
  }
}

export const putUserUpdate = (user) => {

  return (dispatch) => {
    console.log("truyền vô cập nhật: ", user);
    dispatch({
      type: UPDATE_USER_REQUEST
    })
    usersApi.editTaiKhoan(user)
      .then(result => {
        console.log("Cập nhật: ", result);
        dispatch({
          type: UPDATE_USER_SUCCESS,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispatch({
            type: UPDATE_USER_FAIL,
            payload: { error: error.response?.data ? error.response.data : error.message, }
          })
        }
      )
  }
}

export const postAddUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: ADD_USER_REQUEST
    })
    usersApi.postThemNguoiDung(user)
      .then(result => {
        dispatch({
          type: ADD_USER_SUCCESS,
          payload: { data: result.data }
        })
      })
      .catch(error => {
        dispatch({
          type: ADD_USER_FAIL,
          // payload: { error: error.response?.data ? error.response.data : error.message, }
          payload: "Thêm lỗi!"
        })
      })
  }
}

export const postAddStaff = (user) => {
  return (dispatch) => {
    console.log("Truyền staff mới vô api: ", user);
    dispatch({
      type: ADD_USER_REQUEST
    })
    usersApi.postThemNhanVien(user)
      .then(result => {
        dispatch({
          type: ADD_USER_SUCCESS,
          payload: { data: result.data }
        })
      })
      .catch(error => {
        dispatch({
          type: ADD_USER_FAIL,
          payload: { error: error.response?.data ? error.response.data : error.message, }
          // payload: "Thêm lỗi!"
        })
      })
  }
}

export const setStatusIsExistUserModified = (isExistUserModified) => {
  return (dispatch) => {
    dispatch({
      type: SET_IS_EXIST_USER_MODIFIED,
      payload: { isExistUserModified }
    })
  }
}

export const getInfoUser = () => {
  return (dispatch) => {
    dispatch({
      type: GET_INFO_USER_REQUEST
    })
    usersApi.getThongTinTaiKhoan()
      .then(result => {
        console.log("getThongTinTaiKhoan: ", result.data);
        dispatch({
          type: GET_INFO_USER_SUCCESS,
          payload: {
            data: result.data,
          }
        })
      }
      )
      .catch(
        error => {
          dispatch({
            type: GET_INFO_USER_FAIL,
            payload: {
              error: error.response?.data ? error.response.data : error.message,
            }
          })
        }
      )
  }
}