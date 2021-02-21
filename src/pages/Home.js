import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import Game from "../components/Game";
import styled from "styled-components";
import { motion } from "framer-motion";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, upcoming, newGames } = useSelector(state => state.games);

  return (
    <GameList>
      {pathId && <GameDetail />}
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map(({ id, name, released, background_image }) => (
          <Game
            key={id}
            id={id}
            name={name}
            released={released}
            image={background_image}
          />
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.map(({ id, name, released, background_image }) => (
          <Game
            key={id}
            id={id}
            name={name}
            released={released}
            image={background_image}
          />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map(({ id, name, released, background_image }) => (
          <Game
            key={id}
            id={id}
            name={name}
            released={released}
            image={background_image}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
