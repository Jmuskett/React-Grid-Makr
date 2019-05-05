import React from "react";
import styled from "@emotion/styled";
import { GridContext } from "../App";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${p =>
    `repeat(${p.columns}, ${100 / p.numberOfElements}%)`};
  grid-template-rows: ${p => `repeat(${p.rows}, auto)`};
  grid-column-gap: 2rem;
`;

const Grid = props => {
  const { rows, columns } = props;

  const numberOfElements = props.children.length - 1;
  return (
    <GridContext.Provider value={{ rows, columns, numberOfElements }}>
      <GridContainer
        columns={columns}
        rows={rows}
        numberOfElements={numberOfElements}>
        {props.children}
      </GridContainer>
    </GridContext.Provider>
  );
};
export default Grid;
