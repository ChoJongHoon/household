import React from "react";
import { data } from "./lib/data.json";

// components
import Household from "./components/Household";
import Daily from "./components/Daily";
import Expense from "./components/Expense";

function App() {
  const sortedData = data
    .sort((a, b) => {
      // 날짜별 정렬
      if (a.date > b.date) return 1;
      else if (b.date > a.date) return -1;
      else return 0;
    })
    .map(daily => {
      const sortedExpenses = daily.expenses.sort((a, b) => {
        // 구입처별 내림차순 정렬
        if (a.place > b.place) return -1;
        else if (b.place > a.place) return 1;
        else return 0;
      });
      return {
        ...daily,
        expenses: sortedExpenses
      };
    });

  return (
    <Household>
      {sortedData.map((daily, idx) => (
        <Daily
          key={idx}
          index={idx + 1}
          date={daily.date}
          income={daily.income}
          total={daily.expenses.reduce((acc, cur) => acc + cur.price, 0)}
        >
          {daily.expenses.map((expense, idx) => (
            <Expense
              key={idx}
              index={idx + 1}
              name={expense.name}
              price={expense.price}
              place={expense.place}
            />
          ))}
        </Daily>
      ))}
    </Household>
  );
}

export default App;
