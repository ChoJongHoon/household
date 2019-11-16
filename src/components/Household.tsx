import React from "react";
import styled from "styled-components";

const Wrapper = styled.table``;

type HouseholdProps = {
  children: JSX.Element[];
};

export default function Household({ children }: HouseholdProps) {
  return <Wrapper>{children}</Wrapper>;
}
