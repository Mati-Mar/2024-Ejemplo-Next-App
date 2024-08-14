export default function CheckBox({id, onChange, text}) {
    return(
        <>        
            <p>{text}</p>
            <input id={id} onChange={onChange} type="checkbox"/>
        </>
    );
}