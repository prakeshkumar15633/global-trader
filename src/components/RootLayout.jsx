import { Outlet } from "react-router-dom"
import Navbar from "./NavBar/Navbar"
import { useNavigate ,useLocation} from "react-router-dom"
import { useState, useEffect} from "react"
import Footer from './Footer/Footer'

function RootLayout(){
    let path=useLocation().pathname.split('/')
    let [width,setWidth]=useState(false)
    useEffect(()=>{
        if(path.length>=3){
            if(!path[2].includes('services')){
                setWidth(true)
            }
            else{
                setWidth(false)
            }
        }
        console.log(width)
    })
    return(
        <div>
            <Navbar/>
            <div style={{marginLeft:width?'10vw':'',marginRight:width?'10vw':''}}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default RootLayout