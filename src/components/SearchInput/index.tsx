import { FaSearch } from "react-icons/fa";

interface Input {
    type: string;
    placeholder: string;
    key: string;
}

export default function SearchInput(props: Input) {
    return (
        <form className="flex justify-center items-center">
            <input 
                className="border-blue-900 border-2 rounded-md w-full px-3"
                type={props.type}
                placeholder={props.placeholder}
                key={props.key}
            />
            <button
                type="submit"
                className="text-gray-200 hover:text-gray-300 focus:text-gray-500 -ml-6"
            ><FaSearch className="" /></button>
        </form>
    )
}