import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import CourseOverview from '../../components/CourseOverview'
import Footer from '../../components/Footer'

export default function CourseEast() {
  return (
    <Page
      className="CourseEast"
      pageName="The East Course"
      slug="/course/east"
    >
      <header>
        <Navbar mainNav />
      </header>

      <main>
        <Banner 
          title="The East Course"
          image="/images/course/east/banner.jpg"
        />
        
        <CourseOverview
          holes="18"
          par="72"
          yardage="Blue (6910) White (6528) Red (6241) Yellow (5724)"
          img1title="Hole 3"
          img1src="/images/course/east/banner.jpg"
          img2title="Hole 9"
          img2src="/images/course/east/banner.jpg"
          img3title="Hole 15"
          img3src="/images/course/east/banner.jpg"
        >
          <p>East is the longest of the three courses Spring Lakes has to offer. Golfers should come prepared with their driver as the back tees play an astounding 6910 yards! With the front 9 leading golfers back to the clubhouse, golfers can grab a bite to eat at Stanley’s Nest. The East offers a mix of challenging par 4’s that require the golfer to hit some challenging tee shots and approaches. The most notable holes on the East Course are 8, 10, & 18.</p>
          
          <p><strong>Long & Vertical • Driver needs accuracy + distance</strong></p>
        </CourseOverview>
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}