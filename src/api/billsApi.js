import axiosClient from "./axiosClient";

const reviewsApi = {

  getBillDashBoard: () => {
    const path = `/bills/getBillDashBoard?fromDate=2022-12-01&toDate=2022-12-31&status=SUCCESS`;
    return axiosClient.get(path);
  },

  getBillDashBoardSortAZ: () => {
    const path = `/bills/getUserDashBoard?status=SUCCESS`;
    return axiosClient.get(path);
  },

  getBillDashBoardHetHan: () => {
    const path = `/bills/getBillDashBoard?fromDate=2022-12-01&toDate=2022-12-31&status=EXPIRATION`;
    return axiosClient.get(path);
  },

  postThanhToan:(id) =>{
    const path = `/bills/payment?id=${id}`;
    return axiosClient.post(path);
  },
  getListBill: () => {
    const path = `/bills/getAllBill`;
    return axiosClient.get(path);
  },

  getListBillChuThanhToan: () => {
    const path = `/bills/getUserDashBoard?status=WAITING_PAYMENT`;
    return axiosClient.get(path);
  },

  getListBillDaThanhToan: () => {
    const path = `/bills/getUserDashBoard?status=SUCCESS`;
    return axiosClient.get(path);
  },

  postAddReview: (event) => {
    const path = "/";
    return axiosClient.post(path, event);
  },

  // postAddReview: (review) => {
  //   const path = "/";
  //   return axiosClient.post(path, review);
  // },

  deleteBill: (eventId) => {
    const path = `/`;
    return axiosClient.put(path);
  },

  putEditReview: (event) => {
    const path = `/`;
    return axiosClient.put(path, event);
  },

  putDuyetReview: (eventId) => {
    const path = `/`;
    return axiosClient.put(path);
  },

  putTuChoiReview: (eventId) => {
    const path = `/`;
    return axiosClient.put(path);
  },

};

export default reviewsApi;
