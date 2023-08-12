import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";

export default function MainHeader() {
  return (
    <main>
      <div id="MainHeader" className="border-b mt-2">
        <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
          <div className="flex items-center w-full bg-white">
            <div className="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto">
              <Link href="/">
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={120}
                  height={40}
                />
              </Link>
              <div className="w-full">
                <div className="relative">
                  <div className="flex items-center">
                    <div className="relative flex items-center border-2 border-gray-900 rounded-md w-full p-2">
                      <button className="flex items-center">
                        <AiOutlineSearch size={22} />
                      </button>
                      <input
                        type="text"
                        placeholder="Search for anything"
                        className="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none"
                      />
                    </div>
                    <button className="flex items-center bg-zinc-800 text-sm font-semibold text-white p-3 ml-2 px-14 rounded-md">
                      Search
                    </button>
                    <span className="text-xs font-semibold px-2 hover:text-blue-400 cursor-pointer">
                      Advanced
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
