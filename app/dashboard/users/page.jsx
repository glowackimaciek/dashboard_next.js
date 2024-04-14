import Search from "@/app/ui/dashboard/search/Serach"
import styles from "@/app/ui/dashboard/users/users.module.css"
import Link from "next/link"
import Image from "next/image"
import Pagination from "@/app/ui/dashboard/pagination/Pagination"

const UsersPage = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <Search placeholder="Search for a user..."/>
                    <Link href="/dashboard/users/add">
                        <button className={styles.addButton}>Add User</button>
                    </Link>
                </div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Created at</td>
                            <td>Role</td>
                            <td>Status</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className={styles.user}>
                                    <Image src="/image/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
                                    Jhon Doe
                                </div>
                            </td>
                            <td>
                                jhon@email.com
                            </td>
                            <td>
                                13.01.2024
                            </td>
                            <td>
                                Admin
                            </td>
                            <td>
                                Active
                            </td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href="/dashboard/users/test">
                                        <button className={`${styles.button} ${styles.view}`}>View</button>
                                    </Link>
                                        <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                </div>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Pagination />
            </div>
        </div>
        
    )
        
}

export default UsersPage