import React from "react";

function Actions() {
  return (
    <div className="flex flex-row justify-between items-center py-4 pt-8 w-full">
      <button onClick={()=>console.log('Refreshing...')}>
        <i
          className="fa fa-refresh fa-lg text-primary"
          style={{ cursor: "pointer" }}
        ></i>
      </button>

      <button className="p-4 bg-primary w-[35px] h-[35px] rounded-full flex items-center justify-center">
        <i className="fa fa-plus text-white fa-sm"></i>
      </button>
    </div>
  );
}

export default Actions;
