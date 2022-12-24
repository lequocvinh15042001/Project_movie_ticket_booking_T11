import React, { useEffect, useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import billsApi from "./../../../api/billsApi"


// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}



const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    312.44
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574",
    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    100.81
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    654.39
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  )
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Orders() {

  const [data, setData] = useState({
  })

  useEffect(() => {
    billsApi.getBillDashBoardSortAZ()
    .then((res) =>{
      console.log(res);
      setData(
        res.data
      )
    })
    .catch((err) =>{
      console.log(err);
    })
  },[])

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Thống kê khách hàng thanh toán nhiều nhất hệ thống</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Khách hàng</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Số lượng giao dịch hiện tại</TableCell>
            <TableCell>Tổng số tiền</TableCell>
            <TableCell>Tổng số vé</TableCell>
            <TableCell align="right">VISA</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map(row => (
            <TableRow key={row?.id}>
              <TableCell>{row?.name}</TableCell>
              <TableCell>{row?.email}</TableCell>
              <TableCell>{row?.transactionCount}</TableCell>
              <TableCell>{row?.incomeAmount}</TableCell>
              <TableCell>{row?.ticketAmount}</TableCell>
              <TableCell align="right">"VISA ⠀•••• 1283"</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
