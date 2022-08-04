import { createContext, useContext, useReducer } from "react";
import { FILL_MOVIES, SET_COUNT } from "./types/home";

const homeProvider = createContext({});

const initState = {
  count: 5,
  showPanel: false,
  movies: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_COUNT:
      return { ...state, count: action.payload };
    case FILL_MOVIES:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};

export const HomeProvider = ({ children }) => {
  const [globalState, globalDispatch] = useReducer(reducer, initState);

  return (
    <homeProvider.Provider value={{ globalState, globalDispatch }}>
      {children}
    </homeProvider.Provider>
  );
};

export const useHomeProvider = () => {
  const homeProviderData = useContext(homeProvider);
  return homeProviderData;
};
