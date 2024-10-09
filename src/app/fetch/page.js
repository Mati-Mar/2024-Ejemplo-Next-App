"use client"

import Button from "@/components/Button"
import Deportista from "@/components/Deportista"
import { useEffect } from "react"

import { valor } from "@/classes/Test"
import { useState } from "react"

export default function fetchPage() {

  const [docentes, setDocentes] = useState([])
    
    useEffect(() => {
        fetch('http://10.1.5.137:4000/docentes', {
          method:"GET",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setDocentes(data)
          })
      }, [])
      

      function fetchSaludo() {
        () => {
          fetch('http://localhost:3001/saludo')
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
          })
        }
      }

      function obtenerHorariosDocente() {
        fetch('http://10.1.5.137:4000/cursos?docente='+ "Marchesi", {
          method: "POST",
          body: JSON.stringify({docente: "Marchesi"}),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
          })
      }

      return (
        <>
        {/*deportistas.map((deportista) => {
          <Deportista ext={deportista.ext} nombre={deportista.nombre}></Deportista>
          })
            <h1>Prueba</h1>;
            <Button text="Boton" state="ok" onClick={fetchSaludo}></Button>*/}
            <p>{valor}</p>
            <Button text="Prueba" onClick={obtenerHorariosDocente}></Button>

            {
              docentes.map((docente) => {
                <>
                  <p>{docente.nombre}</p>
                  <h2>Hola</h2>
                </>
              })
            }
        </>
      )

}