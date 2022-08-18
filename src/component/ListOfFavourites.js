import React from "react";
import ListOfDogs from "./ListOfDogs";
import useDogsContext from "../context/useDogsContext";

export default function ListOfFavouriteDogs() {
  const { listOfFavoriteDogs } = useDogsContext();
  return <ListOfDogs params={listOfFavoriteDogs} title="Favourites" />;
}
