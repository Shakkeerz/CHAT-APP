import About from "./About";
import "./App.css";
import Nav from "./Nav";
import Shop from "./Shop";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import MoreMovies from "./MoreMovies";
import NextPrevi from "./NextMovies";
import NextMovies from "./NextMovies";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <li><Link to="/moreMovies">more movies</Link></li>
        <div style={{ padding: "0px 50px" }}>
          <Routes>

            <Route  path="/Shop" element={<Shop />} />
            <Route path="/About" element={<About />} />
            <Route path="/" element={<Home/>} />
            <Route path="/moreMovies" element={<MoreMovies/>} />

            <Route path="./NextMovies.js" element={<NextMovies/>} />
          </Routes>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>
          <Link to="/">Prev</Link>
        </span>

        <span>
          <Link to="./NextMovies.js">Next</Link>
        </span>
      </div>
        
            {/* <NextPrevi/> */}
        </div>
      </div>
    </Router>
  );
}

const Home=()=>{
  return (<h1>Home page</h1>)
}
export default App;
