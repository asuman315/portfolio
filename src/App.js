import React from 'react'
import Hero from './Components/Hero/Hero'
import Navigation from './Components/Navigation/Navigation'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'
import Testing from './Components/Testing/Testing'

const App = () => {
  return (
    <section>
     <Navigation />
     <Hero />
     <About />
     <Projects />
     <Footer />
    </section>
  )
}

export default App