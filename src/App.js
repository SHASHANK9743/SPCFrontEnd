import Header from './Components/Header';
import Footer from './Components/Footer';
import BaseImage from './Components/BaseImage';
import BodyTemplate from './Components/BodyComponents/BodyTemplate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <title>SANJAI PANDEY CLASSES PVT. LTD. | Home</title>
      </header>
      <body>
          <Header/>
          <BodyTemplate />
          <br/>
          <BaseImage />
          <Footer />
      </body>
    </div>
  );
}

export default App;
