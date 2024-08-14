"use client"
import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import Title from "@/components/Title"
import { useEffect, useState } from "react";

export default function home() {
    let [cuenta, setCuenta] = useState(0);
    let [nombre, setNombre] = useState("Anonimo");
    let [isChecked, setChecked] = useState(false);

    useEffect(() => {
        setCuenta(10);
        setNombre("Falta ingresar un nombre");
    },[])

    useEffect(() => {
        setCuenta(cuenta += 5);
    }, [nombre])

    useEffect(() => {
        console.log("Cambie")
    }, [isChecked])

    function incrementar() {
        if (isChecked)
            setCuenta(++cuenta);
        else
            setCuenta(--cuenta);
    }

    function modificarNombre() {
        let nuevoNombre = document.getElementById("ingresoNombre").value;
        setNombre(nuevoNombre)
    }
    
    function checkState(event) {
        if (event.target.checked) {
            setChecked(true);
        } else
            setChecked(false);
    }

    return(
        <div>
            <Title titulo="Home"/>
            <h2>Contador: {cuenta}</h2>
            <Button onClick={incrementar} text="Incrementar"></Button>

            <h3>Mi nombre es: {nombre}</h3>
            <input id="ingresoNombre" placeholder="Ingrese su nombre"/>
            <Button onClick={modificarNombre} text="Modificar Nombre"></Button>

            <CheckBox onChange={e => checkState(e)} id="sumaresta" text={isChecked ? "Suma" : "Resta"}/>            
        </div>
    )
}




