import "../App.css"
import books from "../assets/books.webp"
import clock from "../assets/clock.webp"
import coffe from "../assets/coffe.webp"
import manLift from "../assets/manLifting.webp"
import laptod from "../assets/laptod.webp"
import msm from "../assets/msm.webp"
import IconItem from "./IconItem"
import StatusItem from "./StatusItem"
import { useState, useEffect } from "react"

const listIcons = [
  {
    id: 1,
    icon: laptod
  },
  {
    id: 2,
    icon: msm
  },
  {
    id: 3,
    icon: coffe
  },
  {
    id: 4,
    icon: manLift
  },
  {
    id: 5,
    icon: books
  },
  {
    id: 6,
    icon: clock
  },

]
export default function CreateDeleteEditTask({ isExiting }) {

  const [selectedIcon, setSelectedIcon] = useState(null);

  useEffect(() => {
    console.log(selectedIcon);
    
  },[selectedIcon])

  const handleBg = (id) => {
    setSelectedIcon(id);
  };
  return (
    <div className={`square ${isExiting ? "exiting" : "in"} bg-neutral-100`}>

      <div className="flex flex-col mt-5">

        <h3 className="text-[20px] font-semibold">Task details</h3>

        <div className="flex flex-col mt-5">
          <label htmlFor="name" className="text-[12px] text-neutral-400">Task name</label>
          <input autoComplete="off" id="name" type="text" placeholder="Enter a name" className="pl-3 border-stone-400 border-[1px] rounded-[10px] w-[630px] h-[45px] focus:outline-blue-500"/>
        </div>

        <div className="flex flex-col mt-5">
          <label htmlFor="description" className="text-[12px] text-neutral-400">Description</label>
          <textarea id="description" type="text" placeholder="Enter a short description" className="text-left align-text-top pt-2 h-[200px] pl-3 border-stone-400 border-[1px] rounded-[10px] w-[500px] h-[40px] focus:outline-blue-500"/>
        </div>
        
        <div className="flex flex-col mt-5">
          <label className="text-[12px] text-neutral-400">Icon</label>

          <div className="flex gap-2">
            {listIcons.map((item) => (
              <IconItem 
                key={item.id}
                icon={item.icon}
                id={item.id}
                handleBg={handleBg}
                idSelected={selectedIcon}
                />
            ))}
          </div>

          <div className="flex flex-col mt-5">
            <label className="text-[12px] text-neutral-400">Status</label>
            <div className="">
              <StatusItem />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}