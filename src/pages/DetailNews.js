import React, { useState, useEffect, useMemo } from "react";
import { qLyPhimService } from "../services/QuanLyPhimServices";
import NewsDetailComponent from "../components/NewsDetailComponent/ReviewsDetailComponent";
import SpinnerLoading from "../components/SpinnerLoading/SpinnerLoading";
import { useParams } from "react-router-dom";

export default function DetailNews() {
  const { maTin } = useParams();
  // console.log("slug:  ",maTin);
  let [tinTuc, setTinTuc] = useState([]);
  const [loading, $loading] = useState(true);
  const maTinTuc = maTin;
  useMemo(() => {
    qLyPhimService.layChiTietTinTuc(maTinTuc).then((result) => {
      setTimeout(() => {
        setTinTuc(result.data);
        $loading(false);
      }, 1500);
    });
  }, [maTinTuc]);

  let [danhSachTinTuc, setDanhSachTinTuc] = useState([]);

  useEffect(() => {
    qLyPhimService
      .layTinTuc()
      .then((res) => {
        setTimeout(() => {
          setDanhSachTinTuc(res.data);
          $loading(false);
        }, 1500);
      })
      .catch((err) => {
        // console.log(err.response.data);
      });
  }, []);

  return (
    <>
      {loading ? (
        <SpinnerLoading />
      ) : (
        <NewsDetailComponent tinTuc={tinTuc} danhSachTinTuc={danhSachTinTuc} />
      )}
      </>
  );
}
