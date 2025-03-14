import TaskItem from "./TaskItem"
import add from "../../assets/add.webp"
import books from "../../assets/books.webp"
import clock from "../../assets/clock.webp"
import closeWhite from "../../assets/closeWhite.webp"
import coffe from "../../assets/coffe.webp"
import done from "../../assets/done.webp"
import manLift from "../../assets/manLifting.webp"
import time from "../../assets/time.webp"
import laptop from "../../assets/laptod.webp"
import msm from "../../assets/msm.webp"
import CreateDeleteEditTask from "../SideDetails/CreateDeleteEditTask"
import { useState } from "react"
import close from "../../assets/closeWhite.webp"
import React from "react";

const defaultItems = [
    { 
        bgItem: "#F5D565",
        emoji: clock,
        stateTask: time,
        bgStateTask: "#E9A23B",
        title: "Task in Progress",
        description: "",
        iconId: 6,
        statusId: 1

    },
    {
        bgItem: "#A0ECB1",
        emoji: manLift,
        stateTask: done,
        bgStateTask: "#32D657",
        title: "Task Completed",
        description: "",
        iconId:4,
        statusId: 2
    },
    {
        bgItem: "#F7D4D3",
        emoji: coffe,
        stateTask: closeWhite,
        bgStateTask: "#DD524C",
        title: "Task Won't Do",
        description: "",
        iconId: 3,
        statusId: 3
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
    
    const [allDataTask, setAllDataTask] = useState(defaultItems);
    const [animation, setAnimation] = useState(false);
    const [showCDEComponent, setShowCDEComponent] = useState(false);
    const [selectedTask, setselectedTask] = useState({});
    
    function handleTask(iconId, title, description, statusId, idTask) {       
        setselectedTask({iconId, title, description, statusId, idTask});
        setAnimation(false);
        setShowCDEComponent(true);
    }

    function handleAnimation() {
        setAnimation(true)
        setTimeout(() => {
            setShowCDEComponent(false)
        },[1000]);
    }

    function saveTask(data) {

        const iconMap = {
            1: laptop,
            2: msm,
            3: coffe,
            4: manLift,
            5: books,
            6: clock,
        };
    
        const statusMap = {
            1: { status: time, bgTask: "#F5D565", bgStatus: "#E9A23B" },
            2: { status: done, bgTask: "#A0ECB1", bgStatus: "#32D657" },
            3: { status: close, bgTask: "#F7D4D3", bgStatus: "#DD524C" },
        };

        const emoji = iconMap[data.selectedIcon] || undefined;
        const { status, bgTask, bgStatus } = statusMap[data.selectedStatus] || {};
        
        let iconId;
        if (data.selectedIcon === undefined) {
            // Si selectedIcon no está definido, asignar un iconId único
            iconId = allDataTask.length + 1;
        } else {
            // Si selectedIcon está definido, usar ese valor
            iconId = data.selectedIcon;
        }

        const newItem = {
            bgItem: bgTask,
            emoji: emoji,
            stateTask: status,
            bgStateTask: bgStatus,
            title: data.title,
            description: data.description,
            iconId: data.selectedIcon,
            statusId: data.selectedStatus,
        };
    
        const existingItemIndex = allDataTask.findIndex(
            (item) => item.iconId === iconId
        );

        setAllDataTask((prev) => {
            if (existingItemIndex !== -1) {
                // Si el iconId existe, actualiza el objeto existente
                return prev.map((item, index) =>
                    index === existingItemIndex ? { ...item, ...newItem } : item
                );
            } else {
                // Si el iconId no existe, agrega un nuevo ítem con un iconId único
                return [
                    ...prev,
                    {
                        ...newItem,
                        iconId: prev.length + 1, // Asignar un iconId único
                    },
                ];
            }
        });
        handleAnimation();
    }

    return (
        <div disabled={false} className="flex flex-col gap-6 mb-10">
            {allDataTask.map((item, index) => (
                <TaskItem
                    key={index}
                    bgItem={item.bgItem}
                    emoji={item.emoji}
                    stateTask={item.stateTask}
                    bgStateTask={item.bgStateTask}
                    title={item.title}
                    description={item.description}
                    setTask={handleTask}
                    iconId={item.iconId}
                    statusId={item.statusId}
                    idTask={index}
                />
                ))}
            {/*Btn To Add Tasks*/}
            <TaskItem bgItem={"#F5E8D5"} idTask={allDataTask.length} emoji={add} bgEmoji={"#E9A23B"} title={"Add new task"} fontSize={true} setTask={handleTask}/>
            {showCDEComponent && <CreateDeleteEditTask data={selectedTask} isExiting={animation} closeAnimation={handleAnimation} saveTask={saveTask}/>}
        </div>
    )
}