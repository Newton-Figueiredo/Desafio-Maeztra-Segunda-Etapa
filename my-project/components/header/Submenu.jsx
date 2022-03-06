import Button from "../header/Button"
import { DressIcon } from "../Icons"

export default function Submenu() {
    return (
        <div className=" hidden lg:flex justify-center items-center flex-row shadow-sm" >
            <div className=" w-3/4 h-12 flex flex-row justify-evenly">
                <div className={`justify-center items-center flex-row p-3 hidden lg:flex`}>
                    <button type="button" className={`flex justify-center items-center flex-row`}>
                        {DressIcon}
                        <span className='lg:p-2 xl:px-4 text-[#FAA500] font-semibold'>
                            Novidades
                        </span>
                    </button>
                </div>
                <Button label="Vestidos">

                </Button>
                <Button label="Roupas">

                </Button>
                <Button label="Sapatos">

                </Button>
                <Button label="Lingerie">

                </Button>
                <Button label="Acessórios">

                </Button>
                <Button label="OUTLET">

                </Button>
            </div>
        </div>
    )
}