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
import { getEventsList, putEventUpdate, resetEventList } from "../../reducers/actions/EventsManagement";
import { getReviewsList, resetReviewList } from "../../reducers/actions/ReviewsManagement";

function CustomLoadingOverlay() {
  return (
    <GridOverlay>
      <CircularProgress style={{ margin: "auto" }} />
    </GridOverlay>
  );
}

export default function MoviesManagement() {
  const [reviewListDisplay, setReviewListDisplay] = useState([]);
  console.log("reviewListDisplay: ", reviewListDisplay);
  const classes = useStyles();
  const  {enqueueSnackbar}  = useSnackbar();
  let {
    reviewList,
    loadingReviewList,
    loadingDelete,
    errorDelete,
    successDelete,
    successUpdateReview,
    errorUpdateReview,
    loadingUpdateReview,
    loadingAddReview,
    successAddReview,
    errorAddReview,
    // loadingUpdateNoneImageMovie,
    // successUpdateNoneImageMovie,
    // errorUpdateNoneImageMovie,
  } = useSelector((state) => state.reviewsManagementReducer);
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
      !reviewList ||
      successUpdateReview||
      // successUpdateNoneImageMovie ||
      successDelete ||
      errorDelete ||
      successAddReview
    ) {
      dispatch(getReviewsList());
    }
  }, [
    successUpdateReview,
    // successUpdateNoneImageMovie,
    successDelete,
    errorDelete,
    successAddReview,
  ]); // khi vừa thêm phim mới xong mà xóa liên backend sẽ báo lỗi xóa không được nhưng thực chất đã xóa thành công > errorDeleteMovie nhưng vẫn tiến hành làm mới lại danh sách

  useEffect(() => {
    return () => {
      dispatch(resetReviewList());
    };
  }, []);
  useEffect(() => {
    if (reviewList) {
      let newReviewListDisplay = reviewList?.data?.map((review) => ({
        ...review,
        hanhDong: "",
        id: review.id,
      }));
      setReviewListDisplay(newReviewListDisplay);
    }
  }, [reviewList]);

  useEffect(() => {
    // delete movie xong thì thông báo
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
    if (successAddReview) {
      enqueueSnackbar(
        `Add new review successfully: ${successAddReview.brief}`,
        { variant: "success" }
      );
    }
    if (errorAddReview) {
      enqueueSnackbar(errorAddReview, { variant: "error" });
    }
  }, [successAddReview, errorAddReview]);

  // xóa một phim
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
          // nếu click xóa liên tục một user
          dispatch(deleteMovie(maPhim));
          // window.location.reload();
        }
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your movie is safe :)',
          'error'
        )
      }
    })

  };
  const handleEdit = (reviewItem) => {
    selectedPhim.current = reviewItem;
    setOpenModal(true);
  };

  const onUpdate = (movieObj, hinhAnh, fakeImage) => {
    // if (loadingUpdateEvent || loadingUpdateNoneImageMovie) {
    if (loadingUpdateReview) {
      return undefined;
    }
    setOpenModal(false);
    newImageUpdate.current = fakeImage;
    if (typeof hinhAnh === "string") {
      // nếu dùng updateMovieUpload sẽ bị reset danhGia về 10
      const movieUpdate = reviewListDisplay?.find(
        (review) => review.id === fakeImage.id
      ); // lẩy ra url gốc, tránh gửi base64 tới backend
      // movieObj.smallImageURl = movieUpdate.smallImageURl;
      dispatch(putEventUpdate(movieObj));
      return undefined;
    }
    // dispatch(updateMovieUpload(movieObj));
  };
  const onAddMovie = (movieObj) => {
    if (!loadingAddReview) {
      dispatch(addMovieUpload(movieObj));
    }
    setOpenModal(false);
  };
  const handleAddMovie = () => {
    const emtySelectedEvent = {
      // id: "",
      // name: "",
      // smallImageURl: "",
      // longDescription: "",
      // shortDescription: "",
      // largeImageURL: "",
      // director: "",
      // actors: "",
      // categories: "",
      // releaseDate: "",
      // duration: "",
      // trailerURL: "",
      // language: "",
      // rated: "",
      // isShowing: null,
      brief:"",
      contents: [
        {
        priority : null,
        description : "",
        image : "",
        },
      ],
      title:"",
      mainImage:"",
      status:"",
      typy:"",
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
    // dùng useCallback, slugify bỏ dấu tiếng việt
    let searchReviewListDisplay = reviewListDisplay?.filter((review) => {
      const matchTenPhim =
        slugify(review?.brief ?? "", modifySlugify)?.indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      const matchMoTa =
        slugify(review?.status ?? "", modifySlugify)?.indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      const matchNgayKhoiChieu =
        slugify(review?.type ?? "", modifySlugify)?.indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      return matchTenPhim || matchMoTa || matchNgayKhoiChieu;
    });
    if (newImageUpdate.current && callApiChangeImageSuccess.current) {
      // hiển thị hình bằng base64 thay vì url, lỗi react không hiển thị đúng hình mới cập nhật(đã cập hình thanh công nhưng url backend trả về giữ nguyên đường dẫn)
      searchReviewListDisplay = searchReviewListDisplay?.map((review) => {
        if (review.id === newImageUpdate.current.id) {
          return { ...review, smallImageURl: newImageUpdate.current.smallImageURl};
        }
        return review;
      });
    }
    return searchReviewListDisplay;
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
      headerName: "Name Review",
      width: 250,
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

    {
      field: "title",
      headerName: "Title",
      width: 200,
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },
    {
      field: "mainImage",
      headerName: "Image",
      width: 200,
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
      renderCell: (params) => RenderCellExpand(params),
    },
    {
      field: "status",
      headerName: "Status",
      width: 250,
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },
    {
      field: "type",
      headerName: "Type",
      width: 250,
      headerAlign: "center",
      align: "left",
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
              disabled={loadingAddReview}
              startIcon={<AddBoxIcon />}
            >
              Add Review
            </Button>
          </div>
          <div className={`col-12 col-md-6 ${classes.itemCtro}`}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
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
        // hiện loading khi
        loading={
          loadingUpdateReview ||
          loadingDelete ||
          loadingReviewList 
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
            ? `Edit: ${selectedPhim?.current?.brief}`
            : "Add review"}
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
