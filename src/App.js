import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

    const [yourChoice, setYourChoice] = useState("");
    const [compChoice, setCompChoice] = useState("");
    const [result, setResult] = useState("");


  useEffect(() => {
        const randomNumber = Math.floor(Math.random()*3)+1
        if(randomNumber === 1) {
            setCompChoice('rock')
        } 
        if (randomNumber === 2) {
            setCompChoice('scissors')
        }
        if (randomNumber === 3) {
            setCompChoice('paper')
        }
    })
    

    useEffect(()=> {
        if(yourChoice === compChoice){
            setResult('Draw')
        }
        if(yourChoice === 'rock' && compChoice === 'paper'){
            setResult('You Lost')
        }
        if(yourChoice === 'rock' && compChoice === 'scissors'){
            setResult('You Win!')
        }
        if(yourChoice === 'paper' && compChoice === 'scissors'){
            setResult('You Lost')
        }
        if(yourChoice === 'paper' && compChoice === 'rock'){
            setResult('You Win!')
        }
        if(yourChoice === 'scissors' && compChoice === 'paper'){
            setResult('You Win!')
        }
        if(yourChoice === 'scissors' && compChoice === 'rock'){
            setResult('You Lost')
        }
    }, [yourChoice, compChoice])
    
    return (
        <>
        <div className='container'>
            <h1>Computer: {compChoice}</h1>
            <h1>You: {yourChoice}</h1>
            <h1>Result: {result}</h1>
            <button onClick={(e)=> setYourChoice('rock')} id="rock">rock</button>
            <button onClick={(e)=> setYourChoice('paper')} id="paper">paper</button>
            <button onClick={(e)=> setYourChoice('scissors')} id="scissors">scissors</button>
        </div>
        </>
    )
}


export default App;