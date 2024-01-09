'use client'
import { io } from "socket.io-client";

let socket;
const ENDPOINT = "http://localhost:4000";
// const ENDPOINT = "https://study-nex-backend.onrender.com";


socket = io(ENDPOINT);

export default socket;
