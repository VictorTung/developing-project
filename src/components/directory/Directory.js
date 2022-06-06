import React from "react";
import DirectoryItem from "../directoryItem/DirectoryItem";

import "./Directory.css";

const data = [
  {
    name: "hats",
    img: "https://i.ibb.co/cvpntL1/hats.png",
    route: "/shop/hats",
  },
  {
    name: "jackets",
    img: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "/shop/jackets",
  },
  {
    name: "sneakers",
    img: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "/shop/sneakers",
  },
  {
    name: "womens",
    img: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "/shop/womens",
  },
  {
    name: "mens",
    img: "https://i.ibb.co/R70vBrQ/men.png",
    route: "/shop/mens",
  },
];

function Directory() {
  return (
    <div className="directory-container">
      {data.map((category, index) => {
        return <DirectoryItem key={index} category={category} />;
      })}
    </div>
  );
}

export default Directory;
