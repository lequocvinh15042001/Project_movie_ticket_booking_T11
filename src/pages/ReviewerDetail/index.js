import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { getMovieDetails, getMovieShowtimes } from '../../reducers/actions/MovieDetail';
import { DISPLAY_MOBILE_HOMEPAGE } from '../../constants/config'
import { RESET_MOVIE_DETAIL_REDUCER } from '../../reducers/constants/MovieDetail';
import Mobile from './Mobile';
import Desktop from './Desktop';
import { getInfoReviewer } from '../../reducers/actions/UsersManagement';
import { getReviewsListByUser } from '../../reducers/actions/ReviewsManagement';

export default function Index() {
  const isMobile = useMediaQuery(DISPLAY_MOBILE_HOMEPAGE)
  const { successInfoReviewer, errorInfoReviewer} = useSelector((state) => state.usersManagementReducer);
  const { reviewListByUser, errorReviewListByUser} = useSelector((state) => state.reviewsManagementReducer);
  
  const param = useParams()
  console.log(param);
  const dispatch = useDispatch();

  console.log(successInfoReviewer);

  useEffect(function () {
    dispatch(getInfoReviewer(param.maPhim))
    dispatch(getReviewsListByUser(param.maPhim))
  }, [param.maPhim])


  if (errorInfoReviewer) {
    return <div>{errorInfoReviewer}</div>
  }
    return (
    <>
      <Desktop reviewerDetailShowtimes={successInfoReviewer} reviewList={reviewListByUser} isMobile={isMobile} />
    </>
  )
}
