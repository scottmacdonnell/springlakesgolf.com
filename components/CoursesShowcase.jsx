import Link from 'next/link'
import Image from 'next/image'

import Container from './ui/Container'

import styles from '../styles/components/CoursesShowcase.module.scss'

export default function CoursesShowcase(props) {
  return (
    <Container>
      <div className={styles.CoursesShowcase}>
        <CourseCard
          title="The North Course"
          link="/courses/north"
          image="/images/courses/north/banner.jpg"
          pinLocation="/docs/courses/north-location.pdf"
        />
        
        <CourseCard
          title="The South Course"
          link="/courses/south"
          image="/images/courses/south/banner.jpg"
          pinLocation="/docs/courses/south-location.pdf"
        />
        
        <CourseCard
          title="The East Course"
          link="/courses/east"
          image="/images/courses/east/banner.jpg"
          pinLocation="/docs/courses/east-location.pdf"
        />
      </div>

    </Container>
  )
}

function CourseCard({
  title,
  link,
  image,
  pinLocation
}) {
  return (
    <div className={styles.CourseCard}>
      <Link href={link}>
        <a>
          <div className={styles.CourseCardImage}>
            <Image 
              src={image}
              alt="Card Background"
              width={1080}
              height={540}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className={styles.CourseCardContent}>
            <div className={styles.CourseCardContentWrapper}>
              <h2>{title}</h2>
            </div>
          </div>
          <div className={styles.PinLocation}>
            
            <Link href={pinLocation}>
              <button className={styles.PinLocationButton}>
                <span className={styles.Prefix}>
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision" >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <span className={styles.Suffix}>Pin Locations</span>
              </button> 
            </Link>
          </div>
        </a>
      </Link>
    </div>
  )
}