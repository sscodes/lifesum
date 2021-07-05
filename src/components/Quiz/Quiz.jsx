import { Col, Container, Row, Button } from "react-bootstrap";
import "./Quiz.css";
import "bootstrap/dist/css/bootstrap.css";
import img1 from "./apple-quiz-47cd91c8.svg";

const Quiz = () => {
  return (
    <Container className="quiz-bg p-5">
      <Row className="p-5">
        <Col lg={1} className=""></Col>
        <Col lg={2} className=" float-right">
          <img src={img1} alt="" />
        </Col>
        <Col lg={1} className=""></Col>
        <Col lg={6} className=" pl-3 float-right">
          <h3 className="quiz-qsn text-right">
            What's the right Meal Plan or Diet for you?
          </h3>
          <Button className="quiz-btnStyle px-5 mx-2 my-2">
            <b>MORE FEATURES</b>
          </Button>
        </Col>
        <Col lg={2} className=""></Col>
      </Row>
    </Container>
  );
};

export default Quiz;
