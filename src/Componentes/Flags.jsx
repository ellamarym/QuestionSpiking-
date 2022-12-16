import { useEffect, useState } from "react";
import { getAllCountries, getAllFlagUrls } from "../api";

export const FlagQuestions = () => {
    const [allCountries, setAllCountries] = useState([])
  const [allFlagUrls, setAllFlagUrls] = useState([])

  const number = Math.floor(Math.random() * 220);
  const random1 = Math.floor(Math.random() * 220)
  const random2 = Math.floor(Math.random() * 220)
  useEffect(()=> {
    getAllCountries().then((countries)=> {
      setAllCountries(countries)
    })
    getAllFlagUrls().then((flags) => {
      setAllFlagUrls(flags)
    })
  },[])
  
  const guessArray = [allCountries[number], allCountries[random1], allCountries[random2]]
  guessArray.sort()
  return (
    <section>
      <img src={`${allFlagUrls[number]}`}/>
      <button>{guessArray[0]}</button>
      <button>{guessArray[1]}</button>
      <button>{guessArray[2]}</button>
    </section>
  );
}