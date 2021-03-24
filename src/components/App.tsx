import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import Input from "./Input";
import UserInfo from "./UserInfo";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/:id">
              <UserInfo />
            </Route>
            <Route to="/">
              <Input />
            </Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
