import logo from './images/airbnb.svg'

function Navbar() {
    return(
        <nav>
            <img src={logo} alt="Airbnb Logo" className='logo' />
        </nav>
    )
}

export default Navbar