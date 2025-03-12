import { memo } from "react";

const IconItem = memo(({ icon, id, handleBg, idSelected }) => {
  return (
    <div
      id={id}
      onClick={() => handleBg(id)}
      className="w-[40px] h-[40px] flex justify-center items-center rounded-[10px] cursor-pointer"
      style={{ backgroundColor: idSelected === id ? "#F5D565" : "#E3E8EF" }}
    >
      <img src={icon} className="w-[25px] h-[25px]" alt="emoji" />
    </div>
  );
});

export default IconItem;
