import React, { useEffect } from "react";
import ListOfDogsRandom from "../component/ListOfDogsRandom";
import Navbar from "../component/navbar/Navbar";
import SearchDog from "../component/SearchDog";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("../home", { replace: true });
  }, [navigate]);

  return (
    <>
      <Navbar />
      <SearchDog></SearchDog>
      <ListOfDogsRandom />
    </>
  );
}
