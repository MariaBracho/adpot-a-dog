import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import uperCaseFormart from "../utils/uperCaseFormart";

import useSearchButton from "../hook/useSearchBreeds";

import ListOfDogs from "./ListOfDogs";
import Arrow from "../assets/arrowBack.svg";

export default function ListOfBreed() {
  const { keyword = "" } = useParams();

  const [breedId, title] = useMemo(() => keyword?.split("_") || [], [keyword]);

  const { listOfBreeds } = useSearchButton({ breed_id: breedId });

  const breedTitle = uperCaseFormart(title);

  return (
    <>
      <Link to={"/home"}>
        <Image m="10px 20px" position="absolute" src={Arrow}></Image>
      </Link>
      <ListOfDogs params={listOfBreeds} title={breedTitle} />
    </>
  );
}
