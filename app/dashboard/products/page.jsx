import Search from "@/app/ui/dashboard/search/Serach"
import styles from "@/app/ui/dashboard/products/products.module.css"
import Link from "next/link"
import Image from "next/image"
import Pagination from "@/app/ui/dashboard/pagination/Pagination"

const ProductsPage = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <Search placeholder="Search for a product..."/>
                    <Link href="/dashboard/products/add">
                        <button className={styles.addButton}>Add product</button>
                    </Link>
                </div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Descriptions</td>
                            <td>Price</td>
                            <td>Created at</td>
                            <td>Stock</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className={styles.product}>
                                    <Image src="/image/no-pictures.png" alt="" width={40} height={40} className={styles.productImage}/>
                                    iPhone 14
                                </div>
                            </td>
                            <td>
                                Apple iPhone 14 128 GB
                            </td>
                            <td>
                                $499
                            </td>
                            <td>
                                13.04.2024
                            </td>
                            <td>
                                66
                            </td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href="">
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

export default ProductsPage