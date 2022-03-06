import Slider from "./Slider/Slider";
import Labels from "./Labels/Labels"

export default function Body(){
    return(
        <>
        <Slider/>
        <div className=" font-semibold texxt-[#353535] text-base h-6 flex justify-center items-center" >
            <span>
                Por que comprar na Maeztra?
            </span>
        </div>
        <Labels/>
        <div className=" font-semibold texxt-[#353535 text-[32px] flex justify-center items-center">
            <span>
                Marcas Parceiras
            </span>
        </div>
        <div className=" font-semibold texxt-[#353535 text-[32px] flex justify-center items-center">
            <span>
                As Mais Pedidas
            </span>
        </div>
        </>
    )
}