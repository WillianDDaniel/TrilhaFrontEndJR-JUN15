import HeaderContainer from '../../Components/HeaderContainer/Index'
import Navbar from '../../Components/Navbar/Index'
import './Style.css'

export default function Header() {
    return (

        <header className='header'>

            <Navbar />

            <HeaderContainer/>

        </header>

    )
}

