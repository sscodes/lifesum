import { Col, Container, Row } from "react-bootstrap";
import "./Def.css";
import "bootstrap/dist/css/bootstrap.css";
import img1 from "./usp-barcode-e8eb86b3.svg";
import img2 from "./usp-diets-63b86561.svg";
import img3 from "./usp-mealplans-28bdd983.svg";
import img4 from "./usp-personalize-96c457f4.svg";
import img5 from "./usp-trackers-d322008e.svg";
import img6 from "./usp-recipes-05f70188.svg";
import { Button } from "bootstrap";

const Def = () => {
  return (
    <Container fluid className="p-5">
      <Row className="px-2">
        <Col className="pt-5 text-center">
          <h1 className="def-header">
            <b>What is Lifesum?</b>
          </h1>
        </Col>
      </Row>
      <Row className="px-2">
        <Col lg={4} sm={6} className="py-3 text-center">
          <img src={img1} alt="" />
          <h4 className="py-4">
            <b>Find a Diet you love</b>
          </h4>
          <p className="def-desc">
            Find a nutritious Diet that fits your lifestyle and food
            preferences. Take charge of your daily habits with one of the many
            ongoing Diets including Clean Eating and High Protein.
          </p>
        </Col>
        <Col lg={4} sm={6} className="py-3 text-center">
          <img src={img2} alt="" />
          <h4 className="py-4">
            <b>Find a Diet you love</b>
          </h4>
          <p className="def-desc">
            Find a nutritious Diet that fits your lifestyle and food
            preferences. Take charge of your daily habits with one of the many
            ongoing Diets including Clean Eating and High Protein.
          </p>
        </Col>
        <Col lg={4} sm={6} className="py-3 text-center">
          <img src={img3} alt="" />
          <h4 className="py-4">
            <b>Find a Diet you love</b>
          </h4>
          <p className="def-desc">
            Find a nutritious Diet that fits your lifestyle and food
            preferences. Take charge of your daily habits with one of the many
            ongoing Diets including Clean Eating and High Protein.
          </p>
        </Col>
        <Col lg={4} sm={6} className="py-3 text-center">
          <img src={img4} alt="" />
          <h4 className="py-4">
            <b>Find a Diet you love</b>
          </h4>
          <p className="def-desc">
            Find a nutritious Diet that fits your lifestyle and food
            preferences. Take charge of your daily habits with one of the many
            ongoing Diets including Clean Eating and High Protein.
          </p>
        </Col>
        <Col lg={4} sm={6} className="py-3 text-center">
          <img src={img5} alt="" />
          <h4 className="py-4">
            <b>Find a Diet you love</b>
          </h4>
          <p className="def-desc">
            Find a nutritious Diet that fits your lifestyle and food
            preferences. Take charge of your daily habits with one of the many
            ongoing Diets including Clean Eating and High Protein.
          </p>
        </Col>
        <Col lg={4} sm={6} className="py-3 text-center">
          <img src={img6} alt="" />
          <h4 className="py-4">
            <b>Find a Diet you love</b>
          </h4>
          <p className="def-desc">
            Find a nutritious Diet that fits your lifestyle and food
            preferences. Take charge of your daily habits with one of the many
            ongoing Diets including Clean Eating and High Protein.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button className="intro-btnStyle px-5 mx-2 my-2">
            <b>MORE FEATURES</b>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Def;
