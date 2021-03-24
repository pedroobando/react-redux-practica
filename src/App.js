import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Card, Container, Grid, Header, Image, Segment } from "semantic-ui-react";
import "./App.css";
import { CantidadPokemon } from "./components/CantidadPokemon";
import { CompraPokemon } from "./components/CompraPokemon";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BuscadorPokemon } from "./components/buscar/BuscadorPokemon";
import { ResultadoPokemon } from "./components/buscar/ResultadoPokemon";

const imgPokemon = "./img/pokemona.jpg";

const App = () => {
  return (
    <Provider store={store}>
      <Container className="App">
        <Segment style={{ marginTop: "40px" }}>
          <Grid>
            <Grid.Column width={6}>
              <Card>
                <Image src={imgPokemon} wrapped ui={false} />
              </Card>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header as="h1" color="blue">
                <CantidadPokemon />
              </Header>
              <CompraPokemon />
              <div style={{ marginTop: "10px" }}>
                <BuscadorPokemon />
              </div>
              <div style={{ marginTop: "10px" }}>
                <ResultadoPokemon />
              </div>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    </Provider>
  );
};

export default App;
