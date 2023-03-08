import { Row, Col, Card, Button } from 'antd';

const DetailsProduct = ({price}) => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card cover={<img alt="product" src="https://via.placeholder.com/300x300" />}>
            <Card.Meta title="Product Name" description="Product Description" />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Card.Meta title="Product Details" />
            <ul>
              <li>Price: $10.00</li>
              <li>Size: Large</li>
              <li>Color: Red</li>
              <li>Quantity: 1</li>
            </ul>
            <Button type="primary">Add to Cart</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DetailsProduct;