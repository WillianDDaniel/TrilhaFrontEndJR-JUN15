import './App.css'
import Header from './Template/Header/Index'
import Footer from './Template/Footer/Index'
import About from './Template/Sections/About/Index'
import Courses from './Template/Sections/Courses/Index'

export default function App() {

  return (
    <>
    
      <Header/>

      <main>
        <About/>
        <Courses/>
      </main>
      <Footer>

      </Footer>
    </>
  )
}
