
import {useState} from "react";


export function Counter(){

    const [count, setCount] = useState(1);
    const [count2, setCount2] = useState(2);

    const handleClick = () => {
        const newValue = count + 1;
        setCount(newValue);
    };
    const handleClick2 = () => {
        const newValue = count2 + 2;
        setCount2(newValue);
    };

    return (
        <div>
            Count: {count}
            <div>
                <button onClick={handleClick}>ADD 1</button>
            </div>
            Count: {count2}
            <div>
                <button onClick={handleClick2}>ADD 2</button>
            </div>
        </div>

    );

}
