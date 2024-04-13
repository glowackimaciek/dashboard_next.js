import styles from "@/app/ui/dashboard/search/search.module.css"
import { FaSearch } from "react-icons/fa";

const Search = ({placeholder}) => {
    return (
        <div className={styles.container}>
            <FaSearch />
            <input type="text" placeholder={placeholder} className={styles.input}/>
        </div>
    )
}

export default Search