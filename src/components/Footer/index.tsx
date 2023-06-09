import { FaTiktok, FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex flex-col gap-2 bg-gradient-to-r from-blue-900 from-55% to-blue-700 shadow-lg text-white p-5 md:px-32">
            <h2 className="self-center mb-5 font-bold">Mídias sociais</h2>
            <div className="flex justify-between text-2xl sm:text-3xl lg:justify-center lg:gap-32 px-5">
                <a className="hover:text-gray-300" href="#"><FaFacebook /></a>
                <a className="hover:text-gray-300" href="#"><FaInstagram /></a>
                <a className="hover:text-gray-300" href="#"><FaTwitter /></a>
                <a className="hover:text-gray-300" href="#"><FaYoutube /></a>
                <a className="hover:text-gray-300" href="#"><FaLinkedin /></a>
                <a className="hover:text-gray-300" href="#"><FaTiktok /></a>
            </div>
            <hr className="my-8"/>
            <h2 className="font-bold">Atendimento</h2>
            <p>Horário de atendimento: 08:00 às 20:00 - Segunda a Sábado, horário de Brasília (Exceto domingo e feriados).</p>
            <h2 className="font-bold">Endereço:</h2>
            <p>Rua X, 500 - 5º andar - Centro Belo Horizonte - MG</p>
            <h2 className="font-bold">Central SAC:</h2>
            <p>(31) 1234-5678</p>
            <h2 className="font-bold">E-mail</h2>
            <p>sac@techfacil.com</p>
        </footer>
    )
}