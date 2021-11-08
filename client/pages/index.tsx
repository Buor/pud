import type {NextPage} from 'next'
import styles from './../src/styles/Home.module.scss'
import {useState} from "react"

const Home: NextPage = () => {
    const [isButtonHovered, setIsButtonHovered] = useState(false)

    return (
        <div className={styles.wrapper}>
            <div className={styles.logo_wrapper}>
                <div className={styles.title}>
                    PUD
                </div>
                <div className={styles.subtitle}>
                    Power-Up Diary
                </div>
            </div>
            <div className={styles.btn_wrapper + " " + (isButtonHovered ? styles.btn_hovered : "")}>
                <button
                    onMouseEnter={() => setIsButtonHovered(true)}
                    onMouseLeave={() => setIsButtonHovered(false)}
                    className={styles.btn_enter}>Press to enter
                </button>
            </div>
        </div>
    )
}

export default Home