import logo from './logo.svg';
import './App.css';
import About from './components/about/About';
import Login from './components/login/Login'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Login></Login>
      <div className="footer">
        <Footer></Footer>
      </div>
      {/* <Products></Products> */}
    </div>
  );
}

export default App;
