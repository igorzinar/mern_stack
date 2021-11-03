import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import { Rating } from "./Rating";

export interface IProduct {
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
      <StyledLink to={`/products/${data._id}`}>
        <Card.Img src={data.image} variant="top" />
      </StyledLink>
      <Card.Body>
        <StyledLink to={`/products/${data._id}`}>
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

const StyledCard = styled(Card)`
  & > .card-text {
    padding: 1rem 0;
  }
`;
export const StyledLink = styled(Link)`
text-decoration: none;
  color: inherit;
`;

const RatingText = styled.div`
  margin: 15px 0;
`;
