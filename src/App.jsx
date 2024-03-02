import Navbar from './componenets/navBar/NavBar.jsx'
import Intro from './componenets/intro/Intro.jsx'
import Works from './componenets/works/Works'
import Contact from './componenets/contact/Contact'
import Footer from './componenets/footer/Footer'
import About from './componenets/about/About.jsx'
import Techstack from './componenets/techstack/Techstack.jsx'
import Experience from './componenets/Experience/Experience.jsx'
import Project from './componenets/project/Project.jsx'
function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Techstack />
      <Experience />
      <Project />
      {/* <Skill /> */}
      <Works />
      <Contact />
      <Footer />
    </>
  )
}

export default App
