import axiosClient from "./axiosClient";
const moviesApi = {
  //lấy thông tin toàn bộ danh sách phim
  getDanhSachPhim: () => {
    const path = "/movies/v1/showing";
    return axiosClient.get(path);
  },

  //lấy thông tin của 1 phim, bao gồm 1 mảng lichChieu<obj> không phân biệt cụm rạp
  getThongTinPhim: (maPhim) => {
    const path = `/movies/v1/details/${maPhim}`;
    return axiosClient.get(path);
  },

  //lấy thông tin của 1 phim, bao gồm 1 mảng lichChieu<obj> không phân biệt cụm rạp
  // getDanhSachPhimTheoNgay: (maNhom, tuNgay, denNgay) => {
  //   const path = `/QuanLyPhim/LayDanhSachPhimTheoNgay`;
  //   return axiosClient.get(path, { maNhom, tuNgay, denNgay });
  // },

  //không co param sẽ 1 trang, 10 phần tử
  // getDanhSachPhimPhanTrang: (param) => {
  //   const path = `/QuanLyPhim/LayDanhSachPhimPhanTrang`;
  //   // param = ?maNhom=GP09&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}`
  //   return axiosClient.get(path, { param });
  // },

  postThemPhimUpload: (movie) => {
    const path = `/movies/v1/addNew`;
    console.log(movie);
    //trong obj movie có key hinhAnh là file nên phải chuyển sang formData
    // const formData = new FormData();
    // for (const key in movie) {
    //   // console.log(key);
    //   formData.append(key, movie[key]);
    // }
    // return axiosClient.post(path, formData);
    return axiosClient.post(path, movie);
  },

  postCapNhatPhimUpload: (movie) => {
    console.log("update phim upload: ", movie);
    const path = `/movies/v1/update`;
    // const formData = new FormData();
    // for (const key in movie) {
    //   formData.append(key, movie[key]);
    // }
    // return axiosClient.put(path, formData);
    return axiosClient.put(path, movie);
  },

  postCapNhatPhim: (movie) => {
    console.log("update phim: ", movie);
    const path = `/movies/v1/update`;
    return axiosClient.put(path, movie);
  },

  deleteMovie: (maPhim) => {
    const path = `/movies/v1/${maPhim}`;
    return axiosClient.delete(path);
  },
};

export default moviesApi;
