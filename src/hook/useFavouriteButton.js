import { useCallback, useEffect, useMemo, useState } from 'react'
import saveFavourite from 'service/saveFavourite'
import deleteFavourites from 'service/deleteFavourites'
// import useFavouriteDogs from 'context/useFavouriteDogs'
import useDogsContext from 'context/useDogsContext'
import { useToast } from '@chakra-ui/react'

export default function useFavouriteButton ({ image_id }) {
  const [isFavouriteDog, setIsFavouriteDog] = useState(false)
  const {
    listOfFavoriteDogs,
    listOfDogs,
    listOfBreeds,
    setListOfFavoriteDogs
  } = useDogsContext()
  // const [isFetch, setIsFecth] = useState(false)

  // useFavouriteDogs({ initialFetchDogs: isFetch })

  const toast = useToast()

  const favorite = useMemo(() => {
    const isFavorite = listOfFavoriteDogs?.some(
      (fav) => fav.image_id === image_id
    )
    return isFavorite
  }, [image_id, listOfFavoriteDogs])

  useEffect(() => {
    setIsFavouriteDog(favorite)
  }, [favorite, isFavouriteDog])

  const deleteFavoriteDog = useCallback(async () => {
    const favouriteToDelete = listOfFavoriteDogs.find(
      (elem) => elem.image_id === image_id
    )
    setListOfFavoriteDogs((elem) =>
      elem.filter((list) => list.id !== favouriteToDelete.id)
    )
    await deleteFavourites({ id: favouriteToDelete.id })
  }, [image_id, listOfFavoriteDogs, setListOfFavoriteDogs])

  const addNewFavoriteDog = useCallback(async () => {
    const dogFavourite = listOfDogs.filter((dog) => dog.image_id === image_id)
    const dogFavouriteBreed = listOfBreeds.filter(
      (dog) => dog.image_id === image_id
    )
    const isEmpety = dogFavourite.length === 0
    const addFavourite = isEmpety ? dogFavouriteBreed : dogFavourite
    setListOfFavoriteDogs((list) => list.concat(addFavourite))
    await saveFavourite(image_id)
    toast({
      title: 'Saved in favorite ❤',
      status: 'success',
      isClosable: true
    })
  }, [image_id, listOfDogs, setListOfFavoriteDogs, listOfBreeds, toast])

  const handleList = useCallback(async () => {
    try {
      const favoriteActionToExecute = isFavouriteDog
        ? deleteFavoriteDog
        : addNewFavoriteDog

      await favoriteActionToExecute()
    } catch (error) {
      console.error(error)
    } finally {
      // setIsFecth(true)
    }
  }, [addNewFavoriteDog, deleteFavoriteDog, isFavouriteDog])

  return { handleList, isFavouriteDog }
}
