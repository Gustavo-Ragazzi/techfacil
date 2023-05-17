import { GiHamburgerMenu, GiShoppingCart } from "react-icons/gi";

export default function Header() {
    return (
        <header className="flex justify-between items-center p-3 bg-blue-400">
            <GiHamburgerMenu className="text-lg" />
            <h1>TechFacil</h1>
            <input className="bg-gray-300"></input>
            <GiShoppingCart className="text-lg" />
        </header>
    )
}