import { Row, Col, Table, Card, CardTitle, CardSubtitle, CardBody } from "reactstrap";

const Tables = () => {

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
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Index</th>
                <th>Tx Hash</th>
                <th>Block Number</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.index}</h6>
                      </div>
                  </td>
                  <td>{tdata.txhash}</td>
                  <td>{tdata.blockno}
                  </td>
                  <td>{tdata.date}</td>
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
