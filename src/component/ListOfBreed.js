import React from "react";
import useSearchButton from "../hook/useSearchBreeds";
import { Image } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import ListOfDogs from "./ListOfDogs";
import Arrow from "../assets/arrowBack.svg";

export default function ListOfBreed() {
  let { keyword } = useParams();

  const keywordParam = keyword.split("_");

  const { listOfBreeds } = useSearchButton({ breed_id: keywordParam[0] });

  return (
    <>
      <Link to={"/home"}>
        <Image m="10px 20px" position="absolute" src={Arrow}></Image>
      </Link>
      <ListOfDogs params={listOfBreeds} title={keywordParam[1]} />
    </>
  );
}
