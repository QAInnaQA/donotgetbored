import { useState, useEffect } from 'react';
import "./App.css";
import Video from "./Video.mp4";

function MainPage() { 

    const [action, setAction] = useState("");

    useEffect(() => {
    getAction();
    }, [])
  
    const getAction = async () => {
        const response = await fetch (`https://www.boredapi.com/api/activity/`);
        const data = await response.json();
        console.log(data.activity)
        setAction(data.activity)
    }

return (<div>

<div>
    <video autoPlay muted loop>
        <source src={Video} type="video/mp4"/>
    </video>
</div>

<div className="main">
    <h1>Here you can choose your own entertaiment and never get bored!</h1>
    <button className='mainbtn' onClick={getAction}>Try it here</button>
    <h2>{action}</h2>
</div>

</div>
)}

export default MainPage;
