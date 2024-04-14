import Search from "@/app/ui/dashboard/search/Serach"
import styles from "@/app/ui/dashboard/users/users.module.css"
import Link from "next/link"
import Image from "next/image"
import Pagination from "@/app/ui/dashboard/pagination/Pagination"
import { fetchUsers } from "@/app/lib/data"

const UsersPage = async () => {

    const users = await fetchUsers();
    console.log(users);

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
                        {users.map(user=> (
                        <tr key={user.username}>
                            <td>
                                <div className={styles.user}>
                                    <Image src={user.img || "/image/noavatar.png"} alt="" width={40} height={40} className={styles.userImage}/>
                                    {user.username}
                                </div>
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td>
                                {user.createdAt}
                            </td>
                            <td>
                                {user.isAdmin ? "Admin" : "Client"}
                            </td>
                            <td>
                                {user.isActive ? "Active" : "Passive"}
                            </td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href={`/dashboard/users/${user._id}`}>
                                        <button className={`${styles.button} ${styles.view}`}>View</button>
                                    </Link>
                                        <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                </div>
                                
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination />
            </div>
        </div>
        
    )
        
}

export default UsersPage