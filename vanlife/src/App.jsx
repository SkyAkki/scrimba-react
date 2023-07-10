import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Layout from "./components/Layout"
import Vans from "./pages/Vans/Vans"
import VanDetails from "./pages/Vans/VanDetails"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostLayout from "./components/HostLayout"
import HostVans from "./pages/Host/HostVans"
import HostVanDetails from "./pages/Host/HostVanDetails"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVanPhotos from "./pages/Host/HostVanPhotos"

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="vans" element={<Vans/>}></Route>
          <Route path="vans/:id" element={<VanDetails/>}></Route>
          <Route path="host" element={<HostLayout/>}>
            <Route index element={<Dashboard/>}></Route>
            <Route path="income" element={<Income/>}></Route>
            <Route path="review" element={<Reviews/>}></Route>
            <Route path="vans" element={<HostVans/>}></Route>
            <Route path="vans/:id" element={<HostVanDetails/>}>
                <Route index element={<HostVanInfo/>}></Route>
                <Route path="pricing" element={<HostVanPricing/>}></Route>
                <Route path="photos" element={<HostVanPhotos/>}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}