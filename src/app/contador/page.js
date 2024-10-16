"use client"
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useEffect, useState } from "react";

export default function ContadorPage() {

    const [nombre, setNombre] = useState("");
    const [contador, setContador] = useState(0);

    function cambiarNombre(event) {
        setNombre(event.target.value)
        setContador(contador + 5);
    }

    /*
    useEffect(()=> {
        let data = {
            nombre: nombre
        };
        
        //Haria el fetch
        //Lo declaro como una variable ya que no tengo el back
        
        var result = fetch("localhost:4000/deportistas", {
            method: "POST",
            body: data
        };

        result = [{nombre: "Juan", foto:"Juan.png"},{nombre:"pedro", foto: "asdasdsa"}]

        )
    },[])
    */
    useEffect(()=> {
        console.log("Nombre cambio a: " + nombre);
    },[nombre])

    return(
        <>
            <h1>Mi nombre es: {nombre}</h1>
            <Input contenido="nombre" onChange={cambiarNombre}></Input>
        
            <h2>El contador vale: {contador}</h2>
            <Button text="reset" onClick={()=>{setContador(0)}}></Button>
        </>
    )
}