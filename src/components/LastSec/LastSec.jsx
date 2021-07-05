import { Col, Container, Row, Button } from "react-bootstrap";
import "./LastSec.css";
import "bootstrap/dist/css/bootstrap.css";
import img1 from "./undraw_working_out_6psf.svg";

const LastSec = () => {
  return (
    <Container fluid className="p-5">
      <Row className="pt-5 px-5">
        <Col md={1}></Col>
        <Col md={10} className="text-center">
          <h1>
            The first step to a <b>healthier you</b> takes less than a minute.
          </h1>
        </Col>
        <Col md={1}></Col>
      </Row>
      <Row className="pt-3">
        <Col md={3} className=""></Col>
        <Col md={3} className="">
          <Button className="ls-btnStyle py-3 px-5 mx-2 my-2">
            <b>READ MORE</b>
          </Button>
        </Col>
        <Col md={3} className="">
          <Button className="ls-btnStyle py-3 px-5 mx-4 my-2">
            <b>SIGN UP</b>
          </Button>
        </Col>
        <Col md={3} className=""></Col>
      </Row>
      <Row className="text-center py-5">
        <Col>
        <img src={img1} alt="" width="500" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default LastSec;
