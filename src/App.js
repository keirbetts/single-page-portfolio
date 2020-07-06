import React, { Component } from 'react';
// import { Element } from 'react-scroll'
import './App.css';
import Backdrop from './Components/Backdrop.jsx'
import Sidedrawer from './Components/Sidedrawer.jsx'
import Toolbar from './Components/Toolbar.jsx'
import Home from './Components/Home';
import Projects from './Components/Projects';
import Techstack from './Components/Techstack';
import Contact from './Components/Contact';
import Education from './Components/Education'
import Footer from './Components/Footer.jsx';




class App extends Component {

  state = {
    sideDrawerOpen: false

  }



  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }


  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }







  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <Sidedrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Home />
        {/* Projects
        TechStack
        About
        Footer */}
        <section>
          {/* <React.Fragment>
            <Element> */}
          <Projects />
          {/* </Element>
          </React.Fragment> */}
        </section>
        <section>
          <Techstack />
        </section>
        <section>
          <Education />
        </section>
        <section>
          <Contact />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;