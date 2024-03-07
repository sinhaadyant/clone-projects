import Image from "next/image";
import Link from "next/link";
import GenreDropdown from "./GenreDropdown";
import SearchInput from "./SearchInput";
import ThemeToogler from "./ThemeToogler";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="fixed w-full top-0 flex items-center justify-between p-5 z-50 bg-black/[.5] hover:bg-black/[.8] duration-300">
      <Link href="/" className="mr-10">
        <Image
          src="https://links.papareact.com/a943ae"
          width={120}
          height={100}
          alt="Disney Logo"
          className={"cursor-pointer invert"}
        />
      </Link>

      <div className="flex space-x-2">
        <Link href="/movies" className="mr-2">
          <Button>Movies</Button>
        </Link>
        <Link href="/tv" className="mr-10">
          <Button>TV Shows</Button>
        </Link>
      </div>

      <div className="flex space-x-2">
        <GenreDropdown />
        <SearchInput />
        <ThemeToogler />
      </div>
    </header>
  );
}

export default Header;
