export default function Brands(props){
    return(
        <>
        <div className="flex justify-start items-center min-w-[200px] m-2 2xl:min-w-[300px] h-[64px] lg:m-0">
            <div className="flex justify-center items-center rounded-md shadow-md ">
            <img className="rounded w-72" src={props.src}/>
            </div>
        </div>
        </>
    )
}