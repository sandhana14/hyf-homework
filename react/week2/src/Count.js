import React, { useState, useEffect } from "react";

function TimeUserOnWebsite() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div>
      <h1>You have used {count} seconds on this website</h1>
    </div>
  );
}

export default TimeUserOnWebsite;
