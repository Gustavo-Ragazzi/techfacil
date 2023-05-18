export default function BannerCategory() {
    return (
        <div className="flex flex-col mx-2 my-8 gap-5 md:px-32 xl:flex-row">
            <img className="xl:w-1/2 xl:h-1/2" src="./banners/hardware.webp"></img>
            <img className="xl:w-1/2 xl:h-1/2" src="./banners/perifericos.webp"></img>
        </div>
    )
}