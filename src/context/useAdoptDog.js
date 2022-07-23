import { useCallback, useEffect } from "react";
import useDogsContext from "./useDogsContext";
import getAdopts from "../service/getAdopts";

export default function useAdoptDogs({ initialFetchDogs = false }) {
  const { setListOfAdoptsDogs, listOfAdoptsDogs } = useDogsContext();

  const fetchListOfDogs = useCallback(() => {
    getAdopts()
      .then((dogs = []) => {
        setListOfAdoptsDogs(dogs);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setListOfAdoptsDogs]);

  useEffect(() => {
    if (initialFetchDogs) fetchListOfDogs();
  }, [fetchListOfDogs, initialFetchDogs]);

  return { listOfAdoptsDogs, fetchListOfDogs };
}
