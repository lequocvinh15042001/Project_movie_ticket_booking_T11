
import billsApi from '../../api/billsApi';
import { ADD_BILL_FAIL, ADD_BILL_REQUEST, GET_BILL_LIST_REQUEST, GET_BILL_LIST_SUCCESS, GET_BILL_LIST_FAIL, RESET_BILL_LIST, UPDATE_BILL_REQUEST, UPDATE_BILL_SUCCESS, UPDATE_BILL_FAIL, ADD_BILL_SUCCESS, SET_IS_EXIST_BILL_MODIFIED, DELETE_BILL_REQUEST, DELETE_BILL_SUCCESS, DELETE_BILL_FAIL, GET_BILL_LIST_REQUEST_USER, GET_BILL_LIST_SUCCESS_USER, GET_BILL_LIST_FAIL_USER, GET_BILL_LIST_REQUEST_USER_DTT, GET_BILL_LIST_SUCCESS_USER_DTT, GET_BILL_LIST_FAIL_USER_DTT } from '../constants/Bill';

export const getBillsList = () => {
  return (dispatch) => {
    dispatch({
      type: GET_BILL_LIST_REQUEST
    })
    billsApi.getListBill()
      .then(result => {
        console.log(result.data);
        dispatch({
          type: GET_BILL_LIST_SUCCESS,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispatch({
            type: GET_BILL_LIST_FAIL,
            payload: { error: error.response?.data ? error.response.data : error.message, }
          })
        }
      )
  }
}

export const getBillsChuaThanhToan = () => {
  return (dispatch) => {
    dispatch({
      type: GET_BILL_LIST_REQUEST_USER
    })
    billsApi.getListBillChuThanhToan()
      .then(result => {
        console.log(result.data);
        dispatch({
          type: GET_BILL_LIST_SUCCESS_USER,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispatch({
            type: GET_BILL_LIST_FAIL_USER,
            payload: { error: error.response?.data ? error.response.data : error.message, }
          })
        }
      )
  }
}

export const getBillsDaThanhToan = () => {
  return (dispatch) => {
    dispatch({
      type: GET_BILL_LIST_REQUEST_USER_DTT
    })
    billsApi.getListBillDaThanhToan()
      .then(result => {
        console.log(result.data);
        dispatch({
          type: GET_BILL_LIST_SUCCESS_USER_DTT,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispatch({
            type: GET_BILL_LIST_FAIL_USER_DTT,
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
export const deleteBill = (bill) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_BILL_REQUEST
    })
    billsApi.deleteBill(bill)
      .then(result => {
        console.log(result);

        dispatch({
          type: DELETE_BILL_SUCCESS,
          payload: { data: result.data.data }
        })
      }
      )
      .catch(
        error => {
          dispatch({
            type: DELETE_BILL_FAIL,
            payload: { error: error.response?.data ? error.response.data : error.message, }
            // payload: "Delete fail!"
          })
        }
      )
  }
}

export const resetBillList = () => {
  return (dispatch) => {
    dispatch({
      type: RESET_BILL_LIST
    })
  }
}

// export const putUserChangePass = (newPassword, oldPassword) => {

//   return (dispatch) => {
//     console.log("truy???n v?? c???p nh???t pass: ", newPassword, oldPassword);

//     usersApi.editPassword(newPassword, oldPassword)
//       .then(result => {
//         // console.log("C???p nh???t pass th??nh c??ng: ", result);
//         Swal.fire({
//           position: "center",
//           icon: "success",
//           title: "Update Successfully",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       }
//       )
//       .catch(
//         error => {
//           // dispatch({
//           //   type: UPDATE_USER_FAIL,
//           //   payload: { error: error.response?.data ? error.response.data : error.message, }
//           // })
//           // console.log("C???p nh???t pass false");
//           Swal.fire({
//             position: "center",
//             icon: "error",
//             title: "Password was wrong",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         }
//       )
//   }
// }


export const putBillUpdate = (bill) => {

  return (dispatch) => {
    console.log("truy???n v?? c???p nh???t: ", bill);
    dispatch({
      type: UPDATE_BILL_REQUEST
    })
    billsApi.putEditBill(bill)
      .then(result => {
        console.log("C???p nh???t: ", result);
        dispatch({
          type: UPDATE_BILL_SUCCESS,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispatch({
            type: UPDATE_BILL_FAIL,
            payload: { error: error.response?.data ? error.response.data : error.message, }
          })
        }
      )
  }
}

export const postAddBill = (bill) => {
  return (dispatch) => {
    dispatch({
      type: ADD_BILL_REQUEST
    })
    billsApi.postAddEvent(bill)
      .then(result => {
        dispatch({
          type: ADD_BILL_SUCCESS,
          payload: { data: result.data }
        })
      })
      .catch(error => {
        dispatch({
          type: ADD_BILL_FAIL,
          // payload: { error: error.response?.data ? error.response.data : error.message, }
          payload: "Th??m l???i!"
        })
      })
  }
}

// //ch???nh l???i c??i type
// export const postAddBill = (bill) => {
//   return (dispatch) => {
//     dispatch({
//       type: ADD_EVENT_REQUEST
//     })
//     billsApi.postAddBill(bill)
//       .then(result => {
//         dispatch({
//           type: ADD_EVENT_SUCCESS,
//           payload: { data: result.data }
//         })
//       })
//       .catch(error => {
//         dispatch({
//           type: ADD_EVENT_FAIL,
//           // payload: { error: error.response?.data ? error.response.data : error.message, }
//           payload: "Th??m l???i!"
//         })
//       })
//   }
// }

// export const postAddStaff = (user) => {
//   return (dispatch) => {
//     // console.log("Truy???n staff m???i v?? api: ", user);
//     dispatch({
//       type: ADD_EVENT_REQUEST
//     })
//     usersApi.postThemNhanVien(user)
//       .then(result => {
//         dispatch({
//           type: ADD_EVENT_SUCCESS,
//           payload: { data: result.data }
//         })
//       })
//       .catch(error => {
//         dispatch({
//           type: ADD_EVENT_FAIL,
//           payload: { error: error.response?.data ? error.response.data : error.message, }
//           // payload: "Th??m l???i!"
//         })
//       })
//   }
// }

export const setStatusIsExistBillModified = (isExistBillModified) => {
  return (dispatch) => {
    dispatch({
      type: SET_IS_EXIST_BILL_MODIFIED,
      payload: { isExistBillModified }
    })
  }
}

// export const getInfoUser = () => {
//   return (dispatch) => {
//     dispatch({
//       type: GET_INFO_USER_REQUEST
//     })
//     usersApi.getThongTinTaiKhoan()
//       .then(result => {
//         console.log("getThongTinTaiKhoan: ", result.data);
//         dispatch({
//           type: GET_INFO_USER_SUCCESS,
//           payload: {
//             data: result.data,
//           }
//         })
//       }
//       )
//       .catch(
//         error => {
//           dispatch({
//             type: GET_INFO_USER_FAIL,
//             payload: {
//               error: error.response?.data ? error.response.data : error.message,
//             }
//           })
//         }
//       )
//   }
// }