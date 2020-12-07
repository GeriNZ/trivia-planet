import React from 'react';


class App extends React.Component {

    handler = () =>{
      this.props.getResult();
    }

    render() {
      return (
        <main>
            <h1>swith for navigation to home or game</h1>
        </main>
      )
    }
  }


  export default App;