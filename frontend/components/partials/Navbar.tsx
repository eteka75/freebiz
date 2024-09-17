import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  BellIcon,
  Heart,
  MessageSquareText,
  PlusSquare,
  SearchIcon,
  UserCircleIcon,
} from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container px-4  pt-3  flex items-center justify-between">
        <div className="flex items-center space-x-2 pb-3">
          {/* <Link href="/" className="text-xl font-bold text-primary me-3">
            Freeble / Pelokie / Freedeal
          </Link> */}

          <Link
            href="/"
            className="text-xl  uppercase font-bold text-primary_ me-3"
          >
            ShopStream
          </Link>

          {/* Search Bar */}
          <div className="md:flex hidden md:min-w-lg items-center w-full max-w-sm relative ">
            <Input
              type="text"
              placeholder="Search..."
              className="lg:min-w-60 rounded-sm py-5"
            />
            <Button
              variant="ghost"
              className="h-8 w-8 p-1 rounded-sm absolute right-1 hover:bg-primary hover:opacity-85 bg-primary text-white  -ms-10"
            >
              <SearchIcon className="w-5 h-5 text-white  p-0" />
            </Button>
          </div>
          <Button className="bg-primary md:flex hidden py-5 border-0 font-bold text-white mx-1">
            <PlusSquare className="h-4 w-4 me-1" /> Deposer une annonce
          </Button>
        </div>
        <div className="md:flex hidden items-center ">
          {/* Right Menu: Notification & User Profile */}
          <div className="flex items-center space-x-1">
            <Popover>
              <PopoverTrigger asChild>
                <Link
                  href={"/"}
                  className="relative p-1 flex flex-col items-center justify-center border-b-4 border-transparent hover:border-b-4 hover:border-primary transition-all duration-300"
                >
                  <BellIcon className="w-6 h-6 mb-1 text-gray-600" />
                  {/* Notification Badge 
                  <span className="absolute top-0 right-0 block h-2 w-2 bg-red-600 rounded-full" />
                  */}
                  <div className="text-xs text-ellipsis text-nowrap w-22 tex-center overflow-hidden">
                    Mes recherches
                  </div>
                </Link>
              </PopoverTrigger>

              <PopoverContent className="w-64">
                <p className="p-4 text-sm text-gray-600">
                  No new notifications
                </p>
              </PopoverContent>
            </Popover>
            <Link
              href={"/"}
              className="relative p-1 flex flex-col items-center justify-center border-b-4 border-transparent hover:border-b-4  hover:border-primary transition-all duration-300"
            >
              <Heart className="w-6 h-6 text-gray-600 mb-1" />
              <div className="text-xs text-ellipsis text-center text-nowrap w-12 overflow-hidden">
                Favoris
              </div>
            </Link>
            <Link
              href={"/"}
              className="relative p-1 flex flex-col items-center justify-center border-b-4 border-transparent hover:border-b-4  hover:border-primary transition-all duration-300"
            >
              <MessageSquareText className="w-6 h-6 text-gray-600 mb-1" />
              <div className="text-xs text-ellipsis text-center text-nowrap w-16 overflow-hidden">
                Messages
              </div>
            </Link>

            <Popover>
              <PopoverTrigger asChild>
                <Link
                  href={"/"}
                  className="relative p-1 flex flex-col items-center justify-center border-b-4 border-transparent hover:border-b-4 hover:border-primary transition-all duration-300"
                >
                  <UserCircleIcon className="w-6 h-6 text-gray-600 mb-1" />
                  <div className="text-xs text-ellipsis text-center text-nowrap w-20 overflow-hidden">
                    Se connecter
                  </div>
                </Link>
              </PopoverTrigger>
              <PopoverContent className="w-40 absolute -right-10  origin-top-right">
                <div className="flex flex-col space-y-2 px-1">
                  <Link
                    href="/profile"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/settings"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Settings
                  </Link>
                  <Link
                    href="/logout"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Logout
                  </Link>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  );
}
