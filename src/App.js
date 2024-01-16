import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import HomePage from './components/Home/HomePage';
import CurtinOpenDay from './components/Work/CurtinOpenday';
// import CaseStudySidebar from './components/Work/CaseStudySidebar';
import Work from './components/Work/Work';
function App() {
  useEffect(() => {
    // Add the specified classes to the body element on mount
    document.body.classList.add('__className_254d6c', '__variable_254d6c');

    // Cleanup: Remove the classes from the body when the component is unmounted
    return () => {
      document.body.classList.remove('__className_254d6c', '__variable_254d6c');
    };
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/work/curtin-open-day" component={CurtinOpenDay} />
          <Route path="/work" component={Work} />


        </Switch>
      </div>
    </Router>
  );
}

export default App;
