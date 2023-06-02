import axios from "axios";
// import { groupID, movie } from "../config/setting";
export class QuanLyPhimServices {
  layTinTuc = () => {
    return axios({
      url: "https://5e9829e75eabe7001681bbfb.mockapi.io/news",
      method: "GET",
    });
  };
  layReviewChuaDuyet = () => {
    return axios({
      url: "https://api-goldenticketnew.tiktzuki.com/api/article/getAll?status=CREATE",
      method: "GET",
    });
  };
  layReviewDuocDuyet = () => {
    return axios({
      url: "https://api-goldenticketnew.tiktzuki.com/api/article/getAll?status=APPROVE",
      method: "GET",
    });
  };
  layChiTietTinTuc = (maTinTuc) => {
    return axios({
      url: `https://api-goldenticketnew.tiktzuki.com/api/article/getDetail?id=${maTinTuc}`,
      method: "GET",
    });
  };

  layChiTietTinTucSlug = (maTinTuc) => {
    return axios({
      url: `https://api-goldenticketnew.tiktzuki.com/api/article/getDetail/${maTinTuc}`,
      method: "GET",
    });
  };
}

export const qLyPhimService = new QuanLyPhimServices();
