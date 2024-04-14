import styles from "@/app/dashboard/users/[id]/sigleUser.module.css"
import Image from "next/image"

const SingleUserPage = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.infoContainer}>
                    <div className={styles.imgContainer}>
                        <Image src="/image/noavatar.png" alt="" fill/>
                    </div>
                    Jhon Doe
                </div>
                <div className={styles.formContainer}>
                    <form className={styles.form}>
                        <label>Username</label>
                        <input type="text" name="username" placeholder="Jhon Doe" />
                        <label>Email</label>
                        <input type="email" name="email" placeholder="jhon@email.com" />
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" />
                        <label>Phone</label>
                        <input type="phone" name="phone" placeholder="+1234567" />
                        <label>Address</label>
                        <textarea type="text" name="address" placeholder="Górki 71, 39-305 Górki" />
                        <label>Is Admin?</label>
                        <select name="isAdmin" id="isAdmin">
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                        <label>Is Active?</label>
                        <select name="isActive" id="isActive">
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                        <button>Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SingleUserPage