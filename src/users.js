import React, {useState} from 'react'
import './App.css'

function List(props) {

    let [count, setCount] = useState(0)

    let increament = () => {
        setCount(count+1);
    }

    return (
        <div className="content"> 
            <h3>Hi there! My name is {props.name}</h3>
            <p>I'am a {props.job}</p>
            <button onClick={increament}>Subscribe</button>
            <p> {count} Sub</p>
        </div>
    )

}

export default List