import { GiHamburgerMenu, GiShoppingCart } from "react-icons/gi";
import SearchInput from "../SearchInput";
import { useState } from "react";
import SideBar from "./SideBar";
import BlockingLayer from "../BlockingLayer";

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    function handleSidebar() {
        isSidebarOpen ? setIsSidebarOpen(false) : setIsSidebarOpen(true); 
    }

    return (
        <header className="flex justify-between items-center p-3 py-8 gap-5 bg-gradient-to-r from-blue-900 from-55% to-blue-700 shadow-lg">
            <button onClick={handleSidebar}><GiHamburgerMenu className="text-4xl text-white hover:text-gray-300"/></button> 
            <SearchInput type="search" placeholder="Busca..." key="searchinput"/>
            <GiShoppingCart className="text-4xl text-white" />
            {isSidebarOpen && <BlockingLayer handleSidebar={handleSidebar}/>}
            {isSidebarOpen && <SideBar handleSidebar={handleSidebar} />}
        </header>
    )
}
