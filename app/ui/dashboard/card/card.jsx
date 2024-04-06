import styles from "@/app/ui/dashboard/card/card.module.css"
import { FaUsers } from "react-icons/fa";

const Card = () => {
    return (
        <div className={styles.container}>
            <FaUsers size={24}/>
            <div className={styles.text}>
                <span className={styles.title}>Total users</span>
                <span className={styles.number}>10.234</span>
                <span className={styles.details}><span className={styles.positive}>12%</span> more than previous week</span>
            </div>
        </div>
    )
}

export default Card