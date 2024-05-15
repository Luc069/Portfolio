import Image from "next/image"
import Navbar from "./components/Navbar"
import Introduction from "./components/Introduction"
import Mywork from "./components/Mywork"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import { Link, Element } from "react-scroll"

export default function Home() {
  return (
    <main className=" bg-[#0d0d0d] min-h-screen justify-between px-24  text-white scroll-smooth">
      <div className="z-50 w-full phone:w-auto fixed top-4 inset-x-0 flex justify-center">
        <Navbar />
      </div>

      <div id="#" className="h-[100vh]">
        <Introduction />
      </div>
      <div id="mywork" className="h-[100vh]">
        <Mywork />
      </div>
      <div id="skills" className="h-[100vh]">
        <Skills />
      </div>
      <div id="contact" className="h-[100vh]">
        <Contact />
      </div>
    </main>
  )
}
