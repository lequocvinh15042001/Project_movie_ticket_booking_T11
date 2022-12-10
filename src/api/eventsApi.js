import axiosClient from "./axiosClient";

const eventsApi = {

  getListEvent: () => {
    const path = "/";
    return axiosClient.get(path);
  },

  postAddEvent: (event) => {
    const path = "/";
    return axiosClient.post(path, event);
  },

  deleteEvent: (event) => {
    const path = ``;

    return axiosClient.delete(path);
  },

  putEditEvent: (event) => {
    const path = ``;
    return axiosClient.put(path, event);
  },

};

export default eventsApi;
