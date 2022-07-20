import React from 'react'
import styles from '../styles/card.module.css';



const Card = () => {
  return (
    <div> 
        <div className={styles.warpper}>
            <div className={styles.card}>
                <div className={styles.imgone}>
                    <img src="https://images.ctfassets.net/k0lk9kiuza3o/5ledlZLIfg5Ufl5aV7mP43/f4e9ff1c8e56ac1c9ce6416114c4b522/Calendly-Reps.png?w=1480&h=832&q=50&fm=webp" alt="" srcSet='' />
                </div>
                <div className={styles.content}>
                    <h2 className={styles.cardH}>Sales</h2>
                    <p className={styles.cardP}>Get to your best leads faster</p>
                    <br />
                    <a href="/" className={styles.cardA}>Learn more</a>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.imgone}>
                <img src="https://images.ctfassets.net/k0lk9kiuza3o/2CHdvyXqFe8FfVLRvlEtwP/431464dd95b0b51a773a3082b5a3b432/Recruiting.jpg?w=1920&h=1081&q=50&fm=webp" alt="" srcSet='' />
                </div>
                <div className={styles.content}>
                    <h2 className={styles.cardH}>Recruiting</h2>
                    <p className={styles.cardP}>Less emailing, more interviews</p>
                    <br />
                    <a href="/" className={styles.cardA}>Learn more</a>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.imgone}>
                <img src="https://images.ctfassets.net/k0lk9kiuza3o/4L2IHsOUMgTUjPxcUbzoyz/2111a84d62f23ade75054f48bdeda0b2/Customer_Success.jpg?w=1920&h=1081&q=50&fm=webp" alt="" srcSet='' />
                </div>
                <div className={styles.content}>
                    <h2 className={styles.cardH}>Customer Success</h2>
                    <p className={styles.cardP}>Connect with customers when it matters</p>
                    <br />
                    <a href="/" className={styles.cardA}>Learn more</a>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.imgone}>
                <img src="https://images.ctfassets.net/k0lk9kiuza3o/Zrdp4mX39AA8cXWx4J41s/1fba6102b32f86275c89e15c84ceab55/Education.jpg?w=1920&h=1081&q=50&fm=webp" alt="" srcSet='' />
                </div>
                <div className={styles.content}>
                    <h2 className={styles.cardH}>Education</h2>
                    <p className={styles.cardP}>Boost students success</p>
                    <br />
                    <a href="/" className={styles.cardA}>Learn more</a>
                </div>
            </div>



        </div>
    </div>
  )
}

export default Card