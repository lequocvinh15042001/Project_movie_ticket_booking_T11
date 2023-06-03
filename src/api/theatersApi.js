import axiosClient from "./axiosClient";
const theatersApi = {
  //lấy thông tin toàn bộ danh sách hệ thống rạp
  getThongTinHeThongRap: () => {
    const path = "/branches/getAll";
    return axiosClient.get(path);
  },

  getThongTinPhim: (maPhim) => {
    const path = `/movies/details/${maPhim}`;
    // console.log("vô api");
    return axiosClient.get(path);
  },

  //lấy toàn bộ thông tin lịch chiếu của tất cả hệ thống
  getThongTinLichChieuHeThongRap: () => {
    const path = "/branches/getAll?page=0&size=20";
    return axiosClient.get(path);
  },

  getThongTinLichChieuTheoNgayChieu: (startDate) => {
    const path = `/schedule/getAll?page=0&size=300&startDate=${startDate}`;
    return axiosClient.get(path);
  },

  postThemLichChieu: (schedule) => {
    const path = "/schedule/add";
    return axiosClient.post(path, schedule);
  },

  getThongTinLichChieuLe: () => {
    const path = "/schedule/getAll?page=0&size=300";
    return axiosClient.get(path);
  },

  getTatCaLichChieuAdmin: () => {
    const path = "/schedule?isAdmin=1";
    return axiosClient.get(path);
  },

  getThongTinLichChieuCoPhim: () => {
    const path = "/schedule";
    return axiosClient.get(path);
  },


  getThongTinLichChieuHeThongRapTheoRap: (branchId) => {
    const path = `/schedule/getAll?page=0&size=300&branchId=${branchId}`;
    return axiosClient.get(path);
  },

  getThongTinLichChieuHeThongRapTheoNgayVaRap: (branchId, startDate) => {
    const path = `/schedule/getAll?page=0&size=300&branchId=${branchId}&startDate=${startDate}`;
    return axiosClient.get(path);
  },

  getThongTinLichChieuPhimCoRap: (maPhim, branchId) => {
    const path = `schedule/getAll?page=0&size=300&movieId=${maPhim}&branchId=${branchId}`;
    return axiosClient.get(path);
  },

  //thông tin của 1 bộ phim, kèm theo thông tin các rạp có chiếu phim đó
  //tạm thời dùng API này
  getThongTinLichChieuPhim: (maPhim, branchId) => {
    // console.log("mã phim đang xem lịch chiếu: ", maPhim);
    // console.log("mã rạp đang xem lịch chiếu: ", branchId);
    if(branchId === undefined){
      const path = `schedule/getAll?page=0&size=300&movieId=${maPhim}`;
      return axiosClient.get(path);
    }
    else{
      const path = `schedule/getAll?page=0&size=300&movieId=${maPhim}&branchId=${branchId}`;
      return axiosClient.get(path);
    }
  },
  
  // getThongTinLichChieuPhimKhongLayTruocDo: (maPhim, branchId) => {
  //   // console.log("mã phim đang xem lịch chiếu: ", maPhim);
  //   // console.log("mã rạp đang xem lịch chiếu: ", branchId);
  //   if(branchId === undefined){
  //     const path = `schedule/getAll?page=0&size=300&movieId=${maPhim}`;
  //     return axiosClient.get(path);
  //   }
  //   else{
  //     const path = `schedule/getAll?page=0&size=300&movieId=${maPhim}&branchId=${branchId}`;
  //     return axiosClient.get(path);
  //   }
  // },

  getThongTinLichCoNgay: (maPhim, branchId, startDate) => {
    // console.log("truyền vô : ", maPhim, branchId, startDate);
      const path = `schedule/getAll?page=0&size=300&movieId=${maPhim}&branchId=${branchId}&startDate=${startDate}`;
      return axiosClient.get(path);
  },

  getLichCoPhong: (maPhim, branchId, startDate, maPhong) => {
    const path = `schedule/getAll?page=0&size=300&movieId=${maPhim}&branchId=${branchId}&startDate=${startDate}&roomId=${maPhong}`;
    return axiosClient.get(path);
},

  //lấy thông tin các cum rap của 1 hệ thống
  // getListCumRapTheoHeThong: (maHeThongRap) => {
  //   const path = `/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`;
  //   return axiosClient.get(path);
  // },

};

export default theatersApi;
