import React from "react";
import ListOfDogsRandom from "../component/ListOfDogsRandom";
import Navbar from "../component/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <ListOfDogsRandom />
    </>
  );
}
