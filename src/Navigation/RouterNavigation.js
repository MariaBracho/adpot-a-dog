import { Route, Routes } from 'react-router-dom'
import Home from 'page/Home'
import SearchOfBreed from 'page/SearchOfBreeds'
import Detail from 'page/Detail'
import UploadDog from 'page/UploadDog'
import DogsUploaded from 'page/DogsUploaded'
import FavouriteDog from 'page/FavouriteDog'
import PageNotFound from 'component/pageNotFound/PageNotFound'

export default function RouterNavigation () {
  return (
    <>
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="home/:keyword" element={<SearchOfBreed />} />
        <Route path="favourites" element={<FavouriteDog />} />
        <Route path=":image_id" element={<Detail />} />
        <Route path="upload_a_dog" element={<UploadDog />} />
        <Route path="dogs_uploaded" element={<DogsUploaded />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}
