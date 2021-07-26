import Header from './Header'
import Sidebar from './Sidebar'
import Console from './console_components/Console'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <div id='main-content-container'>
        <Router>
          <Sidebar />
          <Console />
        </Router>
      </div>

    </div>
  );
}

export default App;
