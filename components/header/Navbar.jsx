import { MenuIcon, SearchIcon, BagIcon,HeartIcon,PersonIcon } from "../Icons/index"
import Image from 'next/image'
import SearchBar from "../header/SearchBar"
import Button from "../header/Button"

export default function Navbar() {
    return (
        <div className="flex justify-start items-center h-20  md:px-10 lg:px-[40px] xl:px-[90px]  shadow-md ">
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
            <Button label="Minha Conta">
                {PersonIcon}
            </Button>
            <Button label="Minha Conta">
                {HeartIcon}
            </Button>
            <div className=" border-2 border-[#FAA500] rounded-lg  hidden lg:flex">
                <Button label="Meu Carrinho">
                    {BagIcon}
                </Button>
            </div>
        </div>
    )
}