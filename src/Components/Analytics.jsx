import { MdLibraryBooks } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { HiOutlineTicket } from "react-icons/hi2";

export default function Analytics() {
  return (
    <div className="flex-1">
      <AnalyticsCard />
      <p>lorem</p>
    </div>
  );
}

function AnalyticsCard() {
  return (
    <div className="flex items-center justify-between">
      <div className="bg-[#F2FEF8] py-10  px-15 rounded-lg shadow-md flex items-start gap-[5rem]">
        <div>
          <h2>Total Events </h2>
          <p className="font-bold text-3xl">3405</p>
        </div>
        <div className="p-2 rounded-md bg-[#DDF6E9]">
          <MdLibraryBooks className="text-2xl text-[#5B9778]" />
        </div>
      </div>
      <div className="bg-[#FEFFF3] py-10  px-15 rounded-lg shadow-md flex items-start gap-[5rem]">
        <div>
          <h2>Total Organizations </h2>
          <p className="font-bold text-3xl">35</p>
        </div>
        <div className="p-2 rounded-md bg-[#E7EAD8]">
          <GoPeople className="text-2xl text-[#B5C160]" />
        </div>
      </div>
      <div className="bg-[#FAF5FC] py-10  px-15 rounded-lg shadow-md flex items-start gap-[5rem]">
        <div>
          <h2>Total Tickets Sold </h2>
          <p className="font-bold text-3xl">678</p>
        </div>
        <div className="bg-[#E9DAED] p-2 rounded-md">
          <HiOutlineTicket className="text-2xl text-[#A782B2]" />
        </div>
      </div>
    </div>
  );
}
