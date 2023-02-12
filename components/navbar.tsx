import Link from "next/link"
import { useRouter } from "next/router"
const Navbar = ({ children }: { children: React.ReactNode}) => {

    const menuItems = [
        {
            id: 1,
            name: "Home",
            link: "/"
        },
        {
            id: 2,
            name: "Tasks",
            link: "/task/"
        }
    ]

    return(
        <div>
            <header>
                <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                    <ul className="container flex flex-wrap items-center justify-between mx-auto">
                        { 
                        (menuItems.map((item) => (
                        <li key={item.id}
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            <Link href={item?.link}>
                                {item?.name}
                            </Link>
                        </li>
                        )))}
                    </ul>
                </nav>
            </header>
            {children}
        </div>
    )
}

export default Navbar