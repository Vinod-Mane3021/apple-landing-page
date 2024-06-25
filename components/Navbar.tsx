import { navLists } from "@/constants"
import { appleImg, bagImg, searchImg } from "@/utils"
import Image from "next/image"

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <Image src={appleImg} height={18} width={14} alt="Apple image"/>
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((item, index) => (
            <div key={index} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all duration-300">
              {item}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <Image className="cursor-pointer" src={searchImg} alt="search image" width={18} height={18}/>
          <Image className="cursor-pointer" src={bagImg} alt="bag image" width={18} height={18}/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar