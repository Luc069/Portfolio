import React from "react"
import Embed from "./Embed"

const Technologies = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="text-8xl text-center">
          {" "}
          <span>Tech</span>
        </div>
        <div className="text-sm text-[#cccccc] flex justify-center mt-4 mb-2">
          <div className="bg-[#131313] opacity-80 p-2 rounded-md max-w-[40rem]">
            {">"}{" "}
            <span className="ml-1 break-words text-[#99cc99] ">
              // Crafting modern web experiences with ReactJS, NextJS, Supabase,
              and TailwindCSS for seamless functionality and stunning design.
            </span>
          </div>
        </div>
        <div className="space-y-1">
          <Embed
            title="REACT.JS"
            description="Empowering dynamic user interfaces with its efficient, component-based architecture."
            link={"https://react.dev/"}
          />
          <Embed
            title="NEXT.JS"
            description="Turbocharging web development with built-in server-side rendering and simplified routing."
            link={"https://nextjs.org/"}
          />
          <Embed
            title="SUPABASE"
            description="Powering real-time databases and authentication for seamless backend development."
            link={"https://supabase.com/"}
          />
          <Embed
            title="TAILWINDCSS"
            description="Streamlining styling with utility-first approach for rapid and consistent design."
            link={"https://tailwindcss.com/"}
          />
        </div>
      </div>
    </div>
  )
}

export default Technologies
