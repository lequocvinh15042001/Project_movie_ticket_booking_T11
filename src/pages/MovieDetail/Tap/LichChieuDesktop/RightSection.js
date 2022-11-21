import React, { useState, useMemo } from "react";

import useStyles from "./style";
import formatDate from "../../../../utilities/formatDate";
import ItemCumRap from "../../../../components/ItemCumRap";
import { selectDesktopData } from "../../../../reducers/selector/MovieDetail";
import { logger } from "workbox-core/_private";
import { useSelector } from "react-redux";

export default function RightSection({ branch }) {
  console.log(branch, 'branch nè');
  const [indexSelected, setindexSelected] = useState(0);
  // const desktopData = useMemo(
  //   () => selectDesktopData(branch),
  //   [branch]
  // );
  console.log(branch);
  const classes = useStyles();

  const handleSelectDay = (i) => {
    setindexSelected(i);
  };
  const {theaterList} = useSelector((state) => state.theaterReducer)
  console.log("Hệ thống rạp: ", theaterList);
  return (
    <div>
      <div className={classes.listDay}>
        {/* {branch?.map((day, i) => (
          <div
            className={classes.dayItem}
            key={day.id}
            style={{ color: i === indexSelected ? "#fb4226" : "#000" }}
            onClick={() => handleSelectDay(i)}
          >
            <p>{formatDate(day).startDate}</p>
            <p
              style={{
                fontSize: i === indexSelected ? "18px" : "16px",
                transition: "all .2s",
              }}
            >
              {formatDate(day).YyMmDd}
            </p>
          </div>
        ))} */}
          <div
            className={classes.dayItem}
            key={branch.id}
            // style={{ color: i === indexSelected ? "#fb4226" : "#000" }}
            // onClick={() => handleSelectDay(i)}
          >
            <p>{formatDate(branch.startDate).startDate}</p>
            <p>{branch.startTime}</p>
            <p
              style={{
                // fontSize: i === indexSelected ? "18px" : "16px",
                transition: "all .2s",
              }}
            >
              {formatDate(branch.startDate).YyMmDd}
            </p>
          </div>
      </div>
      {/* {desktopData?.allArrayCumRapChieuFilterByDay?.map(
        (arrayCumRapChieuFilterByDay, i) => (
          <div
            style={{ display: indexSelected === i ? "block" : "none" }}
            key={i}
          >
            {arrayCumRapChieuFilterByDay.map((item) => (
              <ItemCumRap
                key={item.tenCumRap}
                tenCumRap={item.tenCumRap}
                maLichChieu={item.maLichChieu}
                lichChieuPhim={item.lichChieuPhim}
                defaultExpanded={true}
              />
            ))}
          </div>
        )
      )} */}
    </div>
  );
}
