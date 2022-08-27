import { useCallback, useEffect } from 'react'
import getUploadImg from 'services/getUploadImg'
import useDogsContext from './useDogsContext'

export default function useDogUpload ({ initialFetchDogs = true } = {}) {
  const {
    listOfDogsUpload,
    setListOfDogsUpload,
    isLoadListOfUploadedDogs,
    setIsLoadListOfUploadedDogs,
    userId
  } = useDogsContext()

  const fetchListOfDogs = useCallback(() => {
    setIsLoadListOfUploadedDogs(true)
    getUploadImg({ sub_id: userId })
      .then((dogs = []) => {
        setListOfDogsUpload(dogs)
      })
      .finally(() => {
        setIsLoadListOfUploadedDogs(false)
      })
  }, [setListOfDogsUpload])

  useEffect(() => {
    if (initialFetchDogs) fetchListOfDogs()
  }, [fetchListOfDogs, initialFetchDogs])

  return { listOfDogsUpload, fetchListOfDogs, isLoadListOfUploadedDogs }
}
