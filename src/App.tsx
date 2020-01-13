import React from 'react';
import { Route, Switch } from "react-router";
import List from "./components/imp-list/imp-list";
import Details from "./components/imp-details/imp-details";
import {initStore} from './redux/store';



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
