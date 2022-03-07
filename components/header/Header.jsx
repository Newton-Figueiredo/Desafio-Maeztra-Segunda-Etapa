import Disclaimer from "./Disclaimer"
import Navbar from "./Navbar"
import Submenu from "./Submenu"


export default function Header(){
    return(
        <div className={`flex-auto justify-center `}>
            <Disclaimer/>
            <Navbar/>
            <Submenu/>
        </div>
    )
}