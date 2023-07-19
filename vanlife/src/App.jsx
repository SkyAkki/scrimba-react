import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Layout from "./components/Layout"
import Vans, {loader as vansLoader} from "./pages/Vans/Vans"
import VanDetails, {loader as vanDetailsLoader} from "./pages/Vans/VanDetails"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostLayout from "./components/HostLayout"
import HostVans, {loader as hostVansLoader} from "./pages/Host/HostVans"
import HostVanDetails, {loader as hostVanDetailsLoader} from "./pages/Host/HostVanDetails"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import NotFoundPage from "./pages/NotFoundPage"
import Error from "./components/Error"
import "./server"
import Login, { loader as loginLoader } from "./pages/Login"
import {requireAuth} from "./utils"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}></Route>
    <Route 
    path="about" element={<About/>}></Route>
    <Route 
    path="vans" 
    errorElement={<Error/>} 
    element={<Vans/>} 
    loader={vansLoader}></Route>
    <Route 
    path="vans/:id" 
    element={<VanDetails/>} 
    loader={vanDetailsLoader}></Route>
    <Route 
    path="login" 
    element={<Login/>}
    loader={loginLoader}
    ></Route>
    <Route 
    path="host"
    element={<HostLayout/>}>
      <Route 
      index 
      element={<Dashboard/>} 
      loader={async ()=>await requireAuth()}></Route>
      <Route path="income" element={<Income/>} loader={async ()=>await requireAuth()}></Route>
      <Route path="review" element={<Reviews/>} loader={async ()=>await requireAuth()}></Route>
      <Route path="vans" loader={hostVansLoader} element={<HostVans/>}></Route>
      <Route path="vans/:id" loader={hostVanDetailsLoader}  element={<HostVanDetails/>}>
          <Route index element={<HostVanInfo/>} loader={async ()=>await requireAuth()}></Route>
          <Route path="pricing" element={<HostVanPricing/>} loader={async ()=>await requireAuth()}></Route>
          <Route path="photos" element={<HostVanPhotos/>} loader={async ()=>await requireAuth()}></Route>
      </Route>
    </Route>
    <Route path="*" element={<NotFoundPage/>}></Route>
  </Route>
))

export default function App(){
  return (
    <RouterProvider router={router}/>
  )
}