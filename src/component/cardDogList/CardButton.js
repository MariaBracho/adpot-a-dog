import React, { useMemo } from 'react'
import { Box, Image, useDisclosure } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'

import useFavouriteButton from 'hooks/useFavouriteButton'
import useAdoptButton from 'hooks/useAdoptButton'
import useDeleteButton from 'hooks/useDeleteButton'

import heartIconFull from 'assets/heartIconFull.svg'
import deleteIcon from 'assets/deleteIcon.svg'
import heartIcon from 'assets/heartIcon.svg'
import adoptFull from 'assets/VectoradoptFull.svg'
import share from 'assets/share.svg'
import adopt from 'assets/adopt.svg'

import ShareDog from 'component/socialMediaShare/ShareDog'

export default function CardButton ({ image_id }) {
  const { handleList, isFavouriteDog } = useFavouriteButton({ image_id })
  const { handleListAdopt, isAdoptDog } = useAdoptButton({ image_id })
  const { handleDelete } = useDeleteButton({ image_id })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const location = useLocation()

  const isUploadedPage = useMemo(() => {
    return location.pathname === '/dogs_uploaded'
  }, [location])

  const hoverAnimation = useMemo(() => {
    return {
      _hover: { boxSize: '28px' }
    }
  }, [])

  return (
    <>
      <ShareDog onClose={onClose} isOpen={isOpen} />
      <Box
        display="flex"
        w="100%"
        justifyContent="space-around"
        position="absolute"
      >
        <Box
          as="button"
          display={isUploadedPage ? 'block' : 'none'}
          onClick={handleDelete}
        >
          <Image src={deleteIcon} sx={hoverAnimation} />
        </Box>
        <Box as="button" onClick={handleList}>
          <Image
            src={isFavouriteDog ? heartIconFull : heartIcon}
            sx={hoverAnimation}
          />
        </Box>
        <Box as="button" onClick={handleListAdopt}>
          <Image src={isAdoptDog ? adoptFull : adopt} sx={hoverAnimation} />
        </Box>
        <Box as="button" onClick={onOpen}>
          <Image src={share} sx={hoverAnimation} />
        </Box>
      </Box>
    </>
  )
}
