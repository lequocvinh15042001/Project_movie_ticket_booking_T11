import React, { useEffect, useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import billsApi from "./../../../api/billsApi"

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
});



export default function Deposits() {

  const [data, setData] = useState({
    totalIncome:"",
    totalTicket:"",
    totalTransaction:"",
    listDateTran:[],
  })

  useEffect(() => {
    billsApi.getBillDashBoard()
    .then((res) =>{
      console.log(res);
      setData(
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
      <Title>Tổng doanh thu đạt được</Title>
      <Typography component="p" variant="h4">
        {`${data?.totalIncome.toLocaleString("vi-VI")} VND`}
        {/* {data?.totalIncome}VND */}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Từ 01/12/2022 - 01/05/2023
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Số lượng vé được đặt: {data?.totalTicket}
        {/* {`${data?.totalTicket?.toLocaleString("vi-VI")} đ`} */}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Số lượng GD thành công: {data?.totalTransaction}
      </Typography>
      {/* <div>
        <Link color="primary" href="javascript:;">
          Xem chi tiết
        </Link>
      </div> */}
    </React.Fragment>
  );
}
