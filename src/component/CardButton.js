import React from "react";
import useFavouriteButton from "../hook/useFavouriteButton";

 function CardButton({ image_id }) {
  const {handleList,showEmogi}=useFavouriteButton({image_id})

  return (
    <>
      <button onClick={handleList}>
        <span>{showEmogi}</span>
      </button>
    </>
  );
}

export default React.memo(CardButton)





