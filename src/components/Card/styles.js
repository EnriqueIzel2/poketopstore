import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 300px;
  background-color: black;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
  height: 50%;
  background-color: purple;
`;

export const Name = styled.h2`
  color: #ffffff;
  background-color: red;
  text-align: center;
`;

export const Price = styled.p`
  color: #ffffff;
  text-align: center;
`;

export const Button = styled.button`
  background-color: yellow;
  cursor: pointer;
`;
