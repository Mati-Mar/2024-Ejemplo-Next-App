export default function Docente(props) {
    return(
        <div id={props.id}>
            <p>Nombre: {props.nombre}</p>
            <p>Apellido: {props.apellido}</p>
            <p>Materia: {props.materia}</p>
        </div>
    )
}