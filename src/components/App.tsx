import * as React from "react";
import { hot } from "react-hot-loader";
import Input from "./Input";
import "../assets/scss/App.scss";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <h1>GitHub Searcher</h1>
        <Input />
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
