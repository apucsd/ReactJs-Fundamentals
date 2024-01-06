const Hello = React.createElement(
  "h1",
  { style: { color: "red" } },
  "Hello world"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Hello);
