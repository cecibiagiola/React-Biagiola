import './styles/ItemListContainer.css';
import Title from './Title';


 const products = [
  {
    id: 1,
    name: 'Cepillo Donald Trump',
    price: 100,
    description: 'Cepillo para inodoro',
    image: '../img.cepillo.png'
  },
  
  {
    id: 2,
    name: 'Soporte para copa',
    price: 80,
    description: 'Soporte para copas ideal para el baño',
    image: '/img/soporte.png'
  },
  
  {
    id: 3,
    name: 'Esponja microfono',
    price: 30,
    description: 'Microfono para cantantes de ducha',
    image: '/esponja.png'
  },

  {
    id: 4,
    name: 'Almohadon Magico',
    price: 30,
    description: 'Almohadon con la cara de Nicholas Cage',
    image: 'img/almohadon.png'
  },

  {
    id: 5,
    name: 'Dispenser de jabon',
    price: 40,
    description: 'Solo utilizable con jabones de color verde',
    image: 'img/jabon.png'
  },

  {
    id: 6,
    name: 'Golf de Baño',
    price: 160,
    description: 'Para que sea mas divertido',
    image: 'img/golf.jpg'
  },

  {
    id: 7,
    name: 'Ojotas limpiadoras',
    price: 160,
    description: 'Camina mientras limpias la casa',
    image: 'img/ojotas.png'
  }
] 



function ItemListContainer() {

  return (
    <div className="container">
      <header className="App-header">
        <Title greeting='Bienvenido a la Tienda Bizarra'/>
        <p>
          <div className='products'>
            {products.map((product) => (
            <div key={product.id} className='product-card'>
             <img src={ product.image } alt={product.name}></img> 
              
              <h3>{product.name}</h3>
              <p className='description'>{product.description}</p>
              <p className='price'>${product.price}</p> 
              <button className='add-button'>Agregar al carrito</button>
            </div>
            ))}
          </div>
        </p>
      </header>
    </div>
  );
          
        
}

export default ItemListContainer;