import React, { useState } from "react";
import { RelatedSearchCard } from "./RelatedSearchCard";
import "./RelatedSearch.css";

export const RelatedSearch = ({ input }) => {
  const [data, setData] = useState([]);

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  const handleChange = (value) => {
    fetchData(value);
  };

  return (
    <div id="browse-gallery">
      {handleChange(input)}

      {data.map((item) => (
        <RelatedSearchCard
          key={item.id}
          id={item.id}
          title={item.username}
          description={item.email}
          info={item.name}
          upvote={item.phone}
          downvote={item.website}
          tags={item.company.name}
        />
      ))}
    </div>
  );
};

// export default RelatedSearch;
