import Page from '../components/Page'
import Container from '../components/Container'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Game() {
  return (
    <Page 
      className="Game"
      pageName="Game Improvement"
      slug="/game"
    >
      <header>
        <Header
          title="Game Improvement"
          image="/images/header/placeholder1.jpg"
        />
      </header>

      <main>
        <Container>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Praesent elementum facilisis leo vel fringilla est. Nisi porta lorem mollis aliquam. Proin fermentum leo vel orci porta non. Integer feugiat scelerisque varius morbi. Nulla malesuada pellentesque elit eget gravida. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Lacus sed viverra tellus in hac habitasse. Risus feugiat in ante metus dictum at tempor. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Mi bibendum neque egestas congue quisque egestas diam in arcu. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Neque convallis a cras semper auctor neque vitae tempus. Purus in massa tempor nec feugiat nisl pretium fusce id. Pretium fusce id velit ut tortor pretium viverra suspendisse. Ut sem nulla pharetra diam sit amet. Amet porttitor eget dolor morbi non arcu. Turpis egestas sed tempus urna et pharetra pharetra massa massa.</p>

          <br/>

          <p>Sit amet aliquam id diam maecenas ultricies. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Quis blandit turpis cursus in. Odio aenean sed adipiscing diam donec. Eget aliquet nibh praesent tristique magna. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Elit pellentesque habitant morbi tristique. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Nibh sed pulvinar proin gravida. Diam quam nulla porttitor massa id. Est ullamcorper eget nulla facilisi etiam dignissim. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Eget est lorem ipsum dolor sit amet consectetur. Purus in mollis nunc sed id semper risus in. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Aliquet nec ullamcorper sit amet risus nullam eget. Tristique senectus et netus et malesuada. Amet est placerat in egestas erat imperdiet sed euismod. Ultricies lacus sed turpis tincidunt id aliquet.</p>
        </Container>
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}