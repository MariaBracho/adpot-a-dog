import { useMemo } from 'react'
import { Flex, Text, Grid, FormLabel, Image, Input } from '@chakra-ui/react'
import UploadIcon from 'assets/Vectorupload.svg'

export default function UploadDogImg ({
  dragOver,
  dragLeave,
  drop,
  uploadDog,
  uploadFile,
  isActive,
  dragAndDropMessage
}) {
  const styles = useStyles()
  return (
    <Flex
      w="100%"
      h="100%"
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
        justifyItems="center"
        w="100%"
        h="30%"
        marginTop="18px"
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
