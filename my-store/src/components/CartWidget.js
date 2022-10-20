import './styles/CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCartFlatbed } from '@fortawesome/free-solid-svg-icons'; 
 
function CartWidget() {
    
    return (
       <div>
          <FontAwesomeIcon className='icon' icon={faCartFlatbed} />
      </div> 
      
    );
}

export default CartWidget;  