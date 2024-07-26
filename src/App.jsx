import './App.css'
import Tabmenu from './components/Tabmenu';
import Homepage from './components/Homepage';

function App() {
  
  return (
    <>
      <div className="container px-4 py-4 sm:px-4 md:px-4 xl:px-20">
        <Homepage/>
        <Tabmenu/>
      </div>
    </>
  )
}

export default App
