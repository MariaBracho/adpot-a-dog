import { useEffect } from 'react'
import getFavourites from 'service/getFavourite'
import useDogsContext from './useDogsContext'

export default function useFavouriteDogs ({ initialFetch = true } = {}) {
  const {
    listOfFavoriteDogs,
    setListOfFavoriteDogs,
    setIsLoadListOfFavouriteDogs,
    isLoadListOfFavouriteDogs,
    userId
  } = useDogsContext()

  const fetchFavoritesDogs = () => {
    setIsLoadListOfFavouriteDogs(true)
    return getFavourites({ sub_id: userId })
      .then((favDogs = []) => {
        setListOfFavoriteDogs(favDogs)
        localStorage.setItem('favouriteDogs', JSON.stringify(favDogs))
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setIsLoadListOfFavouriteDogs(false)
      })
  }

  useEffect(() => {
    if (initialFetch) fetchFavoritesDogs()
  }, [])

  return {
    listOfFavoriteDogs,
    setListOfFavoriteDogs,
    fetchFavoritesDogs,
    isLoadListOfFavouriteDogs
  }
}
