const heading = React.createElement(
  "h1",
  { id: "helloo", className: "fall" },
  "hello !! "
);
const root = ReactDOM.createRoot(document.getElementById("root"));

/* <div id="parent">
  <div id="child">
    <h1></h1>
    <h2></h2>
  </div>
  <div id="child2">
    <h1></h1>
    <h2></h2>
  </div>
</div>; */

const header = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, " Miss tuntun"),
    React.createElement("h2", {}, "goes to Palampur"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Miss MunMun"),
    React.createElement("h2", {}, "goes to Shaljampur"),
  ]),
]);
root.render(header);
