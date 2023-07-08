import React from "react";

import "./Chart.css";

const Chart = ({ items }) => {
  const total = items.reduce(
    (total, item) => total + item.amount * item.price,
    0
  );

  return (
    <div className="chart">
      <div className="list-container">
        <div className="list">
          <ul>
            <h4>sepetteki ürünler</h4>
            {items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
        <div className="list">
          <ul>
            <h4>adet</h4>
            {items.map((item) => (
              <li key={item.id}>{item.amount}</li>
            ))}
          </ul>
        </div>
        <div className="list">
          <ul>
            <h4>fiyat</h4>
            {items.map((item) => (
              <li key={item.id}>{item.price * item.amount}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="total-container">
        <div className="total">
          <ul>
            <h4>toplam tutar</h4>
            <li>{total}</li>
            <button>sipariş ver</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chart;
