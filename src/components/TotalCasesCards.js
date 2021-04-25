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

  
  const styles = (item) => {
    if (item.title === "Confirmed") {
      return {
        color: Theme.color.confirmed,
        borderRadius: 10,
        background: `linear-gradient(180deg, #f2cbd0 0%, #f2cbd0 100%)`,
        boxShadow:" 4px 4px 2px 0px lightgray"
      };
    }
    if (item.title === "Active") {
      return {
        color: Theme.color.active,
        borderRadius: 10,
        background: `linear-gradient(180deg, #cbccf2 0%,  #cbccf2 100%)`,
        boxShadow:" 4px 4px 2px 0px lightgray"
      };
    }
    if (item.title === "Recovered") {
      return {
        color: Theme.color.recovered,
        borderRadius: 10,
        background: `linear-gradient(180deg, #cef2cb 0%, #cef2cb 100%)`,
        boxShadow:" 4px 4px 2px 0px lightgray"
      };
    }
    if (item.title === "Deceased") {
      return {
        color: Theme.color.deaths,
        borderRadius: 10,
        background: `linear-gradient(180deg, #c1c6c1 0%, #c1c6c1 100%)`,
        boxShadow:" 4px 4px 2px 0px lightgray"
      };
    }
  };
  return (
    <div className="cards">
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={4}></Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={16}>
          <Row>
            
            <Title style={{ fontSize: Theme.size.xxxl,color:Theme.color.primary,cursor:"pointer" }}level={4}>
              COVID19 INDIA ❤️ 
            </Title>
          </Row>

          <List 
          
            grid={{
              gutter: 16,
              xs: 2,
              sm: 2,
              md: 2,
              lg: 2,
              xl: 4,
              xxl: 4,
            }}
            dataSource={dataSource[0]}
            renderItem={(item) => (
              <List.Item>
                <Card style={styles(item)}>
                  <Row>
                    
                    <span
                      style={{
                        fontSize: Theme.size.md,
                      }}
                    >
                      {item.title}
                    </span>
                  </Row>
                  
                  <Row>
                    
                    {item.delta !== 0 ?   (
                      <span style={{ fontSize: Theme.size.sm }}>
                        
                        + {numberFormat(item.delta)}
                      </span>
                    ):  <span style={{ fontSize: Theme.size.sm }}>
                        
                        🕐
                  </span>}
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
