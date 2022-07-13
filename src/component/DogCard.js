import React, { useState } from "react";
import CardButton from "./CardButton";

export default function DogCard({ url , id, image_id}) {
  const [isLoad, setIsLoad] = useState(true);

  const backgraundLoader = `https://media0.giphy.com/media/3o6UB4zAURoccSY000/200w.gif?cid=0cc708e1gdy9t15jkz78l8h9fwv3tfv5xx4kzy90gufu17zr&rid=200w.gif&ct=g`;

  const loadImg = () => {
    setIsLoad(false);
  };
  return (
    <div>
      <img
        src={isLoad ? backgraundLoader : url}
        loading="lazy"
        onLoad={loadImg}
        width="200px"
        height="200px"
        alt="perrito"
      />
      <CardButton id={id} image_id={image_id}/>
    </div>
  );
}



