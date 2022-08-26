import { useMemo, useState } from 'react'
import {
  Input,
  Text,
  useToast,
  Flex,
  Image,
  FormLabel,
  Grid
} from '@chakra-ui/react'
import UploadIcon from 'assets/Vectorupload.svg'
import uploadImg from 'service/uploadImg'

export default function UploadImg () {
  const dragMessage = {
    onSide: 'Drop the file',
    outSide: 'Drag the file'
  }

  const toast = useToast()
  const styles = useStyles()
  const [isActive, setIsActive] = useState(false)
  const [uploadFile, setUploadFile] = useState([])
  const [dragAndDropMessage, setDragAndDropMessage] = useState(
    dragMessage.outSide
  )

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
    console.log(file)
    const fileReader = new FileReader()
    fileReader.onload = () => {
      setUploadFile((lastFile) =>
        lastFile.concat({
          url: fileReader.result,
          name: file.name,
          size: file.size
        })
      )
    }
    fileReader.readAsDataURL(file)
    uploadImg({ file }).then(onSuccess).catch(onError)
  }

  const dragOver = (event) => {
    event.preventDefault()
    setDragAndDropMessage(dragMessage.onSide)
    setIsActive(true)
  }

  const dragLeave = (event) => {
    event.preventDefault()
    setDragAndDropMessage(dragMessage.outSide)
    setIsActive(false)
  }

  const drop = (event) => {
    event.preventDefault()
    console.log(event.dataTransfer.files, 'data')
    showFile(event.dataTransfer.files)
    setDragAndDropMessage(dragMessage.outSide)
    setIsActive(false)
  }

  const showFile = (event) => {
    const empety = event.length === undefined
    if (empety) {
      processFile(event)
    } else {
      for (const file of event) {
        console.log(file, 'desdes Showfile')
        processFile(file)
      }
    }
  }

  const processFile = (file) => {
    const fileType = file.type
    const valide = /image\/(png|jpeg)/
    const valideFormat = valide.test(fileType)
    if (valideFormat) {
      if (window.FileReader) {
        const fileReader = new FileReader()
        fileReader.onload = () => {
          setUploadFile((lastFile) =>
            lastFile.concat({
              url: fileReader.result,
              name: file.name,
              size: file.size
            })
          )
        }
        fileReader.readAsDataURL(file)
        uploadImg({ file }).then(onSuccess).catch(onError)
      }
    } else {
      onError()
    }
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
      <Flex
        boxSize="260px"
        border={isActive ? '2px dotted #212121' : '2px dotted #B1A7A6'}
        borderRadius="12px"
        onDragOver={dragOver}
        onDragLeave={dragLeave}
        onDrop={drop}
        background={isActive ? '#C0E6F5' : 'none'}
      >
        <FormLabel
          cursor="pointer"
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="100%"
          w="100%"
        >
          <Input hidden name="file" type="file" onChange={uploadDog} multiple />
          <Flex direction="column" justifyContent="center" alignItems="center">
            <Image mb="14px" src={UploadIcon} />
            <Text sx={styles.uploadText} color="brand.grayDark">
              Upload a file
            </Text>
            <Text sx={styles.uploadText} color="brand.gray">
              {dragAndDropMessage}
            </Text>
          </Flex>
        </FormLabel>
      </Flex>
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }}
        position="absolute"
        top="480px"
        my="12px"
        justifyItems="center"
        w="100%"
      >
        {uploadFile.map((file, i) => {
          return (
            <Flex
              key={i}
              w="260px"
              h="48px"
              my="8px"
              border="1px solid #B1A7A6"
              borderRadius="12px"
            >
              <Image
                borderBottomLeftRadius="12px"
                borderTopLeftRadius="12px"
                src={file.url}
                w="24%"
                h="100%"
              />
              <Flex
                direction="column"
                px="4px"
                w="80%"
                h="100%"
                overflowY="scroll"
                color="brand.grayIcon"
              >
                <Text w="maxContent" fontSize="14px">
                  name:{file.name}
                </Text>
                <Text fontSize="14px">size:{file.size}</Text>
              </Flex>
            </Flex>
          )
        })}
      </Grid>
    </Flex>
  )
}

const useStyles = () =>
  useMemo(() => {
    return {
      uploadText: {
        textAlign: 'center',
        fontWeight: 'bolder',
        w: '100%',
        fontSize: '20px'
      }
    }
  }, [])
