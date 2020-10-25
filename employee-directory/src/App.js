import logo from './logo.svg';
import './App.css';
import EmployeeCards from "./components/EmployeeCards"
import HeaderComponent from "./components/HeaderComponent"

function App() {
  return (
    <div className="App" style={{background:"#fafafa", width:"100%", height:"1500px"}}>
      <>
        <HeaderComponent />
        <EmployeeCards />
      </>
    </div>
  );
}

export default App;
