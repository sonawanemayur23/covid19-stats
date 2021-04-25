import React from "react";
import { Table } from "reactstrap";
import { Row, Col } from "antd";
import numberFormat from "../util/numberFormat";
import getTime from "../util/getTime";
import moment from "moment";
import Theme from "../constants/theme";
export default function CasesTable({ data,history }) {
  console.log(history);
  return (
    <Row>
      <Col xs={2} sm={4} md={6} lg={8} xl={4}></Col>
      <Col xs={20} sm={16} md={12} lg={8} xl={16}>
     
        <Table responsive size="sm" hover>
          <thead>
            <tr style={{color:Theme.color.primary}}>
              <th>State</th>
              <th>Confirmed</th>
              <th>Active</th>
              <th>Recovered</th>
              <th>Deceased</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {data.statewise.map((entry, index) => (
                entry.state.includes("Total" ) ||  entry.state.includes("State Unassigned") ?
             null :(<tr key={index} onClick={()=>history.push(`/state-details/${entry.state}`)}>
                <th scope="row" style={{color:Theme.color.primary}}>{entry.state}</th>
                <td style={{color:Theme.color.confirmed}}>{numberFormat(entry.confirmed)}</td>
                <td style={{color:Theme.color.active}}>{numberFormat(entry.active)}</td>
                <td style={{color:Theme.color.recovered}}>{numberFormat(entry.recovered)}</td>
                <td style={{color:Theme.color.deaths}}>{numberFormat(entry.deaths)}</td>
                <td style={{color:"gray"}}><small>{moment(getTime(entry.lastupdatedtime)).fromNow()}</small></td>
              </tr>)
            ))}
          </tbody>
        </Table>
      </Col>
      <Col xs={2} sm={4} md={6} lg={8} xl={4}></Col>
    </Row>
  );
}
