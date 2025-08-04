import "./App.css";
import logo from "./assets/slug-logo.png";

function App() {
  return (
    <div className="container">
      <div className="logo-container">
      <div className="circle" />

      <img className="logo" src={logo} />
      </div>
      <div className="spacer"/>
      <div className="phone">(804) 396-4723</div>
      <div className="bottom-spacer"/>
    </div>
  );
}

export default App;
