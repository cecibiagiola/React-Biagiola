import './NavBar.css';
import  CartWidget  from '../CartWidget/CartWidget';


function NavBar() {
    
    return (
      <header>
        <div className="navBar">
            <h2 className='navBar-title'>La Tienda</h2>
            <ul className='items'>
                <li className='item-li'><a href='#'>Home</a></li>
                <li className='item-li'><a href='#contact'>Contacto</a></li>
                <li className='item-li'><a href='#social'>Redes</a></li>
                <li className='item-li-active'><a href='#'>
                  <CartWidget />
                    </a>
                </li>
            </ul>
                  
        </div>
      </header>  
      
    );
}

export default NavBar;