import { element } from "prop-types"
import { useEffect, useState } from "react"
import { getAllElements } from "../api"

export const PeriodicQuestions = () => {
    const [allElementInfo, setAllElementInfo] = useState([])
    useEffect(() => {
        getAllElements().then((response)=> {
            setAllElementInfo(response)
        })
    },[])
    const elements = allElementInfo.map((element)=> {
        return element.name
    })
    const symbols = allElementInfo.map((element)=> {
        return element.symbol
    })
    const number = Math.floor(Math.random() * 119);
    const random1 = Math.floor(Math.random() * 119)
    const random2 = Math.floor(Math.random() * 119)
    const guessArray = [elements[number], elements[random1], elements[random2]]
  guessArray.sort()
    return (
        <section>
        <h1>{symbols[number]}</h1>
        <button>{guessArray[0]}</button>
        <button>{guessArray[1]}</button>
        <button>{guessArray[2]}</button>
        </section>
    )
}