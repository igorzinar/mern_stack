import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { products } from "../products";
import { Product } from "../components/Product";
export const HomeScreen = () => {
  return (
    <>
      <Head>Latest Products</Head>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product data={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

const Head = styled.h1``;

const StyledText = styled.h3``;
