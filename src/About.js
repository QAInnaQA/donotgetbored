import { useState } from 'react';
import { data } from "./data";
import "./App.css";

function About() {

const [fun, setFun] = useState(0);
const {description, image} = data[fun];

    const previousFun = () => {
        setFun((fun =>{
            fun --;
            if (fun < 0) {
            return data.length-1;
            }
            return fun;
        }))
    }
    
    const nextFun = () => {
        setFun((fun =>{
            fun ++;
            if (fun > data.length -1) {
                fun = 0;
            }
            return fun;
        }))
    }

return (<div>
    <div className="container">
        <h1>5 the most popular our activities</h1>
        <h2>{description}</h2>
    </div>

    <div className="slider">
        <button class="btn" onClick={previousFun}>◀️</button>
        <img src={image} width="650" height="450" alt="pic"/>
        <button class="btn" onClick={nextFun}>▶️</button>
    </div>
</div>
    )}

export default About;