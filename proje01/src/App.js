import Header from './component/header'
import './App.css';
import './data.js'

import Data from './data.js';




function App() {
  return (
    <div>
      <Header />




      <div className="container">{Data.map((item) => {
        return (
          <div>
            <img src={item.src.large} />
            <p>{item.photographer}</p>;
          </div>)
      })}
      </div>
    </div>
  );
}

export default App;
