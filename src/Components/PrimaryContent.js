import React, { useContext } from "react";
import styled from "@emotion/styled";

const PrimaryContentContainer = styled.div`
  background-color: skyblue;
  margin: 1rem;
  padding: 1rem;
`;

const PrimaryContent = props => {
  return <PrimaryContentContainer>{props.children}</PrimaryContentContainer>;
};

export default PrimaryContent;
