import Disclaimer from "./Disclaimer"
import Navbarv2 from "../header-v2/navbar/Navbarv2"
import Submenu from "./Submenu"
import SubmenuMobile from "./SubmenuMobile"


export default function Header(){
    return(
        <div className={`header-content flex-auto justify-center `}>
            <Disclaimer/>
            <Navbarv2/>
            <Submenu/>
        </div>
    )
}