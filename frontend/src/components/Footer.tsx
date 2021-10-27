import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface IProp {
  data: any;
}
export const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Online Shop</Col>
        </Row>
      </Container>
    </footer>
  );
};
