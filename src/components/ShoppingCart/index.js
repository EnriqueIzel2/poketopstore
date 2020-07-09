import React, { useState, useEffect } from "react";

import ItemCart from "../ItemCart";
import { Container, Title, ItensContainer } from "./styles";

function ShoppingCart({ products }) {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    const localShopping = JSON.parse(localStorage.getItem("shoppingCart"));
    setItens(localShopping);
  }, []);

  useEffect(() => {
    setItens(products);
  }, [products]);

  return (
    <Container>
      <Title>Carrinho</Title>
      <ItensContainer>
        {itens.map((item) => (
          <ItemCart key={Math.random()} item={item} />
        ))}
      </ItensContainer>
    </Container>
  );
}

export default ShoppingCart;
