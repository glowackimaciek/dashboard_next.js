import styles from "@/app/dashboard/users/add/addUsers.module.css"

const AddUsers = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <form action="" className={styles.form}>
                    <input type="text" placeholder="username" name="username" required/>
                    <input type="email" placeholder="email" name="email" required/>
                    <input type="password" placeholder="password" name="password" required/>
                    <input type="phone" placeholder="phone" name="phone"/>
                    <select name="isAdmin" id="isAdmin">
                        <option value={false} selected>Is Admin?</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <select name="isActive" id="isActive">
                        <option value={true} selected>Is Active?</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <textarea name="address" id="address"  rows="16" placeholder="Address"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddUsers