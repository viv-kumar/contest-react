import React, { useEffect, useState } from "react";

export const Component = () => {
  const [apiRes, setApiRes] = useState([]);
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch(
      "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    )
      .then((res) => res.json())
      .then((data) => setApiRes(data))
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false));
  }, []);
  console.log(apiRes);
  if (loading) return <div>Loading ....</div>;
  return (
    <>
      <h2>Products</h2>
      <div id="parentdiv">
        {Object.values(apiRes).map((e) => (
          <div key={e.id}>
            <img alt="" src={e.productImage} />
            <div>
              <h6 id="vivek">{e.productName}</h6>
            </div>
           
            <div id="innerpricediv">
              <div>* * * * *</div>
              <div>
                <h6 className="heading">{e.newPrice}/- </h6>

                <h6>{e.oldPrice}/- </h6>
              </div>
            </div>
            <div id="cartbtn">
              <button>ADD TO CART</button>
            </div>
          </div>
        ))}
           
      </div>
    </>
  );
};
