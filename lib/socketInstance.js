'use client'
import { io } from "socket.io-client";

let socket;
// const ENDPOINT = "http://localhost:3001";
const ENDPOINT = "https://study-nex-backend.vercel.app";


socket = io(ENDPOINT);

export default socket;
