import { LCDClient, MnemonicKey, MsgSend, isTxError } from '@terra-money/terra.js';
import { Card, Row, Col, CardTitle, CardBody, CardText, Button, Form, FormGroup, Label, Input, Table } from "reactstrap";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import luna from "../../../assets/images/logos/luna.jpg";
import Modal from './TxhashModal';

function WalletBalanceTransfer(){
  const [ mybalance, changeBalance ] = useState('0'); // Mybalance state
  const MNE_KEY = useLocation().state;  // Menmonic parameter

  // ANC on bombay-12
  const terra = new LCDClient({
    URL: "https://bombay-lcd.terra.dev",
    chainID: "bombay-12",
    gasPrices: { uluna: 0.015 },
    gasAdjustment: 1.4
  });

  // 니모닉키를 이용하여 지갑생성
  const MNE_KEY_EXACT  = new MnemonicKey({
    mnemonic: MNE_KEY.mnemonic,
  });
  const myWallet = terra.wallet(MNE_KEY_EXACT);
  const walletAddress = MNE_KEY_EXACT.accAddress;

  // 지갑잔액조회
  async function getMyBalance(address){
    const [balance] = await terra.bank.balance(address);
    let result = 0;
    if ( balance.toData()[0]){
      result = balance.toData()[0].amount;
    }
    tableData[0].balance = result;
    changeBalance(result)
    return result
  }
  getMyBalance(walletAddress);

  const tableData = [
    {
      avatar: luna,
      name: "Terra",
      ticker: "LUNA",
      balance: mybalance,
      address: walletAddress
    },
  ];

  // Transfer 기능
  const [transferAddress, setTransferAddress] = useState('')
  const [transferAmount, setTransferAmount] = useState('')
  const handleTransferAddress = (e) => {
    setTransferAddress(e.target.value)
  }
  const handleTransferAmount = (e) => {
    setTransferAmount(e.target.value)
  }

  // 트랜잭션 결과 매핑할 변수
  const [ resulthash , setResultHash ] = useState('');
  const [ resultblock , setResultBlock ] = useState('');
  const [ resultfrom , setResultFrom ] = useState('');
  const [ resultto , setResultTo ] = useState('');
  const [ resultamount , setResultAmount ] = useState('');

  async function transferHandler() {
    // Create message for transaction
    const send = new MsgSend(
      myWallet.key.accAddress,
      transferAddress, //terra1kausfu69ef2j0flv6xwfcryuh2f2c48r4w93vn
      { uluna: transferAmount }
    );

    // Create Transaction and Sign it
    const executeTx = await myWallet.createAndSignTx({
      msgs: [send],
      memo: "Terra Transaction Test"
    })
      .then(tx => terra.tx.broadcast(tx))
      .then((result) =>{
        // Broadcast result & get wallet balance
        if (isTxError(result)) {
          throw new Error(`encountered an error while running the transaction: ${result.code} ${result.codespace}`);
        }
        console.log(result);
        //console.log("aaaaaa",txresult);
        
        setResultHash(result.txhash);
        setResultBlock(result.height);
        setResultFrom(result.logs[0].events[1].attributes[0].value);
        setResultTo(result.logs[0].events[0].attributes[0].value);
        setResultAmount(result.logs[0].events[0].attributes[1].value);

        getMyBalance(walletAddress);
        setModalOpen(true);
        //console.log("bbbbb",txresult);
        return result;
      });
      console.log(executeTx);
  }

  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Row>
      <Col>
        <Card style={{ width: '55rem' }}>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            My Terra Wallet
          </CardTitle>
          <CardBody className="">
          <div>
          <Row>
        <Col md="6" lg="9">
          <Card body color="primary" inverse>
            <CardTitle tag="h4">Wallet Address</CardTitle>
            <CardText>
            {tableData.map((tdata, index) => (
                  <td>{tdata.address}</td>
              ))}
            </CardText>
          </Card>
        </Col>
        </Row>
        </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Assets</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.ticker}</span>
                      </div>
                    </div>
                  </td>
                  <td>{mybalance} Luna</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
        </Card>
        <Card style={{ width: '55rem' }}>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="address">To Address / terra1kausfu69ef2j0flv6xwfcryuh2f2c48r4w93vn</Label>
                <Input onChange={handleTransferAddress} id="transferAddress"
                  placeholder="받으실 분의 지갑 주소"
                />
              </FormGroup>
              <FormGroup>
                <Label for="amount">Amount(LUNA)</Label>
                <Input onChange={handleTransferAmount} id="transferAmount"
                placeholder="전송할 수량"
                />
              </FormGroup>
              <React.Fragment>
              <Button style={{float: 'right'}} onClick={transferHandler} className="btn" color="primary" size="lg">
                  Transfer
                </Button>
                <Modal open={modalOpen} close={closeModal} header="Transaction Result">
                    Hash : {resulthash}<br/>
                    Block : {resultblock}<br/>
                    From : {resultfrom}<br/>
                    To : {resultto}<br/>
                    Amount : {resultamount}<br/>
                </Modal>
                </React.Fragment>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default WalletBalanceTransfer;