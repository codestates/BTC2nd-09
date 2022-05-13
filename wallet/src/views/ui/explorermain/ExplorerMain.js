import {
  Row,
  Col,
  Table,
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const Tables = () => {
  const [txInfo, setTxInfo] = useState([]);

  useEffect(() => {
    const getTxInfo = async () => {
      const tx = await axios
        .get("http://localhost:8080/maintransaction")
        .then((res) => {
          setTxInfo(res.data.txInfo);
        });
      return tx;
    };
    getTxInfo();
  });

  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Block/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <div>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Block Explorer</CardTitle>
              {/*<CardSubtitle className="mb-2 text-muted" tag="h6">
          Block Explorer
          </CardSubtitle>*/}
              <Table
                className="no-wrap mt-3 align-middle"
                responsive
                borderless
              >
                <thead>
                  <tr>
                    <th>TxId</th>
                    <th>TxHash</th>
                    <th>Height</th>
                    <th>Gas_used</th>
                    <th>Gas_wanted</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {txInfo.map((txdata, index) => (
                    <tr key={index} className="border-top">
                      <td>
                        <div className="ms-3">
                          <h6 className="mb-0">{txdata.tx_id}</h6>
                        </div>
                      </td>
                      <td>{txdata.tx_hash}</td>
                      <td>{txdata.blockNumber}</td>
                      <td>{txdata.gas_used}</td>
                      <td>{txdata.gas_wanted}</td>
                      <td>{txdata.time}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </div>
      </Col>
    </Row>
  );
};

export default Tables;
