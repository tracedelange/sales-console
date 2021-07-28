import {useState} from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Console from './console_components/Console'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  const [reload, setReload] = useState(true)
  const handleResourceChange = () => {
    setReload(!reload)
  }

  return (
    <div className="App">
      <Header />
      <div id='main-content-container'>
        <Router>
          <Sidebar resourceChange={reload}/>
          <Console resourceChange={handleResourceChange} />
        </Router>
      </div>

    </div>
  );
}

export default App;
