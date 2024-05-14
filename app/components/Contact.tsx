import React from "react"
import Embed from "./Embed"

const Contact = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="text-6xl phone:text-8xl  text-center">Contact</div>
        <div className="text-sm text-[#cccccc] flex justify-center mt-4 mb-2">
          <div className="bg-[#131313] opacity-80 p-2 rounded-md max-w-[40rem]">
            {">"}{" "}
            <span className="ml-1 break-words text-[#99cc99] ">
              // Get in touch and let's bring your ideas to life. Reach out for
              collaborations, inquiries, or just to say hello. I'm here to help
              you achieve your digital goals.
            </span>
          </div>
        </div>
        <div className="space-y-1">
          <Embed
            title="DISCORD"
            description="@luckyluciano69"
            link={"https://discord.com/"}
          />
          <Embed
            title="X"
            description="@xLuc0"
            link={"https://twitter.com/xLuc0"}
          />
          <Embed
            title="GITHUB"
            description="This website is open-source. Feel free to clone it."
            link={"https://github.com/Luc069"}
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
