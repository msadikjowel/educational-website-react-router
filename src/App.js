import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Categories from './components/Categories/Categories';

function App() {
  return (
    <Router>

      <Header></Header>

      <Switch>

        <Route exact path='/'>
          <Home></Home>
        </Route>

        <Route exact path='/home'>
          <Home></Home>
        </Route>

        <Route exact path='/about'>
          <About></About>
        </Route>

        <Route exact path='/services'>
          <Services></Services>
        </Route>

        <Route exact path='/categories'>
          <Categories>c</Categories>
        </Route>

        <Route path='*'>
          <NotFound></NotFound>
        </Route>

      </Switch>

      <Footer></Footer>

    </Router>
  );
}

export default App;
