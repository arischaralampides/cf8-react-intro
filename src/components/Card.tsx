type CardProps = {
    title: string
    children: React.ReactNode    //children: ReactNode (μπορώ να το γράψω και έτσι απλα πρέπει να κάνω import μετα απο πάνω)
}

const Card = ({title, children}: CardProps) => {
    return (
        <>
            <div className="card text-center">
                <h2>{title}</h2>
                {children}
                <p>lorem ipsum</p>
            </div>
        </>
    )
};

export default Card;