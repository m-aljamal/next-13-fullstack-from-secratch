import clsx from "clsx";
import React from "react";

const GlassPane = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "glass rounded-2xl border-soild border-2 border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassPane;
