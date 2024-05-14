"use client"
import Image from "next/image"
import React from "react"
import SIEX from "../../public/SIEXIO.png"

const Embed = (props: { title: string; description: string; link: string }) => {
  return (
    <div
      onClick={() => window.open(props.link, "_blank")}
      className="bg-[#131313] opacity-80 p-2 cursor-pointer rounded-md max-w-full sm:max-w-[40rem] w-full sm:w-auto"
    >
      <div className="text-white text-xl mt-1">{props.title}</div>
      <div className="text-[#CCCCCC] text-sm">{props.description}</div>
    </div>
  )
}

export default Embed
