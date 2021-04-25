import React from "react";
import { Row, Col, Typography, List, Card } from "antd";
import Theme from "../constants/theme";
import numberFormat from "../util/numberFormat";
const { Title } = Typography;

export default function TotalCasesCards({ data }) {
  const stateTotal = data.statewise.filter((sta) => sta.state === "Total");
  const dataSource = stateTotal.map((state) => {
    return state.state === "Total"
      ? [
          {
            title: "Confirmed",
            data: state.confirmed,
            delta: state.deltaconfirmed,
          },
          {
            title: "Active",
            data: state.active,
            delta: 0,
          },
          {
            title: "Recovered",
            data: state.recovered,
            delta: state.deltarecovered,
          },
          {
            title: "Deceased",
            data: state.deaths,
            delta: state.deltadeaths,
          },
        ]
      : [];
  });

  console.log(dataSource);
  const styles = (item) => {
    if (item.title === "Confirmed") {
      return {
        color: Theme.color.confirmed,
        borderRadius: 10,
        background: `linear-gradient(180deg, #f2cbd0 0%, white 100%)`,
      };
    }
    if (item.title === "Active") {
      return {
        color: Theme.color.active,
        borderRadius: 10,
        background: `linear-gradient(180deg, #cbccf2 0%, white 100%)`,
      };
    }
    if (item.title === "Recovered") {
      return {
        color: Theme.color.recovered,
        borderRadius: 10,
        background: `linear-gradient(180deg, #cef2cb 0%, white 100%)`,
      };
    }
    if (item.title === "Deceased") {
      return {
        color: Theme.color.deaths,
        borderRadius: 10,
        background: `linear-gradient(180deg, #c1c6c1 0%, white 100%)`,
      };
    }
  };
  return (
    <div>
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={4}></Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={16}>
          <Row>
            {" "}
            <Title style={{ fontSize: Theme.size.xxl,color:Theme.color.primary }} level={4}>
              COVID19 INDIA ❤️ 
            </Title>
          </Row>

          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={dataSource[0]}
            renderItem={(item) => (
              <List.Item>
                <Card style={styles(item)}>
                  <Row>
                    {" "}
                    <span
                      style={{
                        fontSize: Theme.size.md,
                      }}
                    >
                      {item.title}
                    </span>
                  </Row>
                  
                  <Row>
                    {" "}
                    {item.delta && (
                      <span style={{ fontSize: Theme.size.sm }}>
                        {" "}
                        + {numberFormat(item.delta)}
                      </span>
                    )}
                  </Row>
                  <Row>
                    <span
                      style={{
                        fontSize: Theme.size.xl,
                        fontWeight: Theme.weight.bolder,
                      }}
                    >
                      {numberFormat(item.data)}
                    </span>
                  </Row>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={4}></Col>
      </Row>
    </div>
  );
}
