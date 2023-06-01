import { useEffect } from "react";
import moviesApi from "../../../../api/moviesApi";
import "./styles.css";
import { useState } from "react";
const data =
    "data:image/jpeg;base64,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";

const questionList2 = [{
    label: "Tôi muốn xem danh sách phim đang được chiếu",
    value: "0"
}, {
    label: "Tôi muốn xem danh sách rạp",
    value: "1"
}, {
    label: "Đặt vé hôm nay",
    value: "2"
}];


const questionList = [1, 2, 3, 4, 5, 6];
export default function ChatBox() {
    const [answer, setAnswer] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        moviesApi.getDanhSachPhim()
            .then((response) => {
                // console.log(response.data.data, "response");
                setData(response?.data.data);
            })
            .catch((err) => {
                // console.log(err);
            });
    }, []);
    const [preQuestion, setPreQuestion] = useState([]);
    return (
        <div className="ChatBox">
            <div className="c-1">
                <div>
                    <img className="img" src={data} />
                </div>
                <div className="t-1">GOLDENNEW TICKET</div>
                <div className="ch-1">
                    <div>
                        <img className="ch-1-1" src={data} />
                    </div>
                    <div className="ch-1-2">
                        Xin chào! chúng tôi có thể giúp gì cho bạn ?
                    </div>
                </div>
            </div>
            <div className="bc-1">
                <div className="c-2">
                    {answer.map((item, index) => {
                        return (
                            <>
                                {/* <div>
                                    {preQuestion[index].map((item) => {
                                        return <div className="ch-1-3">{item}</div>;
                                    })}
                                </div> */}
                                <div
                                    onClick={() => {
                                        setAnswer([]);
                                    }}
                                    className="ch-1-4"
                                >
                                    {item}
                                </div>
                            </>
                        );
                    })}
                </div>
                <div className="c-2">
                    {data.length > 0 && data.map((item, index) => {
                        return (
                            <div
                                onClick={() => {
                                    setAnswer([...answer, item.name]);
                                    // setPreQuestion([...preQuestion, item.label]);
                                }}
                                className="ch-1-3"
                            >
                                {item.name}
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* <div className="c-3">
        <div>
          <img className="img11" src={data} />
        </div>
        <div>
          <img className="img11" src={data} />
        </div>
        <div>
          <img className="img11" src={data} />
        </div>
        <div>
          <img className="img11" src={data} />
        </div>
        <div>
          <img className="img11" src={data} />
        </div>
      </div> */}
        </div>
    );
}
