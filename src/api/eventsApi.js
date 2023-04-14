import axiosClient from "./axiosClient";

const eventsApi = {

  getListEvent: () => {
    const path = "/article/getAll";
    return axiosClient.get(path);
  },

  getDetailEvent: (id) => {
    const path = `/article/getDetail?id=${id}`;
    return axiosClient.get(path);
  },

  postAddEvent: (event) => {
    const path = "/article/addNew";
    return axiosClient.post(path, event);
  },

  postAddReview: (review) => {
    const path = "/article/addNewReview";
    return axiosClient.post(path, review);
  },

  deleteEvent: (event) => {
    const path = ``;

    return axiosClient.delete(path);
  },

  putEditEvent: (event) => {
    const path = `/article/update`;
    return axiosClient.put(path, event);
  },

};

export default eventsApi;
