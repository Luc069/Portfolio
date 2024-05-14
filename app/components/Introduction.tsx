import React from "react"

const Introduction = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="text-8xl text-center">
          {" "}
          <span className="mr-3">Hello i'm</span>{" "}
          <span className="font-mono font-bold italic">LUC</span>
        </div>
        <div className="text-sm text-[#cccccc] flex justify-center mt-4">
          <div className="bg-[#131313] opacity-80 p-2 rounded-md">
            {">"}{" "}
            <span className="ml-1 text-[#99cc99]">
              // your go-to frontend developer with over 3 years of experience!
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
