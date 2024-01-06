'use strict';

const Hello = () => {
  return React.createElement(
    "p",
    { style: { color: "green" } },
    "Another hello world"
  );
};

const Hello2 = () => {
  return React.createElement(
    "h2",
    { style: { color: "blue" } },
    "This is hlw 2"
  );
};

const App = () => {
  return React.createElement("h1", {}, "Fokira React App", Hello(), Hello2());
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(React.createElement(App));
