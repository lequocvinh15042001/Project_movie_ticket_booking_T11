import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';

import useStyles from './style'
import { getEventsList } from '../../../reducers/actions/EventsManagement';
import { useDispatch, useSelector } from 'react-redux';

function TabPanel(props) {
  const { isMobile, children, value, index, ...other } = props;
  return (<div hidden={value !== index}  {...other} >
    <Box p={(isMobile && index === 0) ? 1 : 3}>
      {children}
    </Box>
  </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function SimpleTabs() {
  const dispatch = useDispatch();
  let {
    eventList,
    loadingEventList,
    loadingDelete,
    errorDelete,
    successDelete,
    successUpdateEvent,
    errorUpdateEvent,
    loadingUpdateEvent,
    loadingAddEvent,
    successAddEvent,
    errorAddEvent,
    // loadingUpdateNoneImageMovie,
    // successUpdateNoneImageMovie,
    // errorUpdateNoneImageMovie,
  } = useSelector((state) => state.eventsManagementReducer);


  useEffect(() => {
    if (
      !eventList ||
      successUpdateEvent ||
      // successUpdateNoneImageMovie ||
      successDelete ||
      errorDelete ||
      successAddEvent
    ) {
      dispatch(getEventsList());
    }
  }, [
    successUpdateEvent,
    // successUpdateNoneImageMovie,
    successDelete,
    errorDelete,
    successAddEvent,
  ]);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} id="tintuc">
      <div className={classes.content}>
      <AppBar className={classes.appBar} position="static" >
          <Tabs centered value={value} onChange={handleChange}>
            <Tab disableRipple style={{backgroundColor:"white"}} classes={{ root: classes.tabButton, selected: classes.tabSelected }} label="Tin t???c khuy???n m??i" />
          </Tabs>
        </AppBar>
        <Fade timeout={400} in={value === 0}>
          <TabPanel value={value} index={0}>
            <div className="row">
              {
                eventList?.data?.map((event, index) => {
                  return(
                  <div className={classes.repons} key={index}>
                    <a href="https://tix.vn/review/7946-review-dinh-thu-oan-khuat-ghost-of-war" className={classes.news}>
                      <img className={classes.fullImg} 
                      src={event?.mainImage} 
                      alt="news-movie" />
                      <div className="py-3">
                        <h4 className="card-title" style={{color:"white"}}>
                          {event.brief}
                          </h4>
                        <p className="text-secondary" 
                            style={{
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis"
                          }}>
                          {event?.description}
                          </p>
                      </div>
                    </a>
                  </div>)
                })
              }
            </div>
          </TabPanel>
        </Fade>
      </div >
    </div >

  );
}
