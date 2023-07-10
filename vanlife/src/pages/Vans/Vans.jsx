import React from "react"
import { Link } from "react-router-dom";

export default function Vans(){
    const [vansData, setVansData] = React.useState([]);

    React.useEffect(()=>{
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVansData(data.vans))
    },
    [])

    const vanElements = vansData.map((van)=>{
        return (
            <Link key={van.id} className="vanCard" to={`/vans/${van.id}`}>
                <img src={van.imageUrl} className="vanCard--img"/>
                <div className="vanCard--details">
                    <div className="vanCard--content">
                        <h3>{van.name}</h3>
                        <p>{van.price}</p>
                    </div>
                    <div className={`vanCard--type selected ${van.type}`}>
                        {van.type}
                    </div>
                </div>
            </Link>
        )
    })

    return (
        <main className="vans-container">
            {vanElements}
        </main>
    )
}