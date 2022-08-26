import { useCallback, useEffect } from 'react'
import useDogsContext from './useDogsContext'
import getAdopts from 'service/getAdopts'

export default function useAdoptDogs ({ initialFetchDogs = false }) {
  const {
    setListOfAdoptsDogs,
    listOfAdoptsDogs,
    isLoadListOfAdoptDogs,
    setIsLoadListOfAdoptDogs
  } = useDogsContext()

  const fetchListOfDogs = useCallback(() => {
    setIsLoadListOfAdoptDogs(true)
    getAdopts()
      .then((dogs = []) => {
        setListOfAdoptsDogs(dogs)
        localStorage.setItem('listOfAdoptDogs', JSON.stringify(dogs))
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setIsLoadListOfAdoptDogs(false)
      })
  }, [setListOfAdoptsDogs])

  useEffect(() => {
    if (initialFetchDogs) fetchListOfDogs()
  }, [fetchListOfDogs, initialFetchDogs])

  return { listOfAdoptsDogs, fetchListOfDogs, isLoadListOfAdoptDogs }
}
