import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import Intro from "./pages/Intro.jsx";


function App() {
  return (
    <div>
      <Navbar />
      <Intro />
    </div>
  );
}

export default App;
