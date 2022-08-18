import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Text, Image } from "@chakra-ui/react";
import getDogImagesInfo from "../service/getImageInfo";
import Arrow from "../assets/arrowBack.svg";
import DogCard from "./DogCard";

export default function CardDetail() {
  const [detailDog, setDetailDog] = useState({});
  const { url, id, breeds } = detailDog;
  const { image_id } = useParams();

  const styleProps = useMemo(() => {
    return {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "20px",
    };
  }, []);

  useEffect(() => {
    getDogImagesInfo({ image_id }).then((dog) => setDetailDog(dog));
  }, [image_id]);

  return (
    <>
      <Box>
        <Link to={"/home"}>
          <Image m="10px 20px" position="absolute" src={Arrow}></Image>
        </Link>
      </Box>
      <Box sx={styleProps}>
        <Text layerStyle="title" justifyContent="center">
          Information
        </Text>
        <DogCard
          key={id}
          url={url}
          image_id={id}
          isDetail={false}
          detail={breeds}
        />
      </Box>
    </>
  );
}
