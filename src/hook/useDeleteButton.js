import { useCallback, useState } from "react";
import { useToast } from "@chakra-ui/react";
import useDogsContext from "../context/useDogsContext";
import useDogUpload from "../context/useDogUpload";
import deleteUpload from "../service/delteUpload";

export default function useDeleteButton({ image_id }) {
  const { listOfDogsUpload, setListOfDogsUpload } = useDogsContext();
  const [isFetch, setIsFecth] = useState(false);

  useDogUpload({ initialFetchDogs: isFetch });

  const toast = useToast();

  const deleteAdoptDogs = useCallback(async () => {
    const favouriteToDelete = listOfDogsUpload.find(
      (elem) => elem.image_id === image_id
    );

    setListOfDogsUpload((elem) =>
      elem.filter((list) => list.image_id !== favouriteToDelete.image_id)
    );
    toast({
      title: `Congratulations you delete a dog`,
      status: "success",
      isClosable: true,
    });
    await deleteUpload({ image_id: image_id });
  }, [image_id, listOfDogsUpload, setListOfDogsUpload, toast]);

  const handleDelete = useCallback(async () => {
    try {
      await deleteAdoptDogs();
    } catch (error) {
      console.error(error);
    } finally {
      setIsFecth(true);
    }
  }, [deleteAdoptDogs]);

  return { handleDelete };
}
