import React, { ReactNode } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  value: number;
  text: string;
  color?: string;
  children?: ReactNode;
}
export const Rating = ({ value, text, color = "#f8e825" }: IProps) => {
  console.log(value);
  return (
    <StyledDiv className="rating">
      <StyledSpan>
        <FAIcon
          color={color}
          icon={
            value >= 1 ? faStar : value >= 0.5 ? faStarHalfAlt : faStarEmpty
          }
        />
      </StyledSpan>
      <StyledSpan>
        <FAIcon
          color={color}
          icon={
            value >= 2 ? faStar : value >= 1.5 ? faStarHalfAlt : faStarEmpty
          }
        />
      </StyledSpan>
      <StyledSpan>
        <FAIcon
          color={color}
          icon={
            value >= 3 ? faStar : value >= 2.5 ? faStarHalfAlt : faStarEmpty
          }
        />
      </StyledSpan>
      <StyledSpan>
        <FAIcon
            color={color}
          icon={
            value >= 4 ? faStar : value >= 3.5 ? faStarHalfAlt : faStarEmpty
          }
        />
      </StyledSpan>
      <StyledSpan>
        <FAIcon
          color={color}
          icon={
            value >= 5 ? faStar : value >= 4.5 ? faStarHalfAlt : faStarEmpty
          }
        />
      </StyledSpan>
      <Text>{text && text}</Text>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
margin: 8px;
`;

const StyledSpan = styled.span``;

const Text = styled.div`
  margin: 0 5px;
`;

const FAIcon = styled(FontAwesomeIcon)<{ color?: string }>`
  margin: 0 5px;
  color: {({(color) => color}) }
`;
