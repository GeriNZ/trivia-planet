import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer } from './layout';
import { Home, Game, Questions } from './pages';
import './App.css'

class App extends React.Component {

    render() {
      return (
        <main>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/game" component={Game} />
            <Route path="/game/questions" component={Questions} />            
          </Switch>
          <Footer />
        </main>
      )
    }
  }


  export default App;