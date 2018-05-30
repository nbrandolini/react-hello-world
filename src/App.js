import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student';

class App extends Component {

  render() {

    const greeting = 'Welcome to React little Kitty!';
    const appClassName = 'App';
    const students = [
      {
        name: 'Mi',
        age: 21,
        email:'mi@ada.edu'
      },
      {
        name: 'Dee',
        age: 21,
        email:'dee@ada.edu'
      },
  ];

  const studentComponents = students.map((student) => {
    return (
      <li key= {student.email}>
      <Student
      studentData={student}
        // name={student.name}
        // email={student.email}
        // age={student.age}
      />
      </li>
    );
  });

    return (
      <div className={appClassName}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{greeting}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {studentComponents}
        </ul>

        <img alt="travel" src={"https://images.unsplash.com/photo-1490481920145-fc78891bbb99?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=03e12dd0d45abebf33214447553b37f2&auto=format&fit=crop&w=800&q=60"}/>
      </div>
    );
  }
}

export default App;
