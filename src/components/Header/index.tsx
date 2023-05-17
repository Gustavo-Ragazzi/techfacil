import { GiHamburgerMenu, GiShoppingCart } from "react-icons/gi";
import SearchInput from "../SearchInput";

export default function Header() {
    return (
        <header className="flex justify-between items-center p-3 bg-white">
            <GiHamburgerMenu className="text-2xl" />
            <h1>TechFacil</h1>
            <SearchInput type="search" placeholder="Busque aqui" key="searchinput"/>
            <GiShoppingCart className="text-2xl" />
        </header>
    )
}