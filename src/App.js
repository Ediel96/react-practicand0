import React, {Component} from 'react';
import './App.css';
import tasks from './sample/tasks.json';


class App extends Component{

  state = {
    tasks:tasks
  }

  render(){

    return <div className="App">
      {this.state.tasks.map(e => 
        <p> {e.title} - {e.description} - {e.done}</p>
        )}
    </div>
    
  }

}

export default App;
