import React, { useEffect, useState } from "react";

import Popper from "@material-ui/core/Popper";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  popper: {
    position: "relative",
    zIndex: 1,
    boxShadow:
      "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)",
  },
  image: {
    // height: "auto",
    width: 1000,
    height: 400,
    borderRadius: 4,
  },
  info: {
    backgroundColor: "rgb(74 74 74 / 46%)",
    borderRadius: 4,
    padding: 5,
    color: "#fff !important",
    position: "absolute",
    left: "50%",
    bottom: 5,
    transform: "translateX(-50%)",
    width: "fit-content",
  },
  btnMovieDetail: {
    position: "absolute",
    left: "50%",
    bottom: 51,
    transform: "translateX(-50%)",
    padding: "8px 23px",
    background: "linear-gradient(to left, #fb4226, #ce3017 100%)",
    "&:hover": {
      background: "#d01414",
    },
    transition: "color 0.2",
    borderRadius: 4,
    color: "#fff",
    border: "none",
  },
  withOutImage: {
    borderRadius: 4,
    width: 500,
    height: 500 * 1.5,
    animationName: `$myEffect`,
    animationDuration: "3s",
    animationTimingFunction: `${theme.transitions.easing.easeInOut}`,
    animationIterationCount: "infinite",
    background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
    backgroundSize: "500% 500%",
  },
  "@keyframes myEffect": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
}));

export default function CustomPopper(props) {
  const { phim, setNewPhim, currentPhimPopup, rootElementPopup } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const [showPopper, setShowPopper] = useState(false);
  const [widthImage, setwidthImage] = useState(200);
  const temporaryAnchorEl = React.useRef(null);
  const history = useHistory();
  const [imageNotFound, setImageNotFound] = useState(false);
  useEffect(() => {
    // n???u h??nh c?? d???ng ch??? nh???t th?? cho r???ng ra
    let mounted = true;
    const img = new Image();
    img.src = phim.smallImageURl;
    img.onload = function () {
      // sau khi ph??n t??ch h??nh ???nh xong
      if (this.width > this.height && mounted) {
        setwidthImage(350);
      } else if (this.width === this.height && mounted) {
        setwidthImage(250);
      }
    };
    setAnchorEl(temporaryAnchorEl.current);
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    // khi hover v??o phim kh??c th?? currentPhimPopup thay ?????i > ???n ??i phim hi???n t???i
    if (phim.id !== currentPhimPopup && currentPhimPopup) {
      setShowPopper(false);
    }
  }, [currentPhimPopup, phim.id]);
  const handleMouseEnter = (element) => {
    setNewPhim(phim.id); // ?????y m?? phim ??ang popup l??n component cha, n???u hover v??o phim m???i th?? m???i ???n, c??n hover ra ngo??i th?? kh??ng ???n
    setShowPopper(true);
    setAnchorEl(rootElementPopup);
  };

  return (
    <div
      className={classes.root}
      onMouseEnter={handleMouseEnter}
      ref={temporaryAnchorEl}
    >
      <p>{phim.name}</p>
      {showPopper && (
        <Popper
          open={showPopper}
          anchorEl={anchorEl}
          className={classes.popper}
          placement="right"
        >
          <div>
            <div style={{ position: "relative" }}>
              <img
                src={phim.smallImageURl}
                alt="poster"
                className={classes.image}
                style={{ width: widthImage }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = "none";
                  setImageNotFound(true);
                }}
              />
              {imageNotFound && <div className={classes.withOutImage}></div>}
              <div className={classes.info}>
                {/* <p>{phim.rated}</p> */}
              </div>
              <button
                className={classes.btnMovieDetail}
                onClick={() => history.push(`/phim/${phim.id}`)}
              >
                Click to Detail
              </button>
            </div>
          </div>
        </Popper>
      )}
    </div>
  );
}
