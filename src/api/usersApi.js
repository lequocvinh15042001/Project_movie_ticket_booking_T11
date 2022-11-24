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
    const path = "/";
    return axiosClient.get(path);
  },

  getDanhSachNguoiDungPhanTrang: (soTrang, soPhanTuTrenTrang) => {
    const path = "/";
    return axiosClient.get(path, { soTrang, soPhanTuTrenTrang });
  },

  postThemNguoiDung: (user) => {
    const path = "/";

    return axiosClient.post(path, user);
  },

  deleteUser: (taiKhoan) => {
    const path = `/=${taiKhoan}`;

    return axiosClient.delete(path);
  },

  editTaiKhoan: (user) => {
    const path = `/`;
    return axiosClient.put(path, user);
  },

  getThongTinTaiKhoan: () => {
    console.log("Vô get");
    const path = "/user/me";
    return axiosClient.get(path);
  },

  getChiTietTaiKhoan: (username) => {
    console.log(username);
    const path = `/users/${username}`;
    return axiosClient.get(path);
  },
};

export default usersApi;
