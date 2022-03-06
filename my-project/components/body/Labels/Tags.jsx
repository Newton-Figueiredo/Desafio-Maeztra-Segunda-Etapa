export default function Tags(props){
    return(
        <>
        <div className="flex justify-evenly items-center bg-[#EFEFEF] w-72 h-[64px] rounded mx-3">
            <div className="flex justify-center items-center flex-col px-2">
            {props.children}
            </div>
            <div className="flex justify-center items-left flex-col px-2">
                <span className=" text-[#353535] font-semibold text-sm text-left">{props.title}</span>
                <span className=" text-black text-xs text-left">{props.subtitle}</span>
            </div>
        </div>
        </>
    )
}