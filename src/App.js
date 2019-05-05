import React from "react";
import Grid from "./Components/Grid";
import PageHeader from "./Components/PageHeader";
import PrimaryContent from "./Components/PrimaryContent";
export const GridContext = React.createContext();

function App() {
  return (
    <Grid rows={4} columns={2}>
      <PageHeader>This is the header</PageHeader>

      <PrimaryContent>
        <div>
          <p>Hello</p>
        </div>
        <div>
          <p>Hello</p>
        </div>{" "}
        <div>
          <p>Hello</p>
        </div>
      </PrimaryContent>
      <PrimaryContent>
        <div>
          <p>Hello</p>
        </div>{" "}
        <div>
          <p>Hello</p>
        </div>{" "}
        <div>
          <p>Hello</p>
        </div>{" "}
        <div>
          <p>Hello</p>
        </div>
      </PrimaryContent>
    </Grid>
  );
}

export default App;
