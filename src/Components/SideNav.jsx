import { GoHomeFill } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import { BiTransfer } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { RiLogoutCircleRLine } from "react-icons/ri";

export default function SideNav() {
  return (
    <ul className="bg-[#F2F2F2] w-24 h-[65vh] rounded-2xl text-[#868686] flex flex-col items-center justify-center text-[12px]">
      <li className="flex flex-col items-center cursor-pointer text-black font-bold">
        <span className="bg-[#EDEDED] border rounded-full p-2 ">
          <GoHomeFill />
        </span>
        Home
      </li>
      <li className="flex flex-col items-center cursor-pointer">
        <span className="bg-[#EDEDED] border rounded-full p-2">
          <FaRegUserCircle />
        </span>
        Client
      </li>
      <li className="flex flex-col items-center cursor-pointer">
        <span className="bg-[#EDEDED] border rounded-full p-2">
          <IoWalletOutline />
        </span>
        Transactions
      </li>

      <li className="flex flex-col items-center cursor-pointer mb-[2rem]">
        <span className="bg-[#EDEDED] border rounded-full p-2">
          <BiTransfer />
        </span>
        Subscriptions
      </li>
      <li className="flex flex-col items-center cursor-pointer">
        <span className="bg-[#EDEDED] border rounded-full p-2">
          <CiSettings />
        </span>
        Settings
      </li>
      <li className="flex flex-col items-center cursor-pointer">
        <span className="bg-[#EDEDED] border rounded-full p-2">
          <RiLogoutCircleRLine />
        </span>
        Logout
      </li>
    </ul>
  );
}
