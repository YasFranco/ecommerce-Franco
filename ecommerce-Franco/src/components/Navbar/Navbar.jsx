import './Navbar.css'

import CardWidget from '../CardWidget/CardWidget'

const Navbar = () => {
    return (
        <header className='Barra'>
            <h1 className="Titulo">KITA</h1>
            <section>
                <button>Deco</button>
                <button>Gift Cards</button>
                <button>Inspiraciones</button>
                <button>Quienes Somos </button>
            </section>
            <CardWidget/>
        </header>
    )
}


export default Navbar