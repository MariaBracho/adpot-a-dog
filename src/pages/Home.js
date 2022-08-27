import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchDog from 'component/searchDog/SearchDog'
import ListOfDogs from 'component/cardDogList/ListOfDogs'
import useDogsContext from 'context/useDogsContext'
import InfinityScroll from 'component/infinityScroll/InfinityScroll'
import TitleLoadAndDescription from 'component/TitleLoadAndDescription'

export default function Home () {
  const { listOfDogs, isLoadListOfDogs } = useDogsContext()

  const navigate = useNavigate()

  useEffect(() => {
    navigate('../home', { replace: true })
  }, [navigate])

  return (
    <>
      <TitleLoadAndDescription title="Home" loader={isLoadListOfDogs} />
      <SearchDog />
      <ListOfDogs listOfDogs={listOfDogs} />
      <InfinityScroll />
    </>
  )
}
