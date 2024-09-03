import { useState } from "react"

export default function Rendering() {
   const [variant, setVariant] = useState("register")
   return (
   <>
        <label>User</label>
        <input/>
        
        <label>Contraseña</label>
        <input/>

        {
            variant == "register" &&
            <>
                <label>Nombre y apellido</label>
                <input/>
            </>
        }
        
    </>
   );
}