import Header from './component/header'
import './App.css';
import './data.js'
import Content from "./component/content"

import Data from './data.js';






function App() {
  return (
    <div>
      <Header />
      {Data.map((item) => {
        const { photographer,src}=item;
        return <Content photographer={photographer} src={src}/>

      })}
    </div>
  )
}






export default App;
