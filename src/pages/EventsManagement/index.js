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
  getMovieListManagement,
  deleteMovie,
  updateMovieUpload,
  resetMoviesManagement,
  updateMovie,
  addMovieUpload,
} from "../../reducers/actions/Movie";
import Action from "./Action";
import ThumbnailYoutube from "./ThumbnailYoutube";
import Form from "./Form";
import FormAddEvent from "./FormAddEvent";
import Swal from "sweetalert2";
import { getEventsList, postAddEvent, putEventUpdate, resetEventList } from "../../reducers/actions/EventsManagement";
import { Tooltip } from "@material-ui/core";

function CustomLoadingOverlay() {
  return (
    <GridOverlay>
      <CircularProgress style={{ margin: "auto" }} />
    </GridOverlay>
  );
}

export default function MoviesManagement() {
  const [eventListDisplay, setEventListDisplay] = useState([]);
  console.log("eventListDisplay: ", eventListDisplay);
  const classes = useStyles();
  const  {enqueueSnackbar}  = useSnackbar();
  let {
    eventList,
    loadingEventList,
    loadingDelete,
    errorDelete,
    successDelete,
    successUpdateEvent,
    errorUpdateEvent,
    loadingUpdateEvent,
    loadingAddEvent,
    successAddEvent,
    errorAddEvent,
    // loadingUpdateNoneImageMovie,
    // successUpdateNoneImageMovie,
    // errorUpdateNoneImageMovie,
  } = useSelector((state) => state.eventsManagementReducer);
  const dispatch = useDispatch();
  const newImageUpdate = useRef("");
  const callApiChangeImageSuccess = useRef(false);
  const [valueSearch, setValueSearch] = useState("");
  const clearSetSearch = useRef(0);
  const [openModal, setOpenModal] = React.useState(false);
  const selectedPhim = useRef(null);
  const isMobile = useMediaQuery("(max-width:768px)");
  useEffect(() => {
    if (
      !eventList ||
      successUpdateEvent ||
      // successUpdateNoneImageMovie ||
      successDelete ||
      errorDelete ||
      successAddEvent
    ) {
      dispatch(getEventsList());
    }
  }, [
    successUpdateEvent,
    // successUpdateNoneImageMovie,
    successDelete,
    errorDelete,
    successAddEvent,
  ]); // khi v???a th??m phim m???i xong m?? x??a li??n backend s??? b??o l???i x??a kh??ng ???????c nh??ng th???c ch???t ???? x??a th??nh c??ng > errorDeleteMovie nh??ng v???n ti???n h??nh l??m m???i l???i danh s??ch

  useEffect(() => {
    return () => {
      dispatch(resetEventList());
    };
  }, []);
  useEffect(() => {
    if (eventList) {
      let newEventListDisplay = eventList?.data?.map((event) => ({
        ...event,
        hanhDong: "",
        id: event.id,
      }));
      setEventListDisplay(newEventListDisplay);
    }
  }, [eventList]);

  useEffect(() => {
    // delete movie xong th?? th??ng b??o
    if (errorDelete === "Delete Success but backend return error") {
      successDelete = "Delete Success !";
    }
    if (successDelete) {
      enqueueSnackbar(successDelete, { variant: "success" });
      return;
    }
    if (errorDelete) {
      enqueueSnackbar(errorDelete, { variant: "error" });
    }
  }, [errorDelete, successDelete]);

  // useEffect(() => {
  //   if (successUpdate || successUpdateNoneImageMovie) {
  //     callApiChangeImageSuccess.current = true;
  //     enqueueSnackbar(
  //       `Update successfully: ${successUpdateMovie.name ?? ""}${
  //         successUpdateNoneImageMovie.name ?? ""
  //       }`,
  //       { variant: "success" }
  //     );
  //   }
  //   if (errorUpdateMovie || errorUpdateNoneImageMovie) {
  //     callApiChangeImageSuccess.current = false;
  //     enqueueSnackbar(
  //       `${errorUpdateMovie ?? ""}${errorUpdateNoneImageMovie ?? ""}`,
  //       { variant: "error" }
  //     );
  //   }
  // }, [
  //   successUpdateMovie,
  //   errorUpdateMovie,
  //   successUpdateNoneImageMovie,
  //   errorUpdateNoneImageMovie,
  // ]);

  useEffect(() => {
    if (successAddEvent) {
      enqueueSnackbar(
        `Add new movie successfully: ${successAddEvent.brief}`,
        { variant: "success" }
      );
    }
    if (errorAddEvent) {
      enqueueSnackbar(errorAddEvent, { variant: "error" });
    }
  }, [successAddEvent, errorAddEvent]);

  // x??a m???t phim
  const handleDeleteOne = (maPhim) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        if (!loadingDelete) {
          // n???u click x??a li??n t???c m???t user
          dispatch(deleteMovie(maPhim));
          // window.location.reload();
        }
        swalWithBootstrapButtons.fire(
          '???? xo??!',
          'B???n ???? xo?? n??.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          '???? hu???',
          'Hu??? ?????t h??ng n??y :)',
          'error'
        )
      }
    })

  };
  const handleEdit = (eventItem) => {
    selectedPhim.current = eventItem;
    setOpenModal(true);
  };

  const onUpdate = (movieObj, hinhAnh, fakeImage) => {
  //   if (loadingUpdateEvent || loadingUpdateNoneImageMovie) {
  //   if (loadingUpdateEvent) {
  //     return undefined;
  //   }
  //   setOpenModal(false);
  //   newImageUpdate.current = fakeImage;
  //   if (typeof hinhAnh === "string") {
  //     // n???u d??ng updateMovieUpload s??? b??? reset danhGia v??? 10
  //     const movieUpdate = eventListDisplay?.find(
  //       (event) => event.id === fakeImage.id
  //     ); // l???y ra url g???c, tr??nh g???i base64 t???i backend
  //     movieObj.smallImageURl = movieUpdate.smallImageURl;
  //     dispatch(putEventUpdate(movieObj));
  //     return undefined;
  //   }
  //   // return undefined;
  //   // dispatch(updateMovieUpload(movieObj));
  // };
  dispatch(putEventUpdate(movieObj));
  enqueueSnackbar("Th??nh c??ng", { variant: "success" });
  }
  const onAddMovie = (movieObj) => {
    console.log("D??? li???u event th??m: ", movieObj);
    if (!loadingAddEvent) {
      dispatch(postAddEvent(movieObj));
      enqueueSnackbar("Th??nh c??ng", { variant: "success" });
    }
    setOpenModal(false);
  };
  const handleAddMovie = () => {
    const emtySelectedEvent = {
      brief:"",
      description: "",
      image1 : "",
      title:"",
      mainImage:"",
      status:"",
      type:"",
    };
    selectedPhim.current = emtySelectedEvent;
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
    let searchEventListDisplay = eventListDisplay?.filter((event) => {
      const matchTenPhim =
        slugify(event?.brief ?? "", modifySlugify)?.indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      const matchMoTa =
        slugify(event?.status ?? "", modifySlugify)?.indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      const matchNgayKhoiChieu =
        slugify(event?.type ?? "", modifySlugify)?.indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      return matchTenPhim || matchMoTa || matchNgayKhoiChieu;
    });
    if (newImageUpdate.current && callApiChangeImageSuccess.current) {
      // hi???n th??? h??nh b???ng base64 thay v?? url, l???i react kh??ng hi???n th??? ????ng h??nh m???i c???p nh???t(???? c???p h??nh thanh c??ng nh??ng url backend tr??? v??? gi??? nguy??n ???????ng d???n)
      searchEventListDisplay = searchEventListDisplay?.map((event) => {
        if (event.id === newImageUpdate.current.id) {
          return { ...event, smallImageURl: newImageUpdate.current.smallImageURl};
        }
        return event;
      });
    }
    return searchEventListDisplay;
  };

  const columns = [
    {
      field: "hanhDong",
      headerName: "Action",
      width: 130,
      renderCell: (params) => (
        <Action
          onEdit={handleEdit}
          // onDeleted={handleDeleteOne}
          phimItem={params.row}
        />
      ),
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
    },
    {
      field: "brief",
      headerName: "Name Event",
      width: 250,
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
      hide: true,
    },
    {
      field: "title",
      headerName: "Ti??u ?????",
      width: 500,
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },
    {
      field: "description",
      headerName: "M?? t???",
      width: 250,
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
      hide:true,
    },
    {
      field: "mainImage",
      headerName: "H??nh ???nh",
      width: 200,
      renderCell: (params) => (
        <Tooltip title={params.row.mainImage}>
          <img
            style={{
              maxWidth: "100%",
              height: "100%",
              borderRadius: 4,
              marginRight: 15,
            }}
            src={params.row.mainImage}
          />
        </Tooltip>
      ),
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
    },
    {
      field: "status",
      headerName: "Tr???ng th??i",
      width: 180,
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },
    {
      field: "type",
      headerName: "Lo???i",
      width: 150,
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },
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
    // { field: "id", hide: true, width: 130 },
    // { field: "categories", hide: true, width: 130 },
    // { field: "duration", hide: true, width: 200, renderCell: RenderCellExpand },
  ];
  const modifySlugify = { lower: true, locale: "vi" };
  return (
    <div style={{ height: "80vh", width: "100%", backgroundColor:"white"}}>
      <div className={classes.control}>
        <div className="row">
          <div className={`col-12 col-md-6 ${classes.itemCtro}`}>
            <Button
              variant="contained"
              color="primary"
              className={classes.addMovie}
              onClick={handleAddMovie}
              disabled={loadingAddEvent}
              startIcon={<AddBoxIcon />}
            >
              Th??m s??? ki???n, khuy???n m??i
            </Button>
          </div>
          <div className={`col-12 col-md-6 ${classes.itemCtro}`}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="T??m ki???m..."
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
          loadingUpdateEvent ||
          loadingDelete ||
          loadingEventList 
          // loadingUpdateNoneImageMovie
        }
        components={{
          LoadingOverlay: CustomLoadingOverlay,
          Toolbar: GridToolbar,
        }}
        // sort
        sortModel={[{ field: "brief", sort: "asc" }]}
      />
      <Dialog open={openModal}>
        <DialogTitle onClose={() => setOpenModal(false)}>
          {selectedPhim?.current?.brief
            ? `Ch???nh s???a: ${selectedPhim?.current?.brief}`
            : "T???o m???i"}
        </DialogTitle>
        <DialogContent dividers>
          <FormAddEvent
            selectedPhim={selectedPhim.current}
            onUpdate={onUpdate}
            onAddMovie={onAddMovie}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
