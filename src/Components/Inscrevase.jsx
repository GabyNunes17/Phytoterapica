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
            <div className="w-full h-24 flex justify-around border-b">
                <div className="w-1/4 flex gap-5 border-r">
                    <img src="https://phytoterapica.vtexassets.com/assets/vtex/assets-builder/phytoterapica.tema-phytoterapica/4.0.23/svgs/vegano-green-icon___d50a3a256608558fb7a5b436f9296b04.svg" width={50}/>
                    <p  className="p-4"><span className="text-2xl">Vegano</span> <br />sem componentes de origem animal</p>
                </div>

                <div className="w-1/4 flex gap-5 border-r">
                    <img src="https://phytoterapica.vtexassets.com/assets/vtex/assets-builder/phytoterapica.tema-phytoterapica/4.0.23/svgs/pata-green-icon___7274cf6f262f688870f559e8bb5cb80a.svg" width={50}/>
                    <p  className="p-4"><span  className="text-2xl">Cruelty-Free</span> <br />não testado em animais</p>
                </div>

                <div className="w-1/4 flex gap-5 ">
                    <img src="https://phytoterapica.vtexassets.com/assets/vtex/assets-builder/phytoterapica.tema-phytoterapica/4.0.23/svgs/gotas-green-icon___78ef54dd5aebcddbe542cb86e3d95971.svg" width={50}/>
                    <p className="p-4"><span  className="text-2xl">100% Puro</span> <br />óleos puros e naturais</p>
                </div>
            </div>
        </div>
    )
}
export default Inscreva