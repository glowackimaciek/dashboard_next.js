import styles from "@/app/ui/dashboard/sidebar/sidebar.module.css"
import Image from "next/image"
import MenuLink from "@/app/ui/dashboard/sidebar/menuLink/MenuLink"
import { FaHome, FaUsers, FaShoppingCart, FaMoneyBill, FaChartLine, FaCog, FaQuestionCircle, FaDollarSign, FaSignOutAlt  } from 'react-icons/fa';

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <FaHome />
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <FaUsers />
            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <FaShoppingCart />
            },
            {
                title: "Transactions",
                path: "/dashboard/transactions",
                icon: <FaMoneyBill />
            }
        ],
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <FaDollarSign />
            },
            {
                title: "Reports",
                path: "/dashboard/reports",
                icon: <FaChartLine />
            },
            {
                title: "Teams",
                path: "/dashboard/teams",
                icon: <FaUsers />
            },
        ],
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <FaCog />
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <FaQuestionCircle />
            }
        ]
    }
];

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src="/image/noavatar.png" alt="" width="50" height="50"/>
                <div className={styles.userDetail}>
                    <span className={styles.userName}>Jhon Doe</span>
                    <span className={styles.userTitle}>Administrator</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map(cat=>(
                    <li key={cat.title}>
                    <span className={styles.category}>{cat.title}</span>
                    {cat.list.map(item=>(
                    <MenuLink item={item} key={item.title}/>
                ))}
                    </li>
                ))}
            </ul>
            <button className={styles.button}>
                <FaSignOutAlt size={20}/>
                Logout
            </button>
        </div>
    )
}

export default Sidebar