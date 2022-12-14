import React, { useEffect, useState, useRef } from "react";

import { DataGrid, GridToolbar, GridOverlay } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import RenderCellExpand from "./RenderCellExpand";
import slugify from "slugify";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { useStyles } from "./styles";
import { getAllTicketByAdminStaff } from "../../reducers/actions/Ticket";
import { Tooltip } from "@material-ui/core";

function CustomLoadingOverlay() {
  return (
    <GridOverlay>
      <CircularProgress style={{ margin: "auto" }} />
    </GridOverlay>
  );
}

export default function TicketManagement() {
  const [ticketListDisplay, setTicketListDisplay] = useState([]);
  const classes = useStyles();
  // const  {enqueueSnackbar}  = useSnackbar();
  let 
    {
      allTicketList,
      loadingAllTicketList,
    }
   = useSelector((state) => state.ticketReducer);
  // console.log(allTicketList);
  const dispatch = useDispatch();
  const [valueSearch, setValueSearch] = useState("");
  const clearSetSearch = useRef(0);
  // const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    // if (!allTicketList){
      dispatch(getAllTicketByAdminStaff());
    // }
  }, []); 
  
  useEffect(() => {
    const ticketListDis = allTicketList?.data?.content?.reduce((collect1, ticket) => {
        return [
          ...collect1,
          { ...ticket,
            tenNguoiDat: ticket?.bill?.user?.name,
            ngayDat: new Date(ticket?.bill?.createdTime).toLocaleDateString(),
            gioDat: new Date(ticket?.bill?.createdTime).toLocaleTimeString(),
              //   "en-US",
              //   { hour: "2-digit", minute: "2-digit" }
              // ),
            
            // {new Date(sticket?.bill?.createdTime).toLocaleTimeString(
            //   "en-US",
            //   { hour: "2-digit", minute: "2-digit" }
            // )}

            maVe: ticket?.bill?.id,
            phimDat:ticket?.schedule?.movie?.name,
            rapChieu: ticket?.schedule?.branch?.name,
            phongChieu:ticket?.schedule?.room?.name,
            gioChieu:ticket?.schedule?.startTime,
            ngayChieu:ticket?.schedule?.startDate,
            ghe:ticket?.seat?.name,
            hinhPhim:ticket?.schedule?.movie?.smallImageURl,
          },
        ];
      },[])
      // console.log(ticketListDis);
      setTicketListDisplay(ticketListDis);
  }, []);



  const handleInputSearchChange = (props) => {
    clearTimeout(clearSetSearch.current);
    clearSetSearch.current = setTimeout(() => {
      setValueSearch(props);
    }, 500);
  };

  const onFilter = () => {
    // d??ng useCallback, slugify b??? d???u ti???ng vi???t
    let searchTicketListDisplay = ticketListDisplay?.filter((ticket) => {
      const matchTenNguoiDat =
        slugify(ticket?.tenNguoiDat ?? "", modifySlugify)?.indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      const matchPhimDat =
        slugify(ticket?.phimDat ?? "", modifySlugify)?.indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      const matchNgayGioDat=
        slugify(ticket?.ngayGioDat ?? "", modifySlugify)?.indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      const matchGhe=
      slugify(ticket?.ghe ?? "", modifySlugify)?.indexOf(
        slugify(valueSearch, modifySlugify)
      ) !== -1;
      return matchTenNguoiDat || matchPhimDat || matchNgayGioDat || matchGhe;
    });
    // if (newImageUpdate.current && callApiChangeImageSuccess.current) {
    //   // hi???n th??? h??nh b???ng base64 thay v?? url, l???i react kh??ng hi???n th??? ????ng h??nh m???i c???p nh???t(???? c???p h??nh thanh c??ng nh??ng url backend tr??? v??? gi??? nguy??n ???????ng d???n)
    //   searchEventListDisplay = searchEventListDisplay?.map((event) => {
    //     if (event.id === newImageUpdate.current.id) {
    //       return { ...event, smallImageURl: newImageUpdate.current.smallImageURl};
    //     }
    //     return event;
    //   });
    // }
    return searchTicketListDisplay;
  };
  const columns = [
    {
      field: "maVe",
      headerName: "M??",
      width: 90,
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },
    {
      field: "ghe",
      headerName: "Gh???",
      width: 80,
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },
    {
      field: "tenNguoiDat",
      headerName: "Ng?????i ?????t",
      width: 170,
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },
    {
      field: "phimDat",
      headerName: "Phim",
      width: 200,
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },
    // {
    //   field: "hinhPhim",
    //   headerName: "H??nh ???nh",
    //   width: 200,
    //   headerAlign: "center",
    //   align: "center",
    //   headerClassName: "custom-header",
    //   renderCell: (params) => RenderCellExpand(params),
    // },
    {
      field: "hinhPhim",
      headerName: "H??nh ???nh",
      width: 200,
      renderCell: (params) => (
        <Tooltip title={params.row.hinhPhim}>
          <img
            style={{
              maxWidth: "100%",
              height: "100%",
              borderRadius: 4,
              marginRight: 15,
            }}
            src={params.row.hinhPhim}
          />
        </Tooltip>
      ),
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
    },
    {
      field: "gioDat",
      headerName: "Gi??? ?????t",
      width: 120,
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },
    {
      field: "ngayDat",
      headerName: "Ng??y ?????t",
      width: 110,
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },
    {
      field: "rapChieu",
      headerName: "R???p",
      width: 200,
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },
    {
      field: "phongChieu",
      headerName: "Ph??ng",
      width: 110,
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },
    {
      field: "ngayChieu",
      headerName: "Ng??y chi???u",
      width: 140,
      type: "date",
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
      // valueFormatter: (params) => params.value.slice(0, 10),
    },
    {
      field: "gioChieu",
      headerName: "Gi??? chi???u",
      width: 130,
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },

  ];
  const modifySlugify = { lower: true, locale: "vi" };

  const handlerError = () =>{
    console.log("V?? handler error");
  }

  return (
    <div style={{ height: "80vh", width: "100%", backgroundColor:"white"}}>
      <div className={classes.control}>
        <div className="row">
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
      {ticketListDisplay === undefined ? 
        handlerError() :
        <DataGrid
        className={classes.rootDataGrid}
        rows={onFilter()}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[10, 25, 50]}
        // hi???n loading khi
        loading={
          loadingAllTicketList 
        }
        components={{
          LoadingOverlay: CustomLoadingOverlay,
          Toolbar: GridToolbar,
        }}
        // sort
        sortModel={[{ field: "tenNguoiDat", sort: "asc" }]}
      /> 
      }
      
      {/* <Dialog open={openModal}>
        <DialogTitle onClose={() => setOpenModal(false)}>
          {selectedPhim?.current?.brief
            ? `Edit: ${selectedPhim?.current?.brief}`
            : "Add new"}
        </DialogTitle>
        <DialogContent dividers>
          <FormAddEvent
            selectedPhim={selectedPhim.current}
            onUpdate={onUpdate}
            onAddMovie={onAddMovie}
          />
        </DialogContent>
      </Dialog> */}
    </div>
  );
}
