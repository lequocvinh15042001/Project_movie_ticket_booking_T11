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

  deleteReview: (event) => {
    const path = ``;

    return axiosClient.delete(path);
  },

  putEditReview: (event) => {
    const path = `/article/update`;
    return axiosClient.put(path, event);
  },

};

export default reviewsApi;
