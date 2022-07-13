import React, { useMemo, useState } from "react";
import DogContext from "./DogContext";

const loadLocalList = () =>
  JSON.parse(localStorage.getItem("listOfDogs")) || [];
const loadLocalListFavourite = () =>
  JSON.parse(localStorage.getItem("favouriteDogs")) || [];

export default function DogContextProvider({ children }) {
  const [listOfDogs, setListOfDogs] = useState(loadLocalList());
  const [listOfFavoriteDogs, setListOfFavoriteDogs] = useState(
    loadLocalListFavourite()
  );

  const statesValues = useMemo(() => {
    console.log("render");
    return {
      listOfDogs,
      listOfFavoriteDogs,
      setListOfDogs,
      setListOfFavoriteDogs,
    };
  }, [listOfDogs, listOfFavoriteDogs]);

  return (
    <DogContext.Provider value={statesValues}>{children}</DogContext.Provider>
  );
}
