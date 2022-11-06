import './Footer.css';
 



function Footer() {
    
    return (
      <footer className='footer'>
        <div className='social-media' id='social'>
            <h2>Seguinos en nuestras redes</h2>
            <ul>
                <li>
                    <a href='http://facebook.com' target="_blank">Facebook</a>
                </li>
                <li>
                    <a href='http://instagram.com' target="_blank">Instagram</a>
                </li>
                <li>
                    <a href='http://twitter.com' target="_blank">Twitter</a>
                </li>
            </ul>
        </div>
        <div className='contact-form' id='contact'>
        <h2>Contactanos</h2>
            <label>
                Nombre
            </label>
                <input type="text" placeholder='nombre'></input>
            <label>
                Email
            </label>
                <input type="email" placeholder='nombre'></input>
            <label for="msg">Mensaje</label>
                <textarea id="msg" name="msg"> </textarea>  
        </div>
      </footer>
      
    );
}

export default Footer;