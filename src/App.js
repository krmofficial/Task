import React from 'react';
import './App.css';
import MyTable from './components/MyTable';
import ToDoList from './components/ToDoList';
import table from './components/table';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <React.Fragment>
        <h1 className="text-center font-weight-bold mt-3">Completed Tasks</h1>
        <div className="container mt-5">
            <h2>1. To Do List Application with Two Feature:-</h2>
            <p>* To add a To Do <br />
                * To Display all To Do's
            </p>
          <ToDoList />
        </div>
          <div className="container mt-5">
              <h2>2. Fetching data with Pagination</h2>
              <MyTable />
          </div>

      </React.Fragment>
    );
  }

}

export default App;
