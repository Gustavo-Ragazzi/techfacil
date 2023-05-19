export default function SectionTitle({children}: any) {
    return (
        <div className="flex justify-center pt-8 pb-2">
            <h1 className="text-orange-500 font-bold uppercase">{children}</h1>
        </div>
    )
}