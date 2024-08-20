"use client"
import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import Title from "@/components/Title"
import { useEffect, useState } from "react";

export default function home() {
    const [cuenta, setCuenta] = useState(0);
    const [nombre, setNombre] = useState("Anonimo");
    const [isChecked, setChecked] = useState(false);

    useEffect(() => {
        setCuenta(10);
        setNombre("Falta ingresar un nombre");
    },[])

    useEffect(() => {
        setCuenta(cuenta+5);
    }, [nombre])

    useEffect(() => {
        console.log("Cambie")
    }, [isChecked])

    function incrementar() {
        if (isChecked)
            setCuenta(cuenta+1);
        else
            setCuenta(cuenta-1);
    }

    function modificarNombre(event) {
        setNombre(event.target.value)
    }
    
    function checkState(event) {
        setChecked(event.target.checked);
    }

    return(
        <div>
            <Title titulo="Home"/>
            <h2>Contador: {cuenta}</h2>
            <Button onClick={incrementar} text="Incrementar"></Button>

            <h3>Mi nombre es: {nombre}</h3>
            <input id="ingresoNombre" placeholder="Ingrese su nombre" onChange={modificarNombre}/>

            <CheckBox onChange={e => checkState(e)} id="sumaresta" text={isChecked ? "Suma" : "Resta"}/>            
        </div>
    )
}




