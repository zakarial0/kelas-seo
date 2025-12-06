import React from "react"

const Input = ({ placeholder, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className="px-2 py-2 rounded-lg bg-bg bg-opacity-20 border-transparent flex-1 appearance-none text-[#8B4513] font-semibold focus:outline-none focus:ring-2 focus:border-transparent sm:width-full md:width-full xxs:text-sm font-lato"
    ></input>
  )
}

export default Input
