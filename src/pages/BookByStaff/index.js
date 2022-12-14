import React, { useEffect, useState, useRef } from "react";

import { DataGrid, GridToolbar, GridOverlay } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { useSnackbar } from "notistack";
import CircularProgress from "@material-ui/core/CircularProgress";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Dialog from "@material-ui/core/Dialog";
import AddBoxIcon from "@material-ui/icons/AddBox";
import RenderCellExpand from "./RenderCellExpand";
import slugify from "slugify";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { useStyles, DialogContent, DialogTitle } from "./styles";
import {
  deleteMovie,
  updateMovieUpload,
  resetMoviesManagement,
  updateMovie,
  addMovieUpload,
  getScheduleListManagement,
  resetScheduleManagement,
  getMovieListManagement,
} from "../../reducers/actions/Movie";
import Action from "./Action";
import ThumbnailYoutube from "./ThumbnailYoutube";
import FormAdd from "./FormAdd";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import BtnGoToCheckoutByStaff from "./BtnGoToCheckOut";

function CustomLoadingOverlay() {
  return (
    <GridOverlay>
      <CircularProgress style={{ margin: "auto" }} />
    </GridOverlay>
  );
}

export default function BookByStaff() {
  // const [movieListDisplay, setMovieListDisplay] = useState([]);
  // console.log("movieListDisplay: ", movieListDisplay);

  const [scheduleListDisplay, setScheduleListDisplay] = useState([]);


  const classes = useStyles();
  const  {enqueueSnackbar}  = useSnackbar();
  let {
    scheduleList2,
    loadingScheduleList2,
    loadingDeleteSchedule,
    errorDeleteSchedule,
    successDeleteSchedule,
    successUpdateSchedule,
    errorUpdateSchedule,
    loadingUpdateSchedule,
    loadingAddUploadSchedule,
    successAddUploadSchedule,
    errorAddUploadSchedule,
    loadingUpdateNoneImageSchedule,
    successUpdateNoneImageSchedule,
    errorUpdateNoneImageSchedule,
  } = useSelector((state) => state.movieReducer);
  // console.log(scheduleList2);
  const dispatch = useDispatch();
  const newImageUpdate = useRef("");
  const callApiChangeImageSuccess = useRef(false);
  const [valueSearch, setValueSearch] = useState("");
  const clearSetSearch = useRef(0);
  const [openModal, setOpenModal] = React.useState(false);
  const selectedSchedule = useRef(null);
  const [branch, setBranch] = React.useState('');
  const isMobile = useMediaQuery("(max-width:768px)");

  const handleChange = (event) => {
    setBranch(event.target.value);
  };

  // console.log("R???p: ", branch);

  useEffect(() => {
    if (
      !scheduleList2 ||
      successUpdateSchedule ||
      successUpdateNoneImageSchedule ||
      successDeleteSchedule ||
      errorDeleteSchedule ||
      successAddUploadSchedule
    ) {
      // dispatch(getMovieListManagement());
      // console.log("branch: ",branch);
      dispatch(getScheduleListManagement(branch))
    }
  }, [
    successUpdateSchedule,
    successUpdateNoneImageSchedule,
    successDeleteSchedule,
    errorDeleteSchedule,
    successAddUploadSchedule,
  ]); // khi v???a th??m phim m???i xong m?? x??a li??n backend s??? b??o l???i x??a kh??ng ???????c nh??ng th???c ch???t ???? x??a th??nh c??ng > errorDeleteMovie nh??ng v???n ti???n h??nh l??m m???i l???i danh s??ch
  
  useEffect(() => {
      dispatch(getScheduleListManagement((branch.toString())))
      // console.log("scheduleList2: ",scheduleList2);
      // setScheduleListDisplay(scheduleList2)
  }, [branch]);

  useEffect(() => {
    return () => {
      dispatch(resetScheduleManagement());
    };
  }, []);

  useEffect(() => {
    if (scheduleList2) {
      let newScheduleListDisplay = scheduleList2?.data?.content?.map((schedule) => ({
        ...schedule,
        hanhDong: "",
        id: schedule.id,
        movieName: schedule.movie.name,
        time:schedule.movie.duration,
        nameRoom:schedule.room.name,
        totalArea:schedule.room.totalArea,
        idRoom:schedule.room.id,
        idRap:schedule.branch.id,
        idPhim:schedule.movie.id,
        smallImageURl: schedule.movie.smallImageURl
      }));
      setScheduleListDisplay(newScheduleListDisplay);
    }

  }, [scheduleList2]);

  // useEffect(() => {
  //   // delete movie xong th?? th??ng b??o
  //   if (errorDeleteSchedule === "Delete Success but backend return error") {
  //     successDeleteSchedule = "Delete Success !";
  //   }
  //   if (successDeleteSchedule) {
  //     enqueueSnackbar(successDeleteSchedule, { variant: "success" });
  //     return;
  //   }
  //   if (errorDeleteSchedule) {
  //     enqueueSnackbar(errorDeleteSchedule, { variant: "error" });
  //   }
  // }, [errorDeleteSchedule, successDeleteSchedule]);

  useEffect(() => {
    if (successUpdateSchedule || successUpdateNoneImageSchedule) {
      callApiChangeImageSuccess.current = true;
      enqueueSnackbar(
        `Update successfully: ${successUpdateSchedule.name ?? ""}${
          successUpdateNoneImageSchedule.name ?? ""
        }`,
        { variant: "success" }
      );
    }
    if (errorUpdateSchedule || errorUpdateNoneImageSchedule) {
      callApiChangeImageSuccess.current = false;
      enqueueSnackbar(
        `${errorUpdateSchedule ?? ""}${errorUpdateNoneImageSchedule ?? ""}`,
        { variant: "error" }
      );
    }
  }, [
    successUpdateSchedule,
    errorUpdateSchedule,
    successUpdateNoneImageSchedule,
    errorUpdateNoneImageSchedule,
  ]);
  // console.log("scheduleListDisplay: ", scheduleListDisplay);
  useEffect(() => {
    if (successAddUploadSchedule) {
      enqueueSnackbar(
        `Add new Schedule successfully: ${successAddUploadSchedule.name}`,
        { variant: "success" }
      );
    }
    if (errorAddUploadSchedule) {
      enqueueSnackbar(errorAddUploadSchedule, { variant: "error" });
    }
  }, [successAddUploadSchedule, errorAddUploadSchedule]);

  // x??a m???t phim
  const handleDeleteOne = (maPhim) => {
    if (!loadingDeleteSchedule) {
      // n???u click x??a li??n t???c m???t user
      // dispatch(deleteMovie(maPhim));
      // window.location.reload();
    }
  };
  const handleEdit = (phimItem) => {
    selectedSchedule.current = phimItem;
    setOpenModal(true);
  };

  const handleBook = (phimItem) => {
    console.log("Book l???ch chi???u th???: ", phimItem);
    
    // selectedSchedule.current = phimItem;
    // setOpenModal(true);
  };

  const onUpdate = (movieObj, hinhAnh, fakeImage) => {
    if (loadingUpdateSchedule || loadingUpdateNoneImageSchedule) {
      return undefined;
    }
    setOpenModal(false);
    newImageUpdate.current = fakeImage;
    if (typeof hinhAnh === "string") {
      // n???u d??ng updateMovieUpload s??? b??? reset danhGia v??? 10
      const scheduleUpdate = scheduleListDisplay?.find(
        (movie) => movie.id === fakeImage.id
      ); // l???y ra url g???c, tr??nh g???i base64 t???i backend
      movieObj.smallImageURl = scheduleUpdate.smallImageURl;
      dispatch(updateMovie(movieObj));
      return undefined;
    }
    dispatch(updateMovieUpload(movieObj));
  };
  const onAddMovie = (movieObj) => {
    if (!loadingAddUploadSchedule) {
      dispatch(addMovieUpload(movieObj));
    }
    setOpenModal(false);
  };
  const handleAddMovie = () => {
    const emtySelectedPhim = {
      id: "",
      name: "",
      smallImageURl: "",
      longDescription: "",
      shortDescription: "",
      largeImageURL: "",
      director: "",
      actors: "",
      categories: "",
      releaseDate: "",
      duration: "",
      trailerURL: "",
      language: "",
      rated: "",
      isShowing: null,
    };
    selectedSchedule.current = emtySelectedPhim;
    setOpenModal(true);
  };

  const handleInputSearchChange = (props) => {
    clearTimeout(clearSetSearch.current);
    clearSetSearch.current = setTimeout(() => {
      setValueSearch(props);
    }, 500);
  };

  const onFilter = () => {
    // d??ng useCallback, slugify b??? d???u ti???ng vi???t
    let searchScheduleListDisplay = scheduleListDisplay?.filter((schedule) => {
      const matchTenPhim =
        slugify(schedule.movie.name ?? "", modifySlugify)?.indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      const matchMoTa =
        slugify(schedule.movie.longDescription ?? "", modifySlugify)?.indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      const matchNgayKhoiChieu =
        slugify(schedule.movie.releaseDate ?? "", modifySlugify)?.indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      return matchTenPhim || matchMoTa || matchNgayKhoiChieu;
    });
    if (newImageUpdate.current && callApiChangeImageSuccess.current) {
      // hi???n th??? h??nh b???ng base64 thay v?? url, l???i react kh??ng hi???n th??? ????ng h??nh m???i c???p nh???t(???? c???p h??nh thanh c??ng nh??ng url backend tr??? v??? gi??? nguy??n ???????ng d???n)
      searchScheduleListDisplay = searchScheduleListDisplay?.map((schedule) => {
        if (schedule.id === newImageUpdate.current.id) {
          return { ...schedule, smallImageURl: newImageUpdate.current.smallImageURl};
        }
        return schedule;
      });
    }
    return searchScheduleListDisplay;
  };

  const columns = [
    {
      field: "hanhDong",
      headerName: "Book",
      width: 100,
      // renderCell: (params) => (
      //   <Action
      //     // onEdit={handleEdit}
      //     // onDeleted={handleDeleteOne}
      //     onBook={handleBook}
      //     phimItem={params.row.id}
      //   />
      // ),
      renderCell:(params) =>(
        <BtnGoToCheckoutByStaff 
        lichChieuTheoPhim={params.row.startTime}
        duration={params.row.time} //duration
        idLich={params.row.id}
        maPhim={params.row.idPhim}
        ngayChieu={params.row.startDate}
        maPhong={params.row.idRoom}
        gioChieu={params.row.startTime}
        maRap={params.row.idRap} 
       />
      ),
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
    },
    {
      field: "movieName",
      headerName: "Movie Name",
      width: 250,
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
    },
    {
      field: "smallImageURl",
      headerName: "Image",
      width: 200,
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
      renderCell: (params) => RenderCellExpand(params),
    },
    // {
    //   field: "startDate",
    //   headerName: "Start Date",
    //   width: 130,
    //   headerAlign: "center",
    //   align: "left",
    //   headerClassName: "custom-header",
    //   renderCell: RenderCellExpand,
    // },
    {
      field: "startDate",
      headerName: "Start Date",
      width: 160,
      type: "date",
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
      valueFormatter: (params) => params.value.slice(0, 10),
    },
    {
      field: "startTime",
      headerName: "Start Time",
      width: 120,
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },
    {
      field: "price",
      headerName: "Price",
      width: 110,
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },

    {
      field: "time",
      headerName: "Duration(mins)",
      width: 110,
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },

    {
      field: "nameRoom",
      headerName: "Room",
      width: 110,
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },

    {
      field: "totalArea",
      headerName: "totalArea",
      width: 110,
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },

    {
      field: "idRoom",
      headerName: "idRoom",
      width: 110,
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },

    // {
    //   field: "trailerURL",
    //   headerName: "Trailer",
    //   width: 130,
    //   renderCell: (params) => (
    //     <div style={{ display: "inline-block" }}>
    //       <ThumbnailYoutube urlYoutube={params.row.trailerURL} />
    //     </div>
    //   ),
    //   headerAlign: "center",
    //   align: "center",
    //   headerClassName: "custom-header",
    // },
    // {
    //   field: "smallImageURl",
    //   headerName: "Image",
    //   width: 200,
    //   headerAlign: "center",
    //   align: "center",
    //   headerClassName: "custom-header",
    //   renderCell: (params) => RenderCellExpand(params),
    // },

    // {
    //   field: "releaseDate",
    //   headerName: "Release Date",
    //   width: 160,
    //   type: "date",
    //   headerAlign: "center",
    //   align: "center",
    //   headerClassName: "custom-header",
    //   valueFormatter: (params) => params.value.slice(0, 10),
    // },
    // {
    //   field: "rated",
    //   headerName: "Rated",
    //   width: 120,
    //   headerAlign: "center",
    //   align: "center",
    //   headerClassName: "custom-header",
    // },
      
      // { field: "id", hide: true, width: 130, headerClassName: "custom-header", },
    // { field: "categories", hide: true, width: 130 },
    // { field: "duration", hide: true, width: 200, renderCell: RenderCellExpand },
  ];

  const modifySlugify = { lower: true, locale: "vi" };

  return (
    <div style={{ height: "80vh", width: "100%", backgroundColor:"white"}}>
      <div className={classes.control}>
        <div className="row">
          <div className={`col-12 col-md-6 ${classes.itemCtro}`}>
            {/* <Button
              variant="outlined"
              color="success"
              className={classes.addMovie}
              onClick={handleAddMovie}
              disabled={loadingAddUploadMovie}
              startIcon={<AddBoxIcon />}
            >
              Book for user
            </Button> */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Branch</InputLabel>
                <Select 
                  className={classes.addMovie}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={branch}
                  label="branch"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>GOLDENNEW H?? ????ng</MenuItem>
                  <MenuItem value={2}>GOLDENNEW Th??? ?????c</MenuItem>
                  <MenuItem value={3}>GOLDENNEW Ba ????nh</MenuItem>
                  <MenuItem value={4}>GOLDENNEW Ph???m H??ng</MenuItem>
                </Select>
              </FormControl>  
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
                style={{color:"black"}}
                onChange={(evt) => handleInputSearchChange(evt.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <DataGrid
        className={classes.rootDataGrid}
        rows={onFilter()}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[10, 25, 50]}
        // hi???n loading khi
        loading={
          loadingUpdateSchedule ||
          loadingDeleteSchedule ||
          loadingScheduleList2 ||
          loadingUpdateNoneImageSchedule
        }
        components={{
          LoadingOverlay: CustomLoadingOverlay,
          Toolbar: GridToolbar,
        }}
        // sort
        // sortModel={[{ field: "name", sort: "asc" }]}
      />

      {/* <Dialog open={openModal}>
        <DialogTitle onClose={() => setOpenModal(false)}>
          {selectedPhim?.current?.name
            ? `Edit: ${selectedPhim?.current?.name}`
            : "Add new"}
        </DialogTitle>
        <DialogContent dividers>
          <FormAdd
            selectedPhim={selectedPhim.current}
            onUpdate={onUpdate}
            onAddMovie={onAddMovie}
          />
        </DialogContent>
      </Dialog> */}
    </div>
  );
}
