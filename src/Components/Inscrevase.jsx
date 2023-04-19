function  Inscreva (){
    return(
        <div className="">
            <div className="flex justify-center gap-10 p-8 w-full h-32 bg-slate-100">
                <div className="">
                    <h1 className="text-2xl	">INSCREVA-SE</h1>
                    <p>E RECEBA NOVIDADES E PROMOÇÕES</p>
                </div>
                <div className="w-5/12 flex gap-1.5 p-4">
                    <input type="email" className="w-96 h-8 border rounded-xl" placeholder="Seu e-mail"/>
                    <button className="h-8 w-56 bg-[#98b020] rounded-xl">Assinar Newsletter</button>
                </div>
            </div>
        </div>
    )
}
export default Inscreva