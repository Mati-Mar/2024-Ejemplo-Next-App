"use client"
import Button from "@/components/Button";

//Componente FUNCIONAL
export default function Ranking() {
    function funcionBtn2() {
        console.log("Soy el botòn 2");
    }

    //Siempre un componente tiene que devolver una sola etiqueta HTML
    return(
        <>
            <h1>Ranking 1</h1>
            <h1>Ranking 2</h1>
            <h1>Ranking 3</h1>
            <h1>Ranking 4</h1>

            <Button text="Botòn 1"/>
            <Button onClick={funcionBtn2} text="Botòn 2"/>
        </>
    );
}