import {Link, NavLink, Outlet } from "react-router-dom"
import React from "react"
import { useParams } from "react-router-dom"

export default function HostVanDetails(){
    const params = useParams()
    const [currentVan,setCurrentVan] = React.useState([])
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    React.useEffect(()=>{
        fetch(`/api/host/vans/${params.id}`)
        .then(res=>res.json())
        .then(data=>setCurrentVan(data.vans[0]))
    },[])

    return (
        <div className="hostVanDetail--container">
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            <div className="hostVanDetail--card">
                <div className="hostVanDetail--commonContainer">
                    <div className="hostVanDetail--dataContainer">
                        <img src={currentVan.imageUrl} className="hostVanDetail--image"></img>
                        <div className="hostVanDetails--data">
                            <div className={`hostVanDetails--type ${currentVan.type} selected`}>{currentVan.type}</div>
                            <h3>{currentVan.name}</h3>
                            <p className="price">{currentVan.price}</p>
                        </div>
                    </div>
                    <div className="hostVanDetail--navContainer">
                        <nav>
                            <NavLink end style={({isActive})=> isActive ? activeStyle : null} to=".">Details</NavLink>
                            <NavLink style={({isActive})=> isActive ? activeStyle : null} to="pricing">Pricing</NavLink>
                            <NavLink style={({isActive})=> isActive ? activeStyle : null} to="photos">Photos</NavLink>
                        </nav>
                    </div>
                </div>
                <Outlet context={{currentVan}}/>
            </div>
        </div>
    )
}