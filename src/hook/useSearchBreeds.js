import { useCallback, useEffect } from 'react'
import getDogImages from '../service/getDogImages'
import useDogsContext from '../context/useDogsContext'

export default function useSearchButton ({ breed_id }) {
  const { listOfBreeds, setListOfBreeds } = useDogsContext()

  const fetchListOfBreeds = useCallback(() => {
    getDogImages({ limit: 30, breed_id })
      .then((dogs = []) => {
        localStorage.setItem('listOfBreeds', JSON.stringify(dogs))
        setListOfBreeds(dogs)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [breed_id, setListOfBreeds])

  useEffect(() => {
    fetchListOfBreeds()
  }, [fetchListOfBreeds])

  return { listOfBreeds }
}
