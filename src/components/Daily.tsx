import React, { useState } from "react";
import styled from "styled-components";
import formatDate from "../lib/formatDate";
import formatMoney from "../lib/formatMoney";
import EditIcon from "@material-ui/icons/Edit";

const IndexTd = styled.td`
  background: #0000ff;
  color: #ffffff;
  text-align: center;
`;

const ModifyButton = styled.div`
  font-size: 1rem;
  float: right;
  display: none;
  cursor: pointer;
`;

const GreenTd = styled.td`
  background: #00ff00;
  color: #000000;
  text-align: ${props => props.align};
  :hover ${ModifyButton} {
    display: block;
  }
`;

type LimeTdPropsType = {
  minus?: boolean;
};

const LimeTd = styled.td<LimeTdPropsType>`
  background: #a3dd08;
  color: ${props => (props.minus ? "#FF0000" : "#000000")};
  text-align: ${props => props.align};
`;

const IncomeTextField = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  font-size: 1rem;
`;

type DailyProps = {
  index: number;
  date: string;
  income: number;
  total: number;
  children: JSX.Element[];
  modify: boolean;
  setModify: (modify: number) => void;
  onModify: (index: number, income: number) => void;
};

export default function Daily({
  index,
  date,
  income,
  total,
  children,
  modify,
  setModify,
  onModify
}: DailyProps) {
  const [incomeValue, setIncomeValue] = useState(String(income));
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.keyCode === 69 ||
      e.keyCode === 190 ||
      e.keyCode === 109 ||
      e.keyCode === 189
    ) {
      e.preventDefault();
    }
    if (e.key === "Enter") {
      onModify(index, Number(incomeValue));
      setModify(0);
    }
  };
  return (
    <tbody>
      <tr>
        <IndexTd rowSpan={children.length + 5}>{index}</IndexTd>
        <GreenTd align="center">날짜:{formatDate(date)}</GreenTd>
        <GreenTd align="center">수입</GreenTd>
        <GreenTd align="left" colSpan={2}>
          {modify ? (
            <IncomeTextField
              value={incomeValue}
              type="number"
              onChange={e => setIncomeValue(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          ) : (
            <>
              {formatMoney(income)}
              <ModifyButton
                onClick={() => {
                  setIncomeValue(String(income));
                  setModify(index);
                }}
              >
                <EditIcon style={{ fontSize: 14 }} />
              </ModifyButton>
            </>
          )}
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
          {formatMoney(total)}
        </LimeTd>
      </tr>
      <tr>
        <LimeTd align="center">잔액</LimeTd>
        <LimeTd align="left" colSpan={3} minus={income < total}>
          {income < total ? "[적자]" : null}
          {formatMoney(income - total)}
        </LimeTd>
      </tr>
    </tbody>
  );
}
