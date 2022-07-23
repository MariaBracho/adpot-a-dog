import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import FavouriteDog from "../page/FavouriteDogs";
import SearchOfBreed from "../page/SearchOfBreeds";
import Detail from "../page/Detail";
import UploadDog from "../page/UploadDog";

export default function RouterNavigation() {
  return (
    <>
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="home/:keyword" element={<SearchOfBreed />} />
        <Route path="favourites" element={<FavouriteDog />} />
        <Route path="detail/:image_id" element={<Detail />} />
        <Route path="upload%20a%20dog" element={<UploadDog />} />
      </Routes>
    </>
  );
}
