import { useMemo, useEffect, useCallback, useState } from 'react'
import { useToast } from '@chakra-ui/react'

import useDogsContext from '../context/useDogsContext'

import useAdoptDogs from '../context/useAdoptDog'

import createAnAdopt from '../service/createAnAdopt'
import deleteAdopt from '../service/deleteAdopt'

export default function useAdoptButton ({ image_id }) {
  const { setListOfAdoptsDogs, listOfAdoptsDogs } = useDogsContext()
  const [isAdoptDog, setIsAdoptDog] = useState(false)
  const [isFetch, setIsFecth] = useState(false)
  useAdoptDogs({ initialFetchDogs: isFetch })
  const toast = useToast()

  const isAnAdoptDog = useMemo(() => {
    const isAdopt = listOfAdoptsDogs?.some((fav) => fav.image_id === image_id)
    return isAdopt
  }, [image_id, listOfAdoptsDogs])

  useEffect(() => {
    setIsAdoptDog(isAnAdoptDog)
  }, [isAnAdoptDog, isAdoptDog])

  useEffect(() => {
    setIsFecth(true)
  }, [])

  const addNewAdoptDog = useCallback(async () => {
    const resultId = await createAnAdopt({ image_id, value: 1 })
    setListOfAdoptsDogs((elem) => elem.concat({ ...resultId, image_id }))
    toast({
      title: 'Congratulations you adopted a dog 🐶',
      status: 'success',
      isClosable: true
    })
  }, [image_id, setListOfAdoptsDogs, toast])

  const deleteAdoptDogs = useCallback(async () => {
    const favouriteToDelete = listOfAdoptsDogs.find(
      (elem) => elem.image_id === image_id
    )

    setListOfAdoptsDogs((elem) =>
      elem.filter((list) => list.id !== favouriteToDelete.id)
    )
    await deleteAdopt({ vote_id: favouriteToDelete.id })
  }, [image_id, listOfAdoptsDogs, setListOfAdoptsDogs])

  const handleListAdopt = useCallback(async () => {
    try {
      const favoriteActionToExecute = isAdoptDog
        ? deleteAdoptDogs
        : addNewAdoptDog

      await favoriteActionToExecute()
    } catch (error) {
      console.error(error)
    } finally {
      setIsFecth(true)
    }
  }, [addNewAdoptDog, deleteAdoptDogs, isAdoptDog])

  return { handleListAdopt, isAdoptDog }
}
