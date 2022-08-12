import cmdIcon from '../assets/cmd-logo.png'
import styles from '../styles/Header.module.css'

function Header() {
  return (
    <section className="Header">
      <img className={styles.icon} src={cmdIcon} alt="Windows command prompt icon" />
      <p className={styles.title}>Presidents Reawaken</p>
    </section>
  )
}

export default Header