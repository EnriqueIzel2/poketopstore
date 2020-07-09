import React, { useEffect, useState } from "react";
import { allPokemon } from "../../services/api";
import Card from "../../components/Card";
import ShoppingCart from "../../components/ShoppingCart";
import {
  Container,
  MainContent,
  CatalogContainer,
  CartContainer,
  ButtonsContainer,
  Button,
} from "./styles";

function Main() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalInCart, setTotalInCart] = useState([]);

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async (page = 0) => {
    const response = await allPokemon(page).then((result) => result.results);
    setPokemons(response);
  };

  const handleNextPage = () => {
    const numberPage = page + 20;
    setPage(numberPage);
    getPokemon(numberPage);
  };

  const handlePrevPage = () => {
    const numberPage = page - 20 < 0 ? 0 : page - 20;
    setPage(numberPage);
    getPokemon(numberPage);
  };

  const addPokemonToCart = (newItem) => {
    const newBuy = [...totalInCart, newItem];

    setTotalInCart(newBuy);
    localStorage.setItem("shoppingCart", JSON.stringify(newBuy));
  };

  return (
    <Container>
      <MainContent>
        <CatalogContainer>
          {pokemons.map((pokemon) => (
            <Card
              key={Math.random()}
              pokemonName={pokemon.name}
              addToCart={addPokemonToCart}
            />
          ))}
        </CatalogContainer>
        <CartContainer>
          <ShoppingCart products={totalInCart} />
        </CartContainer>
      </MainContent>
      <ButtonsContainer>
        <Button disabled={page === 0} onClick={() => handlePrevPage()}>
          Previous Page
        </Button>
        <Button disabled={page === 50} onClick={() => handleNextPage()}>
          Next Page
        </Button>
      </ButtonsContainer>
    </Container>
  );
}

export default Main;
