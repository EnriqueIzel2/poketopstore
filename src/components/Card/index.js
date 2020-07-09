import React, { useEffect, useState } from "react";
import { specficPokemon } from "../../services/api";
import { formatPrice } from "./utils";
import { Container, Image, Name, Price, Button } from "./styles";

function Card({ pokemonName, addToCart }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const getPokemon = async (pokemonName) => {
      const { weight, sprites } = await specficPokemon(pokemonName).then(
        (result) => result
      );

      setPokemon({
        name: pokemonName,
        image: sprites.front_default,
        price: weight,
      });
    };

    getPokemon(pokemonName);
  }, [pokemon, pokemonName]);

  return (
    <Container>
      <Image src={pokemon.image} alt={"Imagem do Pokemon"} />
      <Name>{pokemon.name}</Name>
      <Price>R$ {formatPrice(pokemon.price)}</Price>
      <Button onClick={() => addToCart(pokemon)}>Adicionar ao carrinho</Button>
    </Container>
  );
}

export default Card;
