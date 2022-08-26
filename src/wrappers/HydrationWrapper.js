import useFavouriteDogs from 'context/useFavouriteDogs'
import useAdoptDogs from 'context/useAdoptDog'
import LoaderSpinner from 'component/LoaderSpinner/LoaderSpinner'
import { useEffect, useState } from 'react'

export default function HydrationWrapper ({ children }) {
  const [isloader, setIsLoader] = useState(true)
  const { isLoadListOfFavouriteDogs } = useFavouriteDogs()
  const { isLoadListOfAdoptDogs } = useAdoptDogs({ initialFetchDogs: true })

  useEffect(() => {
    const isLoad = isLoadListOfFavouriteDogs && isLoadListOfAdoptDogs
    if (isLoad) {
      setIsLoader(true)
    } else {
      setIsLoader(false)
    }
  }, [])

  return <>{isloader ? <LoaderSpinner /> : children}</>
}
