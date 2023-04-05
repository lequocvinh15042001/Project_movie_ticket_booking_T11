import React, { useEffect, useState } from "react";

import PieChart, {
  Series,
  Label,
  Connector,
  SmallValuesGrouping,
  Legend,
  Export,
} from 'devextreme-react/pie-chart';
import billsApi from "../../../api/billsApi"


export default function PieChartSmallValue() {
  const [data, setData] = useState({
  })
  
  useEffect(() => {
    billsApi.getBillPieChart()
    .then((res) =>{
      setData(
        res?.data?.dayTransactionReports
      )
      console.log("Pie:",data);
    })
    .catch((err) =>{
      console.log(err);
    })
  },[])

  return (
    <React.Fragment>
        <PieChart
        id="pie"
        dataSource={data}
        palette="Bright"
        title="Tỉ lệ giao dịch"
      >
        <Series
          argumentField="dateTran"
          valueField="incomeAmount"
        >
          <Label visible={true} customizeText={formatLabel} format="fixedPoint">
            <Connector visible={true} width={1} />
          </Label>
          <SmallValuesGrouping threshold={4.5} mode="smallValueThreshold" />
        </Series>
        <Legend horizontalAlignment="center" verticalAlignment="bottom" />
        <Export enabled={true} />
      </PieChart>
    </React.Fragment>
  );
}

function formatLabel(arg) {
  return `${arg.argumentText}: ${arg.valueText}%`;
}
