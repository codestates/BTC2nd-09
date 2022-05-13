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
  const [blockInfo, setBlockInfo] = useState([]);

  useEffect(() => {
    const getBlock = async () => {
      const block = await axios
        .get("http://localhost:4000/testblock")
        .then((res) => {
          setBlockInfo(res.data.blockInfo);
        });
      return block;
    };
    getBlock();
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
                    <th>Height</th>
                    <th>DataHash</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {blockInfo.map((bdata, index) => (
                    <tr key={index} className="border-top">
                      <td>
                        <div className="ms-3">
                          <h6 className="mb-0">{bdata.height}</h6>
                        </div>
                      </td>
                      <td>{bdata.data_hash}</td>
                      <td>{bdata.time}</td>
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
