import { useToast } from '@chakra-ui/react'

export default function uploadMessage () {
  const toast = useToast()
  return {
    conSuccess: () => {
      toast({
        title: 'Upload a dog.',
        description: 'Congratulations you have uploaded a dog 🐶',
        status: 'success',
        duration: 4000,
        isClosable: true
      })
    },

    onError: () => {
      toast({
        title: 'Upload error',
        description:
          'The image could not be uploaded, make sure it is the correct format.',
        status: 'error',
        duration: 4000,
        isClosable: true
      })
    }
  }
}
