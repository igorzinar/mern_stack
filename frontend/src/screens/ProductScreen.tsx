import React, { useState, useEffect } from "react";
import { IProduct, StyledLink } from "../components/Product";
import {
  Button,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { products } from "../products";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Rating } from "../components/Rating";
import axios from "axios";

export const ProductScreen = () => {
  const { id } = useParams<{ id: string }>();
  // const product = products.find((p) => p._id === Number(id));
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = async (id: number | string) => {
      console.log("id", id);
      const { data } = await axios.get(`api/products/${id}`);
      data && console.log("data", data);
      setProduct(data);
    };
    fetchProduct(id);
  }, [id]);
  return (
    <>
      <StyledLink to="/">Go Back</StyledLink>
      {product ? (
        // <Row>
        //   <Col md={6}>
        //     <Image src={product?.image} alt={product?.name} fluid />
        //   </Col>
        //   <Col md={3}>
        //     <ListGroup variant="flush">
        //       <ListGroupItem>
        //         <StyledH2>{product?.name}</StyledH2>
        //       </ListGroupItem>
        //       <ListGroupItem>
        //         <Rating
        //           value={product?.rating || 0}
        //           text={`${product?.numReviews} reviews`}
        //         />
        //       </ListGroupItem>
        //       <ListGroupItem>Price: ${product?.price}</ListGroupItem>
        //       <ListGroupItem>Description: {product?.description}</ListGroupItem>
        //     </ListGroup>
        //   </Col>
        //   <Col md={3}>
        //     <ListGroup variant="flush">
        //       <ListGroupItem>
        //         <Row>
        //           <Col>Price:</Col>
        //           <Col>
        //             <strong>{product?.price}</strong>
        //           </Col>
        //         </Row>
        //       </ListGroupItem>
        //       <ListGroupItem>
        //         <Row>
        //           <Col>Status</Col>
        //           <Col>
        //             {product?.countInStock && product?.countInStock > 0
        //               ? "In Stock"
        //               : "Out of Stock"}
        //           </Col>
        //         </Row>
        //       </ListGroupItem>
        //       <ListGroupItem>
        //         <Button
        //           className="btn-block"
        //           type={"button"}
        //           disabled={product?.countInStock === 0}
        //         >
        //           Add to Cart
        //         </Button>
        //       </ListGroupItem>
        //     </ListGroup>
        //   </Col>
        // </Row>
        <></>
      ) : (
        <>No data</>
      )}
    </>
  );
};

const StyledH2 = styled.h3``;
