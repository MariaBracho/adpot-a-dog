import { useContext } from 'react'
import DogContext from './DogContext'

export default function useDogsContext () {
  const context = useContext(DogContext)
  return context
}
