import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Brands.css";
import img1 from './forbes-728cf6ab.svg';
import img2 from './mens-health-0ff58cd4.svg';
import img3 from './techcrunch-c4f5989e.svg';
import img4 from './vogue-7929d208.svg';
import img5 from './yahoo-ba646703.svg';

const Brands = () => {
  return (
    <Container fluid className="px-5 py-5">
      <Row>
        <Col className="text-center">
          <h6 className="brands-header">AS SEEN IN</h6>
        </Col>
      </Row>
      <Row className="py-4">
          <Col lg={1} className="d-none d-lg-block"  ></Col>
          <Col sm={4} lg={2}><img src={img1} alt="" width="200" className="img-fluid p-3" /></Col>
          <Col sm={4} lg={2}><img src={img2} alt="" width="200" className="img-fluid p-3" /></Col>
          <Col sm={4} lg={2}><img src={img3} alt="" width="200" className="img-fluid p-3" /></Col>
          <Col sm={6} lg={2}><img src={img4} alt="" width="200" className="img-fluid p-3" /></Col>
          <Col sm={6} lg={2}><img src={img5} alt="" width="200" className="img-fluid p-3" /></Col>
          <Col lg={1} className="d-none d-lg-block"></Col>
      </Row>
    </Container>
  );
};

export default Brands;
