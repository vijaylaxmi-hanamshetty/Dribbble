import React from "react";

const Footer = () => {
  const mainLinks = [
    { href: "#hire-talent", text: "Hire Talent" },
    { href: "#inspiration", text: "Inspiration" },
    { href: "#blog", text: "Blog" },
    { href: "#about", text: "About" },
    { href: "#careers", text: "Careers" },
  ];

  const additionalLinks = [
    { href: "#terms", text: "Terms" },
    { href: "#privacy", text: "Privacy" },
    { href: "#cookies", text: "Cookies" },
    { href: "#jobs", text: "Jobs" },
    { href: "#designers", text: "Designers" },
    { href: "#freelancers", text: "Freelancers" },
    { href: "#tags", text: "Tags" },
    { href: "#places", text: "Places" },
    { href: "#resources", text: "Resources" },
  ];

  return (
    <footer className="text-black py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row  items-center mb-6 lg:justify-center md:justify-between sm:justify-between">
          <div className="font-cursive text-2xl font-semibold  ">Dribbble</div>
          <div className="flex space-x-6 justify-center px-10  ">
            {mainLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:underline font-serif"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
        <div className="pt-6">
          <div className="flex flex-col md:flex-row lg:justify-center sm:justify-between md:justify-between items-center">
            <p className="mb-4 md:mb-0 font-serif">&copy; 2024 Dribbble</p>
            <div className="flex flex-wrap space-x-6">
              {additionalLinks.map((link) => (
                <a key={link.href} href={link.href} className="hover:underline font-serif">
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
