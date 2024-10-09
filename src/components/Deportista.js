export default function Deportista(props) {

    const fotoDeportista = "/public/" +  props.fotoPerfil + props.ext 

    return (

        <div id={props.nombre}>

            <p>El deportista es: {props.nombre}</p>
            <img src={fotoDeportista}/>

        </div>

    )

}