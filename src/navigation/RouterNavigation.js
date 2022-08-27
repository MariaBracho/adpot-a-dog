import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import Home from 'pages/Home'
import SearchOfBreed from 'pages/SearchOfBreeds'
import Detail from 'pages/Detail'
import UploadDog from 'pages/UploadDog'
import DogsUploaded from 'pages/DogsUploaded'
import FavouriteDog from 'pages/FavouriteDog'

// common pages
import PageNotFound from 'component/pageNotFound/PageNotFound'

// common components
import Navbar from 'component/navbar/Navbar'
import BackHome from 'component/BackHome/BackHome'

export default function RouterNavigation () {
  return (
    <BrowserRouter>
      <Navbar />
      <BackHome />
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
    </BrowserRouter>
  )
}
