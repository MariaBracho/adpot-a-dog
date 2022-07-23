import { useCallback, useEffect } from "react";
import getDogs from "../service/getDogs";
import useDogsContext from "./useDogsContext";

export default function useListBreeds() {
  const { listOfBreeds, setListOfBreeds } = useDogsContext();

  console.log(listOfBreeds, "list of brees");

  const fetchListOfDogs = useCallback(() => {
    getDogs({ limit: 5 })
      .then((dogs = []) => {
        localStorage.setItem("listOfDogs", JSON.stringify(dogs));
        setListOfBreeds(dogs);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setListOfBreeds]);

  useEffect(() => {
    const listOfDogsHasEmpty = listOfBreeds.length === 0;
    if (listOfDogsHasEmpty) {
      fetchListOfDogs();
    }
  }, [fetchListOfDogs, listOfBreeds]);

  return { listOfBreeds, fetchListOfDogs };
}
