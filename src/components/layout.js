import Nav from "../components/nav"
import Footer from "../components/footer"


export default (props) =>
  <div style={{ margin: '0 auto', maxWidth: `960px` }}>
    <div style={{ margin: '0 1rem' }}>
      <Nav active={ props.active } />
    </div>
      { props.children }
    <div style={{ margin: '0 1rem' }}>
      <Footer />
    </div>
  </div>

