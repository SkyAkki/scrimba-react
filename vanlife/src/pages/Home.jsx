import {Link} from "react-router-dom"

export default function Home(){
    return(
        <main className="home--container">
            <h2>You got the travel plans, we got the travel vans.</h2>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="/vans" className="cta findVanBtn">Find your van</Link>
        </main>
    )
}