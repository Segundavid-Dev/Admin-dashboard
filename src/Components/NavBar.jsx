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
          <div className="flex gap-[2rem] items-center justify-center">
            <button className="cursor-pointer border-2 border-[#099137] text-[#099137] text-[14px] font-bold px-10 py-[10px] rounded-full">
              <span className="">+</span> Create events
            </button>
          </div>
        </ul>
      </nav>
    </div>
  );
}
