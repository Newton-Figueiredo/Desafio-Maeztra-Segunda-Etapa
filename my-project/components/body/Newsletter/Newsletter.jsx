export default function Newsletter() {
    return (
        <>
            <div className="flex justify-center items-center w-full px-9 bg-[#FAFAFA] border-y-2 border-[#EFEFEF]">
                <div className="flex justify-center flex-col lg:flex-row  items-center w-full p-0  max-w-screen-2xl h-32">
                    <div className="lg:w-auto lg:flex lg:justify-end lg:px-5">
                        <span className=" text-2xl text-[#353535] font-bold">
                            Recebe Nossa Newsletter
                        </span>
                    </div>

                    <div className="my-2.5 lg:w-auto lg:flex lg:justify-start">
                        <div className="justify-start flex flex-auto">
                            <div className="mb-0 lg:w-full w">
                                <div className="input-group  flex items-stretch w-full mb-0 ">
                                    <input type="search" className="form-control flex-auto min-w-0 w-full pl-5 pr-[200px] py-1 text-base font-normal text-gray-700 bg-[#ffffff] bg-clip-padding border border-black rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-[#eeeeee] focus:border-blue-600 focus:outline-none placeholder-[#353535]" id="imput-addon3" placeholder="Digite seu e-mail" aria-label="Search" aria-describedby="button-addon3" /* style={{"border-radius":"4px","margin-right":"10px"}} */ />
                                    <button className="relative btn px-10 py-2 border-2 bg-[#FAA500] border-[#FAA500] text-white hover:text-[#FAA500] font-semibold text-xs leading-tight uppercase rounded-lg hover:bg-[#FAA500] hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" /* style={{"border-radius":"4px"}} */  type="button" id="button-addon3" >Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}