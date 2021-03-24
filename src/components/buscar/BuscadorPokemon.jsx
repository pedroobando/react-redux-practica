import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import fetchPokemon from "../../redux/actions/buscadorAction";

export const BuscadorPokemon = () => {
  const dispatch = useDispatch();
  const [pokemon_name, setPokemon_name] = useState("mewtwo");
  return (
    <Fragment>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Pokemon"
            placeholder="Buscar Pokemon"
            value={pokemon_name}
            onChange={(event) => setPokemon_name(event.target.value)}
          />
        </Form.Group>
        <Button
          primary
          content="Enviar"
          onClick={() => dispatch(fetchPokemon(pokemon_name))}
        />
      </Form>
    </Fragment>
  );
};
