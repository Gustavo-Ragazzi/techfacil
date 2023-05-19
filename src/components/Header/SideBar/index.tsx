import { FaHome, FaUser, FaShoppingCart, FaThumbsUp, FaWeixin, FaHeart, FaGift, FaRegWindowClose } from "react-icons/fa";

export default function SideBar(props: any) {
    return (
        <nav className="fixed z-50 top-0 left-0 bg-blue-700 h-screen text-white px-8 text-lg">
            <button onClick={props.handleSidebar}><FaRegWindowClose className="absolute right-3 top-3 hover:text-gray-300" /></button>
            <h2 className="py-8 text-xl font-bold">Olá. Faça seu <a className="text-orange-500 hover:text-orange-300" href="#">login</a></h2>
            <ul className="">
                <a className="hover:text-gray-300" href="#"><li className="py-1"><FaHome className="inline-block"/> Minha conta</li></a>
                <a className="hover:text-gray-300" href="#"><li className="py-1"><FaUser className="inline-block"/> Meus dados</li></a>
                <a className="hover:text-gray-300" href="#"><li className="py-1"><FaShoppingCart className="inline-block"/> Meus pedidos</li></a>
                <a className="hover:text-gray-300" href="#"><li className="py-1"><FaThumbsUp className="inline-block"/> Avaliações</li></a>
                <a className="hover:text-gray-300" href="#"><li className="py-1"><FaWeixin className="inline-block"/> Protocolos e atendimentos</li></a>
                <a className="hover:text-gray-300" href="#"><li className="py-1"><FaHeart className="inline-block"/> Favoritos</li></a>
                <a className="hover:text-gray-300" href="#"><li className="py-1"><FaGift className="inline-block"/> Sorteio</li></a>
            </ul>
        </nav>
    )
}