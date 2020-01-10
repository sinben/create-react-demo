import React from 'react';
import { Route, Switch } from "react-router";
import List from "./pages/imp-overview";
import Details from "./pages/imp-details";

const App: React.FC = () => {
  return (
      <>
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/imp/:id" component={Details} />
        </Switch>
      </>
  );
}

export default App;
