import { useCallback, useEffect } from 'react'
import getUploadImg from '../service/getUploadImg'
import useDogsContext from './useDogsContext'

export default function useDogUpload ({ initialFetchDogs = true } = {}) {
  const { listOfDogsUpload, setListOfDogsUpload } = useDogsContext()

  const fetchListOfDogs = useCallback(() => {
    getUploadImg({ limit: 5 })
      .then((dogs = []) => {
        setListOfDogsUpload(dogs)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [setListOfDogsUpload])

  useEffect(() => {
    if (initialFetchDogs) fetchListOfDogs()
  }, [fetchListOfDogs, initialFetchDogs])

  return { listOfDogsUpload, fetchListOfDogs }
}
