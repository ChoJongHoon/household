import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
`;

const HouseholdTable = styled.table`
  width: 100%;
`;

type HouseholdProps = {
  children: JSX.Element[];
};

export default function Household({ children }: HouseholdProps) {
  return (
    <Wrapper>
      <HouseholdTable>
        <caption>가계부</caption>
        {children}
      </HouseholdTable>
    </Wrapper>
  );
}
