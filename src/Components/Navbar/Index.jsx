import Logo from '../Logo/Index'
import NavItems from '../NavItems/Index'
import ToggleMenu from '../ToggleMenu/Index'

import './Style.css'

export default function Navbar({ }) {
    return (
        <nav className='navbar'>

            <Logo />

            <NavItems />

            <ToggleMenu/>
            
        </nav>
    )
}