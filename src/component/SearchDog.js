import React from 'react'
import { FormControl, Select, Box } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Options from './Options'
import useDogsContext from '../context/useDogsContext'
import formatRouter from '../utils/formatRouter'

export default function SearchDog () {
  const navigate = useNavigate()
  const { listOfDogs } = useDogsContext()

  const handleChangeOption = (evt) => {
    const optionItem = listOfDogs.find(
      (item) => item.id === Number(evt.target.value)
    )
    const nameOfBreed = formatRouter(optionItem.name)
    const urlId = `${optionItem.id}_${nameOfBreed}`
    navigate(urlId, { replace: true })
  }
  return (
    <Box w="80%" maxW="450px" margin="10px auto">
      <FormControl>
        <Select
          onChange={handleChangeOption}
          color="brand.gray"
          _focusVisible={{ borderColor: 'brand.gray' }}
          variant="flushed"
          placeholder="Search for breed"
        >
          <Options options={listOfDogs} />
        </Select>
      </FormControl>
    </Box>
  )
}
