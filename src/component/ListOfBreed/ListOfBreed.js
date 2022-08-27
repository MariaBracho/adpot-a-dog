import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import uperCaseFormart from 'utils/uperCaseFormart'

import useSearchButton from 'hooks/useSearchBreeds'

import ListOfDogs from '../cardDogList/ListOfDogs'
import { Helmet } from 'react-helmet'

export default function ListOfBreed () {
  const { keyword = '' } = useParams()
  const [breedId, title] = useMemo(() => keyword?.split('_') || [], [keyword])
  const { listOfBreeds } = useSearchButton({ breed_id: breedId })

  const breedTitle = uperCaseFormart(title)
  return (
    <>
      <Helmet>
        <title>{title} | Adopt a dog</title>
        <meta name="description" content={title} />
      </Helmet>
      <ListOfDogs listOfDogs={listOfBreeds} title={breedTitle} />
    </>
  )
}
