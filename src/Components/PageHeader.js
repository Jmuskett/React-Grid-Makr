import React, { useContext } from "react";
import styled from "@emotion/styled";
import { GridContext } from "../App";

const Header = styled.div`
  background-color: yellow;
  text-align: center;
  grid-column-start: 1;
  grid-column-end: ${p => p.columns + 1};
`;

const PageHeader = props => {
  const { columns } = useContext(GridContext);

  return <Header columns={columns}>{props.children}</Header>;
};

export default PageHeader;
