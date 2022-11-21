import React from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useSelector } from "react-redux";
import { useTheme } from "@material-ui/core/styles";

import LstCumRap from "./LstCumRap";
import useStyles from "./style";
import { underLine } from "../../../styles/materialUi";
import { colorTheater } from "../../../constants/theaterData";
import Seperate from "../../../components/Seperate";
import MobileLstCumrap from "./MobileLstCumrap";

export default function HeThongRap() {
  const theme = useTheme();
  const isMobileTheater = useMediaQuery(theme.breakpoints.down("sm"));
  const { theaterList, errorTheaterList } = useSelector(
    (state) => state.theaterReducer
  );
  console.log("Xuất hệ thống rạp: ", theaterList);
  const [valueHeThongRap, setValueHeThongRap] = React.useState(0);
  const classes = useStyles({ isMobileTheater, underLine });

  console.log(valueHeThongRap);

  if (errorTheaterList) {
    return <div>{errorTheaterList}</div>;
  }
  return (
    <div id="cumrap">
      <Seperate />
      <div className={classes.theater}>
        <Tabs
          variant={isMobileTheater ? "scrollable" : "standard"}
          scrollButtons="on"
          orientation={isMobileTheater ? "horizontal" : "vertical"}
          value={valueHeThongRap}
          classes={{ indicator: classes.tabs__indicator, root: classes.taps }}
        >
          {theaterList?.content?.map((theater, index) => (
            <Tab
              onClick={() => setValueHeThongRap(index)}
              disableRipple
              classes={{
                root: classes.tap,
                textColorInherit: classes.textColorInherit,
              }}
              key={theater?.id}
              label={
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={theater?.branch?.imgURL}
                  alt="theaterLogo"
                />
              }
            />
          ))}
        </Tabs>
        {theaterList?.content?.map((theater, index2) => (
          <div
            hidden={valueHeThongRap !== index2}
            key={theater?.id}
            className={classes.cumRap}
          >
            {/* {isMobileTheater ? (
              <MobileLstCumrap lstCumRap={theater.content} />
            ) : (
              <LstCumRap
                lstCumRap={theater.content}
                color={
                  colorTheater[
                    theater.branch?.name?.toUpperCase()
                  ]
                }
                maHeThongRap={theater.id}
              />
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
}
