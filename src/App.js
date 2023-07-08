import { useEffect, useState } from "react";
import "./App.css";
import Item from "./components/Item";
import Chart from "./components/Chart";

const DUMMY_DATA = [
  {
    id: 1,
    name: "kola",
    price: 100,
  },
  {
    id: 2,
    name: "simit",
    price: 300,
  },
  {
    id: 3,
    name: "ekmek",
    price: 200,
  },
];

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div className="App">
      <div className="data-container">
        {DUMMY_DATA.map((data) => (
          <Item key={data.id} data={data} items={items} setItems={setItems} />
        ))}
      </div>

      {items.length > 0 && (
        <div className="chart-container">
          <Chart items={items} setItems={setItems} />
        </div>
      )}
    </div>
  );
}

export default App;
