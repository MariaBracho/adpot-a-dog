import { useEffect, useState } from 'react'

// hooks
import useFavouriteDogs from 'context/useFavouriteDogs'
import useAdoptDogs from 'context/useAdoptDog'
import useUserGenerator from 'hooks/userGenerator'

// components
import LoaderSpinner from 'component/LoaderSpinner/LoaderSpinner'

export default function HydrationWrapper ({ children }) {
  const [isLoading, setIsLoading] = useState(true)

  const { isLoadListOfFavouriteDogs } = useFavouriteDogs()
  const { isLoadListOfAdoptDogs } = useAdoptDogs({ initialFetchDogs: true })
  useUserGenerator()

  useEffect(() => {
    const hasBeenLoaded = isLoadListOfFavouriteDogs && isLoadListOfAdoptDogs
    setIsLoading(hasBeenLoaded)
  }, [])

  return <>{isLoading ? <LoaderSpinner /> : children}</>
}
