import { Component } from 'react';
import './App.sass';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(user => this.setState({ monsters: user }))
  }

  render () {
    return (
      <div className='App'>
        {
          this.state.monsters.map(el => <h2 key={el.id}>{el.name}</h2>)
        }
      </div>
    )
  }
}

export default App;