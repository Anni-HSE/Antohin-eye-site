import Advantages from "./components/Advantages/Advantages";
import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import PhotoProcess from "./components/PhotoProcess/PhotoProcess";

function App() {
  return (
    <div>
      <Navbar />
      <Advantages />
      <Catalog />
      <PhotoProcess />
      <Footer />
    </div>
  );
}

export default App;
