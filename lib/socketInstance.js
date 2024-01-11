'use client'
import { io } from "socket.io-client";

let socket;
const ENDPOINT = "https://study-nex-backend.onrender.com";

socket = io(ENDPOINT);

export default socket;
