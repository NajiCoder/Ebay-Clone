"use client";

export default function SubMenu() {
  const menuItems = [
    { id: 1, name: "Home" },
    { id: 2, name: "Saved" },
    { id: 3, name: "Electronics" },
    { id: 4, name: "Fashion" },
    { id: 5, name: "Motors" },
    { id: 6, name: "Collectibles & Art" },
    { id: 7, name: "Home & Garden" },
    { id: 8, name: "Sporting Goods" },
    { id: 9, name: "Toys" },
    { id: 10, name: "Health & Beauty" },
    { id: 11, name: "Sell" },
  ];

  return (
    <main>
      <div id="SubMenu" className="border-b mt-2">
        <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
          <ul
            id="SubMenu__left"
            className="flex items-center text-xs text-gray-700 px-2 h-8"
          >
            {menuItems.map((item) => (
              <li key={item.id} className="px-3 hover:underline cursor-pointer">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
