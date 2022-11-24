import axiosClient from "./axiosClient";
const bookingApi = {
  //lấy thông tin phòng vé của 1 bộ phim
  getDanhSachPhongVe: (maLichChieu) => {
    const path = `/seats?scheduleId=${maLichChieu}`;
    return axiosClient.get(path);
  },

  postDatVe: (data) => {
    const path = `/bills/create-new-bill`;
    console.log("Đặt vé thành công!");
    return axiosClient.post(path, data);
  },

  postTaoLichChieu: (data) => {
    const path = `/QuanLyDatVe/TaoLichChieu`;
    return axiosClient.post(path, data);
  },
};

export default bookingApi;
