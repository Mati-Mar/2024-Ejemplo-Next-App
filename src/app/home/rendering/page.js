"use client"
import { useState } from "react"
import styles from './page.module.css'

export default function Rendering() {
   const [variant, setVariant] = useState("register")
   return (
   <div className={styles.background}>
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
        
    </div>
   );
}