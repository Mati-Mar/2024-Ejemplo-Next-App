"use client"

import Button from "@/components/Button";
import { useSocket } from "@/hooks/useSocket"
import { useEffect, useState } from "react";

export default function socketPage() {
    
    const {socket, isConnected} = useSocket();
    const [message, setMessage] = useState("")

    useEffect(() => {
        if(!socket)
            return
        
        socket.on("pingAll", (data) => {
            console.log(data);
        })

        socket.on("newMessage", (data) => {
            console.log(data);
        })
    },[socket,isConnected])

    function pingAll() {
        socket.emit("pingAll", {
            message: "Hola desde mi compu"} //Se lo mando como objeto
        );
    }

    function changeMessage(event) {
        setMessage(event.target.value)
    }

    function sendMessage() {
        socket.emit("sendMessage", {message: message});
    }

    function joinRoom() {
        socket.emit("joinRoom", {room: "pio"})
    }    

    return(
        <>
            <Button onClick={pingAll} text="Ping All"/>
            <br></br>

            <Button onClick={joinRoom} text="Join Room"/>
            <br></br>

            <input onChange={changeMessage}></input>
            <Button onClick={sendMessage} text="Send Message"/>
            <br></br>

        </>
    )
}