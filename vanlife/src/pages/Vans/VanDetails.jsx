import React from "react";
import { useParams } from "react-router-dom"

export default function VanDetails(){
    const params = useParams();
    const [van, setVan] = React.useState([])
    
    React.useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res=>res.json())
        .then(data=>setVan(data.vans))
    },[params.id])
    
    return (
        <main className="vanDetail--container">
            <img className="vanDetail--img" src={van.imageUrl}/>
            <div className={`vanDetail--type selected ${van.type}`}>
                {van.type}
            </div>
            <h2>{van.name}</h2>
            <p className="price">{van.price}</p>
            <p className="description">{van.description}</p>
            <button className="cta rentThisVan">Rent this van</button>
        </main>
    )
}