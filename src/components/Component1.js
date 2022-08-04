import React, { useEffect } from "react";
import { useHomeContext } from "../providers/HomeStoreProvider";
import { useHomeProvider } from "../providers/HomeStoreProviderReducer";
import axios from "axios";
import { FILL_MOVIES, SET_COUNT } from "../providers/types/home";

function Component1() {
  const { count } = useHomeContext();
  const { globalState, globalDispatch } = useHomeProvider();

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/550?api_key=d83f024ca7d748222de8223f34bb78d2"
      )
      .then((res) => {
        globalDispatch({ type: FILL_MOVIES, payload: res.data });
      });
  };

  console.log(globalState.movies);

  return (
    <div>
      Component1 ({count}) - ({globalState.count})
    </div>
  );
}

export default Component1;
