import { React, useCallback, useEffect, useRef } from "react";
import useDogsContext from "../context/useDogsContext";
import useDogs from "../context/useDogs";
import ListOfDogs from "./ListOfDogs";
import { Box } from "@chakra-ui/react";
import useNearScreen from "../hook/useNearScreen";

export default function ListOfDogsRandom() {
  const { listOfDogs } = useDogsContext();
  const elemRef = useRef();
  const { isNearScreen } = useNearScreen({ externalRef: elemRef });
  const { setPage } = useDogs();

  const nextPage = useCallback(() => {
    setPage((lastPage) => lastPage + 1);
  }, [setPage]);

  useEffect(() => {
    if (isNearScreen) {
      nextPage();
    }
  }, [isNearScreen, nextPage]);

  return (
    <>
      <ListOfDogs params={listOfDogs} title="Home" />
      <Box ref={elemRef}></Box>
    </>
  );
}
