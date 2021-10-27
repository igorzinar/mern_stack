import React from "react";
import { Card, CardImg } from "react-bootstrap";
import styled from "styled-components";
import { Rating } from "./Rating";

interface IProduct {
  data: {
    _id: number;
    name: string;
    image: string;
    description: string;
    brand: string;
    category: string;
    price: number;
    countInStock: number;
    rating: number;
    numReviews: number;
  };
}

export const Product = ({ data }: IProduct) => {
  return (
    <Card className="my-3 p-3 rounded">
      <StyledLink href={`/product/${data._id}`}>
        <CardImg src={data.image} variant="top" />
      </StyledLink>
      <Card.Body>
        <StyledLink href={`/product/${data._id}`}>
          <Card.Title as="div">
            <strong>{data.name}</strong>
          </Card.Title>
        </StyledLink>
        <Card.Text as="div">
          <Rating
            value={data.rating}
            text={`${data.numReviews} reviews`}
          ></Rating>
        </Card.Text>
        <Card.Text as="h3">${data.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const StyledLink = styled.a``;

const RatingText = styled.div`
  margin: 15px 0;
`;
