import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import uperCaseFormart from '../utils/uperCaseFormart'

import useSearchButton from '../hook/useSearchBreeds'

import ListOfDogs from './ListOfDogs'

export default function ListOfBreed () {
  const { keyword = '' } = useParams()
  const [breedId, title] = useMemo(() => keyword?.split('_') || [], [keyword])
  const { listOfBreeds } = useSearchButton({ breed_id: breedId })

  const breedTitle = uperCaseFormart(title)
  return (
    <>
      <ListOfDogs params={listOfBreeds} title={breedTitle} />
    </>
  )
}
