import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] hover:text-white relative group transition-all duration-300"
    >
      {title}
      <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

export default NavLink;
