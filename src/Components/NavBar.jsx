import { FaCaretDown } from "react-icons/fa6";

export default function NavBar() {
  return (
    <div className="navbar-wrapper relative">
      <nav>
        <ul className="flex items-center justify-between">
          <div>
            <li className="flex">
              <img src="/Group.svg" alt="" />
              <img src="/Group-icon.svg" alt="" />
            </li>
          </div>
          <div className="flex gap-[2rem] items-center justify-center  font-bold">
            <button className="cursor-pointer border-2 border-[#099137] text-[#099137] text-[14px] font-bold px-10 py-[5px] rounded-full my-4">
              <span className="">+</span> Create events
            </button>
            <div>
              <button className=" rounded-full flex items-center justify-center cursor-pointer bg-[#EBEBEB40] inset-shadow-2xs py-[5px] px-5">
                <span className="bg-[#099137] text-white rounded-full px-2 py-1 mr-2">
                  GIZ
                </span>
                <span className="mr-10">Giz</span>
                <span className="text-[20px] text-[#455A64]">
                  <FaCaretDown />
                </span>
              </button>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
}
