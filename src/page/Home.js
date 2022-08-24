import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchDog from '../component/SearchDog'
import ListOfDogs from '../component/ListOfDogs'
import useDogsContext from '../context/useDogsContext'
import { Box } from '@chakra-ui/react'
import useInfinity from '../component/useInfinity'

export default function Home () {
  const elemRef = useRef()
  useInfinity({ elemRef })
  const { listOfDogs } = useDogsContext()

  const navigate = useNavigate()
  useEffect(() => {
    navigate('../home', { replace: true })
  }, [navigate])

  return (
    <>
      <SearchDog />
      <ListOfDogs params={listOfDogs} />
      <Box ref={elemRef}></Box>
    </>
  )
}
