import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import {logoLogin} from '../../assets/LeafSVG'
import logoTix from "../Register/logo/logoTix.png";
import { login, resetErrorLoginRegister } from "../../reducers/actions/Auth";
import { LOADING_BACKTO_HOME } from "../../reducers/constants/Lazy";

const useStyles = makeStyles((theme) => ({
  eye: {
    position: "absolute",
    top: 32,
    right: 9,
    cursor: "pointer",
    color: "#000",
  },
  logoTix: {
    width: "209px",
    marginBottom: "13px",
    cursor: "pointer",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  text: {
    textAlign: "center",
    fontSize:"3rem",
    marginBottom: "30px",
  },
}));


export default function Login() {
  const { currentUser, errorLogin } = useSelector((state) => state.authReducer);
  let location = useLocation();

  const dispatch = useDispatch();
  const history = useHistory();

  const [typePassword, settypePassword] = useState("password");
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    // đăng nhập thành công thì quay về trang trước đó
    if (currentUser) {
      // if (location.state === "/") {
      //   // nếu trang trước đó là "/" thì phải hiện loading do trang home mất nhiều thời gian tải
      //   dispatch({ type: LOADING_BACKTO_HOME });
      //   setTimeout(() => {
      //     history.push("/admin/movies");
      //   }, 50);
      //   return undefined;
      // }
      // history.push(location.state);
      history.push("/staff/movies");
    }
  }, [currentUser]);
  useEffect(() => {
    return () => {
      dispatch(resetErrorLoginRegister());
    };
  }, []);

  const signinUserSchema = yup.object().shape({
    usernameOrEmail: yup.string().required("*Username Or Email not be empty !"),
    password: yup.string().required("*Password not be empty !"),
  });


  const handleSubmit = (user) => {
    // console.log('người dùng nhập user',user);
    dispatch(login(user));
  };

  const handleHold = () => {
    if (!isDesktop) {
      return;
    }
    settypePassword("text");
  };
  const handleRelease = () => {
    if (!isDesktop) {
      return;
    }
    settypePassword("password");
  };
  const handleShowPassword = () => {
    if (isDesktop) {
      return;
    }
    if (typePassword === "password") {
      settypePassword("text");
    } else {
      settypePassword("password");
    }
  };

  return (
    <div className="text-light" style={{ padding: "60px 32px 30px" }}>
      <div className="container">
        {/* <logoLogin className={classes.logoTix} /> */}
        <p className={classes.text}>
          STAFF
        </p>
      </div>
      <div>
        <Formik
          initialValues={{
            usernameOrEmail: "",
            password: "",
          }}
          validationSchema={signinUserSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="col-sm-10 mx-auto">
              <div className="form-group position-relative">
                <label>Username Or Email&nbsp;</label>
                <ErrorMessage
                  name="usernameOrEmail"
                  render={(msg) => <small className="text-danger">{msg}</small>}
                />
                <Field type="text" className="form-control" name="usernameOrEmail" />
              </div>

              <div className="form-group position-relative">
                <label>Password&nbsp;</label>
                <ErrorMessage
                  name="password"
                  render={(msg) => <small className="text-danger">{msg}</small>}
                />
                <Field
                  type={typePassword}
                  className="form-control"
                  name="password"
                />
                <div
                  className={classes.eye}
                  onMouseDown={handleHold}
                  onMouseUp={handleRelease}
                  onClick={handleShowPassword}
                >
                  {typePassword === "password" ? (
                    <i
                      className={isDesktop ? "fa fa-eye-slash" : "fa fa-eye"}
                    ></i>
                  ) : (
                    <i
                      className={isDesktop ? "fa fa-eye" : "fa fa-eye-slash"}
                    ></i>
                  )}
                </div>
              </div>
              <button
                style={{
                  backgroundColor: "#3E63b6",
                  borderColor: "#3E63b6",
                  cursor: "pointer",
                }}
                disable={errorLogin?.toString()}
                type="submit"
                className="btn btn-success mt-3 container"
              >
                Login
              </button>
              {/* error from api */}
              {errorLogin && (
                <div className="alert alert-danger">
                  <span> {errorLogin}</span>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
