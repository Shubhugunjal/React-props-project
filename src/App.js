import React from "react";
import Card from "./Cards";
import Data from "./Data";
import "./index.css";

const App = () => (
  <>
    <h1 className="heading_style"> List of top 5 Netflix Series </h1>
    {Data.map((currentval, index) => {
      console.log(index);
      return (
        <Card
          key={currentval.id} // this feild is very imp in map().unique key is required
          sname={currentval.sname}
          imgsrc={currentval.imgsrc}
          title={currentval.title}
          link={currentval.link}
        />
      );
    })}
    ;
  </>
);
export default App;
