import Disclaimer from "./Disclaimer"
import Navbarv2 from "../header-v2/navbar/Navbarv2"
import Submenu from "./Submenu"


export default function Header(){
    return(
        <div className={`header-container flex-auto justify-center h-[104px] w-full bg-white z-50 `}>
            <div className={`header-content flex-auto justify-center fixed w-full bg-white z-50`} >
            <Disclaimer/>
            <Navbarv2/>
            <Submenu/>
            </div>
        </div>
    )
}