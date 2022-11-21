import axiosClient from "./axiosClient";

const usersApi = {
  //post user:object gồm taiKhoan, matKhau, email,...
  postDangKy: (user) => {
    const path = "/auth/signup";
    return axiosClient.post(path, user);
  },

  //post user:object taiKhoan, matKhau => nhận về data có accessToken
  postDangNhap: (user) => {
    const path = "/auth/signin";
    console.log(user);
    return axiosClient.post(path, user);
  },

  getDanhSachNguoiDung: () => {
    const path = "/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09";
    return axiosClient.get(path);
  },

  getDanhSachNguoiDungPhanTrang: (soTrang, soPhanTuTrenTrang) => {
    const path = "/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP09";
    return axiosClient.get(path, { soTrang, soPhanTuTrenTrang });
  },

  postThemNguoiDung: (user) => {
    const path = "/QuanLyNguoiDung/ThemNguoiDung";

    return axiosClient.post(path, user);
  },

  deleteUser: (taiKhoan) => {
    const path = `/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`;

    return axiosClient.delete(path);
  },

  editTaiKhoan: (user) => {
    const path = `/QuanLyNguoiDung/CapNhatThongTinNguoiDung`;
    return axiosClient.put(path, user);
  },

  getThongTinTaiKhoan: () => {
    const path = `/user/me`;
    return axiosClient.post(path);
  },
};

export default usersApi;
