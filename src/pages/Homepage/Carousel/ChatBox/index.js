import { useEffect } from "react";
import moviesApi from "../../../../api/moviesApi";
import "./styles.css";
import { useState } from "react";
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
                <svg
                    className="img"
                    viewBox="0 0 512 512"
                    width="52"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="rgb(250, 82, 56)"
                >
                    <path d="m450.405 11.433a5 5 0 0 0 -2.7-.388c-11.378 1.538-25.848 9.613-43.009 24a277.966 277.966 0 0 0 -29.407 28.72 10.561 10.561 0 0 0 -1.714 10.825l8.355 25.066-19.543-6.218a10.441 10.441 0 0 0 -11.887 2.125l-75.819 76.373a10.463 10.463 0 0 0 -.737 13.969l28.312 38.287-40.316-17.521a10.5 10.5 0 0 0 -12.549 2.575q-1.912 2.205-3.775 4.424a775 775 0 0 0 -39.24-68.87 8.058 8.058 0 0 0 -8.6-3.5l-33.237 5.61 26.456-17.422a8.094 8.094 0 0 0 2.125-11.479c-38.741-53.939-76.949-87.069-113.564-98.47-28.384-8.837-45.121-.748-45.821-.4a4.994 4.994 0 0 0 -2.017 1.841c-6.044 9.764-9 26.069-8.8 48.462a278.113 278.113 0 0 0 3.482 40.958 10.561 10.561 0 0 0 7.27 8.2l24.663 9.478-17.215 11.138a10.441 10.441 0 0 0 -5.908 10.52l10.79 107.076a10.463 10.463 0 0 0 10.318 9.444l47.553 2.471-39.146 19.994a10.5 10.5 0 0 0 -5.988 11.327c6.6 38.993 17.69 71.657 32.948 97.085 12.361 20.6 27.48 36.546 44.935 47.394 22.48 13.973 42.88 15.844 52.18 15.844h.285c2.007 16.657 2.714 28.888 2.682 35.6a5 5 0 0 0 7.068 4.581l23.293-10.576a5 5 0 0 0 2.9-5.082c-.73-6.861-2.1-17.072-4.172-29.869a172.968 172.968 0 0 0 28.155-13.853c16.5 7.008 32.277 10.524 47.206 10.524a88.021 88.021 0 0 0 33.011-6.282c39.089-15.659 57.132-55.426 60.352-63.236a8.1 8.1 0 0 0 -3.856-10.306l-40.635-21.142 53.8 3.292a9.908 9.908 0 0 0 9.138-4.491c28.276-43.6 50.826-111.728 55.059-124.943a8.06 8.06 0 0 0 -2.765-8.865l-25.452-22.1 30.265 9.358a8.1 8.1 0 0 0 10.213-5.654c17.029-64.19 18.33-114.745 3.866-150.262-11.213-27.533-28.095-35.315-28.808-35.632zm-159.219 313.967c60.043-85.613 112.156-187.74 154.935-303.633-27.432 125.742-95.885 240.218-151.457 317.269a132.961 132.961 0 0 0 -3.478-13.636zm-34.236-109.6a.514.514 0 0 1 .618-.134c.09.046.181.089.274.129l57.527 25a5 5 0 0 0 6.014-7.558l-39.462-53.368c-.055-.074-.111-.146-.169-.216a.5.5 0 0 1 .029-.671l75.819-76.374a.5.5 0 0 1 .586-.09 4.978 4.978 0 0 0 .808.338l29.265 9.311a5 5 0 0 0 6.259-6.346l-11.526-34.585a4.593 4.593 0 0 0 -.176-.452.5.5 0 0 1 .08-.533c9.424-11.058 31.653-32.864 50.685-43.441-40.9 108.989-90.154 205.463-146.544 287.06a132.691 132.691 0 0 0 -5.685-12.181 8.1 8.1 0 0 0 -10.4-3.573l-42.155 17.948 36.73-39.449a9.938 9.938 0 0 0 2.338-9.91 351.811 351.811 0 0 0 -17.442-43.166c2.12-2.577 4.294-5.167 6.527-7.739zm-115.05 220.234c-36.55-22.716-61.9-70.316-73.3-137.655a.517.517 0 0 1 .289-.566c.093-.04.184-.083.274-.128l55.861-28.532a5 5 0 0 0 -2.015-9.446l-66.284-3.443c-.086 0-.172-.007-.259-.007h-.017a.5.5 0 0 1 -.5-.449l-10.79-107.075a.5.5 0 0 1 .3-.509 5.07 5.07 0 0 0 .774-.41l25.785-16.68a5 5 0 0 0 -.921-8.866l-34.03-13.077q-.226-.087-.462-.151a.5.5 0 0 1 -.36-.4c-2.551-14.3-5.262-45.314-1.337-66.731 80.474 139.6 118.806 254.311 136.835 326.616a785.367 785.367 0 0 1 16.057 81.829c-8.41-.146-26.251-2.106-45.9-14.32zm59.662 52.3c-.762-16.413-4.238-58.429-19.988-121.736-18.508-74.386-58.257-193.185-142.581-337.59 32.947 41.813 62.587 91.224 88.141 146.945 21.081 45.969 39.44 96.3 54.569 149.608 22.458 79.128 31.069 141.573 32.966 156.822zm17.615-43.4a1216.676 1216.676 0 0 0 -27.8-121.908c-15.266-53.823-33.806-104.671-55.1-151.131-25.33-55.254-54.665-104.41-87.249-146.274 20.578-1.9 69.206 5.973 134.808 96.606l-44.626 29.385a5 5 0 0 0 3.582 9.106l55.872-9.429c8.794 13.738 44.776 71.443 59.659 118.388l-.082.087-52.809 56.716a5 5 0 0 0 5.618 8.008l62.3-26.525c6.267 12.216 21.433 47.473 8.512 81.464-9.023 23.737-30.105 42.39-62.687 55.508zm247.011-252.093-51.046-15.785a5 5 0 0 0 -4.756 8.552l42.785 37.149c-5.022 15.525-26.722 79.99-53.5 121.3l-.119-.009-77.352-4.736a5 5 0 0 0 -2.613 9.425l60.065 31.246c-4.338 9.888-20.924 42.844-54.135 56.149-19.824 7.942-42.174 7.344-66.543-1.748 15.369-11.584 26.158-25.422 32.234-41.405a92.124 92.124 0 0 0 5.412-39.646c56.638-77.093 129.159-195.233 158.499-325.947 5.013 5.138 10.779 13.123 15.262 24.524 16.139 41.039 6.781 98.905-4.193 140.931z" />
                </svg>
                <div className="t-1">GOLDENNEW TICKET</div>
                <div className="ch-1">
                    <div>
                        <svg
                            className="ch-1-1"
                            viewBox="0 0 512 512"
                            width="52"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="rgb(250, 82, 56)"
                        >
                            <path d="m450.405 11.433a5 5 0 0 0 -2.7-.388c-11.378 1.538-25.848 9.613-43.009 24a277.966 277.966 0 0 0 -29.407 28.72 10.561 10.561 0 0 0 -1.714 10.825l8.355 25.066-19.543-6.218a10.441 10.441 0 0 0 -11.887 2.125l-75.819 76.373a10.463 10.463 0 0 0 -.737 13.969l28.312 38.287-40.316-17.521a10.5 10.5 0 0 0 -12.549 2.575q-1.912 2.205-3.775 4.424a775 775 0 0 0 -39.24-68.87 8.058 8.058 0 0 0 -8.6-3.5l-33.237 5.61 26.456-17.422a8.094 8.094 0 0 0 2.125-11.479c-38.741-53.939-76.949-87.069-113.564-98.47-28.384-8.837-45.121-.748-45.821-.4a4.994 4.994 0 0 0 -2.017 1.841c-6.044 9.764-9 26.069-8.8 48.462a278.113 278.113 0 0 0 3.482 40.958 10.561 10.561 0 0 0 7.27 8.2l24.663 9.478-17.215 11.138a10.441 10.441 0 0 0 -5.908 10.52l10.79 107.076a10.463 10.463 0 0 0 10.318 9.444l47.553 2.471-39.146 19.994a10.5 10.5 0 0 0 -5.988 11.327c6.6 38.993 17.69 71.657 32.948 97.085 12.361 20.6 27.48 36.546 44.935 47.394 22.48 13.973 42.88 15.844 52.18 15.844h.285c2.007 16.657 2.714 28.888 2.682 35.6a5 5 0 0 0 7.068 4.581l23.293-10.576a5 5 0 0 0 2.9-5.082c-.73-6.861-2.1-17.072-4.172-29.869a172.968 172.968 0 0 0 28.155-13.853c16.5 7.008 32.277 10.524 47.206 10.524a88.021 88.021 0 0 0 33.011-6.282c39.089-15.659 57.132-55.426 60.352-63.236a8.1 8.1 0 0 0 -3.856-10.306l-40.635-21.142 53.8 3.292a9.908 9.908 0 0 0 9.138-4.491c28.276-43.6 50.826-111.728 55.059-124.943a8.06 8.06 0 0 0 -2.765-8.865l-25.452-22.1 30.265 9.358a8.1 8.1 0 0 0 10.213-5.654c17.029-64.19 18.33-114.745 3.866-150.262-11.213-27.533-28.095-35.315-28.808-35.632zm-159.219 313.967c60.043-85.613 112.156-187.74 154.935-303.633-27.432 125.742-95.885 240.218-151.457 317.269a132.961 132.961 0 0 0 -3.478-13.636zm-34.236-109.6a.514.514 0 0 1 .618-.134c.09.046.181.089.274.129l57.527 25a5 5 0 0 0 6.014-7.558l-39.462-53.368c-.055-.074-.111-.146-.169-.216a.5.5 0 0 1 .029-.671l75.819-76.374a.5.5 0 0 1 .586-.09 4.978 4.978 0 0 0 .808.338l29.265 9.311a5 5 0 0 0 6.259-6.346l-11.526-34.585a4.593 4.593 0 0 0 -.176-.452.5.5 0 0 1 .08-.533c9.424-11.058 31.653-32.864 50.685-43.441-40.9 108.989-90.154 205.463-146.544 287.06a132.691 132.691 0 0 0 -5.685-12.181 8.1 8.1 0 0 0 -10.4-3.573l-42.155 17.948 36.73-39.449a9.938 9.938 0 0 0 2.338-9.91 351.811 351.811 0 0 0 -17.442-43.166c2.12-2.577 4.294-5.167 6.527-7.739zm-115.05 220.234c-36.55-22.716-61.9-70.316-73.3-137.655a.517.517 0 0 1 .289-.566c.093-.04.184-.083.274-.128l55.861-28.532a5 5 0 0 0 -2.015-9.446l-66.284-3.443c-.086 0-.172-.007-.259-.007h-.017a.5.5 0 0 1 -.5-.449l-10.79-107.075a.5.5 0 0 1 .3-.509 5.07 5.07 0 0 0 .774-.41l25.785-16.68a5 5 0 0 0 -.921-8.866l-34.03-13.077q-.226-.087-.462-.151a.5.5 0 0 1 -.36-.4c-2.551-14.3-5.262-45.314-1.337-66.731 80.474 139.6 118.806 254.311 136.835 326.616a785.367 785.367 0 0 1 16.057 81.829c-8.41-.146-26.251-2.106-45.9-14.32zm59.662 52.3c-.762-16.413-4.238-58.429-19.988-121.736-18.508-74.386-58.257-193.185-142.581-337.59 32.947 41.813 62.587 91.224 88.141 146.945 21.081 45.969 39.44 96.3 54.569 149.608 22.458 79.128 31.069 141.573 32.966 156.822zm17.615-43.4a1216.676 1216.676 0 0 0 -27.8-121.908c-15.266-53.823-33.806-104.671-55.1-151.131-25.33-55.254-54.665-104.41-87.249-146.274 20.578-1.9 69.206 5.973 134.808 96.606l-44.626 29.385a5 5 0 0 0 3.582 9.106l55.872-9.429c8.794 13.738 44.776 71.443 59.659 118.388l-.082.087-52.809 56.716a5 5 0 0 0 5.618 8.008l62.3-26.525c6.267 12.216 21.433 47.473 8.512 81.464-9.023 23.737-30.105 42.39-62.687 55.508zm247.011-252.093-51.046-15.785a5 5 0 0 0 -4.756 8.552l42.785 37.149c-5.022 15.525-26.722 79.99-53.5 121.3l-.119-.009-77.352-4.736a5 5 0 0 0 -2.613 9.425l60.065 31.246c-4.338 9.888-20.924 42.844-54.135 56.149-19.824 7.942-42.174 7.344-66.543-1.748 15.369-11.584 26.158-25.422 32.234-41.405a92.124 92.124 0 0 0 5.412-39.646c56.638-77.093 129.159-195.233 158.499-325.947 5.013 5.138 10.779 13.123 15.262 24.524 16.139 41.039 6.781 98.905-4.193 140.931z" />
                        </svg>
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
