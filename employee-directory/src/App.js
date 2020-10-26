import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./components/HeaderComponent"
import SearchComponent from './components/searchComponent';

function App() {
  return (
    <div className="App" style={{ background: "#fafafa", width: "100%"}}>
      <>
        <HeaderComponent />
        <SearchComponent/>
      </>
    </div>
  );
}

export default App;
