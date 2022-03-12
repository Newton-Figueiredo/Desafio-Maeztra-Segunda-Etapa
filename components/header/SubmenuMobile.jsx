import { useState } from "react"
import { DressIcon } from "../Icons"

export default function SubmenuMobile() {

    const [left, setLeft] = useState("-left-full")

    return (
        <>
            <div className={`submenu-container flex flex-col lg:hidden absolute '${left}'  top-[102px] bg-white z-50 w-full`} >
                <div className="submenu-content flex flex-col">
                    <button type="button" className={`flex justify-center items-center flex-row py-2`}>
                        <span className='lg:p-2'>
                            Novidades
                        </span>
                    </button>

                    <button type="button" className={`flex justify-center items-center flex-row py-2`}>
                        <span className='lg:p-2'>
                            Vestidos
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}