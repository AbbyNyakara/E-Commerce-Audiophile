import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.customNavbar}>
      <div className={styles.nav_logo}>
        <a href='#'>
          <img src='./assets/shared/desktop/logo.svg' />
        </a>
      </div>

      <ul className={styles.nav_links}>
        <li>
          <a href='#'>home</a>
        </li>
        <li>
          <a href='#'>headphones</a>
        </li>
        <li>
          <a href='#'>speakers</a>
        </li>
        <li>
          <a href='#'>earphones</a>
        </li>
      </ul>
      <div className={styles.cart_section}>
        <img src='./assets/shared/desktop/icon-cart.svg' alt='Cart' />
      </div>
    </div>
  )
}

export default Header
