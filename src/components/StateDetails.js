import React, { useEffect, useState } from "react";
import API from "../api/index";
import { Table } from "reactstrap";
import { Row, Col,Typography } from "antd";
import numberFormat from "../util/numberFormat";
import Theme from "../constants/theme";
import { ArrowUpOutlined } from "@ant-design/icons";
export default function StateDetails({ match, history }) {
  const [data, setData] = useState(null);
  const [stateData, setStateData] = useState(null);
  const { Title } = Typography;
  const stateName = match.params.name;
  useEffect(() => {
    
    API.url
      .get(API.path.stateDistrict)
      .then((res) => {
        setData(res.data[stateName]?.districtData);
        setStateData(Object.keys(res.data[stateName]?.districtData));
      })
      .catch((err) => console.log(err));
  }, [match,stateName ]);
  console.log(data);
  return (
    <Row>
      <Col xs={2} sm={4} md={6} lg={8} xl={4}></Col>
      <Col xs={20} sm={16} md={12} lg={8} xl={16}>
      <Row>
            
            <Title  onClick={()=>history.goBack()} style={{ fontSize: Theme.size.xxxl,color:Theme.color.primary,cursor:"pointer" }} level={4}>
              COVID19 INDIA ❤️ 
            </Title>
          </Row>

          <Row>
            
            <Title style={{ fontSize: Theme.size.xl,color:Theme.color.primary }} level={4}>
              {stateName}
            </Title>
          </Row>

        {stateData && (
          <Table responsive size="sm" hover>
            <thead>
              <tr>
                <th>District</th>
                <th>Confirmed</th>
                <th>Active</th>
                <th>Recovered</th>
                <th>Deceased</th>
              </tr>
            </thead>
            <tbody>
              {stateData.map((entry, index) => (
                <tr
                  key={index}
                  onClick={() => history.push(`/state-details/${entry.state}`)}
                >
                  <th scope="row">{entry}</th>
                  <td style={{ color: Theme.color.confirmed }}>
                    {numberFormat(data[entry]["confirmed"])}
                    <small style={{ padding: Theme.padding.md }}>
                      {" "}
                      <ArrowUpOutlined />{" "}
                      {numberFormat(data[entry]["delta"]["confirmed"])}
                    </small>
                  </td>
                  <td style={{ color: Theme.color.active }}>
                    {numberFormat(data[entry]["active"])}
                   
                  </td>
                  <td style={{ color: Theme.color.recovered }}>
                    {numberFormat(data[entry]["recovered"])}
                    <small style={{ padding: Theme.padding.md }}>
                      {" "}
                      <ArrowUpOutlined />{" "}
                      {numberFormat(data[entry]["delta"]["recovered"])}
                    </small>
                  </td>
                  <td style={{ color: Theme.color.deaths }}>
                    {numberFormat(data[entry]["deceased"])}
                    <small style={{ padding: Theme.padding.md }}>
                      {" "}
                      <ArrowUpOutlined />{" "}
                      {numberFormat(data[entry]["delta"]["deceased"])}
                    </small>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
      <Col xs={2} sm={4} md={6} lg={8} xl={4}></Col>
    </Row>
  );
}
