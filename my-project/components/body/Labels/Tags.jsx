export default function Tags(props){
    return(
        <>
        <div className="flex justify-start items-center bg-[#EFEFEF] min-w-[300px] h-[64px] rounded m-2 lg:m-0 shadow-md">
            <div className="flex justify-center items-center flex-col px-2 pl-6 ">
            <img src={props.src}/>
            </div>
            <div className="flex justify-center items-left flex-col px-2">
                <span className=" text-[#353535] font-semibold text-sm text-left">{props.title}</span>
                <span className=" text-black text-xs text-left">{props.subtitle}</span>
            </div>
        </div>
        </>
    )
}