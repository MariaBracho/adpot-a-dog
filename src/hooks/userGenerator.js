import { useEffect } from 'react'
import useDogsContext from 'context/useDogsContext'
import random from 'utils/random'

export default function useUserGenerator () {
  const { userId, newUserId } = useDogsContext()

  useEffect(() => {
    if (!userId) {
      const numberRandom = random({ max: 10000, min: 8 })
      const newUser = `user-${numberRandom}`
      newUserId(newUser)
      localStorage.setItem('userId', JSON.stringify(newUser))
    }
  }, [userId])

  return { userId }
}
