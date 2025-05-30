import type { FC } from "react";
import {DarkThemeToggle, Navbar } from "flowbite-react";

const NavbarComponent: FC = function () {
  return (
    <Navbar fluid>
      <div className="w-full p-2 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <Navbar.Brand href="/">
              <img alt="" src="/images/logo.svg" className="mr-3 h-6 sm:h-8" />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Flowbite
              </span>
            </Navbar.Brand>
          </div>
          <div className="flex items-center gap-10">
            <DarkThemeToggle />
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;