import { LeftIcon,RightIcon } from "../../Icons"
export default function BtnSlider({direction,moveSlide}){
    return(
        <>
        <button onClick={moveSlide} className={direction==="next"?`btn-slide next`:`btn-slide prev` }>
            {direction==="next"? RightIcon : LeftIcon}
        </button>
        </>
    )
}