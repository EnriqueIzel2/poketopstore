import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  background-color: silver;
`;

export const CartContainer = styled.div`
  width: 30%;
`;

export const CatalogContainer = styled.div`
  width: 100%;
  background-color: blue;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ButtonsContainer = styled.div`
  background-color: yellow;
  height: 50px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Button = styled.button`
  width: 80px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  :hover {
    opacity: ${(props) => (props.disabled ? "null" : "0.7")};
  }
`;
