import React, { useState, useMemo, useEffect } from "react";

import useStyles from "./style";
import formatDate from "../../../../utilities/formatDate";
import ItemCumRap from "../../../../components/ItemCumRap";
import { selectDesktopData } from "../../../../reducers/selector/MovieDetail";
import { logger } from "workbox-core/_private";
import { useSelector } from "react-redux";
import theatersApi from "../../../../api/theatersApi";
import { useParams } from "react-router-dom";

export default function RightSection({ branch, idRap }) {
  // console.log('branch nè', branch);
  const [lich, setLich] = useState();

  const param = useParams()

  const [data, setData] = useState({
    ngayChieuRender: [],
    lichChieuPhimData: [],
  });

    useEffect(() => {
    theatersApi.getThongTinLichChieuPhim(param.maPhim, idRap)
    .then((response) => {
      console.log("all lịch chiếu: ",response.data.data.content);
      const lichChieuPhimData = response.data.data.content
      const ngayChieuRender = lichChieuPhimData.map((item) => {
        return (item.startDate); // tạo mảng mới với item là "2020-12-17" cắt ra từ 2020-12-17T10:10:00
      });
      const ngayChieuRenderRemoveDuplicates = [...new Set(ngayChieuRender)]; // xóa đi phần tử trùng lặp để hiển thị
      setData((data) => ({
        ...data,
        ngayChieuRender: ngayChieuRenderRemoveDuplicates,
        // ngayChieuRender,
        lichChieuPhimData,
      }));
    })
    .catch((err) => {
      console.log(err);
    });
  },[])

  const [indexSelected, setindexSelected] = useState(0);

  // const desktopData = useMemo(
  //   () => selectDesktopData(data),
  //   [data]
  // );
  // console.log(data.ngayChieuRender);

  const classes = useStyles();

  const handleSelectDay = (i, date) => {
    setindexSelected(i);
    theatersApi.getThongTinLichCoNgay(param.maPhim, idRap, date)
    .then((response) => {
      console.log("Api khi chọn ngày: ", response?.data?.data?.content);
      setLich(response?.data);
      console.log("Lịch nè: ", lich);
    })
    .catch((err) => {
      console.log(err);
    });
  };
  const {theaterList} = useSelector((state) => state.theaterReducer)
  return (
    <div>
      <div className={classes.listDay}>
        {data?.ngayChieuRender?.map((day, i) => (
          // <div
          //   className={classes.dayItem}
          //   key={day.id}
          //   style={{ color: i === indexSelected ? "#fb4226" : "#000" }}
          //   onClick={() => handleSelectDay(i)}
          // >
          //   <p>{formatDate(day).startDate}</p>
          //   <p
          //     style={{
          //       fontSize: i === indexSelected ? "18px" : "16px",
          //       transition: "all .2s",
          //     }}
          //   >
          //     {formatDate(day).YyMmDd}
          //   </p>
          // </div>
          <div
            className={classes.dayItem}
            key={day.id}
            style={{ color: i === indexSelected ? "#fb4226" : "#000" }}
            onClick={() => handleSelectDay(i, day)}
          >
            {/* <p>{formatDate(day).startDate}</p> */}
            <p>{day}</p>
            {/* <p>{day.startTime}</p> */}
            {/* <p>{day.start}</p> */}
            <p
              style={{
                fontSize: i === indexSelected ? "18px" : "16px",
                transition: "all .2s",
              }}
            >
              {/* {(day).slice(10,18)} */}
            </p>
          </div> 
        ))}
          {/* <div
            className={classes.dayItem}
            key={branch.id}
            style={{ color: i === indexSelected ? "#fb4226" : "#000" }}
            onClick={() => handleSelectDay(i)}
          >
            <p>{formatDate(branch.startDate).startDate}</p>
            <p>{branch.startTime}</p>
            <p
              style={{
                fontSize: i === indexSelected ? "18px" : "16px",
                transition: "all .2s",
              }}
            >
              {formatDate(branch.startDate).YyMmDd}
            </p>
          </div> */}
      </div>
      {lich?.data?.content?.map(
        (lichChieu, i) => (
          <div
            // style={{ display: indexSelected === i ? "block" : "none" }}
            key={i}
          >
            <ItemCumRap
              key={lichChieu?.id}
              tenCumRap={lichChieu?.room?.name}
              maLichChieu={lichChieu?.id}
              lichChieuPhim={lichChieu}
              diaChi={lichChieu?.branch?.address}
              defaultExpanded={true}
              maPhim={param.maPhim}
            />
            {/* {lichChieu?.map((item) => (
              <ItemCumRap
                key={item?.id}
                tenCumRap={item?.branch?.name}
                maLichChieu={item?.id}
                lichChieuPhim={item}
                defaultExpanded={true}
              />
            ))} */}
          </div>
        )
      )}
    </div>
  );
}
