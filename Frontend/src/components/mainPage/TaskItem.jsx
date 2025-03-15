import React from 'react';

const TaskItem = React.memo(({ bgItem, emoji, bgEmoji, stateTask, bgStateTask, title, description, fontSize, setTask, iconId, statusId, idTask }) => {
    
    return (
        <div onClick={() => setTask(iconId, title, description, statusId, idTask)} className="cursor-pointer grid w-[550px] h-auto rounded-[15px] grid-cols-[auto_400px_auto] justify-center items-center gap-x-4 p-4" style={{ backgroundColor: bgItem || "#E3E8EF" }}>

            <div className="flex w-[45px] h-[45px] rounded-[10px] justify-center items-center" style={{ backgroundColor: bgEmoji ? `${bgEmoji}` : "#F8FAFC" }}>
                <img src={emoji} className="w-[25px] h-[25px]" alt="emoji" />
            </div>

            <h2 className="text-[20px] font-semibold" style={{ fontSize: fontSize && "16px" }}>{title}</h2>

            <div className="flex w-[45px] h-[45px] rounded-[10px] justify-center items-center" style={{ backgroundColor: bgStateTask && `${bgStateTask}` }}>
                {stateTask && <img src={stateTask} className="w-[25px] h-[25px]" alt="stateTask" />}
            </div>

            <p className="col-start-2 row-start-2">{description}</p>

        </div>
    );
});

export default TaskItem;
