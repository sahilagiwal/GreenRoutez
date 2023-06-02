// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navigation from "./components/navbar/navbar.component";
import AnimatedRoutes from "./components/AnimatedRoutes";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <AnimatedRoutes />
    </div>
  );
};

export default App;
