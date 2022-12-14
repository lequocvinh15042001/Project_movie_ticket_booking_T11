import React, { useEffect, useState, useRef } from "react";

import { DataGrid, GridToolbar, GridOverlay } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { useSnackbar } from "notistack";
import CircularProgress from "@material-ui/core/CircularProgress";
import RenderCellExpand from "./RenderCellExpand";
import Tooltip from "@material-ui/core/Tooltip";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";
import slugify from "slugify";

import { useStyles, materialTheme } from "./styles";
import { getAllScheduleListManagement, getMovieListManagement } from "../../reducers/actions/Movie";
import {
  createShowtime,
  resetCreateShowtime,
} from "../../reducers/actions/BookTicket";
import theatersApi from "../../api/theatersApi";
import { getTheaters, getTheaters2, getTheaters3, getTheaters4 } from "../../reducers/actions/Theater";

import formatDate from "../../utilities/formatDate";
import Swal from "sweetalert2";

function CustomLoadingOverlay() {
  return (
    <GridOverlay>
      <CircularProgress style={{ margin: "auto" }} />
    </GridOverlay>
  );
}

export default function CreateShowTime() {
  const [lichChieuDisplay, setLichChieuDisplay] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  // const { theaterList2, loadingTheaterList2 } = useSelector(
  //   (state) => state.theaterReducer
  // );
  // const { theaterList2, loadingTheaterList2 } = useSelector(
  //     (state) => state.theaterReducer)
  // console.log("theaterList2: ", theaterList2);

  const { loadingCreateShowtime, successCreateShowtime, errorCreateShowtime } =
    useSelector((state) => state.bookTicketReducer);

  // const movieList2 = useSelector((state) => state.movieReducer);
  // console.log("movieList2: ", movieList2);

  let {
    movieList2,
    scheduleList2,
    errorDeleteSchedule,
    successDeleteSchedule,
    successUpdateSchedule,
    successAddUploadSchedule,
    successUpdateNoneImageSchedule,
  } = useSelector((state) => state.movieReducer);

  const dispatch = useDispatch();
  const [valueSearch, setValueSearch] = useState("");
  const clearSetSearch = useRef(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [data, setData] = useState({
    setPhim: "",
    heThongRapRender: [],
    hinhAnhPhimSelected: "",

    setHeThongRap: "",
    cumRapRender: [],

    setCumRap: "",
    rapRender: [],

    setRap: "",
    maRap: "",

    ngayChieuGioChieu: "",

    setGiaVe: "",
    giaVeRender: [70000, 100000, 120000, 150000],

    setPhong:"",
    phongRender:[101, 202, 303, 404],
    maPhong:[1,2,3,4],

    startRequest: false, // l???a ch???n gi???a hi???n th??? "??ang t??m" hay "kh??ng t??m th???y"

    openCtr: {
      phim: false,
      heThongRap: false,
      cumRap: false,
      rap: false,
      ngayChieuGioChieu: false,
      giaVe: false,
      phong:false,
    },
  });
  console.log("data: ", data);
  const [isReadyTaoLichChieu, setIsReadyTaoLichChieu] = useState(false);
  const classes = useStyles({ srcImg: data?.hinhAnhPhimSelected });


  // useEffect(() => {
  //   if (
  //     !scheduleList2 ||
  //     successUpdateSchedule ||
  //     successUpdateNoneImageSchedule ||
  //     successDeleteSchedule ||
  //     errorDeleteSchedule ||
  //     successAddUploadSchedule
  //   ) {
  //     dispatch(getMovieListManagement());
  //     // console.log("branch: ",branch);
  //     dispatch(getAllScheduleListManagement())
  //   }
  // }, [
  //   successUpdateSchedule,
  //   successUpdateNoneImageSchedule,
  //   successDeleteSchedule,
  //   errorDeleteSchedule,
  //   successAddUploadSchedule,
  // ]); // khi v???a th??m phim m???i xong m
  
  useEffect(() => {
    if (movieList2 === null) {
      dispatch(getMovieListManagement());
    }
  }, []);

  useEffect(() => {
    if (scheduleList2 === null) {
      dispatch(getAllScheduleListManagement());
    }
  }, []);

  // useEffect(() => {
  //   const showTimeList = theaterList2?.reduce((collect1, heThongRap) => {
  //     return [
  //       ...collect1,
  //       ...heThongRap.lstCumRap?.reduce((collect2, cumRap) => {
  //         return [
  //           ...collect2,
  //           ...cumRap.danhSachPhim?.reduce((collect3, phim) => {
  //             return [
  //               ...collect3,
  //               ...phim.lstLichChieuTheoPhim?.reduce((collect4, lichChieu) => {
  //                 return [
  //                   ...collect4,
  //                   {
  //                     ...lichChieu,
  //                     tenHeThongRap: heThongRap.tenHeThongRap,
  //                     tenCumRap: cumRap.tenCumRap,
  //                     logo: heThongRap.logo,
  //                     diaChi: cumRap.diaChi,
  //                     maPhim: phim.maPhim,
  //                     tenPhim: phim.tenPhim,
  //                     id: lichChieu.maLichChieu,
  //                     ngayChieuGioChieu: `${lichChieu.ngayChieuGioChieu.slice(
  //                       0,
  //                       10
  //                     )}, ${lichChieu.ngayChieuGioChieu.slice(11, 16)}`,
  //                   },
  //                 ];
  //               }, []),
  //             ];
  //           }, []),
  //         ];
  //       }, []),
  //     ];
  //   }, []);
  //   setLichChieuDisplay(showTimeList);
  // }, [theaterList2]);

  useEffect(() => {
    const showTimeList = scheduleList2?.data?.reduce((collect1, lichChieu) => {
        return [
          ...collect1,
          {
            ...lichChieu,
            // tenHeThongRap: lichChieu?.branch?.name,
            tenCumRap: lichChieu?.branch?.name,
            maLichChieu: lichChieu?.id,
            diaChi: lichChieu?.branch?.address,
            maPhim: lichChieu?.movie?.id,
            logo: lichChieu?.branch?.imgURL,
            tenPhim: lichChieu?.movie?.name,
            maPhong:lichChieu?.room?.id,
            id: lichChieu?.id,
            giaVe:lichChieu?.price,
            ngayChieuGioChieu: `${formatDate(lichChieu?.startDate.slice(
              0,
              10
            )).dateFull}, ${lichChieu?.startTime.slice(0, 8)}`,
          },
        ];
      }, [])
    setLichChieuDisplay(showTimeList);
  }, [scheduleList2]);

  // console.log(lichChieuDisplay);

  useEffect(() => {
    if (data.setPhim && data.ngayChieuGioChieu && data.maRap && data.setGiaVe)
      setIsReadyTaoLichChieu(true);
    else setIsReadyTaoLichChieu(false);
  }, [data?.setPhim, data?.ngayChieuGioChieu, data?.maRap, data?.setGiaVe]);

  useEffect(() => {
    if (successCreateShowtime) {
      // enqueueSnackbar(successCreateShowtime, { variant: "success" });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Create Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(getTheaters());
    }
    if (errorCreateShowtime) {
      // enqueueSnackbar(errorCreateShowtime, { variant: "error" });
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Create Error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    return () => dispatch(resetCreateShowtime());
  }, [errorCreateShowtime, successCreateShowtime]);

  const handleOpenPhim = () => {
    setData((data) => ({ ...data, openCtr: { ...data.openCtr, phim: true } }));
  };
  const handleOpenHeThongRap = () => {
    setData((data) => ({
      ...data,
      openCtr: { ...data.openCtr, heThongRap: true },
    }));
  };
  const handleOpenCumRap = () => {
    setData((data) => ({
      ...data,
      openCtr: { ...data.openCtr, cumRap: true },
    }));
  };
  const handleOpenRap = () => {
    setData((data) => ({ ...data, openCtr: { ...data.openCtr, rap: true } }));
  };
  const handleOpenNgayChieuGioChieu = () => {
    setData((data) => ({
      ...data,
      openCtr: { ...data.openCtr, ngayChieuGioChieu: true },
    }));
  };
  const handleOpenGiaVe = () => {
    setData((data) => ({ ...data, openCtr: { ...data.openCtr, giaVe: true } }));
  };

  const handleOpenPhong = () => {
    setData((data) => ({ ...data, openCtr: { ...data.openCtr, phong: true } }));
  };

  const handleClosePhim = () => {
    setData((data) => ({ ...data, openCtr: { ...data.openCtr, phim: false } }));
  };
  const handleCloseHeThongRap = () => {
    setData((data) => ({
      ...data,
      openCtr: { ...data.openCtr, heThongRap: false },
    }));
  };
  const handleCloseCumRap = () => {
    setData((data) => ({
      ...data,
      openCtr: { ...data.openCtr, cumRap: false },
    }));
  };
  const handleCloseRap = () => {
    setData((data) => ({ ...data, openCtr: { ...data.openCtr, rap: false } }));
  };
  const handleCloseNgayChieuGioChieu = () => {
    setData((data) => ({
      ...data,
      openCtr: { ...data.openCtr, ngayChieuGioChieu: false },
    }));
  };
  const handleCloseGiaVe = () => {
    setData((data) => ({
      ...data,
      openCtr: { ...data.openCtr, giaVe: false },
    }));
  };

  const handleClosePhong = () => {
    setData((data) => ({
      ...data,
      openCtr: { ...data.openCtr, phong: false },
    }));
  };

  const handleSelectPhim = (e) => {
    // t??? m?? phim ???? g???i l??n > l???y ra h??nh ???nh ????? hi???n th???
    const hinhAnhPhimSelected = movieList2?.data?.find(
      (item) => item.id === e.target.value
    ).hinhAnh;
    const isOpenHeThongRap = data?.setHeThongRap ? false : true;
    setData((data) => ({
      ...data,
      setPhim: e.target.value,
      startRequest: true,
      openCtr: { ...data.openCtr, heThongRap: isOpenHeThongRap },
      hinhAnhPhimSelected,
    }));
    theatersApi.getThongTinHeThongRap(e.target.value).then((result) => {
      setData((data) => ({
        ...data,
        heThongRapRender: result.data,
        startRequest: false,
      }));
    });
  };

  const handleSelectHeThongRap = (e) => {
    setData((data) => ({
      ...data,
      setHeThongRap: e.target.value.name,
      startRequest: true,
      openCtr: { ...data.openCtr, cumRap: true },
      //reset
      setCumRap: "",
      rapRender: [],
      setRap: "",
      maRap: e.target.value.id,
    }));
    // theatersApi
    //   .getListCumRapTheoHeThong(e.target.value.id)
    //   .then((result) => {
    //     setData((data) => ({
    //       ...data,
    //       cumRapRender: result.data,
    //       startRequest: false,
    //     }));
    //   });
  };

  const handleSelectCumRap = (e) => {
    setData((data) => ({
      ...data,
      setCumRap: e.target.value.tenCumRap,
      openCtr: { ...data.openCtr, rap: true },
      rapRender: e.target.value.danhSachRap,
      //reset
      setRap: "",
      maRap: "",
    }));
  };

  const handleSelectRap = (e) => {
    const openNgayChieuGioChieu = data?.ngayChieuGioChieu ? false : true;
    const openGiave = openNgayChieuGioChieu
      ? false
      : data.setGiaVe
      ? false
      : true;
    setData((data) => ({
      ...data,
      setRap: e.target.value.name,
      openCtr: {
        ...data.openCtr,
        ngayChieuGioChieu: openNgayChieuGioChieu,
        giaVe: openGiave,
      },
      maRap: e.target.value.id,
    }));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date !== "Invalid Date") {
      const obj = new Date(date);
      setData((data) => ({
        ...data,
        ngayChieuGioChieu: `${obj.getDate().toString().padStart(2, 0)}/${(
          obj.getMonth() + 1
        )
          .toString()
          .padStart(2, 0)}/${obj.getFullYear()} ${obj
          .getHours()
          .toString()
          .padStart(2, 0)}:${obj.getMinutes().toString().padStart(2, 0)}:00`,
      }));
    }
  };
  const handleDateAccept = () => {
    const openGiave = data.setGiaVe ? false : true;
    setData((data) => ({
      ...data,
      openCtr: { ...data.openCtr, giaVe: openGiave },
    }));
  };

  const handleSelectGiaVe = (e) => {
    setData((data) => ({
      ...data,
      setGiaVe: e.target.value,
    }));
  };

  const handleSelectPhong = (e) => {
    setData((data) => ({
      ...data,
      setPhong: e.target.value,
    }));
  };

  const handleTaoLichChieu = () => {
    if (loadingCreateShowtime || !isReadyTaoLichChieu) {
      // khi ??ang g???i requet ho???c ch??a s???n s??ng th?? kh??ng cho dispatch
      return;
    }
    dispatch(
      createShowtime({
        branchId: data.maRap.toString(),//c??
        movieId: data.setPhim.toString(),//c??
        price: data.setGiaVe.toString(),
        roomId: data.setPhong.toString(),
        startDate: (formatDate(data.ngayChieuGioChieu.slice(0,10)).YyMmDd).split(".").join("-"),
        startTime:data.ngayChieuGioChieu.slice(11,19),
      })
    ); // ngayChieuGioChieu ph???i c?? ?????nh d???ng dd/MM/yyyy hh:mm:ss
  };

  // console.log((formatDate(data.ngayChieuGioChieu.slice(0,10)).YyMmDd).split(".").join("-"));

  const handleInputSearchChange = (props) => {
    clearTimeout(clearSetSearch.current);
    clearSetSearch.current = setTimeout(() => {
      setValueSearch(props);
    }, 500);
  };

  const onFilter = () => {
    const searchLichChieuDisplay = lichChieuDisplay?.filter((lichChieu) => {
      // const matchTenHeThongRap =
      //   slugify(lichChieu?.tenHeThongRap ?? "", modifySlugify).indexOf(
      //     slugify(valueSearch, modifySlugify)
      //   ) !== -1;
      // const matchTenCumRap =
      //   slugify(lichChieu?.tenCumRap ?? "", modifySlugify).indexOf(
      //     slugify(valueSearch, modifySlugify)
      //   ) !== -1;
      const matchDiaChi =
        slugify(lichChieu?.diaChi ?? "", modifySlugify).indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      const matchTenRap =
        slugify(lichChieu?.tenCumRap ?? "", modifySlugify).indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      const matchTenPhim =
        slugify(lichChieu?.tenPhim ?? "", modifySlugify).indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      const matchNgayChieuGioChieu =
        slugify(
          lichChieu?.ngayChieuGioChieu?.toLocaleString() ?? "",
          modifySlugify
        ).indexOf(slugify(valueSearch, modifySlugify)) !== -1;
      const matchGiaVe =
        slugify(lichChieu?.price?.toString() ?? "", modifySlugify).indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      const matchMaPhim =
        slugify(lichChieu?.maPhim?.toString() ?? "", modifySlugify).indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      const matchMaRap =
        slugify(lichChieu?.branch?.id.toString() ?? "", modifySlugify).indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      const matchMalichChieu =
        slugify(lichChieu?.maLichChieu?.toString() ?? "", modifySlugify).indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      return (
        // matchTenHeThongRap ||
        matchDiaChi ||
        matchTenRap ||
        matchTenPhim ||
        matchNgayChieuGioChieu ||
        matchGiaVe ||
        matchMaPhim ||
        matchMaRap ||
        matchMalichChieu
      );
    });
    return searchLichChieuDisplay
  }

  console.log("L???ch chi???u: ", scheduleList2);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      hide: true,
      width: 130,
    },
    // { field: "logo", hide: true, width: 130 },
    {
      field: "logo",
      headerName: "Logo",
      width: 130,
      renderCell: (params) => (
        <Tooltip title={params.row.tenCumRap}>
          <img
            style={{
              maxWidth: "100%",
              height: "100%",
              borderRadius: 4,
              marginRight: 15,
            }}
            src={params.row.logo}
            // alt="logo h??? th???ng r???p"
          />
        </Tooltip>
      ),
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
    },
    {
      field: "tenCumRap",
      headerName: "Branch",
      width: 200,
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },
    {
      field: "diaChi",
      headerName: "Address",
      width: 250,
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },
    // {
    //   field: "tenCumRap",
    //   headerName: "T??n R???p",
    //   width: 200,
    //   headerAlign: "center",
    //   align: "center",
    //   headerClassName: "custom-header",
    // },
    { field: "maRap", headerName: "Branch Id", hide: true, width: 130 },
    { field: "maPhim", headerName: "Movie Id", hide: true, width: 130 },
    {
      field: "tenPhim",
      headerName: "Movie",
      width: 250,
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
      // renderCell: RenderCellExpand,
    },
    {
      field: "maPhong",
      headerName: "Room",
      width: 90,
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },
    {
      field: "ngayChieuGioChieu",
      headerName: "Showtime",
      width: 280,
      type: "dateTime",
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
    },
    {
      field: "giaVe",
      headerName: "Price(vn??)",
      width: 130,
      type: "number",
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
    },
  ];
  console.log("movieList2: ", movieList2);

  const menuProps = {
    // props v?? class c???a menu(Popover)
    classes: { paper: classes.menu },
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
  };
  const modifySlugify = { lower: true, locale: "vi" };

  const handlerError = () =>{
    console.log("V?? handler error");
  }

  console.log("data: ", data);
  return (
    <div style={{ height: "65vh", width: "100%"}}>
      <div className={classes.backgroundImg}>
        <div className="row">
          <div className="col-3 px-0 px-md-3">
            <FormControl
              className={classes.search__item}
              focused={false}
              fullWidth
            >
              <Select
                open={data.openCtr.phim} // control open
                onClose={handleClosePhim}
                onOpen={handleOpenPhim}
                onChange={handleSelectPhim} // value={phim.maPhim} t??? ?????ng truy???n v??o handleSelectPhim sau khi ch???n phim
                value={data.setPhim} // gi?? tr??? truy???n v??o quy???t ?????nh MenuItem n??o s??? ???????c hi???n th??? sao khi ch???n d???a v??o value c???a MenuItem
                displayEmpty // hi???n th??? item ?????u ti??n
                IconComponent={ExpandMoreIcon}
                MenuProps={menuProps}
              >
                <MenuItem
                  value=""
                  style={{ display: data.openCtr?.phim ? "none" : "block" }}
                  classes={{
                    root: classes.menu__item,
                    selected: classes["menu__item--selected"],
                  }}
                >
                  Phim
                </MenuItem>
                {movieList2?.data?.map((phim) => (
                  <MenuItem
                    value={phim.id} // gi?? tr??? s??? ???????c ?????y l??n
                    key={phim.id}
                    classes={{
                      root: classes.menu__item,
                      selected: classes["menu__item--selected"],
                    }}
                  >
                    {phim.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="col-3 px-0 px-md-3">
            <FormControl
              className={classes.search__item}
              focused={false}
              fullWidth
            >
              <Select
                open={data.openCtr.heThongRap}
                onClose={handleCloseHeThongRap}
                onOpen={handleOpenHeThongRap}
                onChange={handleSelectHeThongRap}
                value={data.setHeThongRap}
                renderValue={(value) =>
                  `${value ? value : "R???p"}`
                } // hi???n th??? gi?? tr??? ???? ch???n
                displayEmpty
                IconComponent={ExpandMoreIcon}
                MenuProps={menuProps}
              >
                <MenuItem
                  value=""
                  style={{
                    display:
                      data?.heThongRapRender?.length > 0 ? "none" : "block",
                  }}
                  classes={{
                    root: classes.menu__item,
                    selected: classes["menu__item--selected"],
                  }}
                >
                  {data.setPhim
                    ? `${
                        data.startRequest
                          ? "??ang t??m"
                          : "Kh??ng t??m th???y, ch???n l???i phim!"
                      }`
                    : "Kh??ng t??m th???y"}
                </MenuItem>
                {data?.heThongRapRender?.data?.content?.map((item) => (
                  <MenuItem
                    value={item}
                    key={item.id}
                    classes={{
                      root: classes.menu__item,
                      selected: classes["menu__item--selected"],
                    }}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          {/* <div className="col-6 px-0 px-md-3">
            <FormControl
              className={classes.search__item}
              focused={false}
              fullWidth
            >
              <Select
                open={data.openCtr.cumRap}
                onClose={handleCloseCumRap}
                onOpen={handleOpenCumRap}
                onChange={handleSelectCumRap}
                value={data.setCumRap}
                renderValue={(value) => `${value ? value : "Ch???n c???m r???p"}`}
                displayEmpty
                IconComponent={ExpandMoreIcon}
                MenuProps={menuProps}
              >
                <MenuItem
                  value=""
                  style={{
                    display: data.cumRapRender?.length > 0 ? "none" : "block",
                  }}
                  classes={{
                    root: classes.menu__item,
                    selected: classes["menu__item--selected"],
                  }}
                >
                  {data.setHeThongRap
                    ? `${
                        data.startRequest
                          ? "??ang t??m c???m r???p"
                          : "Kh??ng t??m th???y, vui l??ng ch???n h??? th???ng r???p kh??c"
                      }`
                    : "Vui l??ng h??? th???ng r???p"}
                </MenuItem>
                {data.cumRapRender.map((item) => (
                  <MenuItem
                    value={item}
                    key={item.maCumRap}
                    classes={{
                      root: classes.menu__item,
                      selected: classes["menu__item--selected"],
                    }}
                  >
                    {item.tenCumRap}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div> */}
          {/* <div className="col-6 px-0 px-md-3">
            <FormControl
              className={classes.search__item}
              focused={false}
              fullWidth
            >
              <Select
                open={data.openCtr.rap}
                onClose={handleCloseRap}
                onOpen={handleOpenRap}
                onChange={handleSelectRap}
                value={data.setRap}
                renderValue={(value) => `${value ? value : "Ch???n r???p"}`}
                displayEmpty
                IconComponent={ExpandMoreIcon}
                MenuProps={menuProps}
              >
                <MenuItem
                  value=""
                  style={{
                    display: data.rapRender?.length > 0 ? "none" : "block",
                  }}
                  classes={{
                    root: classes.menu__item,
                    selected: classes["menu__item--selected"],
                  }}
                >
                  Vui l??ng ch???n c???m r???p
                </MenuItem>
                {data.rapRender.map((rap) => (
                  <MenuItem
                    value={rap}
                    key={rap.maRap}
                    classes={{
                      root: classes.menu__item,
                      selected: classes["menu__item--selected"],
                    }}
                  >
                    {rap.tenRap}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div> */}
          <div className="col-2 px-0 px-md-3">
            <FormControl
              className={classes.search__item}
              focused={false}
              fullWidth
            >
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <ThemeProvider theme={materialTheme}>
                  <KeyboardDateTimePicker
                    open={data?.openCtr?.ngayChieuGioChieu}
                    onClose={handleCloseNgayChieuGioChieu}
                    onOpen={handleOpenNgayChieuGioChieu}
                    inputValue={selectedDate ? null : "Su???t"} // khi ch??a ch???n th?? "Ch???n ng??y, gi??? chi???u" ghi ???? l??n value, khi ???? ch???n ng??y th?? return null ????? value={selectedDate} hi???n th??? ng??y ???? ch???n
                    invalidDateMessage={
                      selectedDate ? "Invalid Date Format" : ""
                    } // b??? qua l???i n???u selectedDate = null
                    value={selectedDate} // gi?? tr??? truy???n v??o l?? obj date ho???c string ch??? ng??y gi??? ????ng chu???n c?? th??? convert > t??y thu???c v??o th?? vi???n ng??y th??ng ??ang d??ng(??ang d??ng date-fns)
                    onChange={handleDateChange}
                    format="yyyy-MM-dd, HH:mm" // HH:mm ~ 23:10, hh:mm l?? ~ 11:10 PM
                    onAccept={handleDateAccept}
                    ampm={false}
                  />
                </ThemeProvider>
              </MuiPickersUtilsProvider>
            </FormControl>
          </div>
          <div className="col-2 px-0 px-md-3">
            <FormControl
              className={classes.search__item}
              focused={false}
              fullWidth
            >
              <Select
                open={data.openCtr.giaVe}
                onClose={handleCloseGiaVe}
                onOpen={handleOpenGiaVe}
                onChange={handleSelectGiaVe}
                value={data.setGiaVe}
                renderValue={(value) =>
                  `${value ? value + " vn??" : "Gi??"}`
                }
                displayEmpty
                IconComponent={ExpandMoreIcon}
                MenuProps={menuProps}
              >
                {data?.giaVeRender?.map((giaVe) => (
                  <MenuItem
                    value={giaVe}
                    key={giaVe}
                    classes={{
                      root: classes.menu__item,
                      selected: classes["menu__item--selected"],
                    }}
                  >
                    {giaVe} vn??
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="col-2 px-0 px-md-3">
            <FormControl
              className={classes.search__item}
              focused={false}
              fullWidth
            >
              <Select
                open={data.openCtr.phong}
                onClose={handleClosePhong}
                onOpen={handleOpenPhong}
                onChange={handleSelectPhong}
                value={data.setPhong}
                renderValue={(value) =>
                  `${value ? "Ph??ng " + value : "Ph??ng"}`
                }
                displayEmpty
                IconComponent={ExpandMoreIcon}
                MenuProps={menuProps}
              >
                {data.maPhong.map((phong) => (
                  <MenuItem
                    value={phong}
                    key={phong}
                    classes={{
                      root: classes.menu__item,
                      selected: classes["menu__item--selected"],
                    }}
                  >
                    Ph??ng {phong}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>

      <div className={classes.control}>
        <div className="row">
          <div className={`col-12 col-md-6 ${classes.itemCtro}`}>
            <Button
              disabled={!isReadyTaoLichChieu}
              classes={{
                root: classes.btn,
                disabled: classes.btnDisabled,
              }}
              onClick={handleTaoLichChieu}
            >
              T???o l???ch
            </Button>
          </div>
          <div className={`col-12 col-md-6 ${classes.itemCtro}`}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search???"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={(evt) => handleInputSearchChange(evt.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      {
        lichChieuDisplay === undefined ? handlerError():
        <DataGrid
        className={classes.rootDataGrid}
        rows={onFilter()}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[10, 25, 50]}
        loading={false}
        components={{
          LoadingOverlay: CustomLoadingOverlay,
          Toolbar: GridToolbar,
        }}
        sortModel={[{ field: "tenCumRap", sort: "asc" }]}
      />
      }
      
    </div>
  );
}
