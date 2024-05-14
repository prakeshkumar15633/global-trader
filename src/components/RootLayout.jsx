import { Outlet } from "react-router-dom"
import Navbar from "./NavBar/Navbar"
import { useNavigate ,useLocation} from "react-router-dom"
import { useState, useEffect} from "react"
import Footer from './Footer/Footer'

function RootLayout(){
    let path=useLocation().pathname.split('/')
    return(
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default RootLayout