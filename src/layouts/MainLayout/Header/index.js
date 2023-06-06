import React, { useState, useEffect } from 'react';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSelector, useDispatch } from 'react-redux';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { useHistory, useLocation } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import { scroller } from 'react-scroll'

import { LOGOUT } from '../../../reducers/constants/Auth';
import useStyles from './style'
import { FAKE_AVATAR } from '../../../constants/config';
import { LOADING_BACKTO_HOME } from '../../../reducers/constants/Lazy';
import { getMovieList } from '../../../reducers/actions/Movie';
import { getTheaters } from '../../../reducers/actions/Theater';
import Logo from "./../../../assets/LeafSVG";
// import Search from '../Search/Search';
import { getInfoUser } from '../../../reducers/actions/UsersManagement';

import Swal from "sweetalert2";
import SearchBar from '../SearchBar';




const headMenu = [
    { nameLink: 'Tất cả Phim', id: "lichchieu" }, 
    { nameLink: 'Đặt vé', id: "schedule" }, 
    // { nameLink: 'Branch Theaters', id: "cumrap" }, 
    { nameLink: 'Bài viết và Sự kiện', id: "tintuc" }, 

    // { nameLink: 'Đăng ký Content Creator', id: "ungdung" }
  ]

export default function Header() {
  const { currentUser } = useSelector((state) => state.authReducer);
  // console.log("header: ",currentUser);
  const { successInfoUser, loadingInfoUser } = useSelector(
    (state) => state.usersManagementReducer
  );
  // const { successInfoUser } = useSelector((state) => state.usersManagementReducer);
  // console.log("header: ", successInfoUser);
  const { isLoadingBackToHome } = useSelector((state) => state.lazyReducer);
  const dispatch = useDispatch();
  let location = useLocation();
  const history = useHistory();
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles({ isDesktop, openDrawer });

  // nếu đang mở drawer mà chuyển sang màn hình lớn thì phải tự đóng lại
  useEffect(() => {
    if (isDesktop) {
      if (openDrawer) {
        setOpenDrawer(false)
      }
    }
  }, [isDesktop])

  useEffect(() => { // clicklink > push to home > scrollTo after loading
    if (!isLoadingBackToHome) {
      setTimeout(() => {
        scroller.scrollTo(location.state, {
          duration: 800,
          smooth: 'easeInOutQuart'
        })
      }, 200);
    }
  }, [isLoadingBackToHome])

  const handleLogout = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Đăng xuất!',
      text: "Chắc chắn bạn muốn đăng xuất?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Okay, ngay bây giờ!',
      cancelButtonText: 'Không, dừng lại!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        setOpenDrawer(false)
        dispatch({ type: LOGOUT })
        swalWithBootstrapButtons.fire(
          'Đã đăng xuất!',
          'DONE.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Đã dừng',
          'Không đăng xuất!',
          'error'
        )
      }
    })
  }
  const handleLogin = () => {
    history.push("/dangnhap", location.pathname) // truyền kèm location.pathname để đăng nhập xong quay lại
  }
  const handleRegister = () => {
    history.push("/dangky", location.pathname)
  }
  const handleClickLogo = () => {
    if (location.pathname === "/") {
      dispatch(getMovieList())
      dispatch(getTheaters())
      return
    }
    dispatch({ type: LOADING_BACKTO_HOME })
    setTimeout(() => {
      history.push("/", "")
    }, 50);
  }
  const handleClickLink = (id) => {
    if(id === "schedule")
    {
      history.push("/schedule")
    }
    else {
        setOpenDrawer(false)
        if (location.pathname === "/") {
          scroller.scrollTo(id, {
            duration: 1200,
            smooth: 'easeInOutQuart'
          })
        } else {
          dispatch({ type: LOADING_BACKTO_HOME })
          setTimeout(() => {
            history.push("/", id)
          }, 50);
        }
    }
  }
  // const handleClickLink2 = () => {
  //   history.push("/schedule")
  // }

  const handleUser = () => {
    history.push("/taikhoan")
    setOpenDrawer(false);
  }

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };


  return (

    <div className={classes.root}>

      {/* START HEADER */}
      <AppBar position="fixed" classes={{ root: clsx(classes.appBar, { [classes.appBarShift]: openDrawer, }), }} color='default' >

        <Toolbar className={classes.spaceBetween}>

          {/* logo */}
          <div className={classes.logo} onClick={handleClickLogo}>
            <Logo fillColor={"rgb(250, 82, 56)"}/>
            {" "}
            <span>GOLDENNEW TICKET</span>
          </div>
          {/* Tìm kiếm */}
          {/* <Search /> */}
          {/* Tìm kiếm */}
          <div className={classes.linkTobody}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              {/* <span className={classes.link} onClick={() => handleClickLink2()}>Đặt vé</span> */}
              {headMenu.map((link) => (
                <span key={link.id} className={classes.link} onClick={() => handleClickLink(link.id)}>{link.nameLink}</span>
              ))}

              <SearchBar/>

            </Grid>
          </div>
          {/* <div>
            <Search />
          </div> */}
          {/* user account */}
          <div className={classes.user}>
            {currentUser ?
              <List disablePadding className={classes.auth}>
                <ListItem button classes={{ root: clsx(classes.itemAuth, classes.divide) }} onClick={handleUser}>
                  <ListItemIcon classes={{ root: classes.icon }}>
                    <Avatar alt="avatar" className={classes.avatar} src={currentUser?.data?.image ? currentUser?.data?.image : successInfoUser?.data?.image? successInfoUser?.data?.image: FAKE_AVATAR} />
                  </ListItemIcon>
                  <ListItemText primary={currentUser?.data?.username} />
                </ListItem>
                <ListItem button classes={{ root: classes.itemAuth }} onClick={handleLogout}>
                  <ListItemText primary="Đăng xuất" />
                </ListItem>
              </List>
              :
              <List disablePadding className={classes.auth}>
                <ListItem button classes={{ root: clsx(classes.itemAuth, classes.divide) }} onClick={handleLogin}>
                  <ListItemIcon classes={{ root: classes.icon }}>
                    <AccountCircleIcon fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="Đăng nhập" />
                </ListItem>
                <ListItem button classes={{ root: classes.itemAuth }} onClick={handleRegister}>
                  <ListItemText primary="Đăng ký" />
                </ListItem>
              </List>
            }
          </div>

          {/* menuIcon  */}
          <div className={classes.menuIcon}>
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerOpen}
              classes={{ root: classes.listItem }}
            >
              <MenuIcon />
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>

      {/* content open menu*/}
      <Drawer
        className={classes.drawer}
        anchor="right"
        onClose={handleDrawerClose}
        open={openDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        transitionDuration={300}
      >
        <div className={classes.drawerHeader}>
          {currentUser ?
            <ListItem button classes={{ root: clsx(classes.itemAuth, classes.divide, classes.hover) }} onClick={handleUser}>
              <ListItemIcon classes={{ root: classes.icon }}>
                <Avatar alt="avatar" className={classes.avatar} src={currentUser?.data?.image ? currentUser?.data?.image : successInfoUser?.data?.image? successInfoUser?.data?.image: FAKE_AVATAR} />
              </ListItemIcon>
              <ListItemText className={classes.username} primary={currentUser?.data?.username} />
            </ListItem>
            :
            <ListItem button classes={{ root: classes.listItem }} onClick={handleLogin}>
              <ListItemIcon classes={{ root: classes.icon }}>
                <AccountCircleIcon fontSize="large" />
              </ListItemIcon>
              <span className={classes.link} style={{ fontWeight: 500 }}>Đăng nhập</span>
            </ListItem>
          }
          <IconButton classes={{ root: classes.listItem }} onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <List>
          {headMenu.map((link) => (
            <span key={link.id} className={classes.itemMenu} onClick={() => handleClickLink(link.id)} >{link.nameLink}</span>
          ))}

          {currentUser ?
            <span className={classes.itemMenu} onClick={handleLogout}>Đăng xuất</span>
            :
            <span className={classes.itemMenu} onClick={handleRegister}>Đăng ký</span>
          }
        </List>
      </Drawer>
    </div>
  );
}
