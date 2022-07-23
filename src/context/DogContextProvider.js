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
  const [listOfBreeds, setListOfBreeds] = useState([]);
  const [listOfAdoptsDogs, setListOfAdoptsDogs] = useState([]);

  const statesValues = useMemo(() => {
    return {
      listOfDogs,
      listOfFavoriteDogs,
      listOfBreeds,
      listOfAdoptsDogs,
      setListOfAdoptsDogs,
      setListOfBreeds,
      setListOfDogs,
      setListOfFavoriteDogs,
    };
  }, [listOfDogs, listOfFavoriteDogs, listOfBreeds, listOfAdoptsDogs]);

  return (
    <DogContext.Provider value={statesValues}>{children}</DogContext.Provider>
  );
}
