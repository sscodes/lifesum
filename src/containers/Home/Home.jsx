import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Container fluid classname="pt-5">
        <Row>
          <Col lg={6}>
            <h1>Healthy living.</h1>
            <h1>Simplified.</h1>
            <p>The digital self-care app that helps you reach your health and weight goals through better eating.</p>
          </Col>
          <Col lg={3}></Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
