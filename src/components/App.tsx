import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import Input from "./Input";
import UserInfo from "./UserInfo";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="atlana/dist/:id">
              <UserInfo />
            </Route>
            <Route path="atlana/dist/" exact>
              <Input />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
