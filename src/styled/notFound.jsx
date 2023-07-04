import { styled } from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  font-family: "Roboto", sans-serif;
  justify-content: center;
  align-items: center;
  height: 90vh;
  text-align: center;
`;

export const NotFoundHeading = styled.h1`
  margin: 4rem;
  font-size: 5.5rem;
  font-weight: 700;
  color: #f44336;
  text-shadow: 3px 3px 10px #ff99cc, -2px 1px 10px #ff99cc;

  @media (max-width: 576px) {
    font-size: 4rem;
    margin: 3rem;
  }
`;

export const NotFoundText = styled.p`
  margin: 2rem;
  font-size: 2rem;
  font-weight: 400;
  color: #f44336;

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;
