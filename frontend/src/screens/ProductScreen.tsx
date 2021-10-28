import React from "react";
import { StyledLink } from "../components/Product";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { Rating } from "../components/Rating";
import { products } from "../products";
import * as H from "history";

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
  id: string;
}

export interface RouteComponentProps<P> {
  match: match<P>;
  location?: H.Location;
  history?: H.History;
  staticContext?: any;
}

export interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

export const ProductScreen = (id: Props) => {
  const product = products.find((p) => p._id === id);
  return (
    <>
      <StyledLink to="/">Go Back</StyledLink>
      <Row>
        <Col md={6}>
          <Image src={product?.image} alt={product?.name} />
        </Col>
        <Col md={3}></Col>
      </Row>
    </>
  );
};
