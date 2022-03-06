

export default function InfoCard() {
    return (
        <>
            <div className="flex justify-center items-center w-full px-9 pb-10">
                <div className="flex justify-start lg:justify-between flex-col lg:flex-row  items-center w-full p-0 lg:overflow-visible max-w-screen-2xl">
                    <div className="lg:w-2/5  lg:h-[480px] flex justify-center flex-col lg:px-11">
                        <h2 className=" font-semibold text-black text-2xl py-4 leading-9">
                            Lorem ipsum
                        </h2>
                        <span className=" text-black text-sm leading-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque .
                        </span>
                    </div>

                    <div className="py-4 lg:w-full flex lg:h-[450px] rounded-md  justify-center items-center">
                        <img className=" rounded-md w-full lg:h-[480px]" src="https://i.imgur.com/1vLCv01.png" alt="nova coleçao de outono-inverno" />
                    </div>
                </div>
            </div>
        </>
    )
}