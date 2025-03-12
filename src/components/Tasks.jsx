import TaskItem from "./TaskItem"
import add from "../assets/add.webp"
import books from "../assets/books.webp"
import clock from "../assets/clock.webp"
import closeWhite from "../assets/closeWhite.webp"
import coffe from "../assets/coffe.webp"
import done from "../assets/done.webp"
import manLift from "../assets/manLifting.webp"
import time from "../assets/time.webp"
import CreateDeleteEditTask from "./CreateDeleteEditTask"
import { useState } from "react"
import React from "react";

const defaultItems = [
    {
        bgItem: "#F5D565",
        emoji: clock,
        stateTask: time,
        bgStateTask: "#E9A23B",
        title: "Task in Progress",
        description: "",

    },
    {
        bgItem: "#A0ECB1",
        emoji: manLift,
        stateTask: done,
        bgStateTask: "#32D657",
        title: "Task Completed",
        description: "",

    },
    {
        bgItem: "#F7D4D3",
        emoji: coffe,
        stateTask: closeWhite,
        bgStateTask: "#DD524C",
        title: "Task Won't Do",
        description: "",

    },
    {
        bgItem: "#E3E8EF",
        emoji: books,
        stateTask: "",
        title: "Task To Do",
        description: "Work on a Challenge on devChallenges.io, leadr JavaScript",

    }
]

export default function Tasks() {
    console.log("Render Tasks");
    const [animation, setAnimation] = useState(false);
    
    return (
        <div className="flex flex-col gap-6 mb-10">
            <button onClick={() => {setAnimation(prev => !prev)
            }}>animation</button>
            {defaultItems.map((item, index) => {
                return (
                    <TaskItem 
                    key={index}
                        bgItem={item.bgItem}
                        emoji={item.emoji}
                        stateTask={item.stateTask}
                        bgStateTask={item.bgStateTask}
                        title={item.title}
                        description={item.description}
                        />
                )
            })}
            {/*Btn To Add Tasks*/}
            <TaskItem bgItem={"#F5E8D5"} emoji={add} bgEmoji={"#E9A23B"} title={"Add new task"} fontSize={true}/>
            <CreateDeleteEditTask isExiting={animation}/>
        </div>
    )
}