"use client"

import Button from "@/components/Button"
import { useEffect } from "react"

export default function fetchPage() {
    
    useEffect(() => {
        fetch('http://localhost:3001/saludo', {
          method:"GET",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
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

      return (
        <>
            <h1>Prueba</h1>;
            <Button text="Boton" state="ok" onClick={fetchSaludo}></Button>

        </>
      )

}