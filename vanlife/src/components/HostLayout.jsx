import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout(){
 return(
    <>
        <nav className="host-nav">
            <NavLink end 
            className={({isActive})=> isActive ? "activeLink" : null} 
            to=".">Dashboard</NavLink>
            <NavLink 
            className={({isActive})=> isActive ? "activeLink" : null} 
            to="income">Income</NavLink>
            <NavLink 
            className={({isActive})=> isActive ? "activeLink" : null} 
            to="vans">Vans</NavLink>
            <NavLink 
            className={({isActive})=> isActive ? "activeLink" : null} 
            to="review">Reviews</NavLink>
        </nav>
        <Outlet/>
    </>
 )   
}