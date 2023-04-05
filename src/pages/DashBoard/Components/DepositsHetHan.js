import React, { useEffect, useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import billsApi from "../../../api/billsApi"

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
});



export default function Deposits() {


  const [data2, setData2] = useState({
    totalIncome:"",
    totalTicket:"",
    totalTransaction:"",
    listDateTran:[],
  })

  useEffect(() => {
    billsApi.getBillDashBoardHetHan()
    .then((res) =>{
      console.log(res);
      setData2(
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
      <Title>Doanh thu đáng được nhận nếu người dùng thanh toán</Title>
      <Typography component="p" variant="h4">
        {/* {data2?.totalIncome}VND */}
        {`${data2?.totalIncome.toLocaleString("vi-VI")} VND`}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Từ 01/12/2022 - 01/05/2023
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Số lượng GD không thành công: {data2?.totalTransaction}
      </Typography>
    </React.Fragment>
  );
}
