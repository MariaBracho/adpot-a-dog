import { useEffect, useCallback } from "react";
import getFavourites from "../service/getFavourite";
import useDogsContext from "./useDogsContext";

export default function useFavouriteDogs({ initialFetchDogs = true }) {
  const { listOfFavoriteDogs, setListOfFavoriteDogs } = useDogsContext();

  const fetchFavoritesDogs = useCallback(() => {
    getFavourites()
      .then((favDogs = []) => {
        localStorage.setItem("favouriteDogs", JSON.stringify(favDogs));
        setListOfFavoriteDogs(favDogs);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setListOfFavoriteDogs]);

  useEffect(() => {
    if (initialFetchDogs) fetchFavoritesDogs();
  }, [initialFetchDogs, fetchFavoritesDogs]);

  return {
    listOfFavoriteDogs,
    setListOfFavoriteDogs,
    fetchFavoritesDogs,
  };
}
