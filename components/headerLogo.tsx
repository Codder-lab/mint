import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="/logo.svg" alt="Logo" height={30} width={30} />
        <p className="font-bold text-white text-2xl ml-1.5">Mint</p>
      </div>
    </Link>
  );
};
