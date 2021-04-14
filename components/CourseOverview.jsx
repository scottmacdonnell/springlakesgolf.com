import Image from 'next/image'

import Container from './ui/Container'

import styles from '../styles/components/CourseOverview.module.scss'

export default function CourseOverview({
  children,
  holes,
  par,
  yardage,
  img1title,
  img1src,
  img2title,
  img2src,
  img3title,
  img3src,
}) {
  return (
    <CourseOverviewComponent>
      <CourseOverviewHeader>
        <div>
          <span><strong>Holes: </strong>{holes}</span>
        </div>
        
        <div>
          <span><strong>Par: </strong>{par}</span>
        </div>

        <div>
          <span><strong>Yardage: </strong>{yardage}</span>
        </div>
      </CourseOverviewHeader>

      <CourseOverviewMain>
        {children}
      </CourseOverviewMain>

      <CourseOverviewFooter>
        {img1src ? (
          <FooterImage
            title={img1title}
            src={img1src}
          />
        ) : <div /> }
        {img2src ? (
          <FooterImage
            title={img2title}
            src={img2src}
          />
        ) : <div /> }
        {img3src ? (
          <FooterImage
            title={img3title}
            src={img3src}
          />
        ) : <div /> }
      </CourseOverviewFooter>
    </CourseOverviewComponent>
  )
}

function FooterImage({
  title,
  src
}) {
  return (
    <div className={styles.FooterImage}>
      <Image
        src={src}
        alt={title}
        title={title}
        width={640}
        height={640}
      />
      <span>{title}</span>
    </div>
  )
}

function CourseOverviewFooter(props) {
  return (
    <div className={styles.CourseOverviewFooter}>
      {props.children}
    </div>
  )
}

function CourseOverviewMain(props) {
  return (
    <div className={styles.CourseOverviewMain}>
      {props.children}
    </div>
  )
}

function CourseOverviewHeader(props) {
  return (
    <div className={styles.CourseOverviewHeader}>
      {props.children}
    </div>
  )
}

function CourseOverviewComponent(props) {
  return (
    <Container>
      <div className={styles.CourseOverview}>
        {props.children}
      </div>
    </Container>
  )
}