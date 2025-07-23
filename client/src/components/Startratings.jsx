import React from "react";
import { assets } from "../assets/assets";

const Startratings = ({ rating = 4 }) => {
  return (
    <>
      {Array(5)
        .fill("")
        .map((_, index) => (
          <img
          className="h-4.5 w-4.5"
            src={
              assets.rating > index
                ? assets.starIconFilled
                : assets.starIconOutlined
            }
            alt="staricon"
          />
        ))}
    </>
  );
};

export default Startratings;
