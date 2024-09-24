import Home from './Pages/Home';
import Contact from './Pages/Contact';
import AboutMe from './Pages/AboutMe';
import Project  from './Pages/Project';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Route, Routes }  from 'react-router-dom'

function App() {

  return (
    <>      
      <Header />
      <Routes>      
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path='/Project' element={<Project />}></Route>
        <Route path='/AboutMe' element={<AboutMe />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
      </Routes>
      <Footer />


    </>

  )
}

export default App
