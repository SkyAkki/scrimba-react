import { Link, useLocation, useLoaderData } from "react-router-dom"
import { getVans } from "../../api"
export function loader({params}) {
    return getVans(params.id)
}
export default function VanDetails(){
    // const params = useParams();
    // const [van, setVan] = React.useState([])
    const location = useLocation()
    const van = useLoaderData()
    
    // React.useEffect(()=>{
    //     fetch(`/api/vans/${params.id}`)
    //     .then(res=>res.json())
    //     .then(data=>setVan(data.vans))
    // },[params.id])
    
    return (
        <main className="vanDetail--container">
            <Link
                to={location.state.search ? `../?${location.state.search}` : '..'}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {location.state.type ? location.state.type : 'all'} vans</span></Link>
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