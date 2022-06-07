import React from 'react'
import Hero from './Components/Hero/Hero'
import Navigation from './Components/Navigation/Navigation'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'

const App = () => {
  return (
    <section>
     <Navigation />
     <Hero />
     <About />
     <Projects />
    </section>
  )
}

export default App