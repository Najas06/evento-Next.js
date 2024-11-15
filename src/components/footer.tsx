import Link from "next/link";
import path from "path";

const routes = [
  {
    path: "/terms-conditions",
    name: "Terms & Conditions",
  },
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
  },
];
const Footer = () => {
  return (
    <footer className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-sm text-white/25">
      <small className="text-xs">Copyright &copy; 2024. All rights reserved.</small>
      <ul className="flex gap-x-3 sm:gap-x-8">
        {
          routes.map((route) => (
            <li key={route.path}>
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))
        }
      </ul>
    </footer>
  );
};

export default Footer;
