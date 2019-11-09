import React from "react";
import styled from "styled-components";
import data from "./data.json";

const Title = styled.h1`
  text-align: center;
`;

const TableWrapper = styled.table``;

const TdGreen = styled.td`
  background: #00ff00;
  color: #000;
  text-align: ${props => props.align};
  min-width: 120px;
`;

const TdBlue = styled.td`
  background: #0000ff;
  color: #fff;
  text-align: ${props => props.align};
`;

const TdYellow = styled.td`
  background: #ffff00;
  color: #000;
  text-align: ${props => props.align};
`;

const App: React.FC = () => {
  return (
    <div>
      <Title>가계부</Title>
      <TableWrapper>
        {data.data.map((item, idx) => (
          <>
            <tr>
              <TdBlue rowSpan={item.products.length + 5}>{idx + 1}</TdBlue>
              <TdGreen align="center">날짜:{item.date}</TdGreen>
              <TdGreen align="center">수입</TdGreen>
              <TdGreen colSpan={2} align="left">
                {item.income}
              </TdGreen>
            </tr>
            <tr>
              <TdGreen align="center">번호</TdGreen>
              <TdGreen align="center">품목</TdGreen>
              <TdGreen align="center">가격</TdGreen>
              <TdGreen align="center">구입처</TdGreen>
            </tr>
            {item.products.map((item, idx) => (
              <>
                <tr>
                  <TdYellow align="center">{idx + 1}.</TdYellow>
                  <TdYellow align="left">{item.name}</TdYellow>
                  <TdYellow align="right">{item.price}</TdYellow>
                  <TdYellow align="left">{item.place}</TdYellow>
                </tr>
              </>
            ))}

            <tr>
              <TdYellow align="center">개수</TdYellow>
              <TdYellow colSpan={3} align="left">
                {item.products.length}
              </TdYellow>
            </tr>
            <tr>
              <TdYellow align="center">총지출</TdYellow>
              <TdYellow colSpan={3} align="left">
                {item.products.reduce((acc, cur) => {
                  return acc + cur.price;
                }, 0)}
              </TdYellow>
            </tr>
            <tr>
              <TdYellow align="center">잔액</TdYellow>
              <TdYellow colSpan={3} align="left">
                {item.income -
                  item.products.reduce((acc, cur) => {
                    return acc + cur.price;
                  }, 0)}
              </TdYellow>
            </tr>
          </>
        ))}
      </TableWrapper>
    </div>
  );
};

export default App;
