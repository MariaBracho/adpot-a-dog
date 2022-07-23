import React from "react";
import useDogsContext from "../context/useDogsContext";
import useDogs from "../context/useDogs";
import ListOfDogs from "./ListOfDogs";

export default function ListOfDogsRandom() {
  const { listOfDogs } = useDogsContext();
  const { fetchListOfDogs } = useDogs();
  return (
    <>
      <ListOfDogs params={listOfDogs} title="Home" />
      <button onClick={fetchListOfDogs}>Recargar</button>
    </>
  );
}
