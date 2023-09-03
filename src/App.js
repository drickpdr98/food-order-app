import { Fragment } from "react";

import Header from "./components/LAYOUT/Header";
import Meals from "./components/MEALS/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
