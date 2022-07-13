import { useCallback, useEffect, useState } from "react";
import useDogsContext from "./useDogsContext";
import getDogs from "../service/getDogs";

export default function useDogs() {
  const { setListOfDogs, listOfDogs } = useDogsContext();
  const [isLoadingFetch, setIsLoadingFetch] = useState(false);

  const fetchListOfDogs = useCallback(() => {
    setIsLoadingFetch(true);
    getDogs()
      .then((dogs = []) => {
        localStorage.setItem("listOfDogs", JSON.stringify(dogs));
        setListOfDogs(dogs);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoadingFetch(false);
      });
  }, [setListOfDogs]);

  useEffect(() => {
    const listOfDogsHasEmpty = listOfDogs.length === 0;
    if (listOfDogsHasEmpty) {
      fetchListOfDogs();
    }
  }, [listOfDogs, fetchListOfDogs]);

  return { listOfDogs, isLoadingFetch, fetchListOfDogs };
}
