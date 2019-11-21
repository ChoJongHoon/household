import React, { useState } from "react";
import { data as initialData } from "./lib/data.json";
import styled from "styled-components";

// components
import Household from "./components/Household";
import Daily from "./components/Daily";
import Expense from "./components/Expense";
import Form from "./components/Form";

const Container = styled.div`
  display: flex;
`;

function App() {
  const [data, setData] = useState(initialData);

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

  const handleRemove = (id: number): void => {
    const removedData = data.map(daily => {
      return {
        ...daily,
        expenses: daily.expenses.filter(expense => expense.id !== id)
      };
    });

    setData(removedData);
  };

  return (
    <Container>
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
                id={expense.id}
                index={idx + 1}
                name={expense.name}
                price={expense.price}
                place={expense.place}
                onRemove={handleRemove}
              />
            ))}
          </Daily>
        ))}
      </Household>
      <Form data={data} setData={setData} />
    </Container>
  );
}

export default App;
