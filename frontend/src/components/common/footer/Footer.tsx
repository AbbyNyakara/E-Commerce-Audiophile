import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='footer_left'>
        <h2>Audiophile</h2>
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We are a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we are open 7 days a week.
        </p>
        <small>
          &copy; {new Date().getFullYear()} Audiophile. All rights reserved.
        </small>
      </div>

      <div className='footer_right'>
        <nav>
          <ul>
            <li>Home</li>
            <li>HeadPhones</li>
            <li>Speakers</li>
            <li>Earphones</li>
          </ul>
        </nav>
        <ul className='socials'>
          <li className='facebook'>
            <a>
              <img
                src='/assets/shared/desktop/icon-facebook.svg'
                alt='Facebook'
              />
            </a>
          </li>
          <li className='twitter'>
            <a>
              <img
                src='/assets/shared/desktop/icon-twitter.svg'
                alt='Twitter'
              />
            </a>
          </li>
          <li className='instagram'>
            <a>
              <img
                src='/assets/shared/desktop/icon-instagram.svg'
                alt='Instagram'
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
