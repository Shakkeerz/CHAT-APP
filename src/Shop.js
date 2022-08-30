import React, { useCallback, useEffect, useRef, useState } from "react";

function Shop({ match }) {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState([]);

  let h5ElementRef = useRef();

  h5ElementRef = useCallback((node) => {
    h5ElementRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // console.log(entries[0])
        entries[0].target.style = `transform:"translateX(0px)", transition:'ease .7s'`;
      }
    });
    if (node) h5ElementRef.current.observe(node);
  }, []);

  const fetchData = async () => {
    setLoading(true);
    await fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => {
        setItem(json);
        setLoading(false)
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Shop page</h1>
      {item.map((i, index) => {
        return (
          <h5
            key={index}
            style={{ transform: "translatex(100px", opacity: ".6" }}
            ref={h5ElementRef}
          >
            {i.title}
          </h5>
          
        );
      })}
      {loading && <h1>Loading...</h1>}
    </div>
  );
}

export default Shop;
