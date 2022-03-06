export default function SearchBar() {
    return (
        <div className="justify-center hidden lg:flex flex-auto">
            <div className="mb-0 lg:w-3/4 w">
                <div className="input-group relative flex items-stretch w-full mb-0 bg-[#EFEFEF] rounded-lg  rounded-tr-none rounded-br-none">
                    <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-6 py-1.5 text-base font-normal text-gray-700 bg-[#EFEFEF] bg-clip-padding border border-none border-gray-300 rounded-lg  rounded-tr-none rounded-br-none transition ease-in-out m-0 focus:text-gray-700 focus:bg-[#eeeeee] focus:border-blue-600 focus:outline-none placeholder-[#353535]" placeholder="O Que Você Busca?" aria-label="Search" aria-describedby="button-addon3"/>
                        <button className="btn inline-block px-6 py-2 border-2 bg-[#FAA500] border-[#FAA500] text-white hover:text-[#FAA500] font-medium text-xs leading-tight uppercase rounded hover:bg-[#FAA500] hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Buscar</button>
                </div>
            </div>
        </div>
    )
}