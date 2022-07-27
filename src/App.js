import './css/main.css';

//Components
import Header from './components/Header';
import Card from './components/Card';
import Dropdown from './components/Dropdown';
import Chart from './components/Chart';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="card-box">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <section>
        <Dropdown />
        <Chart />
      </section>
      <Footer />
    </div>
  );
}

export default App;
