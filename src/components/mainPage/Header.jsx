import React from "react";

export default function Header() {
    return (
        <div className="grid grid-cols-[auto_auto_auto] justify-center items-center gap-x-3">
            <img src="/Logo.webp" className="w-[40px] h-[40px]" alt="logo" />
            <h1 className="text-[40px]">My Task Board</h1>
            <img src="/Edit_duotone.webp" className="w-[20px] h-[20px]" alt="pencil" />
            <p className="col-start-2 row-start-2 text-[16px] font-regular">Tasks to keep organised</p>
        </div>
    )
}