import clsx from "clsx";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

interface LinkPorps{
  to: string;
  children: React.ReactNode;
}
export function LinkContent({to, children}: LinkPorps) {
  return(
    <NavLink
      to={to}
      className={({ isActive }) =>{
        return clsx(
          'flex items-center text-sm gap-2 py-2 px-3 rounded group',
          {
            "bg-gray-50 font-semibold": isActive,
            "text-black": isActive,
            "text-gray-300": !isActive,
          }
        )
      }}
    >
      <span className="truncate flex-1">
        {children}
      </span>
    </NavLink>
  )
}