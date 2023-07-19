import { useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError()
    
    return (
        <>
            <h1 style={{color:"#000", fontSize: '3rem'}}>Error: {error.message}</h1>
            <pre style={{color:"#000", fontSize: '2rem'}}>{error.status} - {error.statusText}</pre>
        </>
    )
}