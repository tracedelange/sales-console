import Header from './Header'
import Sidebar from './Sidebar'
import Console from './Console'

function App() {
  return (
    <div className="App">
      <Header />
      <div id='main-content-container'>
        <Sidebar />
        <Console />
      </div>

    </div>
  );
}

export default App;
