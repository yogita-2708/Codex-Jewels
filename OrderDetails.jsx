import React, { useState, useEffect } from "react";

function OrderDetails() {
  const [products, setProducts] = useState([]);

  async function fetchData() {
    try {
      let res = await fetch("http://localhost:5000/Product");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function orderCancel(id) {
    try {
      let res = await fetch(`http://localhost:5000/Product/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Delete request failed");
      }
      let data = await res.json();
      console.log(data);
      fetchData();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }

  return (
    <div>
      <h2>Order Details</h2>
      <div>
        {products.map((el) => {
          return (
            <div key={el.id}>
              <h4>{el.Type}</h4>
              <div>
                <ul>
                  <li key={el.id}>
                    {el.Title}
                    <br />${el.Img}
                  </li>
                  <p>Your product will be delivered soon</p>
                  <button
                    onClick={() => {
                      orderCancel(el.id);
                    }}
                  >
                    Cancel Order
                  </button>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OrderDetails;
