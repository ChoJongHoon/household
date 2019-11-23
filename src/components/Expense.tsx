import React from "react";
import styled from "styled-components";
import formatRoman from "../lib/formatRoman";
import formatMoney from "../lib/formatMoney";

const Wrapper = styled.tr``;

const RemoveButton = styled.div`
  color: #ff0000;
  float: right;
  margin: 0;
  padding: 0;
  cursor: pointer;
  display: none;
  ${Wrapper}:hover & {
    display: block;
  }
`;

const YellowTd = styled.td`
  background: #ffff00;
  color: #000000;
  text-align: ${props => props.align};
`;

type ExpenseProps = {
  id: number;
  index: number;
  name: string;
  price: number;
  place: string;
  onRemove: (id: number) => void;
};

export default function Expense({
  id,
  index,
  name,
  price,
  place,
  onRemove
}: ExpenseProps) {
  return (
    <Wrapper>
      <YellowTd align="center">{formatRoman(index)}.</YellowTd>
      <YellowTd align="left">{name}</YellowTd>
      <YellowTd align="right">{formatMoney(price)}</YellowTd>
      <YellowTd align="left">
        {place}
        <RemoveButton onClick={() => onRemove(id)}>&times;</RemoveButton>
      </YellowTd>
    </Wrapper>
  );
}
