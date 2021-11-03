import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { IProduct, Product } from "../components/Product";
import axios from "axios";
export const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Head>Latest Products</Head>
      <Row>
        {products.map((product, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
            <Product data={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

const Head = styled.h1``;

const StyledText = styled.h3``;
