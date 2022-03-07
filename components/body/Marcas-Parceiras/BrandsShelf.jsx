import Brands from "../Marcas-Parceiras/Brands"

export default function BrandsShelf(){
    return(
        <>
        <div className="flex justify-center items-center w-full px-8">
            <div className="flex justify-start lg:justify-between items-center w-full p-0 overflow-x-scroll lg:overflow-visible max-w-screen-2xl">
                <Brands src="https://i.imgur.com/Qoc0YF7.png"/>
                <Brands src="https://i.imgur.com/cHLLxR4.png"/>
                <Brands src="https://i.imgur.com/JOTNQgl.png"/>
                <Brands src="https://i.imgur.com/PN0nOAY.png"/>
                <Brands src="https://i.imgur.com/qZ1WvYA.png"/>
            </div>
        </div>
        </>
    )
}