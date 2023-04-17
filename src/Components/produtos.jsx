function Produtos (props){
    return(
        <div className="">
            <div className="float-left p-6 text-sm">
                <div className="">
                    <img src={props.img} width={320} height={320}/>
                </div>
                <p>{props.titulo}</p>
                <p className="text-[#98b020]">{props.preco}</p>
                <p>({props.pagamento})</p>
            </div>

        </div>
    )
}
export default Produtos