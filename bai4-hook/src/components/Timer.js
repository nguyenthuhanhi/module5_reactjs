import {useEffect, useState} from "react";

export function Timer(){
    const [timer, setTimer] = useState(10);

    useEffect(()=> {
        let timerID = setInterval( ()=>{
            console.log('setInterval');
            setTimer(prevState => prevState-1)
        }, 1000)
            console.log('timerID', timerID)
            return() => {
                console.log("clearn up")
                clearInterval(timerID)
            }
    }, []);
    return(
        <>
            <h1>Number: {timer}</h1>
        </>
    )
}
