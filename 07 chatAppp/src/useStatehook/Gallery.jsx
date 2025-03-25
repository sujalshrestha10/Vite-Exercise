import { useState } from 'react';
import { sculptureList } from './data.js';


export default function Gallery() {
    const [showMore, setShowMore] = useState(false);
    const [index, setIndex] = useState(1);
    const [to, setTo] = useState('Bob');
    const [message, setMessage] = useState('hello');
    let sculpture = sculptureList[index];
    function handleClick() {
        setIndex(index + 1);
    }
    function showmoreplease() {
        setShowMore(!showMore);

    }
    function handleSubmit(e) {
        e.preventDefault();
        setTimeout(() => {
            alert(`You said ${message} to ${to}`);
        }, 5000);
    }
    return (
        <>

            <button className='flex items-center p-3 h-7 m-3 hover:bg-green-400 rounded-lg bg-blue-300' onClick={handleClick}>Next</button>

            <h1><b>{sculpture.name}</b> is my name</h1>

            <h1>It is drawn by mr {sculpture.artist}</h1>

            <p>{index} of 11</p>

            <h1>his photo looks like this</h1>
            <img src={sculpture.url} alt="" />
            {showMore && <p>{sculpture.description}</p>}

            <button onClick={showmoreplease} className='font-extrabold bg-blue-300 m-10 flex items-center justify-center'>{showMore ? 'hide' : 'show'}</button>
            <form onSubmit={handleSubmit}>
                <label>
                    To:{' '}
                    <select
                        value={to}
                        onChange={e => setTo(e.target.value)}>
                        <option value="Alice">Alice</option>
                        <option value="Bob">Bob</option>
                    </select>
                </label>
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>

        </>

    );
}
