import { useEffect, useState } from 'react'
import useDogsContext from './useDogsContext'
import getDogs from 'service/getDogs'

const INITIAL_PAGE = 0
const LIMIT = 6

export default function useDogs () {
  const { setListOfDogs, listOfDogs, setIsLoadListOfDogs } = useDogsContext()
  const [page, setPage] = useState(INITIAL_PAGE)

  const fetchListOfDogs = () => {
    setIsLoadListOfDogs(true)

    return getDogs({ limit: LIMIT })
      .then((dogs = []) => {
        setListOfDogs(dogs)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setIsLoadListOfDogs(false)
      })
  }

  useEffect(() => {
    if (INITIAL_PAGE === page) return

    setIsLoadListOfDogs(true)

    getDogs({ limit: LIMIT, page })
      .then((dogs = []) => {
        setListOfDogs((current) => current.concat(dogs))
      })
      .finally(() => {
        setIsLoadListOfDogs(false)
      })
  }, [page])

  useEffect(() => {
    const listOfDogsHasEmpty = listOfDogs.length === 0
    if (listOfDogsHasEmpty) {
      fetchListOfDogs()
    }
  }, [listOfDogs])

  return { listOfDogs, fetchListOfDogs, setPage }
}
