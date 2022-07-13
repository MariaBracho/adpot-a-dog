import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import FavouriteDog from "../page/FavouriteDogs";

export default function RouterNavigation() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/Home" element={<Home/>} />
          <Route path="Favourites" element={<FavouriteDog />} />
        </Route>
      </Routes>
    </>
  );
}
