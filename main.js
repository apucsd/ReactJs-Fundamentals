// const Hello = React.createElement(
//   "h1",
//   { style: { color: "red" } },
//   "Hello world"
// );
const Hello = () => {
  return <h1>Hello World</h1>;
};
const App = () => {
  return (
    <React.Fragment>
      <div>This is fokira React</div>
      <Hello></Hello>
    </React.Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(React.createElement(App));
