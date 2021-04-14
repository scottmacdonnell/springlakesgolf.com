import Link from 'next/link'
import Image from 'next/image'

import Container from './ui/Container'

import styles from '../styles/components/MenuNav.module.scss'

export default function MenuNav() {
  return(
    <Container>
      <div className={styles.MenuNav}>
        <div className={styles.MenuCardsLarge}>
          <MenuCardLarge 
            title="Restaurant Menu"
            image="/images/clubhouse/menucard-restaurant.jpg"
            link="/docs/clubhouse/simulator.pdf"
          />

          <MenuCardLarge 
            title="Stanley's Nest Menu"
            image="/images/clubhouse/menucard-stanley.jpg"
            link="/docs/clubhouse/stanley.pdf"
          />

          <MenuCardLarge
            title="Halfway House Menu"
            image="/images/clubhouse/menucard-halfway.jpg"
            link="/docs/clubhouse/halfway.pdf"
          />
        </div>
        {/* <div className={styles.MenuCardsSmall}>
          <MenuCardSmall
            title="Weekly Specials"
            image="/images/clubhouse/menucard-weekly.jpg"
            link="#"
          />
          
          <MenuCardSpacer />
          
          <MenuCardSmall 
            title="Clubhouse Refreshers"
            image="/images/clubhouse/menucard-refreshers.jpg"
            link="#"
          />
        </div> */}
      </div>
    </Container>
  )
}

function MenuCardLarge({
  title,
  image,
  link
}) {
  return (
    <Link href={link}>
      <a>
        <div className={styles.MenuCardLarge}>
          <div className={styles.MenuCardLargeTitle}>
            <div className={styles.MenuCardLargeTitleImage}>
              <Image 
                src="/images/clubhouse/menucard-background.jpg"
                width={360}
                height={360}
                layout="responsive"
                objectFit="cover"
              />
            </div>

            <div className={styles.MenuCardLargeTitleContent}>
              <div className={styles.MenuCardLargeTitleWrapper}>
                <h3>{title}</h3>
              </div>
            </div>
          </div>
          <div className={styles.MenuCardLargeImage}>
            <Image 
                src={image}
                width={1080}
                height={360}
                layout="responsive"
                objectFit="cover"
              />
          </div>
        </div>
      </a>
    </Link>
  )
}

function MenuCardSmall({
  title,
  image,
  link
}) {
  return (
    <Link href={link}>
      <a>
        <div className={styles.MenuCardSmall}>
          <div className={styles.MenuCardSmallImage}>
            <Image 
                src={image}
                width={1080}
                height={720}
                layout="responsive"
                objectFit="cover"
              />
          </div>
          
          <div className={styles.MenuCardSmallTitle}>
            <div className={styles.MenuCardSmallTitleImage}>
              <Image 
                src="/images/clubhouse/menucard-background.jpg"
                width={800}
                height={240}
                layout="responsive"
                objectFit="cover"
              />
            </div>

            <div className={styles.MenuCardSmallTitleContent}>
              <div className={styles.MenuCardSmallTitleWrapper}>
                <h3>{title}</h3>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

function MenuCardSpacer() {
  return <div className={styles.MenuCardSpacer} />
}