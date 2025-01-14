import Link from "next/link";

export default function Header(){
    return(
        <header>
          <div className="container flex items-center justify-between mx-auto my-4">
          <Link href={'/'} className="font-bold text-xl">Job board
          </Link> 
          <nav className="flex gap-4 *:py-2 *:px-4 *:rounded-md ">
            <Link className="bg-gray-200 " href="/login" > Login </Link>
            <Link className="bg-blue-600" href="/post" > Post a Job </Link>
          </nav>
          </div>
        </header>
    );
}