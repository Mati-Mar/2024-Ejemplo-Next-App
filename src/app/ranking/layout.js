//Componentes FUNCIONALES
export default function LayoutRaking({children}) {
    return(
        <>
            <header>
                <h1>Soy el header</h1>
                {children}
            </header>
            <h2>Soy footer</h2>
        </>
    )
}