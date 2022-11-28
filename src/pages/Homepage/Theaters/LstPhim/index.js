import React, { memo, useEffect, useState } from 'react'
import useStyles from './style'

import ThoiLuongDanhGia from '../../../../components/ThoiLuongDanhGia/thoiLuongDanhGia'
import { customScrollbar } from '../../../../styles/materialUi'
import { underLine } from '../../../../styles/materialUi'
import LstNgayChieu from './LstNgayChieu/'
import theatersApi from '../../../../api/theatersApi'

function Index(props) {
const [danhSachPhim, setDanhSachPhim] = useState();
const classes = useStyles({ customScrollbar, underLine });
console.log(props.idRap);
  useEffect(() => {
    theatersApi.getThongTinLichChieuHeThongRapTheoRap(props.idRap)
    .then((response) => {
      console.log("all phimmmmmm: ",response);
      setDanhSachPhim(response.data.data)
    })
    .catch((err) => {
      console.log(err);
    });
  },[])

  const style = {
    fontSize: 12,
    color: "#9b9b9b",
  }
  
  return (
    <div className={classes.lstPhim} hidden={props.hidden}>{/* div root danh sách phim */}
      {danhSachPhim?.content?.map(phim => (
        <div className={classes.phim} key={phim.id}>
          <div className={classes.phim__info}>{/* div thong tin phim */}
            <img src={phim.movie?.smallImageURl} className={classes.phim__img} alt={phim.movie?.name} />
            <div className={classes.phim__text}>
              <p className={classes.phim__text_name}>{phim.movie?.name}</p>
              {/* <ThoiLuongDanhGia maPhim={phim.movie?.id} />phải tách riêng ra vì thời lượng và đánh giá lấy từ một api khác */}
              <span style={{ style }}>
                {phim.movie?.duration} minutes - Room: {phim.room?.name}
              </span>
              {" - "}
              <span style={{ style }}>
                Show: {phim.startDate}
              </span>
            </div>
          </div>
          <div>{/* div danh sách ngày giờ chiếu */}
            <LstNgayChieu lstLichChieuTheoPhim={phim} />
          </div>
        </div>
      ))}
    </div>
  )
}
export default memo(Index)