import React from "react";
import { data } from "./lib/data.json";
import Household from "./components/Household";
import Daily from "./components/Daily";

function App() {
  return (
    <div>
      <Household>
        {data.map((daily, idx) => (
          <Daily
            key={idx}
            index={idx + 1}
            date={daily.date}
            income={daily.income}
            total={daily.products.reduce((acc, cur) => acc + cur.price, 0)}
          >
            {daily.products.map((product, idx) => (
              <tr key={idx}>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>
            ))}
          </Daily>
        ))}
      </Household>
    </div>
  );
}

export default App;
