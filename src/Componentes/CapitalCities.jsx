import { useEffect, useState } from "react"
import { getAllCapitals } from "../api"

export const CapitalCities = () => {
    const [allCountriesInfo, setAllCountriesInfo] = useState([])
    
    useEffect(()=> {
        getAllCapitals().then((capitals) => {
            setAllCountriesInfo(capitals)
        })
    }, [])

    const capitals = allCountriesInfo.map((country) => {
        return country.capital
    })
    const countries = allCountriesInfo.map((country) => {
        return country.name
    })
    
    const number = Math.floor(Math.random() * 250);
    const random1 = Math.floor(Math.random() * 250)
    const random2 = Math.floor(Math.random() * 250)
    const guessArray = [capitals[number], capitals[random1], capitals[random2]]
  guessArray.sort()
    return (
        <section>
            <h1>{countries[number]}</h1>
        <button>{guessArray[0]}</button>
        <button>{guessArray[1]}</button>
        <button>{guessArray[2]}</button>
        </section>
    )
}