import React from "react";
import { Row, Col } from "antd";
export default function About() {
  return (
    <div>
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={4}></Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={16}>
            <h1>About</h1>
          You will find that any event which causes the chart to re-render, such
          as hover tooltips, etc., will cause the first dataset to be copied
          over to other datasets, causing your lines and bars to merge together.
          This is because to track changes in the dataset series, the library
          needs a key to be specified - if none is found, it can't tell the
          difference between the datasets while updating. To get around this
          issue, you can take these two approaches:
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={4}></Col>
      </Row>
    </div>
  );
}
