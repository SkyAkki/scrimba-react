import React from "react"
import Die from "./Die"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

export default function DieBox(){
    const [dieArray, setDieArray] = React.useState(allNewDie())
    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(()=>{
        //We can also use .every method here
        const value = dieArray.find(die => die.isHeld)?.value;
        const win = dieArray.filter(die=>die.value === value && die.isHeld === true)
        if(win.length === 10){
            setTenzies(true)
        }
    }, [dieArray])

    function allNewDie(){
        return new Array(10).fill().map(() => {
            return (
                {
                    value: Math.ceil(Math.random()*6),
                    isHeld: false,
                    id: nanoid()
                }
            )
        });
    }

    const dieArrayElements = dieArray.map((die)=>{
        return <Die value={die.value} key={die.id} id={die.id} isHeld={die.isHeld} setHold={hold}/>
    })

    function shuffle(){
        if(!tenzies){
            setDieArray(prevDieArray => {
                return (prevDieArray.map((die)=>{
                    return die.isHeld ? die : {...die, value: Math.ceil(Math.random()*6)}
                }))
            })
        }else{
            setTenzies(false)
            setDieArray(allNewDie())
        }
    }

    function hold(event,id){
        if(!tenzies){
            const newArray = dieArray.map((die)=>{
                return die.id === id ? {...die, isHeld: !die.isHeld} : {...die}
            })
            setDieArray(newArray)
        }
    }

    return (
        <div className="dieContainer">
            {/* {tenzies && <Confetti />} */}
            {tenzies ? <Confetti/> : null}
            <ul className="dieContainer--board">
                {dieArrayElements}
            </ul>
            <button className="dieContainer--rollButton" onClick={shuffle}>{tenzies ? "New Game" : "Roll"}</button>
        </div>
    )
}