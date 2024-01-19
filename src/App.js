
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Productid from './Productid';
import Breadcrumbs from './components/Breadcrumbs';


function App() {
 

  return (
    <BrowserRouter>
    <div className="App">
        <Breadcrumbs/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/products/:id' element={<Productid/>}/>
      </Routes>
    </div>


    </BrowserRouter>
  );
}

export default App;
