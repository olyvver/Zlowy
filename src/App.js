import React from 'react';
import Navbar from "./routes/components/Navbar/Navbar";
import ToHire from "./routes/ToHire";

export default function App() {
  document.body.style.backgroundColor = '#f8fdf9';
        document.body.style.margin = '0';
  return (
    <>
     <ToHire/>
    </>
  );
}