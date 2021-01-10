import React from "react";
import { Card } from "./Card";

const Results = ({ searchResults }) => {
  console.log(searchResults);
  return (
    <div>
      {searchResults.items.map((item) => (
        <Card key={item.title} imageUrl={item.link} />
      ))}
    </div>
  );
};

export { Results };
