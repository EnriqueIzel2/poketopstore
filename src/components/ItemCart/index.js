import React from "react";

import { Container, ItemName, ItemPrice, ItemAmount } from "./styles";

function ItemCart({ item }) {
  return (
    <Container>
      <ItemName>{item.name}</ItemName>
      <ItemPrice>{item.price}</ItemPrice>
      <ItemAmount>1x</ItemAmount>
    </Container>
  );
}

export default ItemCart;
