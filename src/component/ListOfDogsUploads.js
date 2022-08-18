import React from "react";
import ListOfDogs from "./ListOfDogs";
import useDogUpload from "../context/useDogUpload";

export default function ListOfDogsUpload() {
  const { listOfDogsUpload } = useDogUpload();
  return <ListOfDogs params={listOfDogsUpload} title="Uploaded Dog" />;
}
