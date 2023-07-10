import React from "react"
import { Link } from "react-router-dom"

export default function HostVans(){
    const [vans, setVans] = React.useState([])

    React.useEffect(()=>{
        fetch(`/api/host/vans`)
        .then(res=>res.json())
        .then(data=>setVans(data.vans))
    },[])
  
    const vanElements = vans.map((van)=>{
        return (
            <li key={van.id}>
                <Link className="hostVanCard" to={`/host/vans/${van.id}`}>
                    <img src={van.imageUrl} className="hostVanCard--image"></img>
                    <div className="hostVanCard--details">
                        <h3>{van.name}</h3>
                        <p>{`$${van.price}/day`}</p>
                    </div>
                </Link>
            </li>
        )
    })

    return (
        <div className="hostVans--container">
            <h2 className="hostVans--heading">Your listed vans</h2>
            <ul className="hostVans--cardlist">
                {vanElements}
            </ul>
        </div>
    )
}