"use client"
import React, { useState } from "react"
import { Link, Element } from "react-scroll"

const Navbar = () => {
  const [hamburgerState, setHamburgerState] = useState(false)

  const hamburgerToggle = () => {
    if (!hamburgerState) {
      return setHamburgerState(true)
    }
    setHamburgerState(false)
  }

  return (
    <div className="bg-[#131313] opacity-80 p-1 phone:p-4 rounded-md border-[#262626] border-[0.1px] m-2">
      <div className="flex  space-x-4 justify-between phone:justify-normal ">
        <Link
          to="#"
          smooth={true}
          duration={500}
          className="font-mono font-bold italic text-3xl phone:text-base self-center flex text-white cursor-pointer"
        >
          LUC
        </Link>

        <Link
          to="mywork"
          smooth={true}
          duration={500}
          className="hidden phone:block cursor-pointer text-[#cccccc] hover:text-[#fff]"
        >
          My work
        </Link>
        <Link
          to="tech"
          smooth={true}
          duration={500}
          className="hidden phone:block cursor-pointer text-[#cccccc] hover:text-[#fff]"
        >
          Tech
        </Link>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="hidden phone:block cursor-pointer text-[#cccccc] hover:text-[#fff]"
        >
          Contact
        </Link>

        <div
          onClick={hamburgerToggle}
          className="block phone:hidden cursor-pointer"
        >
          {hamburgerState ? (
            <svg
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              className="w-[2.5rem] h-[2.5rem]"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#a5a5a5"
                  d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
                ></path>
              </g>
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="w-[2.5rem] h-[2.5rem]"
            >
              <title>Menu</title>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g id="Menu">
                  <rect
                    id="Rectangle"
                    fill-rule="nonzero"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  ></rect>
                  <line
                    x1="5"
                    y1="7"
                    x2="19"
                    y2="7"
                    id="Path"
                    stroke="#cccccc"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></line>
                  <line
                    x1="5"
                    y1="17"
                    x2="19"
                    y2="17"
                    id="Path"
                    stroke="#cccccc"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></line>
                  <line
                    x1="5"
                    y1="12"
                    x2="19"
                    y2="12"
                    id="Path"
                    stroke="#cccccc"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></line>
                </g>
              </g>
            </svg>
          )}
        </div>
      </div>
      {hamburgerState ? (
        <div className="block phone:hidden">
          <Link
            to="mywork"
            smooth={true}
            duration={500}
            className="cursor-pointer text-[#cccccc] hover:text-[#fff]"
          >
            My work
          </Link>
          <br />
          <Link
            to="tech"
            smooth={true}
            duration={500}
            className="cursor-pointer text-[#cccccc] hover:text-[#fff]"
          >
            Tech
          </Link>
          <br />
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer text-[#cccccc] hover:text-[#fff]"
          >
            Contact
          </Link>
        </div>
      ) : null}
    </div>
  )
}

export default Navbar
