import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_top}>
        <a>
          <img src='/assets/shared/desktop/logo.svg' />
        </a>

        <nav className={styles.footerNavigation}>
          <ul className={styles.Footer_links}>
            <li>Home</li>
            <li>HeadPhones</li>
            <li>Speakers</li>
            <li>Earphones</li>
          </ul>
        </nav>
      </div>

      <div className={styles.footer_middle}>
        <p className={styles.description}>
          Audiophile is an all in one stop to fulfill your audio needs. We are a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we are open 7 days a week.
        </p>
        <ul className={styles.socials}>
          <li className={styles.socialsFacebook}>
            <a>
              <img
                src='/assets/shared/desktop/icon-facebook.svg'
                alt='Facebook'
              />
            </a>
          </li>
          <li className={styles.socialsTwitter}>
            <a>
              <img
                src='/assets/shared/desktop/icon-twitter.svg'
                alt='Twitter'
              />
            </a>
          </li>
          <li className={styles.socialsInstagram}>
            <a>
              <img
                src='/assets/shared/desktop/icon-instagram.svg'
                alt='Instagram'
              />
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.footer_bottom}>
        <small className={styles.copyright}>
          &copy; {new Date().getFullYear()} Audiophile. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer
