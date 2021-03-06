import Slider from "./Slider/Slider";
import Labels from "./Labels/Labels"
import BrandsShelf from "./Marcas-Parceiras/BrandsShelf"
import InfoCard from "../body/InfoCard/InfoCard"
import Newsletter from "../body/Newsletter/Newsletter"
import Accordion from "../body/Accordion/Accordion"
import CardSlider from "./Card-Slider/CardSlider";
import Carrossel from "../body/Carrossel/Carrossel"

export default function Body(){
    return(
        <div className="bg-[#ffffff]">
        <CardSlider/>
        <div className=" font-semibold text-[#353535] text-base py-5 flex justify-center items-center" >
            <span>
                Por que comprar na Maeztra?
            </span>
        </div>
        <Labels/>
        <div className=" font-semibold text-[#353535] text-[24px] lg:text-[32px] flex justify-center items-center py-5">
            <span>
                Marcas Parceiras
            </span>
        </div>
        <BrandsShelf/>
        <div className=" font-semibold text-[#353535] text-[24px] lg:text-[32px] flex justify-center items-center py-5">
            <span>
                As Mais Pedidas
            </span>
        </div>
        <Carrossel/>
        <InfoCard/>
        <Newsletter/>
        <Accordion/>
        </div>
    )
}