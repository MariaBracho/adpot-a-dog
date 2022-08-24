import { Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import SearchOfBreed from '../page/SearchOfBreeds'
import Detail from '../page/Detail'
import UploadDog from '../page/UploadDog'
import UpladedDogs from '../page/UpladedDogs'
import FavouriteDog from '../page/FavouriteDog'
import PageNotFound from '../component/PageNotFound'

export default function RouterNavigation () {
  return (
    <>
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="home/:keyword" element={<SearchOfBreed />} />
        <Route path="favourites" element={<FavouriteDog />} />
        <Route path="detail/:image_id" element={<Detail />} />
        <Route path="upload_a_dog" element={<UploadDog />} />
        <Route path="uploaded_dogs" element={<UpladedDogs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}
