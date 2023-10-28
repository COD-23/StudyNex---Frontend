import classNames from "classnames";
import React from "react";

const Title = ({ children, className }) => {
  return (
    <div
      className={classNames(
        className,
        "text-xl font-extrabold pt-4 text-center"
      )}
    >
      {children}
    </div>
  );
};

export default Title;
