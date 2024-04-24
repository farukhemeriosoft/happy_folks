import React from "react";
import Image from "next/image";
import footerLogo from './../../images/footer-logo.png'

const Footer = () => {
  return (
    <footer className="container mx-auto">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between mb-8">
          <div>
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={footerLogo}
              alt="Vercel Logo"
              className="dark:invert"
              width={160}
              height={24}
              priority
            />
          </a>
          </div>
          <div>
          <ul className="text-base font-sfProRounded flex flex-wrap items-center mb-6 font-medium text-darkBlue-500 sm:mb-0 dark:text-darkBlue-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Product
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Mission
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
          </ul>
          </div>
          <div>
          <a href="#" class="font-sfProRounded rounded-md bg-skyBlue px-3.5 py-2.5 text-sm font-medium text-darkBlue shadow-sm hover:bg-lightBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-skyBlue"><span className="circle"></span>System Status</a>
          </div>
        </div>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-gray-400">
          <li>
            <span className=" me-4 md:me-6 block text-sm sm:text-left dark:text-gray-400">
              © {new Date().getFullYear()}{" "}
              <a href="/" className="hover:underline">
                Happy Folks
              </a>
            </span>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Cookies
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
