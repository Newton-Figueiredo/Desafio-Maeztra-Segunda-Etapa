import {GlobeIcon} from "../../Icons/index"
import Tags from "../Labels/Tags"

export default function Labels(){
    return(
        <>
        <div className="flex justify-center items-center w-full">
            <div className="flex justify-center items-center w-full p-3">
                <Tags title="Produtos importados" subtitle="Produto de Alta Qualidade">
                    {GlobeIcon}
                </Tags>
                <Tags title="Estoque no Brazil" subtitle="Produtos mais perto de você!">
                    {GlobeIcon}
                </Tags>
                <Tags title="Trocas Garantidas" subtitle="Trocas em até 48 horas, vejas as regras">
                    {GlobeIcon}
                </Tags>
                <Tags title="Ganhe 5% off" subtitle="Pagando à vista no Cartão">
                    {GlobeIcon}
                </Tags>
                <Tags title="Frete Grátis" subtitle="Em compras acima de R$ 499,00">
                    {GlobeIcon}
                </Tags>
                
            </div>
        </div>
        </>
    )
}