"use client"
import Button from "@/components/Button";
import Title from "@/components/Title"
import { useState } from "react";

export default function buttonTest() {
    const [cuenta, setCuenta] = useState(0);
    
    function incrementar() {
        setCuenta(cuenta + 1)
    }


    return(
        <div>
            <Title titulo="Home"/>
            <h2>Prueba de botones</h2>

            <Button onClick={incrementar} text="Incrementar" state={cuenta > 15 ? "primary" : "ok"}/>
            <p>Incremento: {cuenta}</p>

        </div>
    )
}

    


