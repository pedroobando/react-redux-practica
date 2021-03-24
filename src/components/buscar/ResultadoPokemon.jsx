import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Header, Image } from "semantic-ui-react";

export const ResultadoPokemon = () => {
  const { loading, pokemon, error } = useSelector((state) => state.buscador);
  return (
    <Fragment>
      <Header size="large" color="orange" content="Resultado:" />
      {loading && <Header size="small" as="div" color="yellow" content="Buscando..." />}

      {pokemon.length >= 1 && (
        <Header as="div" size="small">
          <Image
            src={pokemon[0].sprites.front_default}
            alt={pokemon[0].name}
            style={{ width: "150px", height: "180px" }}
          />

          <span>{pokemon[0].name}</span>
        </Header>
      )}

      {error !== "" && (
        <Header size="small" color="red">
          {error}
        </Header>
      )}
    </Fragment>
  );
};
