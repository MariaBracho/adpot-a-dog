import React, { useMemo, useState } from 'react'
import DogContext from './DogContext'

const loadLocalList = () =>
  JSON.parse(localStorage.getItem('listOfDogs')) || []
const loadLocalListFavourite = () =>
  JSON.parse(localStorage.getItem('favouriteDogs')) || []

export default function DogContextProvider ({ children }) {
  const [listOfDogs, setListOfDogs] = useState(loadLocalList())
  const [listOfFavoriteDogs, setListOfFavoriteDogs] = useState(
    loadLocalListFavourite()
  )
  const [listOfBreeds, setListOfBreeds] = useState([])
  const [listOfAdoptsDogs, setListOfAdoptsDogs] = useState([])
  const [listOfDogsUpload, setListOfDogsUpload] = useState([])

  const statesValues = useMemo(() => {
    return {
      listOfDogs,
      listOfFavoriteDogs,
      listOfBreeds,
      listOfAdoptsDogs,
      listOfDogsUpload,
      setListOfAdoptsDogs,
      setListOfBreeds,
      setListOfDogs,
      setListOfDogsUpload,
      setListOfFavoriteDogs
    }
  }, [
    listOfDogs,
    listOfDogsUpload,
    listOfFavoriteDogs,
    listOfBreeds,
    listOfAdoptsDogs
  ])

  return (
    <DogContext.Provider value={statesValues}>{children}</DogContext.Provider>
  )
}
