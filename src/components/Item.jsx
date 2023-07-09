import React from "react";
import "./item.css";

const Item = ({ data, items, setItems }) => {
  const addHandler = () => {
    const checkItemsIndex = items.findIndex((item) => item.id === data.id);

    if (checkItemsIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[checkItemsIndex].amount += 1;
      setItems(updatedItems);
    } else {
      setItems([
        ...items,
        {
          id: data.id,
          name: data.name,
          price: data.price,
          amount: 1,
        },
      ]);
    }
  };

  const removeHandler = () => {
    const updatedItems = [...items];
    const checkItemsIndex = items.findIndex((item) => item.id === data.id);
    updatedItems[checkItemsIndex].amount -= 1;
    setItems(updatedItems);
    if (updatedItems[checkItemsIndex].amount === 0) {
      setItems([...items.filter((item) => item.id !== data.id)]);
    }
  };

  
  return (
    <div className="item">
      <p>{data.name}</p>
      <p>{data.price}</p>
      <div className="btn">
        <button onClick={addHandler}>Sepete Ekle</button>
        <button onClick={removeHandler}>Sepetten Çıkart</button>
      </div>
    </div>
  );
};

export default Item;
