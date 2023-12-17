import React from "react";

function Actions() {
  return (
    <div className="flex flex-row justify-between py-8 w-full">
      <i className="fa fa-refresh fa-2x" aria-hidden="true" style={{cursor: 'pointer'}}></i>

      <button className="p-4 bg-blue-950 w-[35px] h-[35px] rounded-full flex items-center justify-center">
        <i className="fa fa-plus text-white fa-1x" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default Actions;
