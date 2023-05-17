export default function Footer() {
    return (
        <footer className="flex flex-col gap-2 bg-gradient-to-r from-blue-900 from-55% to-blue-700 shadow-lg text-white p-1">
            <h2 className="font-bold">Atendimento</h2>
            <p>Horário de atendimento: 08:00 às 20:00 - Segunda a Sábado, horário de Brasília (Exceto domingo e feriados).</p>
            <p>Endereço:</p>
            <p>Rua X, 500 - 5º andar - Centro Belo Horizonte - MG</p>
            <h2 className="font-bold">Central SAC:</h2>
            <p>(31)1234-5678</p>
            <h2 className="font-bold">E-mail</h2>
            <p>sac@techfacil.com</p>
        </footer>
    )
}