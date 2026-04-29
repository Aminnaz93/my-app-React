import React, { useState, useEffect } from "react";

function UseEffectEX() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Komponenten laddar - hämtar data från API");

    fetch("https://jsonplaceholder.typicode.com/users/2")
      .then((response) => response.json())
      .then((user) => {
        setData(user);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Laddar...</p>;

  return (
    <div>
      <h2>{data.name}</h2>
      <p>Email: {data.email}</p>
    </div>
  );
}

export default UseEffectEX;