const heading = React.createElement(
  "h1",
  { id: "heloop", className: "fshdkjshfd" },
  "hello giys chai pekr jna"
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
    React.createElement("h1", {}, "mera nam chunchunchu"),
    React.createElement("h2", {}, "rat chndni me aur tu"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "mera nam chunchunchu"),
    React.createElement("h2", {}, "rat chndni me aur tu"),
  ]),
]);
root.render(header);
