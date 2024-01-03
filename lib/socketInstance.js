'use client'
import { io } from "socket.io-client";

let socket;
const ENDPOINT = "http://localhost:3001";


socket = io(ENDPOINT);

export default socket;
