import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/UI/Footer';
import Navbar from './components/UI/Navbar';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <div id="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </>
    </Router>
  );
};

export default App;
