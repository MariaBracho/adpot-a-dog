import { useEffect } from 'react'
import useDogs from 'context/useDogs'
import useNearScreen from 'hooks/useNearScreen'
import nextPage from 'utils/nextPage'

export default function useInfinity ({ elemRef }) {
  const { isNearScreen } = useNearScreen({ externalRef: elemRef })
  const { setPage } = useDogs()

  useEffect(() => {
    if (isNearScreen) {
      nextPage(setPage)
    }
  }, [isNearScreen, setPage])
}
