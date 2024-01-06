import React from "react";
export const Hello = () => {
  return React.createElement(
    "p",
    { style: { color: "green" } },
    "Another hello world"
  );
};

export const Hello2 = () => {
  return React.createElement(
    "h2",
    { style: { color: "blue" } },
    "This is hlw 2 added something new"
  );
};
