import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Company from './components/pages/Company/Company'
import Contact from './components/pages/Contact/Contact'
import Home from './components/pages/Home/Home'
import NewProject from './components/pages/NewProject/NewProject'

import { Container } from './components/layout/container/Container'
import { Navbar } from './components/layout/Navbar/Navbar'
import { Footer } from './components/layout/Footer/Footer'
import  Projects  from './components/pages/Projects/Projects'
import { ProjectUnique } from './components/pages/ProjectUnique/ProjectUnique'


const App = () => {

  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/company' element={<Company />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/newproject' element={<NewProject />} />
          <Route path='/project/:id' element={<ProjectUnique />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  )
}

export default App