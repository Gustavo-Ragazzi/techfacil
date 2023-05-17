interface Input {
    type: string;
    placeholder: string;
    key: string;
}

export default function SearchInput(props: Input) {
    return (
        <input 
            className="border-blue-900 border-2 rounded-md "
            type={props.type}
            placeholder={props.placeholder}
            key={props.key}
        />
    )
}