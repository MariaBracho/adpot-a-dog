import {
  Input,
  Text,
  useToast,
  Flex,
  Image,
  FormLabel,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import UploadIcon from "../assets/Vectorupload.svg";
//import uploadImg from "../service/uploadImg";

export default function UploadImg() {
  const [upload, setUpload] = useState("");

  const toast = useToast();
  const textStyle = {
    color: "#B1A7A6",
    textAlign: "center",
    fontWeight: "bolder",
    w: "100%",
    fontSize: "20px",
  };

  const uploadDog = (evt) => {
    const file = evt.target.value;
    setUpload(file);

    toast({
      title: "Upload a dog.",
      description: "you have uploaded a dog",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  useEffect(() => {
    console.log(upload, "archivo");
  }, [upload]);

  return (
    <>
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
              multiple
              name="file"
              type="file"
              onChange={uploadDog}
              accept="image/png, image/jpg"
            />
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Image mb="14px" src={UploadIcon} />
              <Text sx={textStyle}>Upload a file</Text>
            </Flex>
          </FormLabel>
        </Flex>
      </Flex>
    </>
  );
}
