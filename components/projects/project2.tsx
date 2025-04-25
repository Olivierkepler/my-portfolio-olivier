"use client";

import { motion } from "framer-motion";
import Projecta from "./Projecta";

export default function Project2() {
  return (
    <>
      <div
        className="sticky top-0 z-40 h-screen flex items-center justify-center"
        style={{ backgroundColor: "#F7E37A" }} // Change this HEX to any color you want!
      >
        <Projecta />    
      </div>
    </>
  );
}
