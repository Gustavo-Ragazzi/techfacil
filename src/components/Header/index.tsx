import { GiHamburgerMenu, GiShoppingCart } from "react-icons/gi";
import SearchInput from "../SearchInput";

export default function Header() {
    return (
        <header className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-900 from-55% to-blue-700 shadow-lg">
            <GiHamburgerMenu className="text-2xl text-white" />
            <SearchInput type="search" placeholder="Busca..." key="searchinput"/>
            <GiShoppingCart className="text-2xl text-white" />
        </header>
    )
}