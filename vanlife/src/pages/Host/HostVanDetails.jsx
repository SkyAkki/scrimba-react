import {Link, NavLink, Outlet } from "react-router-dom"
import { useLoaderData } from "react-router-dom"
import { getHostVans } from "../../api"
import {requireAuth} from "../../utils"

export async function loader({params}){
    await requireAuth
    return getHostVans(params.id)
}

export default function HostVanDetails(){
    // const params = useParams()
    // const [currentVan,setCurrentVan] = React.useState([])
    const currentVan = useLoaderData()
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    // Moved the useEffect call to fetch data to its own function.

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