import React from "react";
import { Link } from "react-router-dom";

function MoreMovies() {
  const num = [1, 2, 3, 5, 6, 1, 2, 3, 5, 6, 2, 3, 5, 6];

  return (
    <div>
      <h1>more movies</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {num.map((n,index) => {
          return (
            <div key={index}
              style={{
                width: "70px",
                height: "100px",
                backgroundColor: "gray",
                margin: "10px",
              }}
            ></div>
          );
        })}
      </div>

      
    </div>
  );
}

export default MoreMovies;
