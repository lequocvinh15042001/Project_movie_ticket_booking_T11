import axiosClient from "./axiosClient";

const reviewsApi = {

  getListReview: () => {
    const path = "/article/getAll";
    return axiosClient.get(path);
  },

  postAddReview: (event) => {
    const path = "/article/addNew";
    return axiosClient.post(path, event);
  },

  postAddReview: (review) => {
    const path = "/article/addNewReview";
    return axiosClient.post(path, review);
  },

  deleteReview: (eventId) => {
    const path = `article/changeStatus?articleId=${eventId}&status=DELETE`;
    return axiosClient.put(path);
  },

  putEditReview: (event) => {
    const path = `/article/update`;
    return axiosClient.put(path, event);
  },

  putDuyetReview: (eventId) => {
    const path = `article/changeStatus?articleId=${eventId}&status=APPROVE`;
    return axiosClient.put(path);
  },

  putTuChoiReview: (eventId) => {
    const path = `article/changeStatus?articleId=${eventId}&status=DENY`;
    return axiosClient.put(path);
  },

};

export default reviewsApi;
