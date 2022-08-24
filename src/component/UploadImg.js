import { useMemo } from 'react'
import {
  Input,
  Text,
  useToast,
  Flex,
  Image,
  FormLabel
} from '@chakra-ui/react'
import UploadIcon from '../assets/Vectorupload.svg'
import uploadImg from '../service/uploadImg'

export default function UploadImg () {
  const toast = useToast()
  const styles = useStyles()

  const onSuccess = () => {
    toast({
      title: 'Upload a dog.',
      description: 'Congratulations you have uploaded a dog 🐶',
      status: 'success',
      duration: 4000,
      isClosable: true
    })
  }

  const onError = () => {
    toast({
      title: 'Upload error',
      description:
        'The image could not be uploaded, make sure it is the correct format.',
      status: 'error',
      duration: 4000,
      isClosable: true
    })
  }

  const uploadDog = (event) => {
    const [file] = event.target.files

    uploadImg({ file }).then(onSuccess).catch(onError)
  }

  return (
    <Flex
      w="100%"
      h="70%"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        layerStyle="title"
        justifyContent="center"
        textAlign="center"
        w="100%"
        fontSize="24px"
      >
        Upload a dog
      </Text>
      <Text w="80%" textAlign="center" my="10px">
        Uploading a valid .jpg or .png file containing a Dog.
      </Text>
      <Flex boxSize="260px" border="2px dotted #B1A7A6" borderRadius="12px">
        <FormLabel
          cursor="pointer"
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="100%"
          w="100%"
        >
          <Input
            w="0px"
            h="0px"
            p="0"
            name="file"
            type="file"
            onChange={uploadDog}
          />
          <Flex direction="column" justifyContent="center" alignItems="center">
            <Image mb="14px" src={UploadIcon} />
            <Text sx={styles.uploadText}>Upload a file</Text>
          </Flex>
        </FormLabel>
      </Flex>
    </Flex>
  )
}

const useStyles = () =>
  useMemo(() => {
    return {
      uploadText: {
        color: '#B1A7A6',
        textAlign: 'center',
        fontWeight: 'bolder',
        w: '100%',
        fontSize: '20px'
      }
    }
  }, [])
