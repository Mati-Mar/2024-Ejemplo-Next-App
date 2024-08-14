"use client"

import clsx from "clsx"
import styles from "@/components/Button.module.css"

//PROPS
export default function Button(props) {

    return(
        <button className={
            clsx(
                {
                    [styles.button] : true,
                    [styles.variant_primary]: props.state == "primary",
                    [styles.variant_secondary]: props.state == "secondary",
                    [styles.variant_ok]: props.state == "ok",

                }
            )} 
            onClick={props.onClick}>{props.text}</button>
    )
}

/*
export default function Button({onClick, text}) {

    return(
        <button onClick={onClick}>{text}</button>
    )
}*/