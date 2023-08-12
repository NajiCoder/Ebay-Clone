"use client";

import Link from "next/link";
import Image from "next/image";

import { BsChevronDown } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function TopMenu() {
  return (
    <main>
      <div id="TopMenu" className="border-b mt-2">
        <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
          <ul
            id="TopMenu__left"
            className="flex items-center text-sm text-gray-700 px-2 h-8"
          >
            <li className="relative px-3">
              <Link
                href="/auth"
                className="flex items-center gap-2 hover:underline cursor-pointer"
              >
                <span>Log in</span>
                <BsChevronDown />
              </Link>
              <div
                id="Auth_dropdown"
                className="hidden absolute bg-white w-[200px] text-gray-700 z-40 top-[20px] left-0 border shadow-lg"
              >
                <div className="flex items-center justify-center gap-1 p-3">
                  <h1>put an image later</h1>
                  <h1 className="font-bold text-sm">Jhon weeks</h1>
                </div>
                <hr />
                <ul className="bg-white">
                  <li className="text-sm py-2 px-4 w-full hover:underline cursor-pointer text-blue-500 hover:text-blue-700">
                    <Link href="/orders">My orders</Link>
                  </li>
                  <li className="text-sm py-2 px-4 w-full hover:underline cursor-pointer text-blue-500 hover:text-blue-700">
                    Sign out
                  </li>
                </ul>
              </div>
            </li>
            <li className="px-3 hover:underline cursor-pointer">Daily deals</li>
            <li className="px-3 hover:underline cursor-pointer">
              Help & Contact
            </li>
          </ul>
          <ul
            id="TopMenu__right"
            className="flex items-center text-sm text-gray-700 px-2 h-8"
          >
            <li className="flex items-center gap-2 px-3 hover:underline cursor-pointer">
              <Image
                src="/images/rim_flag.png"
                alt="flag img"
                width={32}
                height={32}
              />
              <span>Ship to</span>
            </li>
            <li className="px-3 hover:underline cursor-pointer">
              <div className="indicator">
                <AiOutlineShoppingCart size={22} />
                <span className="badge badge-xs indicator-item">3</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
