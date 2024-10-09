export default function Input(props) {
    return(
        <>
            <h1>{props.contenido}</h1>
            <input placeholder={props.contenido} onChange={props.onChange} type="text"></input>
        </>
    )
}