"use client"

import Button from "@/components/Button";
import Clase from "@/components/Clase";
import Docente from "@/components/Docente";
import { useState, useEffect } from "react"

export default function PruebaPage() {

    const [docentes, setDocentes] = useState([]);
    const [apellidoInput, setApellidoInput] = useState("");
    const [horariosDocente, setHorariosDocente] = useState([]);

    useEffect(() => {
        fetch("http://10.1.5.137:4000/docentes", {
            method: "GET"
        })
            .then((res) => res.json())
            .then((docentes) => {
                console.log(docentes)
                setDocentes(docentes)
            })

    }, [])

    function buscarCurso() {
        fetch("http://10.1.5.137:4000/cursos?docente=" + apellidoInput, {
            method: "GET"
        })
            .then((res) => res.json())
            .then((horario) => {
                console.log(horario)
                setHorariosDocente(horario)
            })
    }

    return (
        <>
            {
                docentes.map((docente) => (
                    <Docente key={docente.id} id={docente.id} nombre={docente.nombre} apellido={docente.apellido} materia={docente.materia}></Docente>
                ))
            }
            <input onChange={(e) => setApellidoInput(e.target.value)} type="text" placeholder="Ingrese apellido del docente"></input>
            <Button text="Buscar Curso" onClick={buscarCurso}></Button>

            <h1>Horario de primer curso</h1>
            <Clase horaIni={horariosDocente[0].inicio} horaFin={horariosDocente[0].fin} aula={horariosDocente[0].aula}/>
        </>
    )
}