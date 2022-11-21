import axios from "axios";
// import { groupID, movie } from "../config/setting";
export class QuanLyPhimServices {
  layTinTuc = () => {
    return axios({
      url: "https://5e9829e75eabe7001681bbfb.mockapi.io/news",
      method: "GET",
    });
  };
  layChiTietTinTuc = (maTinTuc) => {
    return axios({
      url: `https://5e9829e75eabe7001681bbfb.mockapi.io/news/${maTinTuc}`,
      method: "GET",
    });
  };
}

export const qLyPhimService = new QuanLyPhimServices();
