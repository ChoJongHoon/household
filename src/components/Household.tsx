import React from "react";
import styled from "styled-components";

const Wrapper = styled.table`
  /* Todo: css 추가 */
`;

type HouseholdProps = {
  children: JSX.Element[];
};

export default function Household({ children }: HouseholdProps) {
  return (
    <Wrapper>
      <caption>가계부</caption>
      {children}
    </Wrapper>
  );
}
