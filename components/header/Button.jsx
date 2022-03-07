import Image from 'next/image'


export default function Button(props){
    return(
        <div className={`justify-center items-center flex-row p-1 hidden lg:flex px-2`}>
            <button type="button" className={`flex justify-center items-center flex-row`}>
                {props.children}
                <span className='lg:p-2'>
                    {props.label}
                </span>
            </button>
        </div>
    )
}