import styles from './nav.module.css'
const Nav = () => {
  return (
    <nav className={`${styles.navigation} container`}>
        <div className="logo">
            <img src="/public/logo.png" alt="harsh" />
        </div>
        <ul>
            <li>Home</li>
            <li>ABout</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Nav
