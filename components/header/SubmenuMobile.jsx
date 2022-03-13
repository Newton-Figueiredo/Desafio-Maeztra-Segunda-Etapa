
export default function SubmenuMobile(props) {

    return (
        <>
            <div className={`submenu-container flex flex-col lg:hidden absolute ${props.click ? "left-0" : "-left-full"} ease-out duration-300 top-[104px] bg-white z-50 w-full shadow`} >
                <div className="submenu-content flex flex-col">
                    <a href="/" className={`flex justify-center items-center flex-row py-2`}>
                        <span className='  text-[#FAA500] font-semibold'>
                            Novidades
                        </span>
                    </a>

                    <a href="/" className={`flex justify-center items-center flex-row py-2`}>
                        <span className=''>
                            Vestidos
                        </span>
                    </a>
                    <a href="/" className={`flex justify-center items-center flex-row py-2`}>
                        <span className=''>
                            Roupas
                        </span>
                    </a>

                    <a href="/" className={`flex justify-center items-center flex-row py-2`}>
                        <span className=''>
                            Sapatos
                        </span>
                    </a>
                    <a href="/" className={`flex justify-center items-center flex-row py-2`}>
                        <span className=''>
                            Lingerie
                        </span>
                    </a>

                    <a href="" className={`flex justify-center items-center flex-row py-2`}>
                        <span className=''>
                            Acessórios
                        </span>
                    </a>

                    <a href="" className={`flex justify-center items-center flex-row py-2`}>
                        <span className=''>
                            OUTLET
                        </span>
                    </a>
                </div>
            </div>
        </>
    )
}