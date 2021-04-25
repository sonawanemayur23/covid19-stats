import React from "react";
import { Layout } from "antd";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About"
import Resources from "./Resources";
import StateDetails from "./StateDetails"
const { Content } = Layout;
export default function AppContent() {
  return (
    <Content style={{ marginLeft: "10%", marginRight: "10%",marginTop:"2rem" }}>
      <div className="site-layout-background" >
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/resources" component={Resources} />
            <Route path="/state-details/:name" component={StateDetails} />
          </Switch>
        </BrowserRouter>
      </div>
    </Content>
  );
}
