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
import DialogActions from '@mui/material/DialogActions';
import Fab from "@material-ui/core/Fab";
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
// import FormAddEvent from "./FormAddEvent";
import Swal from "sweetalert2";
import { getBillsList, postAddBill, putBillUpdate, resetBillList } from "../../reducers/actions/Bill";
import { Tooltip } from "@material-ui/core";
import { DialogContentText } from "@mui/material";
import Slide from '@mui/material/Slide';
import billsApi from "../../api/billsApi";
import formatDate from "../../utilities/formatDate";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CustomLoadingOverlay() {
  return (
    <GridOverlay>
      <CircularProgress style={{ margin: "auto" }} />
    </GridOverlay>
  );
}

export default function MoviesManagement() {
  const [billListDisplay, setBillListDisplay] = useState([]);
  const [billListLoc, setBillListLoc] = useState([]);
  console.log("billListDisplay: ", billListDisplay);
  const classes = useStyles();
  const  {enqueueSnackbar}  = useSnackbar();
  let {
    billList,
    loadingBillList,
    loadingDelete,
    errorDelete,
    successDelete,
    successUpdateBill,
    errorUpdateBill,
    loadingUpdateBill,
    loadingAddBill,
    successAddBill,
    errorAddBill,
    // loadingUpdateNoneImageMovie,
    // successUpdateNoneImageMovie,
    // errorUpdateNoneImageMovie,
  } = useSelector((state) => state.billsManagementReducer);
  const dispatch = useDispatch();
  const newImageUpdate = useRef("");
  const callApiChangeImageSuccess = useRef(false);
  const [valueSearch, setValueSearch] = useState("");
  const clearSetSearch = useRef(0);
  const [openModal, setOpenModal] = React.useState(false);
  const selectedPhim = useRef(null);
  const isMobile = useMediaQuery("(max-width:768px)");
  const [listBill, setListBill] = useState([])
  useEffect(() => {
    if (
      !billList
    ) {
      dispatch(getBillsList());
    }
  }, [
  ]); // khi v???a th??m phim m???i xong m?? x??a li??n backend s??? b??o l???i x??a kh??ng ???????c nh??ng th???c ch???t ???? x??a th??nh c??ng > errorDeleteMovie nh??ng v???n ti???n h??nh l??m m???i l???i danh s??ch

  useEffect(() => {
    return () => {
      dispatch(resetBillList());
    };
  }, []);
  useEffect(() => {
    if (billList) {
      let newBillListDisplay = billList?.map((bill) => ({
        ...bill,
        hanhDong: "",
        id: bill.id,
        email:bill?.user?.email,
        idUser:bill?.user?.id,
        imageUser:bill?.user?.image,
        nameUser:bill?.user?.name,
        usernameUser:bill?.user?.username,
        createdTime:`${formatDate(bill?.createdTime.slice(
          0,
          10
        )).dateFull}, ${bill?.createdTime.slice(11, 19)}`,
      }));
      setBillListDisplay(newBillListDisplay);

      // let newBillListLoc = billList?.data?.reduce((bill) => {
      //   if(bill?.type === "REVIEWS") {
      //     return bill
      //   }
      // });
      // setBillListLoc(newBillListLoc);
    }

  }, [billList]);

  // useEffect(() => {
  //     let newBillListLoc = billList?.data?.push((bill) => {
  //       if(bill?.type === "REVIEWS") {
  //         return bill
  //       }
  //       else {return}
  //     });
  //     setBillListLoc(newBillListLoc);
  // }, []);

  // console.log(billListLoc);

  // useEffect(() => {
  //   // delete movie xong th?? th??ng b??o
  //   if (errorDelete === "Delete Success but backend return error") {
  //     successDelete = "Delete Success !";
  //   }
  //   if (successDelete) {
  //     enqueueSnackbar(successDelete, { variant: "success" });
  //     return;
  //   }
  //   if (errorDelete) {
  //     enqueueSnackbar(errorDelete, { variant: "error" });
  //   }
  // }, [errorDelete, successDelete]);

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

  // useEffect(() => {
  //   if (successAddBill) {
  //     enqueueSnackbar(
  //       `Add new movie successfully: ${successAddBill.brief}`,
  //       { variant: "success" }
  //     );
  //   }
  //   if (errorAddBill) {
  //     enqueueSnackbar(errorAddBill, { variant: "error" });
  //   }
  // }, [successAddBill, errorAddBill]);

  // x??a m???t phim
  // const handleDeleteOne = (maPhim) => {
  //   const swalWithBootstrapButtons = Swal.mixin({
  //     customClass: {
  //       confirmButton: 'btn btn-success',
  //       cancelButton: 'btn btn-danger'
  //     },
  //     buttonsStyling: false
  //   })
    
  //   swalWithBootstrapButtons.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes, delete it!',
  //     cancelButtonText: 'No, cancel!',
  //     reverseButtons: true
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       if (!loadingDelete) {
  //         // n???u click x??a li??n t???c m???t user
  //         dispatch(deleteMovie(maPhim));
  //         // window.location.reload();
  //       }
  //       swalWithBootstrapButtons.fire(
  //         '???? xo??!',
  //         'B???n ???? xo?? n??.',
  //         'success'
  //       )
  //     } else if (
  //       /* Read more about handling dismissals below */
  //       result.dismiss === Swal.DismissReason.cancel
  //     ) {
  //       swalWithBootstrapButtons.fire(
  //         '???? hu???',
  //         'Hu??? ?????t h??ng n??y :)',
  //         'error'
  //       )
  //     }
  //   })

  // };
  const handleEdit = (billItem) => {
    selectedPhim.current = billItem;
    console.log(selectedPhim.current);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Ch???c ch???n thanh to??n?',
      text: "H??y ki???m tra k?? tr?????c khi thanh to??n!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Thanh to??n ngay!',
      cancelButtonText: 'Kh??ng, d???ng l???i!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        if (!loadingDelete) {
          // n???u click x??a li??n t???c m???t user
          // dispatch(deleteMovie(maPhim));
          // window.location.reload();
          billsApi.postThanhToan(billItem.id)
          .then((res) =>{
            console.log(res);
            swalWithBootstrapButtons.fire(
              '???? thanh to??n!',
              'DONE.',
              'success'
            )
          })
          .catch((err) => {
            console.log(err);
            swalWithBootstrapButtons.fire(
              'Bill ???? qu?? h???n',
              'Kh??ng th??? thanh to??n!',
              'error'
            )
          })
        }
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          '???? d???ng',
          'Ki???m tra th??ng tin v?? n???i dung!',
          'error'
        )
      }
    })
    // setOpenModal(true);
  };

  // const handleTuChoi = (billItem) => {
  //   selectedPhim.current = billItem;
  //   // console.log(selectedPhim.current);
  //   const swalWithBootstrapButtons = Swal.mixin({
  //     customClass: {
  //       confirmButton: 'btn btn-success',
  //       cancelButton: 'btn btn-danger'
  //     },
  //     buttonsStyling: false
  //   })
    
  //   swalWithBootstrapButtons.fire({
  //     title: 'Ch???c ch???n t??? ch???i?',
  //     text: "H??y ?????c k??? n???i dung!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'B??? duy???t ngay!',
  //     cancelButtonText: 'Kh??ng, d???ng l???i!',
  //     reverseButtons: true
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       if (!loadingDelete) {
  //         billsApi.putTuChoiBill(billItem.id)
  //         .then((res) =>{
  //           window.location.reload();
  //           console.log(res);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         })
  //       }
  //       swalWithBootstrapButtons.fire(
  //         '???? t??? ch???i!',
  //         'DONE.',
  //         'success'
  //       )
  //     } else if (
  //       /* Read more about handling dismissals below */
  //       result.dismiss === Swal.DismissReason.cancel
  //     ) {
  //       swalWithBootstrapButtons.fire(
  //         '???? d???ng',
  //         'Ki???m tra th??ng tin v?? n???i dung!',
  //         'error'
  //       )
  //     }
  //   })
  //   // setOpenModal(true);
  // };

  // const handleDelete = (billItem) => {
  //   selectedPhim.current = billItem;
  //   // console.log(selectedPhim.current);
  //   const swalWithBootstrapButtons = Swal.mixin({
  //     customClass: {
  //       confirmButton: 'btn btn-success',
  //       cancelButton: 'btn btn-danger'
  //     },
  //     buttonsStyling: false
  //   })
    
  //   swalWithBootstrapButtons.fire({
  //     title: 'Ch???c ch???n Xo???',
  //     text: "H??y ?????c k??? n???i dung!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Xo?? ngay!',
  //     cancelButtonText: 'Kh??ng, d???ng l???i!',
  //     reverseButtons: true
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       if (!loadingDelete) {
  //         billsApi.deleteBill(billItem.id)
  //         .then((res) =>{
  //           window.location.reload();
  //           console.log(res);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         })
  //       }
  //       swalWithBootstrapButtons.fire(
  //         '???? Xo??!',
  //         'DONE.',
  //         'success'
  //       )
  //     } else if (
  //       /* Read more about handling dismissals below */
  //       result.dismiss === Swal.DismissReason.cancel
  //     ) {
  //       swalWithBootstrapButtons.fire(
  //         '???? d???ng',
  //         'Ki???m tra th??ng tin v?? n???i dung!',
  //         'error'
  //       )
  //     }
  //   })
  //   // setOpenModal(true);
  // };

  // const onUpdate = (movieObj, hinhAnh, fakeImage) => {
  //   if (loadingUpdateBill || loadingUpdateNoneImageMovie) {
  //   if (loadingUpdateBill) {
  //     return undefined;
  //   }
  //   setOpenModal(false);
  //   newImageUpdate.current = fakeImage;
  //   if (typeof hinhAnh === "string") {
  //     // n???u d??ng updateMovieUpload s??? b??? reset danhGia v??? 10
  //     const movieUpdate = billListDisplay?.find(
  //       (bill) => bill.id === fakeImage.id
  //     ); // l???y ra url g???c, tr??nh g???i base64 t???i backend
  //     movieObj.smallImageURl = movieUpdate.smallImageURl;
  //     dispatch(putBillUpdate(movieObj));
  //     return undefined;
  //   }
  //   // return undefined;
  //   // dispatch(updateMovieUpload(movieObj));
  // };
  // dispatch(putBillUpdate(movieObj));
  // enqueueSnackbar("Th??nh c??ng", { variant: "success" });
  // }
  // const onAddMovie = (movieObj) => {
  //   console.log("D??? li???u bill th??m: ", movieObj);
  //   if (!loadingAddBill) {
  //     // dispatch(postAddBill(movieObj));
  //     enqueueSnackbar("Th??nh c??ng", { variant: "success" });
  //   }
  //   setOpenModal(false);
  // };
  // const onXemQua = (movieObj) => {
  //   console.log("D??? li???u bill th??m: ", movieObj);
  //   selectedPhim.current = movieObj
  //   setOpen(true);
  // };

  const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = (user) => {
    setOpen(false);
  };

  // const handleAddMovie = () => {
  //   const emtySelectedBill = {
  //     createdTime:"",
  //     price:"",
  //     status : "",
  //     email:"",
  //     idUser:"",
  //     id:"",
  //     imageUser:"",
  //     nameUser:"",
  //     usernameUser:""
  //   };
  //   selectedPhim.current = emtySelectedBill;
  //   setOpenModal(true);
  // };

  const handleInputSearchChange = (props) => {
    clearTimeout(clearSetSearch.current);
    clearSetSearch.current = setTimeout(() => {
      setValueSearch(props);
    }, 500);
  };

  const onFilter = () => {
    // d??ng useCallback, slugify b??? d???u ti???ng vi???t
    let searchBillListDisplay = billListDisplay?.filter((bill) => {
      const matchTenPhim =
        slugify(bill?.brief ?? "", modifySlugify)?.indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      const matchMoTa =
        slugify(bill?.status ?? "", modifySlugify)?.indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      const matchNgayKhoiChieu =
        slugify(bill?.type ?? "", modifySlugify)?.indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      return matchTenPhim || matchMoTa || matchNgayKhoiChieu;
    });
    if (newImageUpdate.current && callApiChangeImageSuccess.current) {
      // hi???n th??? h??nh b???ng base64 thay v?? url, l???i react kh??ng hi???n th??? ????ng h??nh m???i c???p nh???t(???? c???p h??nh thanh c??ng nh??ng url backend tr??? v??? gi??? nguy??n ???????ng d???n)
      searchBillListDisplay = searchBillListDisplay?.map((bill) => {
        if (bill.id === newImageUpdate.current.id) {
          return { ...bill, smallImageURl: newImageUpdate.current.smallImageURl};
        }
        return bill;
      });
    }
    return searchBillListDisplay;
  };

  const columns = [
    {
      field: "hanhDong",
      headerName: "Thanh to??n",
      width: 150,
      renderCell: (params) => (
        <Action
          onEdit={handleEdit}
          // onDeleted={handleDelete}
          phimItem={params.row}
          // onXemQua={onXemQua}
          // onTuChoi={handleTuChoi}
        />
      ),
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
    },
    {
      field: "createdTime",
      headerName: "Th???i gian ?????t",
      width: 280,
      type: "dateTime",
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
      // hide: true,
    },
    {
      field: "price",
      headerName: "????n gi??",
      width: 130,
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },
    {
      field: "usernameUser",
      headerName: "T??i kho???n ng?????i ?????t",
      width: 180,
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },
    {
      field: "nameUser",
      headerName: "T??n ng?????i ?????t",
      width: 100,
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
      hide: true,
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
      field: "id",
      headerName: "M?? ho?? ????n",
      width: 130,
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },
    {
      field: "idUser",
      headerName: "ID Ng?????i ?????t",
      width: 120,
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },
    {
      field: "email",
      headerName: "Email",
      width: 120,
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },
    {
      field: "imageUser",
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
          {/* <div className={`col-12 col-md-6 ${classes.itemCtro}`}>
            <Button
              variant="contained"
              color="primary"
              className={classes.addMovie}
              onClick={handleAddMovie}
              disabled={loadingAddBill}
              startIcon={<AddBoxIcon />}
            >
              Th??m s??? ki???n, khuy???n m??i
            </Button>
          </div> */}
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
          loadingUpdateBill ||
          loadingDelete ||
          loadingBillList 
          // loadingUpdateNoneImageMovie
        }
        components={{
          LoadingOverlay: CustomLoadingOverlay,
          Toolbar: GridToolbar,
        }}
        // sort
        sortModel={[{ field: "nameUser", sort: "asc" }]}
      />

      <Dialog open={openModal}>
        <DialogTitle onClose={() => setOpenModal(false)}>
          {selectedPhim?.current?.brief
            ? `Ch???nh s???a: ${selectedPhim?.current?.brief}`
            : "T???o m???i"}
        </DialogTitle>
        <DialogContent dividers>
          {/* <FormAddBill
            selectedPhim={selectedPhim.current}
            onUpdate={onUpdate}
            onAddMovie={onAddMovie}
          /> */}
        </DialogContent>
      </Dialog>
          
    </div>
  );
}
