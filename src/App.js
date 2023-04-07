import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
export default function App(){
    const topics=['Laravel','Javascript','HTML','Guitar']
    return (
        <>
            <Navbar topics={topics}/>
            <div className="container mt-3">
                <Outlet/>
            </div>
        </>
    )
}