import React from "react";
import { FormControl, Select, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Options from "./Options";
import useDogsContext from "../context/useDogsContext";

export default function SearchDog() {
  const navigate = useNavigate();
  const { listOfDogs } = useDogsContext();

  const handleChangeOption = (evt) => {
    const optionItem = listOfDogs.find(
      (item) => item.id === Number(evt.target.value)
    );
    const urlId = `${optionItem.id}_${optionItem.name}`;
    navigate(urlId, { replace: true });
  };
  return (
    <Box w="80%" margin="10px auto">
      <FormControl>
        <Select
          onChange={handleChangeOption}
          color="brand.gray"
          _focusVisible={{ borderColor: "brand.gray" }}
          variant="flushed"
          placeholder="Search for breed"
        >
          <Options options={listOfDogs} />
        </Select>
      </FormControl>
    </Box>
  );
}
