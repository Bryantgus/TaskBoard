import "../../App.css"
import books from "../../assets/books.webp"
import clock from "../../assets/clock.webp"
import coffe from "../../assets/coffe.webp"
import manLift from "../../assets/manLifting.webp"
import laptod from "../../assets/laptod.webp"
import msm from "../../assets/msm.webp"
import IconItem from "./IconItem"
import StatusItem from "./StatusItem"
import { useState, useRef } from "react"
import time from "../../assets/time.webp"
import done from "../../assets/done.webp"
import close from "../../assets/closeWhite.webp"
import closeY from "../../assets/closeYellow.webp"
import trash from "../../assets/Trash.webp"
import done1 from "../../assets/done1.webp"

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

const infoStatus = [
  {
    id: 1,
    bg: "#E9A23B",
    text: "In Progress",
    done: false,
    img: time
  },
  {
    id: 2,
    bg: "#32D657",
    text: "Completed",
    done: false,
    img: done
  },
  {
    id: 3,
    bg: "#DD524C",
    text: "Won't do",
    done: false,
    img: close
  }
]
export default function CreateDeleteEditTask({ isExiting, closeAnimation, data, saveTask }) {
  console.log(data);
  
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const [selectedIcon, setSelectedIcon] = useState(data.iconId || 1);
  const [selectedStatus, setSelectedStatus] = useState(data.statusId);
  const idTaskRef = useRef(data.idTask);

  const handleBg = (id) => {
    setSelectedIcon(id);
  };

  const handleStatus = (id) => {
    setSelectedStatus(id);
  };

  return (
    <div className={`square ${isExiting ? "exiting" : "in"} bg-neutral-100`}>

      <div className="flex flex-col mt-5">
        <div className="flex justify-between">
          <h3 className="text-[20px] font-semibold">Task details</h3>
          <img src={closeY} className="w-[20px] h-[20px] cursor-pointer" alt="Close" onClick={closeAnimation} />
        </div>
        

        <div className="flex flex-col mt-5">
          <label htmlFor="name" className="text-[12px] text-neutral-400">Task name</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} autoComplete="off" id="name" type="text" placeholder="Enter a name" className="pl-3 border-stone-400 border-[1px] rounded-[10px] w-[630px] h-[45px] focus:outline-blue-500"/>
        </div>

        <div className="flex flex-col mt-5">
          <label htmlFor="description" className="text-[12px] text-neutral-400">Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} id="description" type="text" placeholder="Enter a short description" className="text-left align-text-top pt-2 h-[200px] pl-3 border-stone-400 border-[1px] rounded-[10px] h-[40px] focus:outline-blue-500"/>
        </div>
        
        <div className="flex flex-col mt-5">
          <span className="text-[12px] text-neutral-400">Icon</span>

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

          <div className="flex flex-col mt-grid">
            <span className="text-[12px] text-neutral-400 mb-1">Status</span>
              <div className="grid grid-cols-[auto_auto] gap-y-2">
                {infoStatus.map((item) => (
                  <StatusItem
                    key={item.id} 
                    id={item.id}
                    statusImg={item.img}
                    status={item.text}
                    bg={item.bg}
                    done={item.done}
                    handleStatus={handleStatus}
                    idSelected={selectedStatus}
                  />
                ))}
              </div>

          </div>
        </div>
          <div className="flex justify-end gap-4">

            <div className="cursor-pointer rounded-[20px] w-[120px] h-[35px] flex justify-center items-center gap-2 text-neutral-100 text-[14px]" style={{backgroundColor: "#97A3B6"}}>
              <span>Delete</span>
              <img src={trash} className="w-[20px] h-[20px]" alt="" />
            </div>

            <div onClick={() => saveTask({title, description, selectedIcon, selectedStatus, idTaskRef})} className="cursor-pointer rounded-[20px] w-[120px] h-[35px] flex justify-center items-center gap-2 text-neutral-100 text-[14px]" style={{backgroundColor: "#3662E3"}}>
              <span>Save</span>
              <img src={done1} className="w-[20px] h-[20px]" alt="" />
            </div>

          </div>
      </div>
    </div>
  );
}