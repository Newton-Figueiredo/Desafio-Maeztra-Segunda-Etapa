
export default function SubmenuMobile(props) {

    return (
        <>
            <div className={`submenu-container flex flex-col lg:hidden absolute ${props.click ? "left-0" : "-left-full"} ease-out duration-300 top-[102px] bg-white z-50 w-full`} >
                <div className="submenu-content flex flex-col">
                    <a  href="/" className={`flex justify-center items-center flex-row py-2`}>
                        <span className='lg:p-2'>
                            Novidades
                        </span>
                    </a>

                    <a  href="/" className={`flex justify-center items-center flex-row py-2`}>
                        <span className='lg:p-2'>
                            Vestidos
                        </span>
                    </a>
                    <a  href="/" className={`flex justify-center items-center flex-row py-2`}>
                        <span className='lg:p-2'>
                            Roupas
                        </span>
                    </a>

                    <a  href="/" className={`flex justify-center items-center flex-row py-2`}>
                        <span className='lg:p-2'>
                            Sapatos
                        </span>
                    </a>
                    <a  href="/" className={`flex justify-center items-center flex-row py-2`}>
                        <span className='lg:p-2'>
                            Lingerie
                        </span>
                    </a>

                    <a  href="" className={`flex justify-center items-center flex-row py-2`}>
                        <span className='lg:p-2'>
                            Acessórios
                        </span>
                    </a>

                    <a  href="" className={`flex justify-center items-center flex-row py-2`}>
                        <span className='lg:p-2'>
                            OUTLET
                        </span>
                    </a>
                </div>
            </div>
        </>
    )
}