import { useState, useEffect } from "react";
import CustomPopup from "./CustomPopup";
import {AviaoIcon} from "../Icons/index"


export default function Teste() {
    const [visibility, setVisibility] = useState(false);
    const [called, setCalled] = useState(false);

    const popupCloseHandler = (e) => {
        setVisibility(e);
    };


    useEffect(() => {
        if (called == false) {
            setVisibility(!visibility);
            setCalled(true);
        }
    })

    return (
        <div className="App">
            <CustomPopup
                onClose={popupCloseHandler}
                show={visibility}
                title="Bem Vindo à MAEZTRA"
            >
                <h3>Receba em Primeira mão </h3>
                <h4>desconto e ofertas exclusivas</h4>
                <div className="input-group  flex flex-col items-stretch w-full mb-0 ">
                    <input type="search" className="form-control flex-auto min-w-[200px] w-full pl-[20px] pr-[20px] py-1 text-base font-normal text-gray-700 bg-[#ffffff] border border-black rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-[#eeeeee] focus:border-blue-600 focus:outline-none placeholder-[#353535] rounded-tr-none rounded-br-none" id="imput-addon4" placeholder="Digite seu e-mail" aria-label="Search" aria-describedby="button-addon3" /* style={{"border-radius":"4px","margin-right":"10px"}} */ />
                    <button className="btn px-10 py-2 border-2 bg-[#FAA500] border-[#FAA500] text-white hover:text-[#FAA500] font-semibold text-xs leading-tight uppercase rounded-lg hover:bg-[#FAA500] hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out rounded-tl-none rounded-bl-none" /* style={{"border-radius":"4px"}} */ type="button" id="button-addon4" >Enviar {AviaoIcon} </button>
                </div>
            </CustomPopup>
        </div>
    );
}