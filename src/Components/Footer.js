import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const links = [
  { href: "#", text: "For designers" },
  { href: "#", text: "Hire talent" },
  { href: "#", text: "inspiration" },
  { href: "#", text: "Advertising" },
  { href: "#", text: "Blog" },
  { href: "#", text: "About" },
  { href: "#", text: "Careers" },
  { href: "#", text: "Support" },
  
];
const socialLinks = [
  { href: "#", icon: BsFacebook },
  { href: "#", icon: BsInstagram },
  { href: "#", icon: BsTwitter },
 
];

export function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between px-4">
      <p className=" font-cursive font-bold  text-3xl">
        Dribbble
      </p>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8  text-gray-950">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-blue-gray-500 font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          className="text-gray-900 hover:text-gray-900 dark:hover:text-white"
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
    </footer>
  );
}
