
import React, { useEffect, useState } from 'react';

import { SnackbarProvider } from 'notistack';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useDispatch, useSelector } from "react-redux";

import NavBar from './NavBar';
import TopBar from './TopBar';
import usersApi from '../../api/usersApi';
import { GET_INFO_USER_FAIL, GET_INFO_USER_REQUEST, GET_INFO_USER_SUCCESS } from '../../reducers/constants/UsersManagement';

export default function AdminLayout(props) {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.authReducer);
  // const { currentUser } = useSelector((state) => state.usersManagementReducer);
  console.log(currentUser);
  const [userAdmin, setUserAdmin]= useState();
  // if (currentUser?.maLoaiNguoiDung !== "QuanTri") { // nếu không phải tài khoản quản trị thì ẩn đi giao diện AdminLayout, vẫn truyền vào children để hiện thông báo trong children
  //   return <>{props.children}</>
  // }

  useEffect(() => {
    dispatch({
      type: GET_INFO_USER_REQUEST
    })
    usersApi.getThongTinTaiKhoan()
      .then(result => {
        console.log("getThongTinTaiKhoan: ", result);
        setUserAdmin(result.data.data)
        dispatch({
          type: GET_INFO_USER_SUCCESS,
          payload: {
            data: result.data.data,
          }
        })
      }
      )
      .catch(
        error => {
          dispatch({
            type: GET_INFO_USER_FAIL,
            payload: {
              error: error.response?.data?.data ? error.response.data?.data : error.message,
            }
          })
        }
      )
  },[])

  console.log(userAdmin);
  // currentUser = userAdmin;
  if (userAdmin?.role === "[ROLE_ADMIN]") { // nếu không phải tài khoản quản trị thì ẩn đi giao diện AdminLayout, vẫn truyền vào children để hiện thông báo trong children
    return <>{props.children}</>
  }
  return (
    // package notistack: popup thông báo nhỏ gọn
    <SnackbarProvider maxSnack={3}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <div className="row">
        <div style={{ width: 255 }}>
          {/* đây là phần NavBar nằm bên trái, có thể đóng mở khi màn hình nhỏ */}
          <NavBar
            onMobileClose={() => setMobileNavOpen(false)}
            openMobile={isMobileNavOpen}
          />
        </div>
        <div style={{ width: isMobile ? "100%" : "calc(100% - 255px)" }}>
          {/* đây là nội dung chính: UserManagement, MoviesManagement, ReateShowtime */}
          {props.children}
        </div>
      </div>
    </SnackbarProvider>
  )
}

