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
                <nav className="navBar">
                    <ul>
                        { 
                        (menuItems.map((item) => (
                        <li key={item.id}>
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