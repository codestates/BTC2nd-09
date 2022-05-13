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
        .get("http://localhost:4000/block")
        .then((res) => {
          setBlockInfo(res.data.blockInfo);
        });
      return block;
    };
    getBlock();
  });

  const tableData = [
    {
      index: "1",
      txhash: "0xjdjdjididjidjidjdi",
      blockno: "120202020",
      date: "2022/5/13 03:44:12",
    },
    {
      index: "2",
      txhash: "0xdfnjwoceonownfoeno",
      blockno: "20200220",
      date: "2022/5/13 03:44:13",
    },
    {
      index: "3",
      txhash: "0xdfnjwoceonownfoeno",
      blockno: "20200220",
      date: "2022/5/13 03:44:13",
    },
    {
      index: "4",
      txhash: "0xdfnjwoceonownfoeno",
      blockno: "20200220",
      date: "2022/5/13 03:44:13",
    },
    {
      index: "5",
      txhash: "0xdfnjwoceonownfoeno",
      blockno: "20200220",
      date: "2022/5/13 03:44:13",
    },
    {
      index: "6",
      txhash: "0xdfnjwoceonownfoeno",
      blockno: "20200220",
      date: "2022/5/13 03:44:13",
    },
    {
      index: "7",
      txhash: "0xdfnjwoceonownfoeno",
      blockno: "20200220",
      date: "2022/5/13 03:44:13",
    },
    {
      index: "8",
      txhash: "0xdfnjwoceonownfoeno",
      blockno: "20200220",
      date: "2022/5/13 03:44:13",
    },
    {
      index: "9",
      txhash: "0xdfnjwoceonownfoeno",
      blockno: "20200220",
      date: "2022/5/13 03:44:13",
    },
    {
      index: "10",
      txhash: "0xdfnjwoceonownfoeno",
      blockno: "20200220",
      date: "2022/5/13 03:44:13",
    },
  ];

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
                    <th>LastCommitHash</th>
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
                      <td>{bdata.last_commit_hash}</td>
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
