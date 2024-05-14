import React from "react"
import Embed from "./Embed"

const Mywork = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="text-8xl text-center">
          {" "}
          <span>My work</span>
        </div>
        <div className="text-sm text-[#cccccc] flex justify-center mt-4 mb-2">
          <div className="bg-[#131313] opacity-80 p-2 rounded-md max-w-[40rem]">
            {">"}{" "}
            <span className="ml-1 break-words text-[#99cc99] ">
              // Explore a curated selection of my latest projects and
              creations, showcasing my skills and expertise in web development.
              From web development to design, each project reflects my passion
              for innovation and attention to detail.
            </span>
          </div>
        </div>
        <Embed
          link={"https://www.siex.io/"}
          title="SIEX.IO"
          description="A decentralized exchange supporting ETH, BSC and SOL."
        />
      </div>
    </div>
  )
}

export default Mywork
