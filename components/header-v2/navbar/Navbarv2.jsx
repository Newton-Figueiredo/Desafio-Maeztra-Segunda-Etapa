import { MenuIcon, SearchIcon, BagIcon} from "../../Icons/index"
import Image from 'next/image'
import SearchBar from "../../header/SearchBar"


export default function Navbarv2() {
    return (
        <div className="navbarv2-container flex justify-start items-center h-20  md:px-10 lg:px-[40px] xl:px-[90px]  shadow-md ">
            <div className="lg:hidden px-6"> {MenuIcon} </div>
            <div className="md:px-3">
                <Image
                    src="/maeztraIcon.svg"
                    width={130}
                    height={20}
                />
            </div>
            <div className="espacador flex-auto lg:hidden">

            </div>
            <div className="lg:hidden px-6"> {SearchIcon} </div>
            <div className="lg:hidden px-6"> {BagIcon} </div>
            <SearchBar />
           
           
            <div className=" border-2 border-[#FAA500] rounded-lg  hidden lg:flex">
                
            </div>
        </div>
    )
}