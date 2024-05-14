import Image from "next/image"
import Navbar from "./components/Navbar"
import Introduction from "./components/Introduction"
import Mywork from "./components/Mywork"
import Technologies from "./components/Technologies"
import Contact from "./components/Contact"
import { Link, Element } from "react-scroll"

export default function Home() {
  return (
    <main className=" bg-[#0d0d0d] min-h-screen justify-between px-24  text-white scroll-smooth">
      <div className="z-50 w-full phone:w-auto fixed left-0 top-0 phone:left-auto phone:top-auto phone:pt-10">
        <Navbar />
      </div>
      <div id="#" className="h-[100vh]">
        <Introduction />
      </div>
      <div id="mywork" className="h-[100vh]">
        <Mywork />
      </div>
      <div id="tech" className="h-[100vh]">
        <Technologies />
      </div>
      <div id="contact" className="h-[100vh]">
        <Contact />
      </div>
    </main>
  )
}
