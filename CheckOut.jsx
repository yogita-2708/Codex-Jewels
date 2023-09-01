// title,description,type,weight,price,disPrice,img,brand

import React, { useState, useEffect } from "react";
//import { useHistory } from 'react-router-dom';

function CheckOut() {
  const [products, setProducts] = useState([]);
  //const [cart, setCart] = useState([]);

    const handleCheckout = () => {
      //history.push('/payment');
      window.location.href = '/payment';
    };

  async function fetchData() {
    let res = await fetch("http://localhost:5000/Product");
    let data = await res.json();
    setProducts(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const calculateTotalPrice = () => {
    let total = 0;
    for (const item of products) {
      total += item.DiscountPrice; //multply with quantity
    }
    return total;
  };

  async function deleteItem(id) {
    let res = await fetch(`http://localhost:5000/Product/${id}`, {
      method: "DELETE",
    });
    let data = await res.json();
    fetchData();
  }

  return (
    <div>
      <h1>Cart</h1>
      <div>
        {products.map((el) => {
          return (
            <div key={products.id}>
              <h4>{el.Type}</h4>
              <div>
                <ul>
                  <li key={el.id}>
                    {el.Title} - ${el.DiscountPrice}
                  </li>
                  <button onClick={() => {
                  deleteItem(el.id);
                }}
              >Delete Item</button>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <p>Total: ${calculateTotalPrice()}</p>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default CheckOut;
