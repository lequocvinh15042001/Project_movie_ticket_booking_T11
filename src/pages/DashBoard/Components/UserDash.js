import React, { useEffect, useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import billsApi from "../../../api/billsApi"
import { useDispatch, useSelector } from "react-redux";
import { getUsersList, resetUserList } from "../../../reducers/actions/UsersManagement";

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
});

export default function UserDash() {
    const dispatch = useDispatch();

    const {
        usersList,
      } = useSelector((state) => state.usersManagementReducer);

  useEffect(() => {
    // get list user lần đầu
    if (!usersList) {
      dispatch(getUsersList());
    }
    return () => dispatch(resetUserList());
  }, []);


    const [data3, setData3] = useState({})

    useEffect(() => {
    billsApi.getBillDashBoardSortAZ()
    .then((res) =>{
        console.log("Êhhehehe",res);
        setData3(
        res?.data
        )
    })
    .catch((err) =>{
        console.log(err);
    })
    },[])


  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Số lượng khách hàng đăng ký</Title>
      <Typography component="p" variant="h4">
        {/* {data2?.totalIncome}VND */}
        {usersList?.data?.length}{" "}người
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Từ 01/12/2022 - 01/05/2023
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext} variant="h6">
        Số khách dùng dịch vụ: <span style={{color:"red"}}>{data3?.length}</span>
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext} variant="h6">
        Số khách chưa dùng DV đặt vé: <span style={{color:"red"}}>{usersList?.data?.length - data3?.length}</span>
      </Typography>
    </React.Fragment>
  );
}
