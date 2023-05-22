import { GiShoppingCart } from "react-icons/gi";

interface ItemCardProps {
    id: number,
    name: string,
    price: number
}

export default function ItemCard(props: ItemCardProps) {
    return (
        <div className="flex flex-col w-64 bg-white shadow-md p-3 my-7 mb-56 sm:mb-32">
            <img src={`/images/${props.id}.png`} alt={props.name + " imagem"} width={250} height={250} key={`img-${props.id}`}></img>
            <p className="line-clamp-2" key={props.name}>{props.name}</p>
            <p className="text-orange-500 text-2xl font-bold py-4" key={`price-${props.price}`}>R$ {props.price}</p>
            <button className="flex justify-center items-center gap-2 bg-orange-600 hover:bg-orange-500 py-2 text-white uppercase"><GiShoppingCart className="text-2xl"/>Comprar</button>
        </div>
    )
}