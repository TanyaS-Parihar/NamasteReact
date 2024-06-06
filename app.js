import React from "react";
import reactDom from "react-dom";
//first component
const Header = () => {
  return (
    <div id="main">
      <div className="logo">
        <img
          src="data:image/jpeg;base64,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"
          alt="food-img"
        ></img>
      </div>
      <div className="nav">
        <h3>Home</h3>
        <h3>Menu</h3>
        <h3>Order</h3>
        <h3>About us</h3>
      </div>
    </div>
  );
};
//data
const restList = [
  { resName: "Myriad", cuisine: "Biryani, Continental,Asian", id: 567 },
  { resName: "Marriot", cuisine: "Awadhi, Mughlai, Naga", id: 345 },
  { resName: "Lila palace", cuisine: "Chinese, Continental,Asian", id: 789 },
  { resName: "Century", cuisine: "Biryani, Continental,Asian", id: 123 },
  { resName: "Jupiter", cuisine: "African, Turkish,Planetorian", id: 456 },
  { resName: "Palpable", cuisine: "African, Turkish,Planetorian", id: 456 },
];
console.log(restList);
//data
const Card = (prop) => {
  console.log(prop);
  const { resData } = prop;
  return (
    <div id="card">
      <img
        className="image"
        src="https://th.bing.com/th?id=OIP.y7s2ozyvJYCHHQFVHjIIZwHaGy&w=261&h=239&c=8&rs=1&qlt=90&o=6&dpr=1.9&pid=3.1&rm=2"
        alt="foog-img"
      ></img>

      <h3> Name: {prop.resData.resName}</h3>

      <h3>Cuisines: {prop.resData.cuisine}</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div id="body">
      <div>
        <h3>Search</h3>
        <input id="inp"></input>
      </div>

      <div className="cards">
        {restList.map((restaurant) => (
          <Card resData={restaurant} key={restaurant.id} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
