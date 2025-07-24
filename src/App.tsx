import Header from './components/common/Header'
import Footer from './components/common/Footer'
import BackToTop from './components/common/BackToTop'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import { SECTION_IDS } from './utils/constants'
import { autoRunResponsiveTests } from './utils/responsiveTest'
import { useEffect } from 'react'

function App() {
  // Run responsive design tests in development
  useEffect(() => {
    if (import.meta.env.DEV) {
      autoRunResponsiveTests()
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <div id={SECTION_IDS.PROJECTS}>
        <Projects />
      </div>

      {/* Contact Section */}
      <Contact />

      <Footer />
      <BackToTop />
    </div>
  )
}

export default App