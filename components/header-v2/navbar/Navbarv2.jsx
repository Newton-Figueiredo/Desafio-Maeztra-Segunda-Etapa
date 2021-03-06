import { MenuIcon, SearchIcon, BagIcon, PersonIcon, HeartIcon } from "../../Icons/index"
import Image from 'next/image'
import SearchBar from "../../header/SearchBar"
import React, { useState } from "react"
import SubmenuMobile from "../../header/SubmenuMobile"
import SearchMobile from "../../header/search-mobile/SearchMobile"
import Button from "../../header/Button"


export default function Navbarv2() {
    const [click, setClick] = useState(false)
    const [clickserch, setClickserch] = useState(false)

    return (
        <>
            <div className="navbarv2-container flex justify-start items-center h-20  md:px-10 lg:px-[40px] xl:px-[90px]  shadow-md ">
                <div className="lg:hidden px-6">
                    <button onClick={function(){ return clickserch? (setClickserch(!clickserch) , setClick(!click)) : setClick(!click)} }  > {MenuIcon} </button>

                </div>
                <div className="md:px-3">
                    <Image
                        src="/maeztraIcon.svg"
                        width={130}
                        height={20}
                    />
                </div>
                <div className="espacador flex-auto lg:hidden">

                </div>
                <div className="lg:hidden px-6">
                    <button onClick={function(){ return click? (setClick(!click) , setClickserch(!clickserch)) : setClickserch(!clickserch)} } > {SearchIcon} </button>
                </div>

                <div className="lg:hidden px-6">
                    <button> {BagIcon}  </button>
                </div>
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
            <SubmenuMobile click={click} />
            <SearchMobile click={clickserch} />
        </>
    )
}