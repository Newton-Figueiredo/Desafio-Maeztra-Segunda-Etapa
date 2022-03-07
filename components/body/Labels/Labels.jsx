import Tags from "../Labels/Tags"

export default function Labels(){
    return(
        <>
        <div className="flex justify-center items-center w-full px-8">
            <div className="flex justify-start lg:justify-between items-center w-full p-0 overflow-x-scroll lg:overflow-visible max-w-screen-2xl">
                <Tags title="Produtos importados" subtitle="Produto de Alta Qualidade" src="https://i.imgur.com/o6jS7Gc.png">
                    
                </Tags>
                <Tags title="Estoque no Brazil" subtitle="Produtos mais perto de você!" src="https://i.imgur.com/QTFwPmU.png">
                    
                </Tags>
                <Tags title="Trocas Garantidas" subtitle="Trocas em até 48 horas, vejas as regras" src="https://i.imgur.com/5GTW9ii.png">
                    
                </Tags>
                <Tags title="Ganhe 5% off" subtitle="Pagando à vista no Cartão" src="https://i.imgur.com/sxrqa57.png">
                    
                </Tags>
                <Tags title="Frete Grátis" subtitle="Em compras acima de R$ 499,00" src="https://i.imgur.com/pyNUUin.png">
                    
                </Tags>
                
            </div>
        </div>
        </>
    )
}