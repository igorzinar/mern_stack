import React, {ReactNode} from "react";
import styled from "styled-components";

interface IProps {
  value: number;
  text: string;
  children?: ReactNode;
}
export const Rating = ({ value, text }: IProps) => {
  return (
    <StyledDiv className="rating">
      <StyledSpan></StyledSpan>
    </StyledDiv>
  );
};

const StyledDiv = styled.div``;

const StyledSpan = styled.span``;
