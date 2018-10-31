// LIBS
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// COMPONENTES

import Footer from './Footer'
import Home from './Home'
import NovoAnuncio from './NovoAnuncio'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Home} />
          <Route exact path='/novo-anuncio' component={NovoAnuncio} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App