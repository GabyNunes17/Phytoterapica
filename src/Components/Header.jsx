import Logo from "../assets/logo.png"
import User from "../assets/user-solid.svg"
import Cart from "../assets/cart.svg"

function Header(){
    return(
        <div className="">
            <header className="w-full h-24 flex flex-row justify-around border">
                <div className='w-72 h-24 '>
                    <img src={Logo} alt="logo" className="w-full"/>
                </div>
                <div className="flex justify-between w-1/2 py-8">
                    <input type="text" name="input" placeholder="O que você procura?" className="border border-black rounded-2xl w-60 h-8 p-2 "/>
                    <button className=" w-60 h-8 border border-black rounded-2xl">-5% na primeira compra</button>
                    <img src={User} className="w-8 "/>
                    <img src={Cart} className="w-8 "/>
                </div>
            </header>
        </div>  
    )
}
export default Header