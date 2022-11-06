import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
   
    <React.Fragment>
        <NavBar /> 
        <ItemListContainer />
        <Footer />

    </React.Fragment>

  );
}

export default App;
