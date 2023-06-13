import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav>
           <img src='./images/kita-logo.jpg' className='logo' />
        <div>
            <NavLink to='/' >inicio</NavLink>
            <NavLink to={`/category/decoracion`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'} >Cocina</NavLink>
            <NavLink to={`/category/aromas`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'} >Aromas</NavLink>
            <NavLink to={`/category/iluminacion`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'} >Iluminacion</NavLink>
            <NavLink >Nosotros</NavLink>
            <NavLink >Contacto</NavLink> 
        </div>
        </nav>
    );
}

export default NavBar;