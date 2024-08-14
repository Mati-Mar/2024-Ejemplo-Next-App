"use client"
import Button from "@/components/Button";
import Title from "@/components/Title"

export default function buttonTest() {
    return(
        <div>
            <Title titulo="Home"/>
            <h2>Prueba de botones</h2>

            <Button text="Primario" state="primary"/>
            <Button text="Secundario" state="secondary"/>
            <Button text="Ok" state="ok"/>

        </div>
    )
}

    


