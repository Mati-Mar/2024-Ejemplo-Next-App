"use client"

//PROPS
export default function Button(props) {

    return(
        <button onClick={props.onClick}>{props.text}</button>
    )
}

/*
export default function Button({onClick, text}) {

    return(
        <button onClick={onClick}>{text}</button>
    )
}*/