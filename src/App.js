import logo from './logo.svg';
import './App.scss';
import im from './assests/Screenshot (566).png';

// import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
function App() {
  return (
    <div className="App">
      <div className="ybar">
        <div className="lb1"></div>
        <div className="lb2"></div>
        <div className="lb3"></div>
        <div className="lb4"></div>
        <div className="lb5"></div>
      </div>
      <div className="bbar"></div>
      {/* <div className="frame">
        <img src={im}></img>
      </div> */}
     <Main/>
     
     
    </div>
  );
}

export default App;
