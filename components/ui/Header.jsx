import Link from "next/link";
import { Button } from "./button";
import Nav from "./Nav";



const Header = () => {
  return (

  <header className="py-8 xl:py-12 text-white bg-pink-50/20">
    <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
            <h1 className="text-4xl font-semibold">
                Husam <span className="text-accent">.</span>
            </h1>
        </Link>
        {/* desktop nav & hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
         <Nav />
         <Link href="contact">
          <Button className="ml-4">Hire Me</Button>
         </Link>
        </div>
    </div>
  </header>
  );
};

export default Header;
