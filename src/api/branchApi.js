import axiosClient from "./axiosClient";

const branchApi = {

  getListBranchByAdminStaff: () => {
    const path = `/branches/getList`;
    return axiosClient.get(path);
  },

};

export default branchApi;
