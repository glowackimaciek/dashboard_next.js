"use client"
import styles from "@/app/ui/navbar/navbar.module.css"
import { usePathname } from "next/navigation"
import { FaSearch,  FaRocketchat, FaRegBell, FaGlobe  } from "react-icons/fa";


const Navbar = () => {

    const pathname = usePathname()

    return (
        <div className={styles.mainMenu}>
        <div className={styles.container}>
            <div className={styles.title}>{pathname.split("/").pop()}</div>
            <div className={styles.menu}>
                <div className={styles.search}>
                    <FaSearch />
                    <input type="text" placeholder="Search..." className={styles.input}/>
                </div>
                <div className={styles.icons}>
                    <FaRocketchat size={20}/>
                    <FaRegBell size={20}/>
                    <FaGlobe size={20}/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar

