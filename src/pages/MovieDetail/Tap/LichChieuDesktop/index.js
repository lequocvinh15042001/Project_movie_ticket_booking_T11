import React from 'react'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import useStyles from './style'
import RightSection from './RightSection';

export default function LichChieuDesktop({ data }) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        classes={{ root: classes.leftSection, indicator: classes.indicator }}
      >
        {/* xuất ra các cái branch */}
        {data?.content?.map(theater => (
          <Tab disableRipple key={theater.branch.id} classes={{ wrapper: classes.wrapper, root: classes.tabRoot }} label={
            <>
              <img className={classes.logo} src={theater.branch.imgURL} alt="logoTheater" />
              <span>{theater.branch.name}</span>
            </>
          } />
        ))}
      </Tabs>
      {/* Để xuất ra các cái thông tin brach cụ thể */}
      <div className={classes.rightSection}>
        {data?.content?.length === 0 && <p style={{ padding: 10 }}>Hiện tại chưa có lịch chiếu cho phim này</p>}
        {data?.content?.map((theater, i) => (
          <div key={theater.branch.id} style={{ display: value === i ? "block" : "none" }}>
            <RightSection branch={theater} />
          </div>
        ))}
      </div>
    </div >
  );
}


