import React, { useEffect, useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import billsApi from "./../../../api/billsApi"


import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

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

  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Website Traffic Sources"
    },
    data: [{
      type: "pie",
      startAngle: 75,
      toolTipContent: "<b>{label}</b>: {y}%",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: [
        { y: 18, label: "Direct" },
        { y: 49, label: "Organic Search" },
        { y: 9, label: "Paid Search" },
        { y: 5, label: "Referral" },
        { y: 19, label: "Social" }
      ]
    }]
  }
  const classes = useStyles();
  return (
    <>
    <React.Fragment>
      <Title>Doanh thu đạt được</Title>
      <Typography component="p" variant="h4">
        {`${data?.totalIncome.toLocaleString("vi-VI")} VND`}
        {/* {data?.totalIncome}VND */}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext} >
        Từ 01/12/2022 - 01/05/2023
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext} variant="h6">
        Số lượng vé được đặt: <span style={{color:"red"}}>{data?.totalTicket}</span>
        {/* {`${data?.totalTicket?.toLocaleString("vi-VI")} đ`} */}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext} variant="h6">
        Số lượng GD thành công: <span style={{color:"red"}}>{data?.totalTransaction}</span>
      </Typography>
      {/* <div>
        <Link color="primary" href="javascript:;">
          Xem chi tiết
        </Link>
      </div> */}
    </React.Fragment>
    <CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
    </>
  );
}
