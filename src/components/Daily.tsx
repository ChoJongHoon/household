import React from "react";
import styled from "styled-components";

const IndexTd = styled.td`
  background: #0000ff;
  color: #ffffff;
`;

const GreenTd = styled.td`
  background: #00ff00;
  color: #000000;
  text-align: ${props => props.align};
`;

const LimeTd = styled.td`
  background: #bfff00;
  color: #000000;
  text-align: ${props => props.align};
`;

type DailyProps = {
  index: number;
  date: string;
  income: number;
  total: number;
  children: JSX.Element[];
};

export default function Daily({
  index,
  date,
  income,
  total,
  children
}: DailyProps) {
  return (
    <>
      <tr>
        <IndexTd rowSpan={children.length + 5}>{index}</IndexTd>
        <GreenTd align="center">날짜:{date}</GreenTd>
        <GreenTd align="center">수입</GreenTd>
        <GreenTd align="left" colSpan={2}>
          {income}
        </GreenTd>
      </tr>
      <tr>
        <GreenTd align="center">번호</GreenTd>
        <GreenTd align="center">품목</GreenTd>
        <GreenTd align="center">가격</GreenTd>
        <GreenTd align="center">구입처</GreenTd>
      </tr>
      {children}
      <tr>
        <LimeTd align="center">개수</LimeTd>
        <LimeTd align="left" colSpan={3}>
          {children.length}
        </LimeTd>
      </tr>
      <tr>
        <LimeTd align="center">총지출</LimeTd>
        <LimeTd align="left" colSpan={3}>
          {total}
        </LimeTd>
      </tr>
      <tr>
        <LimeTd align="center">잔액</LimeTd>
        <LimeTd align="left" colSpan={3}>
          {income - total}
        </LimeTd>
      </tr>
    </>
  );
}
