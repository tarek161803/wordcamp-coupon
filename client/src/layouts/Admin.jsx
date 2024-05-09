import { GiftIcon, HomeIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";

import { NavLink, Outlet } from "react-router-dom";
import webappickIcon from "../assets/images/logo_blue.png";

const navigation = [
  { name: "Dashboard", link: "", icon: HomeIcon },
  { name: "Coupon", link: "coupon", icon: SparklesIcon },
  { name: "Gift", link: "gift", icon: GiftIcon },
  { name: "Search", link: "search", icon: MagnifyingGlassIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Admin = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-screen">
      <div className="flex lg:col-span-2 grow flex-col gap-y-5 overflow-y-auto bg-gray-900 py-4 px-4 lg:px-6">
        <div className="hidden lg:flex h-16 shrink-0 items-center">
          <img className="h-8 w-auto" src={webappickIcon} alt="WebAppick" />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      end
                      to={item.link}
                      className={({ isActive }) =>
                        classNames(
                          isActive ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white hover:bg-gray-800",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        )
                      }>
                      <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <div className="lg:col-span-10 p-2 lg:p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
