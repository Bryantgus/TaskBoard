import './App.css'
import Header from './components/mainPage/Header'
import Tasks from './components/mainPage/Tasks'
import React from "react";

export default function App() {
  console.log("Render App");
  
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-2 justify-start items-start gap-10 mt-[90px]">
        <Header />
        <Tasks />
      </div>
    </div>
  )
}