import React from "react";
import styled from "@emotion/styled";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${p => `repeat(${p.columns}, auto)`};
  grid-template-rows: ${p => `repeat(${p.rows}, auto)`};
`;

const Grid = props => {
  const { rows, columns } = props;
  const GridContext = React.createContext({ rows, columns });

  return (
    <GridContext.Provider>
      <GridContainer columns={columns} rows={rows}>
        {props.children}
      </GridContainer>
    </GridContext.Provider>
  );
};

export default Grid;
