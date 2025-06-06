import styles from './Gear.module.css'

const Gear = () => {
  return (
    <div className={styles.gear_container}>
      <div className={styles.gear_left}>
        <h2 className={styles.gear_title}>
          bringing you the <br />
          <span>best</span> audio gear
        </h2>
        <p className={styles.gear_description}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className={styles.gear_image}>
        <img src='/assets/shared/desktop/image-best-gear.jpg' />
      </div>
    </div>
  )
}

export default Gear
