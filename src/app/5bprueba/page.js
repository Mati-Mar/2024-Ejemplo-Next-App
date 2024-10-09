"use client"

import Button from "@/components/Button";
import Clase from "@/components/Clase";
import Docente from "@/components/Docente";
import { useEffect, useState } from "react"

export default function PruebaPage() {
    
    const [docentes, setDocentes] = useState([]);
    const [apellidoInput, setApellidoInput] = useState("");
    const [horarios, setHorarios] = useState([
        {
            inicio: "10:25",
            fin: "11:45",
            aula: "Master 3"
        }
    ]);

    useEffect(() => {
        fetch("http://localhost:4000/docentes", {
            method: "GET",
        })
        .then((res) => res.json())
        .then((docentes) => {
            console.log(docentes);
            setDocentes(docentes)
        })
    },[])
    
    function buscarCurso() {
        console.log(apellidoInput);
        fetch("http://localhost:4000/cursos?docente=" + apellidoInput, {
            method: "GET"
        })
        .then((res) => res.json())
        .then((cursos) => {
            console.log(cursos);
            setHorarios(cursos);
        })
    }

    function guardarApellido(event) {
        setApellidoInput(event.target.value)
    }

    return(
        <>
            {
                docentes.map((docente) => (
                    <>
                        <Docente key={docente.id} id={docente.id} nombre={docente.nombre} apellido={docente.apellido} materia={docente.materia}></Docente>
                        <br></br>
                    </>
                ))
            }
            <input type="text" onChange={guardarApellido} placeholder="Ingrese apellido de docente"></input>
            <Button text="Buscar Curso" onClick={buscarCurso}></Button>

            <br></br>
            {
                
                <Clase horaIni={horarios[0].inicio} horaFin={horarios[0].fin} aula={horarios[0].aula}></Clase>
            }
            
        </>
    )
}