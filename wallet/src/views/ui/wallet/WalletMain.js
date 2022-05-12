import { Card, Row, Col, CardTitle, CardBody, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Forms = () => {
  return (
    <Row>
      <Col>
        <Card style={{ width: '55rem' }}>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Do Kwon Wallet
          </CardTitle>
          <CardBody>
            <Row justify-content>
              <Col lg="8">
                {/* <h3 className="mt-4">Terra Wallet</h3> */}
                <h5 className=" mb-4">
                You can make a wallet and manage your accounts<br/><br/>
                URL: https://bombay-lcd.terra.dev<br/>
                chainID: bombay-12
                </h5>
                </Col>
                </Row>
              <div className="button-group">
              <Link to="/walletcreate" style={{ textDecoration: 'none' }}>
                <Button className="btn" color="primary" size="lg" block>
                  Create New Wallet
                </Button>
                </Link>
                <Link to="/walletimport" style={{ textDecoration: 'none' }}>
                <Button className="btn" color="secondary" size="lg" block>
                  Import Existing Key
                </Button>
                </Link>
              </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
