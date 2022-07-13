import { useEffect, useState, useCallback } from "react";
import getFavourites from "../service/getFavourite";
import useDogsContext from "./useDogsContext";

export default function useFavouriteDogs({ initialFetchDogs = true }) {
  const { listOfFavoriteDogs, setListOfFavoriteDogs } = useDogsContext();
  const [isLoading, setIsLoading] = useState(false);

  const fetchFavoritesDogs = useCallback(() => {
    setIsLoading(true);
    getFavourites()
      .then((favDogs = []) => {
        localStorage.setItem("favouriteDogs", JSON.stringify(favDogs));
        setListOfFavoriteDogs(favDogs);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setListOfFavoriteDogs]);

  useEffect(() => {
    if (initialFetchDogs) fetchFavoritesDogs();
  }, [initialFetchDogs, fetchFavoritesDogs]);
  console.log(isLoading, "loading");
  return {
    listOfFavoriteDogs,
    setListOfFavoriteDogs,
    isLoading,
    fetchFavoritesDogs,
  };
}
