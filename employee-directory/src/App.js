import logo from './logo.svg';
import './App.css';
import EmployeeCards from "./components/EmployeeCards"
import HeaderComponent from "./components/HeaderComponent"
import employees from "./employees.json";
import SearchComponent from './components/searchComponent';

function App() {
  return (
    <div className="App" style={{background:"#fafafa", width:"100%", height:"1500px"}}>
      <>
        <HeaderComponent />
        <SearchComponent/>
        <EmployeeCards employees={employees} />
      </>
    </div>
  );
}

export default App;
