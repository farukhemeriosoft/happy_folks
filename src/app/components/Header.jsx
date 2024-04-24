import React from "react";
import Image from "next/image";
import logo from './../../images/logo.png'

const Header = () => {
  return (
    <header className="container mx-auto font-graphik">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between flex flex-row">
          <div className="basis-1/4">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={logo}
                alt="Vercel Logo"
                className="dark:invert"
                width={160}
                height={24}
                priority
              />
            </a>
          </div>
          <div className="basis-1/2">
            <ul className="text-darkBlue flex flex-wrap items-center justify-center mb-6 text-sm font-medium sm:mb-0 dark:text-darkBlue">
              <li>
                <a href="#" className="hover:underline me-4 md:me-12">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-12">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-12">
                  Our Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="basis-1/4 text-end">
            <a
              href="#"
              class="rounded-md bg-themeGray px-5 py-2.5 text-sm font-bold text-black shadow-sm hover:bg-lightBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-themeGray"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
