import Link from "next/link";
import Image from "next/image";
import ThemeToogler from "./ThemeToogler";
import SearchInput from "./SearchInput";
const Header = () => {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" className="mr-10">
        <Image
          src="/logo.png"
          height={199}
          width={120}
          alt="Disney logo"
          className="cursor-pointer invert-0 dark:invert"
        />
      </Link>
      <div className="flex space-x-2">
        {/* Genre Dropdown */}
        <SearchInput />
        {/* Theme toogler */}
        <ThemeToogler />
      </div>
    </header>
  );
};

export default Header;
