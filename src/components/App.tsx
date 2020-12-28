import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Base from "./base/Base";
import Home from "./home/Home";
import Twitch from "./twitch/Twitch";
import Tiktok from "./tiktok/Tiktok";

export default class App extends Component<any, any> {
  render() {
    return (
      <Base>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/twitch" component={Twitch} />
          <Route exact path="/tiktok" component={Tiktok} />
        </Switch>
      </Base>
    );
  }
}
