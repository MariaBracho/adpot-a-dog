import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getDogImagesInfo from "../service/getImageInfo";
import DogCard from "./DogCard";
import { Link } from "react-router-dom";
import { Box, Text, Image } from "@chakra-ui/react";
import Arrow from "../assets/arrowBack.svg";

export default function CardDetail() {
  const { image_id } = useParams();
  const [detailDog, setDetailDog] = useState({});
  const { url, id, breeds } = detailDog;

  const styleProps = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  };

  useEffect(() => {
    getDogImagesInfo({ image_id }).then((dog) => setDetailDog(dog));
  }, [image_id]);

  return (
    <Box>
      <Box>
        <Link to={"/home"}>
          <Image m="10px 20px" position="absolute" src={Arrow}></Image>
        </Link>
      </Box>
      <Box sx={styleProps}>
        <Text layerStyle="title" justifyContent="center">
          Information
        </Text>
        <DogCard url={url} image_id={id} isDetalle={false} detail={breeds} />
      </Box>
    </Box>
  );
}
