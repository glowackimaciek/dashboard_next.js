import styles from "@/app/dashboard/products/add/addProduct.module.css"

const AddProduct = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <form action="" className={styles.form}>
                    <input type="text" placeholder="title" name="title" required/>
                    <select name="category" id="category">
                        <option value="general">Choose a Category</option>
                        <option value="kitchen">Kitchen</option>
                        <option value="computer">Computer</option>
                        <option value="phone">Phone</option>
                    </select>
                    <input type="number" placeholder="price" name="price"/>
                    <input type="number" placeholder="stock" name="stock"/>
                    <input type="text" placeholder="color" name="text"/>
                    <input type="text" placeholder="size" name="size"/>
                    <textarea name="desc" id="desc"  rows="16" placeholder="Descriptions"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        
    )
}

export default AddProduct