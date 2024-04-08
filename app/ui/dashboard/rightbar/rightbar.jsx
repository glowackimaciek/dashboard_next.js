import styles from "@/app/ui/dashboard/rightbar/rightbar.module.css"
import Image from "next/image"
import { FaPlayCircle } from "react-icons/fa";

const Rightbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/image/astronaut.png" fill alt="" className={styles.image}/>
                </div>
                <div className={styles.text}>
                    <span className={styles.notification}>
                        🔥 Availble Now
                    </span>
                    <h3 className={styles.title}>
                        How to use the new version of the admin dashboard?
                    </h3>
                    <span className={styles.subtitle}>
                        Takes 4 minutes to learn
                    </span>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi porro tempora soluta fugiat illo dolor unde expedita voluptates. Quas labore libero delectus aut enim?
                    </p>
                    <button className={styles.button}>
                        <FaPlayCircle/>
                        Watch
                    </button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/image/moon.png" fill alt="" className={styles.image}/>
                </div>
                <div className={styles.text}>
                    <span className={styles.notification}>
                        🔥 Availble Now
                    </span>
                    <h3 className={styles.title}>
                        How to use the new version of the admin dashboard?
                    </h3>
                    <span className={styles.subtitle}>
                        Takes 4 minutes to learn
                    </span>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi porro tempora soluta fugiat illo dolor unde expedita voluptates. Quas labore libero delectus aut enim?
                    </p>
                    <button className={styles.button}>
                        <FaPlayCircle/>
                        Learn
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Rightbar