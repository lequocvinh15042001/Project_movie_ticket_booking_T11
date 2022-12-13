import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import CircularProgress from "@material-ui/core/CircularProgress";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import { useHistory } from "react-router-dom";
import ShowtimeUser from "./../UserProfile/ShowtimeUser/index"


import { FAKE_AVATAR } from "../../constants/config";
import {
  getInfoUser,
  putUserChangePass,
  putUserUpdate,
  resetUserList,
} from "../../reducers/actions/UsersManagement";
import { getComment } from "../../reducers/actions/MovieDetail";
import usersApi from "../../api/usersApi";
import { getAllTicket } from "../../reducers/actions/Ticket";
import formatDate from "../../utilities/formatDate";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "transparent",
    color: "black",
    boxShadow: "none",
    "& .MuiTabs-indicator": {
      height: 0, // ẩn gạch dưới
    },
  },
  field: {
    maxWidth: 500,
    paddingRight: 16,
    paddingLeft: 16,
  },
  password: {
    position: "relative",
  },
  eye: {
    position: "absolute",
    top: 31,
    right: 9,
    cursor: "pointer",
  },
  tabButton: {
    opacity: 1,
    color: "#000",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    "& > span": {
      transition: "all 0.2s",
      "&:hover": {
        fontSize: "15px",
      },
    },
  },

  tabSelected: {
    color: "#fa5238",
  },
  td: {
    "& td": {
      whiteSpace: "nowrap",
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function TabPanel(props) {
  const { children, value, index, isDesktop, ...other } = props;
  return (
    <div hidden={value !== index} {...other}>
      {value === index && (
        <Box style={{ padding: isDesktop ? "24px" : "24px 0px 0px" }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function Index() {
  const history = useHistory();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const classes = useStyles();
  const dispatch = useDispatch();
  const { successInfoUser, loadingInfoUser } = useSelector(
    (state) => state.usersManagementReducer
  );
  console.log("successInfoUser: ", successInfoUser);
  const { currentUser } = useSelector((state) => state.authReducer);
  console.log(currentUser);

  const { commentList } = useSelector((state) => state.movieDetailReducer);
  const { ticketList } = useSelector((state) => state.ticketReducer);
  const movieList = useSelector((state) => state.movieReducer.movieList);


  console.log("Vé đã đăt",ticketList);

  const [dataShort, setdataShort] = useState({
    ticket: 0,
    posts: 0,
    likePosts: 0,
    total: 0,
  });
  const { successUpdateUser, errorUpdateUser, loadingUpdateUser } = useSelector(
    (state) => state.usersManagementReducer
  );

  // console.log(loadingUpdateUser);

  const [value, setValue] = React.useState(0);
  const [typePassword, settypePassword] = useState("password");
  const [typePassword2, settypePassword2] = useState("password");
  const [ticket, setTicket] = useState([]);
  const [image, setImage] = useState()
  const [oldPass, setOldPass] = useState()
  const [newPass, setNewPass] = useState()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    // dispatch(getInfoUser({ username: currentUser?.username }));
    dispatch(getInfoUser());

    // usersApi.getTicket(successInfoUser.data.id)
    // .then((res) => {
    //   setTicket(res)
    //   console.log(ticket);
    // })
    // .catch((err) =>{
    //   console.log(err);
    // })
    dispatch(getAllTicket(successInfoUser?.data?.id))
    dispatch(getComment());

    return () => dispatch(resetUserList());
  }, []);

  useEffect(() => {
    if (commentList) {
      const { posts, likePosts } = commentList.reduce(
        (obj, post) => {
          let posts = obj.posts;
          let likePosts = obj.likePosts;
          if (post.avtId === successInfoUser?.data?.username) {
            posts++;
            likePosts += post.userLikeThisComment.length;
          }
          return { ...obj, posts, likePosts };
        },
        { posts: 0, likePosts: 0 }
      );
      setdataShort((data) => ({ ...data, posts, likePosts }));
    }
    if (successInfoUser) {
      const ticket = successInfoUser?.thongTinDatVe?.length;
      const total = successInfoUser?.thongTinDatVe?.reduce((total, ticket) => {
        return total + ticket.danhSachGhe.length * ticket.giaVe;
      }, 0);
      setdataShort((data) => ({ ...data, ticket, total }));
    }
  }, [commentList, successInfoUser]);
  useEffect(() => {
    if (successUpdateUser) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Update Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [successUpdateUser]);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const updateUserSchema = yup.object().shape({
    // username: yup.string().required("*Username not be empty !"),
    // password: yup.string().required("*Password not be empty !"),
    // email: yup
    //   .string()
    //   .required("*Email not be empty !")
    //   .email("* Email invalid! "),
    // soDt: yup
    //   .string()
    //   .required("*Số điện thoại không được bỏ trống !")
    //   .matches(phoneRegExp, "Số điện thoại không hợp lệ!"),
    name: yup.string().required("*Name not be empty !"),
  });

  const updateUserSchemaPassword = yup.object().shape({
    // username: yup.string().required("*Username not be empty !"),
    oldpassword: yup.string().required("*Password not be empty !"),
    newpassword: yup.string().required("*Password not be empty !"),
    // email: yup
    //   .string()
    //   .required("*Email not be empty !")
    //   .email("* Email invalid! "),
    // soDt: yup
    //   .string()
    //   .required("*Số điện thoại không được bỏ trống !")
    //   .matches(phoneRegExp, "Số điện thoại không hợp lệ!"),
    // name: yup.string().required("*Name not be empty !"),
  });

  const handleSubmit = (user) => {
    console.log("Thông tin cập nhật: ", user);
    if (loadingUpdateUser) {
      console.log("Thoát");
      return;
    }
    dispatch(putUserUpdate(user));
  };

  const handleSubmitChangePass = (pass) => {
    console.log(pass);
    if (loadingUpdateUser) {
      console.log("Thoát");
      return;
    }
    dispatch(putUserChangePass(pass.newpassword, pass.oldpassword));
  };

  const handleToggleHidePassword = () => {
    if (typePassword === "password") {
      settypePassword("text");
    } else {
      settypePassword("password");
    }
  };
  const handleToggleHidePassword2 = () => {
    if (typePassword2 === "password") {
      settypePassword2("text");
    } else {
      settypePassword2("password");
    }
  };

  const handleChangePassword = (o,n) =>{
    console.log(o,n);
  };

  const getIdSeat = (danhSachGhe) => {
    return danhSachGhe?.reduce((listSeat, seat) => {
        return [...listSeat, seat.name];
      }, [])
      .join(", ");
  };

  useEffect(() => {
    usersApi.getChiTietTaiKhoan(successInfoUser?.data?.username)
    .then((response) => {
      console.log("Chi tiết USER: ",response);
      setImage(response.data?.data?.image)
    })
    .catch((err) => {
      console.log(err);
      return;
    })
  }, []);

  return (
    <div className="bootstrap snippet mb-5 mx-4" style={{"backgroundColor":"black"}}>
      <br />
      <div className="row">
        <div className="col-sm-2">
          <div className="text-center">
            <img
              src={FAKE_AVATAR}
              className={`avatar rounded-circle img-thumbnail ${
                isDesktop ? "w-60" : "w-30"
              }`}
              alt="avatar"
            />
            <h1 className="my-2" style={{"color":"white"}}>{successInfoUser?.data?.username}</h1>
          </div>
          {successInfoUser?.data?.role === "[ROLE_ADMIN]" && (
            <div className="text-center mb-2">
              <Fab
                variant="extended"
                color="primary"
                onClick={() => history.push("/admin/movies")}
              >
                <NavigationIcon className={classes.extendedIcon} />
                Go to Admin Page
              </Fab>
            </div>
          )}
          {successInfoUser?.data?.role === "[ROLE_STAFF]" && (
            <div className="text-center mb-2">
              <Fab
                variant="extended"
                color="primary"
                onClick={() => history.push("/staff/movies")}
              >
                <NavigationIcon className={classes.extendedIcon} />
                Go to Staff Page
              </Fab>
            </div>
          )}
          {/* <ul className="list-group">
            <li className="list-group-item text-muted">Activity</li>
            <li className="list-group-item text-right">
              <span className="float-left">
                <strong>Comment</strong>
              </span>
              {dataShort.posts}
            </li>
            <li className="list-group-item text-right">
              <span className="float-left">
                <strong>Comment be liked </strong>
              </span>
              {dataShort.likePosts}
            </li>
            <li className="list-group-item text-right">
              <span className="float-left">
                <strong>Count</strong>
              </span>
              {dataShort.ticket}
            </li>
            <li className="list-group-item text-right">
              <span className="float-left">
                <strong>Total $</strong>
              </span>
              {dataShort.total}
            </li>
          </ul> */}
        </div>
        <div className={`col-sm-10 py-3 px-0`}>
          <AppBar className={classes.appBar} position="static" style={{backgroundColor:"orange", color:"white"}}>
            <Tabs value={value} onChange={handleChange} centered={!isDesktop}>
              <Tab
                disableRipple
                classes={{
                  root: classes.tabButton,
                  selected: classes.tabSelected,
                }}
                label="Profile"
              />
              <Tab
                disableRipple
                classes={{
                  root: classes.tabButton,
                  selected: classes.tabSelected,
                }}
                label="History"
              />
              <Tab
                disableRipple
                classes={{
                  root: classes.tabButton,
                  selected: classes.tabSelected,
                }}
                label="ChangePassword"
              />
            </Tabs>
          </AppBar>
          {/* -------------caapj nhật thong tin---------- */}
          <TabPanel value={value} index={0}>
            <Formik
              initialValues={{
                username: successInfoUser?.data?.username ?? "",
                password: successInfoUser?.data?.password ?? "",
                email: successInfoUser?.data?.email ?? "",
                id: successInfoUser?.data?.id ?? "",
                name: successInfoUser?.data?.name ?? "",
                image: successInfoUser?.data?.image ?? "",
              }}
              enableReinitialize // cho phép cập nhật giá trị initialValues
              validationSchema={updateUserSchema}
              onSubmit={handleSubmit}
            >
              {(props) => (
                <Form className={`${classes.field}`}>
                  {/* <div className="form-group"  style={{"color":"white"}}>
                    <label>Id User&nbsp;</label>
                    <ErrorMessage
                      name="id"
                      render={(msg) => (
                        <span className="text-danger">{msg}</span>
                      )}
                    />
                    <Field
                      disabled
                      name="id"
                      type="text"
                      className="form-control"
                      onChange={props.handleChange}
                    />
                  </div> */}

                  <div className="form-group" style={{"color":"white"}}>
                    <label>Account&nbsp;</label>
                    <ErrorMessage
                      name="username"
                      render={(msg) => (
                        <span className="text-danger">{msg}</span>
                      )}
                    />
                    <Field
                      disabled
                      name="username"
                      type="text"
                      className="form-control"
                      onChange={props.handleChange}
                    />
                  </div>
                  {/* <div className={`form-group ${classes.password}`}>
                    <label>Password&nbsp;</label>
                    <ErrorMessage
                      name="password"
                      render={(msg) => (
                        <span className="text-danger">{msg}</span>
                      )}
                    />
                    <Field
                      name="password"
                      type={typePassword}
                      className="form-control"
                      onChange={props.handleChange}
                    />
                    <div
                      className={classes.eye}
                      onClick={handleToggleHidePassword}
                    >
                      {typePassword !== "password" ? (
                        <i className="fa fa-eye-slash"></i>
                      ) : (
                        <i className="fa fa-eye"></i>
                      )}
                    </div>
                  </div> */}
                  <div className="form-group"  style={{"color":"white"}}>
                    <label>Full name&nbsp;</label>
                    <ErrorMessage
                      name="name"
                      render={(msg) => (
                        <span className="text-danger">{msg}</span>
                      )}
                    />
                    <Field
                      name="name"
                      type="text"
                      className="form-control"
                      onChange={props.handleChange}
                    />
                  </div>

                  <div className="form-group"  style={{"color":"white"}}>
                    <label>Email&nbsp;</label>
                    <ErrorMessage
                      name="email"
                      render={(msg) => (
                        <span className="text-danger">{msg}</span>
                      )}
                    />
                    <Field
                       disabled
                      name="email"
                      type="email"
                      className="form-control"
                      onChange={props.handleChange}
                    />
                  </div>
                  {/* <div className="form-group">
                    <label>Số điện thoại&nbsp;</label>
                    <ErrorMessage
                      name="soDt"
                      render={(msg) => (
                        <span className="text-danger">{msg}</span>
                      )}
                    />
                    <Field
                      name="soDt"
                      type="text"
                      className="form-control"
                      onChange={props.handleChange}
                    />
                  </div> */}
                  <div className="text-left">
                    <button
                      type="submit"
                      // type="button"
                      // onClick={() => handleSubmit()}
                      className="btn btn-danger"
                      disable={loadingUpdateUser.toString()}
                    >
                      Update
                    </button>
                    {errorUpdateUser && (
                      <div className="alert alert-danger">
                        <span>{errorUpdateUser}</span>
                      </div>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </TabPanel>

          {/* này bên cái bảng kia */}
          <TabPanel
            value={value}
            index={1}
            style={{ padding: isDesktop ? "0px 0px" : "0px 16px", backgroundColor:"white", borderRadius: "5px"}}
            isDesktop={isDesktop}
          >
            <div className="table-responsive">
              <table className="table table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Film</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Date Booking</th>
                    <th scope="col">Branch Theater</th>
                    <th scope="col">Code Ticket</th>
                    <th scope="col">Seat</th>
                    {/* <th scope="col">Cost(vnđ)</th> */}
                    <th scope="col">Total(vnđ)</th>
                    <th scope="col">QR Code</th>
                  </tr>
                </thead>
                <tbody>
                  {ticketList?.map((sticket, i) => (
                      <tr key={sticket.id} className={classes.td}>
                        <th scope="row">{i + 1}</th>
                        <td>{sticket?.schedule?.movie?.name}</td>
                        <td>{sticket?.schedule?.movie?.duration}min</td>
                        <td>
                          {new Date(sticket?.bill?.createdTime).toLocaleDateString()},{" "}
                          {new Date(sticket?.bill?.createdTime).toLocaleTimeString(
                            "en-US",
                            { hour: "2-digit", minute: "2-digit" }
                          )}
                        </td>
                        <td>
                          {sticket?.schedule?.room?.name},{" "}
                          {sticket?.schedule?.branch?.name}
          
                          {/* {sticket?.schedule?.branch?.address} */}
                        </td>
                        <td>{sticket?.id}</td>
                        {/* <td>{getIdSeat(sticket.seat)}</td> */}
                        <td>{sticket?.seat?.name}</td>
                        <td>
                          {new Intl.NumberFormat("it-IT", {
                            style: "decimal",
                          }).format(sticket?.schedule?.price)}
                        </td>
                        <td>
                          <img
                          // src={sticket?.qrImageURL}
                          style={{width:50, height:50}}
                          src="https://www.1check.vn/qrcodegen/qr.png"
                          alt="QR code"
                          >
                          </img>
                        </td>
                        {/* <td>
                          {new Intl.NumberFormat("it-IT", {
                            style: "decimal",
                          }).format(sticket?.schedule?.price)}
                        </td> */}
                      </tr>
                    ))
                    .reverse()}
                </tbody>
              </table>
            </div>
          </TabPanel>

          {/* Đổi mật khẩu */}
          <TabPanel value={value} index={2}>
            <Formik
              initialValues={{
                // username: successInfoUser?.username ?? "",
                oldpassword: "",
                newpassword: "",
                // email: successInfoUser?.email ?? "",
                // soDt: successInfoUser?.soDT ?? "",
                // maNhom: "GP09",
                // maLoaiNguoiDung: "KhachHang",
                // name: successInfoUser?.name ?? "",
              }}
              enableReinitialize // cho phép cập nhật giá trị initialValues
              validationSchema={updateUserSchemaPassword}
              onSubmit={handleSubmitChangePass}
            >
              {(props) => (
                <Form className={`${classes.field}`}>
                  <div className={`form-group ${classes.password}`}  style={{"color":"white"}}>
                    <label>Old Password&nbsp;</label>
                    <ErrorMessage
                      name="oldpassword"
                      render={(msg) => (
                        <span className="text-danger">{msg}</span>
                      )}
                    />
                    <Field
                      name="oldpassword"
                      type={typePassword}
                      className="form-control"
                      onChange={props.handleChange}
                      // value={this.props.values.oldpassword}
                    />
                    <div
                      className={classes.eye}
                      onClick={handleToggleHidePassword}
                    >
                      {typePassword !== "password" ? (
                        <i className="fa fa-eye-slash" style={{"color":"black"}}></i>
                      ) : (
                        <i className="fa fa-eye" style={{"color":"black"}}></i>
                      )}
                    </div>
                  </div>
                  <div className={`form-group ${classes.password}`}  style={{"color":"white"}}>
                    <label>New Password&nbsp;</label>
                    <ErrorMessage
                      name="newpassword"
                      render={(msg) => (
                        <span className="text-danger">{msg}</span>
                      )}
                    />
                    <Field
                      name="newpassword"
                      type={typePassword2}
                      className="form-control"
                      onChange={props.handleChange}
                      // value={value.newpassword}
                    />
                    <div
                      className={classes.eye}
                      onClick={handleToggleHidePassword2}
                    >
                      {typePassword2 !== "password" ? (
                        <i className="fa fa-eye-slash" style={{"color":"black"}}></i>
                      ) : (
                        <i className="fa fa-eye" style={{"color":"black"}}></i>
                      )}
                    </div>
                  </div>
                  <div className="text-left">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disable={loadingUpdateUser.toString()}
                      // onClick={(e) => {handleChangePassword(value.oldpassword, value.newpassword)}}
                    >
                      Change
                    </button>
                    {errorUpdateUser && (
                      <div className="alert alert-danger">
                        <span>{errorUpdateUser}</span>
                      </div>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </TabPanel>
        </div>
      </div>
      {loadingInfoUser && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            display: "flex",
            backgroundColor: "rgb(255 255 255 / 67%)",
            zIndex: 1000,
          }}
        >
          <CircularProgress style={{ margin: "auto" }} />
        </div>
      )}
      <ShowtimeUser />
    </div>
  );
}
