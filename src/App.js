import React from 'react';
import Home from "./Pages/Home"


class App extends React.Component {

    handler = () =>{
      this.props.getResult();
    }

    render() {
      return (
        <main>
            <h1>swith for navigation to home or game</h1>
            <Home/>
        </main>
      )
    }
  }


  export default App;