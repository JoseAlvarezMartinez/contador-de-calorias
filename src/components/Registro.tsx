interface RegisterProps {
    titulo: string
}

export const Registro = ({ titulo }: RegisterProps) => {
    return (
        <section>
            <h3 className="registro-titulos text-white">{titulo}:</h3>
            <p className="text-white registro-parrafo">0 <span>/ 3000</span></p>
        </section>
    )
}
