import { Link, useSearchParams } from "react-router-dom";
import {getVans} from "../../api"
import { useLoaderData } from "react-router-dom";

export function loader(){
    return getVans()
}
export default function Vans(){
    // const [vansData, setVansData] = React.useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type")
    // const [loading, setLoading] = React.useState(false)
    const vansData = useLoaderData()


    // React.useEffect(() => {
    //     async function loadVans() {
    //         setLoading(true)
    //         const data = await getVans()
    //         setVansData(data)
    //         setLoading(false)
    //     }
        
    //     loadVans()
    // }, [])

    const displayedVans = typeFilter
    ? vansData.filter(van => van.type === typeFilter)
    : vansData

    const vanElements = displayedVans.map((van)=>{
        return (
            <Link 
            key={van.id} 
            className="vanCard" 
            to={`${van.id}`} 
            state={{search: searchParams.toString(), type: typeFilter}}>
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

    // if (loading) {
    //     return <h1 style={{color: '#000', fontSize: '4rem'}}>Loading...</h1>
    // }

    return (
        <div className="van-container-parent">
            <h1>Explore our van options</h1>
            <div className="filter-buttons-and-clear">
                <div className="van-list-filter-buttons">
                    <button 
                    className={`van-type rugged ${typeFilter === 'rugged' ? 'selected' : ''}`} 
                    onClick={()=>{setSearchParams({type: "rugged"})}}>Rugged
                    </button>
                    <button 
                    className={`van-type simple ${typeFilter === 'simple' ? 'selected' : ''}`} 
                    onClick={()=>{setSearchParams({type: "simple"})}}>Simple
                    </button>
                    <button 
                    className={`van-type luxury ${typeFilter === 'luxury' ? 'selected' : ''}`} 
                    onClick={()=>{setSearchParams({type: "luxury"})}}>Luxury
                    </button>
                    {/* <Link className="van-type luxury" to="?type=luxury">Luxury</Link>          */}
                </div>
                { typeFilter ? <Link to="." className="van-type clear-filters">Clear Filter</Link> : null}
            </div>
            <main className="vans-container">
                {vanElements}
            </main>
        </div>
    )
}