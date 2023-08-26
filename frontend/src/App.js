import Advantages from "./components/Advantages/Advantages";
import Catalog from "./components/Catalog/Catalog";
import DesignSolutions from "./components/DesignSolutions/DesignSolutions";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import PhotoProcess from "./components/PhotoProcess/PhotoProcess";
import Certificates from "./components/СertificateSection/Certificates";

function App() {
  return (
    <div>
      <Navbar />
      <Advantages id="advantages" />
      <Catalog id="catalog" />
      <DesignSolutions id="designsolutions" />
      <PhotoProcess id="photoprocess" />
      <Certificates id="certificates" />
      <Footer id="footer" />
    </div>
  );
}

export default App;
