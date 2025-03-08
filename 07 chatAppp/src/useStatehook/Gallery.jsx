import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
    const [index, setIndex] = useState(0);
    let sculpture = sculptureList[index];
    function handleClick() {
        setIndex(index + 1);
    }
    return (
        <>

            <button onClick={handleClick}>Next</button>

            <h1>{sculpture.name} is my name</h1>

            <h1>It is drawn by mr {sculpture.artist}</h1>

            <h1>his photo looks like this</h1>
            <img src={sculpture.url} alt="" />
            <p>{sculpture.description}</p>

        </>

    );
}
