import { Link, useLoaderData } from "react-router-dom"
import { getHostVans } from "../../api"
import {requireAuth} from "../../utils"
export async function loader(){
    await requireAuth
    return getHostVans()
} 
export default function HostVans(){
    // const [vans, setVans] = React.useState([])
    // not using vans variable as a state anymore after using loaders.
    const vans = useLoaderData()

    // Moved the useEffect (which was used for api call) out
  
    const vanElements = vans.map((van)=>{
        return (
            <li key={van.id}>
                <Link className="hostVanCard" to={van.id}>
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