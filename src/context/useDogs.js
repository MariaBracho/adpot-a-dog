import { useCallback, useEffect, useState } from 'react'
import useDogsContext from './useDogsContext'
import getDogs from '../service/getDogs'

const INITIAL_PAGE = 0

export default function useDogs () {
  const { setListOfDogs, listOfDogs } = useDogsContext()
  const [page, setPage] = useState(INITIAL_PAGE)

  const fetchListOfDogs = useCallback(() => {
    getDogs({ limit: 6 })
      .then((dogs = []) => {
        localStorage.setItem('listOfDogs', JSON.stringify(dogs))
        setListOfDogs(dogs)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [setListOfDogs])

  useEffect(() => {
    if (INITIAL_PAGE === page) return
    getDogs({ limit: 6, page }).then((dogs = []) => {
      setListOfDogs((elem) => elem.concat(dogs))
    })
  }, [page, setListOfDogs])

  useEffect(() => {
    const listOfDogsHasEmpty = listOfDogs.length === 0
    if (listOfDogsHasEmpty) {
      fetchListOfDogs()
    }
  }, [listOfDogs, fetchListOfDogs])

  return { listOfDogs, fetchListOfDogs, setPage }
}
