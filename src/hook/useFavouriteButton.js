import { useCallback, useEffect,useMemo,useState } from "react";
import useDogsContext from "../context/useDogsContext";
import saveFavourite from "../service/saveFavourite";
import deleteFavourites from "../service/deleteFavourite";


export default function useFavouriteButton ({image_id}){
    const { listOfFavoriteDogs, setListOfFavoriteDogs, listOfDogs } =
    useDogsContext();
  const [isFavouriteDog, setIsFavouriteDog] = useState(false);

  const favorite = useMemo(() => {
    const isFavorite = listOfFavoriteDogs?.some(
      (fav) => fav.image_id === image_id
    );
    return isFavorite;
  }, [image_id, listOfFavoriteDogs]);

  useEffect(() => {
    setIsFavouriteDog(favorite);
  }, [favorite, isFavouriteDog]);

  const deleteFavoriteDog = useCallback(async () => {
    const favouriteToDelete = listOfFavoriteDogs.find(
      (elem) => elem.image_id === image_id
    );

    setListOfFavoriteDogs((elem) =>
      elem.filter((list) => list.id !== favouriteToDelete.id)
    );
    await deleteFavourites(favouriteToDelete.id);
  },[image_id,listOfFavoriteDogs,setListOfFavoriteDogs])

  const addNewFavoriteDog =useCallback( async () => {
    const DogFavourite = listOfDogs.filter((dog) => dog.image_id === image_id);
    const favouriteId = await saveFavourite(image_id);
    const addFavouriteDog = DogFavourite.map(({ url, image_id }) => ({
      url,
      image_id,
      id: favouriteId,
    }));

    setListOfFavoriteDogs((list) => list.concat(addFavouriteDog));
  },[image_id,listOfDogs,setListOfFavoriteDogs])

  const handleList = useCallback(async () => {
    try {
      const favoriteActionToExecute = isFavouriteDog
        ? deleteFavoriteDog
        : addNewFavoriteDog;

      await favoriteActionToExecute();
    } catch (error) {
      console.error(error);
    }
  },[addNewFavoriteDog,deleteFavoriteDog,isFavouriteDog])

  const showEmogi =useMemo(()=>{const emogi=isFavouriteDog ? "❌" : "❤️"
return emogi},[isFavouriteDog]);

  return {handleList,showEmogi}

}