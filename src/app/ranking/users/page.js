"use client"

import { useSocket } from "@/hooks/useSocket"
import { useEffect } from "react";

export default function UsersRanking() {
    const {socket, isConnected} = useSocket();
    
    useEffect( ()=>
    {

    },[socket,isConnected]);

    return(
        <h1>Soy la ruta /ranking/users</h1>
    )
}