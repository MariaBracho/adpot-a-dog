import React, { useMemo, useState } from 'react'
import DogContext from './DogContext'

const loadLocalListFavourite = () =>
  JSON.parse(localStorage.getItem('favouriteDogs')) || []

const loadLocalListOfAdoptDogs = () =>
  JSON.parse(localStorage.getItem('listOfAdoptDogs')) || []

const userIdInit = () => JSON.parse(localStorage.getItem('userId')) || null

export default function DogContextProvider ({ children }) {
  const [listOfDogs, setListOfDogs] = useState([])

  const [userId, newUserId] = useState(userIdInit)

  const [listOfFavoriteDogs, setListOfFavoriteDogs] = useState(
    loadLocalListFavourite()
  )
  const [listOfAdoptsDogs, setListOfAdoptsDogs] = useState(
    loadLocalListOfAdoptDogs
  )
  const [favoriteDogsHasBeenFetched, setFavoriteDogsHasBeenFetched] =
    useState(false)

  const [listOfBreeds, setListOfBreeds] = useState([])

  const [listOfDogsUpload, setListOfDogsUpload] = useState([])
  const [isLoadListOfDogs, setIsLoadListOfDogs] = useState(false)
  const [isLoadListOfFavouriteDogs, setIsLoadListOfFavouriteDogs] =
    useState(false)
  const [isLoadListOfUploadedDogs, setIsLoadListOfUploadedDogs] =
    useState(false)
  const [isLoadListOfAdoptDogs, setIsLoadListOfAdoptDogs] = useState(false)

  const statesValues = useMemo(() => {
    return {
      listOfDogs,
      listOfFavoriteDogs,
      listOfBreeds,
      listOfAdoptsDogs,
      listOfDogsUpload,
      isLoadListOfDogs,
      userId,
      newUserId,
      setIsLoadListOfDogs,
      setListOfAdoptsDogs,
      setListOfBreeds,
      setListOfDogs,
      setListOfDogsUpload,
      setListOfFavoriteDogs,

      isLoadListOfAdoptDogs,
      setIsLoadListOfAdoptDogs,

      isLoadListOfUploadedDogs,
      setIsLoadListOfUploadedDogs,

      isLoadListOfFavouriteDogs,
      setIsLoadListOfFavouriteDogs,

      favoriteDogsHasBeenFetched,
      setFavoriteDogsHasBeenFetched
    }
  }, [
    isLoadListOfAdoptDogs,
    isLoadListOfUploadedDogs,
    isLoadListOfFavouriteDogs,
    isLoadListOfDogs,
    listOfDogs,
    listOfDogsUpload,
    listOfFavoriteDogs,
    listOfBreeds,
    listOfAdoptsDogs,
    favoriteDogsHasBeenFetched
  ])

  return (
    <DogContext.Provider value={statesValues}>{children}</DogContext.Provider>
  )
}
