"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SeachInput from "../search-input";
// import { useState, useEffect } from "react";
import { UserButton, useAuth } from "@clerk/nextjs";
import { LogIn, Star } from "lucide-react";
import { dark } from "@clerk/themes";

export default function Navbar() {
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
  const { isSignedIn, isLoaded } = useAuth();

  return (
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

        {/* {isLoaded && isSignedIn && <Link href={"/favorites"}>My favorites</Link>} */}
      </div>

      <div className="flex items-center justify-center w-[33%]l">
        <SeachInput />
      </div>

      <div className="flex items-center justify-center gap-8">
        {isSignedIn ? (
          <>
            <Link
              className="text-neutral-300 hover:text-neutral-200"
              href={"/user/favorites"}
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
              className="text-neutral-300 hover:text-neutral-200
          bg-red-800 hover:bg-red-900 active:bg-red-950 active:shadow-inner
            font-semibold rounded-3xl"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </Button>
          </Link>
        )}

        {/* <Link href={"/sign-up"}>
          <Button
            className="text-neutral-300 hover:text-neutral-200"
            variant={"link"}
          >
            Sign up
          </Button>
        </Link> */}
      </div>
    </nav>
  );
}
