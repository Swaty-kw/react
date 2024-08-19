import "./App.css";
import grapics from "./assets/media/ER30N8JX0Askivi (1).jpg";
import "./assets/css/style.css";
import products from "./products"; //array of objects
import ProductItem from "./components/ProductItem.js"; // component
import ProductList from "./components/ProductList.js";

function App() {
  // const productList = products.map((product) => {
  //return (

  return (
    <div className="main">
      <h1>Gijen Electronis</h1>
      <p1>
        All inclusive shop offering high end pc products including hardware and
        software.
      </p1>
      <img src={grapics} alt="media" className="image" />
      <ProductList />
    </div>
  );
}

export default App;
