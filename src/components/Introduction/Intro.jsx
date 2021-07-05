import { Col, Container, Row, Button } from "react-bootstrap";
import "./Intro.css";
import "bootstrap/dist/css/bootstrap.css";

const Intro = () => {
  return (
    <Container fluid className="p-5">
      <Row className="py-2 px-2">
        <Col lg={5} className=" py-5">
          <h1 className="intro-header">Healthy living.</h1>
          <h1 className="intro-header">Simplified.</h1>
          <p className="intro-body">
            The digital self-care app that helps you reach your health and
            weight goals through better eating.
          </p>
          <Button className="intro-btnStyle px-5 mx-2 my-2">
            <b>READ MORE</b>
          </Button>
          <Button className="intro-btnStyle px-5 mx-2 my-2">
            <b>SIGN UP</b>
            <br />
            <b>$4.17/mon</b>
          </Button>
        </Col>
        <Col lg={4} className=""></Col>
        <Col lg={3} className=""></Col>
      </Row>
    </Container>
  );
};

export default Intro;
