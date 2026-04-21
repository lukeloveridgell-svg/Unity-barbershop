import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div style={{background:"#000", color:"#fff", minHeight:"100vh", textAlign:"center", padding:"20px"}}>
      <img src="/logo.png" style={{width:"200px", opacity:0.9}} />
      <motion.h1 initial={{opacity:0}} animate={{opacity:1}}>
        UNITY BARBERSHOP
      </motion.h1>

      <p>Community-driven. Clean cuts. Good vibes.</p>

      <a href="https://wa.me/447986977337?text=Hi%20Unity%20Barbershop%2C%20I%27d%20like%20to%20book%20an%20appointment.%0A%0AService%3A%20%0ADay%3A%20%0ATime%3A%20">
        <button style={{padding:"15px 25px", marginTop:"20px"}}>
          Book via WhatsApp
        </button>
      </a>

      <div style={{marginTop:"40px"}}>
        <h2>Opening Hours</h2>
        <p>Mon/Wed/Fri: 09:30–19:00</p>
        <p>Tue/Thu: 09:30–14:00</p>
        <p>Sat: 09:30–16:00</p>
        <p>Sun: Closed</p>
      </div>
    </div>
  );
}
