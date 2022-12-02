import React, { useEffect } from "react";

import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Swal from "sweetalert2";

import { register, resetErrorLoginRegister } from "../../reducers/actions/Auth";
import logoTix from "./logo/logoTix.png";

export default function Register() {
  const { responseRegister, loadingRegister, errorRegister } = useSelector(
    (state) => state.authReducer
  );
  let location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (responseRegister) {
      // đăng ký thành công thì đăng nhập, responseRegister để bỏ qua componentditmount
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You have successfully registered",
        showConfirmButton: false,
        timer: 2000,
      });
      history.push("/dangnhap", location.state);
    }
  }, [responseRegister]);
  useEffect(() => {
    return () => {
      dispatch(resetErrorLoginRegister());
    };
  }, []);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const signupUserSchema = yup.object().shape({
    username: yup.string().required("*Account cannot be left blank !"),
    password: yup.string().required("*Passwords can't be escaped !"),
    email: yup
      .string()
      .required("*Email can't be escaped !")
      .email("* Email not valid !"),
    // soDt: yup
    //   .string()
    //   .required("*Số điện thoại không được bỏ trống !")
    //   .matches(phoneRegExp, "Số điện thoại không hợp lệ!"),
      name: yup.string().required("*Name can't be escaped !"),
  });

  const handleSubmit = (user) => {
    // trường hợp nào thì cho đăng ký(return true): loadingRegister=false và responseRegister=null
    console.log(`user`, user);
    if (!loadingRegister && !responseRegister) {
      dispatch(register(user));
    }
  };

  return (
    <div className="text-light" style={{ padding: "20px 32px 30px" }}>
      <div className="container">
        {/* <img
          src={logoTix}
          alt="logoTix"
          style={{
            width: "200px",
            marginBottom: "10px",
            cursor: "pointer",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        /> */}
        <p style={{ textAlign: "center", marginBottom: "20px" }}>
          Register for more offers, buy tickets and keep your information secure!
        </p>
      </div>
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
          name: "",
        }}
        validationSchema={signupUserSchema} // validationSchdema:  thu vien yup nhập sai ko submit được
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <Form className="col-sm-12">
            <div className="form-group">
              <label>Username&nbsp;</label>
              <ErrorMessage
                name="username"
                render={(msg) => <span className="text-danger">{msg}</span>}
              />
              <Field name="username" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Password&nbsp;</label>
              <ErrorMessage
                name="password"
                render={(msg) => <span className="text-danger">{msg}</span>}
              />
              <Field name="password" type="password" className="form-control" />
            </div>
            <div className="form-group">
              <label>Fullname&nbsp;</label>
              <ErrorMessage
                name="name"
                render={(msg) => <span className="text-danger">{msg}</span>}
              />
              <Field name="name" type="text" className="form-control" />
            </div>

            <div className="form-group">
              <label>Email&nbsp;</label>
              <ErrorMessage
                name="email"
                render={(msg) => <span className="text-danger">{msg}</span>}
              />
              <Field name="email" type="email" className="form-control" />
            </div>
            {/* <div className="form-group">
              <label>Loại tài khoản&nbsp;</label>
              <div>
                <label>
                  <Field type="radio" name="maLoaiNguoiDung" value="KhachHang" />
                  Khách Hàng
                </label>
                <label>
                  <Field type="radio" name="maLoaiNguoiDung" value="QuanTri" />
                  Quản Trị
                </label>
              </div>
            </div> */}
            <div className="text-center p-2">
              <button
                type="submit"
                className="btn btn-success"
                disable={loadingRegister.toString()}
              >
                Register
              </button>
              {/* error from api */}
              {errorRegister && (
                <div className="alert alert-danger">
                  <span>{errorRegister}</span>
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
