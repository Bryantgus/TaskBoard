import React from "react";
import done1 from "../../assets/done1.webp";

const StatusItem = React.memo(({ statusImg, status, bg, done, id, idSelected, handleStatus }) => {    
  return (
    <div
        onClick={() => handleStatus(id)}
        id={id}
        className={`
            w-[300px] h-[50px] border-[2px] border-current cursor-pointer
            flex justify-start items-center gap-2 rounded-[10px]
            transition-all duration-300 ease-in-out border
            ${id === idSelected ? "border-sky-700" : "border-neutral-50"}
        `}
        >

      <div
        className="flex justify-center items-center w-[35px] rounded-[10px] h-[35px] cursor-pointer ml-2"
        style={{ backgroundColor: bg }}
      >
        <img src={statusImg} className="w-[20px] h-[20px]" alt="" />
      </div>
      <span className="mr-30">{status}</span>
      <div
        className="w-[20px] h-[20px] rounded-full flex justify-center items-center m-auto"
        style={{ backgroundColor: done ? "#3662E3" : "transparent" }}
      >
        {done && <img src={done1} className="w-[15px] h-[15px]" alt="" />}
      </div>
    </div>
  );
});

export default StatusItem