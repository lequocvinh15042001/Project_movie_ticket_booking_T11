import { Suspense, lazy } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";

import ModalTrailer from "./components/ModalTrailer";
import TriggerLoadingLazy from "./components/TriggerLoadingLazy";
import Loading from "./components/Loading";
import { theme } from "./constants/config";

// layout
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const AuthLayout = lazy(() => import("./layouts/AuthLayout"));
const AuthLayoutAdmin = lazy(() => import("./layouts/AuthLayoutAdmin"));
const AuthLayoutStaff = lazy(() => import("./layouts/AuthLayoutStaff"));
const AdminLayout = lazy(() => import("./layouts/AdminLayout"));
const StaffLayout = lazy(() => import("./layouts/StaffLayout"));
// guards
const AdminRoute = lazy(() => import("./guards/AdminRoute"));
const StaffRoute = lazy(() => import("./guards/StaffRoute"));
const CheckoutRoute = lazy(() => import("./guards/CheckoutRoute"));
const UserProfileRoute = lazy(() => import("./guards/UserProfileRoute"));
// page
const Homepage = lazy(() => import("./pages/Homepage"));
const MovieDetail = lazy(() => import("./pages/MovieDetail"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const BookTickets = lazy(() => import("./pages/Bookticket"));
const BookTicketsDetail = lazy(() => import("./pages/BookticketDetail"));
const UsersManagement = lazy(() => import("./pages/UsersManagement"));
const MoviesManagement = lazy(() => import("./pages/MoviesManagement"));
const CreateShowtime = lazy(() => import("./pages/CreateShowtime"));
const Login = lazy(() => import("./pages/Login"));
const LoginAdmin = lazy(() => import("./pages/LoginAdmin"));
const LoginStaff = lazy(() => import("./pages/LoginStaff"));
const Register = lazy(() => import("./pages/Register"));
const DetailNews = lazy(() => import("./pages/DetailNews"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Loading />
        {/* Modal */}
        <ModalTrailer />
        <Suspense fallback={<TriggerLoadingLazy />}> 
          <Switch>
            <Route exact path={["/", "/phim/:maPhim", "/taikhoan", "/review/:maTin"]}>
              <MainLayout>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/phim/:maPhim" component={MovieDetail} />
                <Route exact path="/review/:maTin" component={DetailNews} />
                <UserProfileRoute
                  exact
                  path="/taikhoan"
                  component={UserProfile}
                />
              </MainLayout>
            </Route>

            <CheckoutRoute
              exact
              path="/datve/:maLichChieu/:maPhim"
              component={BookTickets}
            />

            <CheckoutRoute
              exact
              path="/datvechitiet/:maLichChieu/:maRap/:maPhim/:ngayChieu/:maPhong/:gioChieu"
              component={BookTicketsDetail}
            />

            <Route
              exact
              path={["/admin/users", "/admin/movies", "/admin/showtimes"]}
            >
              <AdminLayout>
                <AdminRoute
                  exact
                  path="/admin/users"
                  component={UsersManagement}
                />
                <AdminRoute
                  exact
                  path="/admin/movies"
                  component={MoviesManagement}
                />
                <AdminRoute
                  exact
                  path="/admin/showtimes"
                  component={CreateShowtime}
                />
              </AdminLayout>
            </Route>

            <Route
              exact
              path={["/staff/movies", "/staff/book", "/staff/reviews"]}
            >
              <StaffLayout>
                <StaffRoute
                  exact
                  path="/staff/movies"
                  component={MoviesManagement}
                />
                <StaffRoute
                  exact
                  path="/staff/book"
                  component={UsersManagement}//viet
                />
                <StaffRoute
                  exact
                  path="/staff/reviews"
                  component={UsersManagement}//viet
                />
              </StaffLayout>
            </Route>


          {/* Author */}
            <Route exact path={["/dangnhap", "/dangky"]}>
              <AuthLayout>
                <Route exact path="/dangnhap" component={Login} />
                <Route exact path="/dangky" component={Register} />
              </AuthLayout>
            </Route>

            <Route exact path={["/admin"]}>
              <AuthLayoutAdmin>
                <Route exact path="/admin" component={LoginAdmin} />
              </AuthLayoutAdmin>
            </Route>

            <Route exact path={["/staff"]}>
              <AuthLayoutStaff>
                <Route exact path="/staff" component={LoginStaff} />
              </AuthLayoutStaff>
            </Route>

            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
