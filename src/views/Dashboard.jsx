import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardBody,
  Row,
  Col
} from "reactstrap";
// core components
import {
  dashboardChart,
} from "variables/charts.jsx";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <Line
                    data={dashboardChart.data}
                    options={dashboardChart.options}
                    width={400}
                    height={200}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
