import React from "react";
import { Layout } from "antd";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About"
import Resources from "./Resources";
import StateDetails from "./StateDetails"
const { Content } = Layout;
export default function AppContent() {
  return (
    <Content style={{ marginLeft: "5%", marginRight: "5%",marginTop:"2rem" }}>
      <div className="site-layout-background" >
        <HashRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/resources" component={Resources} />
            <Route path="/state-details/:name" component={StateDetails} />
          </Switch>
        </HashRouter>
      </div>
    </Content>
  );
}
