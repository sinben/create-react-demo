import React from 'react';
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import List from "./components/imp-list/imp-list";
import Details from "./components/imp-details/imp-details";
import {initStore} from './redux/store';

const store = initStore();

const App: React.FC = () => {
  return (
      <>
      <Provider store={store}>
            <Switch>
              <Route exact path="/" component={List} />
              <Route path="/imp/:id" component={Details} />
            </Switch>
      </Provider>
      </>
  );
}

export default App;
