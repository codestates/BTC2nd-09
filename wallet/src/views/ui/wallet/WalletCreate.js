import { MnemonicKey } from '@terra-money/terra.js';
import { Card, Row, Col, CardTitle, CardBody, Button, Container } from "reactstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

function WalletImport({props}){
  const [ mnemonic, chageMnemonic ] = useState('');
  const MNE_KEY_RANDOM = new MnemonicKey();
  const MNE_KEY_ARR = MNE_KEY_RANDOM.mnemonic.split(' ');

  function handleChangeMnemonic() {
    const word = MNE_KEY_RANDOM.mnemonic.split(' ');
    chageMnemonic(word)
  }

  function copyMnemonic() {
    navigator.clipboard.writeText(MNE_KEY_RANDOM.mnemonic);
  }

    return (
      <Row>
        <Col>
          <Card style={{ width: '55rem' }}>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-bell me-2"> </i>
              니모닉 생성 / 24단어 BIP-39 MnemonicKey
            </CardTitle>
            <CardBody>
            <Container>
              <Row className="mt-3">
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[0]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[1]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[2]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[3]}</div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[4]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[5]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[6]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[7]}</div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[8]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[9]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[10]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[11]}</div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[12]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[13]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[14]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[15]}</div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[16]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[17]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[18]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[19]}</div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[20]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[21]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[22]}</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">{MNE_KEY_ARR[23]}</div>
                </Col>
              </Row>

            </Container>
            <CardBody className="">
                <div className="button-group">
                  <Button className="btn" onClick={handleChangeMnemonic} color="primary" size="lg">
                    Refresh
                  </Button>
                  <Button className="btn" onClick={copyMnemonic} color="secondary" size="lg">
                    Copy
                  </Button>
                </div>
              </CardBody>
              <CardBody className="">
                <div className="button-group">
                <Link to="/walletBalanceTransfer" 
                  state={{ mnemonic: MNE_KEY_RANDOM.mnemonic }}
                  style={{ textDecoration: 'none' }}>
                  <Button className="btn" color="primary" size="lg" block>
                    Create Terra Wallet
                  </Button>
                </Link>
                </div>
              </CardBody>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
}

export default WalletImport;
