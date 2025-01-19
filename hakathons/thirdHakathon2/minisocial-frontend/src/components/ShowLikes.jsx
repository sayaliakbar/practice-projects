import { Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";

/* eslint-disable react/prop-types */

const ShowLikes = ({ likes }) => {
  const [toggle, setToggle] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (toggle) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggle]);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  const handleShowLikes = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-fit" ref={containerRef}>
      <Typography
        sx={{
          "&:hover": {
            textDecoration: "underline",
            color: "blue",
            cursor: "pointer",
          },
        }}
        variant="body2"
        color="textSecondary"
        onClick={handleShowLikes}
      >
        Likes: {likes.length}
      </Typography>
      {toggle && (
        <div className="flex flex-col gap-1 absolute bg-white p-2 border border-gray-200 shadow-md rounded-md max-h-24 overflow-auto">
          {likes.map((like) => (
            <Typography key={like._id} variant="body2" color="textSecondary">
              {like.name}
            </Typography>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowLikes;
