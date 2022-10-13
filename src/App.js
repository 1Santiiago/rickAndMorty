import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import ActionAreaCard from "./components/cards";
import Header from "./components/Header";

function App() {
  const urlInitial = " https://rickandmortyapi.com/api/character";
  const [character, setCharacter] = useState([]);
  function getImg(urlInitial) {
    fetch(urlInitial)
      .then((response) => response.json())
      .then((data) => setCharacter(data.results));
  }

  const [episodes, setEpisodes] = useState([]);
  const urlEpisode = "https://rickandmortyapi.com/api/episode";
  function getEpisode(urlEpisode) {
    fetch(urlEpisode)
      .then((response) => response.json())
      .then((episode) => setEpisodes(episode.results));
  }

  useEffect(() => {
    getImg(urlInitial);
    getEpisode(urlEpisode);
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Grid container>
          {character.map((character, i) => (
            <Grid item xs={4} key={i}>
              <ActionAreaCard
                image={character.image}
                name={character.name}
                status={character.status}
                gender={character.gender}
                specie={character.species}
                origin={character.origin.name}
                location={character.location.name}
                // firstEpsode={episodes.map((ep, i)=>(ep.name))}
              />
            </Grid>
          ))}
          {console.log(episodes)}
        </Grid>
      </Container>
    </>
  );
}

export default App;
