import React, { useRef, useState } from 'react'

import { useParams } from "react-router-dom";
import Rating from '@material-ui/lab/Rating';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useLocation } from "react-router-dom";

import useStyles from './style';
import formatDate from '../../../utilities/formatDate';
import useApiThoiLuongDanhGia from '../../../utilities/useApiThoiLuongDanhGia';
import BtnPlay from '../../../components/BtnPlay';
import TextEditor from '../../../components/TextEditor/TextEditor';
import { Card, CardBody, Form, Input, Label, Button, Container } from "reactstrap"
import JoditEditor from 'jodit-react';

export default function Desktop({ movieDetailShowtimes: data, isMobile }) {
  // console.log("----------MT---------",data);
  const [onClickBtnMuave, setOnClickBtnMuave] = useState(0)
  const param = useParams()
  const [quantityComment, setQuantityComment] = useState(0)
  const { thoiLuong, danhGia } = useApiThoiLuongDanhGia(param.maPhim)
  const classes = useStyles({ bannerImg: data?.smallImageURl })
  const [imageNotFound, setImageNotFound] = useState(false)
  let location = useLocation();

  const editor = useRef(null)
  const [image, setImage] = useState(null)
  const [post, setPost] = useState({
    title: '',
    content: ''
  })

  const handleBtnMuaVe = () => {
    setOnClickBtnMuave(Date.now())
  }
  const onIncreaseQuantityComment = (value) => {
    setQuantityComment(value)
  }

  //field changed function
  const fieldChanged = (event) => {
    // console.log(event)
    setPost({ ...post, [event.target.name]: event.target.value })
  }

  const contentFieldChanaged = (data) => {
    setPost({ ...post, 'content': data })
  }

  const handleFileChange=(event)=>{
    console.log(event.target.files[0])
    setImage(event.target.files[0])
  }

  return (
    <div className={classes.desktop}>
      <div className={classes.top}>
        <div className={classes.gradient}>
        </div>
        <div className={classes.bannerBlur}>
          {imageNotFound && <div className={classes.withOutImage}></div>}
        </div>
        <div className={classes.topInfo}>
          <div className={classes.imgTrailer}>
            <BtnPlay urlYoutube={(data?.trailerURL)} />
            {/* xử lý khi url hình bị lỗi */}
            <img src={data?.smallImageURl} alt="poster" style={{ display: "none" }} onError={(e) => { e.target.onerror = null; setImageNotFound(true) }} />
            {imageNotFound && <div className={classes.withOutImage}></div>}
          </div>
          <div className={classes.shortInfo}> 
            <p>{formatDate(data?.releaseDate?.slice(0, 10)).YyMmDd}</p>
            <p><span className={classes.c18}>{data?.rated}</span></p>
            <p className={classes.movieName}>{data?.name}</p>
            {/* <p>{`${thoiLuong ?? "120"} phút - ${danhGia}`} - 2D/Digital</p> */}
            <p>
              Thời lượng: {data?.duration} phút
            </p>
            <button className={classes.btnMuaVe} onClick={handleBtnMuaVe}>{location?.state?.comingMovie ? "Thông tin phim" : "Mua vé"}</button>
          </div>
          <div className={classes.rate}>
            <div className={classes.circular}>
              <span className={classes.danhGia}>{danhGia}</span>
              <CircularProgress variant="determinate" size="100%" value={100} className={classes.behined} color="secondary" />
              <CircularProgress variant="determinate" size="100%" value={danhGia * 10} className={classes.fabProgress} color="secondary" />
            </div>
            <div className={classes.rateStar}>
              <Rating value={(danhGia * 5) / 10} precision={0.5} readOnly />
            </div>
            <span>{quantityComment} người đánh giá</span>
          </div>
        </div>
      </div>
      {/* <Tap data={data} onClickBtnMuave={onClickBtnMuave} onIncreaseQuantityComment={onIncreaseQuantityComment} isMobile={isMobile} /> */}
      {/* <ShowtimeDetail /> */}

      {/* <div style={{marginLeft:"10rem", marginRight:"10rem", zIndex:"-1"}}>
        <p style={{
          fontSize:"1.5rem",
          color:"white",
          paddingBottom:"0.5rem"
        }}>Tiêu đề</p>
        <input style={{
          width:"50%",
          fontSize:"1.5rem",
          padding:"5px",
          marginBottom:"1rem",
        }}></input>
        <div style={{
          paddingBottom:"2rem"
        }}>
          <TextEditor />
        </div>
        

      </div> */}
      <div className="wrapper" style={{margin:"7rem 7rem", zIndex:"-1", paddingBottom:"10rem"}}>
            <Card className="shadow-sm  border-0 mt-2">
                <CardBody>
                    {/* {JSON.stringify(post)} */}
                    <h3>{data?.name}</h3>
                    {/* <Form onSubmit={createPost}> */}
                    {/* Sửa chỗ này lại dder nộp nè */}
                    {/* Sửa chỗ này lại dder nộp nè */}
                    {/* Sửa chỗ này lại dder nộp nè */}
                    {/* Goi API */}
                    <Form >
                        <div className="my-3">
                            <Label for="title" >Tiêu đề bài viết</Label>
                            <Input
                                type="text"
                                id="title"
                                placeholder="Gõ vào đây..."
                                className="rounded-0"
                                name="title"
                                onChange={fieldChanged}
                            />
                        </div>
                        <div className="my-3">
                            <Label for="content" >Nội dung Review</Label>
                            {/* <Input
                                type="textarea"
                                id="content"
                                placeholder="Enter here"
                                className="rounded-0"
                                style={{ height: '300px' }}
                            /> */}
                            <JoditEditor
                                ref={editor}
                                value={post.content}
                                onChange={(newContent) => contentFieldChanaged(newContent)}
                            />
                        </div>
                        <div className="mt-3">
                            <Label for="image">Chọn hình ảnh làm banner cho bài Review</Label>
                            <Input id="image" type="file" onChange={handleFileChange} />
                        </div>
                        <Container className="text-center">
                            <Button style={{margin:"5px"}} type="submit" className="rounded-0" color="primary">Gửi Review</Button>
                            <Button style={{margin:"5px"}} className="rounded-0 ms-2" color="danger">Tải lại trang</Button>
                        </Container>
                    </Form>
                </CardBody>
                <div dangerouslySetInnerHTML={{__html:post.content}} />
                {post.content}
            </Card>
        </div>
    </div>
    
  )
}
