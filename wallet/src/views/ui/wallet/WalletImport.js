import { LCDClient, MnemonicKey } from '@terra-money/terra.js';
import { Card, Row, Col, CardTitle, CardBody, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const Forms = () => {
  const [userMnemonic, setUserMnemonic] = useState('')
  const handleUserMnemonic = (e) => {
    setUserMnemonic(e.target.value)
  }

  // ANC on bombay-12
  const terra = new LCDClient({
    URL: "https://bombay-lcd.terra.dev",
    chainID: "bombay-12",
    gasPrices: { uluna: 0.015 },
    gasAdjustment: 1.4
  });

  function checkMnemonic() {
    const MNE_KEY_EXACT  = new MnemonicKey({
      mnemonic: userMnemonic,
      coinType: 118
    });
    const a = terra.wallet(MNE_KEY_EXACT);
    console.log(a);
  }

  return (
    <Row>
      <Col>
        <Card style={{ width: '55rem' }}>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Do Kwon Wallet
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="exampleText">Mnemonic Code</Label>
                <Input onChange={handleUserMnemonic} id="exampleText" name="text" type="textarea" 
                placeholder="니모닉 코드 문구를 입력하세요. 각 단어 사이는 띄어쓰기로 구분합니다."
                />
              </FormGroup>
              <Link to="/walletbalancetransfer" state={{mnemonic: userMnemonic}} style={{ textDecoration: 'none' }}> 
                <Button onClick={checkMnemonic} className="btn" color="primary" size="lg" block>
                  Access Terra Wallet
                </Button>
              </Link>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
