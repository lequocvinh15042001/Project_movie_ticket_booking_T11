import axiosClient from "./axiosClient";
const theatersApi = {
  //lấy thông tin toàn bộ danh sách hệ thống rạp
  getThongTinHeThongRap: () => {
    const path = "/branches/getAll";
    return axiosClient.get(path);
  },

  getThongTinPhim: (maPhim) => {
    const path = `/movies/details/${maPhim}`;
    console.log("vô api");
    return axiosClient.get(path);
  },

  //lấy toàn bộ thông tin lịch chiếu của tất cả hệ thống
  getThongTinLichChieuHeThongRap: () => {
    const path = "/branches/getAll?page=0&size=20";
    return axiosClient.get(path);
  },

  //thông tin của 1 bộ phim, kèm theo thông tin các rạp có chiếu phim đó
  //tạm thời dùng API này
  getThongTinLichChieuPhim: (maPhim, branchId) => {
    console.log("mã phim đang xem lịch chiếu: ", maPhim);
    console.log("mã rạp đang xem lịch chiếu: ", branchId);
    if(branchId === undefined){
      const path = `schedule/getAll?page=0&size=20&movieId=${maPhim}`;
      return axiosClient.get(path);
    }
    else{
      const path = `schedule/getAll?page=0&size=20&movieId=${maPhim}&branchId=${branchId}`;
      return axiosClient.get(path);
    }
  },

  getThongTinLichCoNgay: (maPhim, branchId, startDate) => {
      const path = `schedule/getAll?page=0&size=20&movieId=${maPhim}&branchId=${branchId}&startDate=${startDate}`;
      return axiosClient.get(path);
  },

  //lấy thông tin các cum rap của 1 hệ thống
  getListCumRapTheoHeThong: (maHeThongRap) => {
    const path = `/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`;
    return axiosClient.get(path);
  },

};

export default theatersApi;
