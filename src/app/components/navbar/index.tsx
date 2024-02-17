"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SeachInput from "../search-input";
import { useState, useEffect } from "react";
import { UserButton, useAuth } from "@clerk/nextjs";
import { LogIn, Star, X } from "lucide-react";
import { dark } from "@clerk/themes";
import { Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isSignedIn, isLoaded } = useAuth();

  const toggleSearchBar = () => {
    setIsOpen(!isOpen);
  };

  // const [color, setColor] = useState(false);

  // const changeNav = () => {
  //   if (typeof window !== "undefined") {
  //     if (window.scrollY >= 90) setColor(true);
  //     else setColor(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", changeNav);

  //   return () => {
  //     window.removeEventListener("scroll", changeNav);
  //   };
  // }, []);

  return (
    <>
      <nav
        className={`w-full flex items-center justify-between sticky top-0 
      flex-wrap z-50 bg-black/80 backdrop-blur-xl px-8 transition 
      duration-300 h-[10vh] border-b border-neutral-800`}
      >
        <div className="flex items-center justify-center gap-3">
          <Link
            className="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0"
            href={"/"}
            title="Cinepic"
          >
            <Image
              className="drop-shadow-lg"
              src="/logo.png"
              width={148}
              height={40}
              alt="Cinepic logo"
              priority={true}
            />
          </Link>
        </div>

        <div className="md:flex items-center justify-center w-[33%]l hidden">
          <SeachInput />
        </div>

        <div className="flex items-center justify-center gap-8">
          <button
            className="text-neutral-300 hover:text-neutral-200 flex md:hidden"
            title="Search"
            onClick={toggleSearchBar}
          >
            <Search />
          </button>

          {isSignedIn && isLoaded ? (
            <>
              <Link
                className="text-neutral-300 hover:text-neutral-200"
                href={"/favorites"}
                title="My Favorites"
              >
                <Star />
              </Link>

              <UserButton
                appearance={{ baseTheme: dark }}
                showName={false}
                afterSignOutUrl="/"
              />
            </>
          ) : (
            <Link href={"/sign-in"}>
              <Button
                className="text-neutral-300 hover:text-neutral-200 font-semibold rounded-full md:rounded-3xl
              bg-red-800 hover:bg-red-900 active:bg-red-950 active:shadow-inner"
              >
                <LogIn className="w-4 h-4 mr-2" />
                <p className="hidden md:block">Sign In</p>
              </Button>
            </Link>
          )}
        </div>
      </nav>

      {isOpen && (
        <div
          className="md:hidden absolute h-screen w-full flex items-center bg-black
          flex-col mb-4 py-2 px-4 transition duration-300 text-neutral-200 z-50"
        >
          <div className="w-full flex justify-end px-2 mt-1 mb-2">
            <button
              className="text-neutral-300 hover:text-neutral-200"
              onClick={toggleSearchBar}
              title="Close"
            >
              <X />
            </button>
          </div>
          <div className="mx-4">
            <SeachInput isOpen={isOpen} toggleSearchBar={toggleSearchBar} />
          </div>
        </div>
      )}
    </>
  );
}
