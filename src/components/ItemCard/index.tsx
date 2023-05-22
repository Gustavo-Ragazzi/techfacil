import { GiShoppingCart } from "react-icons/gi";

export default function ItemCard() {
    return (
        <div className="flex flex-col w-64 bg-white shadow-md p-3">
            <img src="/images/0.png"></img>
            <p>Memória Kingston Fury Beast, 8Gb, 3200MHz, DDR4</p>
            <p className="text-orange-500 text-2xl font-bold py-4">R$ 159.99</p>
            <button className="flex justify-center items-center gap-2 bg-orange-600 hover:bg-orange-500 py-2 text-white uppercase"><GiShoppingCart className="text-2xl"/>Comprar</button>
        </div>
    )
}