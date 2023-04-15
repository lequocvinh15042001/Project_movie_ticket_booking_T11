import React, { useEffect, useState } from 'react';

import Chart, {
  ArgumentAxis,
  Legend,
  Series,
  ValueAxis,
  Label,
  Export,
  Tick,
} from 'devextreme-react/chart';
import billsApi from "../../../api/billsApi"


export default function TicketPerDay() {
    const [data, setData] = useState({
    })

    useEffect(() => {
        billsApi.getTicketSalePerDay()
        .then((res) =>{
          setData(
            res?.data
          )
          console.log("Side:",data);
        })
        .catch((err) =>{
          console.log(err);
        })
      },[])

    return(

            <Chart
            title="Theo dõi số vé bán ra theo ngày"
            dataSource={data?.dayTransactionReports}
            rotated={true}
            id="chart"
            >
                <ValueAxis>
                <Tick visible={false} />
                <Label visible={false} />
                </ValueAxis>

                <Series
                valueField="transactionCount"
                argumentField="dateTran"
                type="bar"
                color="#ad071d"
                >
                <Label visible={true} backgroundColor="#000" />
                </Series>

                <Legend visible={false} />

                <Export enabled={true} />

            </Chart>
    )
}